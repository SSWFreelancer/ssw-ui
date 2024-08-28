<template>
  <aside class="sidebar" :class="isMenuOpen ? 'active' : ''">
    <div class="sidebar__wrapper rounded-md p-4">
      <div class="sidebar__lists">
        <div class="sidebar__list">
          <span> Home </span>
          <ul>
            <li>
              <router-link to="/" class="rounded-md p-2">
                <i class="pi pi-fw pi-home layout-menuitem-icon"></i>Dashboard
              </router-link>
            </li>
          </ul>
        </div>
        <div class="sidebar__list">
          <span> UI COMponents </span>
          <ul>
            <li>
              <router-link to="/formlayout" class="rounded-md p-2">
                <i class="pi pi-fw pi-id-card layout-menuitem-icon"></i>
                Form Layout
              </router-link>
              <router-link to="/input" class="rounded-md p-2">
                <i class="pi pi-fw pi-check-square layout-menuitem-icon"></i>
                Input
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="sidebar__close" @click="toggleMenu"></div>
  </aside>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters, mapActions } from "vuex";
@Component({
  computed: {
    ...mapGetters(["isMenuOpen"]),
  },
  methods: {
    ...mapActions(["toggleMenu"]),
  },
})
export default class AppSidebar extends Vue {}
</script>

<style lang="sass" scoped>
@import "@/assets/styles/sidebar.sass"
</style>
