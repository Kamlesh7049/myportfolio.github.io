
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // autoplay: {
    //   delay: 5000,
    // },
  });
  
  
  function locomotive(){
    gsap.registerPlugin(ScrollTrigger);
  
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
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
  locomotive();
  
  var typed = new Typed('.auto-type', {
      strings: ["Frontend Developer","Problem Solver"],
      smartBackspace: true,
      loop:true
  });
  
  var typed = new Typed('.auto-type1', {
    strings: ["Kamlesh Shah.","Frontend Developer!","Problem Solver!"],
    smartBackspace: true,
    loop:true
  });
  
  
  gsap.to(".Skill .progress", {
    scrollTrigger:{
          trigger:".Skill",
          scroller:"#main", 
          // markers:true,
          start:"top 10%",
          end:"top 60%",
          scrub:2,
    }
  });
  
  // DOM Apply 
  // nav-elem
  let home = document.querySelector("#home-link"); 
  let about = document.querySelector("#about-link"); 
  let skill = document.querySelector("#skill-link"); 
  let certificate = document.querySelector("#certificate-link"); 
  let project = document.querySelector("#project-link");
  
  
  
  // Icon-media
  let linkedin = document.querySelectorAll(".linkedIn");
  let github = document.querySelectorAll(".github"); 
  
  // Define the linkd function
  function linkd(){
    let urlLink = 'https://www.linkedin.com/in/kamlesh-shah-4121851b2/';
    window.open(urlLink, '_blank'); 
  }
  linkedin.forEach(linkedin => {
    linkedin.addEventListener('click', linkd);
  })
  
  
  function gitH(){
    let urlLink = 'https://github.com/Kamlesh7049';
    window.open(urlLink, '_blank'); 
  };
  github.forEach(github => {
    github.addEventListener('click',gitH);
  })
  
  
  
  home.addEventListener('click',function(){
    let UrlLink = '#homePage'; 
    home.href = UrlLink;
    home.target = '_blank'
  })
  
  about.addEventListener('click',function(){
    let UrlLink = '#aboutMe'; 
    about.href = UrlLink;
    about.target = '_blank'
  })
  
  skill.addEventListener('click',function(){
    let UrlLink = '#mySkill'; 
    skill.href = UrlLink;
    skill.target = '_blank'
  })
  
  certificate.addEventListener('click',function(){
    let UrlLink = 'https://www.linkedin.com/in/kamlesh-shah-4121851b2/'; 
    certificate.href = UrlLink;
    certificate.target = '_blank'
  })
  
  project.addEventListener('click',function(){
    let UrlLink = 'https://github.com/Kamlesh7049'; 
    project.href = UrlLink;
    project.target = '_blank'
  })
  
  // About 
  let meMore = document.querySelector("#meMore"); 
  meMore.addEventListener('click', function() {
    let urlLink = 'https://www.linkedin.com/in/kamlesh-shah-4121851b2/';
    window.open(urlLink, '_blank'); 
  });
  
  // Hire me and resume
  //let resume = document.querySelector("#resume"); 
  let resume = document.querySelector("#resume");
resume.innerHTML = '<a href="https://drive.google.com/file/d/1JVKBqJqjyE8kISArgHk0If9pHxq7-0AG/view?usp=drivesdk" target="_blank">Download Resume</a>';

  let hireRequest = document.querySelector("#hireRequest"); 
  
  resume.addEventListener('click', function() {
    resume.innerHTML = "It is available ";
    resume.style.backgroundColor = "red";
    setTimeout(function() {
      resume.innerHTML = "Download Resume";
      resume.style.backgroundColor = "transparent";
    }, 2000);
  });
  
  hireRequest.addEventListener('click',function(){
    hireRequest.innerHTML = "📞 7049776747";
    hireRequest.style.backgroundColor = "blue";
    setTimeout(function() {
      hireRequest.innerHTML = "Hire Me Now!";
      hireRequest.style.backgroundColor = "transparent";
    }, 2000);
  })
  
  // code for reload 
  let lastWidth = window.innerWidth;
  window.addEventListener('resize', function() {
    const currentWidth = window.innerWidth;
    if (currentWidth < lastWidth) {
      location.reload();
    }
    lastWidth = currentWidth;
  });
  
  // Mobile Menue Bar..
  let flag = 0;
  let menuIcon = document.getElementById('menu');
  let menu = document.querySelector(".mobileMenue");
  menuIcon.addEventListener('click', function() {
    if(flag === 0){
      menuIcon.className = 'ri-close-line';
      menu.style.visibility="initial";
    
      flag = 1;
    }
    else{
      menuIcon.className = 'ri-align-justify';
      menu.style.visibility="hidden";
      flag = 0;
    }
  });
