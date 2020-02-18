function menuItem(name, pic, allergy, kcl, other) {
    this.name = name;
    this.pic = pic;
    this.allergy = allergy;
    this.kcl = kcl ;
    this.other = other;
    this.getName = function() {
      return this.name;
    }

    this.getImg = function() {
      return this.pic;
    }

    this.getAllergy = function() {
      return this.allergy;
    }
    this.getKcl = function() {
      return "Calouries: " + this.kcl + "Kcl";
    }
    this.getOther = function()  {
      return this.other;
    }
}

let b1= new menuItem ('Halloumiburgare', "https://www.max.se/contentassets/b67d3c7259284fa8907374bdf4d205ee/product_gdl-umami-halloumi1.jpg" , 'lactose & gluten', 839 , 'Vegetarian');
let b2= new menuItem ('Smokey Plant Beef', "https://www.max.se/contentassets/2263da5f8c554c589a635deb450352ab/product_gdl-smokey-chipotle-plant-beef1.jpg", 790, 'Vegan');
let b3= new menuItem ('Spicy Chicken', "https://www.max.se/contentassets/f7358740037f4714b3e51fc9afbe5f2e/product_spicy-chicken1.jpg",'gluten', 920, "Can be ordered with vegan meet");
let b4= new menuItem ('Maxbox, Cheeseburgare', "https://www.max.se/contentassets/c97a5fa9ef8e467a8d05f3a17062d51d/product_maxbox-cheeseburgare.jpg",'lactose & gluten',800, 'kids menu with a toy');
let b5= new menuItem ('Originalburgare',"https://www.max.se/contentassets/a6f88bbdde454ea0a2d499a70128772b/product_originalburgare.jpg",'lactose & gluten', 950);

/**
var burgers = [b1,b2,b3,b4,b5];

for(let burger of burgers) {
  let div = document.createElement('div');
  let head = document.createElement('h3');
  let name= document.createTextNode(burger.getName());
  head.appendChild(name);

  let img= document.createElement('img');
  img.src = burger.getImg();
  img.width='200';
  img.length='200';

  let list = document.createElement('ul');

  if(burger.getAllergy() != null) {
    let elem= document.createElement('li');
    let par= document.createElement('p');
    let allergy = document.createTextNode(burger.getAllergy());
    par.appendChild(allergy);
    elem.appendChild(par);
    list.appendChild(elem);
  }

  let elem=document.createElement('li');
  let par = document.createElement('p');
  let kcl = document.createTextNode(burger.getKcl());
  par.appendChild(kcl);
  elem.appendChild(par);
  list.appendChild(elem);

  if(burger.getOther() != null) {
    let elem = document.createElement('li');
    let par = document.createElement('p');
    let other = document.createTextNode(burger.getOther());
    par.appendChild(other);
    elem.appendChild(par);
    list.appendChild(elem);
  }
  div.appendChild(head);
  div.appendChild(img);
  div.appendChild(list);
  document.getElementById('tableID').appendChild(div);

} */
