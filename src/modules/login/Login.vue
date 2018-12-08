<template>
    <div class="login">
        <pecoo-header>
            <a href="javascript:window.history.go(-1)" slot="left" class="back">
                <img src="../../assets/images/common/return.png" alt="" class="back-arrow">
            </a>
            <a href="/register" slot="right">
                注册
            </a>
        </pecoo-header>
        <router-link :to="{name:'index'}" >
            <img src="../../assets/images/common/logo.png" class="logoImg"/>
        </router-link>
        <!--登录-->
        <div class="loginFrom form">
            <yd-cell-group>
                <yd-cell-item>
                    <input type="number" slot="right" placeholder="输入手机号" v-model="userName" ref="userName">
                    <span slot="right">+86</span>
                </yd-cell-item>
                <!--短信-->
                <yd-cell-item v-show="loginText=='账号密码登录'">
                    <input type="text" slot="right" placeholder="输入验证码" v-model="smsCode" maxlength="6" ref="smsCode">
                    <yd-sendcode slot="right"
                                v-model="start1"
                                @click.native="getCode"
                                type="warning"
                                run-str="{%s}s"
                                init-str="获取验证码"
                                reset-str="重新获取"
                    ></yd-sendcode>
                </yd-cell-item>
                <!--账号-->
                <yd-cell-item v-show="loginText=='短信验证码登录'">
                    <input type="password" slot="right" placeholder="输入密码" v-model="password" maxlength="20" ref="password">
                    <span slot="right"></span>
                </yd-cell-item>
                <!--切换-->
                <div class="loginText">
                    <span class="left" @click="changeLogin">{{loginText}}</span>
                    <span class="right" v-show="loginText=='短信验证码登录'">
                        <router-link :to="{name:'forgetPassword'}">忘记密码</router-link>
                    </span>
                </div>
                <button class="submit" v-if="loginText=='短信验证码登录'" @click="loginPass">登录</button>
                <button class="submit" v-else @click="loginSms">登录</button>
            </yd-cell-group>
        </div>
    </div>
</template>
<script>
import {smsLoginIn, LoginIn, getLoginVerificationCode} from '../../api/resetApi.js'
import md5 from 'js-md5'
export default {
  data () {
    return {
      start1: false,
      userName: '',
      smsCode: '',
      password: '',
      loginText: '短信验证码登录'
    }
  },
  computed: {
    pathUrl () {
      if (this.$route.query.path) {
        if (this.$route.query.path.href) {
          return this.$route.query.path.href
        } else {
          return this.$route.query.path
        }
      } else {
        return null
      }
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
          timeout: 500
        })
      }, 1000)
    },
    // 改变登录显示
    changeLogin () {
      if (this.loginText === '短信验证码登录') {
        this.loginText = '账号密码登录'
      } else {
        this.loginText = '短信验证码登录'
      }
    },
    // 获取手机验证码
    async getCode () {
      if (this.getPhone()) {
        let data = {
          mobile: this.userName
        }
        let res = await getLoginVerificationCode(data)
        try {
          if (res.data.code === '10000') {
            this.sendCode1()
          }
        } catch (error) {
          console.log(error)
        }
      }
    },
    // 手机验证码登录
    async loginSms () {
      if (this.getPhone() && this.getSms()) {
        let data = {
          mobile: this.userName,
          messageCode: this.smsCode
        }
        let res = await smsLoginIn(data)
        try {
          if (res.data.code === '10000') {
            this.$store.commit('userInfo', res.data.result)
            this.$store.commit('tokenId', res.data.result.tokenId)
            this.$store.commit('userId', res.data.result.id)
            localStorage.setItem('userInfo', res.data.result)
            localStorage.setItem('tokenId', res.data.result.tokenId)
            localStorage.setItem('userId', res.data.result.id)
            this.$router.go(0)
            if (this.pathUrl) {
              if (this.pathUrl.indexOf('etail') > -1 || this.pathUrl.indexOf('auction') > -1 || this.pathUrl.indexOf('list') > -1) {
                window.location.href = encodeURI(this.pathUrl)
              } else {
                window.location.href = '/'
              }
            } else {
              window.location.href = '/'
            }
          } else {
            this.errorLoginShow = false
            this.loading = false
            // this.errorLogin = res.data.msg
          }
        } catch (error) {
          console.log(error)
        }
      }
    },
    // 密码登录
    async loginPass () {
      if (this.getPhone() && this.getPassword()) {
        let data = {
          mobile: this.userName,
          pwd: md5(this.password)
        }
        let res = await LoginIn(data)
        try {
          if (res.data.code === '10000') {
            this.$store.commit('userInfo', res.data.result)
            this.$store.commit('tokenId', res.data.result.tokenId)
            this.$store.commit('userId', res.data.result.id)
            localStorage.setItem('userInfo', res.data.result)
            localStorage.setItem('tokenId', res.data.result.tokenId)
            localStorage.setItem('userId', res.data.result.id)
            this.$router.go(0)
            if (this.pathUrl) {
              if (this.pathUrl.indexOf('luxury') > -1 || this.pathUrl.indexOf('etail') > -1 || this.pathUrl.indexOf('auction') > -1 || this.pathUrl.indexOf('list') > -1) {
                window.location.href = encodeURI(this.pathUrl)
              } else {
                window.location.href = '/'
              }
            } else {
              window.location.href = '/'
            }
          }
        } catch (error) {
          console.log(error)
        }
      }
    },
    // 校验手机
    getPhone () {
      let mobile = /(^1[0-9]{10}$)/
      if (this.userName === '') {
        this.$dialog.notify({
          mes: '请输入您的手机号',
          timeout: 1500
        })
        this.$refs.userName.focus()
        return false
      } else if (!mobile.test(this.userName)) {
        this.$dialog.notify({
          mes: '请输入正确的手机号码',
          timeout: 1500
        })
        this.$refs.userName.focus()
        return false
      }
      return true
    },
    // 校验短信验证码
    getSms () {
      let smsCode = /(^[0-9]{6}$)/
      if (this.smsCode === '') {
        this.$dialog.notify({
          mes: '请输入短信验证码',
          timeout: 1500
        })
        this.$refs.smsCode.focus()
        return false
      } else if (!smsCode.test(this.smsCode)) {
        this.$dialog.notify({
          mes: '请输入正确的短信验证码',
          timeout: 1500
        })
        this.$refs.smsCode.focus()
        return false
      }
      return true
    },
    // 校验密码
    getPassword () {
      let password = /^[A-Za-z0-9]{6,20}$/
      if (this.password === '') {
        this.$dialog.notify({
          mes: '请输入密码',
          timeout: 1500
        })
        this.$refs.password.focus()
        return false
      } else if (!password.test(this.password)) {
        this.$dialog.notify({
          mes: '密码为6-20位',
          timeout: 1500
        })
        this.$refs.password.focus()
        return false
      }
      return true
    }
  }
}

</script>
<style lang="scss" scoped>
    .logoImg{
        width: 1.8rem;
        display: block;
        margin: 1.68rem auto 0.5rem auto;
    }
    .loginText{
        padding: 0.3rem 0 0.1rem 0;
        border:none;
        span{
            font-size: 0.24rem;
            a{
                font-size: 0.24rem;
                color: #999;
            }
        }
        .right{
            display: block;
            float: right;
        }
    }
    .loginFrom{
        padding: 0 0.74rem;
    }
</style>
