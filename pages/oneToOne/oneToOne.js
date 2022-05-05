// pages/oneToOne/oneToOne.js
import { teacherList } from '../../data/teacher.js'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    teacherList: teacherList,
    columns: ['一年经验', '二年经验', '三年经验', '四年经验', '五年经验'],
    areas: ['上海','北京','黑龙江','广东','湖南','陕西','山西','宁夏','云南'],
    timeshow: false,
    ageshow: false,
    areashow: false,
    selectdata: '', // 所选的第二个参数
    currentDate: new Date().getTime(), //所选时间
    minDate: new Date().getTime(),
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`;
      }
      return value;
    }
  },
  buttonclick(e) {
    wx.navigateTo({
      url: `/pages/oneToOne/subscription/subscription?id=${e.detail.id}&data=${this.data.selectdata}&time=${this.data.currentDate}`,
    })
  },
  onConfirm(event) {
    const { value } = event.detail;
    this.setData({
      ageshow: false,
      areashow: false,
      selectdata: value
    })
  },
  onCancel() {
    this.setData({
      ageshow: false,
      areashow: false
    })
  },
  bindAreaAge() {
    this.setData({
      areashow: true
    })
  },
  bindDataAge() {
    this.setData({
      ageshow: true
    })
  },
  bindDataSelect() {
    this.setData({
      timeshow: true
    })
  },
  bindDataSelected() {
    console.log(this.data.currentDate);
    this.setData({
      timeshow: false
    })
  },
  onInput(event) {
    this.setData({
      currentDate: event.detail
    });
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