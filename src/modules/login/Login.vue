<template>
    <div>
        <pecoo-header>
            <a href="javascript:window.history.go(-1)" slot="left" class="back">
                <img src="../../assets/images/common/return.png" alt="" class="back-arrow">
            </a>
            <a href="javascript:window.history.go(-1)" slot="right">
                注册
            </a>
        </pecoo-header>
        <router-link :to="{name:'index'}" >
            <img src="../../assets/images/common/logo.png" class="logoImg"/>
        </router-link>
        <!--登录-->
        <yd-cell-group>
            <yd-cell-item>
                <yd-icon slot="icon" name="phone3" size=".45rem"></yd-icon>
                <input type="text" slot="right" placeholder="请输入手机号码">

                <!-- ↓↓关键代码是这里↓↓ -->
                <yd-sendcode slot="right"
                            v-model="start1"
                            @click.native="sendCode1"
                            type="warning"
                ></yd-sendcode>
                <!-- ↑↑关键代码是这里↑↑ -->

            </yd-cell-item>
        </yd-cell-group>
    </div>
</template>
<script>
export default {
  data () {
    return {
      start1: false
    }
  },
  methods: {
    sendCode1 () {
      this.$dialog.loading.open('发送中...')
      setTimeout(() => {
        this.start1 = true
        this.$dialog.loading.close()

        this.$dialog.toast({
          mes: '已发送',
          icon: 'success',
          timeout: 1500
        })
      }, 1000)
    }
  }
}

</script>
<style lang="scss" scoped>
    .logoImg{
        width: 1.8rem;
        display: block;
        margin: 1.68rem auto 0.3rem auto;
    }
</style>
