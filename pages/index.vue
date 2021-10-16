
<template>
  <div class="home">
    <body class="cnt-home">
      <!-- ============================================== HEADER ============================================== -->
      <Header />

      <Body :categories="categories" />

      <Footer />
      <!-- ============================================== FOOTER ============================================== -->
    </body>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'home',
  head() {
    return {
      title: 'Movie App - Latest Streaming Movie Info',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Get all the latest streaming movies in theaters & online',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'movies, stream, stremaing',
        },
      ],
    }
  },

  data() {
    return {
      categories: [],
    }
  },

  async mounted() {
    await this.getCategories()
  },
  fetchDelay: 1000,

  methods: {
    async getCategories() {
      const data = axios.get(
        `https://mazad-app.herokuapp.com/api/get-public-data`
      )
      const result = await data
      this.categories = result.data.data.categories
      console.log(this.categories)
    },
  },
  watch: {},
}
</script>