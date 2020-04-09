<template>
  <div class="login">
    <cube-form :model="model" :schema="schema" @validate="validateHandler" @submit="submitHandler"></cube-form>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      model: {
        username: "ld",
        passwd: "123"
      },
      schema: {
        fields: [
          {
            type: "input",
            modelKey: "username",
            label: "用户名",
            props: {
              placeholder: "请输入用户名"
            },
            rules: {
              required: true,
              message: "用户名不能为空"
            },
            trigger: blur
          },
          {
            type: "input",
            modelKey: "passwd",
            label: "密码",
            props: {
              type: "password",
              placeholder: "请输入密码"
            },
            rules: {
              required: true,
              message: "密码不能为空"
            },
            eye: {
              open: true,
              reverse: false
            },
            trigger: blur
          },
          {
            type: "submit",
            label: "登录"
          }
        ]
      }
    };
  },
  methods: {
    ...mapMutations(["SET_TOKEN"]),
    validateHandler(result) {
      // console.log("validateHandler...", result);
    },
    async submitHandler(e) {
      e.preventDefault();

      const obj = {
        username: this.model.username,
        passwd: this.model.passwd
      };
      const ret = await this.$axios.get("/api/login", { params: obj });
      this.SET_TOKEN(ret.token);
    }
  }
};
</script>
<style lang="stylus">
.login {
  margin: 30px 0;
}
</style>
