const previous = document.querySelector("#previous");
const current = document.querySelector("#current");
const inputBtn = document.querySelectorAll(".num");
const operationBtn = document.querySelectorAll(".operation")
const equal = document.querySelector("#equal");
const clearBtn = document.querySelector("#clr");
const deleteBtn =document.querySelector('#del');

let previousVal ='';
let currentVal = '';
let op = '';
inputBtn.forEach(btn=>{
  btn.addEventListener('click', (e)=>{
      currentVal += e.target.textContent;
      // console.log(currentVal);
      current.textContent = currentVal;
    });
});
operationBtn.forEach(btn =>{
  btn.addEventListener('click', (e)=>{
    op = e.target.textContent;
    // console.log(op);
    // console.log(currentVal);
    previousVal = currentVal;
    previous.textContent = previousVal+op;
    current.textContent ='';
    currentVal = '';

  })
})

equal.addEventListener('click', (e)=>{
  let answer;
  currentVal = parseFloat(currentVal);
  previousVal = parseFloat(previousVal);
  answer = operation(previousVal,currentVal,op);
  currentVal = answer;
  previousVal = '';
  current.textContent= currentVal;
  previous.textContent =previousVal;
  });



const operation = function(previousVal, currentVal, op){
 
    if(op==='+'){
      answer = add(previousVal,currentVal);
     return answer;
     
      
    }else
    if(op==='-'){
      answer = subtract(previousVal,currentVal);
      return answer;
      
    }else
    if(op==='*'){
      answer = multiply(previousVal,currentVal);
      return answer;
      
    }
    if(op==='/'){
      answer = divide(previousVal,currentVal);
      return answer;
      
    }
    
  }

const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const divide = function(a, b) {
  
  return a/b;
};

const multiply = function(a,b) {

return a*b;
};

clearBtn.addEventListener('click', ()=>{
  currentVal='';
  previousVal='';
  current.textContent= currentVal;
  previous.textContent =previousVal;
});

deleteBtn.addEventListener('click', ()=>{
  currentVal = currentVal.slice(0, -1);
  current.textContent = currentVal;
})