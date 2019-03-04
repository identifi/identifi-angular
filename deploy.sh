ssh identifi 'sh deploy.sh'
cp -R dist/* ../irislib.github.io/
cp -R ../iris-lib/example ../irislib.github.io/
cp -R ../iris-lib/docs ../irislib.github.io/
cd ../irislib.github.io
git commit -a -m '.'
git push origin master
