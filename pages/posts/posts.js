// pages/posts/posts.js
import {
  postList
} from "../../data/data.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    posts: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取列表数据
    this.setData({
      posts: postList
    })
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

  },

  onGoToDetail(event) {
    const pid = event.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/posts-detail/posts-detail?pid=' + pid
    })
  }
})