// components/test/list/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    testText: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    value: 123,
    obj: {
      numberA: 1,
      numberB: 2,
    }
  },

  lifetimes: {
    created: function () {
      // 组件实例刚刚被创建好时
      console.log("Component created")
    },
    attached: function () {
      // 在组件实例进入页面节点树时执行
      console.log("Component attached")
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
      console.log("Component detached")
    },
  },

  observers: {
    "value": function (newValue) {
      console.log('newValue', newValue)
      console.log('currentValue', this.data.value)
      console.log(newValue === this.data.value) // true
    },


    'obj.**': function (numberB) {
      console.log('numberB', numberB)
    },

    'obj': function (obj) {
      console.log('obj', obj)
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTop() {
      this.triggerEvent('myevent', this.properties)
    }
  }
})