ssh identifi 'sh deploy.sh'
cp -r dist/* ../irislib.github.io/
cd ../irislib.github.io
git commit -a -m '.'
git push origin master
