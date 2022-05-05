import {teacherList} from '../../../data/teacher.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: [],
    inputvalue: '',
    userimage: '',
  },
  buttonclick() {
    if(this.data.inputvalue === '')  return
    this.setData({
      listData: [...this.data.listData, this.data.inputvalue],
      inputvalue: ''
    })
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    for(let i of teacherList) {
      if(i.id == options.id) { 
        wx.setNavigationBarTitle({
          title: i.name+"的对话",
        })
      }
    }
    this.setData({
      userimage: this.geturl()
    })
  },
  geturl() {
    let app = getApp() 
    return app.globalData.userInfo.avatarUrl 
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