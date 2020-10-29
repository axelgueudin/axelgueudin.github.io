var app = new Vue({
  el: '#app',
  data: {
    projects: [
      {
        title: "Assassin's Creed Odyssey - Inventory Menu redesign",
        tag: "UI Design",
        description: "Personal project",
        currentNumber: 0,
        images: [{
            src: 'assets/images/ac_ody/cover.png',
            info: '',
            alt: 'Project cover'
          },
          {
            src: 'assets/images/ac_ody/wireframe new inventory.png',
            info: 'Wireframe inventory',
            alt: 'Wireframe inventory'
          },
          {
            src: 'assets/images/ac_ody/new inventory.png',
            info: 'Mockup Inventory',
            alt: 'Mockup Inventory'
          },
          {
            src: 'assets/images/ac_ody/raccourcis quick wireframe.png',
            info: 'Wireframe Loadout Inventory Menu',
            alt: 'Wireframe Loadout Inventory Menu'
          },
          {
            src: 'assets/images/ac_ody/mockup new shortcut.png',
            info: 'Mockup PC Shortcuts',
            alt: 'Mockup PC Shortcuts'
          },
          {
            src: 'assets/images/ac_ody/raccourcis wireframe console.png',
            info: 'Wireframe Console Shortcuts',
            alt: 'Wireframe Console Shortcuts'
          },
          {
            src: 'assets/images/ac_ody/raccourcis wireframe console-1.png',
            info: 'Wireframe Console Shortcuts',
            alt: 'Wireframe Console Shortcuts'
          },
          {
            src: 'assets/images/ac_ody/mockup new shortcut console.png',
            info: 'Mockup Console Shortcuts',
            alt: 'Mockup Console Shortcuts'
          },
          {
            src: 'assets/images/ac_ody/mockup new shortcut console-1.png',
            info: 'Mockup Console Shortcuts',
            alt: 'Mockup Console Shortcuts'
          }
        ]
      },
      {
        title: "[WIP] FPS SCI-FI Loadout Menu",
        tag: "UI Design",
        description: "Personal project",
        currentNumber: 0,
        images: [{
            src: 'assets/images/ui_exo/loadout.jpg',
            info: 'Loadout Menu',
            alt: 'Loadout Menu'
          },
          {
            src: 'assets/images/ui_exo/loadout-inventory.jpg',
            info: 'Loadout inventory Menu',
            alt: 'Loadout inventory Menu'
          },
          {
            src: 'assets/images/ui_exo/wireframe-loadout.jpg',
            info: 'Wireframe Loadout Menu',
            alt: 'Wireframe Loadout Menu'
          },
          {
            src: 'assets/images/ui_exo/wireframe-inventory.jpg',
            info: 'Wireframe Loadout Inventory Menu',
            alt: 'Wireframe Loadout Inventory Menu'
          },
          {
            src: 'assets/images/ui_exo/moodboard.jpg',
            info: 'Moodboard',
            alt: 'Moodboard'
          }
        ]
      },
      {
        title: "<a href='/biotica'>Biotica</a> - Hybrid game about biodiversity ",
        tag: "UI Design / Art Direction / Unity Dev",
        description: "[WIP] - Made with <a href='https://www.behance.net/sarahbance/' target='_blank' rel='noreferrer, noopener'>Sarah Bance</a>",
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
            info: '-',
            alt: 'Jeu hybride'
          },
          {
            src: 'assets/images/biotica/photos/fullGame.jpg',
            info: '-',
            alt: 'Jeu en cours'
          },
          {
            src: 'assets/images/biotica/photos/arbres.jpg',
            info: 'Cartes ressources / Espèce invasive',
            alt: 'Cartes'
          },
          {
            src: 'assets/images/biotica/photos/main.jpg',
            info: '-',
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
        title: "Master DGDI Identity",
        tag: "Branding",
        description: "Personal project",
        currentNumber: 0,
        images: [{
            src: 'assets/images/dgdi/logo.jpg',
            info: 'Logo DGDI',
            alt: 'Logo DGDI'
          },
          {
            src: 'assets/images/dgdi/logos.jpg',
            info: 'Déclinaisons logo DGDI',
            alt: 'Déclinaisons logo DGDI'
          },
          {
            src: 'assets/images/dgdi/full.jpg',
            info: 'Elements identité visuelle',
            alt: 'Elements identité visuelle'
          },
          {
            src: 'assets/images/dgdi/cartes.jpg',
            info: 'Cartes de Visite',
            alt: 'Cartes de Visite'
          },
          {
            src: 'assets/images/dgdi/card_etu.jpg',
            info: 'Cartes étudiante DGDI',
            alt: 'Cartes étudiante DGDI'
          },
          {
            src: 'assets/images/dgdi/hoodie.jpg',
            info: 'Hoodie',
            alt: 'Mockup Hoodie vert'
          },
          {
            src: 'assets/images/dgdi/bracelet.jpg',
            info: 'Bracelet RFID remplaçant la carte étudiante',
            alt: 'Bracelet RFID remplaçant la carte étudiante'
          },
          {
            src: 'assets/images/dgdi/flag.jpg',
            info: 'Flag',
            alt: 'Mockup de drapeau'
          },
          {
            src: 'assets/images/dgdi/bus.jpg',
            info: 'Affiche Portes Ouvertes',
            alt: 'Affiche Portes Ouvertes'
          },
          {
            src: 'assets/images/dgdi/seri.jpg',
            info: '-',
            alt: 'Serigraphy picture with gradient + Logo'
          },
          {
            src: 'assets/images/dgdi/proto.jpg',
            info: '-',
            alt: 'Prototype picture with gradient + Logo'
          },
          {
            src: 'assets/images/dgdi/tri.jpg',
            info: '-',
            alt: 'UX Workshop with gradient + Logo'
          }
        ]
      },
      {
        title: "Musée de la Chasse & de la Nature - Rebrand Idea",
        tag: "Branding",
        description: "Made with <a href='https://www.behance.net/sarahbance/' target='_blank' rel='noreferrer, noopener'>Sarah Bance</a>",
        currentNumber: 0,
        images: [{
            src: 'assets/images/mcn/logo.jpg',
            info: 'Logo Musée de la Chasse & de la Nature',
            alt: 'Logo - MCN'
          },
          {
            src: 'assets/images/mcn/cards.jpg',
            info: 'Carte de visite',
            alt: 'Mockup Carte de visite'
          },
          {
            src: 'assets/images/mcn/affiche_bus.jpg',
            info: 'Affiche Arrêt de bus',
            alt: 'Mockup Affiche Arrêt de bus'
          },
          {
            src: 'assets/images/mcn/affiche_metro.jpg',
            info: 'Affiche Métro',
            alt: 'Mockup Affiche Métro'
          },
          {
            src: 'assets/images/mcn/affiche_vitrine.jpg',
            info: 'Affiche vitrine',
            alt: 'Mockup Affiche vitrine'
          },
          {
            src: 'assets/images/mcn/affiche_wall.jpg',
            info: 'Affiches mur',
            alt: 'Mockup Affiches mur'
          },
          {
            src: 'assets/images/mcn/affiche_wallB.jpg',
            info: 'Affiche mur',
            alt: 'Mockup Affiche mur'
          },
          {
            src: 'assets/images/mcn/banner.jpg',
            info: 'Drapeaux',
            alt: 'Mockup Drapeaux'
          },
          {
            src: 'assets/images/mcn/tasse.jpg',
            info: 'Tasse à café',
            alt: 'Mockup Mug'
          },
          {
            src: 'assets/images/mcn/tote.jpg',
            info: 'Tote bag',
            alt: 'Mockup Tote bag'
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
tried AJAX + JSON // didnt work well
Matthias Hager slider tutorial, but had no idea how to loop well the slider*/
