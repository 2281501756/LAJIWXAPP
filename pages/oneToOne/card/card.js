// pages/oneToOne/card/card.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    pid: String,
    name: String,
    photo: String,
    worktime: String,
    gender: String
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
    buttonclick() {
      this.triggerEvent('buttonclick', {
        id: this.data.pid
      })
    }
  }
})
