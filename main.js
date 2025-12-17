import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger)

// Initialize Lenis (Smooth Scroll)
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// Reveal Animations on Scroll
const revealElements = document.querySelectorAll('.reveal-text')

revealElements.forEach((element) => {
  gsap.fromTo(element, 
    {
      y: 50,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%', // Animate when element is 85% down the viewport
        toggleActions: 'play none none reverse'
      }
    }
  )
})

// Parallax Hero Effect
gsap.to('.hero-bg', {
  yPercent: 30,
  ease: 'none',
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: true
  }
})

// Countdown Timer
const partyDate = new Date('October 3, 2026 18:00:00').getTime()

const updateCountdown = () => {
  const now = new Date().getTime()
  const distance = partyDate - now

  if (distance < 0) {
    document.getElementById('countdown').innerHTML = "<div>IT'S TIME!</div>"
    return
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))

  document.getElementById('days').innerText = days
  document.getElementById('hours').innerText = hours
  document.getElementById('minutes').innerText = minutes
}

setInterval(updateCountdown, 1000)
updateCountdown() // Initial call

// Tab Logic
const tabs = document.querySelectorAll('.tab-btn')
const contents = document.querySelectorAll('.tab-content')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all
    tabs.forEach(t => t.classList.remove('active'))
    contents.forEach(c => c.classList.remove('active'))

    // Add active to clicked
    tab.classList.add('active')
    const target = tab.getAttribute('data-tab')
    document.getElementById(target).classList.add('active')
  })
})
