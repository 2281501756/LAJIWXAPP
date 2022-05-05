// components/treacherCard/treacherCard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    pid:String,
    name: String,
    post: String,
    photo: String,
    description: String
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
    bindcard() {
      const app = getApp()
      if(app.globalData.userInfo === null) {
        wx.getUserProfile({
          desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
          success: (res) => {
            app.setuserInfo(res.userInfo)
          }
        })
      }
      
      wx.navigateTo({
        url: `/pages/guide/teacherContainer/teacherContainer?id=${this.data.pid}`,
      })
    },
  }
})
