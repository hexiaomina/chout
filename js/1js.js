var ctboxs=document.getElementById('ct1');
var ctbox=ct1.getElementsByClassName('ctbox');
var title=ctboxs.getElementsByClassName('title');
var titleHeight=60;
var contentHeight=470;
for(var i=0;i<title.length;i++){
	title[i].index=i;
	title[i].onclick=function(){
		for(var i=0;i<ctbox.lenght;i++){
			index=this.index;
			if(i<=index){
				ctbox[i].style.top=i*titleHeight+'px';
			}else{
				ctbox[i].style.top=i*titleHeight+contentHeight+'px';
			}
		}
	}
