var mqAry1=['../img/onlinesales-client.png','../img/webonise-client.png','../img/onlinesales-client.png','../img/webonise-client.png','../img/onlinesales-client.png','../img/webonise-client.png','../img/onlinesales-client.png'];
function start() {
   new mq('m1',mqAry1,300);
   mqRotate(mqr);
}
window.onload = start;

var mqr = [];
function mq(id,ary,wid){
	this.mqo=document.getElementById(id);
	var heit =this.mqo.style.height="60";
	 this.mqo.onmouseout=function(){
		mqRotate(mqr);
	};
	 this.mqo.onmouseover=function(){
			clearTimeout(mqr[0].TO);
	};
	this.mqo.ary=[];
	var maxw = ary.length;
	for (var i=0;i<maxw;i++){
		this.mqo.ary[i]=document.createElement('img');
		this.mqo.ary[i].src=ary[i];
		this.mqo.ary[i].style.position ='absolute';
	    this.mqo.ary[i].style.left = (wid*i)+'px';
		this.mqo.ary[i].style.width = wid+'px';
	    this.mqo.ary[i].style.height =heit;
	    this.mqo.appendChild(this.mqo.ary[i]);
	    }
	    mqr.push(this.mqo);
	}
    function mqRotate(mqr){
    	if (!mqr) return;
    	for (var j=mqr.length - 1; j > -1; j--){
    		maxa = mqr[j].ary.length;
    		for (var i=0;i<maxa;i++){
    			var x = mqr[j].ary[i].style;
    		    x.left=(parseInt(x.left,10)-1)+'px';
    		}
    	var y = mqr[j].ary[0].style;
    	if (parseInt(y.left,10)+parseInt(y.width,10)<0){
    		var z = mqr[j].ary.shift();
    		z.style.left = (parseInt(z.style.left) + parseInt(z.style.width)*maxa) + 'px';
    	    mqr[j].ary.push(z);
    	}
    }
    mqr[0].TO=setTimeout('mqRotate(mqr)',10);
}
