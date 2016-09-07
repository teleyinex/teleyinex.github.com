import loading from './loading.js';
import menu from './menu.js';
import closing from './closing.js';
import photography from './photos.js';
import footer from './footer.js';

window.onload = function() {
    loading.heart.animate({height: 1},  500, mina.easein);
    window.setTimeout(loading.trigger, 500);

}
