/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */
 import { library } from '@fortawesome/fontawesome-svg-core'
 
 import { faCloud, faTools, faServer } from '@fortawesome/free-solid-svg-icons'

 import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 
 library.add(faTools, faCloud, faServer)

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements for the site.
  Vue.component('font-awesome-icon', FontAwesomeIcon)
}
