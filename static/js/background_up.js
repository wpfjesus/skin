var BAIDU=BAIDU||{};BAIDU.IMAGEDATA=BAIDU.IMAGEDATA||{},BAIDU.IMAGEDATA=function(){function c(e,t){if(!e)return;n=t,h()&&(f=h().split(a).slice(0));if(f.indexOf(e)>-1)return;t||(f.length>=u&&f.pop(),f.unshift(e),localStorage.BAIDU_WEATHER_BG_FILENAMES=f.join(a))}function h(){return localStorage.BAIDU_WEATHER_BG_FILENAMES}function p(t){e.src="",l=[],chrome.tabs.query({title:"\u767e\u5ea6\u4e00\u4e0b\uff0c\u4f60\u5c31\u77e5\u9053"},function(n){$.each(n,function(e,t){l.push(t.id)}),t?(r=t,e.src=t):$.each(l,function(e,t){chrome.tabs.sendMessage(t,{shadowflag:i,imgurl:"",filenames:h()})})})}function d(e,t,n){var r=[];for(var i=0;i<n;i++){r[i]=[];for(var s=0;s<t;s++){var o=(i*t+s)*4;r[i][s]=[e[0+o],e[1+o],e[2+o],e[3+o]]}}return r}function v(e,t,n){var r=t/2-s/2;r=r>0?r:0;var i=t/2+s/2;i=i>t?t:i;var u=0,a=o,f=0,l=0,c=0;for(var h=u;h<a;h++)for(var p=r;p<i;p++)f+=e[h][p][0],l+=e[h][p][1],c+=e[h][p][2];var d=(a-u)*(i-r),v=[Math.floor(f/d),Math.floor(l/d),Math.floor(c/d)],m=g(v[0],v[1],v[2]);return m.B<.6?!0:m.S>.15?!0:!1}function m(e,t,n){var r="",i,s;e&&(s=e.isfirstinit==="false"||localStorage.BAIDU_WEATHER_CUR_BG_IS_DEFAULT==="true",e.imgurl&&(localStorage.BAIDU_WEATHER_CUR_BG_FILENAME=e.imgurl,i="has",localStorage.BAIDU_WEATHER_CUR_BG_IS_DEFAULT="false",s=!1),e.defaultimg&&(localStorage.BAIDU_WEATHER_CUR_BG_DEFAULT_FILENAME=e.defaultimg,i="has",s&&(localStorage.BAIDU_WEATHER_CUR_BG_IS_DEFAULT="true",s=!0)),e.isfirstinit==="true"&&(r=localStorage.BAIDU_WEATHER_CUR_BG_FILENAME),e.clear=="true"&&(i="none",localStorage.BAIDU_WEATHER_CUR_BG_IS_DEFAULT="false",localStorage.BAIDU_WEATHER_CUR_BG_FILENAME="")),i==="has"&&(s?r=e.defaultimg||localStorage.BAIDU_WEATHER_CUR_BG_DEFAULT_FILENAME:r=e.imgurl||localStorage.BAIDU_WEATHER_CUR_BG_FILENAME),c(r,s),p(r),n({imgurl:r,filenames:h()})}function g(e,t,n){var r=Math.min(Math.min(e,t),n),i=Math.max(Math.max(e,t),n),s={H:0,S:0,B:0};r==i?s.H=0:i==e&&t>=n?s.H=60*((t-n)/(i-r)):i==e&&t<n?s.H=60*((t-n)/(i-r))+360:i==t?s.H=60*((n-e)/(i-r))+120:i==n&&(s.H=60*((e-t)/(i-r))+240),i==0?s.S=0:s.S=1-r/i;var o=e/255,u=t/255,a=n/255;return s.B=Math.max(Math.max(o,u),a),s.H=s.H>=360?0:s.H,s}var e=new Image,t,n,r,i=!1,s=720,o=220,u=4,a="@",f=[],l=[];return e.onload=function(){var t,s=e.width,o=e.height,u=$('<canvas width="'+s+'" height="'+o+'">')[0].getContext("2d");try{u.drawImage(e,0,0);var a=u.getImageData(0,0,s,o),f=d(a.data,s,o);i=v(f,s,o)}catch(c){console.log(c)}$.each(l,function(e,t){chrome.tabs.sendMessage(t,{shadowflag:i,imgurl:r,filenames:h(),isdefaultflag:n})})},{init:p,messageHandler:m}}(),chrome.extension.onMessage.addListener(BAIDU.IMAGEDATA.messageHandler);