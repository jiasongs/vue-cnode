<template>
  <div class="index" v-show="isShow">
    <div class="article-list">
      <div class="nav-tab">
        <li :key="tab" v-for="(tab,index) in tabs">
          <div :class="{currentTabState:currentTabIndex===index}" @click="tabIndex(index)">{{tab}}</div>
        </li>
      </div>
      <li :key="item.title" v-for="item in source">
        <router-link class="author-avatar_url" :to="{path:'/setting'}" tag="div">
          <img :src="item.author.avatar_url" alt="用户头像" :title="item.author.loginname">
        </router-link>
        <div class="comment-reading">
          <div class="comment-count">{{item.reply_count}}</div>
          <div class="reading-count">{{'/'+item.visit_count}}</div>
        </div>
        <div class="stick-top" v-if="item.top==true">置顶</div>
        <div class="stick-top" v-else-if="item.good">精华</div>
        <div class="tab" v-else-if="item.tab==='ask'">问答</div>
        <div class="tab" v-else-if="item.tab==='share'">分享</div>
        <div class="tab" v-else-if="item.tab==='job'">招聘</div>
        <div class="article-title" @click="gotoArticle($event,item)">
          {{item.title}}
        </div>
        <div class="last-reply-time">{{item.last_reply_at | formatTime}}</div>
      </li>
      <vpageList></vpageList>
    </div>
  </div>
</template>

<script>
import vpageList from '../../components/pageList/pageList'
import { mapGetters } from 'vuex'
export default {
  name: 'index',
  components: {
    'vpageList': vpageList
  },
  data() {
    return {
      source: Array,
      tabs: ['全部', '精华', '分享', '问答', '招聘'],
      tabEnglish: ['all', 'good', 'share', 'ask', 'job'],
      currentTabIndex: 0,
      isShow: false
    }
  },
  mounted() {
    this.$nextTick(() => { // 请求主题首页接口,默认请求第一页
      this.isShow = false
      this.$http.get('https://cnodejs.org/api/v1/topics', {
        params: {
          page: 1
        }
      }).then((res) => {
        this.source = res.data.data
        this.isShow = true
      })
    })
  },
  activated() {
    document.title = 'cnode社区'
  },
  computed: {
    pageIndex: function () {
      return this.$store.getters.pageIndex
    }
  },
  methods: {
    tabIndex(index) {
      this.$store.commit('setPageIndex', 1)
      this.currentTabIndex = index
      let tabtemp = this.tabEnglish[index]
      if (index == 0) {
        tabtemp = '';
      }
      this.$http.get('https://cnodejs.org/api/v1/topics', {
        params: {
          page: 1,
          tab: tabtemp
        }
      }).then((res) => {
        this.source = res.data.data;
      })
    },
    gotoArticle(event, item) {
      let topicId = item.id
      this.$router.push({ name: 'topic', params: { id: topicId } })
    }
  },
  watch: {
    pageIndex: function (newValue) {
      console.log(newValue)
      let tabtemp = this.tabEnglish[this.currentTabIndex]
      if (tabtemp == 'all') {
        tabtemp = '';
      }
      this.$http.get('https://cnodejs.org/api/v1/topics', {
        params: {
          page: newValue,
          tab: tabtemp
        }
      }).then((res) => {
        this.source = res.data.data
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
      })
    }
  }
}
</script>
<style scoped>
.index {
  background: #e1e1e1;
}

.article-list {
  width: 66%;
  margin: 15px 20% 20px 8%;
  border-radius: 2px;
  border: 1px solid white;
  background: white;
}

.article-list .nav-tab {
  background: #f5f5f5;
  height: 41px;
  font-size: 15px;
}

.article-list .nav-tab li {
  list-style-type: none;
  float: left;
  margin-left: 20px;
  line-height: 40px;
}

.article-list .nav-tab .currentTabState {
  color: #ffffff;
  background: #80bd01;
  line-height: 24px;
  text-align: center;
  width: 40px;
  height: 23px;
  display: inline-block;
  border-radius: 3px;
}

.article-list .nav-tab .currentTabState:hover {
  color: #ffffff;
  background: #80bd01;
  line-height: 24px;
  text-align: center;
  width: 40px;
  height: 23px;
  display: inline-block;
  border-radius: 3px;
}

.article-list .nav-tab div {
  color: #80bd01;
}

.article-list .nav-tab div:hover {
  color: #0064a8;
  cursor: pointer;
}

.article-list li {
  list-style-type: none;
  border-top: 1px solid #f0f0f0;
}

.article-list li:hover {
  background: #f5f5f5;
}

.article-list .author-avatar_url {
  width: 30px;
  height: 30px;
  display: inline-block;
  vertical-align: middle;
  margin: 10px 0px 10px 10px;
  cursor: pointer;
}

.article-list .author-avatar_url img {
  width: 100%;
  height: 100%;
  border-radius: 3px;
}

.article-list .article-title {
  display: inline-block;
  vertical-align: middle;
<<<<<<< HEAD
  max-width: 70%;
  overflow: hidden;
  text-overflow: ellipsis;
=======
  max-width: 75%;
  white-space: nowrap;
  overflow: hidden;
  /*溢出隐藏*/
  text-overflow: ellipsis;
  /*溢出显示省略号*/
>>>>>>> 7239bcb8a79cca3c8714edb7d50e1efc15640c82
}

.article-list .last-reply-time {
  height: 51px;
  text-align: center;
  margin-right: 0px;
  float: right;
  line-height: 51px;
  margin-right: 10px;
  color: #b6b4b4;
  font-size: 12px;
}

.article-list .article-title:hover {
  text-decoration: underline;
  cursor: pointer;
}

.article-list .comment-reading {
  display: inline-block;
  width: 70px;
  vertical-align: middle;
  text-align: center;
}

.article-list .comment-reading .comment-count {
  color: #9e78c0;
  font-size: 15px;
  display: inline-block;
}

.article-list .comment-reading .reading-count {
  color: #b6b4b4;
  font-size: 12px;
  -webkit-text-size-adjust: none;
  margin-left: -5px;
  display: inline-block;
}

.article-list .stick-top {
  color: #ffffff;
  background: #80bd01;
  font-size: 12px;
  text-align: center;
  line-height: 20px;
  width: 30px;
  height: 20px;
  border-radius: 3px;
  display: inline-block;
}

.article-list .tab {
  display: inline-block;
  vertical-align: middle;
  background: #e5e5e5;
  color: #a0a0a0;
  width: 30px;
  height: 20px;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  border-radius: 3px;
}
</style>