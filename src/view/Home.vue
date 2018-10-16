<template>
  <div class="home">
    <router-link to="/">首页</router-link>
    <router-link to="/goods">商品</router-link>
    <router-link to="/my">我的</router-link>
    <div>
      <span class="iconfont">&#xe635;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
