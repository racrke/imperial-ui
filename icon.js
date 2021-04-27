import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebookF, faInstagram)

Vue.component('fa-icon', FontAwesomeIcon)