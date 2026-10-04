const testimonialsData = [
  {
    title: "Julian",
    description: "Integrating their custom autonomous picking bots completely transformed our warehouse throughput. The deployment was seamless, and the AI routing cut our order processing times by nearly 40% in the first quarter.",
    image:"website_portfolio/Assets/testimonial1.jpg",
    alt: "Julian's Testimonial",

  },
  {
    title: "Elena",
    description: "Their lab built an adaptive computer-vision model for our diagnostic hardware that exceeded our accuracy benchmarks within weeks. The team’s deep expertise in robotics control and real-time inference made them feel like an extension of our internal team",
    image: "website_portfolio/Assets/testimonial2.jpg",
    alt: "Elena's Testimonial", 
  },
    {
    title: "Maya",
    description: "From early prototyping to edge AI deployment in rugged field conditions, their robotic sensor integration delivered reliable performance where off-the-shelf options failed. They are our go-to partner for complex automation challenges.",
    image: "website_portfolio/Assets/testimonial3.jpg",
    alt: "Maya's Testimonial",   
  }
];


function renderTestimonials() {
  const container = document.getElementById("testimonialsContainer");

  container.innerHTML = "";

  // Loop through every testimonial object in the array
  testimonialsData.forEach((item) => {
    const article = document.createElement("article");
    article.className = "testimonial-card";

    // Stamp the template using the individual item's properties
    article.innerHTML = `
      <div class="testimonial-image">
        <img src="${item.image}" alt="${item.alt}">
      </div>
      <div class="testimonial-content">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    `;

    container.appendChild(article);
  });
}

// Execute the function
renderTestimonials();

// const projects = [
//   {
//     title: "Flagship Bot",
//     description: "An industrial inspection and logistics ground unit equipped with onboard spatial intelligence, capable of zero-downtime navigation across rugged, GPS-denied environments.",
//     image:"website_portfolio/Assets/robotics.jpg",
//     alt: "Apex-7 Adaptive Autonomous Rover",
//     tags: ["CAN Bus Actuation", "OpenCV", "NVDIA Modeling"],
//   },
//   {
//     title: "State of the art laboratory",
//     description: "A next-generation prototyping facility engineered for real-time edge computing, autonomous hardware stress testing, and human-robot collaborative learning environments.",
//     image: "website_portfolio/Assets/robotics lab.jpg",
//     alt: "  Neural Robotics & Dynamics Lab",
//     tags: ["Pytorch", "Machine Learning", "Computer Vision" ],
//   } 
//   ]

// const pcontainer = document.getElementById("projectsContainer");

// // build the project then insert them
// function renderProjects() {
//   const container = document.getElementById("projects-grid");


//     // Create a new <article> element for this project
//     const article = document.createElement("article");
//     article.className = "project1"; // re-uses existing card styling from style.css doc

//     // Fill it in with the project's info
//     article.innerHTML = `
//       <div class="project1-image">
//         <img src="${project.image}" alt="${project.alt}">
//       </div>
//       <div class="project-content">
//         <div class="project-tags">${tagsHtml}</div>
//         <h3>${project.title}</h3>
//         <p>${project.description}</p>
//       </div>
//     `;

//     container.appendChild(article);
//   }



// renderProjects();