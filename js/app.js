const formula = document.querySelector("#formula");
const result = document.querySelector("#result");
const inputBtn = document.querySelectorAll(".input");
const equal = document.querySelector("#equal");
const clearBtn = document.querySelector("#clr");
let expression ;
const regex1=/\+|\-|\*|\//;
const regex2 = /[0-9]/;

inputBtn.forEach(btn=>{
  btn.addEventListener('click', (e)=>{
      formula.textContent = formula.textContent + e.target.textContent;
    });
});

equal.addEventListener('click', (e)=>{
  expression = formula.textContent;
  let variables = expression.split(regex1).map((val) => {return parseInt(val)});
  console.log(variables);
  let operators = expression.split('').filter((el)=>{
    if(el === '+'|el ==='-'|el === '/'|el ==='*')
    {
      return el;
    }
  });
  console.log(operators);
  operation(operators, variables);
  });


const clearValue = function(){
  formula.textContent = '';
  result.textContent = '';
}
clearBtn.addEventListener('click', clearValue);


const operation = function(op,vals){
  let answer;
  


  for(i=0; i<op.length; i++){
    console.log(op[i]);
    if(op[i]==='+'){
      answer = add(vals[i],vals[i+1]);
      console.log(answer);
  //     result.textContent =answer;
      vals[i+1] = answer;

    }
    if(op[i]==='-'){
      answer = subtract(vals[i],vals[i+1]);
      console.log(answer);
      vals[i+1] =answer;
  //     result.textContent =answer;
    }
    if(op[i]==='*'){
      answer = multiply(vals[i],vals[i+1]);
      vals[i+1] =answer;
      console.log(answer);
      // result.textContent =answer;
    }
    if(op[i]==='/'){
      answer = divide(vals[i],vals[i+1]);
      vals[i+1] =answer;
      console.log(answer);
      // result.textContent =answer;
    }
    
  }
  result.textContent = answer;

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

