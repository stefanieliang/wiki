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
              min: 2,
              type: "string",
              // 异步校验，一个函数返回布尔值
              userCheck: val => {
                return reslove => {
                  this.$axios.get("api/check?username=" + val).then(res => {
                    reslove(res.code == 0);
                  });
                };
              }
            },
            messages: {
              required: "用户名不能为空",
              min: "用户名不能少于2个字符",
              userCheck: "用户名不存在"
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
      if (ret.code == 0) {
        this.SET_TOKEN(ret.data.token);
      } else {
        this.$createToast({
          time: 2000,
          txt: ret.message || "未知错误！",
          type: "error"
        }).show();
      }
    }
  }
};
</script>
<style lang="stylus">
.login {
  margin: 30px 0;
}
</style>
