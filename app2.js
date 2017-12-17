//Model
let model = {
  adminShow: false,
  currentCat: null,
  cats: []
};

for (i=1; i<11; i++) {
  let kitty =
    {
      clickCount: 0,
      name: `Cat ${i}`,
      imgSrc: `image/${i}.jpeg`,
    }
  model.cats.push(kitty);
};

//octopus aka controller
let octopus = {
  init: function() {
    model.currentCat = model.cats[0];
    catListView.init();
    catDisplayView.init();
    adminView.init();
  },

  getCurrentCat: function() {
    return model.currentCat;
  },

  getCats: function() {
    return model.cats;
  },

  setCurrentCat: function(cat) {
    model.currentCat = cat;
  },

  incrementCounter: function() {
    model.currentCat.clickCount++;
    catDisplayView.render();
  },

  displayForm: function() {
    if (model.adminShow === false) {
      model.adminShow = true;
      adminView.formElem.style.display = 'block';
    }
    else {
      model.adminShow = false;
      adminView.formElem.style.display = 'none';
    }
  },

  formCancel: function() {
    adminview.formElem.style.display = 'none';
  },

  submitForm: function() {
    model.currentCat.name = nameElem.value;
    model.currentCat.imgSrc = urlElem.value;
    model.currentCat.clickCount = counterElem.value;
    catDisplayView.render();
    catListView.render();
    adminview.style.display = "none";
  }
};

//View1
let catDisplayView = {
  init: function() {


    this.catElem = document.getElementById('catImage');


    this.catElem.addEventListener('click', function(){
      octopus.incrementCounter();
      adminView.render();
    });

    this.render();
  },

  render: function() {
    let currentCat = octopus.getCurrentCat();
    this.catElem.src = currentCat.imgSrc;
  }
};
//View2
let catListView = {
  init: function() {
    this.catListElem = document.getElementById('catList');
    this.render();
  },

  render: function() {
    let cat, elem, i;
    let cats = octopus.getCats();   //get cats from model by using octopus

    this.catListElem.innerHTML = '';    //empty cat list
    for (i=0; i<cats.length; i++) {
      cat = cats[i];

      //create a cat list item and set the name
      elem = document.createElement('li');
      elem.textContent = cat.name;

      elem.addEventListener('click', (function(copy) {
        return function() {
          octopus.setCurrentCat(copy);
          catDisplayView.render();
          adminView.render();
        };
      })(cat));

      this.catListElem.appendChild(elem);
    }
  }
};

// View3
let adminView = {
  init: function() {
    this.formElem = document.getElementById('adminForm');
    this.adminElem = document.getElementById('adminButton');
    this.cancelElem = document.getElementById('cancelButton');
    this.urlElem = document.getElementById('url');
    this.nameElem = document.getElementById('name');
    this.counterElem = document.getElementById('counter');
    this.submitElem = document.getElementById('submitButton');

    this.formElem.style.display = 'none';

    this.adminElem.addEventListener('click', function(){
      octopus.displayForm();
    });

    this.cancelElem.addEventListener('click', function(){
      octopus.formCancel();
    });

    this.submitElem.addEventListener('click', function() {
      octopus.submitForm();
    });

    this.render();
  },

  render: function() {
    let currentCat = octopus.getCurrentCat();
    this.urlElem.value = currentCat.imgSrc;
    this.nameElem.value = currentCat.name;
    this.counterElem.value = currentCat.clickCount;

  }
};

octopus.init();
