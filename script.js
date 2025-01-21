document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector(".cursor")
    const navLinks = document.querySelectorAll(".nav-link")
    const menuToggle = document.querySelector(".menu-toggle")
    const nav = document.querySelector(".nav-links")
    const sections = document.querySelectorAll("section")
    const form = document.getElementById("contact-form")
  
    // Custom cursor (only on desktop)
    if (window.innerWidth > 768) {
      document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px"
        cursor.style.top = e.clientY + "px"
      })
    }
  
    // Navbar highlight on scroll
    window.addEventListener("scroll", () => {
      let current = ""
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id")
        }
      })
  
      navLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href").slice(1) === current) {
          link.classList.add("active")
        }
      })
    })
  
    // Smooth scrolling
    navLinks.forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const targetId = this.getAttribute("href")
        const targetSection = document.querySelector(targetId)
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" })
  
        // Close mobile menu if open
        if (nav.classList.contains("active")) {
          nav.classList.remove("active")
          menuToggle.classList.remove("active")
        }
      })
    })
  
    // Mobile menu toggle
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("active")
      menuToggle.classList.toggle("active")
    })
  
    // Form submission
    form.addEventListener("submit", (e) => {
      e.preventDefault()
      // Here you would typically send the form data to a server
      alert("Thanks for your message! I'll get back to you soon.")
      form.reset()
    })
  
    // Intersection Observer for fade-in effect
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )
  
    sections.forEach((section) => {
      observer.observe(section)
    })
  
    // Typing effect for the main title
    const title = document.querySelector("#home h1")
    const text = title.textContent
    title.innerHTML = ""
    let i = 0
    const typeWriter = () => {
      if (i < text.length) {
        title.innerHTML += text.charAt(i)
        i++
        setTimeout(typeWriter, 100)
      }
    }
    typeWriter()
  
    // Parallax effect for hero section (only on desktop)
    if (window.innerWidth > 768) {
      window.addEventListener("scroll", () => {
        const scrollPosition = window.pageYOffset
        const heroContent = document.querySelector(".hero-content")
        const heroImage = document.querySelector(".hero-image")
  
        heroContent.style.transform = `translateY(${scrollPosition * 0.3}px)`
        heroImage.style.transform = `translateY(${scrollPosition * 0.4}px)`
      })
    }
  })
  
  