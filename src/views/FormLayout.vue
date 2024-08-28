<template>
  <form-layout-page></form-layout-page>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FormLayoutPage from "@/components/FormLayoutPage.vue";
@Component({
  components: {
    FormLayoutPage,
  },
})
export default class FormLayout extends Vue {}
</script>
