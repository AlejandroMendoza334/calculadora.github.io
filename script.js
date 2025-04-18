const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
    item.onclick=()=>{
    if(item.id == "clear"){
        display.innerText = "";
    } else if(item.id == "backspace") {
        let string = display.innerText.toString();
        display.innerText = string.substr(0, string.length - 1);
    } else if(display.innerText != "" && item.id == "equal") {
        display.innerText = eval(display.innerText);
    } else if(display.innerText == "" && item.id == "equal") {
        display.innerText = "None";
        setTimeout(() => (display.innerText = ""), 2000);
        } else {
            const operadores = ["+", "-", "*", "/"];
            const ultimoCaracter = display.innerText.slice(-1);
            if(operadores.includes(item.id) && operadores.includes(ultimoCaracter)) {
                return;
            }
            display.innerText += item.id;
        }
    };
});


