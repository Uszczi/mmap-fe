<template>
  <div style="height: 90%; width: 90%">
    <l-map :center="[51.7645091, 19.4385541]" :zoom="12">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></l-tile-layer>

      <l-circle v-for="point in points" :lat-lng="[point[0], point[1]]" />
    </l-map>
  </div>
</template>
<script>
import getRoutes from "@/api/routes";
import { LMap, LTileLayer, LCircle } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";

export default {
  components: {
    LMap,
    LTileLayer,
    LCircle,
  },
  data() {
    return {
      routes: [],
      points: [],
    };
  },
  async mounted() {
    const routes = await getRoutes();
    this.routes = routes;
    const points = [];
    for (const route of routes) {
      points.push(...route.points);
    }
    this.points = points;
  },
};
</script>
