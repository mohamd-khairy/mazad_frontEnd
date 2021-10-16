export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Mazad',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '/assets/css/bootstrap.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/assets/css/main.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/assets/css/blue.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/assets/css/owl.carousel.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/assets/css/owl.transitions.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/assets/css/animate.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/assets/css/rateit.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/assets/css/bootstrap-select.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/assets/css/font-awesome.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Barlow:200,300,300i,400,400i,500,500i,600,700,800' },
      { rel: 'stylesheet', type: 'text/css', href: 'http://fonts.googleapis.com/css?family=Roboto:300,400,500,700' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,300,400italic,600,600italic,700,700italic,800' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700' },
    ],
    script: [
      { src: "/assets/js/jquery-1.11.1.min.js" },
      { src: "/assets/js/bootstrap.min.js" },
      { src: "/assets/js/owl.carousel.min.js" },
      { src: "/assets/js/bootstrap-hover-dropdown.min.js" },
      { src: "/assets/js/echo.min.js" },
      { src: "/assets/js/jquery.easing-1.3.min.js" },
      { src: "/assets/js/bootstrap-slider.min.js" },
      { src: "/assets/js/jquery.rateit.min.js" },
      { src: "/assets/js/lightbox.min.js" },
      { src: "/assets/js/bootstrap-select.min.js" },
      { src: "/assets/js/wow.min.js" },
      { src: "/assets/js/scripts.js" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],//'@/assets/defaults.scss'

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
