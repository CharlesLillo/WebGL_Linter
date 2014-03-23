#!/bin/bash

#this script will checkout google-caja in the current directory

#begin standard best practices heading
set -o xtrace
set -o errexit
set -o nounset

__DIR__="$(cd "$(dirname "${0}")"; echo $(pwd))"
__BASE__="$(basename "${0}")"
__FILE__="${__DIR__}/${__BASE__}"
#end standard best practices heading

svn checkout http://google-caja.googlecode.com/svn/trunk/ google-caja-read-only