const formula = document.querySelector("#formula");
const result = document.querySelector("#result");
const inputBtn = document.querySelectorAll(".input");

let var1;
let var2;


inputBtn.forEach(btn=>{
    btn.addEventListener('click', (e)=>{
        formula.textContent = formula.textContent + e.target.textContent;
        var1 = e.target.textContent;
      });
});