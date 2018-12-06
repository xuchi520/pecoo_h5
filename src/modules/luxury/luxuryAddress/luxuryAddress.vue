<template>
    <div class="address">
      <div class="item">
        <p class="name"><span>名字</span><span class="tel">123465456</span></p>
        <p class="addr">北京市朝阳区长时间次点击</p>
        <div class="operate">
          <p class="setup-default">设置默认地址</p>
          <p class="setup-operate">
            <img src="../../../assets/images/luxury/addr_edit.png" alt="">
            <span>编辑</span>
          </p>
          <p class="setup-operate">
            <img src="../../../assets/images/luxury/addr_del.png" alt="">
            <span>删除</span>
          </p>
        </div>
      </div>
      <div class="address-bottom">
        <p class="addr-add">添加新地址</p>
      </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .address{
    background: #F3F3F3;
    height: 100%;
    padding: .2rem;
    .item{
      padding: .4rem .2rem;
      background: #FFFFFF;
      border-radius: 0.08rem;
      .name{
        color: #333333;
        font-size: .26rem;
        font-weight: bold;
        .tel{
          margin-left: .4rem;
        }
      }
      .addr{
        color: #666666;
        font-size: .26rem;
        padding: .4rem 0rem;
        border-bottom: 0.01rem solid #E2E2E2;
      }
      .operate{
        margin-top: .4rem;
        display: flex;
        .setup-default{
          /*color: #D74A42;*/
          color: #BBBBBB;
          font-size: .24rem;
          flex: 1;
        }
        .setup-operate{
          margin-left: .4rem;
          height: .32rem;
          line-height: .32rem;
          display: flex;
          img{
            width: .32rem;
          }
          span{
            height: .32rem;
            line-height: .32rem;
            margin-left: .1rem;
          }
        }
      }
    }
    .address-bottom{
      height: 1.3rem;
      background: #FFFFFF;
      padding: .2rem;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      .addr-add{
        background: #1A191E;
        color: #FFFFFF;
        height: .9rem;
        line-height: .9rem;
        font-size: .3rem;
        text-align: center;
      }
    }
  }
</style>
