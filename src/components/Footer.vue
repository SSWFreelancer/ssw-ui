<template>
  <div class="footer mt-6">
    Sarvar by
    <a
      href="https://primevue.org"
      target="_blank"
      rel="noopener noreferrer"
      class="text-primary font-bold hover:underline"
      >PrimeVue</a
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class AppFooter extends Vue {}
</script>

<style lang="sass" scoped>
@import "@/assets/styles/base/variables.sass"
.footer
    display: flex
    align-items: center
    justify-content: center
    padding: 1rem 0
    gap: .5rem
    border-top: 1px solid var(--textcolor)
</style>
