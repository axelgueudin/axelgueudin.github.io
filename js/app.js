// app.js
document.addEventListener("DOMContentLoaded", function () {
  const projects = [    {
      title: "Dark Star",
      link: "work/dark-star.html",
      tag: "UI Design, 2023",
      description: "Personal project",
      images: [
        {
          src: 'assets/images/dark-star/cover_lq.png',
          alt: 'Project cover'
        }
      ]
    },
    {
      title: "Master DGDI",
      link: "work/dgdi.html",
      tag: "Branding, 2019",
      description: "Personal project",
      images: [
        {
          src: 'assets/images/dgdi/cover-logos_lq.gif',
          alt: 'Project cover'
        }
      ]
    },
    {
      title: "League of Legends - Combo tool design",
      link: "work/combo-tool.html",
      tag: "UI Design, 2023",
      description: "Personal project",
      images: [
        {
          src: 'assets/images/combo-tool/cover.png',
          alt: 'Project cover'
        }
      ]
    },
    {
      title: "Unigm - Escape game",
      link: "work/unigm.html",
      tag: "Branding, 2020",
      description: "Personal project",
      images: [
        {
          src: 'assets/images/unigm/logo.png',
          alt: 'Project cover'
        }
      ]
    },
    {
      title: "Action-RPG UI",
      link: "work/grunge-ui.html",
      tag: "UI Design, 2021",
      description: "Interview Task",
      images: [
        {
          src: 'assets/images/grunge_ui/mockup-final.png',
          alt: 'Mockup final inventory'
        }
      ]
    },
      {
      title: "Biotica - An eco-friendly board game",
      link: "work/biotica.html",
      tag: "Game Design, Art Direction, UI Design, Unity, 2019",
      description: "with <a href='https://www.behance.net/sarahbance/' class='underline' target='_blank' rel='noreferrer, noopener'>Sarah Bance</a>",
      images: [
        {
          src: 'assets/images/biotica/visuel_lq.png',
          alt: 'Social media visual'
        }
      ]
    },
  ];

  const projectContainer = document.querySelector(".project-container");

  projects.forEach((project) => {
    const projectElement = document.createElement("div");
    projectElement.classList.add('project', 'col', 's12', 'm12', 'l12', 'mb-2');

    projectElement.innerHTML = `
<div class="description col s12 l2 m2 bt">
      <h3 class="project-title">${project.title}</h3>
      <p class="tag">${project.tag}</p>
      <p class="details">${project.description}</p>
</div>
<div class="slider col s12 m9 l9">
      <a href="${project.link}">
        <img src="${project.images[0].src}" alt="${project.images[0].alt}">
      </a>
</div>
    `;

    projectContainer.appendChild(projectElement);
  });
});
