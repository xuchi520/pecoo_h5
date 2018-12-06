<template>
  <div class="title">
    <img @click="lClick()" :src="leftImg" alt>
    <slot></slot>
    <img @click="rClick()" src="../../assets/images/luxury/search_icon.png" alt>
  </div>
</template>

<script>
export default {
  data () {
    return {
      leftImg: require('../../assets/images/luxury/search_icon.png')
    }
  },
  computed: {
  },
  methods: {
    lClick () {
      this.$emit('leftClick')
    },
    rClick () {
      this.$emit('rightClick')
    }
  }
}
</script>

<style lang="scss" scoped>
  .title {
    height: 0.88rem;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 0 0.3rem;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    font-size: 0.34rem;
    z-index: 999;
  img {
    width: 0.34rem;
    height: 0.34rem;
  }
  }
</style>
