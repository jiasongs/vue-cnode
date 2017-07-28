<template>
  <div class="header_box">
    <div class="nav_search_box">
      <router-link :to="{path:'/'}" tag="div"><img src="../../assets/nodejs.png"></router-link>
      <input type="text" class="search">
      <!-- <span class="fa fa-search"></span> -->
    </div>    
    <div class="nav_list_box">
      <ul>
        <li :key="item" v-for="(item, index) in navs">
          <div @click="goNavClick(index)" :class="{currentState:currentIndex === index}">{{item}}</div>       
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  // props:[
  //   currentIndex
  // ],
  data () {
    return {
      noLoginNavs: ['首页', '新手入门', 'API', '关于', '注册', '登陆'], // 未登陆时头部导航栏
      loginNavs: ['首页', '未读消息', '新手入门', 'API', '关于', '设置', '退出'] // 登陆后头部导航栏\
    }
  },
  computed: {
    currentIndex:function() {
      return this.$store.getters.currentHaderIndex
    },
    isLogin:function() {
      return this.$store.getters.isLogin
    },
    navs:function(){
      return this.isLogin ? this.loginNavs : this.noLoginNavs
    }
  },
  methods: {
    goNavClick (index) {
      this.$store.commit('setCurrentHaderIndex',index)
      if (this.isLogin) {
        switch (index) {
        case 0:
          this.$router.push({name:'home'});
          break;
        case 6:
          this.$store.commit('setIsLogin',false)
          this.$store.commit('setCurrentHaderIndex',0)
          break;
        default:
          alert('未开发')
          break;
      }
      } else {
        switch (index) {
        case 0:
          this.$router.push({name:'home'});
          break;
        case 5:
          this.$router.push({name:'login'})
          break;
        default:
          alert('未开发')
          break;
      }
      }
      
    }
  }
}
</script>

<style>
body {
  margin:0px;
  padding:0px;
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
  display: inline-block;
  line-height: 50px;
  height: 50px;
  cursor: pointer;
  margin-top: 2px;
}
.nav_search_box a img {
  width: 120px;
  height: 50px;
}
.nav_search_box input {
  font-size: 14px;
  border: none;
  outline: none;
  width: 233px;
  height: 25px;
  background: #888;
  border-radius: 13px;
  -webkit-border-radius: 13px; 
  -moz-border-radius: 13px; 
  position: absolute;
  margin-top: 12px;  
  margin-left: 10px; 
  padding-left:10px;
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
  margin-right: 20px;
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
