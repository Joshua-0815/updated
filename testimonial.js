
  //Testimonial Data
  const testimonials = [
    {
      name: "Mark Cruz",
      image: "images/c2.jpg",
      testimonial:
        "J Barbeshop isn't just a place for a haircut; it's an experience. The moment you step in, you're greeted warmly, setting the tone for exceptional service. The barbers are true professionals, delivering precise cuts that exceed expectations. With its blend of classic charm and modern flair, J Barbeshop sets the bar high for grooming perfection. Whether you're after a classic trim or a bold new look, this place delivers every time. Trust me, you won't be disappointed.",
    },
    {
      name: "Joshua Palisoc",
      image: "images/c1.jpg",
      testimonial:
        "J Barbeshop offers top-notch service in a stylish setting. The skilled barbers deliver impeccable cuts, leaving clients looking and feeling their best. Whether you're a regular or a first-time visitor, you'll leave J Barbeshop with a smile on your face and a fresh cut that turns heads.",
    },
    {
      name: "Jae Robin",
      image: "images/c3.jpg",
      testimonial:
        "Dude, let me tell you about J Barbeshop—it's freaking awesome! The vibes in there are so chill, and the barbers seriously know their stuff. I walked in wanting a simple trim but ended up with the freshest cut I've ever had. Plus, the place looks dope with its vintage decor and cool tunes playing in the background. If you're looking for a place that'll hook you up with a killer haircut and make you feel like a million bucks, J Barbeshop is where it's at.",
    },
    {
      name: "Blake Dawson",
      image: "images/c4.jpg",
      testimonial:
        "J Barbeshop nails it! Great vibe, skilled barbers, and I walked out feeling like a million bucks. Enough said.",
    },
  ];
  
  //Current Slide
  let i = 0;
  //Total Slides
  let j = testimonials.length;
  
  let testimonialContainer = document.getElementById("testimonial-container");
  let nextBtn = document.getElementById("next");
  let prevBtn = document.getElementById("prev");
  
  nextBtn.addEventListener("click", () => {
    i = (j + i + 1) % j;
    displayTestimonial();
  });
  prevBtn.addEventListener("click", () => {
    i = (j + i - 1) % j;
    displayTestimonial();
  });
  
  let displayTestimonial = () => {
    testimonialContainer.innerHTML = `
      <p>${testimonials[i].testimonial}</p>
      <img src=${testimonials[i].image}>
      <h3>${testimonials[i].name}</h3>
    `;
  };
  window.onload = displayTestimonial;
  
  