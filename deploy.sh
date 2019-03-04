ssh identifi 'sh deploy.sh'
cp -r dist/* ../irislib.github.io/
cp -r ../iris-lib/example ../irislib.github.io/
cp -r ../iris-lib/docs ../irislib.github.io/
cd ../irislib.github.io
git commit -a -m '.'
git push origin master
