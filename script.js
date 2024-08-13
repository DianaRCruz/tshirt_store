var carrousel, cart, total, is_visible;
console.log("I am here")

//Moves carrosel picure to next
function carrousel_next(img) {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  carrousel.push(carrousel.shift());
  let image = document.getElementById(img);
  image.setAttribute("src", carrousel[0]);
}

//Moves carrousel picture to the previous 
function carrousel_previous(img) {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  carrousel.unshift(carrousel.pop());
  let image = document.getElementById(img);
  image.setAttribute("src", carrousel.slice(-1)[0]);
}


carrousel = ['https://static.zara.net/assets/public/87e4/a379/815e43ce802d/2fd12a884574/00085034807-e1/00085034807-e1.jpg?ts=1720014311602&w=398" width="150'
            ,'https://static.zara.net/assets/public/f918/98a8/897c4fb3a540/8a21cc9697db/08686628250-e1/08686628250-e1.jpg?ts=1722588687943&w=398" width="150'
            ,'https://static.zara.net/assets/public/8499/3f66/e76c4767ace3/1990b24f2a14/04644451807-e1/04644451807-e1.jpg?ts=1721139496051&w=398" width="150'
            ,'https://static.zara.net/assets/public/0c37/f8e9/ad1e40e595dd/1cce73e64355/05644889250-e1/05644889250-e1.jpg?ts=1723113115810&w=426" width="150'
            ,'https://static.zara.net/assets/public/4f7e/0cea/34de4052bcd0/17734a0f2f94/06224325500-e1/06224325500-e1.jpg?ts=1722593593758&w=426" width="150'
            ,'https://static.zara.net/assets/public/2791/8c76/267141e8ad05/7d3a44256162/01165309949-e1/01165309949-e1.jpg?ts=1723014633228&w=426" width="150'
            ,'https://static.zara.net/assets/public/8653/f510/04e341acb7fa/2d3f1e3954a5/02160324526-e1/02160324526-e1.jpg?ts=1723447024578&w=426" width="150'
            ,'https://static.zara.net/assets/public/87cc/d076/527d422dab39/be6c924b20aa/04805315615-e1/04805315615-e1.jpg?ts=1722954750084&w=426" width="150'
            ,'https://static.zara.net/assets/public/7a46/a51b/c7f7473db488/ab56a9e93787/06224326420-e1/06224326420-e1.jpg?ts=1722410969662&w=426" width="150'
            ,'https://static.zara.net/assets/public/1b7d/352c/4c2b4c9883b6/0d2f80a1ee74/00304416711-e1/00304416711-e1.jpg?ts=1715854186656&w=426" width="150'
            ,'https://static.zara.net/assets/public/675f/ca54/1d9f419fa3a0/13b53db165d1/06224324250-e1/06224324250-e1.jpg?ts=1721981228813&w=426" width="150'];

cart = [];

total = [];

var src=["https://static.zara.net/assets/public/87e4/a379/815e43ce802d/2fd12a884574/00085034807-e1/00085034807-e1.jpg?ts=1720014311602&w=398"
       , "https://static.zara.net/assets/public/f918/98a8/897c4fb3a540/8a21cc9697db/08686628250-e1/08686628250-e1.jpg?ts=1722588687943&w=398"
       , "https://static.zara.net/assets/public/8499/3f66/e76c4767ace3/1990b24f2a14/04644451807-e1/04644451807-e1.jpg?ts=1721139496051&w=398"
       , "https://static.zara.net/assets/public/0c37/f8e9/ad1e40e595dd/1cce73e64355/05644889250-e1/05644889250-e1.jpg?ts=1723113115810&w=426"
       , "https://static.zara.net/assets/public/4f7e/0cea/34de4052bcd0/17734a0f2f94/06224325500-e1/06224325500-e1.jpg?ts=1722593593758&w=426"
       , "https://static.zara.net/assets/public/2791/8c76/267141e8ad05/7d3a44256162/01165309949-e1/01165309949-e1.jpg?ts=1723014633228&w=426"
       , "https://static.zara.net/assets/public/8653/f510/04e341acb7fa/2d3f1e3954a5/02160324526-e1/02160324526-e1.jpg?ts=1723447024578&w=426"
       , "https://static.zara.net/assets/public/87cc/d076/527d422dab39/be6c924b20aa/04805315615-e1/04805315615-e1.jpg?ts=1722954750084&w=426"
       , "https://static.zara.net/assets/public/7a46/a51b/c7f7473db488/ab56a9e93787/06224326420-e1/06224326420-e1.jpg?ts=1722410969662&w=426"
       , "https://static.zara.net/assets/public/1b7d/352c/4c2b4c9883b6/0d2f80a1ee74/00304416711-e1/00304416711-e1.jpg?ts=1715854186656&w=426"
       , "https://static.zara.net/assets/public/675f/ca54/1d9f419fa3a0/13b53db165d1/06224324250-e1/06224324250-e1.jpg?ts=1721981228813&w=426"];
      
var price=[16.70
          ,19.80
          ,17.20
          ,15.30
          ,19.50
          ,14.40
          ,20.30
          ,13.90
          ,18.30
          ,17.60
          ,13.80]

var description = ['MARILYN MONROE T-SHIRT'
                  ,'LACE TRIM T-SHIRT'
                  ,'OVERSIZED T-SHIRT'
                  ,"EMBROIDERED PHOTO T-SHIRT"
                  ,"CONTRAST PRINTED T-SHIRT"
                  ,"TIE-DYE T-SHIRT"
                  ,"BOWIE T-SHIRT"
                  ,"FADED T-SHIRT"
                  ,"PRINTED SLOGANS T-SHIRT"
                  ,"VISCOSE BLEND KNIT T-SHIRT"
                  ,"PAINT SPLATTER T-SHIRT"]


let element_inside_cart_div = document.getElementById('inside_cart_div');
element_inside_cart_div.style.display = (false) ? 'flex' : 'none';
is_visible = false;

//Fix Caroussel Overlaping... next iterations 
setInterval(()=>carrousel_next("carrousel_img1"), 2200);
setInterval(()=>carrousel_previous("carrousel_img2"), 2400);
setInterval(()=>carrousel_next("carrousel_img3"), 2600);



// document.getElementById('next').addEventListener('click', (event) => {
//   carrousel_next();

// });

// document.getElementById('previous').addEventListener('click', (event) => {
//   carrousel_previous();

// });

//Cart Button Inicialization
document.getElementById('cart_btn').addEventListener('click', (event) => {
  if (is_visible == false) {
    let element_inside_cart_div2 = document.getElementById('inside_cart_div');
    element_inside_cart_div2.style.display = (true) ? 'flex' : 'none';
    is_visible = true;
    event.target.innerText = 'CLOSE CART';
  } else {
    let element_inside_cart_div3 = document.getElementById('inside_cart_div');
    element_inside_cart_div3.style.display = (false) ? 'flex' : 'none';
    is_visible = false;
    event.target.innerText = 'SEE CART';
  }

});

// document.getElementById('monroe_btn').addEventListener('click', (event) => {
//   cart.push('MARILYN MONROE T-SHIRT');
//   total.push(16);
//   let element_cart_list = document.getElementById('cart_list');
//   let new_li = document.createElement('li');
//   new_li.innerText = cart.slice(-1)[0];

//   element_cart_list.appendChild(new_li);
//   let new_span = document.createElement('span');
//   new_span.innerText = total.slice(-1)[0];

//   element_cart_list.appendChild(new_span);
//   let new_span2 = document.createElement('span');
//   new_span2.innerText = 'EUR';

//   element_cart_list.appendChild(new_span2);
//   let element_total = document.getElementById('total');
//   element_total.innerText = total.reduce((a,b) => a+b, 0);

// });

// document.getElementById('lace_btn').addEventListener('click', (event) => {
//   cart.push('LACE TRIM T-SHIRT');
//   total.push(19);
//   let element_cart_list2 = document.getElementById('cart_list');
//   let new_li2 = document.createElement('li');
//   new_li2.innerText = cart.slice(-1)[0];

//   element_cart_list2.appendChild(new_li2);
//   let new_span3 = document.createElement('span');
//   new_span3.innerText = total.slice(-1)[0];

//   element_cart_list2.appendChild(new_span3);
//   let new_span4 = document.createElement('span');
//   new_span4.innerText = 'EUR';

//   element_cart_list2.appendChild(new_span4);
//   let element_total2 = document.getElementById('total');
//   element_total2.innerText = total.reduce((a,b) => a+b, 0);

// });

// document.getElementById('over_btn').addEventListener('click', (event) => {
//   cart.push('OVERSIZED T-SHIRT');
//   total.push(17);
//   let element_cart_list3 = document.getElementById('cart_list');
//   let new_li3 = document.createElement('li');
//   new_li3.innerText = cart.slice(-1)[0];

//   element_cart_list3.appendChild(new_li3);
//   let new_span5 = document.createElement('span');
//   new_span5.innerText = total.slice(-1)[0];

//   element_cart_list3.appendChild(new_span5);
//   let new_span6 = document.createElement('span');
//   new_span6.innerText = 'EUR';

//   element_cart_list3.appendChild(new_span6);
//   let element_total3 = document.getElementById('total');
//   element_total3.innerText = total.reduce((a,b) => a+b, 0);

// });




//   if(--window.LoopTrap <= 0) throw "Infinite loop.";
//   console.log("heyey")
//   index = 0;
//   price.forEach((item) => {
//     let element_div = document.getElementById('showroom');

//     let new_div = document.createElement('div')
//     new_div.setAttribute("id", "div")
//     element_div.appendChild(new_div);

//     let new_div2 = document.createElement('div')
//     new_div2.setAttribute("id", "div2")
//     new_div.appendChild(new_div2);

//     let new_img = document.createElement('img');
//     new_img.setAttribute("width", "155px");
//     new_img.setAttribute("src", src[index]);
//     // element_div.appendChild(new_img);
//     new_div2.appendChild(new_img);


//     let new_span = document.createElement('span');
//     // element_div.appendChild(new_span);
//     new_span.innerText = description[index];
//     new_div2.appendChild(new_span);

//     let new_span2 = document.createElement('span');
//     // element_div.appendChild(new_span2);
//     new_span2.innerText = item;
//     new_div2.appendChild(new_span2);

//     let new_span3 = document.createElement('span');
//     // element_div.appendChild(new_span3);
//     new_span3.innerText = " EUR";
//     new_span2.appendChild(new_span3);
    
//     let new_button = document.createElement('button');
//     new_button.setAttribute("id", index);
//     // element_div.appendChild(new_button);
//     new_button.innerText = "add to cart"
//     new_div2.appendChild(new_button)

//     index++;
//   });
// }

// function addToCart(elementId){
//   document.getElementById('elementId').addEventListener('click', (event) => {
//     cart.push(description[elementId]);
//     console.log(cart)
//     total.push(price[elementId]);
//     console.log(price)
//     let element_cart_list3 = document.getElementById('cart_list');
//     let new_li3 = document.createElement('li');
//     new_li3.innerText = cart.slice(-1)[0];
  
//     element_cart_list3.appendChild(new_li3);
//     let new_span5 = document.createElement('span');
//     new_span5.innerText = total.slice(-1)[0];
  
//     element_cart_list3.appendChild(new_span5);
//     let new_span6 = document.createElement('span');
//     new_span6.innerText = 'EUR';
  
//     element_cart_list3.appendChild(new_span6);
//     let element_total3 = document.getElementById('total');
//     element_total3.innerText = total.reduce((a,b) => a+b, 0);
  
//   });
// }

// createProducts()
// addToCart("1");
// addToCart("2");
// addToCart("3");



//Creating products function


function createProducts() {
  let index = 0;

  price.forEach((item) => {
    let element_div = document.getElementById('showroom');

    let new_div = document.createElement('div');
    new_div.setAttribute("id", "div");
    element_div.appendChild(new_div);

    let new_div2 = document.createElement('div');
    new_div2.setAttribute("id", "div2");
    new_div.appendChild(new_div2);

    let new_img = document.createElement('img');
    new_img.setAttribute("width", "155px");
    new_img.setAttribute("src", src[index]);
    new_div2.appendChild(new_img);

    let new_span = document.createElement('span');
    new_span.innerText = description[index];
    new_div2.appendChild(new_span);

    let new_span2 = document.createElement('span');
    new_span2.innerText = item;
    new_div2.appendChild(new_span2);

    let new_span3 = document.createElement('span');
    new_span3.innerText = " EUR";
    new_span2.appendChild(new_span3);
    
    let new_button = document.createElement('button');
    new_button.setAttribute("id", index);
    new_button.innerText = "add to cart";

    // Using IIFE to capture the correct value of index
    (function(currentIndex) {
      new_button.addEventListener('click', function() {
        addToCart(currentIndex);
      });
    })(index);

    new_div2.appendChild(new_button);

    index++;
  });
}

//AddToCart Button Inicialization
function addToCart(elementId) {
  cart.push(description[elementId]);
  total.push(price[elementId]);

  let element_cart_list = document.getElementById('cart_list');
  let new_li = document.createElement('li');
  new_li.innerText = cart.slice(-1)[0];

  element_cart_list.appendChild(new_li);
  
  let new_span = document.createElement('span');
  new_span.innerText = total.slice(-1)[0];
  element_cart_list.appendChild(new_span);

  let new_span2 = document.createElement('span');
  new_span2.innerText = ' EUR';
  element_cart_list.appendChild(new_span2);

  //show total and set to only to decimal 
  let element_total = document.getElementById('total');
  element_total.innerText = total.reduce((a, b) => a + b, 0).toFixed(2) + " EUR";
}

// Initializing the products
createProducts();




