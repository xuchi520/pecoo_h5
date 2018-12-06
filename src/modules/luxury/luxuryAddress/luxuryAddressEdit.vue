<template>
    <div class="address">
      <div class="address-edit">
        <div class="item">
          <span>收货人</span>
          <input type="text" placeholder="请输入收货人姓名" >
        </div>
        <div class="item">
          <span>联系电话</span>
          <input type="text" placeholder="请输入收货人手机号" >
        </div>
        <div class="item">
          <span>邮政编码</span>
          <input type="text" placeholder="邮政编码" >
        </div>
        <div class="item">
          <span>所在地区</span>
          <span></span>
        </div>
        <div class="item">
          <span>详细地址</span>
          <input type="text" placeholder="请输入详细收货地址" >
        </div>
        <div class="item set-default-hint">
          <img src="../../../assets/images/luxury/addr_unselect.png" alt="">
          <span class="set-default-hint">设置默认</span>
        </div>
      </div>
      <div class="address-bottom">
        <p class="addr-add">确定</p>
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
    .address-edit{
      background: #FFFFFF;
      padding: 0rem .2rem;
      .item{
        display: flex;
        background: #FFFFFF;
        border-bottom: .01rem solid #EEEEEE;
        img{
          width: .3rem;
          height: .3rem;
          margin-top: .36rem;
          margin-right: .16rem;
        }
        span{
          text-align: left;
          height: 1rem;
          float: left;
          line-height:1rem;
          font-size: .3rem;
          color: #333333;
          min-width: 1.2rem;
        }
        input{
          height: 1rem;
          margin-left: .5rem;
          line-height:1rem;
          color: #A0A0A0;
          font-size: .3rem;
          border: 0px;
          outline:none;
          cursor: pointer;
          flex: 1;
        }
      }
      .set-default-hint{
        font-size: .3rem;
        border-bottom: .01rem solid #FFFFFF;
        span{
          color: #CCCCCC;
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
