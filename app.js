let ul = document.querySelector('ul');
let inp = document.querySelector('input');
let btn = document.querySelector('button');
btn.addEventListener('click',function(){
    let li = document.createElement('li');
    li.innerText=inp.value;

   let dbtn = document.createElement("button");
   dbtn.classList.add('del');
   dbtn.innerText='Delete';


// dbtn.addEventListener("click",function(){
//     console.log(dbtn.parentElement.remove());
    
// })

   li.appendChild(dbtn);
    ul.appendChild(li);
    inp.value='';

});

ul.addEventListener('click',function(event){
    console.dir(event.target.nodeName);
    if(event.target.nodeName=='BUTTON'){
        event.target.parentElement.remove();
       
    }
})
