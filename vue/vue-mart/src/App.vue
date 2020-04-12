<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link> |
      <span v-if="isLogin" @click="logout">退出</span>
    </div>-->
    <cube-tab-bar v-model="selectedLabel" :data="tabs" show-slider @change="changeHandler"></cube-tab-bar>
    <transition name="route-move">
      <!-- vue动效 -->
      <router-view />
    </transition>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      selectedLabel: "/",
      tabs: [
        {
          label: "Home",
          value: "/",
          icon: "cubeic-home"
        },
        {
          label: "Cart",
          value: "/cart",
          icon: "cubeic-mall"
        },
        {
          label: "Me",
          value: "/login",
          icon: "cubeic-person"
        }
      ]
    };
  },
  computed: {
    isLogin() {
      return !!this.$store.state.token;
    }
  },
  created() {
    this.selectedLabel = this.$route.path;
  },
  methods: {
    changeHandler(label) {
      // if you clicked different tab, this methods can be emitted
      this.$router.push({ path: label });
    },
    logout() {
      this.$axios.get("/api/logout");
    }
  }
};
</script>

<style lang="stylus">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.route-move-enter, .route-move-leave-active {
  transform: translate(100%, 0);
}

.route-move-active, .route-move-leave-active {
  transition: transform 0.3s;
}
</style>
