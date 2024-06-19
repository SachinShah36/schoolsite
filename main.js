window.addEventListener("scroll", () => {
    let nav = document.querySelector('.navbar')
    nav.classList.toggle('scroll', window.scrollY > 0)
})

// NAVBAR------------------------------------------------
let ul = document.getElementById("ul")
let hamburger = document.getElementById("hamburger")
let close = document.getElementById("close")
console.log(ul.style.display)

hamburger.addEventListener("click",()=>{
    
    hamburger.style.display = "none"
    close.style.display = "block"
    ul.style.display = "block"
    
})
close.addEventListener("click",()=>{
    
    close.style.display = "none"
    hamburger.style.display = "block"
    ul.style.display = "none"
})




// -------------------FAQ------------------
let faq_option = document.querySelectorAll(".faq__option")
let faq_answer = document.querySelectorAll(".faq_answer")

faq_option.forEach((e) => {
    e.addEventListener("click", () => {
        e.classList.toggle("open")

        let icon1 = e.querySelector(".plus")
        let icon2 = e.querySelector(".minus")

        console.log(icon1)
        console.log(icon2)

        if (icon1.className === "plus") {
            icon1.classList.toggle("hide")
            icon2.style.display = "block"
        }
        else {
            icon1.classList.toggle("hide")
            icon2.style.display = "none"
        }


    })

})




// HIDING THE PARA------------------------------------------------
let course_para = document.querySelectorAll(".course-para")
let coursebtn = document.querySelectorAll(".coursebtn")
console.log(coursebtn)

coursebtn.forEach((e) => {
    e.addEventListener("click", () => {
        console.log("hii")
        if (screen.width <= 990) {
            if (e.previousElementSibling.style.display == "block") {
                e.previousElementSibling.style.display = "none"
            } else {
                e.previousElementSibling.style.display = "block"
            }
        }

    })
})




// DECREASING THE WORD SIZE------------------------------------------
let para = document.querySelectorAll(".testi_para")
if(screen.width <= 800){
    para.forEach((e)=>{
        e.innerHTML = e.innerHTML.substring(0,100)

    })
}

// ENLARGING THE PHOTOS
let photos = document.querySelectorAll(".testimonial")
photos.forEach((e)=>{
    e.addEventListener("click",()=>{
        console.log("hii")
        e.style.transform = "scale(2)"
    })
})