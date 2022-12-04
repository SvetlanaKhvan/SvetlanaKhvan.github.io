const hamburgerBtn = document.querySelector('.hamburgerButton');
hamburgerBtn.addEventListener('click', showNavMobile);

function personalInfoCard () {
  let card = document.getElementsByClassName('card')[0];
  if(card.classList.contains('activeCard')) {
    card.classList.remove('activeCard');
  } else {
    card.classList.add('activeCard');
  }
}

function certificateCard (i) {
  let card = document.getElementsByClassName('card')[i];
  if(card.classList.contains('activeCard')) {
    card.classList.remove('activeCard');
  } else {
    card.classList.add('activeCard');
  }
}

function showNavMobile () {
  let navMobile = document.getElementsByClassName('navMobile')[0];
  if (navMobile.classList.contains('showNavMobile')) {
    navMobile.classList.remove('showNavMobile');
  } else {
    navMobile.classList.add('showNavMobile');
  }
}