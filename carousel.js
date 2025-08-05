let clicks = document.querySelectorAll("img.click")
let display = document.querySelector("img#display")
console.log(display);
clicks.forEach((click)=>{
    click.addEventListener("click",()=>{
         let source  = click.getAttribute("src")
        localStorage.setItem("src", source)
        let sourced = localStorage.getItem("src", source)
        console.log(sourced);
        display.setAttribute("src", sourced)
    })
})