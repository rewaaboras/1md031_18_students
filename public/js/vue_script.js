'use strict';
var socket = io();

 const vm = new Vue({
  el: '#dashbord',
  data: {
    orders: {},
    width: '200',
    burgers: burgers,
    costumer: {
      name: '',
      email: '',
      paymethod: '',
      gender: '',
      order: {}
    },
    displayInfo: false,
    theOrder: {
      orderId: '',
      details: {
        x:0,
        y:0
      },
      orderItems: {},
    }
},

created: function () {
  socket.on('initialize', function (data) {
    this.orders = data.orders;
  }.bind(this));

  socket.on('currentQueue', function (data) {
    this.orders = data.orders;
  }.bind(this));
},

  methods: {
    submit: function() {
      console.log(this.costumer);
      this.displayInfo = true;
    },
    getNext: function () {
      var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },
    displayOrder: function (event) {
      console.log("inisde function");
      var offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};

      this.theOrder.details= { x: event.clientX - 10 - offset.x,
                              y: event.clientY - 10 - offset.y };


      socket.emit("addOrder", { details: { x: event.clientX - 10 - offset.x,
                                          y: event.clientY - 10 - offset.y },
                              });
    },
    addOrder: function () {
      console.log("in add order func");
      this.theOrder.orderId= this.getNext();
      this.theOrder.orderItems= this.costumer.order;
      console.log(this.theOrder.orderId);
      console.log(this.theOrder.orderItems);
      socket.emit("addOrder", { orderId: '',
                                details: '',
                                orderItems: ''
                              });
    }

  }
})
