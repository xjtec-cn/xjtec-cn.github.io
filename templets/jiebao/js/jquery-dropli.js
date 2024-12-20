$(document).ready(function() { 
$("#nav").superfish({ 
delay:       500,                             
animation:   {opacity:'show',height:'show'},  
speed:       'fast',                          
autoArrows:  false,                           
dropShadows: false                           
}); 
});
var nav=document.getElementById("nav");
if(nav !=null)
{
var lis=nav.getElementsByTagName("strong");
for(var i=0;i<lis.length;i++)
{
	   if(i==0)
	   {
		lis[0].className="index";
	   }
	   if(window.location.href.indexOf(lis[i].parentNode.className) >-1)
		{
			lis[0].className="";   
			lis[i].className="index";
		}
	   else if(window.location.href.indexOf("/alzsMore/") >-1 )
	   { 
		 lis[0].className="";   
		 lis[i].className="index";
	  }
}
}