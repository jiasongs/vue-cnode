<template>
  <div class="login">
    <div class="login_back">
      <div class="login_nav">
        <!-- e2028045-5fa8-4a16-b75e-3d5d9b6ee714 -->
        <div class="login_nav_mark">
          <span>主页 /</span>
          <span> 登录</span>
        </div>
      </div>
      <span class="user_name">accesstoken:</span>
      <input class="user_name_input" type="text" v-model="accesstoken">
      <br>
      <button class="login_btn" @click="loginClick">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      accesstoken: '',
      results: {}
    }
  },
  methods: {
    loginClick() {
      if (this.accesstoken != '') {
        this.$http.post('https://cnodejs.org/api/v1/accesstoken', {
          accesstoken: this.accesstoken
        }).then((res) => {
          this.results = res.data
          if (this.results.success) {
            this.$store.commit('setIsLogin', true)
            this.$store.commit('setCurrentHaderIndex', 0)
            this.$router.push({ name: 'home' })
          }
        }).catch((err) => {
          console.log(err)
          alert('请输入正确的‘accesstoken’')
        })
      } else {
        alert('用户名不能为空!')
      }
    }
  }
}
</script>

<style>
.login {
  background: #e1e1e1;
}

.login_back {
  width: 70%;
  margin: 15px 20% 20px 10%;
  border-radius: 2px;
  border: 1px solid white;
  background: white;
}

.login_nav {
  background: #f5f5f5;
  height: 41px;
  font-size: 15px;
}

.login_nav_mark {
  display: inline-block;
  vertical-align: middle;
  height: 41px;
  line-height: 41px;
  text-align: center;
}

.user_name {
  margin: 50px 0px 80px 80px;
}

.user_name_input {
  margin: 50px 0px 0px 10px;
  border-radius: 2px;
  padding: 0px;
  border: 1px solid #e1e1e1;
  height: 25px;
  width: 260px;
  padding-left: 5px;
  outline: none;
}

.login_btn {
  margin: 20px 0px 20px 150px;
  width: 200px;
  height: 30px;
  background: #80bd01;
  border: 0px;
  color: white;
  border-radius: 3px;
  outline: none;
}








































/* .login_btn:focus {
  margin: 20px 0px 20px 150px;
  width: 200px;
  height: 30px;
  background: #80bd01;
  border: 0px;
  color: white;
  border-radius: 3px;
} */
</style>
