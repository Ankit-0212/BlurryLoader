const loadText=document.querySelector('.loading-text');
const bg=document.querySelector('.bg');
let load=0;
let inter=setInterval(blurring,50);
function blurring(){
    load++;
    if(load>99)
    {
        clearInterval(inter);
    }
    // console.log(load);
    loadText.innerText=`${load}`;
    loadText.style.opacity=scale(load,0,100,1,0);
    bg.style.filter=`blur(${scale(load,0,100,30,0)}px)`;
}
const scale=(num,imin,imax,omin,omax)=>{
    return ((num-imin)*(omax-omin)/(imax-imin)+omin);
}