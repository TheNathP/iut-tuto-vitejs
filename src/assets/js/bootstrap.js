import Alpine from 'alpinejs';
import Slider from './components/Slider.js';
import Gallery from './components/Gallery.js';
import {intersect} from "@alpinejs/intersect";

window.Alpine = Alpine;

Alpine.data('Slider', Slider);
Alpine.data('Gallery', Gallery);
Alpine.plugin(intersect)
Alpine.start();
