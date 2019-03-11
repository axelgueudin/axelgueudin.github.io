var app = new Vue({
  el: '#app',
  data: {
    projects: [
      {
        title: "Digiworks - Graphic Designer Intern",
        description: "Game assets / Game Interface / Illustration",
        currentNumber: 0,
        images: [{
            src: 'assets/images/digiworks/game_assets_1.jpg',
            alt: 'Modules végétaux en isométrie'
          },
          {
            src: 'assets/images/digiworks/game_assets_2.jpg',
            alt: 'Modules en isométrie'
          },
          {
            src: 'assets/images/digiworks/game_assets_3.jpg',
            alt: 'Modules en isométrie'
          },
          {
            src: 'assets/images/digiworks/game_assets_4.jpg',
            alt: 'Modules en isométrie'
          },
          {
            src: 'assets/images/digiworks/game_assets_5.jpg',
            alt: 'Modules en isométrie'
          },
          {
            src: 'assets/images/digiworks/interface_1.jpg',
            alt: 'Interface Menu IWA'
          },
          {
            src: 'assets/images/digiworks/interface_2.jpg',
            alt: 'Interface in game IWA - simulation'
          },
          {
            src: 'assets/images/digiworks/illu_1.jpg',
            alt: 'Illustration High Five'
          },
          {
            src: 'assets/images/digiworks/illu_2.jpg',
            alt: '2 Illustrations isométrie - Concertation & Smartphone '
          }
        ]
      },
      {
      title: "Devoteam - Graphic Designer Intern",
      description: "Illustration / Logo / Pattern",
      currentNumber: 0,
      images: [{
          src: 'assets/images/devoteam/catcher.png',
          alt: 'Illustration flat design - Claw Machine'
        },
        {
          src: 'assets/images/devoteam/workspace.png',
          alt: 'Illustration flat design - Working space'
        },
        {
          src: 'assets/images/devoteam/phare.png',
          alt: 'Illustration flat design - Lighthouse'
        },
        {
          src: 'assets/images/devoteam/kite.png',
          alt: 'Illustration flat design - Kite'
        },
        {
          src: 'assets/images/devoteam/hive.png',
          alt: 'Logo Hive Devoteam Intranet'
        },
        {
          src: 'assets/images/devoteam/kc.png',
          alt: 'Logo Knowledge Communities Devoteam'
        },
        {
          src: 'assets/images/devoteam/cubes.png',
          alt: 'Pattern flat design - Cubes'
        },
        {
          src: 'assets/images/devoteam/column.png',
          alt: 'Pattern flat design - Columns'
        },
        {
          src: 'assets/images/devoteam/lines.png',
          alt: 'Pattern flat design - Lines'
        }
      ]
    },
      {
        title: "BFM TV Rebrand",
        description: "Student project - Made with <a href='https://bance-sarah.github.io/portfolio/' target='_blank'>Sarah Bance</a>",
        currentNumber: 0,
        images: [{
            src: 'assets/images/bfm/logo.jpg',
            alt: 'Logo principal BFMTV rebrand'
          },
          {
            src: 'assets/images/bfm/logos.jpg',
            alt: 'Déclinaisons logo BFMTV'
          },
          {
            src: 'assets/images/bfm/cards.jpg',
            alt: 'Mockup cartes visites BFMTV'
          },
          {
            src: 'assets/images/bfm/wall_1.jpg',
            alt: 'Mockup locaux BFMTV'
          },
          {
            src: 'assets/images/bfm/wall_2.jpg',
            alt: 'Mockup locaux ascenseur BFMTV'
          }
        ]
      },
      {
        title: "Prisme Brand",
        description: "Student project - Made with <a href='https://www.behance.net/Mrntrmz' target='_blank'>Marine Termoz</a>",
        currentNumber: 0,
        images: [{
            src: 'assets/images/prisme/logo.jpg',
            alt: 'Logo principal Prisme branding'
          },
          {
            src: 'assets/images/prisme/logo_multi.jpg',
            alt: 'Déclinaison logo Prisme'
          },
          {
            src: 'assets/images/prisme/carte.jpg',
            alt: 'Mockup cartes visites Prisme'
          },
          {
            src: 'assets/images/prisme/presentation.jpg',
            alt: 'Mockup impression métallisée Prisme'
          },
          {
            src: 'assets/images/prisme/vinyle.jpg',
            alt: 'Mockup Vinyle Logo'
          }
        ]
      },
      {
        title: "Random",
        description: "Various personnal creations",
        currentNumber: 0,
        images: [{
            src: 'assets/images/random/atlas_m.jpg',
            alt: 'Photomanipulation Altas portant la Terre'
          },
          {
            src: 'assets/images/random/holoback.jpg',
            alt: 'Affiche Holoback'
          },
          {
            src: 'assets/images/random/les_pluriels.jpg',
            alt: 'Affiche Festival Les Pluriels 20e Edition'
          },
          {
            src: 'assets/images/random/multimedia_manifesto_m.jpg',
            alt: 'Affiche DUT MMI'
          },
          {
            src: 'assets/images/random/psyche.png',
            alt: 'Photomanipulation psychédélique'
          },
          {
            src: 'assets/images/random/pub.jpg',
            alt: 'Pub LG TV'
          },
          {
            src: 'assets/images/random/spoof_ad.jpg',
            alt: 'Fake pub Nike'
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
