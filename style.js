function randomClr(){
    const red = Math.floor(Math.random() *256);
    const blue = Math.floor(Math.random() *256);
    const green = Math.floor(Math.random() *256);
    const clr = `rgb(${red} , ${blue} , ${green})`
    return clr;
}

const btn = document.querySelector("button");
const body = document.body;
const heading = document.querySelector("span");
btn.addEventListener("click" , ()=>{
    const clrr = randomClr();
    body.style.backgroundColor = clrr;
    heading.textContent = clrr;
})


