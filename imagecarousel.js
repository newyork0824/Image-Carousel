Slides = document.getElementsByClassName("carousel-items")
prevBtn = document.getElementById("prev-btn")
nextBtn = document.getElementById("next-btn")
slideOneBtn = document.getElementById("slide-one-btn")
slideTwoBtn = document.getElementById("slide-two-btn")
slideThreeBtn = document.getElementById("slide-three-btn")
slideFourBtn = document.getElementById("slide-four-btn")

const totalSlides = Slides.length
let Slidecounter = 0


prevBtn.addEventListener("click", moveToPrevSlide)
nextBtn.addEventListener("click", moveToNextSlide)
slideOneBtn.addEventListener("click", moveToSlideOne)
slideTwoBtn.addEventListener("click", moveToSlideTwo)
slideThreeBtn.addEventListener("click", moveToSlideThree)
slideFourBtn.addEventListener("click", moveToSlideFour)

function hideAllSlides(){
  for(let i =0; i<Slides.length; i++) {
    Slides[i].classList.remove("carousel-items-visible")
    Slides[i].classList.add("carousel-items-hidden")
  }
}

function moveToPrevSlide(){
  console.log("Moving To Prev Slide")
  hideAllSlides()
  
   if(Slidecounter <= 0) {
     Slidecounter = 3
   }else{
     Slidecounter = Slidecounter - 1
   }
  Slides[Slidecounter].classList.add('carousel-items-visible')
   Slides[Slidecounter].classList.remove('carousel-items-hidden')
}

  


function moveToNextSlide(){
  console.log("Moving To Next Slide")
   hideAllSlides()
   if(Slidecounter === totalSlides - 1) {
     Slidecounter = 0
   }else{
     Slidecounter++
   }
  Slides[Slidecounter].classList.add('carousel-items-visible')
   Slides[Slidecounter].classList.remove('carousel-items-hidden')
}

function moveToSlideOne(){
  console.log("Moving To Slide One")
   hideAllSlides()
  SlidePosition = 0
  Slides[0].classList.add('carousel-items-visible')
  Slides[0].classList.remove('carousel-items-hidden')
}

function moveToSlideTwo(){
  console.log("Moving To Slide Two")
   hideAllSlides()
   SlidePosition = 1
  Slides[1].classList.add('carousel-items-visible')
  Slides[1].classList.remove('carousel-items-hidden')
}

function moveToSlideThree(){
  console.log('Moving To Slide Three')
   hideAllSlides()
   SlidePosition = 2
  Slides[2].classList.add('carousel-items-visible')
  Slides[2].classList.remove('carousel-items-hidden')
}

function moveToSlideFour(){
  console.log("Moving To Slide Four")
   hideAllSlides()
   SlidePosition = 3
   Slides[3].classList.add("carousel-items-visible")
   Slides[3].classList.remove("carousel-items-hidden")
  
}





