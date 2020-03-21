<template>
  <div class="content-wrapper bg-background-primary font-sans text-copy-primary leading-normal flex flex-col min-h-screen" :class="`theme-${theme}`">
    <navbar />
    <nuxt />
  </div>
</template>

<script>
import navbar from '~/components/Navbar.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    navbar
  },
  computed: {
    ...mapGetters({ theme: 'global/getTheme', menu: 'global/getMenu' })
  }
}
</script>
