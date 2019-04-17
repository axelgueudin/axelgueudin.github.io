var app = new Vue({
  el: '#app',
  data: {
    projects: [{
        title: "Publipress - Graphic Designer Intern",
        description: "Branding / Illustration",
        currentNumber: 0,
        images: [{
            src: 'assets/images/publipress/profelec.jpg',
            info: 'Projet non abouti - Recherche graphique pour la refonte du logo d\'un client',
            alt: 'Pistes graphique logo électricité générale'
          },
          {
            src: 'assets/images/publipress/107armada.jpg',
            info: 'Proposition non retenue - Logo pour un événement organisé par le Hangar 107 durant l\'Armada 2019',
            alt: 'Hangar & Voilier'
          },
          {
            src: 'assets/images/publipress/grdf1.png',
            info: 'Proposition d\'illustration pour GRDF - illustrant les avantages du gaz naturel',
            alt: 'Illustration - Chill'
          },
          {
            src: 'assets/images/publipress/grdf2.png',
            info: 'Proposition d\'illustration pour GRDF - illustrant les avantages du gaz naturel',
            alt: 'Illustration - Bath'
          },
          {
            src: 'assets/images/publipress/grdf3.png',
            info: 'Proposition d\'illustration pour GRDF - illustrant les avantages du gaz naturel',
            alt: 'Illustration - Cook'
          },
          {
            src: 'assets/images/publipress/grdf4.png',
            info: 'Proposition d\'illustration pour GRDF - illustrant les avantages du gaz naturel',
            alt: 'Illustration - Warm'
          },
          {
            src: 'assets/images/publipress/grdf5.png',
            info: 'Proposition d\'illustration pour GRDF - illustrant les avantages du gaz naturel',
            alt: 'Illustration - Pool'
          },
          {
            src: 'assets/images/publipress/grdf6.png',
            info: 'Proposition d\'illustration pour GRDF - illustrant les avantages du gaz naturel',
            alt: 'Illustration - BBQ'
          },
          {
            src: 'assets/images/publipress/grdf7.png',
            info: 'Proposition d\'illustration pour GRDF - illustrant les avantages du gaz naturel',
            alt: 'Illustration - Piggy bank'
          },
          {
            src: 'assets/images/publipress/allgrdf.jpg',
            info: 'Proposition d\'illustration pour GRDF - illustrant les avantages du gaz naturel',
            alt: 'All illustrations'
          },
          {
            src: 'assets/images/publipress/6esens.jpg',
            info: 'Carte des vins - 6e Sens',
            alt: 'Mockup Carte vin'
          }
        ]
      },
      {
        title: "Digiworks - Graphic Designer Intern",
        description: "Game assets / Game Interface / Illustration",
        currentNumber: 0,
        images: [{
            src: 'assets/images/digiworks/game_assets_1.jpg',
            info: 'Illustrations de modules en 3d isométrique pour un outil de concertation publique - IWA',
            alt: 'Modules végétaux en isométrie'
          },
          {
            src: 'assets/images/digiworks/game_assets_2.jpg',
            info: 'Illustrations de modules en 3d isométrique pour un outil de concertation publique - IWA',
            alt: 'Modules en isométrie'
          },
          {
            src: 'assets/images/digiworks/game_assets_3.jpg',
            info: 'Illustrations de modules en 3d isométrique pour un outil de concertation publique - IWA',
            alt: 'Modules en isométrie'
          },
          {
            src: 'assets/images/digiworks/game_assets_4.jpg',
            info: 'Illustrations de modules en 3d isométrique pour un outil de concertation publique - IWA',
            alt: 'Modules en isométrie'
          },
          {
            src: 'assets/images/digiworks/game_assets_5.jpg',
            info: 'Illustrations de modules en 3d isométrique pour un outil de concertation publique - IWA',
            alt: 'Modules en isométrie'
          },
          {
            src: 'assets/images/digiworks/interface_1.jpg',
            info: 'UI pour un outil de concertation publique - IWA',
            alt: 'Interface Menu IWA'
          },
          {
            src: 'assets/images/digiworks/interface_2.jpg',
            info: 'UI pour un outil de concertation publique - IWA',
            alt: 'Interface in game IWA - simulation'
          },
          {
            src: 'assets/images/digiworks/illu_1.jpg',
            info: 'Illustration High Five',
            alt: 'Illustration High Five'
          },
          {
            src: 'assets/images/digiworks/illu_2.jpg',
            info: 'Illustrations Concertation & Smartphone',
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
            info: 'Illustration - Claw Machine',
            alt: 'Illustration flat design - Claw Machine'
          },
          {
            src: 'assets/images/devoteam/workspace.png',
            info: 'Illustration - Working space',
            alt: 'Illustration flat design - Working space'
          },
          {
            src: 'assets/images/devoteam/phare.png',
            info: 'Illustration - Lighthouse',
            alt: 'Illustration flat design - Lighthouse'
          },
          {
            src: 'assets/images/devoteam/kite.png',
            info: 'Illustration - Kite',
            alt: 'Illustration flat design - Kite'
          },
          {
            src: 'assets/images/devoteam/hive.png',
            info: 'Logo pour Hive - Devoteam Intranet',
            alt: 'Logo Hive Devoteam Intranet'
          },
          {
            src: 'assets/images/devoteam/kc.png',
            info: 'Logo pour les Knowledge Communities',
            alt: 'Logo Knowledge Communities Devoteam'
          },
          {
            src: 'assets/images/devoteam/cubes.png',
            info: 'Pattern - Cubes ',
            alt: 'Pattern flat design - Cubes'
          },
          {
            src: 'assets/images/devoteam/column.png',
            info: 'Pattern - Columns',
            alt: 'Pattern flat design - Columns'
          },
          {
            src: 'assets/images/devoteam/lines.png',
            info: 'Pattern - Lines',
            alt: 'Pattern flat design - Lines'
          }
        ]
      },
      {
        title: "BFM TV Rebrand",
        description: "Student project - Made with <a href='https://bance-sarah.github.io/portfolio/' target='_blank' rel='noreferrer, noopener'>Sarah Bance</a>",
        currentNumber: 0,
        images: [{
            src: 'assets/images/bfm/logo.jpg',
            info: 'Logo BFMTV',
            alt: 'Logo principal BFMTV rebrand'
          },
          {
            src: 'assets/images/bfm/logos.jpg',
            info: 'Déclinaisons logo BFMTV',
            alt: 'Déclinaisons logo BFMTV'
          },
          {
            src: 'assets/images/bfm/cards.jpg',
            info: 'Mockup cartes visites BFMTV',
            alt: 'Mockup cartes visites BFMTV'
          },
          {
            src: 'assets/images/bfm/wall_1.jpg',
            info: 'Mockup locaux BFMTV',
            alt: 'Mockup locaux BFMTV'
          },
          {
            src: 'assets/images/bfm/wall_2.jpg',
            info: 'Mockup locaux ascenseur BFMTV',
            alt: 'Mockup locaux ascenseur BFMTV'
          }
        ]
      },
      {
        title: "Prisme Brand",
        description: "Student project - Made with <a href='https://www.behance.net/Mrntrmz' target='_blank' rel='noreferrer, noopener'>Marine Termoz</a>",
        currentNumber: 0,
        images: [{
            src: 'assets/images/prisme/logo.jpg',
            info: 'Logo Prisme',
            alt: 'Logo principal Prisme branding'
          },
          {
            src: 'assets/images/prisme/logo_multi.jpg',
            info: 'Déclinaisons logo Prisme',
            alt: 'Déclinaison logo Prisme'
          },
          {
            src: 'assets/images/prisme/carte.jpg',
            info: 'Mockup cartes visite',
            alt: 'Mockup cartes visites Prisme'
          },
          {
            src: 'assets/images/prisme/presentation.jpg',
            info: 'Mockup Metal Vanish Prisme',
            alt: 'Mockup impression métallisée Prisme'
          },
          {
            src: 'assets/images/prisme/vinyle.jpg',
            info: 'Mockup Vinyle Logo',
            alt: 'Mockup Vinyle Logo'
          }
        ]
      },
      {
        title: "Personal creations",
        description: "",
        currentNumber: 0,
        images: [{
            src: 'assets/images/random/atlas_m.jpg',
            info: '',
            alt: 'Photomanipulation Altas portant la Terre'
          },
          {
            src: 'assets/images/random/holoback.jpg',
            info: '',
            alt: 'Affiche Holoback'
          },
          {
            src: 'assets/images/random/les_pluriels.jpg',
            info: '',
            alt: 'Affiche Festival Les Pluriels 20e Edition'
          },
          {
            src: 'assets/images/random/multimedia_manifesto_m.jpg',
            info: '',
            alt: 'Affiche DUT MMI'
          },
          {
            src: 'assets/images/random/psyche.png',
            info: '',
            alt: 'Photomanipulation psychédélique'
          },
          {
            src: 'assets/images/random/pub.jpg',
            info: '',
            alt: 'Pub LG TV'
          },
          {
            src: 'assets/images/random/spoof_ad.jpg',
            info: '',
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
