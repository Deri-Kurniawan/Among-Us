const rain = (amount = 5) => {
  const body = document.querySelector('body');
  let i = 0;

  while(i < amount) {
    let drop = document.createElement('span');
    let size = Math.random() * 5;
    let posX = Math.floor(Math.random() * window.innerWidth);
    let delay = Math.random() * -20;
    let duration = Math.random * 5;
    
    drop.innerHTML = '.';
    drop.style.width = `${0.2+size}px`;
    drop.style.left = posX+'px';
    drop.style.animationDelay = `${1+delay}s`;
    drop.style.animationDuration = `${1+duration}s`;
    body.appendChild(drop);
    i++;
  }
}

window.addEventListener('DOMContentLoaded', rain(200));
window.addEventListener('resize', rain(200));