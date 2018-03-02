//index.js
var BASE64 = require('../../utils/base64.js');

//获取应用实例
var pageObject = {
  data: {
    loading: false,
    array: ['base64'],
    objectArray: [
      {
        id: 0,
        name: 'base64'
      }
    ],
    index: 0,
    text_new: "",
    text_after: ""
  },
  //获取第一个textarea的值，传递给text_new
  getFirstTextarea: function (e) {
    this.setData({
      text_new: e.detail.value
    })
  },
  //加密按钮
  getSerect: function (e) {
    var self = this;
    var text_new = self.data.text_new;
    if (!text_new) {
      wx.showToast({
        title: "请填写需要加密的文本",
        duration: 1000,
        icon: "none"
      })
      return;
    }
    self.setData({
      loading: true
    })
    //base64加密
    var text_after = "";

    switch (self.data.index) {
      //base 64加密
      case 0:
        var str_base64_encode = BASE64.CusBASE64.encoder(text_new);
        text_after = str_base64_encode;
    }
    //base64解密
    setTimeout(function () {
      //伪loading
      self.setData({
        loading: false,
        text_after: text_after
      });
      wx.showToast({
        title: "加密成功",
        duration: 1000
      });
    }, 500)
  },
  //复制加密后的密文
  copySerect: function () {
    var secect = this.data.text_after;
    if (!secect) {
      wx.showToast({
        title: "请进行文本加密后复制",
        duration: 1000,
        icon: "none"
      })
      return;
    }    
    wx.setClipboardData({
      data: secect,
      success: function (res) {
        wx.showToast({
          title: "复制成功",
          duration: 1000,
          icon: "none"
        });
      },
      fail: function () {
        wx.showToast({
          title: "复制失败,请重试！",
          duration: 1000,
          icon: "none"
        });
      }
    })
  },
  //单选事件选择加密方式
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    });
  },
  openDemoPicker: function () {
    wx.navigateTo({
      url: '../demo/picker/picker'
    })
  },
  openDemoTextarea: function () {
    wx.navigateTo({
      url: '../demo/textarea/textarea'
    })
  }
}

Page(pageObject)
