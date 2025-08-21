 
      function toggleMenu() {
  const nav = document.getElementById("navLinks");
  const toggleBtn = document.querySelector('.menu-toggle');
  
  nav.classList.toggle("active");
  toggleBtn.classList.toggle("active");


  document.addEventListener('click', function closeMenu(e) {
    if(!e.target.closest('.navbar') && !e.target.closest('.menu-toggle')) {
      nav.classList.remove("active");
      toggleBtn.classList.remove("active");
      document.removeEventListener('click', closeMenu);
    }
  });
}   



const guideSlider = document.getElementById('guidelinesSlider');
const dotsContainer = document.getElementById('nav-dots');
const cards = guideSlider.querySelectorAll('.guideline-card');

// Create dots
cards.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => {
    guideSlider.scrollTo({
      left: i * guideSlider.clientWidth,
      behavior: 'smooth'
    });
  });
  dotsContainer.appendChild(dot);
});

// Update dots on scroll
guideSlider.addEventListener('scroll', () => {
  const index = Math.round(guideSlider.scrollLeft / guideSlider.clientWidth);
  document.querySelectorAll('.dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
});

// Auto scroll
let autoScroll = setInterval(() => {
  const nextIndex = (Math.round(guideSlider.scrollLeft / guideSlider.clientWidth) + 1) % cards.length;
  guideSlider.scrollTo({
    left: nextIndex * guideSlider.clientWidth,
    behavior: 'smooth'
  });
}, 4000);

// Stop on touch
guideSlider.addEventListener('touchstart', () => clearInterval(autoScroll));


    

  
        const videoSlider = document.getElementById('videoSlider');
      
        function scrollVideoLeft() {
          videoSlider.scrollBy({ left: -videoSlider.clientWidth, behavior: 'smooth' });
        }
      
        function scrollVideoRight() {
          videoSlider.scrollBy({ left: videoSlider.clientWidth, behavior: 'smooth' });
        }
        slider.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

      
      

  
        const featuresSlider = document.getElementById('featuresSlider');
      
        setInterval(() => {
            if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
                slider.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                slider.scrollBy({ left: 640, behavior: 'smooth' });
            }
        }, 3000);
    
        function scrollFeatureLeft() {
          featuresSlider.scrollBy({ left: -640, behavior: 'smooth' }); // 2 cards approx.
        }
      
        function scrollFeatureRight() {
          featuresSlider.scrollBy({ left: 640, behavior: 'smooth' });
        }
      
      

// Enhanced JavaScript with Touch Scroll
let isDown = false;
let startX;
let scrollLeft;
const slider = document.querySelector('.message-slider');

// Mouse controls
slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
});

// Touch controls
slider.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('touchend', () => {
    isDown = false;
});

slider.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.touches[0].pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
});

// Arrow controls
function scrollLeft() {
    slider.scrollBy({
        left: -slider.offsetWidth,
        behavior: 'smooth'
    });
}

function scrollRight() {
    slider.scrollBy({
        left: slider.offsetWidth,
        behavior: 'smooth'
    });
}

// See More functionality
function showMoreLeadership() {
    // Add your logic to show more content
    window.location.href = 'about.html#leadership';
}



   
   
        const programmeSlider = document.getElementById('programmeSlider');
      
        function scrollProgrammeLeft() {
          programmeSlider.scrollBy({ left: -620, behavior: 'smooth' });
        }
      
        function scrollProgrammeRight() {
          programmeSlider.scrollBy({ left: 620, behavior: 'smooth' });
        }
    
      
      
        function openForm() {
          document.getElementById("joinForm").style.display = "block";
          document.getElementById("overlay").style.display = "block";
        }
      
        function closeForm() {
          document.getElementById("joinForm").style.display = "none";
          document.getElementById("overlay").style.display = "none";
        }
     
      
     
        function submitMessage(event) {
          event.preventDefault();
          alert("Your message has been sent! Thank you for contacting us.");
          event.target.reset(); // reset form after submit
        }
    
      
     
        function setupDotNavigation(sliderId, dotContainerId, cardSelector) {
          const slider = document.getElementById(sliderId);
          const dotsContainer = document.getElementById(dotContainerId);
          const cards = slider.querySelectorAll(cardSelector);
        
          // Clear any existing dots
          dotsContainer.innerHTML = "";
        
          // Create navigation dots
          cards.forEach((_, i) => {
            const dot = document.createElement("span");
            dot.classList.add("dot");
            if (i === 0) dot.classList.add("active");
            dot.addEventListener("click", () => {
              slider.scrollTo({
                left: i * slider.clientWidth,
                behavior: "smooth"
              });
            });
            dotsContainer.appendChild(dot);
          });
        
          // Update active dot on scroll
          slider.addEventListener("scroll", () => {
            const index = Math.round(slider.scrollLeft / slider.clientWidth);
            dotsContainer.querySelectorAll(".dot").forEach((dot, i) => {
              dot.classList.toggle("active", i === index);
            });
          });
        
          // Auto scroll
          let autoScroll = setInterval(() => {
            const nextIndex = (Math.round(slider.scrollLeft / slider.clientWidth) + 1) % cards.length;
            slider.scrollTo({
              left: nextIndex * slider.clientWidth,
              behavior: "smooth"
            });
          }, 4000);
        
          // Stop auto scroll on touch (mobile)
          slider.addEventListener("touchstart", () => clearInterval(autoScroll));
        }
        
        // Initialize all sliders with dot navigation
        window.addEventListener("DOMContentLoaded", () => {
          setupDotNavigation("guidelinesSlider", "nav-Dots-guideline", ".guideline-card");
          setupDotNavigation("featuresSlider", "nav-Dots-features", ".feature-card");
          setupDotNavigation("videoSlider", "nav-Dots-video", ".video-card");
          setupDotNavigation("teacherSlider", "nav-Dots-teacher", ".message-card");
          setupDotNavigation("programmeSlider", "nav-Dots-programme", ".programme-card-slide");
        });
      
      // Dummy data (can be fetched from backend later)
const latestNotice = "📢 Grade 10 Final Exam Schedule has been released!";
const noticeLink = "notice.html"; // Link to full notice

window.addEventListener("load", () => {
  // Show only once per session
  if (sessionStorage.getItem("noticeShown")) return;

  // Create popup container
  const popup = document.createElement("div");
  popup.innerHTML = `
    <strong>${latestNotice}</strong><br>
    <a href="${noticeLink}" style="color: #fff; text-decoration: underline;">Read More</a>
  `;

  // Apply styles via JS
  Object.assign(popup.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "#FE70DC",
    color: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
    zIndex: "9999",
    display: "block",
    opacity: "0",
    transform: "translateY(100px)",
    transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
    fontFamily: "Arial, sans-serif"
  });

  // Append to body
  document.body.appendChild(popup);

  // Animate in
  setTimeout(() => {
    popup.style.opacity = "1";
    popup.style.transform = "translateY(0)";
  }, 10);

  sessionStorage.setItem("noticeShown", "true");

  // Auto-hide after 7 seconds
  setTimeout(() => {
    popup.style.opacity = "0";
    popup.style.transform = "translateY(100px)";
    setTimeout(() => {
      popup.remove();
    }, 500);
  }, 7000);
});