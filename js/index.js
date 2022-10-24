'use strict';
let count=0;
// Code for increment the count... 

document.querySelector('.increment').addEventListener('click',function(){
    count++;
    document.querySelector('#count').textContent=count;
})

//code for decrement the count....

document.querySelector('.decrement').addEventListener('click',function(){
    if(count>0){
        count--;
    document.querySelector('#count').textContent=count; 
    }
})

//code for reset the count...

document.querySelector('.reset').addEventListener('click',function(){
    if(count>0){
        count=0;
        document.querySelector('#count').textContent=count;
    }
})