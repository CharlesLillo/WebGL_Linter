"use strict";
function RenderableModel(gl,model,light){
	function Drawable(attribLocations, vArrays, nVertices, indexArray, drawMode, diffuse, ambient,specular,shiny){
	  // Create a buffer object
	  var vertexBuffers=[];
	  var nElements=[];
	  var nAttributes = attribLocations.length;

	  for (var i=0; i<nAttributes; i++){
		  if (vArrays[i]){
			  vertexBuffers[i] = gl.createBuffer();
			  if (!vertexBuffers[i]) {
				console.log('Failed to create the buffer object');
				return null;
			  }
			  // Bind the buffer object to an ARRAY_BUFFER target
			  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[i]);
			  // Write date into the buffer object
			  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vArrays[i]), gl.STATIC_DRAW);
			  nElements[i] = vArrays[i].length/nVertices;
		  }
		  else{
			  vertexBuffers[i]=null;
		  }
	  }
	  //hopefully loads correct values
	  
	  gl.uniform4fv(diffLoc, diffuse);
	  gl.uniform1f(shinyLoc,shiny);
	  gl.uniform4fv(specLoc,specular);

	  var indexBuffer=null;
	  if (indexArray){
		indexBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indexArray), gl.STATIC_DRAW);
	  }
	  
	  this.draw = function (){
		for (var i=0; i<nAttributes; i++){
		  if (vertexBuffers[i]){
			  gl.enableVertexAttribArray(attribLocations[i]);
			  // Bind the buffer object to target
			  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[i]);
			  // Assign the buffer object to a_Position variable
			  gl.vertexAttribPointer(attribLocations[i], nElements[i], gl.FLOAT, false, 0, 0);
		  }
		  else{
			  gl.disableVertexAttribArray(attribLocations[i]); 
			  gl.vertexAttrib3f(attribLocations[i],1,1,1);
			  //console.log("Missing "+attribLocations[i])
		  }
		}
		if (indexBuffer){
			gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
			gl.drawElements(gl.TRIANGLES, indexArray.length, gl.UNSIGNED_SHORT, 0);
		}
		else{
			gl.drawArrays(gl.TRIANGLES, 0, nVertices);
		}
	  }
	}
	
	if(light=='omni'){
	var VSHADER_SOURCE = document.getElementById("vertex-render").firstChild.nodeValue;
	var FSHADER_SOURCE = document.getElementById("fragment-render").firstChild.nodeValue;
	}
	else if (light=='spotlight'){
	var VSHADER_SOURCE = document.getElementById("vertex-render-spot").firstChild.nodeValue;
	var FSHADER_SOURCE = document.getElementById("fragment-render-spot").firstChild.nodeValue;	
	}	
	else{
	var VSHADER_SOURCE = document.getElementById("vertex-render-amb").firstChild.nodeValue;
	var FSHADER_SOURCE = document.getElementById("fragment-render-amb").firstChild.nodeValue;		
	}

	var program = createProgram(gl, VSHADER_SOURCE, FSHADER_SOURCE);
	if (!program) {
		console.log('Failed to create program');
		return false;
	}
	gl.useProgram(program);
	//else console.log('Shader Program was successfully created.');
	var a_Position = gl.getAttribLocation(program, 'position');
	var a_Normal = gl.getAttribLocation(program, 'normal');
	var a_Locations = [a_Position,a_Normal];
	//console.log(a_Locations);
	// Get the location/address of the uniform variable inside the shader program.
	var mmLoc = gl.getUniformLocation(program,"modelT");
	var vmLoc = gl.getUniformLocation(program,"viewT");
	var pmLoc = gl.getUniformLocation(program,"projT");
	var diffLoc = gl.getUniformLocation(program,"diffuseReflect");

	if(light=='ambient')
	var ambLoc = gl.getUniformLocation(program,"ambientReflect");

	if (light=="spotlight")
	var spotLoc = gl.getUniformLocation(program,"spot_angle");
	
	var shinyLoc = gl.getUniformLocation(program,"shiny");
	var specLoc = gl.getUniformLocation(program,"specularReflect");
	var itmLoc = gl.getUniformLocation(program,"inverseTransposeModelT");
	
	//var mvpLoc = gl.getUniformLocation(program,"mvpT");
	//alert(diffLoc);

	var drawables=[];
	var modelTransformations=[];
	var nDrawables=0;
	var nNodes = (model.nodes)?model.nodes.length:1;
	var drawMode=(model.drawMode)?gl[model.drawMode]:gl.TRIANGLES;
	//Loop that feeds into shaders
	for (var i= 0; i<nNodes; i++){

		var nMeshes = (model.nodes)?(model.nodes[i].meshIndices.length):(model.meshes.length);
		for (var j=0; j<nMeshes;j++){
			var index = (model.nodes)?model.nodes[i].meshIndices[j]:j;
			var mesh = model.meshes[index];
			var ambient;

			if(light == 'ambient')
				var ambient = model.materials[mesh.materialIndex].ambientReflectance;

			var diffuse = model.materials[mesh.materialIndex].diffuseReflectance;
			var specular = model.materials[mesh.materialIndex].specularReflectance;
			var shiny = model.materials[mesh.materialIndex].shininess;
			//console.log(diffuse);
			drawables[nDrawables] = new Drawable(
				a_Locations,[mesh.vertexPositions, mesh.vertexNormals],
				mesh.vertexPositions.length/3,
				mesh.indices, drawMode, diffuse, ambient, specular, shiny
			);
			var m = new Matrix4();

			if (model.nodes)
				m.elements=new Float32Array(model.nodes[i].modelMatrix);

			modelTransformations[nDrawables] = m;
			nDrawables++;
		}
	}

	// Get the location/address of the vertex attribute inside the shader program.
	this.draw = function (spotAngle,pMatrix,vMatrix,mMatrix)
	{
		gl.useProgram(program);
		gl.uniformMatrix4fv(pmLoc, false, pMatrix.elements);
		gl.uniformMatrix4fv(vmLoc, false, vMatrix.elements);

		if (light=="spotlight"){
			gl.uniform1f(spotLoc, spotAngle);
		}


		for (var i= 0; i<nDrawables; i++){

			gl.uniformMatrix4fv(mmLoc, false, modelTransformations[i].elements);

			var temp2 = new Matrix4(modelTransformations[i]);
			temp2.transpose();
			temp2.invert();
			
			gl.uniformMatrix4fv(itmLoc ,false, temp2.elements);

			// gl.uniformMatrix4fv(iLoc,false, temp3);

			drawables[i].draw();
		}
		gl.useProgram(null);
	}
	this.getBounds=function() // Computes Model bounding box
	{		
		var xmin, xmax, ymin, ymax, zmin, zmax;
		var firstvertex = true;
		var nNodes = (model.nodes)?model.nodes.length:1;
		for (var k=0; k<nNodes; k++){
			var m = new Matrix4();
			if (model.nodes)m.elements=new Float32Array(model.nodes[k].modelMatrix);
			//console.log(model.nodes[k].modelMatrix);
			var nMeshes = (model.nodes)?model.nodes[k].meshIndices.length:model.meshes.length;
			for (var n = 0; n < nMeshes; n++){
				var index = (model.nodes)?model.nodes[k].meshIndices[n]:n;
				var mesh = model.meshes[index];
				for(var i=0;i<mesh.vertexPositions.length; i+=3){
					var vertex = m.multiplyVector4(new Vector4([mesh.vertexPositions[i],mesh.vertexPositions[i+1],mesh.vertexPositions[i+2],1])).elements;
					//if (i==0){
					//	console.log([mesh.vertexPositions[i],mesh.vertexPositions[i+1],mesh.vertexPositions[i+2]]);
					//	console.log([vertex[0], vertex[1], vertex[2]]);
					//}
					if (firstvertex){
						xmin = xmax = vertex[0];
						ymin = ymax = vertex[1];
						zmin = zmax = vertex[2];
						firstvertex = false;
					}
					else{
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
		var dim= {};
		dim.min = [xmin,ymin,zmin];
		dim.max = [xmax,ymax,zmax];
		//console.log(dim);
		return dim;
	}
}

function RenderableWireBoxModel(gl,d){
	var wireModel = new RenderableModel(gl,cubeLineObject);
	var factor = [(d.max[0]-d.min[0])/2,(d.max[1]-d.min[1])/2,(d.max[2]-d.min[2])/2];
	var center = [(d.min[0]+d.max[0])/2,(d.min[1]+d.max[1])/2,(d.min[2]+d.max[2])/2];
	var transformation = new Matrix4().
		translate(center[0], center[1],center[2]).
		scale(factor[0],factor[1],factor[2]);
	this.draw = function(mP,mV,mM){
		wireModel.draw(mP,mV,new Matrix4(mM).multiply(transformation));
	}
}