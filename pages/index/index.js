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
  //加密按钮
  getSerect: function (e) {
    var self = this;
    console.log(e.detail.value);
    return;
    self.setData({
      loading: true
    })
    var obj_base64 = new BASE64.Base64();
    //base64加密
    var text_new = e.detail.value;
    var text_after = "";

    switch (self.data.index) {
      //base 64加密
      case 0:
        var str_base64_encode = obj_base64.encode(text_new);
        text_after = str_base64_encode;
    }
    //base64解密
    //var str_base64_decode = obj_base64.decode(str_base64_encode);

    setTimeout(function () {
      //伪loading
      self.setData({
        loading: false,
        text_after: text_after
      });
    }, 1500)
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
