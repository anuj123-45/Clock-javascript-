
let a,d,h,m,s;
let time;
let date;
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    

a=new Date();


/*for hours*/

if(a.getHours()>=12){
      d="PM";
}
else {
    d="AM";
}

if((a.getHours()>=0 && a.getHours()<=9)){
    h='0'+a.getHours();


}
else{
    h=a.getHours();
}


/*for minutes*/


if((a.getMinutes()>=0 && a.getMinutes()<=9)){
    m='0'+a.getMinutes();


}
else{
    m=a.getMinutes();
}

/*for seconds*/


if((a.getSeconds()>=0 && a.getSeconds()<=9)){
    s='0'+a.getSeconds();


}
else{
    s=a.getSeconds();
}





time=h+':'+m+':'+s+' '+d;
 date=a.toLocaleDateString(undefined,options);
document.getElementById('time').innerHTML=time+" on "+date;
}, 1000);