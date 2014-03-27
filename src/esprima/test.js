"use strict";

function RenderableModel(gl, model, light, pathname, currentHDR, currentIrr) {
    function Drawable(attribLocations, vArrays, nVertices, indexArray, drawMode, diffuse, specular, shiny, tex) {
        // Create a buffer object
        var vertexBuffers = [];
        var nElements = [];
        var nAttributes = attribLocations.length;
        this.tex = tex;
        surTex = tex;
        for (var i = 0; i < nAttributes; i++) {
            if (vArrays[i]) {
                vertexBuffers[i] = gl.createBuffer();
                if (!vertexBuffers[i]) {
                    console.log('Failed to create the buffer object');
                    return null;
                }
                // Bind the buffer object to an ARRAY_BUFFER target
                gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[i]);
                // Write date into the buffer object
                gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vArrays[i]), gl.STATIC_DRAW);
                nElements[i] = vArrays[i].length / nVertices;

            } else {
                vertexBuffers[i] = null;
            }
        }
        //hopefully loads correct values
        if (diffuse != null)
            gl.uniform4fv(diffLoc, diffuse);
        if (shiny != null)
            gl.uniform1f(shinyLoc, shiny);
        if (specular != null)
            gl.uniform4fv(specLoc, specular);

        var indexBuffer = null;
        if (indexArray) {
            indexBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indexArray), gl.STATIC_DRAW);
        }


        this.draw = function() {
            for (var i = 0; i < nAttributes; i++) {
                if (vertexBuffers[i]) {
                    gl.enableVertexAttribArray(attribLocations[i]);
                    // Bind the buffer object to target
                    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[i]);
                    // Assign the buffer object to a_Position variable
                    gl.vertexAttribPointer(attribLocations[i], nElements[i], gl.FLOAT, false, 0, 0);

                } else {
                	var position = [1,1,1];
                    gl.disableVertexAttribArray(attribLocations[i]);
                    gl.vertexAttrib3f(attribLocations[i], position);
                    //console.log("Missing "+attribLocations[i])
                }
            }

            if (!probeImg.data.length) {
                console.log("data not ready");
            } else {

                //Just lets user know its rendering
                //$("#loadingTag").html("Loading...");
                if (tex1 == null) {
                    tex1 = createHDRtexture(probeImg);
                    setHDR(tex1);
                    //tex = loadModelTexture();
                }
                if (!map) {
                    map = hdr.convertprobetoThetaPhiMap(probeImg, probeImg.width, probeImg.height);
                    mapTex = createHDRtexture(map);
                    //console.log(map.data);
                    if (!irrMap) {
                        irrMap = [];
                        index = 0;
                        //gets a new normal array
                        for (var y = 0; y < Math.PI; y += Math.PI / 64) {
                            //goes through normal array
                            for (var z = 0; z < 2 * Math.PI; z += Math.PI / 32) {
                                var normArray = [y, z];
                                var itoX = Math.floor(((y / Math.PI) * probeImg.height));
                                var jtoY = Math.floor(((z / (2 * Math.PI)) * probeImg.height));
                                var returnVals = toIrrMap(map.data, normArray);
                                irrMap[index * 3] = returnVals[0];
                                irrMap[index * 3 + 1] = returnVals[1];
                                irrMap[index * 3 + 2] = returnVals[2];
                                index++;
                                //console.log(irrMap);
                            }
                        }

                        //irrMap = scalarMult(irrMap);
                        console.log(irrMap);
                        irrMap = new Float32Array(irrMap);
                        var irrMapObj = new Object();
                        irrMapObj.data = irrMap;
                        irrMapObj.width = Math.sqrt(irrMap.length / 3);
                        irrMapObj.height = Math.sqrt(irrMap.length / 3);
                        irrMapTex = createHDRtexture(irrMapObj);
                        setIrr(irrMapTex);
                        //$("#loadingTag").html("Done!");
                        console.log(irrMapTex);
                    }
                }


                //gl.clear(gl.COLOR_BUFFER_BIT);

                //Sets mirror texture
                gl.activeTexture(gl.TEXTURE0);
                gl.bindTexture(gl.TEXTURE_2D, tex1);
                gl.uniform1i(samplerLoc, 0);

                //Sets surface texture
                gl.activeTexture(gl.TEXTURE1);
                gl.bindTexture(gl.TEXTURE_2D, tex);
                gl.uniform1i(surfaceLoc, 1);

                //Sets irradiance texture
                gl.activeTexture(gl.TEXTURE2);
                gl.bindTexture(gl.TEXTURE_2D, irrMapTex);
                gl.uniform1i(irrLoc, 2);
            }

            if (indexBuffer) {
                gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
                gl.drawElements(drawMode, indexArray.length, gl.UNSIGNED_SHORT, 0);
            } else {
                gl.drawArrays(gl.TRIANGLES, 0, nVertices);
            }
        }
    }

    var VSHADER_SOURCE = document.getElementById("vertex-render").firstChild.nodeValue;
    var FSHADER_SOURCE = document.getElementById("fragment-render").firstChild.nodeValue;

    var program = createProgram(gl, VSHADER_SOURCE, FSHADER_SOURCE);
    if (!program) {
        console.log('Failed to create program');
        return false;
    }
    gl.useProgram(program);
    //else console.log('Shader Program was successfully created.');
    var a_Position = gl.getAttribLocation(program, 'position');
    var a_Normal = gl.getAttribLocation(program, 'normal');
    var a_TexCoord = gl.getAttribLocation(program, 'texCoord');
    var a_Locations = [a_Position, a_Normal, a_TexCoord];
    //console.log(a_Locations);
    // Get the location/address of the uniform variable inside the shader program.
    var mmLoc = gl.getUniformLocation(program, "modelT");
    var vmLoc = gl.getUniformLocation(program, "viewT");
    var pmLoc = gl.getUniformLocation(program, "projT");
    var diffLoc = gl.getUniformLocation(program, "diffuseReflect");

    var samplerLoc = gl.getUniformLocation(program, "tex");
    var mapLoc = gl.getUniformLocation(program, "map");



    if (light == 'ambient')
        var ambLoc = gl.getUniformLocation(program, "ambientReflect");

    var expLoc = gl.getUniformLocation(program, "exposure");
    var shinyLoc = gl.getUniformLocation(program, "shiny");
    var specLoc = gl.getUniformLocation(program, "specularReflect");
    var itmLoc = gl.getUniformLocation(program, "inverseTransposeModelT");
    var eyeLoc = gl.getUniformLocation(program, "eyePos");
    var surfaceLoc = gl.getUniformLocation(program, "surfaceTex");
    var irrLoc = gl.getUniformLocation(program, "irrTex");

    //Float if locations
    var irrSetLoc = gl.getUniformLocation(program, "irr");
    var surfaceSetLoc = gl.getUniformLocation(program, "surface");
    var mirrorSetLoc = gl.getUniformLocation(program, "mirror");

    //var mvpLoc = gl.getUniformLocation(program,"mvpT");
    //alert(diffLoc);

    var drawables = [];
    var modelTransformations = [];
    var nDrawables = 0;
    var nNodes = (model.nodes) ? model.nodes.length : 1;
    var drawMode = (model.drawMode) ? gl[model.drawMode] : gl.TRIANGLES;

    //texture creation
    var hdr = new HDRimage();
    //True == flipped
    var probeImg = hdr.readFile("hdr/stpeters_probe.hdr", false);
    var tex1 = currentHDR;
    var map = null;
    var mapTex = null;
    var irrMap = null;
    var irrMapTex = currentIrr;
    var surTex=null;
    console.log(irrMapTex + " here");

    var imagecount = 0;

    function scalarMult(array) {
        for (var w = 0; w < array.length; w++)
            array[w] = array[w] * (.6 / Math.PI);
        return array;
    }

    function setTexture(gl, textureFileName) {
        var tex = gl.createTexture();
        tex.width = 0;
        tex.height = 0;
        var img = new Image();
        imagecount++;
        img.onload = function() {
            function isPowerOfTwo(x) {
                return (x & (x - 1)) == 0;
            }
            var nPOT = false; // nPOT: notPowerOfTwo
            console.log(textureFileName + " loaded : " + img.width + "x" + img.height);
            tex.complete = img.complete;
            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, tex);
            if (!isPowerOfTwo(img.width) || !isPowerOfTwo(img.height)) nPOT = true;
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
            //void texImage2D(enum target, int level, enum internalformat, enum format, enum type, Object object);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S,  gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T,  gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            if (!nPOT) gl.generateMipmap(gl.TEXTURE_2D);
            gl.bindTexture(gl.TEXTURE_2D, 0);
            tex.width = img.width;
            tex.height = img.height;
            imagecount--;
        };
        img.src = textureFileName;
        return tex;
    }

    function loadModelTexture(modelData) {
        var imageDictionary = {};
        if (modelData.materials) {
            for (i = 0; i < modelData.materials.length; i++) {
                if (modelData.materials[i].diffuseTexture) {
                    var filename = modelData.materials[i].diffuseTexture[0];
                    console.log(filename);
                    if (imageDictionary[filename] === undefined) {
                        imageDictionary[filename] = setTexture(gl, pathname + filename);
                    }
                    modelData.materials[i].diffuseTexObj = imageDictionary[filename];
                }
            }
        }
    }
    //Uncomment this for surface texturing
    loadModelTexture(model);

    function createHDRtexture(img) {

        gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
        var tex = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, tex);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, img.width, img.height, 0, gl.RGB, gl.FLOAT, img.data);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.bindTexture(gl.TEXTURE_2D, null);
        return tex;
    }

    function createtexture(img, width, height) {
        var tex = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, tex);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, width, height, 0, gl.RGB, gl.FLOAT, img);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.bindTexture(gl.TEXTURE_2D, null);
        return tex;
    }

    function toIrrMap(thetaPiMap, normal) {
        var sum_r = 0;
        var sum_g = 0;
        var sum_b = 0;
        var index = 0;
        var thetainc = Math.PI / 64;
        var phiinc = Math.PI / 32;
        for (var i = 0; i < Math.PI; i += thetainc) {
            for (var j = 0; j < 2 * Math.PI; j += phiinc) {
                var vecNormal = new Vector3([Math.sin(normal[0]) * Math.cos(normal[1]), Math.sin(normal[0]) * Math.sin(normal[1]), Math.cos(normal[0])]);
                var itoX = Math.floor(((i / Math.PI) * probeImg.width));
                var jtoY = Math.floor(((j / (2 * Math.PI)) * probeImg.height));
                var index = (itoX * probeImg.width + jtoY) * 3;
                var dir_in = new Vector3([Math.sin(i) * Math.cos(j), Math.sin(i) * Math.sin(j), Math.cos(i)]);
                var math = Math.max(dotVec3(dir_in.normalize().elements, vecNormal.normalize().elements), 0.0) *
                    Math.sin(i);

                sum_r += thetaPiMap[index] * math;
                sum_g += thetaPiMap[index + 1] * math;
                sum_b += thetaPiMap[index + 2] * math;

            }

        }
        var finalsum = [sum_r * thetainc * phiinc, sum_g * thetainc * phiinc, sum_b * thetainc * phiinc];
        //console.log("SUM IS " + finalsum);
        return finalsum;
    }

    function dotVec3(vec1, vec2) {
        var mag = vec1[0] * vec2[0] + vec1[1] * vec2[1] + vec1[2] * vec2[2];
        return mag;
    }
    //Loop that feeds into shaders
    for (var i = 0; i < nNodes; i++) {

        var nMeshes = (model.nodes) ? (model.nodes[i].meshIndices.length) : (model.meshes.length);
        for (var j = 0; j < nMeshes; j++) {
            var index = (model.nodes) ? model.nodes[i].meshIndices[j] : j;
            var mesh = model.meshes[index];
            //For material quantity objects
            if (model.name != 'cat') {
                var diffuse = model.materials[mesh.materialIndex].diffuseReflectance;
                var specular = model.materials[mesh.materialIndex].specularReflectance;
                var shiny = model.materials[mesh.materialIndex].shininess;

                if (mesh.vertexTexCoordinates) {
                    drawables[nDrawables] = new Drawable(
                        a_Locations, [mesh.vertexPositions, mesh.vertexNormals, mesh.vertexTexCoordinates[0]],
                        mesh.vertexPositions.length / 3,
                        mesh.indices, drawMode, diffuse, specular, shiny, model.materials[mesh.materialIndex].diffuseTexObj
                    );
                } else {
                    drawables[nDrawables] = new Drawable(
                        a_Locations, [mesh.vertexPositions, mesh.vertexNormals],
                        mesh.vertexPositions.length / 3,
                        mesh.indices, drawMode, diffuse, specular, shiny
                    );
                }
                var m = new Matrix4();

                if (model.nodes)
                    m.elements = new Float32Array(model.nodes[i].modelMatrix);

                modelTransformations[nDrawables] = m;
                nDrawables++;

            }
            //For non material quantity objects
            else {
                var index = (model.nodes) ? model.nodes[i].meshIndices[j] : j;
                var mesh = model.meshes[index];
                drawables[nDrawables] = new Drawable(
                    a_Locations, [mesh.vertexPositions, mesh.vertexNormals],
                    mesh.vertexPositions.length / 3,
                    mesh.indices, drawMode
                );

                var m = new Matrix4();
                if (model.nodes) m.elements = new Float32Array(model.nodes[i].modelMatrix);
                modelTransformations[nDrawables] = m;

                nDrawables++;
            }
        }
    }

    // Get the location/address of the vertex attribute inside the shader program.
    this.draw = function(setM, setS, setI, irr, eye, exposure, pMatrix, vMatrix, mMatrix) {
        eye = [eye[0], eye[1], eye[2]];
        gl.useProgram(program);
        gl.uniformMatrix4fv(pmLoc, false, pMatrix.elements);
        gl.uniformMatrix4fv(vmLoc, false, vMatrix.elements);
        gl.uniform3fv(eyeLoc, eye);
        if (irrMap != null && setI == 1.0) {
            console.log("ran");
            gl.activeTexture(gl.TEXTURE2);
            gl.bindTexture(gl.TEXTURE_2D, irrMapTex);
            gl.uniform1i(irrLoc, 2);
        } else if (irr != null) {
            currentIrr = irr;
            irrMap = irr;
        }

        if (setM == 1.0) {
            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, tex1);
            gl.uniform1i(samplerLoc, 0);
        }

        if (setS == 1.0) {
            gl.activeTexture(gl.TEXTURE1);
            gl.bindTexture(gl.TEXTURE_2D, surTex);
            gl.uniform1i(surfaceLoc, 1);
        }


        gl.uniform1f(expLoc, exposure);

        //Loads set values
        gl.uniform1f(irrSetLoc, setI);
        gl.uniform1f(surfaceSetLoc, setS);
        gl.uniform1f(mirrorSetLoc, setM);


        for (var i = 0; i < nDrawables; i++) {

            gl.uniformMatrix4fv(mmLoc, false, modelTransformations[i]);

            var temp2 = new Matrix4(modelTransformations[i]);
            temp2.transpose();
            temp2.invert();

            gl.uniformMatrix4fv(itmLoc, false, temp2.elements);

            // gl.uniformMatrix4fv(iLoc,false, temp3);

            drawables[i].draw();
        }
        gl.useProgram(null);
    }
    this.getBounds = function() // Computes Model bounding box
    {
        var xmin, xmax, ymin, ymax, zmin, zmax;
        var firstvertex = true;
        var nNodes = (model.nodes) ? model.nodes.length : 1;
        for (var k = 0; k < nNodes; k++) {
            var m = new Matrix4();
            if (model.nodes) m.elements = new Float32Array(model.nodes[k].modelMatrix);
            //console.log(model.nodes[k].modelMatrix);
            var nMeshes = (model.nodes) ? model.nodes[k].meshIndices.length : model.meshes.length;
            for (var n = 0; n < nMeshes; n++) {
                var index = (model.nodes) ? model.nodes[k].meshIndices[n] : n;
                var mesh = model.meshes[index];
                for (var i = 0; i < mesh.vertexPositions.length; i += 3) {
                    var vertex = m.multiplyVector4(new Vector4([mesh.vertexPositions[i], mesh.vertexPositions[i + 1], mesh.vertexPositions[i + 2], 1])).elements;
                    //if (i==0){
                    //  console.log([mesh.vertexPositions[i],mesh.vertexPositions[i+1],mesh.vertexPositions[i+2]]);
                    //  console.log([vertex[0], vertex[1], vertex[2]]);
                    //}
                    if (firstvertex) {
                        xmin = xmax = vertex[0];
                        ymin = ymax = vertex[1];
                        zmin = zmax = vertex[2];
                        firstvertex = false;
                    } else {
                        if (vertex[0] < xmin) xmin = vertex[0];
                        else if (vertex[0] > xmax) xmax = vertex[0];
                        if (vertex[1] < ymin) ymin = vertex[1];
                        else if (vertex[1] > ymax) ymax = vertex[1];
                        if (vertex[2] < zmin) zmin = vertex[2];
                        else if (vertex[2] > zmax) zmax = vertex[2];
                    }
                }
            }
        }
        var dim = {};
        dim.min = [xmin, ymin, zmin];
        dim.max = [xmax, ymax, zmax];
        //console.log(dim);
        return dim;
    }
}

function RenderableWireBoxModel(gl, d) {
    var wireModel = new RenderableModel(gl, cubeLineObject);
    var factor = [(d.max[0] - d.min[0]) / 2, (d.max[1] - d.min[1]) / 2, (d.max[2] - d.min[2]) / 2];
    var center = [(d.min[0] + d.max[0]) / 2, (d.min[1] + d.max[1]) / 2, (d.min[2] + d.max[2]) / 2];
    var transformation = new Matrix4().
    translate(center[0], center[1], center[2]).
    scale(factor[0], factor[1], factor[2]);
    this.draw = function(mP, mV, mM) {
        wireModel.draw(mP, mV, new Matrix4(mM).multiply(transformation));
    }
}
