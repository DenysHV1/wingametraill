export const scrollUp = () => {
  const scrollUp=document.querySelector('.scroll-up');

window.addEventListener('scroll', function(){
	scrollUp.classList.toggle("is-open-scroll", window.scrollY>500)
})

// window.addEventListener('scroll', function(){
// 	scrollUp.classList.toggle("scroll-color", window.scrollY>5500)
// })
}