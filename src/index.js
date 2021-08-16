import { example } from './js/example.js';
// import Flickity from '@glidejs/glide';
// import Flickity from '@flickityjs/flickity';
import Flickity from '../node_modules/flickity/js/index';
import './styles/main.scss';

var carousel = document.querySelector('.carousel');
var flkty = new Flickity(carousel, {
  imagesLoaded: true,
  percentPosition: false,
  autoPlay: true,
});

var imgs = carousel.querySelectorAll('.carousel-cell img');
// get transform property
var docStyle = document.documentElement.style;
var transformProp = typeof docStyle.transform == 'string' ? 'transform' : 'WebkitTransform';

flkty.on('scroll', function () {
  flkty.slides.forEach(function (slide, i) {
    var img = imgs[i];
    var x = ((slide.target + flkty.x) * -1) / 3;
    img.style[transformProp] = 'translateX(' + x + 'px)';
  });
});

const arrowTop = document.getElementById('scrollup');

arrowTop.onclick = function () {
  window.scrollTo(pageXOffset, 0);
  // после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
};

arrowTop.addEventListener('click', () =>
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  }),
);

window.addEventListener('scroll', function () {
  console.log(pageYOffset);
  console.log(document.documentElement.clientHeight);
  //   arrowTop.hidden = pageYOffset < document.documentElement.clientHeight;
  if (pageYOffset > document.documentElement.clientHeight) {
    arrowTop.style.opacity = '1';
  } else {
    arrowTop.style.opacity = '0';
  }
  //    arrowTop.style.opacity = 1 = pageYOffset < document.documentElement.clientHeight;
});
