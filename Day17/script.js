const redBtn=document.getElementById('redBtn');
const blueBtn=document.getElementById('blueBtn');
const pinkBtn=document.getElementById('pinkBtn');
const lavenderBtn=document.getElementById('lavenderBtn');
const yellowBtn=document.getElementById('yellowBtn');

redBtn.addEventListener('click',function(){
    document.body.style.backgroundColor='red';
});
pinkBtn.addEventListener('click',function(){
    document.body.style.backgroundColor="pink";
});
lavenderBtn.addEventListener('click',function(){
    document.body.style.backgroundColor="lavender";
});
blueBtn.addEventListener('click',function(){
    document.body.style.backgroundColor="blue";
});
yellowBtn.addEventListener('click',function(){
    document.body.style.backgroundColor="yellow";
});
