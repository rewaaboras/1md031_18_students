 const vm = new Vue({
  el: '#dashbord',
  data: {
    width: '200',
    burgers: burgers,
    costumer: {
      name: '',
      email: '',
      street: '',
      houseNr: '',
      paymethod: '',
      gender: '',
      order: ''
    },
    displayInfo: false,


},
  methods: {
    submit: function() {
      console.log(this.costumer),
      this.displayInfo = true;
    },
  }
})
