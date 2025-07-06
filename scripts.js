//Função responsável por mudar o conteúdo
function mudaTab(e, tabName) {
     var i, tabcontent, tablinks;
  
    //Oculta todos os conteúdos
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    //Remove a classe "active" dos links
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    //Mostra a tab e coloca no link a classe "active"
    document.getElementById(tabName).style.display = "block";
    e.currentTarget.className += " active";
  }