// pages/index/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchList: ["每日热词","有梗百科"],
    num:0,
    txtList: [{ name: "罗马城", title: "为什么说罗马城不是一天建起来的？", src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2995802125,1907803302&fm=27&gp=0.jpg", look: 9034, zhuanfa: 207 }, { name: "扁鹊见蔡桓公", title: "'扁鹊见蔡桓公'历史上真的有吗？", src: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1238853669,1331079297&fm=58&bpow=605&bpoh=520", look: 8462, zhuanfa: 198 }, { name: "水手服", title: "冷知识 | 日本女生的校服为什么是水手服？", src: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1458912371,713275043&fm=27&gp=0.jpg", look: 7069, zhuanfa: 176 }, { name: "海象", title: "动物百科 | 为什么海象要长长牙？", src: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2311291650,3051755235&fm=27&gp=0.jpg", look: 6837, zhuanfa: 168 }, { name: "杏仁桉树", title: "植物百科 | 世界上最高的树", src: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2576245837,2966546379&fm=27&gp=0.jpg", look: 6307, zhuanfa: 166 }],
    hotList: [{ name: "求你做个人", title: "有梗百科 | 求你做个人是什么梗？", src: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2086026641,767790447&fm=26&gp=0.jpg", look: 5047, zhuanfa: 159 }, { name: "凭本事单身", title: "有梗百科 | 凭本事单身是什么梗？", src: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=692410290,1865009987&fm=26&gp=0.jpg", look: 4763, zhuanfa: 156 }, { name: "恶臭女孩", title: "有梗百科 | 恶臭女孩是什么梗？", src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1411931118,411737985&fm=26&gp=0.jpg", look: 5047, zhuanfa: 155 }, { name: "中年油腻", title: "有梗百科 | 中年油腻是什么梗？", src: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1344099788,2833216995&fm=26&gp=0.jpg", look: 4763, zhuanfa: 153 }, { name: "今天也要开心鸭", title: "有梗百科 | 今天也要开心鸭是什么梗？", src: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3838564184,758926867&fm=26&gp=0.jpg", look: 5047, zhuanfa: 156 }],
    flage:true
  },
  navTap:function(e){
    this.setData({
      num: e.currentTarget.dataset.idx
    })
    
  },
  searchKeys:function(){
    wx.navigateTo({
      url: '../search/search'
    })
  },
  hotTxt:function(e){
    getApp().globalImg2 = e.currentTarget.dataset.src;
    wx.navigateTo({
      url: '../hot/hot?idz=' + e.currentTarget.dataset.idz + '&titles=' + e.currentTarget.dataset.title
    })
  },
  baikeTxt:function(e){
    getApp().globalImg = e.currentTarget.dataset.src;
    wx.navigateTo({
      url: '../baike/baike?idy=' + e.currentTarget.dataset.idy + '&title=' + e.currentTarget.dataset.title
    })
  },
  fenxiang:function(){
    this.setData({
      flage: false
    })
    
  },
  fanhui:function(){
    this.setData({
      flage: true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})