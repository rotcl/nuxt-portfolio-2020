<template>
  <header class="border-t-4 border-yellow-600">
    <nav
      class="container mx-auto flex flex-wrap justify-between items-center py-4"
    >
      <div>
        <nuxt-link to="/">
          <img src="/ir.png" class="w-10" alt="logo" />
        </nuxt-link>
      </div>
      <div class="block lg:hidden">
        <theme />
      </div>
      <div class="block lg:hidden">
        <button
          @click="toggleMenu"
          class="flex items-center px-3 py-2 hover:text-gray-600 hover:border-gray-600"
        >
          <svg
            class="current-color h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
              fill="gray"
            />
          </svg>
        </button>
      </div>
      <ul
        class="uppercase tracking-wide font-bold w-full hidden flex-grow lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0"
      >
        <li class="mr-8 md-6">
          <theme />
        </li>
      </ul>
      <ul
        class="uppercase tracking-wide font-bold w-full block flex-grow lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0"
        :class="menu ? 'block' : 'hidden'"
      >
        <li class="mr-8 mb-6 lg:mb-0">
          <nuxt-link to="/" class="text-copy-primary hover:text-gray-600"
            >Link</nuxt-link
          >
        </li>
        <li class="mr-8 mb-6 lg:mb-0">
          <nuxt-link to="/" class="text-copy-primary hover:text-gray-600"
            >Link</nuxt-link
          >
        </li>
        <li class="mr-8 mb-6 lg:mb-0">
          <nuxt-link to="/" class="text-copy-primary hover:text-gray-600"
            >Link</nuxt-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import theme from "~/components/ThemeController";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({ theme: "global/getTheme", menu: "global/getMenu" })
  },
  methods: {
    toggleMenu() {
      this.$store.commit("global/changeMenu", !this.menu);
    }
  },
  components: {
    theme
  }
};
</script>
