var app = new Vue({
  el: '#app',
  data: {
    projects: [
      {
        title: "Digiworks - Graphic Designer Intern",
        description: "Game assets / Game Interface / Illustration",
        currentNumber: 0,
        images: [{
            src: 'assets/images/digiworks/game_assets_1.jpg'
          },
          {
            src: 'assets/images/digiworks/game_assets_2.jpg'
          },
          {
            src: 'assets/images/digiworks/game_assets_3.jpg'
          },
          {
            src: 'assets/images/digiworks/game_assets_4.jpg'
          },
          {
            src: 'assets/images/digiworks/game_assets_5.jpg'
          },
          {
            src: 'assets/images/digiworks/interface_1.jpg'
          },
          {
            src: 'assets/images/digiworks/interface_2.jpg'
          },
          {
            src: 'assets/images/digiworks/illu_1.jpg'
          },
          {
            src: 'assets/images/digiworks/illu_2.jpg'
          }
        ]
      },
      {
      title: "Devoteam - Graphic Designer Intern",
      description: "Illustration / Logo / Pattern",
      currentNumber: 0,
      images: [{
          src: 'assets/images/devoteam/catcher.png'
        },
        {
          src: 'assets/images/devoteam/workspace.png'
        },
        {
          src: 'assets/images/devoteam/phare.png'
        },
        {
          src: 'assets/images/devoteam/kite.png'
        },
        {
          src: 'assets/images/devoteam/hive.png'
        },
        {
          src: 'assets/images/devoteam/kc.png'
        },
        {
          src: 'assets/images/devoteam/cubes.png'
        },
        {
          src: 'assets/images/devoteam/column.png'
        },
        {
          src: 'assets/images/devoteam/lines.png'
        }
      ]
    },
      {
        title: "BFM TV Rebrand",
        description: "Student project - Made with <a href='https://bance-sarah.github.io/portfolio/' target='_blank'>Sarah Bance</a>",
        currentNumber: 0,
        images: [{
            src: 'assets/images/bfm/logo.jpg'
          },
          {
            src: 'assets/images/bfm/logos.jpg'
          },
          {
            src: 'assets/images/bfm/cards.jpg'
          },
          {
            src: 'assets/images/bfm/wall_1.jpg'
          },
          {
            src: 'assets/images/bfm/wall_2.jpg'
          }
        ]
      },
      {
        title: "Prisme Brand",
        description: "Student project - Made with <a href='https://www.behance.net/Mrntrmz' target='_blank'>Marine Termoz</a>",
        currentNumber: 0,
        images: [{
            src: 'assets/images/prisme/logo.jpg'
          },
          {
            src: 'assets/images/prisme/logo_multi.jpg'
          },
          {
            src: 'assets/images/prisme/carte.jpg'
          },
          {
            src: 'assets/images/prisme/presentation.jpg'
          },
          {
            src: 'assets/images/prisme/vinyle.jpg'
          }
        ]
      },
      {
        title: "Random",
        description: "Various personnal creations",
        currentNumber: 0,
        images: [{
            src: 'assets/images/random/atlas_m.jpg'
          },
          {
            src: 'assets/images/random/holoback.jpg'
          },
          {
            src: 'assets/images/random/les_pluriels.jpg'
          },
          {
            src: 'assets/images/random/multimedia_manifesto_m.jpg'
          },
          {
            src: 'assets/images/random/psyche.png'
          },
          {
            src: 'assets/images/random/pub.jpg'
          },
          {
            src: 'assets/images/random/spoof_ad.jpg'
          }
        ]
      },
    ]
  },
  methods: {
    toggle: function(event) {
      var target = event.target.nextElementSibling;
      target.classList.toggle('visible');
    },
    next: function(project) {
      return (project.currentNumber == project.images.length - 1) ? project.currentNumber = 0 : project.currentNumber += 1;
    }
  }
});

/* THANKS TO MATHIAS HOEG WEBSITE, FOR THE WORKING SLIDER :)
AJAX + JSON was my fist try but it's bad
Used Matthias Hager tutorial for the slider, but had no idea how to loop to make more than 1 slider */
