var app = new Vue({
  el: '#app',
  data: {
    projects: [
      {
        title: "Assassin's Creed Odyssey - Inventory Menu redesign",
        link: "ac-odyssey.html",
        tag: "UI Design",
        description: "Personal project",
        images: [{
            src: 'assets/images/ac_ody/cover.png',
            alt: 'Project cover'
          }]
      },
      {
        title: "Project GAIA",
        link: "project-gaia.html",
        tag: "UI Design",
        description: "[WIP] - Personal project",
        images: [{
            src: 'assets/images/ui_exo/loadout.jpg',
            alt: 'Loadout Menu'
          }]
      },
      {
        title: "<a href='/biotica' class='underline'>Biotica</a> - Hybrid game about biodiversity ",
        tag: "UI Design / Art Direction / Unity Dev",
        link: "biotica.html",
        description: "[WIP] - Made with <a href='https://www.behance.net/sarahbance/' class='underline' target='_blank' rel='noreferrer, noopener'>Sarah Bance</a>",
        images: [{
            src: 'assets/images/biotica/visuel.jpg',
            info: 'Visuel de présentation du jeu avec logo',
            alt: 'Visuel / logo'
          }]
      },
      {
        title: "Master DGDI",
        tag: "Branding",
        link: "dgdi.html",
        description: "Personal project",
        images: [{
            src: 'assets/images/dgdi/cover-behance.jpg',
            alt: 'Logo DGDI'
          }]
      },
      {
        title: "Musée de la Chasse & de la Nature",
        tag: "Branding",
        link: "mcn.html",
        description: "Made with <a href='https://www.behance.net/sarahbance/' class='underline' target='_blank' rel='noreferrer, noopener'>Sarah Bance</a>",
        images: [{
            src: 'assets/images/mcn/cover.jpg',
            alt: 'Cover - MCN'
          }]
      },
    ]
  }
});

/* THANKS TO MATHIAS HOEG WEBSITE, FOR THE WORKING SLIDER :)
tried AJAX + JSON // didnt work well
Matthias Hager slider tutorial, but had no idea how to loop well the slider*/
