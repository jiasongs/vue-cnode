<template>
  <div class="pagination">
    <ul>
      <li :key="item" v-for="(item,index) in pageListCount">
        <div class="first-page" v-if="index === 0" @click="firstPageClick()">«</div>
        <div class="left-Ellipses" v-if="index === 0 && selectIndex >= 3">...</div>
        <span @click="pageClick(index)" v-if="pageIndexShow(index)" :class="{currentState:index === selectIndex}">{{item}}</span>
        <div class="right-Ellipses" v-if="index === pageListCount-1 && selectIndex <= totalPageIndex - 4">...</div>
        <div class="last-page" v-if="index === pageListCount-1" @click="lastPageClick()">»</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'pageList',
  data() {
    return {
      itemCount: 5,
      pageListCount: 5,
      totalPageIndex: 10,
      selectIndex: 0
    }
  },
  methods: {
    firstPageClick() {
      this.pageListCount = this.itemCount
      this.selectIndex = 0
      this.$store.commit('setPageIndex', 0)
    },
    lastPageClick() {
      this.pageListCount = this.totalPageIndex
      this.selectIndex = this.totalPageIndex - 1
      this.$store.commit('setPageIndex', this.selectIndex + 1)
    },
    pageIndexShow(index) {
      if (this.pageListCount > this.itemCount) {
        if (index < this.pageListCount - this.itemCount) {
          return false;
        } else {
          return true;
        }
      } else {
        return true;
      }
    },
    pageClick(index) {
      if (index > 2 && index > this.selectIndex) {
        let selectIndexTemp = this.selectIndex < 3 ? 2 : this.selectIndex
        let pageCount = this.pageListCount + (index - selectIndexTemp)
        if (pageCount <= this.totalPageIndex) {
          this.pageListCount = pageCount
        } else {
          this.pageListCount = this.totalPageIndex
        }
      } else if (index < this.selectIndex && index < this.totalPageIndex - 3 && this.pageListCount > 5) {
        let selectIndexTemp = this.selectIndex - index
        let pageCount = this.pageListCount - selectIndexTemp
        if (this.selectIndex > this.totalPageIndex - 3) {
          pageCount = index + 3
        }
        if (pageCount < this.itemCount) {
          pageCount = 5
        }
        if (index != 0) {
          this.pageListCount = pageCount
        }
      }
      this.selectIndex = index
      this.$store.commit('setPageIndex', this.selectIndex + 1)
    }
  }
}
</script>

<style scoped>
.pagination {
  background: white;
  height: 50px;
}

.first-page {
  display: inline-block;
  width: 32px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  border-right: 1px solid #dcdcdc;
  border-left: 1px solid #dcdcdc;
  cursor: pointer;
  /* border-top:1px solid #dcdcdc; 
  border-bottom:1px solid #dcdcdc;  */
  /* border-radius: 3px; */
}

.last-page {
  display: inline-block;
  width: 32px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  border-right: 1px solid #dcdcdc;
  cursor: pointer;
  /* border-top:1px solid #dcdcdc; 
  border-bottom:1px solid #dcdcdc;  */
  /* border-radius: 3px; */
}

.left-Ellipses {
  display: inline-block;
  width: 32px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  border-right: 1px solid #dcdcdc;
  /* border-top:1px solid #dcdcdc; 
  border-bottom:1px solid #dcdcdc;  */
}

.right-Ellipses {
  display: inline-block;
  width: 32px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  border-right: 1px solid #dcdcdc;
  /* border-top:1px solid #dcdcdc; 
  border-bottom:1px solid #dcdcdc;  */
}

.pagination ul {
  display: inline-block;
  margin: 0;
  padding: 10px 0px 0px 20px;
  height: 28px;
}

.pagination ul li {
  float: left;
  list-style: none;
  height: 28px;
  border-top: 1px solid #dcdcdc;
  border-bottom: 1px solid #dcdcdc;
  color: #7c8081;
  font-size: 15px;
  /* border-top:1px solid #dcdcdc; 
  border-bottom:1px solid #dcdcdc; */
}

.pagination ul li span {
  display: inline-block;
  width: 32px;
  height: 28px;
  cursor: pointer;
  text-align: center;
  line-height: 28px;
  border-right: 1px solid #dcdcdc;
  /* border-top:1px solid #dcdcdc; 
  border-bottom:1px solid #dcdcdc;  */
}

.currentState {
  color: #80bd01;
}
</style>
