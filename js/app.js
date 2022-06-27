const formula = document.querySelector("#formula");
const result = document.querySelector("#result");
const inputBtn = document.querySelectorAll(".input");
const equal = document.querySelector("#equal");
const clearBtn = document.querySelector("#clr");
let expression ;
const regex=/\+|\-|\*|\//

inputBtn.forEach(btn=>{
  btn.addEventListener('click', (e)=>{
      formula.textContent = formula.textContent + e.target.textContent;
    });
});

equal.addEventListener('click', (e)=>{
  expression = formula.textContent;
  let [var1, var2] = expression.split(regex);
  console.log(var1, var2);
  let [operator] = expression.match(regex);
  console.log(operator);
  operation(operator, var1, var2);
  });
const clearValue = function(){
  formula.textContent = '';
  result.textContent = '';
}
clearBtn.addEventListener('click', clearValue);
const operation = function(op, a , b){
  let answer;
  const var1 = parseInt(a);
  const var2 = parseInt(b);
  if(op==='+'){
    answer = add(var1,var2);
    result.textContent =answer;
  }
  if(op==='-'){
    answer = subtract(var1,var2);
    result.textContent =answer;
  }
  if(op==='*'){
    answer = multiply(var1,var2);
    result.textContent =answer;
  }
  if(op==='/'){
    answer = divide(var1,var2);
    result.textContent =answer;
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

