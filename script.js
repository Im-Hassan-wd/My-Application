const skateSection = document.querySelector('.skate');
const skateboarder = document.querySelector('.skate-boi');

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
