#!/bin/bash

#begin standard best practices heading
if [[ $UID -ne 0 ]]; then
    echo "$0 must be run as root"
    exit 1
fi

if [ -e "/.setup-complete"]
	then
	echo "Setup has already ran to completion"
	echo "Exiting..."
	exit 1
fi

set -o xtrace
set -o errexit
set -o nounset

__DIR__="$(cd "$(dirname "${0}")"; echo $(pwd))"
__BASE__="$(basename "${0}")"
__FILE__="${__DIR__}/${__BASE__}"
#end standard best practices heading

apt-get update
apt-get -y install openjdk-7-jdk subversion ant git

touch /.setup-complete

echo "If you get an unsupported major minor version 51.0 error, run \"sudo update alternatives --java\" and choose openjdk-7-jdk"