<template>
    <div>
        <div>首页</div>
    </div>
</template>
<script>
import pecooFooter from '@/components/common/Footer'
export default {
  data () {
    return {
      footerData: [
        {
          title: '首页',
          link: '',
          active: true,
          imgUrl: 'http://static.ydcss.com/ydui/img/logo.png'
        },
        {
          title: '首页',
          link: '',
          active: false,
          imgUrl: 'http://static.ydcss.com/ydui/img/logo.png'
        },
        {
          title: '首页',
          link: '',
          active: false,
          imgUrl: 'http://static.ydcss.com/ydui/img/logo.png'
        },
        {
          title: '首页',
          link: '',
          active: false,
          imgUrl: 'http://static.ydcss.com/ydui/img/logo.png'
        },
        {
          title: '首页',
          link: '',
          imgUrl: 'http://static.ydcss.com/ydui/img/logo.png'
        }
      ]
    }
  },
  components: {
    pecooFooter
  }
}
</script>
