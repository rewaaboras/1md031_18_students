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
      order: []
    },
    displayInfo: false,
    theOrder: {
      orderId: '',
      details: {
        x:0,
        y:0
      },
      costumer: {
        name: '',
        email: '',
        paymethod: '',
        gender: '',
        order: [],
      }
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
      this.displayInfo = true;
    },

    getNext: function () {
      var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },
    resetData: function (data) {
      Object.keys(data).forEach(function(key,index) {
        if (Array.isArray(data[key])) {
          data[key] = []
        } else {
          data[key] = '';
        }
      });
    },
    displayOrder: function (event) {
      console.log("inisde function");
      var offset = {x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top};

        this.theOrder.details= { x: event.clientX - 10 - offset.x,
          y: event.clientY - 10 - offset.y };

        },
        addOrder: function (event) {
          event.preventDefault();
          console.log("in the order func")
          this.theOrder.orderId = this.getNext();
          this.theOrder.costumer = {
            name: this.costumer.name,
            email: this.costumer.email,
            paymethod: this.costumer.paymethod,
            gender: this.costumer.gender,
            order: this.costumer.order,
          };

          this.submit();
          socket.emit("addOrder" , {
            orderId: this.theOrder.orderId,
            details: this.theOrder.details,
            orderItems: this.theOrder.costumer.order,
            name: this.theOrder.costumer.name,
            email: this.theOrder.costumer.email,
            paymethod: this.theOrder.costumer.paymethod,
            gender: this.theOrder.costumer.gender
          //orders: this.theOrder
          });
          this.resetData(this.costumer);
        }


      }
    })
