const skateSection = document.querySelector('.skate');
const skateboarder = document.querySelector('.skate-boi');
const burger = document.querySelector('header svg');
const nav = document.querySelector('header ul');

// Navigation menu
burger.addEventListener('click',() => {
  nav.classList.toggle('active');
})

// hide skateborder
setTimeout(()=>{
  skateSection.classList.add('active');
},13000);

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
window.addEventListener('scroll', showSkater)
