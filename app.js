const prev = document.querySelectorAll(".prev");
const next = document.querySelectorAll(".next");
const sections = document.querySelectorAll("section");
const sectionOne = document.querySelector(".section-1");
const sectionTwo = document.querySelector(".section-2");

prev.forEach(btn => {
    btn.addEventListener("click", () => {
        if(sectionOne.classList.contains("active")){
            sectionOne.classList.remove("active");
            sectionTwo.classList.add("active");
        }
        else{
            sectionTwo.classList.remove("active");
            sectionOne.classList.add("active")
        }
    })
});

next.forEach(btn => {
    btn.addEventListener("click", () => {
        if(sectionOne.classList.contains("active")){
            sectionOne.classList.remove("active");
            sectionTwo.classList.add("active");
        }
        else{
            sectionTwo.classList.remove("active");
            sectionOne.classList.add("active")
        }
    })
});