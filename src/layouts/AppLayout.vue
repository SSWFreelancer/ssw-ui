<template>
  <div class="layout">
    <app-header></app-header>
    <div class="layout__container">
      <app-sidebar></app-sidebar>
      <div class="layout__body">
        <div class="layout__main">
          <router-view></router-view>
        </div>
        <app-footer></app-footer>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/Footer.vue";
import AppSidebar from "@/components/AppSidebar.vue";
import { mapGetters } from "vuex";
@Component({
  components: {
    AppHeader,
    AppFooter,
    AppSidebar,
  },
  computed: {
    ...mapGetters(["isDarkMode"]),
  },
})
export default class AppLayout extends Vue {
  get isDarkMode(): boolean {
    return this.$store.getters.isDarkMode;
  }

  @Watch("isDarkMode")
  onDarkModeChange(newVal: boolean) {
    if (newVal) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }

  mounted() {
    if (this.isDarkMode) {
      document.body.classList.add("dark-mode");
    }
  }
}
</script>

<style lang="sass" scoped>
.layout
  padding-top: 6rem
  @media(max-width: 768px)
    padding-top: 5rem

  &__container
    display: flex
    align-items: flex-start
  &__body
    flex: 1 1 auto
</style>
