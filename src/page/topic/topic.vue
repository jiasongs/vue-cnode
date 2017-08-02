<template>
  <div class="topic" v-show="isShow" v-title="source.title">
    <div class="topic_list">
      <div class="topic_head">
        <div class="topic_title">{{source.title}}</div>
        <div class="topic_detail">
          <span>{{create_time}}</span>
          <span>{{' 作者 ' + source.author.loginname}} </span>
          <span>{{' ' + source.visit_count + ' 次浏览'}}</span>
          <span v-if="source.tab==='share'">{{' 来自 '+ '分享'}}</span>
          <span v-if="source.tab==='ask'">{{' 来自 '+ '问答'}}</span>
          <span v-if="source.tab==='job'">{{' 来自 '+ '招聘'}}</span>
          <span v-if="source.tab==='goof'">{{' 来自 '+ '精华'}}</span>
        </div>
      </div>
      <div class="topic_content" v-html="content">{{content}}</div>
    </div>
    <div class="topic_comment_list">
      <div class="comment_header">
        <span>{{source.reply_count + ' 回复'}}</span>
      </div>
      <ul class="comment_detail">
        <li :key="item.content" v-for="(item,index) in replies">
          <router-link to="" class="comment_detail_avatar">
            <img :src="item.author.avatar_url" alt="用户头像">
          </router-link>
          <div class="comment_detail_userInfo">
            <router-link to="" class="comment_detail_username">{{item.author.loginname}}</router-link>
            <router-link to="" class="comment_detail_usertime">{{index + 1 + '楼•' + formatTime(item.create_at)}}</router-link>
            <span class="comment_detail_author" v-if="item.author.loginname === source.author.loginname">作者</span>
          </div>
          <div class="comment_detail_content" v-html="item.content">{{item.content}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { formatTime, transferString } from '../../global/global'
export default {
  name: 'topic',
  data() {
    return {
      source: { author: { loginname: '' } },
      isShow: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.isShow = false
      let topicId = this.$route.params.id
      let url = 'https://cnodejs.org/api/v1/topic/' + topicId
      this.$http.get(url, {
        params: {

        }
      }).then((res) => {
        this.isShow = true
        this.source = res.data.data
      })
    })
  },
  computed: {
    create_time: function () { // 发布时间
      let time = formatTime(this.source.create_at)
      return ' 发布于 ' + time
    },
    content: function () { // 内容
      // let contentString = transferString(this.source.content)
      return this.source.content
    },
    replies: function () { // 评论列表
      return this.source.replies
    }
  },
  methods: {
    formatTime
  }
}
</script>

<style>
.topic {
  background: #e1e1e1;
  font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma, "Hiragino Sans GB", STHeiti, sans-serif!important;
}

.topic_list {
  width: 66%;
  margin: 15px 20% 20px 8%;
  border-radius: 2px;
  border: 1px solid white;
  background: white;
}

.topic_head {
  /* height: 65px; */
  vertical-align: middle;
  width: 100%;
  border-bottom: 1px solid #e6e6e6;
}

.topic_head .topic_title {
  /* display: block;
  height: 20px; */
  font-size: 22px;
  font-weight: 700;
  /* margin-left: 10px;
  margin-top: 15px; */
  margin: 15px 15px 0px 15px;
  vertical-align: center;
  color: #313534;
}

.topic_head .topic_detail {
  font-size: 12px;
  color: #838383;
  margin: 5px 0px 5px 15px;
  /* margin-left: 10px;
  margin-top: 5px;  */
}

.topic_head span::before {
  content: "•";
}

.topic_content {
  display: block;
  margin: 0px 20px 0px 20px;
  font-size: 15px;
}

.topic_content p strong {
  font-weight: 700;
  color: #313534;
}

.topic_content a {
  color: #008bcf;
  text-decoration: none;
}

.topic_content a:hover {
  text-decoration: underline;
}

.topic_content img {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
  border: 0;
}

.topic_comment_list {
  width: 66%;
  margin: 15px 20% 20px 8%;
  border-radius: 2px;
  border: 1px solid white;
  background: white;
}

.comment_header {
  padding: 10px;
  background-color: #f6f6f6;
  border-radius: 3px 3px 0 0;
  font-size: 15px;
}

.comment_header span {
  color: #444;
}

.comment_detail {
  list-style: none;
  padding-left: 10px;
}

.comment_detail_avatar {
  display: inline-block;
  text-decoration: none;
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.comment_detail_avatar img {
  width: 100%;
  height: 100%;
  border-radius: 3px;
}

.comment_detail_content {
  margin-left: 40px;
  margin-right: 40px;
  font-size: 15px;
}

.comment_detail_content blockquote {
  padding: 0 0 0 15px;
  margin: 0 0 20px;
  border-left: 5px solid #eee;
  display: block;
  -webkit-margin-before: 1em;
  -webkit-margin-after: 1em;
  -webkit-margin-start: 40px;
  -webkit-margin-end: 40px;
}

.comment_detail_content p {
  margin-top: 0px;
}

.comment_detail_userInfo {
  display: inline-block;
  font-size: 13px;
  margin-left: 5px;
  vertical-align: top;
}

.comment_detail_username {
  color: #666;
  text-decoration: none
}

.comment_detail_usertime {
  text-decoration: none;
  color: #08c;
  font-size: 12px;
}

.comment_detail_author {
  color: #fff;
  background-color: #6ba44e;
  padding: 2px;
  font-size: 12px;
}

.comment_detail_content a {
  color: #008bcf;
  text-decoration: none;
}

.comment_detail_content img {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
  border: 0;
}

.comment_detail_content a:hover {
  text-decoration: underline;
}
</style>
