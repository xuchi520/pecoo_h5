<template>
  <div>
    <ul>
      <li v-for="item in orderType" :key="item.name">{{item.name}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'order',
  data () {
    return {
      orderType: [
        {
          id: 0,
          name: '拍品订单'
        },
        {
          id: 1,
          name: '奢侈品订单'
        },
        {
          id: 2,
          name: '金币订单'
        }
      ]
    }
  }
}
</script>
<style scoped lang="scss">

</style>
