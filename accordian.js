const arr=document.querySelectorAll(".accordian")

arr.forEach(i =>{
    const icon =i.querySelector(".icon")
    const content=i.querySelector(".content")
    i.addEventListener("click",()=>{
        icon.classList.toggle("iactive")
        content.classList.toggle("cactive")
    
})
})