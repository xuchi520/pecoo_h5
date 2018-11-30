const Auth = {}// 登录、注册、忘记密码
const PecooIndex = {}// 首页
const userCenter = {}// 个人中心
const Classify = {}// 分类、列表
const Detail = {}// 拍卖详情
const Auction = {}// 拍卖会、拍卖行、拍卖日历
const Order = {}// 拍卖订单，奢侈品订单
const userCard = {}// 清关证件
const luxuryGoods = {}// 奢侈品信息、奢侈品分类表、奢侈品品牌信息、奢侈品规格、奢侈品首页、一级分类、三级分类
const apis = '/apis'// 本地使用l
const searchapi = '/searchapi'// 本地搜索
const recommendapi = '/recommendapi' // 奢侈品猜你喜欢
// let apis = '' // 正式和测试使用
// 拍品搜索
PecooIndex.doSearch = {url: searchapi + '/search/doSearch', method: 'post'}
// 首页二维码
PecooIndex.indexqueryQRcode = {url: apis + '/content/queryQRcode', method: 'post'}
// 插入拍品数据
PecooIndex.saveBidGoods = {url: searchapi + '/search/saveBidGoods', method: 'post'}
// 首页精选接口
PecooIndex.IndexAuctiongoods = {url: apis + '/content/webindex/auctiongoods', method: 'post'}
// 手机号绑定第三方平台
Auth.thirdbind = {url: apis + '/thirdlogin/bind', method: 'post'}
// 获取绑定第三方平台短信验证码
Auth.thirdgetBindMessageCode = {url: apis + '/thirdlogin/getBindMessageCode', method: 'post'}
// 查询手机号是否存在&&是否绑定第三方平台
Auth.thirdisbind = {url: apis + '/thirdlogin/isbind', method: 'post'}
// 查询手机号是否绑定第三方平台<用于展示绑定状态>
Auth.thirdisbindthirdplatform = {url: apis + '/thirdlogin/isbindthirdplatform', method: 'post'}
// 查询手机号在系统中是否存在
Auth.thirdisexist = {url: apis + '/thirdlogin/isexist', method: 'post'}
// 第三方登录接口
Auth.thirdlogin = {url: apis + '/thirdlogin/login', method: 'post'}
// 第三方登录注册提交接口
Auth.thirdregister = {url: apis + '/thirdlogin/register', method: 'post'}
// 获取第三方登录信息
Auth.thirdthirdinfo = {url: apis + '/thirdlogin/thirdinfo', method: 'post'}
// 手机号和第三方平台解绑接口
Auth.thirdunbind = {url: apis + '/thirdlogin/unbind', method: 'post'}
// 发送解绑验证码接口
Auth.thirdsendcode = {url: apis + '/thirdlogin/unbind/sendcode', method: 'post'}
// 用户账号密码登录接口
Auth.LoginIn = {url: apis + '/login/login', method: 'post'}
// 登录超时
Auth.isLogin = {url: apis + '/login/islogin', method: 'post'}
// 查询个人信息
Auth.getUserByTokenId = {url: apis + '/user/info', method: 'post'}
// 查询PC登录注册页背景图Url
Auth.querybackgroudpic = {url: apis + '/content/querybackgroudpic', method: 'post'}
// 图片图形验证码
Auth.getValidateImgCode = {url: apis + '/register/vcode/pc', method: 'post'}
// 获取图片验证码的redi key值
Auth.getVerificationCodeTemp = {url: apis + '/register/vcode/temp', method: 'post'}
// 获取注册短信验证码
Auth.getVerificationCode = {url: apis + '/register/sendcode', method: 'post'}
// 获取登录短信验证码
Auth.getLoginVerificationCode = {url: apis + '/login/sendcode', method: 'post'}
// 用户短信验证码登录接口
Auth.smsLoginIn = {url: apis + '/login/smslogin', method: 'post'}
// 注册提交接口
Auth.userRegister = {url: apis + '/register/register', method: 'post'}
// 用户重置密码
Auth.resetPassword = {url: apis + '/login/resetpwd', method: 'post'}
// 拍品推荐分类
PecooIndex.webIndexRecommend = {url: apis + '/category/list/recommend', method: 'post'}
// banner
PecooIndex.webIndexBanner = {url: apis + '/content/webindex/banner', method: 'post'}
// 查询WEB首页专区内容
PecooIndex.webIndexArea = {url: apis + '/content/webindex/area', method: 'post'}
// 猜你喜欢
PecooIndex.luckyLoves = {url: apis + '/content/likegoods', method: 'post'}
// 充值申请
userCenter.userrecharge = {url: apis + '/useraccount/recharge', method: 'post'}
// 充值支付
userCenter.userrechargepc = {url: apis + '/useraccount/rechargepc', method: 'post'}
// 查询充值状态
userCenter.queryrechargeorder = {url: apis + '/useraccount/queryrechargeorder', method: 'post'}
// 订单支付
userCenter.setorderpayment = {url: apis + '/orderpay/setorderpayment', method: 'post'}
// 奢侈品订单支付
userCenter.setLuxuryOrderPayment = {url: apis + '/orderpay/setLuxuryOrderPaymentNew', method: 'post'}
// 获取用户信息
userCenter.queryMyPecoo = {url: apis + '/verify/account/queryMyPecoo.htm', method: 'post'}
// 推荐记录
userCenter.recommendList = {url: apis + '/user/recommend/list', method: 'post'}
// 推荐用户统计
userCenter.recommendCount = {url: apis + '/user/recommend/count', method: 'post'}
// 提现
userCenter.accountWithdraw = {url: apis + '/useraccount/withdraw', method: 'post'}
// 转账
userCenter.accountTransfer = {url: apis + '/useraccount/transfer', method: 'post'}
// 查询站内信列表
userCenter.querymessagelist = {url: apis + '/message/list', method: 'post'}
// 查询站内信未读数量
userCenter.querymessageunread = {url: apis + '/message/count/unread', method: 'post'}
// 站内信删除
userCenter.delmessage = {url: apis + '/message/delete', method: 'post'}
// 站内信详情
userCenter.detailmessage = {url: apis + '/message/detail', method: 'post'}
// 站内信详情
userCenter.updatestatus = {url: apis + '/message/updatestatus', method: 'post'}
// 查询地址列表
userCenter.queryuseraddresslist = {url: apis + '/address/list/byuser', method: 'post'}
// 保存地址
userCenter.saveuseraddress = {url: apis + '/address/save', method: 'postJson'}
// 修改地址
userCenter.updateuseraddress = {url: apis + '/address/update', method: 'postJson'}
// 删除地址
userCenter.deluseraddress = {url: apis + '/address/delete', method: 'post'}
// 修改地址绑定
userCenter.bindingaddressid = {url: apis + '/luxury/luxuryorder/bindingaddressid', method: 'post'}
// 防止重复提交
userCenter.querysavetoken = {url: apis + '/user/querysavetoken', method: 'post'}
// 清关证据和默认收货地址
userCenter.getDefaultCardAndLoc = { url: apis + '/address/getaddressidcard', method: 'post' }
// 用户添加收藏
userCenter.addusercollection = {url: apis + '/collection/save', method: 'postJson'}
// 取消收藏,批量用,隔开
userCenter.delusercollection = {url: apis + '/collection/delete', method: 'post'}
// 分页查询个人收藏
userCenter.querymycollection = {url: apis + '/collection/list', method: 'post'}
// 返回货币符号
userCenter.queryunitlist = {url: apis + '/collection/queryunitlist', method: 'post'}
// 用户修改密码
userCenter.changepassword = {url: apis + '/user/update/password', method: 'post'}
// 发送验证码-修改手机号短信验证码
userCenter.sendMobileMessage = {url: apis + '/user/sendcode/updphone', method: 'post'}
// 发送验证码-修改手机号短信验证码
userCenter.sendMobileMessageold = {url: apis + '/user/sendcode/updphoneold', method: 'post'}
// 用户修改手机号
userCenter.updateMobile = {url: apis + '/user/update/mobile', method: 'post'}
// 优惠券列表
userCenter.getprovidelist = {url: apis + '/voucher/list', method: 'post'}
// 根据优惠券码获取优惠券
userCenter.querybyvouchercode = {url: apis + '/voucher/get/bycode', method: 'post'}
// 激活代金券
userCenter.updatevoucherprovidestatus = {url: apis + '/voucher/update/status', method: 'post'}
// 发送实名认证验证码
userCenter.sendMobileReal = {url: apis + '/user/sendcode/realname', method: 'post'}
// 发送验证码-添加银行卡
userCenter.sendmobilecard = {url: apis + '/user/sendcode/sendmobilecard', method: 'post'}
// 发送验证码-解绑银行卡
userCenter.sendmobilerecard = {url: apis + '/user/sendcode/sendmobilerecard', method: 'post'}
// 用户实名认证
userCenter.usercertification = {url: apis + '/user/verify', method: 'post'}
// 查询个人信息
userCenter.queryuserbyid = {url: apis + '/user/info', method: 'post'}
// 删除银行卡
userCenter.delCard = {url: apis + '/card/delete', method: 'post'}
// 用户修改个人资料
userCenter.updateUser = {url: apis + '/user/update', method: 'postJson'}
// 用户修改头像
userCenter.headimg = {url: apis + '/user/update/headimg', method: 'upload'}
// 查询银行卡列表
userCenter.querycardlist = {url: apis + '/card/list', method: 'post'}
// 查询支持的银行卡列表
userCenter.querysupportbanklist = {url: apis + '/card/querysupportbanklist', method: 'post'}
// 查询卡号查询开户行
userCenter.getbank = {url: apis + '/card/getbank', method: 'post'}
// 保存银行卡
userCenter.saveCard = {url: apis + '/card/save', method: 'post'}
// 删除清关证件
userCard.delusercard = {url: apis + '/useridcard/delete', method: 'post'}
// 清关证件信息
userCard.info = {url: apis + '/useridcard/detail', method: 'post'}
// 清关证件修改或者保存
userCard.saveorupdate = {url: apis + '/useridcard/saveorupdate', method: 'post'}
// 清关证件列表
userCard.useridcardlist = {url: apis + '/useridcard/list', method: 'post'}
// 上传文件
userCard.Userupload = {url: apis + '/upload/img', method: 'post'}
// 查询用户充值记录
userCenter.rechargelog = {url: apis + '/userlog/rechargelog', method: 'post'}
// 查询用户提现记录
userCenter.withdrawlog = {url: apis + '/userlog/withdrawlog', method: 'post'}
// 查询用户消费记录
userCenter.orderpaylog = {url: apis + '/userlog/orderpaylog', method: 'post'}
// 今日推荐
Classify.queryQualityGoods = {url: apis + '/indexPage/queryQualityGoods.htm', method: 'post'}
// 获取父节点下的分类列表（包含二、三级）
Classify.parentList = {url: apis + '/category/list/parent', method: 'post'}

// 获取一级分类接口
Classify.firstCate = {url: apis + '/category/list/first', method: 'post'}
// 获取分类筛选的条件
Classify.cateScreen = {url: apis + '/category/list/second/parent', method: 'post'}
// 根据分类查询拍品
Auction.queryGoodsByKind = {url: apis + '/auctiongoods/list', method: 'post'}

// 详情页数据展示
Detail.queryGoodsMess = {url: apis + '/auctiongoods/detail', method: 'post'}
// 拍品信息翻译
Detail.transGoodsMess = {url: apis + '/auctiongoods/translate', method: 'post'}
// 查询同场拍卖会其他拍品
Detail.queryOtherAuctionGoods = {url: apis + '/auctiongoods/list/byauction', method: 'post'}
// 用户下单-修改竞拍报价 业务需要调其他微服务
Detail.createorder = {url: apis + '/order/create', method: 'post'}
// 拍品详情页猜你喜欢
Detail.goodslist = {url: apis + '/content/goodslist', method: 'post'}
// 拍卖行列表-热门推荐
Auction.gettitleauctionhouse = {url: apis + '/auctionhouse/list/hot', method: 'post'}
// 拍卖行列表信息
Auction.getauctionhousebytype = {url: apis + '/auctionhouse/list', method: 'post'}
// 按大洲统计排行数量
Auction.getcontinentauctionhouse = {url: apis + '/auctionhouse/count/bycontinent', method: 'post'}
// 拍卖行详情
Auction.getauctionhousedetail = {url: apis + '/auctionhouse/detail', method: 'post'}
// 查询往期20条拍卖会（拍卖行详情往期历史）
Auction.getpastauctionbyhouseid = {url: apis + '/auction/listpast', method: 'post'}
// 根据当天的拍品
Auction.currentauction = {url: apis + '/auction/list/currentauction', method: 'post'}
// 分页查询全球拍卖会
Auction.pageAuctionPc = {url: apis + '/auction/list/pc', method: 'post'}
// 即将开拍
Auction.pageAuction = {url: apis + '/auction/list', method: 'post'}
// 查询拍卖会下商品信息
Auction.queryAuctionGoods = {url: apis + '/auction/listgoods', method: 'post'}
// 微信支付返回
Order.qOrderStatus = {url: apis + '/orderpay/qOrderStatus', method: 'post'}
// 15分钟确定
Order.updateCancelFrozenMoney = {url: apis + '/useraccount/updateCancelFrozenMoney', method: 'post'}
// 推荐订单列表
Order.queryChannelOrderList = {url: apis + '/order/queryChannelOrderList', method: 'post'}
// 查询拍品订单列表
Order.getorderlist = {url: apis + '/order/list', method: 'post'}
// 拍品取消订单
Order.getorderCancel = {url: apis + '/order/cancel', method: 'post'}
// 拍品确认收货
Order.getorderReceive = {url: apis + '/order/receive', method: 'post'}
// 查询拍品订单详情
Order.getorderdetail = {url: apis + '/order/detail', method: 'post'}
// 获取用户竞拍订单付款相关信息
Order.getorderpaymess = {url: apis + '/order/paymess', method: 'post'}
// 查看拍品物流物流
Order.expressinfoDetail = {url: apis + '/expressinfo/detail', method: 'post'}
// 物流信息实时查询
Order.expressinfoqueryexpressinfo = {url: apis + '/expressinfo/queryexpressinfo', method: 'post'}
// 奢侈品信息详情
luxuryGoods.luxuryDetail = {url: apis + '/luxury/goods/detail', method: 'post'}
// 奢侈品信息翻译
luxuryGoods.luxuryTranslate = {url: apis + '/luxury/goods/translate', method: 'post'}
// 奢侈品信息列表
luxuryGoods.luxuryList = {url: apis + '/luxury/goods/list', method: 'post'}
// 奢侈品分类通过品牌获取搜索数据
luxuryGoods.luxuryBybrand = {url: apis + '/luxury/category/list/bybrand', method: 'post'}
// 奢侈品分类推荐(热门推荐)
luxuryGoods.luxuryRecommend = {url: apis + '/luxury/category/list/recommend', method: 'post'}
// 奢侈品品牌信息 通过分类code获取搜索数据
luxuryGoods.luxuryBycode = {url: apis + '/luxury/brand/list/bycode', method: 'post'}
// 奢侈品品牌信息 品牌列表与查询
luxuryGoods.luxuryBrandList = {url: apis + '/luxury/brand/list', method: 'post'}
// 奢侈品品牌信息 获取品牌A-Z
luxuryGoods.luxuryQuerygoodsbrand = {url: apis + '/luxury/brand/querygoodsbrand', method: 'post'}
// 奢侈品品牌规格
luxuryGoods.luxuryGoodsspecList = {url: apis + '/luxury/goodsspec/list', method: 'post'}
// 奢侈品订单 取消订单
luxuryGoods.luxuryCancelorder = {url: apis + '/luxury/luxuryorder/cancelorder', method: 'post'}
// 奢侈品订单 下单
luxuryGoods.luxuryCreateorder = {url: apis + '/luxury/luxuryorder/createorder', method: 'post'}
// 奢侈品订单详情
luxuryGoods.luxuryOrderDetail = {url: apis + '/luxury/luxuryorder/detail', method: 'post'}
// 奢侈品订单列表
luxuryGoods.luxuryOrderList = {url: apis + '/luxury/luxuryorder/list', method: 'post'}
// 奢侈品订单确认收货
luxuryGoods.luxuryReceiptorder = {url: apis + '/luxury/luxuryorder/receiptorder', method: 'post'}
// 奢侈品首页Banner
luxuryGoods.luxuryBanner = {url: apis + '/luxury/index/banner', method: 'post'}
// 奢侈品首页 品牌专享
luxuryGoods.luxuryGoodsbrand = {url: apis + '/luxury/index/goodsbrand', method: 'post'}
// 奢侈品首页 精品推荐
luxuryGoods.luxuryGoodsnew = {url: apis + '/luxury/index/goodsnew', method: 'post'}
// 奢侈品 包包系列
luxuryGoods.luxurylIndexpic = {url: apis + '/luxury/index/indexpic', method: 'post'}
// 奢侈品首页 故事
luxuryGoods.luxuryStory = {url: apis + '/luxury/index/story', method: 'post'}
// 奢侈品订单-计算订单费用
luxuryGoods.getorderprice = { url: apis + '/luxury/luxuryorder/getorderprice', method: 'post' }
// 一级分类
luxuryGoods.luxuryFirst = {url: apis + '/luxury/category/list/first', method: 'post'}
// 一级导航
luxuryGoods.navFirst = {url: apis + '/luxury/category/list/first', method: 'post'}
// 猜你喜欢
luxuryGoods.guessYouLikePC = {url: recommendapi + '/recommend/luxury/guessYouLikePC', method: 'post'}
// 奢侈品商品推荐页
luxuryGoods.recommendgoodsUrl = {url: apis + '/luxury/index/recommendgoods', method: 'post'}
export {Auth, PecooIndex, userCenter, Classify, Detail, Auction, Order, userCard, luxuryGoods}
