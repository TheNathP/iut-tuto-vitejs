import Alpine from 'alpinejs';
import Slider from './components/Slider.js';
import Gallery from './components/Gallery.js';

window.Alpine = Alpine;

Alpine.data('Slider', Slider);
Alpine.data('Gallery', Gallery);
Alpine.start();
