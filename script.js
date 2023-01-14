var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  function show(){
  gsap.registerPlugin(ScrollTrigger);
      // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  }
  show();  
  gsap.from("#d",{
      y:1000,
      ease:Expo.easeInout,
      // delay:2,
      duration:1,
      opacity:0,
      // x:100
  })
  gsap.from("#b",{
      y:1000,
      ease:Expo.easeInout,
      duration:1,
      opacity:0
  })
  gsap.from("#c",{
      y:0,
      ease:Expo.easeInout,
      // delay:2,
      duration:1,
      opacity:0,
      x:500
  })
  gsap.from("#bottom",{
      y:200,
      ease:Expo.easeInout,
      opacity:0,
      duration:1,
  })
  gsap.from("#a",{
      y:200,
      ease:Expo.easeInout,
      opacity:0,
      duration:1,
  })
  gsap.from("#main #part1>h5",{
      y:500,
      ease:Expo.easeInout,
      opacity:0,
      duration:1,
      pin:true
      // Delay:1
  })
  gsap.from("#part2 #text",{
    scrollTrigger:{
      scroller:"#main",
       trigger:"#text",
       start:"top 30%"
    },
    y:50,
    ease:Expo.aeaseInout,
    opacity:0,
    duration:1
  })
  gsap.from("#part3",{
      scrollTrigger:{
        scroller:"#main",
        trigger:"#part3",
        start:"top 40%"
      },
      y:200,
      ease:Expo.easeInout,
      duration:1,
      opacity:0
  })
  gsap.from("#part4",{
    scrollTrigger:{
      scroller:"#main",
      trigger:"#part4",
      start:"top 20%"
    },
    y:20,
    ease:Expo.easeInout,
    opacity:0
  })
  gsap.from("#p5e1",{
    scrollTrigger:{
      scroller:"#main",
      trigger:"#p5e1",
      start:"top 20%"
    },
    y:50,
    ease:Expo.easeInout,
    duration:1,
    opacity:0
  })
  gsap.from("#p5e2",{
    scrollTrigger:{
      scroller:"#main",
      trigger:"#p5e2",
      start:"top 20%"
    },
    y:50,
    ease:Expo.easeInout,
    duration:1,
    opacity:0
  })
  gsap.from("#part7>img",{
      scrollTrigger:{
        scroller:"#main",
        trigger:"#p5e2",
        start:"top 20%"
      },
      opacity:0,
      scale:0,
      duration:2
  })
  gsap.from("#part7 #bottomtext",{
    scrollTrigger:{
      scroller:"#main",
      trigger:"#part7 #bottomtext",
      start:"top 50%"
    },
    x:-50,
    opacity:0,
    ease:Expo.easeInout,
    duration:1
  })
  gsap.from("#part7 #links",{
    scrollTrigger:{
      scroller:"#main",
      trigger:"#part7 #bottomtext",
      start:"top 50%"
    },
    y:50,
    stagger:1,
    opacity:0,
    ease:Expo.easeInout,
    duration:1
  })
  gsap.from("#part7 #imgcontainer",{
    scrollTrigger:{
      scroller:"#main",
      trigger:"#part7 #imgcontainer",
      start:"top 50%"
    },
    y:50,
    opacity:0,
    ease:Expo.easeInout,
    duration:1
  })
  gsap.from("#p3e2",{
      scrollTrigger:{
          scroller:"#main",
          trigger:"#p3e1",
          start:"top 90%"
      },
      duration:1,
      ease:Expo.easeInout,
      opacity:0,
  })