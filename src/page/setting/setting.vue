<template>
  <div>
    <vhead></vhead>
    <router-link :to="{path:'/'}">zzz</router-link>
  </div>
</template>
<script>
import vhead from '../../components/header/header.vue'
export default {
  name:'setting',
  components: {
    vhead
  }
}
</script>
<style>

</style>

