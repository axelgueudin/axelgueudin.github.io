var app = new Vue({
  el: '#app',
  data: {
    projects: [
      {
        title: "<a href='/biotica'>Biotica</a> - Hybrid game about biodiversity ",
        description: "[WIP] - Made with <a href='https://bance-sarah.github.io/portfolio/' target='_blank' rel='noreferrer, noopener'>Sarah Bance</a>",
        currentNumber: 0,
        images: [{
            src: 'assets/images/biotica/visuel.jpg',
            info: 'Visuel de présentation du jeu avec logo',
            alt: 'Visuel / logo'
          },
          {
            src: 'assets/images/biotica/croquis/zone.jpg',
            info: 'Croquis d\'une tuile',
            alt: 'Croquis tuile '
          },
          {
            src: 'assets/images/biotica/croquis/carte.jpg',
            info: 'Croquis d\'une carte',
            alt: 'Croquis carte'
          },
          {
            src: 'assets/images/biotica/personas.jpg',
            info: 'Personas',
            alt: 'Personas'
          },
          {
            src: 'assets/images/biotica/scenario_usage/elise.jpg',
            info: 'User journey persona Elise',
            alt: 'User journey persona Elise'
          },
          {
            src: 'assets/images/biotica/scenario_usage/ecran.jpg',
            info: 'Wireframe de l\'application',
            alt: 'Wireframe app'
          },
          {
            src: 'assets/images/biotica/protopa/full.jpg',
            info: 'Prototype v1',
            alt: 'Prototype v1'
          },
          {
            src: 'assets/images/biotica/protopa/menu.jpg',
            info: 'Prototype papier de l\'application',
            alt: 'Prototype papier app'
          },
          {
            src: 'assets/images/biotica/protopa/interaction.jpg',
            info: 'Prototype papier de l\'application',
            alt: 'Prototype papier app'
          },
          {
            src: 'assets/images/biotica/cartes/characters.jpg',
            info: 'Cartes personnages',
            alt: 'Cartes personnages'
          },
          {
            src: 'assets/images/biotica/cartes/ressources.jpg',
            info: 'Cartes ressources / actions de la ville / espèce invasive',
            alt: 'Cartes ressources / actions de la ville / espèce invasive'
          },
          {
            src: 'assets/images/biotica/photos/full.jpg',
            info: '',
            alt: 'Jeu hybride'
          },
          {
            src: 'assets/images/biotica/photos/fullGame.jpg',
            info: '',
            alt: 'Jeu en cours'
          },
          {
            src: 'assets/images/biotica/photos/closeUp.jpg',
            info: '',
            alt: 'Zoom sur le jeu'
          },
          {
            src: 'assets/images/biotica/photos/arbres.jpg',
            info: 'Cartes ressources / Espèce invasive',
            alt: 'Cartes'
          },
          {
            src: 'assets/images/biotica/photos/main.jpg',
            info: '',
            alt: 'Cartes en main'
          },
          {
            src: 'assets/images/biotica/photos/interaction.jpg',
            info: 'Interaction avec le prototype interactif sous Adobe xd',
            alt: 'Interaction prototype'
          },
          {
            src: 'assets/images/biotica/photos/ra1.jpg',
            info: 'Simulation de la réalité augmenté avec un application android',
            alt: 'Simulation AR'
          },
          {
            src: 'assets/images/biotica/photos/ra2.jpg',
            info: 'Simulation de la réalité augmenté avec un application android',
            alt: 'Simulation AR'
          },
          {
            src: 'assets/images/biotica/xd.jpg',
            info: '<a href="https://xd.adobe.com/view/2cf9b88f-6f3a-4189-524f-524bb835325c-5ac8/" target="_blank" rel="noreferrer, noopener">Manipuler le prototype interactif</a>',
            alt: 'Lien prototype'
          },
        ]
      },
      {
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
        title: "Musée de la Chasse & de la Nature - Rebrand Idea",
        description: "Student project - Made with <a href='https://bance-sarah.github.io/portfolio/' target='_blank' rel='noreferrer, noopener'>Sarah Bance</a>",
        currentNumber: 0,
        images: [
          {
            src: 'assets/images/mcn/logo.jpg',
            info: 'Logo Musée de la Chasse & de la Nature',
            alt: 'Logo - MCN'
          },
          {
            src: 'assets/images/mcn/cards.jpg',
            info: 'Mockup Carte de visite',
            alt: 'Mockup Carte de visite'
          },
          {
            src: 'assets/images/mcn/affiche_bus.jpg',
            info: 'Mockup Affiche Arrêt de bus',
            alt: 'Mockup Affiche Arrêt de bus'
          },
          {
            src: 'assets/images/mcn/affiche_metro.jpg',
            info: 'Mockup Affiche Métro',
            alt: 'Mockup Affiche Métro'
          },
          {
            src: 'assets/images/mcn/affiche_vitrine.jpg',
            info: 'Mockup Affiche vitrine',
            alt: 'Mockup Affiche vitrine'
          },
          {
            src: 'assets/images/mcn/affiche_wall.jpg',
            info: 'Mockup Affiches mur',
            alt: 'Mockup Affiches mur'
          },
          {
            src: 'assets/images/mcn/affiche_wallB.jpg',
            info: 'Mockup Affiche mur',
            alt: 'Mockup Affiche mur'
          },
          {
            src: 'assets/images/mcn/banner.jpg',
            info: 'Mockup Drapeaux',
            alt: 'Mockup Drapeaux'
          },
          {
            src: 'assets/images/mcn/tasse.jpg',
            info: 'Mockup Tasse à café',
            alt: 'Mockup Mug'
          },
          {
            src: 'assets/images/mcn/tote.jpg',
            info: 'Mockup Tote bag',
            alt: 'Mockup Tote bag'
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
        title: "<a href='https://resonancem1.wordpress.com/' target='_blank' rel='noreferrer, noopener'>Resonance</a>",
        description: "Student project",
        currentNumber: 0,
        images: [{
            src: 'assets/images/resonance/visuel.jpg',
            info: 'Logo Resonance',
            alt: 'Logo Resonance'
          }
        ]
      },
      {
        title: "BFM TV Rebrand Idea",
        description: "Student project - Made with <a href='https://bance-sarah.github.io/portfolio/' target='_blank' rel='noreferrer, noopener'>Sarah Bance</a>",
        currentNumber: 0,
        images: [{
            src: 'assets/images/bfm/logo.jpg',
            info: 'Logo BFMTV',
            alt: 'Logo principal BFMTV'
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
        title: "Personal creations",
        description: "Find more on <a href='https://dribbble.com/lXlON' target='_blank' rel='noreferrer, noopener'>Dribbble</a>",
        currentNumber: 0,
        images: [
          {
            src: 'assets/images/random/atlas_m.jpg',
            info: 'Photomanipulation Altas portant la Terre',
            alt: 'Photomanipulation Altas portant la Terre'
          },
          {
            src: 'assets/images/random/les_pluriels.jpg',
            info: 'Affiche Festival Les Pluriels 20e Edition',
            alt: 'Affiche Festival Les Pluriels 20e Edition'
          },
          {
            src: 'assets/images/random/pub.jpg',
            info: 'Fake Pub LG TV',
            alt: 'Pub LG TV'
          },
          {
            src: 'assets/images/random/spoof_ad.jpg',
            info: 'Fake pub Nike',
            alt: 'Fake pub Nike'
          }
        ]
      }
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
tried AJAX + JSON // didnt work well
Matthias Hager slider tutorial, but had no idea how to loop well the slider*/
