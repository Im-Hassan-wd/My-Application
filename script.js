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
window.addEventListener('scroll', showSkater)
