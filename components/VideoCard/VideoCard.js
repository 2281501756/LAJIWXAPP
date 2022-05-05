// components/VideoCard/VideoCard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    pid: Number,
    name: String,
    photo: String,
    views: Number
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabclick() {
      wx.navigateTo({
        url: `/pages/openClass/videopage/videopage?id=${this.data.pid}`,
      })
    }
  }
})
