<template>
  <div class="home">
    <cube-slide ref="slide" :data="slider" @change="changePage">
      <cube-slide-item v-for="(item, index) in slider" :key="index">
        <router-link :to="`/detail/${item.id}`">
          <img :src="item.img" />
        </router-link>
      </cube-slide-item>
    </cube-slide>

    <!-- <goods-list :data="all"></goods-list> -->
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      slider: [],
      keys: [],
      data: {}
    };
  },
  computed: {
    all() {
      const ret = [];
      this.keys.forEach(v => {
        ret = ret.concat(this.data[v]);
      });
      return ret;
    }
  },
  async created() {
    const ret = await this.$axios("/api/goods");
    this.slider = ret.slider;
    this.keys = ret.keys;
    this.data = ret.data;
  }
};
</script>
