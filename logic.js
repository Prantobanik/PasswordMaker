const pass = document.getElementById("pass");
const copy = document.getElementById("copy");
const length=document.getElementById("length");
const upper=document.getElementById("upper");
const lower=document.getElementById("lower");
const number=document.getElementById("number");
const symbol=document.getElementById("symbol");
const generate = document.getElementById("generate");

const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+";

function getLowerCase() {
    return lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
}
function getUpperCase() {
    return upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
}
function getSymbols() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}
function getNumbers() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}


function makePassword() {
    const len = length.value;
    let password = "";
     if (upper.checked) {
       password += getUpperCase();
     }

     if (lower.checked) {
       password += getLowerCase();
     }

     if (number.checked) {
       password += getNumbers();
     }

     if (symbol.checked) {
       password += getSymbols();
     }





    for (let index =password.length; index < len; index++) {
        const plFunc = passwordLogic();
        password += plFunc;
        
    }
    pass.innerText = password;
}
function passwordLogic() {
    const pL = [];
    if (upper.checked) {
        pL.push(getUpperCase());
    }
    else if (lower.checked) {
         pL.push(getLowerCase());
    }
    else if (symbol.checked) {
         pL.push(getSymbols());
    }
    else if (number.checked) {
        pL.push(getNumbers());
    }
    else if (pL.length === 0) {
        return "";
    }
    return pL[Math.floor(Math.random() * pL.length)];
}



generate.addEventListener("click", makePassword);

copy.addEventListener("click",() => {
    const textarea = document.createElement("textarea");
    const password = pass.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");
});


