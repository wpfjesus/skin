#!/bin/sh
MOD_NAME="weathercom"

#把需要的文件都copy到相应的目录下
rm -rf output && mkdir output
cp -r static output/
cp -r _locales output/
cp manifest.json output/

#下载fcp代码，开始编译
rm -rf fcp*
svn co https://svn.baidu.com/app/search/space/trunk/fe/build/src/fcp > /dev/null
mv fcp/fcp.tar.gz .
tar zxf fcp.tar.gz > /dev/null
php fcp/index.php $MOD_NAME $USER

#如果有错，则没有产物
if [[ -f "fcp/error.log" ]];then
	rm -rf fcp*
	rm -rf output
	exit 1;
fi
rm -rf fcp*

#删掉svn目录
cd output
find . -type d -name ".svn" | xargs rm -rf
rm -rf static.uncompress
cd ../ && mv output $MOD_NAME && mkdir output && mv $MOD_NAME output

#生成zip包
cd output
zip -r $MOD_NAME.zip $MOD_NAME/ > /dev/null
cd ../
