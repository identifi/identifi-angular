ssh identifi 'sh deploy.sh'
cp -R dist/* ~/src/irislib.github.io/
cp -R ~/src/iris-lib/example ~/src/irislib.github.io/
cp -R ~/src/iris-lib/docs ~/src/irislib.github.io/
cd ~/src/irislib.github.io
git commit -a -m '.'
git push origin master
git push identifi master
