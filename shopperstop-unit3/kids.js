//  bargains from here ---------
     
var bargains_img_data = [
    {
     img:"https://sslimages.shoppersstop.com/sys-master/root/h84/h79/26847536709662/0-3-Months-6-Widget.jpg"
    },
    {
     img:`https://sslimages.shoppersstop.com/sys-master/root/hc3/h78/26847536775198/3-6-Months-6-Widget.jpg`
    },
    {
     img:`https://sslimages.shoppersstop.com/sys-master/root/h4b/hdc/26847535923230/6-9-Months-6-Widget_20220117.jpg`
    },
    {
     img:`https://sslimages.shoppersstop.com/sys-master/root/hb2/h75/26847536840734/12-18-Months-6-Widget.jpg`
    },
    {
     img:`https://sslimages.shoppersstop.com/sys-master/root/hb4/h72/26847536906270/18---24-Months-6-Widget.jpg`
    },
    {
     img:`https://sslimages.shoppersstop.com/sys-master/root/hfd/hb7/26709387247646/24-36-Months-6-Widget_20211216.jpg`
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
append_bargains_img(bargains_img_data)
// bargains to here --------------

//top brands from here---------

let top_brands_data= [
  {
      img:"https://sslimages.shoppersstop.com/sys-master/root/h19/he6/26847535661086/3-6_4-widget_web_20220117.jpg"
  },
  {
      img:"https://sslimages.shoppersstop.com/sys-master/root/h1b/he3/26847535726622/7-9_4-widget_web_20220117.jpg"
  },
  {
      img:"https://sslimages.shoppersstop.com/sys-master/root/h09/h7e/26709384495134/10-12_4-widget_web_20211216.jpg"
  },
  {
      img:"https://sslimages.shoppersstop.com/sys-master/root/hfa/h77/26709384626206/13_4-widget_web_20211216.jpg"
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
  img:"https://sslimages.shoppersstop.com/sys-master/root/h9d/hdb/26847535988766/allen-solly_6widget_20220117.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/he0/h90/26847536054302/gini%26jony_6widget_20220117.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/hc2/hcf/26709387935774/stop_6widget_20211216.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/h1d/hc1/26918102466590/monte-carlo_6widget_20220127.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/hcb/hc1/26918102401054/mothercare_6widget_20220127.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/hfb/hc9/26709388820510/karrot_6widget_20211216.jpg"
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
 img:"https://sslimages.shoppersstop.com/sys-master/root/haa/h28/26906623934494/Sweatshirts-4-Widgets-Web_20220124.jpg"
 },
 {
 img:"https://sslimages.shoppersstop.com/sys-master/root/h67/h73/26906624000030/Winter-Jackets-4-Widgets-Web_20220124.jpg"
 },
 {
 img:"https://sslimages.shoppersstop.com/sys-master/root/h5c/h73/26993926406174/Pullovers-4-Widgets-Web.jpg"
 },
 {
 img:"https://sslimages.shoppersstop.com/sys-master/root/h73/hc2/26910294278174/Thermals-4-Widgets-Web_20220125.jpg"
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
// append_winter(winter_img)

let shopperskid_data = [
    {
     img:"https://sslimages.shoppersstop.com/sys-master/root/h64/h13/27076501274654/UCB---WEB-01.jpg"
    },
    {
     img:"https://sslimages.shoppersstop.com/sys-master/root/h55/h0d/27076501405726/Pepe-Jeans----WEB.jpg"
    },
    {
     img:"https://sslimages.shoppersstop.com/sys-master/root/h0a/h04/27076501930014/Ruff----WEB.jpg"
    },
    {
     img:"https://sslimages.shoppersstop.com/sys-master/root/h3f/h09/27076501569566/Puma---WEB.jpg"
    },
    {
     img:"https://sslimages.shoppersstop.com/sys-master/root/h53/h10/27076501340190/Under-Fourteen-Only---WEB.jpg"
    },
    {
     img:"https://sslimages.shoppersstop.com/sys-master/root/ha5/ha3/26794775216158/Biba-Girls----WEB_20220104.jpg"
    },
   ]

   function append_shopperskid_img(shopperskid_data){
    shopperskid_data.map(ele=> {
        
        let div = document.createElement("div")
        div.setAttribute("id","js_bargain_div")
   
        let img = document.createElement("img")
        img.setAttribute("id","shoppers_img")
        img.src = ele.img
   
        div.append(img)
   
        document.getElementById("appendkids_shoppers_img").append(div)
    });
   }
   append_shopperskid_img(shopperskid_data)

let brands_love = [
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/h22/h12/26918104432670/Wrangler--4-Widgets-Web.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/hc9/hf5/26906625769502/Pepe-Jaens--4-Widgets-Web_20220124.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/ha1/h19/26918104694814/Being-Human--4-Widgets-Web.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/heb/hfb/26906625900574/Mufti--4-Widgets-Web_20220124.jpg"
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

// append_love(brands_love)

let budget_img= [
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/h79/h40/26910302109726/Below-399--WEB------4-Widgets_01.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/h2e/h03/26910306926622/Below-499--web---4-Widgets.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/ha1/h47/26910302339102/Below-999--web---4-Widgets_01.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/hb1/h4a/26910302404638/Below-1499--WEB------4-Widgets_01.jpg"
 },
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
// append_budget(budget_img)

let trend_img = [
    {
        img:"https://sslimages.shoppersstop.com/sys-master/root/h84/h79/26847536709662/0-3-Months-6-Widget.jpg"
       },
       {
        img:`https://sslimages.shoppersstop.com/sys-master/root/hc3/h78/26847536775198/3-6-Months-6-Widget.jpg`
       },
       {
        img:`https://sslimages.shoppersstop.com/sys-master/root/h4b/hdc/26847535923230/6-9-Months-6-Widget_20220117.jpg`
       },
       {
        img:`https://sslimages.shoppersstop.com/sys-master/root/hb2/h75/26847536840734/12-18-Months-6-Widget.jpg`
       },
       {
        img:`https://sslimages.shoppersstop.com/sys-master/root/hb4/h72/26847536906270/18---24-Months-6-Widget.jpg`
       },
       {
        img:`https://sslimages.shoppersstop.com/sys-master/root/hfd/hb7/26709387247646/24-36-Months-6-Widget_20211216.jpg`
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
append_trend_img(trend_img)


let bot_sweat = [
    {
        img:"https://sslimages.shoppersstop.com/sys-master/root/h64/h13/27076501274654/UCB---WEB-01.jpg"
       },
       {
        img:"https://sslimages.shoppersstop.com/sys-master/root/h55/h0d/27076501405726/Pepe-Jeans----WEB.jpg"
       },
       {
        img:"https://sslimages.shoppersstop.com/sys-master/root/h0a/h04/27076501930014/Ruff----WEB.jpg"
       },
       {
        img:"https://sslimages.shoppersstop.com/sys-master/root/h3f/h09/27076501569566/Puma---WEB.jpg"
       },
       {
        img:"https://sslimages.shoppersstop.com/sys-master/root/h53/h10/27076501340190/Under-Fourteen-Only---WEB.jpg"
       },
       {
        img:"https://sslimages.shoppersstop.com/sys-master/root/ha5/ha3/26794775216158/Biba-Girls----WEB_20220104.jpg"
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
  img:"https://sslimages.shoppersstop.com/sys-master/root/h1f/h23/27100801204254/Park-Avenue-3x3-widget.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/h71/h22/27100801269790/Mufti-3x3-widget.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/h60/h1f/27100801335326/Rodamo-3x3-widget.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/h49/h1b/27100801499166/Arrow-3x3-widget.jpg"
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
// append_best_brand_img(best_img)


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
