import Alpine from 'alpinejs';
import intersect from '@alpinejs/intersect';
import Slider from './components/Slider.js';
import Gallery from './components/Gallery.js';


window.Alpine = Alpine;
Alpine.plugin(intersect);

Alpine.data('Slider', Slider);
Alpine.data('Gallery', Gallery);
Alpine.start();
