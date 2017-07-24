<template>
  <div class="pagination">
    <ul>
      <li :key="item" v-for="(item,index) in pageListCount">
        <div class="first-page" v-if="index === 0">«</div>
        <div class="left-Ellipses" v-if="index === 0 && selectIndex >= 3">...</div>
        <span @click="pageClick(index)" v-if="pageIndexShow(index)" :class="{currentState:index === selectIndex}">{{item}}</span>
        <div class="right-Ellipses" v-if="index === pageListCount-1 ">...</div>
        <div class="last-page" v-if="index === pageListCount-1">»</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name:'pageList',
    data() {
      return {
        itemCount:5,
        pageListCount:5,
        totalPageIndex:10,
        selectIndex:0
      }
    },
    methods: {
      pageIndexShow (index) {
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
      pageClick (index) {
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
          // if (this.selectIndex > this.totalPageIndex - 2) {
          //   selectIndexTemp = selectIndexTemp - (this.selectIndex - (this.totalPageIndex - 2))
          // } // w问题所在
          if (pageCount < this.itemCount) {
              pageCount = 5
          }
          if (selectIndexTemp > 2) {
              selectIndexTemp = selectIndexTemp - 1
            }
          if (index != 0)  {
              this.pageListCount = pageCount
          }
        }
        this.selectIndex = index
      },
      // pageState (index) {
      //   if (index == this.selectIndex) {
      //     return true;
      //   } else {
      //     return false;
      //   }
      // }
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
}
.last-page {
  display: inline-block;
}
.left-Ellipses {
  display: inline-block;
}
.right-Ellipses {
  display: inline-block;
}
.pagination ul {
 float: left;
}
.pagination ul li {
  float: left;
  list-style: none;
  margin: 0 5px;
} 
.pagination ul li span{
  display: inline-block;
  border: 3px;
  border-color: red;
  width: 30px;
  height: 30px;
  text-align: center;
  cursor: default;
}
.currentState {
  color: red;
}
</style>
