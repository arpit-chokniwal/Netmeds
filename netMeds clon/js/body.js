// SlidingIMgHome
document.getElementById("parent");
var image = document.getElementById("imgSlider");

var address = [
  "https://www.netmeds.com/offers/HEALTHY",
  "https://www.netmeds.com/images/cms/aw_rbslider/slides/1639487245_Homebvbbbb.jpg",
  "https://www.netmeds.com/images/cms/aw_rbslider/slides/1636717038_Home_bannerma25.jpg",
  "https://www.netmeds.com/images/cms/aw_rbslider/slides/1624976484_Web_home.jpg",
  "https://www.netmeds.com/images/cms/aw_rbslider/slides/1639487613_Web_Home_title_1680X320.jpg",
  "https://www.netmeds.com/images/cms/aw_rbslider/slides/1631889258_Web_Home_Bannerfdgdg.jpg",
  "https://www.netmeds.com/images/cms/aw_rbslider/slides/1629294429_web_same_day.jpg",
  "https://www.netmeds.com/images/cms/aw_rbslider/slides/1636904181_Home_bannerdsfsf.jpg"
];

var count = 0;
setInterval(
  function () {
  if (count == 8) {
    count = 0;
  }
  image.src = address[count];
  count++;
},2000);

