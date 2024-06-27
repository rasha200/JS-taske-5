//taske 1
let bb = document.getElementById('but');
bb.addEventListener('click', function (){
    alert("Button clicked!")
});


//taske 2
let boot = document.getElementById('buttom');
boot.addEventListener('click',function(){
   let hii = document.getElementById('pp')
   hii.textContent = "ggggggg"
})


//taske 3
let divv = document.getElementById('diiv');
divv.addEventListener('dblclick',function(){
   divv.style.backgroundColor='red';
});


//taske 4
let red = document.getElementById('mou');
red.addEventListener('mouseenter', function(){
    red.textContent = 'the text changed';
});


//taske 5
red.addEventListener('mouseleave',function(){
    red.textContent = 'the text will change when the mouse enters it';
});


//taske 6
let subm = document.getElementById('in');
subm.addEventListener('submit',function(event){
    event.preventDefault();//مشان امنع ارسال النموذج
  console.log('Form not submitted')
});
//??????????????????????????????????????????????راجعييي 


//taske 7
let ff = document.getElementById('taske7');
ff.addEventListener('focus',function(){
    ff.style.border = '4px solid green';
});


//taske 8
ff.addEventListener('blur',function(){
    ff.style.border = ' 1px solid black';
});



//taske 9
let kk = document.getElementById('key');
kk.addEventListener('keydown',function(event){
  console.log(event.key);
});


//taske 10
let cll = document.getElementById('kiki');
cll.addEventListener('click',function(){
    cll.classList.toggle('hi');
});


// //taske 11
// let mul = document.getElementById('lili');
// mul.addEventListener('submit',function(){
    
// })