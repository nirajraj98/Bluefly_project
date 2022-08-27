function disp(data, muskan) {
  muskan.innerHTML = null;

  var sum = 0;

  if (data.length == 0) {
    document.querySelector("#sum").innerHTML = "Subtotal: " + sum;
  }

  data.forEach(function (elem, i) {
    var card = document.createElement("div");
    card.setAttribute("id", "card");

    var img = document.createElement("img");
    img.src = elem.img;
    img.setAttribute("id", "image");

    var name = document.createElement("h3");
    name.textContent = elem.title;
    name.setAttribute("id", "name");

    var price = document.createElement("p");
    price.textContent = elem.price;
    price.setAttribute("id", "price");
    //-----------------------------------------------------------------------------

    sum += Number(elem.price);
    console.log(sum);
    // sum.style.color="black"
    document.querySelector("#sum").innerHTML = "Subtotal: " + sum;

    var button = document.createElement("button");
    button.innerText = "x";
    button.setAttribute("id", "delete");

    button.addEventListener("click", function () {
      Delete(data, i, muskan);
    });

    card.append(img, name, price, button);

    muskan.append(card);
    console.log(muskan.innerHTML);
  });

}

function Delete(data, i, mus) {
  data.splice(i, 1);
  localStorage.setItem("masai-cart", JSON.stringify(data));
  disp(data, mus);
  // console.log(data);
}

//----------------------------------------------------------------------------------------

// document.querySelector("#btn").addEventListener("click", muskan1);
// function muskan1() {
//   window.location.href = "cart.html";
// }

// document.querySelector("#btn2").addEventListener("click", muskan2);
// function muskan2() {
//   window.location.href = "men.html";
// }

const Niraj = (el) => {
  el.style.display = "block";
};

export { disp, Niraj };
