<template>
  <div class="header_box">
    <div class="nav_search_box">
      <router-link :to="{path:'/'}" tag="div">
        <img class="logo" src="/static/img/cnodejs_light.svg">
      </router-link>
      <input type="text" class="search" v-model="inputData" @keyup.enter="enter()">
    </div>
    <div class="nav_list_box">
      <ul>
        <li :key="item" v-for="(item, index) in navs">
          <div @click="goNavClick(index)" :class="{currentState:currentIndex === index}">{{item}}</div>
        </li>
      </ul>
    </div>
    <div class="nav_sss"></div>
  </div>
</template>

<script>
export default {
  // props:[
  //   currentIndex
  // ],
  data() {
    return {
      noLoginNavs: ['首页', '新手入门', 'API', '关于', '注册', '登陆'], // 未登陆时头部导航栏
      loginNavs: ['首页', '未读消息', '新手入门', 'API', '关于', '设置', '退出'], // 登陆后头部导航栏\
      inputData: ''
    }
  },
  computed: {
    currentIndex: function () {
      return this.$store.getters.currentHaderIndex
    },
    isLogin: function () {
      return this.$store.getters.isLogin
    },
    navs: function () {
      return this.isLogin ? this.loginNavs : this.noLoginNavs
    }
  },
  methods: {
    goNavClick(index) {
      this.$store.commit('setCurrentHaderIndex', index)
      if (this.isLogin) {
        switch (index) {
          case 0:
            this.$router.push({ name: 'home' });
            break;
          case 6:
            this.$store.commit('setIsLogin', false)
            this.$store.commit('setCurrentHaderIndex', 0)
            break;
          default:
            alert('未开发')
            break;
        }
      } else {
        switch (index) {
          case 0:
            this.$router.push({ name: 'home' });
            break;
          case 5:
            this.$router.push({ name: 'login' })
            break;
          default:
            alert('未开发')
            break;
        }
      }
    },
    enter() {
      window.location.href = "https://www.baidu.com/s?wd=" + this.inputData
    }
  }
}
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
}

.header_box {
  background-color: #444;
  height: 50px;
  padding: 0px;
  margin: 0px;
}

.nav_search_box {
  width: 400px;
  height: 50px;
  margin-left: 150px;
  display: inline-block;
}

.nav_search_box div {
  cursor: pointer;
  height: auto;
  width: 120px;
  float: left;
}

.nav_search_box input {
  font-size: 14px;
  line-height: 23px;
  border: none;
  outline: none;
  width: 233px;
  height: 23px;
  background: #888;
  border-radius: 13px;
  -webkit-border-radius: 13px;
  -moz-border-radius: 13px;
  margin-top: 13px;
  margin-left: 20px;
  padding-left: 10px;
  padding-left: 10px;
  transition: background .3s linear;
}

.nav_search_box input:hover {
  background: #fff;
  cursor: pointer;
}

.nav_list_box {
  height: 100%;
  float: right;
  width: 500px;
  margin-right: 50px;
}

.logo {
  height: 45px;
  max-width: 100%;
  border: 0;
}

.nav_list_box ul li {
  padding: 0 15px;
  color: #C7C7C7;
  font-size: 14px;
  height: 100%;
  list-style-type: none;
  float: left;
}

.nav_list_box div {
  height: 100%
}

.nav_list_box ul li:hover {
  color: #fff;
  cursor: pointer;
}

.nav_list_box ul .currentState {
  color: #fff;
}
</style>
