<template>
  <div class="goods">
    <div>商品组件</div>
     <router-link to="/goodsdetail/水果详情">水果</router-link>
     <router-link to="/goodsdetail/衣服详情">衣服</router-link>
     <router-link to="/goodsdetail/电子详情">电子</router-link>
  </div>
</template>

<script>
export default {
  name: 'Goods',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
