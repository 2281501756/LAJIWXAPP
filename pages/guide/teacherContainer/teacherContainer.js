// pages/guide/teacherContainer/teacherContainer.js
import { teacherList } from '../../../data/teacher.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    teacher: {},
  },
  chatchlick() {
    wx.navigateTo({
      url: `/pages/guide/chat/chat?id=${this.data.teacher.id}`,
    })
  },
  buttonbind() {
    wx.showToast({
      title: "订阅成功", // 提示的内容
      icon: "success", // 图标，默认success
      image: "", // 自定义图标的本地路径，image 的优先级高于 icon
      duration: 3000, // 提示的延迟时间，默认1500
      mask: false, // 是否显示透明蒙层，防止触摸穿透
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    for(let i in teacherList) {
      if(teacherList[i].id == options.id) {
        this.setData({
          teacher: teacherList[i],
        })
        break
      }
    }

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