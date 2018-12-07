<!--
组件开发要点：
1.将touchmove事件绑定在window上
2.使用document.elementFromPoint(x, y)方法，根据距离可视区的x，y的坐标，来确定对应的元素。
    https://developer.mozilla.org/zh-CN/docs/Web/API/Document/elementFromPoint
3.mask显示的位置
-->
<template>
  <div class="letter" @touchstart="handleTouchStart">
    <ul>
      <li v-for="item in letterList" v-bind:key="item.title" class="letter-nav-item">{{item.title}}</li>
    </ul>
    <div class="tip-mask" v-show="isShow" ref="mask">{{currentIndicator}}</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      navOffsetX: '',
      currentIndicator: '',
      isShow: false,
      maskTimer: null
    }
  },
  props: {
    letterList: {
      type: Array
    }
  },
  watch: {
    currentIndicator: function (newValue) {
      if (!newValue) return
      this.$emit('letter-nav-index', newValue)
    }
  },
  components: {

  },
  created () {

  },
  methods: {
    handleTouchStart (e) {
      if (e.target.tagName !== 'LI') {
        return
      }
      this.navOffsetX = e.changedTouches[0].clientX
      this.scrollList(e.changedTouches[0].clientY)
      clearTimeout(this.maskTimer)
      this.$refs.mask.style.left = -(document.documentElement.clientWidth / 2 + 2.5) + 'px'
      this.isShow = true
      window.addEventListener('touchmove', this.handleTouchMove, { passive: false })
      // passive相关作用说明：https://segmentfault.com/a/1190000008512184
      window.addEventListener('touchend', this.handleTouchEnd)
    },
    handleTouchMove (e) {
      e.preventDefault()
      this.scrollList(e.changedTouches[0].clientY)
    },
    scrollList (y) {
      let currentItem = document.elementFromPoint(this.navOffsetX, y)
      if (!currentItem || !currentItem.classList.contains('letter-nav-item')) {
        return
      }
      this.currentIndicator = currentItem.innerText
    },
    handleTouchEnd () {
      this.maskTimer = setTimeout(() => {
        this.isShow = false
        this.currentIndicator = ''
      }, 500)
      window.removeEventListener('touchmove', this.handleTouchMove)
      window.removeEventListener('touchend', this.handleTouchEnd)
    }
  },
  mounted () {

  }
}
</script>
<style lang='scss' scoped>
.letter {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  max-height: 100%;
  position: fixed;
  top: .88rem;
  bottom: 0;
  right: 0;
  ul {
    display: flex;
    flex-direction: column;
    li {
      font-size: 0.14rem;
      box-sizing: border-box;
      padding: 0.04rem 0.12rem;
      color: #333;
    }
  }
  .tip-mask {
    position: absolute;
    width: 1rem;
    height: 1rem;
    top: 50%;
    left: 50%;
    transform: translate(0, -50%);
    text-align: center;
    line-height: 1rem;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 0.1rem;
    color: #fff;
    font-size: 0.44rem;
  }
}
</style>
