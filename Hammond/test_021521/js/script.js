function switchTabs(evt, idName) {
  if(!evt.currentTarget.parentNode.className){
    let firstTabs = ['metal', '304', '316'];
    let secondTabs = ['metal_disconnect', '304_disconnects', '316_disconnects'];
    let tabContent, tabPane, tabName;
    switch (idName) {
      case 'metal_disconnect':
        tabName = "metal";
        break;
      case '304_disconnects':
        tabName = "304";
        break;
      case '316_disconnects':
        tabName = "316";
        break;
      default:
        tabName = idName;
    }
    tabContent = document.getElementsByClassName(tabName + "-tab-content");
    tabPane = document.getElementsByClassName(tabName + "-tab-pane");
    for (i = 0; i < tabPane.length; i++) {
      tabPane[i].className = tabPane[i].className.replace("active", "");
    }
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none"; 
    }
  
    document.getElementById(idName).style.display = "block";
    evt.currentTarget.className += "active";
    evt.currentTarget.parentNode.className += "active";
    if (firstTabs.includes(idName)) {
      evt.currentTarget.parentNode.nextElementSibling.className = "";
    }
    if (secondTabs.includes(idName)) {
      evt.currentTarget.parentNode.parentNode.firstElementChild.className = "";
    }
  }
} 

function dropMenu(event) {
  document.getElementById("myDropdown").classList.toggle("show");
  event.currentTarget.addEventListener("click", function(event){
    event.preventDefault()
  });
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 

let isAnimating, iconNames, toggle;
let timer = [];

function animateIcons(i) {
  iconNames = ['chem_resist', 'dustproof', 'submersible', 'uv_protect', 'weatherproof'];
  if (!(isAnimating)) {
    isAnimating = true;
    let startPlay = false;
    for (let a = 0 ; a < iconNames.length; a++) {
      if (!startPlay && isAnimating) {
        document.getElementsByClassName(iconNames[a])[i].className.baseVal = "animation_" + iconNames[a];
        startPlay = true;
      } 
      if (document.getElementsByClassName(iconNames[a+1])[i] === undefined && !(iconNames[a][i] === iconNames[iconNames.length-1][i])) {
        iconNames.splice(a+1, 1);
      }
      timer.push(setTimeout(() => {
        document.getElementsByClassName('animation_' + iconNames[a])[0].className.baseVal = iconNames[a];
        if (a<iconNames.length-1) {
          document.getElementsByClassName(iconNames[a+1])[i].className.baseVal = 'animation_' + iconNames[a+1];
        }
        if (a === iconNames.length-1) {
          toggle = false;
          unanimate();
        }
      }, 1000*(a+1)));
    } 
  }
}

function unanimate() {
  for (let b = 0; b < iconNames.length; b++) {
    if (document.getElementsByClassName('animation_' + iconNames[b])[0]){
      document.getElementsByClassName('animation_' + iconNames[b])[0].className.baseVal = iconNames[b]
    }
  }
  timer.forEach(function(timer){
    clearTimeout(timer), 0
  })
  timer = [];
  isAnimating = false;
}

function onClickToggle(i) {
  if (!toggle) {
    animateIcons(i)
    toggle = true;
  } else {
    unanimate()
    toggle = false;
  }
}

