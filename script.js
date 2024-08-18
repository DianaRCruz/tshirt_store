var carrousel, cart, total, is_visible;

//Remenber after tests for debbug 
// console.log("I am here")
// console.log("hello")
// const formtest = document.getElementById("mail")
// const requiredTest2 = formtest.required
// console.log(requiredTest2)
// console.log(requiredTest2 === false)


//Moves carrosel picure to next
function carrousel_next(img) {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  carrousel.push(carrousel.shift());
  let image = document.getElementById(img);
  image.setAttribute("src", carrousel[0]);
  image.setAttribute("alt", "");
}

//Moves carrousel picture to the previous 
function carrousel_previous(img) {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  carrousel.unshift(carrousel.pop());
  let image = document.getElementById(img);
  image.setAttribute("src", carrousel.slice(-1)[0])
  image.setAttribute("alt", "");
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

carrousel_next("carrousel_img1");
setTimeout(()=>carrousel_previous("carrousel_img2"),200);
setTimeout(()=>carrousel_next("carrousel_img3"),400);

setInterval(()=>carrousel_next("carrousel_img1"), 2200);
setInterval(()=>carrousel_previous("carrousel_img2"), 2400);
setInterval(()=>carrousel_next("carrousel_img3"), 2600);
      
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




//Creating products function


function createProducts() {
   index = 0;

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
    new_img.setAttribute("src", src[index])
    new_img.setAttribute("id", "showroom_imgs");
    new_img.setAttribute("alt", `image of a ${description[index]}`);
    new_div2.appendChild(new_img);

    let new_span = document.createElement('span');
    new_span.innerText = description[index];
    new_div2.appendChild(new_span);

    let new_span2 = document.createElement('span');
    let new_strong = document.createElement("strong")
    new_strong.innerText = item;
    new_div2.appendChild(new_span2);
    new_span2.appendChild(new_strong);

    let new_span3 = document.createElement('span');
    let new_strong2 = document.createElement('strong');
    new_strong2.innerText = " EUR";
    new_span2.appendChild(new_span3);
    new_span3.appendChild(new_strong2)
    
    let new_button = document.createElement('button');
    new_button.setAttribute("id", index);
    new_button.innerText = "ADD TO CART";

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

// Initializing the products
createProducts();





// Add to Cart Button Initialization
function addToCart(elementId) {
  // Add to cart and total arrays
  const cartItem = { id: cart.length, description: description[elementId], price: price[elementId] };
  cart.push(cartItem);
  total.push(price[elementId]);

  // Create li element and append to cart_list
  let element_cart_list = document.getElementById('cart_list');
  let new_li = document.createElement('li');

  new_li.innerText = cartItem.description;
  new_li.setAttribute("data-index", cartItem.id); // Store the index in a data attribute
  element_cart_list.appendChild(new_li);

  // Create and append a line break
  let new_break = document.createElement('br');
  new_li.appendChild(new_break);

  // Create and append a strong element for the price
  let new_strong = document.createElement('strong');
  new_strong.innerText = cartItem.price + " EUR";
  new_li.appendChild(new_strong);

  // Create and append a remove button
  let new_button = document.createElement('button');
  new_button.innerText = "REMOVE PRODUCT";
  new_button.setAttribute("data-index", cartItem.id); // Store the index in a data attribute
  new_button.classList.add('remove-button');
  new_li.appendChild(new_button);

  // Update the total price
  updateTotal();
}

// Event delegation: Attach one event listener to the cart list
document.getElementById('cart_list').addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    let index = event.target.getAttribute('data-index');
    RemoveFromCart(index);
  }
});

// Remove from Cart Button Initialization
function RemoveFromCart(index) {
  index = parseInt(index);
  cart.splice(index, 1);
  total.splice(index, 1);

  // Remove the corresponding list item from the DOM
  let itemToRemove = document.querySelector(`[data-index='${index}']`);
  if (itemToRemove) {
    itemToRemove.remove();
  }

  // Update the total price
  updateTotal();

  // Reassign data-index attributes to remaining items
  document.querySelectorAll('#cart_list li').forEach((item, newIndex) => {
    item.setAttribute('data-index', newIndex);
    let button = item.querySelector('button');
    button.setAttribute('data-index', newIndex);
  });
}

// Function to update the total price
function updateTotal() {
  let element_total = document.getElementById('total');
  element_total.innerText = total.reduce((a, b) => a + b, 0).toFixed(2) + " EUR";
}







//Adding media query for header behavior-W3 school

function mediaQueryWindowSizeSmall(x) {
  if (x.matches) { // If media query matches
   
      document.getElementById("h13").style.display="none";
      document.getElementById("h12").style.display="none";
    }
  } 

// Create a MediaQueryList object
const mediaQuery1 = window.matchMedia("(max-width: 700px)");

// Call listener function at run time
mediaQueryWindowSizeSmall(mediaQuery1);

// Attach listener function on state changes
mediaQuery1.addEventListener("change", function() {
  mediaQueryWindowSizeSmall(mediaQuery1);
});

//Change back to orinal features after being changed
function mediaQueryWindowSizeBig(x) {
  if (x.matches) { // If media query matches
   
      document.getElementById("h13").style.display="block";
      document.getElementById("h12").style.display="block";
    }
  } 

const mediaQuery2 = window.matchMedia("(min-width: 700px)")
mediaQuery2.addEventListener("change", function() {
  mediaQueryWindowSizeBig(mediaQuery2);
});



//takes user to check out page
const checkOutBtn = document.getElementById("check_out_btn")
checkOutBtn.addEventListener("click",()=>location.href = "checkout.html")



//prevents reloading the page and emits an alert
//need  to add check for empty things
//-- Solution:the event handler shoul be at the form element "submit", not at form buttom "click" event
const btnForm = document.getElementById("usrform")
btnForm.addEventListener("submit",(event)=>{
  event.preventDefault();
  alert("thank's for your comment")})


