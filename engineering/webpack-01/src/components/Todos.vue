<template>
  <div>
    <h1>vue支持</h1>
    <ul>
      <li
        v-for="(item,index) in todos"
        :key="index"
      >{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      todos: ["todo1", "todo2"]
    };
  }
};
</script>
<style scoped>
ul {
  color: blue;
}
</style>