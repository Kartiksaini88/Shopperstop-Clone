//  bargains from here ---------
     
var bargains_img_data = [
    {
     img:"https://sslimages.shoppersstop.com/sys-master/root/hc6/h62/27050127228958/web_wom_kurtas_workwear%20style_po1_20220211.jpg"
    },
    {
     img:`https://sslimages.shoppersstop.com/sys-master/root/h04/h62/27050127294494/web_wom_tops%20%26%20tees_workwear%20style_po2_20220211.jpg`
    },
    {
     img:`https://sslimages.shoppersstop.com/sys-master/root/hf5/h5b/27050127425566/web_wom_comfort%20bottom_workwear%20style_po3_20220211.jpg`
    },
    {
     img:`https://sslimages.shoppersstop.com/sys-master/root/h36/h58/27050127556638/web_wom_activewear_workwear%20style_po4_20220211.jpg`
    },
    {
     img:`https://sslimages.shoppersstop.com/sys-master/root/h24/h55/27050127622174/web_wom_sleepwear_workwear%20style_po5_20220211.jpg`
    },
    {
     img:`https://sslimages.shoppersstop.com/sys-master/root/h65/h51/27050127753246/web_wom_flip-flops_workwear%20style_po6_20220211.jpg`
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
      img:"https://sslimages.shoppersstop.com/sys-master/root/he5/h21/27063825891358/web_wom_ruffles_whats-trending%20in_po1_20220214.jpg"
  },
  {
      img:"https://sslimages.shoppersstop.com/sys-master/root/h12/hd6/27057672814622/web_wom_florals_whats-trending%20in_po2_20220212.jpg"
  },
  {
      img:"https://sslimages.shoppersstop.com/sys-master/root/hd1/hd9/27057672945694/web_wom_mandarin-collars_whats-trending%20in_po3_20220212.jpg"
  },
  {
      img:"https://sslimages.shoppersstop.com/sys-master/root/h6d/h8c/27063829331998/web_wom_st%26ct_20220214_revised.jpg"
  },
  {
      img:"https://sslimages.shoppersstop.com/sys-master/root/hb4/hd4/27057673207838/web_wom_a-line-dress_whats-trending%20in_po1_20220212.jpg"
  },
  {
      img:"https://sslimages.shoppersstop.com/sys-master/root/hf5/hd0/27057673338910/web_wom_solid-color-dress_whats-trending%20in_po2_20220212.jpg"
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
  img:"https://sslimages.shoppersstop.com/sys-master/root/h64/h0a/27057670488094/web_juniper_wom_savemore-shop_20220212.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/hc7/hbf/27050112319518/web_wom_yuris_price%20drops_po2_20220210.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/hb8/h04/27076501995550/web_wom_au_6widget_20220216.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/h29/h64/27076502683678/web_wom_mdme_20220216_newbanner-6widget.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/h29/h64/27076502683678/web_wom_mdme_20220216_newbanner-6widget.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/h55/h04/27057670619166/web_wom_monte-carlo_newoffer_20220212_saveshop.jpg"
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
 img:"https://sslimages.shoppersstop.com/sys-master/root/h94/h03/27057670684702/web_womm_and_newoffer_20220212_wp.jpg"
 },
 {
 img:"https://sslimages.shoppersstop.com/sys-master/root/hfe/h9c/27045883772958/web_wom_kraus_unbelievable%20deals_po2_20220210.jpg"
 },
 {
 img:"https://sslimages.shoppersstop.com/sys-master/root/h7f/hd1/27076503797790/web_wom_forever-new_unbelievable%20deals_po3_20220210.jpg"
 },
 {
 img:"https://sslimages.shoppersstop.com/sys-master/root/haf/hb4/27063827955742/web_wom_flats_unbelievable%20deals_po4_20220214.jpg"
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
  img:"https://sslimages.shoppersstop.com/sys-master/root/h2d/hc6/27050142662686/web_wom_indya-womens_20220201_unbilav.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/h10/h33/27045884788766/web_wom_varanga_unbelievable%20deals_po2_20220210.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/h01/h2d/27045884919838/web_wom_handbags_unbelievable%20deals_po3_20220210.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/h9c/hdc/27076504092702/web_wom_nayomi_unbelievable%20deals_po4_20220210.jpg"
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
  img:"https://sslimages.shoppersstop.com/sys-master/root/he5/h98/27054736244766/web_wom_sweatshirts_best%20of%20winterwear_po1_20220211.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/h0c/ha0/27054736474142/web_wom_jackets-coats_best%20of%20winterwear_po2_20220211.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/h1b/hfa/27054737326110/web_wom_poolovers-cardigans_best%20of%20winterwear_po3_20220211.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/h5a/hf9/27054737391646/web_wom_boots_best%20of%20winterwear_po4_20220211.jpg"
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
append_budget(budget_img)

let trend_img = [
    {
        img:"https://sslimages.shoppersstop.com/sys-master/root/hc6/h62/27050127228958/web_wom_kurtas_workwear%20style_po1_20220211.jpg"
       },
       {
        img:`https://sslimages.shoppersstop.com/sys-master/root/h04/h62/27050127294494/web_wom_tops%20%26%20tees_workwear%20style_po2_20220211.jpg`
       },
       {
        img:`https://sslimages.shoppersstop.com/sys-master/root/hf5/h5b/27050127425566/web_wom_comfort%20bottom_workwear%20style_po3_20220211.jpg`
       },
       {
        img:`https://sslimages.shoppersstop.com/sys-master/root/h36/h58/27050127556638/web_wom_activewear_workwear%20style_po4_20220211.jpg`
       },
       {
        img:`https://sslimages.shoppersstop.com/sys-master/root/h24/h55/27050127622174/web_wom_sleepwear_workwear%20style_po5_20220211.jpg`
       },
       {
        img:`https://sslimages.shoppersstop.com/sys-master/root/h65/h51/27050127753246/web_wom_flip-flops_workwear%20style_po6_20220211.jpg`
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
        img:"https://sslimages.shoppersstop.com/sys-master/root/hc6/h62/27050127228958/web_wom_kurtas_workwear%20style_po1_20220211.jpg"
       },
       {
        img:`https://sslimages.shoppersstop.com/sys-master/root/h04/h62/27050127294494/web_wom_tops%20%26%20tees_workwear%20style_po2_20220211.jpg`
       },
       {
        img:`https://sslimages.shoppersstop.com/sys-master/root/hf5/h5b/27050127425566/web_wom_comfort%20bottom_workwear%20style_po3_20220211.jpg`
       },
       {
        img:`https://sslimages.shoppersstop.com/sys-master/root/h36/h58/27050127556638/web_wom_activewear_workwear%20style_po4_20220211.jpg`
       },
       {
        img:`https://sslimages.shoppersstop.com/sys-master/root/h24/h55/27050127622174/web_wom_sleepwear_workwear%20style_po5_20220211.jpg`
       },
       {
        img:`https://sslimages.shoppersstop.com/sys-master/root/h65/h51/27050127753246/web_wom_flip-flops_workwear%20style_po6_20220211.jpg`
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
        img:"https://sslimages.shoppersstop.com/sys-master/root/he5/h21/27063825891358/web_wom_ruffles_whats-trending%20in_po1_20220214.jpg"
    },
    {
        img:"https://sslimages.shoppersstop.com/sys-master/root/h12/hd6/27057672814622/web_wom_florals_whats-trending%20in_po2_20220212.jpg"
    },
    {
        img:"https://sslimages.shoppersstop.com/sys-master/root/hd1/hd9/27057672945694/web_wom_mandarin-collars_whats-trending%20in_po3_20220212.jpg"
    },
    {
        img:"https://sslimages.shoppersstop.com/sys-master/root/h6d/h8c/27063829331998/web_wom_st%26ct_20220214_revised.jpg"
    },
    {
        img:"https://sslimages.shoppersstop.com/sys-master/root/hb4/hd4/27057673207838/web_wom_a-line-dress_whats-trending%20in_po1_20220212.jpg"
    },
    {
        img:"https://sslimages.shoppersstop.com/sys-master/root/hf5/hd0/27057673338910/web_wom_solid-color-dress_whats-trending%20in_po2_20220212.jpg"
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
   img:"https://sslimages.shoppersstop.com/sys-master/root/hdf/h8d/8856749047838/BrandBiba.png"
  },
  {
   img:"https://sslimages.shoppersstop.com/sys-master/root/h3a/h3d/15087373746206/ZINk.png"
  },
  {
   img:"https://sslimages.shoppersstop.com/sys-master/root/h90/h98/9519789342750"
  },
  {
   img:"https://sslimages.shoppersstop.com/sys-master/root/h50/h83/13761579843614/l_stop-2019.png"
  },
  {
   img:"https://sslimages.shoppersstop.com/sys-master/root/hf3/hff/15087376728094/life-logo.png"
  },
  {
   img:"https://sslimages.shoppersstop.com/sys-master/root/h13/h37/15087379578910/AND.png"
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