//account.js
const util = require('../../utils/util.js')

Page({
  data: {
    accounts: [],
    accountName: "",
    accountValue: "",
    totalAmount:0
  },
  //事件处理函数
  changeName: function (e) {
    this.setData({
      accountName: e.detail.value
    })
  },
  changeValue: function (e) {
    this.setData({
      accountValue: e.detail.value
    })
  },
  addAccountTap: function () {
    if (this.data.accountName && this.data.accountValue) {
      var accounts = this.data.accounts
      accounts.unshift({ name: this.data.accountName, value: this.data.accountValue})
      this.setData({
        accounts: accounts,
        accountName: "",
        accountValue: ""
      })
      wx.setStorageSync('accounts', accounts)
      this.setData({
        totalAmount: util.getTotal(this.data.accounts)
      })
    }

  },
  onLoad: function () {
    this.setData({
      accounts: wx.getStorageSync('accounts') || []
    })
    this.setData({
      totalAmount: util.getTotal(this.data.accounts)
    })
  }
})