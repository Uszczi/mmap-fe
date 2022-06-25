<template>
  <hello-world />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import getRoutes from "@/api/routes";

// Components
import HelloWorld from "../components/HelloWorld.vue";

export default defineComponent({
  name: "HomeView",

  async onMounted() {
    console.log("sdfaf");
    await getRoutes();
  },

  components: {
    HelloWorld
  }
});
</script>
