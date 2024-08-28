<template>
  <inputs-page></inputs-page>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import InputsPage from "@/components/InputsPage.vue";
@Component({
  components: {
    InputsPage,
  },
})
export default class Input extends Vue {}
</script>
