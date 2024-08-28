<template>
  <dashboard-page></dashboard-page>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DashboardPage from "@/components/DashboardPage.vue";
@Component({
  components: {
    DashboardPage,
  },
})
export default class DashboardView extends Vue {}
</script>
