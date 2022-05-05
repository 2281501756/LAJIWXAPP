// pages/oneToOne/subscription/subscription.js
import {teacherList} from '../../../data/teacher.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    teacherdata: {},
    dateList: [],
    timeList: [{
      time: '09:30',
      active: false,
    },{
      time: '10:30',
      active: false,
    },
    {
      time: '14:30',
      active: false,
    },{
      time: '16:30',
      active: false,
    }
  ],
    dateSelectIndex: -1,
    timeSelectIndex: -1
  },
  buttonclick() {
    this.setData({ show: true });
  },
  onClose() {
    this.setData({ show: false });
  },
  timeSelectChlick(e) {
    let index = e.currentTarget.dataset.index
    for(let i = 0 ; i < 4 ; i ++) {
      let t = this.data.timeList
      if(i == index) {
        t[i].active = true
        this.setData({
          timeList: t,
          timeSelectIndex: index
        }) 
      } else {
        t[i].active = false
        this.setData({
          timeList: t
        }) 
      }
    }
  },
  dateSelectChlick(e) {
    let index = e.currentTarget.dataset.index
    for(let i = 0 ; i < 6 ; i ++) {
      let t = this.data.dateList
      if(i == index) {
        t[i].active = true
        this.setData({
          dateList: t,
          dateSelectIndex: index
        }) 
      } else {
        t[i].active = false
        this.setData({
          dateList: t
        }) 
      }
    }
    for(let i = 0 ; i < 4 ; i ++) {
      let t = this.data.timeList
        t[i].active = false
        this.setData({
          timeList: t,
          timeSelectIndex: -1
        }) 
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    for(let i  = 0 ; i < 6 ; i ++) {
      let time = new Date(parseInt(options.time) + (1000 * 60 * 60 * 24) * i)
      let item = {
        year: time.getMonth() + 1,
        date: time.getDate(),
        day: 0,
        active: false
      }
      switch(time.getDay()) {
        case 1: {
          item.day = '周一'
          break
        } case 2: {
          item.day = '周二'
          break
        } case 3: {
          item.day = '周三'
          break
        } case 4: {
          item.day = '周四'
          break
        } case 5: {
          item.day = '周五'
          break
        } case 6: {
          item.day = '周六'
          break
        } case 0: {
          item.day = '周日'
          break
        }
      }
      this.setData({
        dateList: [...this.data.dateList, item]
      })
    }


    for(let i of teacherList) {
      if(i.id == options.id) {
        this.setData({
          teacherdata: i
        })
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