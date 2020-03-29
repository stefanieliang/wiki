<template>
  <div class="login">
    <cube-form
      :model="model"
      :schema="schema"
      @validate="validateHandler"
      @submit="submitHandler"
    ></cube-form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      model: {
        username: "",
        passwd: ""
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
    validateHandler(result) {
      // console.log("validateHandler...", result);
    },
    async submitHandler(e) {
      e.preventDefault();

      const obj = {
        username: this.model.username,
        passwd: this.model.passwd
      };
      const ret = await axios.get("/api/login", { params: obj });
      console.log(ret);
      if (ret.status == 200) {
        if (ret.data.code == "0000") {
        } else {
          const toast = this.$createToast({
            time: 2000,
            txt: ret.data.message || "未知错误！",
            type: "error"
          });
          toast.show();
        }
      } else {
        // 服务器错误
      }
    }
  }
};
</script>
<style lang="stylus">
.login
  margin 30px 0
</style>
