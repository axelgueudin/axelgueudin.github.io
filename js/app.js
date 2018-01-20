var app = new Vue({
    el: '#app',
    data: {
      projects: [
      {
        title: "BFM TV Rebrand",
        description: "Student project - Made with a friend",
        currentNumber: 0,
        images : [
                  {src: 'assets/images/bfm/logo.jpg'},
                  {src: 'assets/images/bfm/logos.jpg'},
                  {src: 'assets/images/bfm/cards.jpg'},
                  {src: 'assets/images/bfm/wall_1.jpg'},
                  {src: 'assets/images/bfm/wall_2.jpg'}
                ]
      },
      {
        title: "Prisme Brand",
        description: "Student project - Made with a friend",
        currentNumber: 0,
        images : [
                  {src: 'assets/images/prisme/logo.jpg'},
                  {src: 'assets/images/prisme/logo_multi.jpg'},
                  {src: 'assets/images/prisme/carte_mockup.jpg'},
                  {src: 'assets/images/prisme/presentation.jpg'},
                  {src: 'assets/images/prisme/vinyle.jpg'}
                ]
      },
      {
        title: "Cartoon Network Rebrand",
        description: "Student project - WIP",
        currentNumber: 0,
        images : [
                  {src: 'assets/images/cn/cn.jpg'},
                  {src: 'assets/images/cn/gumball.jpg'},
                  {src: 'assets/images/cn/adventure_time.jpg'},
                  {src: 'assets/images/cn/regular_show.jpg'}
                ]
      },
      {
        title: "Devoteam",
        description: "Internship - various creations",
        currentNumber: 0,
        images : [
                  {src: 'assets/images/devoteam/catcher.png'},
                  {src: 'assets/images/devoteam/workspace.png'},
                  {src: 'assets/images/devoteam/phare.png'},
                  {src: 'assets/images/devoteam/kite.png'},
                  {src: 'assets/images/devoteam/hive.png'},
                  {src: 'assets/images/devoteam/kc.png'},
                  {src: 'assets/images/devoteam/cubes.png'},
                  {src: 'assets/images/devoteam/column.png'},
                  {src: 'assets/images/devoteam/lines.png'}
                ]
      }
    ]
  },
    methods: {
      toggle: function(event){
          var target = event.target.nextElementSibling;
          target.classList.toggle('visible');
        },
        next: function(project){
          return (project.currentNumber == project.images.length-1) ? project.currentNumber = 0 : project.currentNumber += 1;
        }
      }
    });

/* THANKS TO MATHIAS HOEG WEBSITE, FOR THE WORKING SLIDER :)
AJAX + JSON was my fist try but it's bad
Used Matthias Hager tutorial for the slider, but had no idea how to loop to make more than 1 slider */
