// components/ShopCard/ShopCard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    pid:Number,
    name:String,
    description: String,
    price:String,
    photo:String
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
      wx.navigateTo({
        url: `/pages/shop/shopContainer/shopContainer?id=${this.data.pid}`,
      })
    }
  }
})
