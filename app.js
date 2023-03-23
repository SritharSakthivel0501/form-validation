let helli = document.getElementById("name");
// console.log(name);
let passwords = document.getElementById("passwords");
// console.log(passwords);
let btn = document.querySelector("form")
// console.log(btn);
let h3 = document.querySelector("h3")
// console.log(h3);

btn.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(helli.value !== "" && passwords.value !== ""){
    }
    else{
        h3.innerText ="please enter value"
    }
})