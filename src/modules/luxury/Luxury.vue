<template>
    <div>
        <router-view></router-view>
        <!--footer-->
        <pecoo-footer></pecoo-footer>
    </div>
</template>
<script>
import pecooFooter from '../../components/common/PecooFooter'
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
