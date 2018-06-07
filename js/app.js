const container = document.getElementById('container');
const catImages = document.getElementsByClassName('image');

class Cat {

  constructor(id = '', name = '', image= '', count = 0, container = '', clicks = '') {
    this.id = id;
    this.name = name;
    this.image = image;
    this.count = count;
    this.container = container;
    this.clicks = clicks;
  }

  createCatContainer() {

    const div = document.createElement('div');

    container.appendChild(div);
    div.classList.add('cat-container');
    div.setAttribute('id', this.container);
    this.giveName();
  }

  giveName() {

    const newHeading = document.createElement('h2');
    const catContainer = document.getElementById(this.container);

    catContainer.appendChild(newHeading);
    newHeading.classList.add('cat-name');
    newHeading.innerHTML = this.name;
    this.createImage();
  }

  createImage() {

    const img = document.createElement('img');
    const source = `./img/${this.image}.jpg`;
    const catContainer = document.getElementById(this.container);

    catContainer.appendChild(img);
    img.classList.add('image');
    img.setAttribute('src', source);
    img.setAttribute('alt', this.name);
    img.setAttribute('id', this.clicks);
    this.createCaption();

  }

  createCaption() {

    const p = document.createElement('p');
    const catContainer = document.getElementById(this.container);
    let img = document.getElementsByTagName('img');

    catContainer.appendChild(p);
    p.classList.add('caption');

    this.clickerCount();

  }

  clickerCount() {

    const cats = document.getElementsByClassName('image');

    for (let i = 0; i < cats.length; i++) {
      const cat = cats[i];

      cat.addEventListener('click', (function(catCopy) {
        let count = 0;
        return function () {
          const p = catCopy.nextElementSibling;
          count +=1;
          if (count === 1) {
                p.textContent = `You clicked cat ${count} time.`
              } 
              else if (count >= 2) {
                p.textContent = `You clicked cat ${count} times.`
              }          
        };
      })(cat));
      
    }

  }

}

const monday = new Cat('Monday', 'Garfield - Monday Hater', 'monday', 0, 'cat1', 'cat1Image');

const coffee = new Cat('Coffee', 'Garfield - Coffee Addicted', 'coffee', 0, 'cat2', 'cat2Image');

const lasagna = new Cat('Lasagna', 'Garfield - Lasagna Lover', 'lasagna', 0, 'cat3', 'cat3Image');

const mice = new Cat('Mice', 'Garfield - Mice Friend', 'mice', 0, 'cat4', 'cat4Image');

const diet = new Cat('Diet', 'Garfield - on Diet', 'diet', 0, 'cat5', 'cat5Image');

monday.createCatContainer();
coffee.createCatContainer();
lasagna.createCatContainer();
mice.createCatContainer();
diet.createCatContainer();
