var app = new Vue({
    el: '#app',
    data: {
      projects: [
      {
        title: "Brutalist",
        description: "LOREM IPSUM",
        currentNumber: 0,
        images : [
                  {src: 'assets/images/brutalist001.jpg'},
                  {src: 'assets/images/rough-concrete.jpg'},
                  {src: 'assets/images/brutal-building.jpg'},
                  {src: 'assets/images/spomenik.jpg'},
                  {src: 'assets/images/capsule-tower.jpg'}
                ]
      },
      {
        title: "Brutalist",
        description: "LOREM IPSUM",
        currentNumber: 0,
        images : [
                  {src: 'assets/images/rough-concrete.jpg'},
                  {src: 'assets/images/brutalist001.jpg'},
                  {src: 'assets/images/brutal-building.jpg'},
                  {src: 'assets/images/spomenik.jpg'},
                  {src: 'assets/images/capsule-tower.jpg'}
                ]
      },
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
