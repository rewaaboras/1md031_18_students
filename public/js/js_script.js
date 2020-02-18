function menuItem(name, pic, allergy, kcl, other) {
    this.name = name;
    this.pic = pic;
    this.allergy = allergy;
    this.kcl = kcl ;
    this.other = other;
    this.getName = function() {
      return this.name;
    }
    this.getKcl = function() {
      return "Calouries: " + this.kcl;
    }
}

let hb= new menuItem ('Halloumiburgare', "https://www.max.se/contentassets/b67d3c7259284fa8907374bdf4d205ee/product_gdl-umami-halloumi1.jpg" , 'lactose & gluten', 839 , 'Vegetarian');
let pb= new menuItem ('Smokey Platn Beef', "https://www.max.se/contentassets/2263da5f8c554c589a635deb450352ab/product_gdl-smokey-chipotle-plant-beef1.jpg", 790, 'Vegan');
let cb= new menuItem ('Spicy Chicken', "https://www.max.se/contentassets/f7358740037f4714b3e51fc9afbe5f2e/product_spicy-chicken1.jpg",'gluten', 920, "Can be ordered with vegan meet");
let mb= new menuItem ('Maxbox, Cheeseburgare', "https://www.max.se/contentassets/c97a5fa9ef8e467a8d05f3a17062d51d/product_maxbox-cheeseburgare.jpg",'lactose & gluten',800, 'kids menu with a toy');
let ob= new menuItem ('Originalburgare',"https://www.max.se/contentassets/a6f88bbdde454ea0a2d499a70128772b/product_originalburgare.jpg",'lactose & gluten', 950);

console.log(hb.getName() , hb.getKcl());
