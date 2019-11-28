import Vue from 'vue'



//Content 
import pageHeader from '~/components/page-header/page-header.vue' ;
import slideGallery from '~/components/slide-gallery/slide-gallery.vue';
////
Vue.component('page-header', pageHeader) ;
Vue.component('slide-gallery', slideGallery) ;


//Forms
import contactForm from '~/components/forms/contact-form.vue';
////
Vue.component('contact-form', contactForm);


//Loaders
import ContentPanelLoader from '~/components/content-panels/Content-Panel-Loader.vue'
import SVGLoader from '~/components/svg-icons/SVG-Loader.vue';
////
Vue.component('Content-Panel-Loader', ContentPanelLoader) ;
Vue.component('SVG-Loader', SVGLoader) ;



