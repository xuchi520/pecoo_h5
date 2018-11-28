<template>
    <div>
        <router-view></router-view>
        <!--footer-->
        <pecoo-footer></pecoo-footer>
    </div>
</template>
<script>
import pecooFooter from '@/components/common/Footer'
export default {
  data () {
    return {

    }
  },
  components: {
    pecooFooter
  }
}
</script>
