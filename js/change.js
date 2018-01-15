i = 0;

//affichage img + txt
function affichage() {
    XHR = new XMLHttpRequest();
    XHR.open('GET', chrome.extension.getURL('assets/docs/data.json'), false);
    //XHR.onreadystatechange=function(){}
    XHR.send();

    var data = XHR.responseText;
    var nb = JSON.parse(data).length;
    console.log(nb);

    var txt = eval('(' + data + ')');
    //afiche titre
    document.getElementById('title').innerHTML = txt[i].Title;
    //affiche auteur et date
    document.getElementById('details').innerHTML = txt[i].Details;
    //affiche image
    document.getElementById('image').src = txt[i].Image + ".jpg";
    //affiche nb_img & total
    document.getElementById('nb_img').innerHTML = i+1 + "/" + nb;
  }

  /*changement image automatique
      function auto() {
        var XHR = new XMLHttpRequest() ;
        XHR.open('GET', 'assets/docs/data.json', false) ;
        XHR.send(null) ;
        var data = XHR.responseText;

        var txt = eval('(' + data + ')');
          i++;
          //afiche titre
          document.getElementById('title').innerHTML = txt[i].Title;
          //affiche auteur et date
          document.getElementById('details').innerHTML = txt[i].Details;
          //affiche image
          document.getElementById('image').src = txt[i].Image + ".jpg";
          if (i > 3) {
              i = -1;
          }
      }
*/
      //suivant
        function suiv() {

          var XHR = new XMLHttpRequest() ;
          XHR.open('GET', 'assets/docs/data.json', false) ;
          XHR.send(null) ;
          var data = XHR.responseText;
          var nb = JSON.parse(data).length;
          console.log(nb);

          var txt = eval('(' + data + ')');

          i++;
          if (i > nb-1){
            i = 0;
          };
          affichage(txt);



        }
