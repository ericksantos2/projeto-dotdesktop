#!/bin/bash
# HERE="$(dirname "$(readlink -f "${0}")")"

mv ./.next/static ./.next/standalone/.next/
mkdir DotDesktop.AppDir; cd DotDesktop.AppDir
touch icon.png
mkdir bin; cd bin; cp "$(which node)" ./; cd ..
mkdir app; cp -r ../.next ./app/
cp -r ../example/* ./
cd ../
./appimagetool-x86_64.AppImage ./DotDesktop.AppDir
rm -rf ./DotDesktop.AppDir