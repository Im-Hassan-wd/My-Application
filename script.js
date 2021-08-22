const skateSection = document.querySelector('.skate');
const skateboarder = document.querySelector('.skate-boi');
const burger = document.querySelector('header svg');
const nav = document.querySelector('header ul');
const skateBtn = document.querySelector('.title a'),
skateMe = document.querySelector('.title p');
// Navigation menu
burger.addEventListener('click',() => {
  nav.classList.toggle('active');
})

// hide skateborder
setTimeout(()=>{
  skateSection.classList.add('active');
  skateMe.style.display = 'none';
  skateBtn.style.display = 'none';
},20000);

// skate animation
const showSkater = () => {

  const sectionPosition = skateSection.getBoundingClientRect().top;
  const screenPosition = innerHeight / 1.2;
  // console.log(screenPosition, sectionPosition)

  if(sectionPosition < screenPosition){
    skateboarder.style.animation = 'skate 8s linear both 3';
  }

}
// scrollAppear()
window.addEventListener('scroll', showSkater);

//image slide PROJECTS
const slider = document.querySelector('.project-slide');
const carouselImages = document.querySelectorAll('.project-slide img');
//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
//Counter
let counter = 1;
const size = 700;

// slider.style.transform = 'translateX(' + (-size*counter) + 'px)';

nextBtn.addEventListener('click', () => {
  if(counter >= carouselImages.length - 1) return;
  slider.style.transition = 'transform 0.5s ease-in-out';
  counter++;
  slider.style.transform = 'translateX(' + (-size*counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
  if(counter <= 0) return;
  slider.style.transition = 'transform 0.5s ease-in-out';
  counter--;
  slider.style.transform = 'translateX(' + (-size*counter) + 'px)';
});


slider.addEventListener('transitionend', (e)=>{
  if(carouselImages[counter].id === 'lastClone'){
    slider.style.transition = 'none';
    counter = carouselImages.length -2;
    slider.style.transform = 'translateX(' + (-size*counter) + 'px)';
    console.log('last clone')
  }
  if(carouselImages[counter].id === 'firstClone'){
    slider.style.transition = 'none';
    counter = carouselImages.length - counter;
    slider.style.transform = 'translateX(' + (-size*counter) + 'px)';

  }
});
