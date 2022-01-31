var container = document.getElementById("container");

var data = [

  {
    image_url:
      "https://www.netmeds.com/images/product-v1/150x150/411907/itch_guard_cream_12_gm_0.jpg",
    price: "350",
    detail:
      "Itch Guard+ Cream 12 gm",
  },
  {
    image_url:
      "https://www.netmeds.com/images/product-v1/150x150/15917/dabur_pudin_hara_pearls_capsule_10_s_0.jpg",
    price: "110",
    detail:
      "Dabur Pudin Hara Pearls Capsule 10's",
  },
  {
    image_url:
      "https://www.netmeds.com/images/product-v1/150x150/341494/liv_52_tablet_100_s_0.jpg",
    price: "70",
    detail:
      "Himalaya Liv.52 Tablet 100's",
  },
  {
    image_url:
      "https://www.netmeds.com/images/product-v1/150x150/390287/galact_granules_200gm_0.jpg",
    price: "149",
    detail: "Galact Granules - Elaichi Flavour 200gm",
  },
  {
    image_url:
      "https://www.netmeds.com/images/product-v1/600x600/15920/dabur_shilajit_gold_capsule_20s_0_1.jpg",
    price: "69",
    detail: "Dabur Shilajit Gold Capsule 20's",
  },
  {
    image_url:
      "https://www.netmeds.com/images/product-v1/150x150/12749/dabur_chyawanprash_awaleha_500_gm_0.jpg",
    price: "210",
    detail:
      "Dabur Chyawanprash Awaleha 500 gm",
  },
  {
    image_url:
      "https://www.netmeds.com/images/product-v1/150x150/15114/dettol_antiseptic_liquid_60_ml_0_1.jpg",
    price: "149",
    detail: "Dettol Antiseptic Liquid 60 ml",
  },
  {
    image_url:
      "https://www.netmeds.com/images/product-v1/150x150/896623/nixit_nicotine_gum_2_mg_pack_of_3x_6s_0_1.jpg",
    price: "199",
    detail:
      "Nixit Nicotine Gum 2 mg (Pack of 10 x 6's)",
      
  },
  {
    image_url:
      "https://www.netmeds.com/images/product-v1/150x150/822951/garnier_black_naturals_oil_enriched_cream_colour_deep_black_20_ml_20_gm_0_2.jpg",
price: "233",
    detail: 'Garnier Black Naturals Oil-Enriched Cream Colour - Deep Black (20 ml + 20 gm)',
  },

  {
    image_url:
      " https://www.netmeds.com/images/product-v1/600x600/14049/garnier_men_acnofight_anti_pimple_face_wash_50_gm_0_2.jpg",
    price: "455",
    detail:
      "Garnier Men Acnofight Anti Pimple Face Wash 50 gm",
  },

  {
    image_url:
      "https://www.netmeds.com/images/product-v1/600x600/14726/garnier_men_acnofight_pimple_clearing_whitening_cream_45_gm_0_2.jpg",
    price: "124",
    detail: "  Garnier Men Acnofight Pimple Clearing Whitening Cream 45 gm ",
  },
  {
    image_url:
      "https://www.netmeds.com/images/product-v1/150x150/823194/garnier_color_naturals_creme_riche_3_16_burgundy_70_ml_60_gm_0.jpg",
    price: "124",
    detail: " Garnier Color Naturals Creme Riche - 3.16 Burgundy (70 ml + 60 gm) ",
  },
  {
    image_url:
      "https://www.netmeds.com/images/product-v1/150x150/414294/d_acne_soft_face_wash_100gm_0.jpg",
    price: "145",
    detail: "D Acne Soft Face Wash 100gm",
  }
];
// console.log(data);
localStorage.setItem("productItem", JSON.stringify(data));
var product = JSON.parse(localStorage.getItem("productItem"));
var ecart = JSON.parse(localStorage.getItem("ecartItem")) || [];

function handlePriceSort() {
  var selected = document.getElementById("sortByPrice").value;
  console.log(selected);

  if (selected == "low") {
    product = product.sort(function (a, b) {
      return a.price - b.price;
    });4
  } else if (selected == "high") {
    product = product.sort(function (a, b) {
      return b.price - a.price;
    });
  }
  displayProduct(product);
}
displayProduct(product);

function displayProduct(product) {
  document.getElementById("container").innerHTML = "";
  product.map(function (item) {
    var img = document.createElement("img");
    img.setAttribute("src", item.image_url);

    var button = document.createElement("button");
    button.textContent = "Add";
    button.addEventListener("click", function () {
      addtoCart(item);
    });

    var pPrice = document.createElement("p");
    pPrice.setAttribute("class", "price");
    pPrice.textContent = item.price;

    var pdetail = document.createElement("p");
    pdetail.setAttribute("class", "detail");
    pdetail.textContent = item.detail;

    var divCont = document.createElement("div");
    container.append(divCont);
    divCont.append(img, button, pPrice, pdetail);

  });
  function addtoCart(item) {
    ecart.push(item);
    localStorage.setItem("ecartItem", JSON.stringify(ecart));
  }
}
document.getElementById("instore").addEventListener("click", function () {
  window.location.href = "./cart.html";
});
