<template>
  <div class="mine">
    <div class="header">
      <img class="avater" src="../../assets/logo.png" alt="">
      <div class="name-msg">
        <p class="name">我的昵称</p>
        <p class="approve">已认证</p>
      </div>
    </div>
    <div class="order-outer">
      <div class="order">
        <router-link to="/order" class="title">
          <span class="my-order">我的订单</span><span class="order-all">查看全部</span>
        </router-link>
        <ul class="order-status">
          <li v-for="item in orderStatus" :key="item.name">
            <img src="../../assets/logo.png" alt="" width="35px" height="35px">
            <router-link :to="item.url">{{item.name}}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="hr"></div>
    <div class="function">
      <div class="item">
        <img src="../../assets/images/mine/my_collect.png" alt="">
        <p>我的收藏</p>
      </div>
      <div class="item">
        <img src="../../assets/images/mine/my_collect.png" alt="">
        <p>我的收藏</p>
      </div>
      <div class="item item-last">
        <img src="../../assets/images/mine/my_collect.png" alt="">
        <p>我的收藏</p>
      </div>
    </div>
    <div class="function">
      <div class="item">
        <img src="../../assets/images/mine/my_collect.png" alt="">
        <p>我的收藏</p>
      </div>
      <div class="item">
        <img src="../../assets/images/mine/my_collect.png" alt="">
        <p>我的收藏</p>
      </div>
      <div class="item item-last">
        <img src="../../assets/images/mine/my_collect.png" alt="">
        <p>我的收藏</p>
      </div>
    </div>
    <div class="new-user">
      <p class="title">新手任务</p>
      <div class="user-task">
        <div class="item">
          <img src="../../assets/logo.png" alt="">
          <p>完成注册</p>
        </div>
        <div class="item">
          <img src="../../assets/logo.png" alt="">
          <p>完成注册</p>
        </div>
        <div class="item">
          <img src="../../assets/logo.png" alt="">
          <p>完成注册</p>
        </div>
      </div>
    </div>
    <div class="service-tel">
      客服热线:400-888-8888
    </div>
    <pecoo-footer></pecoo-footer>
  </div>
</template>

<script>
import pecooFooter from '../../components/common/PecooFooter'
export default {
  name: 'Mine',
  data () {
    return {
      orderStatus: [
        {
          url: '',
          name: '待付款'
        },
        {
          url: '',
          name: '待发货'
        },
        {
          url: '',
          name: '待收货'
        },
        {
          url: '',
          name: '已完成'
        }
      ]
    }
  },
  components: {
    pecooFooter
  }
}
</script>

<style lang="scss" scoped>
  .mine{
    .header{
      background: #1A191E;
      height: 2.5rem;
      display: flex;
      padding-top:.6rem;
      padding-bottom:.7rem;
      .avater{
        margin-left: .56rem;
        margin-right: .4rem;
        width: 1.3rem;
        height: 1.3rem;
        border-radius: 50%;
        border: 0.06rem solid #48474B;
      }
      .name-msg{
        display: flex;
        justify-content: space-between;
        color: #FFFFFF;
        font-size: .42rem;
        flex-direction: column;
        .approve{
          color: #1A191E;
          font-size: .24rem;
          background: #F4990C;
          width: 1rem;
          height: .4rem;
          line-height: .4rem;
          text-align: center;
          border-radius: .2rem;
        }
      }
    }
    .order-outer{
      background: #1A191E;
      .order{
        background: #FFFFFF;
        border-radius: 0.15rem 0.15rem 0rem 0rem;
        .title{
          display: flex;
          justify-content: space-between;
          padding: 0rem .3rem;
          border-bottom: 0.01rem solid #E2E2E2;
          .my-order{
            color: #333333;
            font-size: .26rem;
            height: .8rem;
            line-height: .8rem;
          }
          .order-all{
            color: #999999;
            font-size: .24rem;
            height: .8rem;
            line-height: .8rem;
          }
        }
        .order-status{
          @include justify;
          li{
            @include column;
          }
        }
      }
    }
    .hr{
      height: .2rem;
      background: #F3F3F3;
    }
    .function{
      display: flex;
      .item{
        flex: 1;
        text-align: center;
        padding: .72rem 0rem .6rem 0rem;
        border-bottom: .01rem solid #E2E2E2 ;
        border-right: .01rem solid #E2E2E2 ;
        img{
          width: .7rem;
          height: .7rem;
        }
        p{
          margin-top: .14rem;
          color: #666666;
          font-size: .24rem;
        }
      }
      .item-last{
        border-right: 0rem ;
      }
    }
    .new-user{
      padding: .3rem;
      .title{
        color: #333333;
        font-size: .28rem;
      }
      .user-task{
        display: flex;
        .item{
          margin-top: .3rem;
          flex: 1;
          text-align: center;
          img{
            width: .4rem;
          }
        }
      }
    }
    .service-tel{
      height: 1rem;
      line-height: 1rem;
      font-size: .28rem;
      color: #999999;
      text-align: center;
      background: #F3F3F3;
    }
  }
</style>
