const navLinks=document.querySelectorAll("header nav a")
const logoLink=document.querySelector('.logo')
const sections=document.querySelectorAll("section")
const menuIcon=document.querySelector("#menu-icon")
const navbar=document.querySelector("header nav")


menuIcon.addEventListener("click",()=>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle("active");
})


const activePage=()=>{
    navLinks.forEach(link=>{
        link.classList.remove('active');
    })

  sections.forEach(section=>{
    section.classList.remove('active')
});
 

 menuIcon.classList.remove('bx-x')
    navbar.classList.remove("active");

}





navLinks.forEach((link,idx)=>{
    link.addEventListener("click",()=>{
      if(!link.classList.contains('active'))
            {
                activePage();
                link.classList.add('active')
                 setTimeout(() => {
                    sections[idx].classList.add('active');
                 }, 100);
            }
    }) 
})





logoLink.addEventListener("click",()=>{
    if(!navLinks[0].classList.contains('active')){
        activePage();
        navLinks[0].classList.add("active");
         

        setTimeout(() => {
             sections[0].classList.add('active');
        },100);

    }
})








const resumeBtns=document.querySelectorAll(".resume-btn")
resumeBtns.forEach((btn,idx)=>{
     btn.addEventListener('click',()=>{
       
        const resumeDetails=document.querySelectorAll(".resume-detail")
        resumeBtns.forEach(btn=>{
            btn.classList.remove("active")
        });
        btn.classList.add("active");

        resumeDetails.forEach(detail=>{
        detail.classList.remove("active");
        });
        resumeDetails[idx].classList.add('active')
     })
})


const arrowRight = document.querySelector(".portfolio-box .navigation .arrow-right");
const arrowLeft = document.querySelector(".portfolio-box .navigation .arrow-left");
const imgSlide = document.querySelector(".portfolio-carousel .img-slide");
const slides = document.querySelectorAll(".portfolio-carousel .img-item");

let index = 0;

const updateCarousel = () => {
    imgSlide.style.transform = `translateX(-${index * 100}%)`;
   const portfolioDetails=document.querySelectorAll('.portfolio-detail');
    // Toggle disabled classes
    arrowLeft.classList.toggle('disabled', index === 0);
    arrowRight.classList.toggle('disabled', index === slides.length - 1);
    portfolioDetails.forEach(detail=>{
        detail.classList.remove('active');
    })
    portfolioDetails[index].classList.add('active')
};

// Right arrow
arrowRight.addEventListener('click', () => {
    if (index < slides.length - 1) {
        index++;
        updateCarousel();
    }
});

// Left arrow
arrowLeft.addEventListener('click', () => {
    if (index > 0) {
        index--;
        updateCarousel();
    }
});

// Initialize
updateCarousel();
