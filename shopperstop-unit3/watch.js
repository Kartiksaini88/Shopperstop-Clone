//  bargains from here ---------
     
var bargains_img_data = [
    {
     img:"https://sslimages.shoppersstop.com/sys-master/root/h76/h55/27102690803742/wewb_men_oct_2022-02-19_six-widget_flat-50.jpg"
    },
    {
     img:`https://sslimages.shoppersstop.com/sys-master/root/h25/h56/27102690869278/web_men_f-c-u-k_six-widget_2022-02-19new.jpg`
    },
    {
     img:`https://sslimages.shoppersstop.com/sys-master/root/h5d/h19/27083015716894/reebok_6widget.jpg`
    },
    {
     img:`https://sslimages.shoppersstop.com/sys-master/root/h1e/h1a/27083015782430/puma_6widget.jpg`
    },
    {
     img:`https://sslimages.shoppersstop.com/sys-master/root/h41/h6b/27083016011806/adidas_6widget.jpg`
    },
    {
     img:`https://sslimages.shoppersstop.com/sys-master/root/hef/h6b/27083016077342/fila_6widget.jpg`
    },
]


function append_bargains_img(bargains_img_data){
 bargains_img_data.map(ele=> {
     
     let div = document.createElement("div")
     div.setAttribute("id","js_bargain_div")

     let img = document.createElement("img")
     img.setAttribute("id","appended_bargains_img")
     img.src = ele.img

     div.append(img)

     document.getElementById("append_bargains_img").append(div)
 });
}
// append_bargains_img(bargains_img_data)
// bargains to here --------------

//top brands from here---------

let top_brands_data= [
  {
      img:"https://sslimages.shoppersstop.com/sys-master/root/h9b/hc9/26952666644510/Shop-By-Trend-3x3-Widgets-Work-Watches_20220131.jpg"
  },
  {
      img:"https://sslimages.shoppersstop.com/sys-master/root/had/hcc/26952666710046/Shop-By-Trend-3x3-Widgets-Party-Watches_20220131.jpg"
  },
  {
      img:"https://sslimages.shoppersstop.com/sys-master/root/h6c/hd0/26952666841118/Shop-By-Trend-3x3-Widgets-Couple-watch_20220131.jpg"
  },
  {
      img:"https://sslimages.shoppersstop.com/sys-master/root/h6a/hd3/26952666906654/Shop-By-Trend-3x3-Widgets-Luxury_20220131.jpg"
  },
  {
      img:"https://sslimages.shoppersstop.com/sys-master/root/h2b/he1/26952667037726/Shop-By-Trend-3x3-Widgets-Casual-Watches_20220131.jpg"
  },
  {
      img:"https://sslimages.shoppersstop.com/sys-master/root/hb1/hda/26952667201566/Shop-By-Trend-3x3-Widgets-Sports-Watches_20220131.jpg"
  },
]
function append_top_brand_img(top_brands_data){
 top_brands_data.map(ele=> {
     
     let div = document.createElement("div")
     div.setAttribute("id","js_bargain_div")

     let img = document.createElement("img")
     img.setAttribute("id","top_brand_img")
     img.src = ele.img

     div.append(img)

     document.getElementById("append_top_brand_img").append(div)
 });
}
append_top_brand_img(top_brands_data)
//top brands to here ------


// shoppers from here ------

let shoppers_data = [
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/h5a/h11/26952669954078/police_6-widget--watchespage-20220131.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/h36/hf6/26952670019614/anne-klein_6-widget--202201311.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/h66/hef/26952670216222/armani-exchange_6-widget--newwatchespg31012022.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/h93/hd8/26981230805022/versus_6-widget----web--02022022-watchespage.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/h99/hd8/26981231034398/garmin_6-widget--watchespagee-revised02022022.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/h96/he8/26952670412830/diesel_6-widget--newwatchespage20220131.jpg"
 },
]
function append_shoppers_img(shoppers_data){
 shoppers_data.map(ele=> {
     
     let div = document.createElement("div")
     div.setAttribute("id","js_bargain_div")

     let img = document.createElement("img")
     img.setAttribute("id","shoppers_img")
     img.src = ele.img

     div.append(img)

     document.getElementById("append_shoppers_img").append(div)
 });
}
append_shoppers_img(shoppers_data)

var winter_img=[
 {
 img:"https://sslimages.shoppersstop.com/sys-master/root/h65/hc9/26952667725854/Watches-4-Widgets-Casio-Web_20220131.jpg"
 },
 {
 img:"https://sslimages.shoppersstop.com/sys-master/root/ha6/hc5/26952667856926/Watches-4-Widgets-Emporio-Armani-Web_20220131.jpg"
 },
 {
 img:"https://sslimages.shoppersstop.com/sys-master/root/hd2/h76/26952668086302/Watches-4-Widgets-Tissot-Web_20220131.jpg"
 },
 {
 img:"https://sslimages.shoppersstop.com/sys-master/root/hc3/h70/26952668217374/Watches-4-Widgets-giordano-Web_20220131.jpg"
 }
]


function append_winter(winter_img){
 winter_img.forEach(ele => {
     
     let div = document.createElement("div")
     div.setAttribute("id","js_winter_div")

     let img = document.createElement("img")
     img.setAttribute("id","appended_winter_img")
     img.src = ele.img

     div.append(img)

     document.getElementById("append_winter_img").append(div)
 });
}
append_winter(winter_img)

let brands_love = [
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/h3a/h65/26958153646110/Kenneth-cole----web_20220131.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/h4b/h68/26958153711646/Fastrack--web_20220131.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/hfa/h68/26958153777182/JUST-CAVALLI---web_20220131.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/h0a/h6c/26958153842718/SLAZENGER---web_20220131.jpg"
 },
]



function append_love(brands_love){
 brands_love.forEach(ele => {
     
     let div = document.createElement("div")
     div.setAttribute("id","js_love_div")

     let img = document.createElement("img")
     img.setAttribute("id","appended_love_img")
     img.src = ele.img

     div.append(img)

     document.getElementById("append_love_img").append(div)
 });
}

append_love(brands_love)

let budget_img= [
    {
        img:"https://sslimages.shoppersstop.com/sys-master/root/h65/hc9/26952667725854/Watches-4-Widgets-Casio-Web_20220131.jpg"
        },
        {
        img:"https://sslimages.shoppersstop.com/sys-master/root/ha6/hc5/26952667856926/Watches-4-Widgets-Emporio-Armani-Web_20220131.jpg"
        },
        {
        img:"https://sslimages.shoppersstop.com/sys-master/root/hd2/h76/26952668086302/Watches-4-Widgets-Tissot-Web_20220131.jpg"
        },
        {
        img:"https://sslimages.shoppersstop.com/sys-master/root/hc3/h70/26952668217374/Watches-4-Widgets-giordano-Web_20220131.jpg"
        }
]


function append_budget(budget_img){
 budget_img.forEach(ele => {
     
     let div = document.createElement("div")
     div.setAttribute("id","js_love_div")

     let img = document.createElement("img")
     img.setAttribute("id","appended_love_img")
     img.src = ele.img

     div.append(img)

     document.getElementById("append_budget_img").append(div)
 });
}
append_budget(budget_img)

let trend_img = [
  {
      img:"https://sslimages.shoppersstop.com/sys-master/root/h9b/hc9/26952666644510/Shop-By-Trend-3x3-Widgets-Work-Watches_20220131.jpg"
  },
  {
      img:"https://sslimages.shoppersstop.com/sys-master/root/had/hcc/26952666710046/Shop-By-Trend-3x3-Widgets-Party-Watches_20220131.jpg"
  },
  {
      img:"https://sslimages.shoppersstop.com/sys-master/root/h6c/hd0/26952666841118/Shop-By-Trend-3x3-Widgets-Couple-watch_20220131.jpg"
  },
  {
      img:"https://sslimages.shoppersstop.com/sys-master/root/h6a/hd3/26952666906654/Shop-By-Trend-3x3-Widgets-Luxury_20220131.jpg"
  },
  {
      img:"https://sslimages.shoppersstop.com/sys-master/root/h2b/he1/26952667037726/Shop-By-Trend-3x3-Widgets-Casual-Watches_20220131.jpg"
  },
  {
      img:"https://sslimages.shoppersstop.com/sys-master/root/hb1/hda/26952667201566/Shop-By-Trend-3x3-Widgets-Sports-Watches_20220131.jpg"
  },
]

function append_trend_img(trend_img){
 trend_img.map(ele=> {
     
     let div = document.createElement("div")
     div.setAttribute("id","js_bargain_div")

     let img = document.createElement("img")
     img.setAttribute("id","appended_bargains_img")
     img.src = ele.img

     div.append(img)

     document.getElementById("append_trend_img").append(div)
 });
}
// append_trend_img(trend_img)


let bot_sweat = [
    {
        img:"https://sslimages.shoppersstop.com/sys-master/root/h9b/hc9/26952666644510/Shop-By-Trend-3x3-Widgets-Work-Watches_20220131.jpg"
    },
    {
        img:"https://sslimages.shoppersstop.com/sys-master/root/had/hcc/26952666710046/Shop-By-Trend-3x3-Widgets-Party-Watches_20220131.jpg"
    },
    {
        img:"https://sslimages.shoppersstop.com/sys-master/root/h6c/hd0/26952666841118/Shop-By-Trend-3x3-Widgets-Couple-watch_20220131.jpg"
    },
    {
        img:"https://sslimages.shoppersstop.com/sys-master/root/h6a/hd3/26952666906654/Shop-By-Trend-3x3-Widgets-Luxury_20220131.jpg"
    },
    {
        img:"https://sslimages.shoppersstop.com/sys-master/root/h2b/he1/26952667037726/Shop-By-Trend-3x3-Widgets-Casual-Watches_20220131.jpg"
    },
    {
        img:"https://sslimages.shoppersstop.com/sys-master/root/hb1/hda/26952667201566/Shop-By-Trend-3x3-Widgets-Sports-Watches_20220131.jpg"
    },
    
]

function append_bot_img(bot_sweat){
 bot_sweat.map(ele=> {
     
     let div = document.createElement("div")
     div.setAttribute("id","js_bargain_div")

     let img = document.createElement("img")
     img.setAttribute("id","appended_bargains_img")
     img.src = ele.img

     div.append(img)

     document.getElementById("bot-sweat").append(div)
 });
}
append_bot_img(bot_sweat)

let best_img = [
    {
        img:"https://sslimages.shoppersstop.com/sys-master/root/h9b/hc9/26952666644510/Shop-By-Trend-3x3-Widgets-Work-Watches_20220131.jpg"
    },
    {
        img:"https://sslimages.shoppersstop.com/sys-master/root/had/hcc/26952666710046/Shop-By-Trend-3x3-Widgets-Party-Watches_20220131.jpg"
    },
    {
        img:"https://sslimages.shoppersstop.com/sys-master/root/h6c/hd0/26952666841118/Shop-By-Trend-3x3-Widgets-Couple-watch_20220131.jpg"
    },
    {
        img:"https://sslimages.shoppersstop.com/sys-master/root/h6a/hd3/26952666906654/Shop-By-Trend-3x3-Widgets-Luxury_20220131.jpg"
    },
    {
        img:"https://sslimages.shoppersstop.com/sys-master/root/h2b/he1/26952667037726/Shop-By-Trend-3x3-Widgets-Casual-Watches_20220131.jpg"
    },
    {
        img:"https://sslimages.shoppersstop.com/sys-master/root/hb1/hda/26952667201566/Shop-By-Trend-3x3-Widgets-Sports-Watches_20220131.jpg"
    },
]

function append_best_brand_img(best_img){
 best_img.map(ele=> {
     
     let div = document.createElement("div")
     div.setAttribute("id","js_bargain_div")

     let img = document.createElement("img")
     img.setAttribute("id","top_brand_img")
     img.src = ele.img

     div.append(img)

     document.getElementById("append_best_brand_img").append(div)
 });

}
append_best_brand_img(best_img)


let exp_img=[
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/hbd/hbc/27102691786782/app_mens_pg_f-c-u-k_new_2022-2-19_explore-flat60ofmorebrandss.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/h15/hbe/27083021713438/VDOT----r-6-Widgets.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/h0f/hbc/27102691721246/app_mens_Van-Heusen--r-6-Widgets_start-999_rs_2022-02-19new.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/hda/h6b/27083022041118/Explore-More-Brands-6-Widgets-Selected.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/hdc/h68/27083022106654/Killer---r-6-Widgets.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/h5e/h61/27083022368798/Royal-Enfield--r-6-Widgets.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/h8c/h04/27083023220766/Explore-More-Brands-6-Widgets-Bascis.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/h4c/h9c/27108362158110/web_mne_expl_mro_nu_up-to-50_2022-2-21.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/hb2/h0e/27083023515678/Explore-More-Brands-6-Widgets-Flying-Machine.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/h82/h15/27083023712286/Explore-More-Brands-6-Widgets-Arrow-Sports.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/h41/h19/27083023843358/Explore-More-Brands-6-Widgets-Free-Authority.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/h5d/h9f/27108362223646/web_mne_expl_mro_octt_up-to-50_2022-2-21.jpg"
 },
]

function appen_exp(exp_img){
 exp_img.forEach(ele =>{

     let div = document.createElement("div")

     let img = document.createElement("img")
     img.setAttribute("id","exp_images")
     img.src = ele.img

     div.append(img)

     document.getElementById("append_exp").append(div)
 })
}
appen_exp(exp_img)

let last = [
  {
   img:"https://sslimages.shoppersstop.com/sys-master/root/h40/h47/14895600730142/pepe.png"
  },
  {
   img:"https://sslimages.shoppersstop.com/sys-master/root/h3f/hf7/8854902931486/BrandLouis-Philippe.png"
  },
  {
   img:"https://sslimages.shoppersstop.com/sys-master/root/h28/h5d/15070698471454/BlackBerrys.png"
  },
  {
   img:"https://sslimages.shoppersstop.com/sys-master/root/h4e/h9f/9519789539358/BrandVettorio-Fratini.png"
  },
  {
   img:"https://sslimages.shoppersstop.com/sys-master/root/h21/h1e/14895599550494/UCB.png"
  },
  {
   img:"https://sslimages.shoppersstop.com/sys-master/root/h35/h25/14895599779870/Arrow.png"
  },
]

function append_last(last){
 last.forEach(ele=>{

     let div = document.createElement("div")

     let img = document.createElement("img")
     img.src=ele.img

     div.append(img)

     document.getElementById("small").append(div)
 })
}
append_last(last)

import header from "./components/header.js";

let header_box=document.getElementById("header");
header_box.innerHTML=header();

let input=document.getElementById('search_btn');

input.addEventListener('click',()=>{
    let input_value=document.getElementById('search_bar');
    localStorage.setItem("search_value",JSON.stringify(input_value));
    window.location.href="footer.html";
});

import footer from "./components/footer.js";

let footer_box=document.getElementById('footer');
footer_box.innerHTML=footer();