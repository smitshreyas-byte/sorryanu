function startStory(){

document.body.style.transition="opacity 1s ease";

document.body.style.opacity="0";


setTimeout(()=>{

window.scrollTo({
top:window.innerHeight,
behavior:"smooth"
});


document.body.style.opacity="1";


},800);


}
