 const burger = new Vue({
  el: '#tableID',
  data: {
    width: '200',
    burgers: [{name:'Halloumiburgare', img: "https://www.max.se/contentassets/b67d3c7259284fa8907374bdf4d205ee/product_gdl-umami-halloumi1.jpg", allergyCheck: true, allergy: 'lactose & gluten', kcl: 839 ,otherCheck:true, other:'Vegetarian'} ,
    {name:'Smokey Plant Beef',img: "https://www.max.se/contentassets/2263da5f8c554c589a635deb450352ab/product_gdl-smokey-chipotle-plant-beef1.jpg", allergyCheck: false, kcl: 790,otherCheck:true, other: 'Vegan'},
    {name:'Spicy Chicken', img:"https://www.max.se/contentassets/f7358740037f4714b3e51fc9afbe5f2e/product_spicy-chicken1.jpg", allergyCheck:true, allergy:'gluten', kcl:920, otherCheck:true, other:"Can be ordered with vegan meet"},
    {name:'Maxbox, Cheeseburgare', img:"https://www.max.se/contentassets/c97a5fa9ef8e467a8d05f3a17062d51d/product_maxbox-cheeseburgare.jpg",allergyCheck:true, allergy:'lactose & gluten',kcl:800, otherCheck:true , other:'kids menu with a toy'},
    {name:'Originalburgare',img:"https://www.max.se/contentassets/a6f88bbdde454ea0a2d499a70128772b/product_originalburgare.jpg",allergyCheck:true, allergy:'lactose & gluten', kcl:950, otherCheck:false}]
  }
})
