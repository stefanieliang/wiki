<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  async created() {
    const ret = await this.$axios.get("/api/authapi");
    console.log(ret);
  }
};
</script>