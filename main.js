const buttonsEl = document.querySelectorAll('button')

for(let i = 0; i < buttonsEl.length; i++){
       buttonsEl[i].addEventListener("click", ()=>{
        const buttonValue = buttonsEl[i].textContent;
        if(buttonValue === "C"){
            input.value = "";
        }else if(buttonValue === "="){
            input.value = eval(input.value)
        }else{
            input.value += buttonValue
        }
       })
}