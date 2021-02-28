// pages/posts-detail/posts-detail.js
import {
  postList
} from "../../data/data.js"
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postData: {},
    collected: false,
    _pid: null,
    _mgr: null,
    isPlayingMusic: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const postData = postList.find(item => item.postId == options.pid)
    this.setData({
      postData
    })
    this.data._pid = options.pid
    const postsCollected = wx.getStorageSync('posts_collected') || {}
    this.setData({
      collected: !!postsCollected[this.data._pid]
    })

    // 背景音乐初始化
    this.BackgroundAudioManagerInit()
  },

  onCollect(event) {
    this.setData({
      collected: !this.data.collected
    })
    const postsCollected = wx.getStorageSync('posts_collected') || {}
    postsCollected[this.data._pid] = this.data.collected
    wx.setStorageSync('posts_collected', postsCollected)
    wx.showToast({
      title: this.data.collected ? "收藏成功" : "取消收藏"
    })
  },

  BackgroundAudioManagerInit() {
    const mgr = wx.getBackgroundAudioManager()
    this.setData({
      _mgr: mgr
    })

    const {
      isPlayingMusic,
      pid
    } = app.gPlayingMusic
    let currentPageIsPlaying = (isPlayingMusic && pid === this.data._pid)

    this.setData({
      isPlayingMusic: currentPageIsPlaying
    })
    mgr.onPlay(() => {
      this.setData({
        isPlayingMusic: true
      })
      app.gPlayingMusic.isPlayingMusic = true
      app.gPlayingMusic.pid = this.data._pid
    })
    mgr.onStop(() => {
      this.setData({
        isPlayingMusic: false
      })
      app.gPlayingMusic.isPlayingMusic = false
      app.gPlayingMusic.pid = this.data._pid
    })
  },
  onMusicStart() {
    const mgr = this.data._mgr
    mgr.src = this.data.postData.music.url
    mgr.title = this.data.postData.music.title
    mgr.coverImgUrl = this.data.postData.music.coverImg
  },
  onMusicStop() {
    const mgr = this.data._mgr
    mgr.stop()
  },

  async onShare(event) {
    const result = await wx.showActionSheet({
      itemList: ['分享到QQ', '分享到微信', '分享到朋友圈']
    })
    console.log(result)
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