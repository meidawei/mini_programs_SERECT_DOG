//index.js
//获取应用实例
var pageObject = {
  data: {
    loading: false
  },
  getSerect: function (e) {
    var self = this;
    //伪loading
    self.setData({
      loading: true
    })
    setTimeout(function () {
      self.setData({
        loading: false
      })
    }, 1500)
  },
  openDemoPicker:function(){
    wx.navigateTo({
      url: '../demo/picker/picker'
    })
  }
}

Page(pageObject)
