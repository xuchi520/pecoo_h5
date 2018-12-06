import {Auth, PecooIndex, userCenter, Classify, Detail, Auction, Order, userCard, luxuryGoods} from './path'
import {requestControl} from './requestControl'
import bus from '../main'
let baseUrl = 'https://api.pecoo.com'
let thirdUrl = 'https://www.pecoo.com'// 第三方回调地址
// let baseUrl = 'https://testapi.pecoo.com'
// let thirdUrl = 'https://testpc.pecoo.com'// 第三方回调地址
let luxuryUrl = 'https://recommend.pecoo.com'
// 拍品搜索
export function doSearch (data) {
  return requestControl(PecooIndex.doSearch, data, bus)
}
// 底部二维码
export function indexqueryQRcode (data) {
  return requestControl(PecooIndex.indexqueryQRcode, data, bus)
}
// 插入拍品数据
export function saveBidGoods (data) {
  return requestControl(PecooIndex.saveBidGoods, data, bus)
}
// 首页精选接口
export function IndexAuctiongoods (data) {
  return requestControl(PecooIndex.IndexAuctiongoods, data, bus)
}
// 查询拍品订单列表
export function getorderlist (data) {
  return requestControl(Order.getorderlist, data, bus)
}
// 支付15分钟确定
export function updateCancelFrozenMoney (data) {
  return requestControl(Order.updateCancelFrozenMoney, data, bus)
}
// 拍品取消订单
export function getorderCancel (data) {
  return requestControl(Order.getorderCancel, data, bus)
}
// 拍品确认收货
export function getorderReceive (data) {
  return requestControl(Order.getorderReceive, data, bus)
}
// 查询拍品订单详情
export function getorderdetail (data) {
  return requestControl(Order.getorderdetail, data, bus)
}
// 获取用户竞拍订单付款相关信息
export function getorderpaymess (data) {
  return requestControl(Order.getorderpaymess, data, bus)
}
// 查看拍品物流
export function expressinfoDetail (data) {
  return requestControl(Order.expressinfoDetail, data, bus)
}
// 实时物流
export function expressinfoqueryexpressinfo (data) {
  return requestControl(Order.expressinfoqueryexpressinfo, data, bus)
}
// 推荐订单列表
export function queryChannelOrderList (data) {
  return requestControl(Order.queryChannelOrderList, data, bus)
}
// 微信支付返回
export function qOrderStatus (data) {
  return requestControl(Order.qOrderStatus, data, bus)
}
/**
 * 第三方登录
 */
// 手机号绑定第三方平台
export function thirdbind (data) {
  return requestControl(Auth.thirdbind, data, bus)
}
// 获取绑定第三方平台短信验证码
export function thirdgetBindMessageCode (data) {
  return requestControl(Auth.thirdgetBindMessageCode, data, bus)
}
// 查询手机号是否存在&&是否绑定第三方平台
export function thirdisbind (data) {
  return requestControl(Auth.thirdisbind, data, bus)
}
// 查询手机号是否绑定第三方平台<用于展示绑定状态>
export function thirdisbindthirdplatform (data) {
  return requestControl(Auth.thirdisbindthirdplatform, data, bus)
}
// 查询手机号在系统中是否存在
export function thirdisexist (data) {
  return requestControl(Auth.thirdisexist, data, bus)
}
// 第三方登录接口
export function thirdlogin (data) {
  return requestControl(Auth.thirdlogin, data, bus)
}
// 第三方登录注册提交接口
export function thirdregister (data) {
  return requestControl(Auth.thirdregister, data, bus)
}
// 获取第三方登录信息
export function thirdthirdinfo (data) {
  return requestControl(Auth.thirdthirdinfo, data, bus)
}
// 手机号和第三方平台解绑接口
export function thirdunbind (data) {
  return requestControl(Auth.thirdunbind, data, bus)
}
// 发送解绑验证码接口
export function thirdsendcode (data) {
  return requestControl(Auth.thirdsendcode, data, bus)
}
/**
 * 登录
 */
export function LoginIn (data) {
  return requestControl(Auth.LoginIn, data, bus)
}
// 登录超时
export function isLogin (data) {
  return requestControl(Auth.isLogin, data, bus)
}
// 获取登录用户信息
export function getUserByTokenId (data) {
  return requestControl(Auth.getUserByTokenId, data, bus)
}
// 获取图片验证码的redi key值
export function getVerificationCodeTemp () {
  return requestControl(Auth.getVerificationCodeTemp, {}, bus)
}
// 获取登录短信验证码
export function getLoginVerificationCode (data) {
  return requestControl(Auth.getLoginVerificationCode, data, bus)
}
// 获取注册短信验证码
export function getVerificationCode (data) {
  return requestControl(Auth.getVerificationCode, data, bus)
}
// 查询PC登录注册页背景图Url
export function querybackgroudpic (data) {
  return requestControl(Auth.querybackgroudpic, data, bus)
}
// 用户短信验证码登录接口
export function smsLoginIn (data) {
  return requestControl(Auth.smsLoginIn, data, bus)
}
// 注册提交接口
export function userRegister (data) {
  return requestControl(Auth.userRegister, data, bus)
}
// 用户重置密码
export function resetPassword (data) {
  return requestControl(Auth.resetPassword, data, bus)
}
// banner
export function webIndexBanner (data) {
  return requestControl(PecooIndex.webIndexBanner, data, bus)
}
// 查询WEB首页专区内容
export function webIndexArea (data) {
  return requestControl(PecooIndex.webIndexArea, data, bus)
}
// 拍品推荐分类
export function webIndexRecommend (data) {
  return requestControl(PecooIndex.webIndexRecommend, data, bus)
}
// 猜你喜欢
export function luckyLoves (data) {
  return requestControl(PecooIndex.luckyLoves, data, bus)
}
// 充值申请
export function userrecharge (data) {
  return requestControl(userCenter.userrecharge, data, bus)
}
// 充值支付
export function userrechargepc (data) {
  return requestControl(userCenter.userrechargepc, data, bus)
}
// 充值状态
export function queryrechargeorder (data) {
  return requestControl(userCenter.queryrechargeorder, data, bus)
}
// 订单支付
export function setorderpayment (data) {
  return requestControl(userCenter.setorderpayment, data, bus)
}
// 奢侈品订单支付
export function setLuxuryOrderPayment (data) {
  return requestControl(userCenter.setLuxuryOrderPayment, data, bus)
}
// 查询个人信息
export function queryuserbyid (data) {
  return requestControl(userCenter.queryuserbyid, data, bus)
}
// 查询我的推荐记录
export function recommendList (data) {
  return requestControl(userCenter.recommendList, data, bus)
}
// 推荐用户统计
export function recommendCount (data) {
  return requestControl(userCenter.recommendCount, data, bus)
}
// 提现
export function accountWithdraw (data) {
  return requestControl(userCenter.accountWithdraw, data, bus)
}
// 转账
export function accountTransfer (data) {
  return requestControl(userCenter.accountTransfer, data, bus)
}
// 获取用户信息
export function queryMyPecoo (data) {
  return requestControl(userCenter.queryMyPecoo, data, bus)
}
// 查询站内信列表
export function querymessagelist (data) {
  return requestControl(userCenter.querymessagelist, data, bus)
}
export function querymessageunread (data) {
  return requestControl(userCenter.querymessageunread, data, bus)
}
export function bindingaddressid (data) {
  return requestControl(userCenter.bindingaddressid, data, bus)
}
export function querysavetoken (data) {
  return requestControl(userCenter.querysavetoken, data, bus)
}
export function detailmessage (data) {
  return requestControl(userCenter.detailmessage, data, bus)
}
export function updatestatus (data) {
  return requestControl(userCenter.updatestatus, data, bus)
}
// 发送实名认证验证码
export function sendMobileReal (data) {
  return requestControl(userCenter.sendMobileReal, data, bus)
}
// 发送添加银行卡验证码
export function sendmobilecard (data) {
  return requestControl(userCenter.sendmobilecard, data, bus)
}
// 发送解绑银行卡验证码
export function sendmobilerecard (data) {
  return requestControl(userCenter.sendmobilerecard, data, bus)
}
// 用户实名认证
export function usercertification (data) {
  return requestControl(userCenter.usercertification, data, bus)
}
// 站内信删除
export function delmessage (data) {
  return requestControl(userCenter.delmessage, data, bus)
}
// 查询地址列表
export function queryuseraddresslist (data) {
  return requestControl(userCenter.queryuseraddresslist, data, bus)
}
// 保存地址
export function saveuseraddress (data) {
  return requestControl(userCenter.saveuseraddress, data, bus)
}
// 修改地址
export function updateuseraddress (data) {
  return requestControl(userCenter.updateuseraddress, data, bus)
}
// 删除地址
export function deluseraddress (data) {
  return requestControl(userCenter.deluseraddress, data, bus)
}
// 清关证据和默认收货地址
export function getDefaultCardAndLoc (data) {
  return requestControl(userCenter.getDefaultCardAndLoc, data, bus)
}
// 用户添加收藏
export function addusercollection (data) {
  return requestControl(userCenter.addusercollection, data, bus)
}
// 取消收藏,批量用,隔开
export function delusercollection (data) {
  return requestControl(userCenter.delusercollection, data, bus)
}
// 分页查询个人收藏
export function querymycollection (data) {
  return requestControl(userCenter.querymycollection, data, bus)
}
// 返回货币符号
export function queryunitlist (data) {
  return requestControl(userCenter.queryunitlist, data, bus)
}
// 用户修改密码
export function changepassword (data) {
  return requestControl(userCenter.changepassword, data, bus)
}
// 发送验证码-修改手机号短信验证码
export function sendMobileMessage (data) {
  return requestControl(userCenter.sendMobileMessage, data, bus)
}
// 发送验证码-修改手机号短信验证码
export function sendMobileMessageold (data) {
  return requestControl(userCenter.sendMobileMessageold, data, bus)
}
// 用户修改手机号
export function updateMobile (data) {
  return requestControl(userCenter.updateMobile, data, bus)
}
// 用户修改个人资料
export function updateUser (data) {
  return requestControl(userCenter.updateUser, data, bus)
}
// 用户修改头像
export function headimg (data) {
  return requestControl(userCenter.headimg, data, bus)
}
// 优惠券列表
export function getprovidelist (data) {
  return requestControl(userCenter.getprovidelist, data, bus)
}
// 根据优惠券码获取优惠券
export function querybyvouchercode (data) {
  return requestControl(userCenter.querybyvouchercode, data, bus)
}
// 激活代金券
export function updatevoucherprovidestatus (data) {
  return requestControl(userCenter.updatevoucherprovidestatus, data, bus)
}
// 删除银行卡
export function delCard (data) {
  return requestControl(userCenter.delCard, data, bus)
}
// 查询银行卡列表
export function querycardlist (data) {
  return requestControl(userCenter.querycardlist, data, bus)
}
// 查询支持的银行卡列表
export function querysupportbanklist (data) {
  return requestControl(userCenter.querysupportbanklist, data, bus)
}
// 查询卡号查询开户行
export function getbank (data) {
  return requestControl(userCenter.getbank, data, bus)
}
// 保存银行卡
export function saveCard (data) {
  return requestControl(userCenter.saveCard, data, bus)
}
// 查询用户充值记录
export function rechargelog (data) {
  return requestControl(userCenter.rechargelog, data, bus)
}
// 查询用户提现记录
export function withdrawlog (data) {
  return requestControl(userCenter.withdrawlog, data, bus)
}
// 查询用户消费记录
export function orderpaylog (data) {
  return requestControl(userCenter.orderpaylog, data, bus)
}
// 删除清关证件
export function delusercard (data) {
  return requestControl(userCard.delusercard, data, bus)
}
// 清关证件信息
export function info (data) {
  return requestControl(userCard.info, data, bus)
}
// 清关证件修改或者保存
export function saveorupdate (data) {
  return requestControl(userCard.saveorupdate, data, bus)
}
// 清关证件列表
export function useridcardlist (data) {
  return requestControl(userCard.useridcardlist, data, bus)
}
// 上传文件
export function Userupload (data) {
  return requestControl(userCard.Userupload, data, bus)
}
// 今日推荐
export function queryQualityGoods (data) {
  return requestControl(Classify.queryQualityGoods, data, bus)
}
// 获取父节点下的分类列表（包含二、三级）
export function parentList (data) {
  return requestControl(Classify.parentList, data, bus)
}
// 详情页数据展示
export function queryGoodsMess (data) {
  return requestControl(Detail.queryGoodsMess, data, bus)
}
// 详情页猜你喜欢
export function goodslist (data) {
  return requestControl(Detail.goodslist, data, bus)
}
// 拍品信息翻译
export function transGoodsMess (data) {
  return requestControl(Detail.transGoodsMess, data, bus)
}
// 查询同场拍卖会其他拍品
export function queryOtherAuctionGoods (data) {
  return requestControl(Detail.queryOtherAuctionGoods, data, bus)
}
// 用户下单-修改竞拍报价 业务需要调其他微服务
export function createorder (data) {
  return requestControl(Detail.createorder, data, bus)
}
// 拍卖行列表-热门推荐
export function gettitleauctionhouse (data) {
  return requestControl(Auction.gettitleauctionhouse, data, bus)
}
// 拍卖行列表信息
export function getauctionhousebytype (data) {
  return requestControl(Auction.getauctionhousebytype, data, bus)
}
// 按大洲统计排行数量
export function getcontinentauctionhouse (data) {
  return requestControl(Auction.getcontinentauctionhouse, data, bus)
}
// 拍卖行详情
export function getauctionhousedetail (data) {
  return requestControl(Auction.getauctionhousedetail, data, bus)
}
// 查询当天的拍品
export function currentauction (data) {
  return requestControl(Auction.currentauction, data, bus)
}
// 查询往期20条拍卖会（拍卖行详情往期历史）
export function getpastauctionbyhouseid (data) {
  return requestControl(Auction.getpastauctionbyhouseid, data, bus)
}
// 根据分类查询拍品
export function queryGoodsByKind (data) {
  return requestControl(Auction.queryGoodsByKind, data, bus)
}
// 分页查询全球拍卖会
export function pageAuctionPc (data) {
  return requestControl(Auction.pageAuctionPc, data, bus)
}
// 即将开拍
export function pageAuction (data) {
  return requestControl(Auction.pageAuction, data, bus)
}
// 查询拍卖会下商品信息
export function queryAuctionGoods (data) {
  return requestControl(Auction.queryAuctionGoods, data, bus)
}
// 奢侈品信息详情
export function luxuryDetail (data) {
  return requestControl(luxuryGoods.luxuryDetail, data, bus)
}
// 奢侈品信息翻译
export function luxuryTranslate (data) {
  return requestControl(luxuryGoods.luxuryTranslate, data, bus)
}
// 奢侈品信息列表
export function luxuryList (data) {
  return requestControl(luxuryGoods.luxuryList, data, bus)
}
// 奢侈品分类通过品牌获取搜索数据
export function luxuryBybrand (data) {
  return requestControl(luxuryGoods.luxuryBybrand, data, bus)
}
// 奢侈品分类推荐(热门推荐)
export function luxuryRecommend (data) {
  return requestControl(luxuryGoods.luxuryRecommend, data, bus)
}
// 奢侈品品牌信息 通过分类code获取搜索数据
export function luxuryBycode (data) {
  return requestControl(luxuryGoods.luxuryBycode, data, bus)
}
// 奢侈品品牌信息 品牌列表与查询
export function luxuryBrandList (data) {
  return requestControl(luxuryGoods.luxuryBrandList, data, bus)
}
// 奢侈品品牌信息 获取品牌A-Z
export function luxuryQuerygoodsbrand (data) {
  return requestControl(luxuryGoods.luxuryQuerygoodsbrand, data, bus)
}
// 奢侈品品牌规格
export function luxuryGoodsspecList (data) {
  return requestControl(luxuryGoods.luxuryGoodsspecList, data, bus)
}
// 奢侈品订单 取消订单
export function luxuryCancelorder (data) {
  return requestControl(luxuryGoods.luxuryCancelorder, data, bus)
}
// 奢侈品订单 下单
export function luxuryCreateorder (data) {
  return requestControl(luxuryGoods.luxuryCreateorder, data, bus)
}
// 奢侈品订单详情
export function luxuryOrderDetail (data) {
  return requestControl(luxuryGoods.luxuryOrderDetail, data, bus)
}
// 奢侈品订单列表
export function luxuryOrderList (data) {
  return requestControl(luxuryGoods.luxuryOrderList, data, bus)
}
// 奢侈品订单确认收货
export function luxuryReceiptorder (data) {
  return requestControl(luxuryGoods.luxuryReceiptorder, data, bus)
}
// 奢侈品首页Banner
export function luxuryBanner (data) {
  return requestControl(luxuryGoods.luxuryBanner, data, bus)
}
// 奢侈品首页 品牌专享
export function luxuryGoodsbrand (data) {
  return requestControl(luxuryGoods.luxuryGoodsbrand, data, bus)
}
// 奢侈品首页 精品推荐
export function luxuryGoodsnew (data) {
  return requestControl(luxuryGoods.luxuryGoodsnew, data, bus)
}
// 奢侈品首页 包包系列
export function luxurylIndexpic (data) {
  return requestControl(luxuryGoods.luxurylIndexpic, data, bus)
}
// 奢侈品首页 故事
export function luxuryStory (data) {
  return requestControl(luxuryGoods.luxuryStory, data, bus)
}
// 奢侈品订单-计算订单费用
export function luxuryGetorderprice (data) {
  return requestControl(luxuryGoods.getorderprice, data, bus)
}
// 奢侈品 一级分类
export function luxuryFirst (data) {
  return requestControl(luxuryGoods.luxuryFirst, data, bus)
}
// 奢侈品 一级导航
export function navFirst (data) {
  return requestControl(luxuryGoods.navFirst, data, bus)
}
// 奢侈品猜你喜欢
export function guessYouLikePC (data) {
  return requestControl(luxuryGoods.guessYouLikePC, data, bus)
}
// 奢侈品推荐页
export function recommendgoodsUrl (data) {
  return requestControl(luxuryGoods.recommendgoodsUrl, data, bus)
}
// 奢侈品推荐页
export function queryLuxuryGoods (data) {
  return requestControl(luxuryGoods.queryLuxuryGoods, data, bus)
}

// 直接请求用的接口
let thirdloginUrl = baseUrl + '/thirdlogin/loginPC'
let getValidateImgCodeUrl = baseUrl + '/register/vcode/pc'// PC端用户注册获取图片验证码接口
let updateHeadUrl = baseUrl + '/user/update/headimg' // 用户修改头像
// 第三方返回用的路径
let loginThreePath = thirdUrl + '/#/loginThree'// 第三方返回路径
let indexUrl = thirdUrl + '/#/index'// 首页url
let luxuryUrls = luxuryUrl + '/recommend/luxury/guessYouLikePC' // 奢侈品猜你喜欢
export {
  thirdloginUrl,
  getValidateImgCodeUrl,
  updateHeadUrl,
  loginThreePath,
  indexUrl,
  luxuryUrls
}
