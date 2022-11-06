const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const sections = document.querySelectorAll("section");
const sectionOne = document.querySelector(".section-1");
const sectionTwo = document.querySelector(".section-2");

previous.addEventListener("click", () => {
    if(sectionOne.classList.contains("active")){
        sections.forEach(function(section){
            section.classList.remove("active");
            sectionTwo.classList.add("active")
        })
    }
});

next.addEventListener(" click", () => {
    if(sectionOne.classList.contains("active")){
        sections.forEach(function(section){
            section.classList.remove("active");
            sectionTwo.classList.add("active")
        })
    }
});