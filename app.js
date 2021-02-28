App({
  onLaunch(options) {
    // Do something initial when launch.
    console.log('App onLaunch')
  },
  onShow(options) {
    // Do something when show.
    console.log('App onShow')
  },
  onHide() {
    // Do something when hide.
    console.log('App onHide')
  },
  onError(msg) {
    console.log(msg)
  },
  gPlayingMusic: {
    isPlayingMusic: false,
    pid: ''
  }
})