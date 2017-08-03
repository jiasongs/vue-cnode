<template>
  <div class="main">
    <vhead></vhead>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <vfooter></vfooter>
  </div>
</template>

<script>
import vhead from '../../components/header/header'
import vfooter from '../../components/footer/footer'
export default {
  name: 'main',
  components: {
    vhead,
    vfooter
  }
}
</script>

<style>
.main {
  background: #e1e1e1;
}
</style>
