//  bargains from here ---------
     
var bargains_img_data = [
    {
     img:"https://sslimages.shoppersstop.com/sys-master/root/h08/h69/27102698471454/web_hsp_pastel_comfort-comes-in-all-shapes-and-colours_20220219.jpg"
    },
    {
     img:`https://sslimages.shoppersstop.com/sys-master/root/h0b/h66/27102698536990/web_hsp_solid_comfort-comes-in-all-shapes-and-colours_20220219.jpg`
    },
    {
     img:`https://sslimages.shoppersstop.com/sys-master/root/hf9/h62/27102698602526/web_hsp_floral_comfort-comes-in-all-shapes-and-colours_20220219.jpg`
    },
    {
     img:`https://sslimages.shoppersstop.com/sys-master/root/hc8/hef/27108355309598/printed_6-widget.jpg`
    },
    {
     img:`https://sslimages.shoppersstop.com/sys-master/root/hf6/heb/27108355440670/deep-color_6-widget.jpg`
    },
    {
     img:`https://sslimages.shoppersstop.com/sys-master/root/h8c/h5e/27102698799134/web_hsp_tassels_comfort-comes-in-all-shapes-and-colours_20220219.jpg`
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
      img:"https://sslimages.shoppersstop.com/sys-master/root/h66/h75/27083016306718/celio_3x3-widget.jpg"
  },
  {
      img:"https://sslimages.shoppersstop.com/sys-master/root/h82/h33/27063821795358/web_men_uspa_top_brands_20220214new.jpg"
  },
  {
      img:"https://sslimages.shoppersstop.com/sys-master/root/hdc/h8a/27083016994846/van-heausn_3x3-widget.jpg"
  },
  {
      img:"https://sslimages.shoppersstop.com/sys-master/root/h58/hd9/27083017191454/spykar_3x3-widget.jpg"
  },
  {
      img:"https://sslimages.shoppersstop.com/sys-master/root/h56/hdc/27083017256990/indian-terrian_3x3-widget.jpg"
  },
  {
      img:"https://sslimages.shoppersstop.com/sys-master/root/h67/hdf/27083017322526/lee_3x3-widget.jpg"
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
// append_top_brand_img(top_brands_data)
//top brands to here ------


// shoppers from here ------

let shoppers_data = [
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/hda/hed/27102684053534/web_hsp_cookware-sets_kitchen-must-havet_new_2-2022-02-19.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/hdc/hea/27102684119070/web_hsp_kadai_kitchen-must-have-bew-2022-02-19.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/h1b/hea/27102684184606/web_hsp_pots-_-pan_kitchen-must-have_new_2022-02-19.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/h09/he7/27102684250142/web_hsp_tawa_kitchen-must-have_2022-2-19new.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/h0c/he4/27102684315678/web_hsp_pressure-cooker_kitchen-must-have_2022-2-19new.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/h4a/he3/27102684381214/web_hsp_Serving-Tray_kitchen-must-have_2022-02-19.jpg"
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
 img:"https://sslimages.shoppersstop.com/sys-master/root/h58/h70/27102693720094/webhsp_Chic%20Dinner%20Set%204%20Widgets_shopbycategories_2022-02-19.jpg"
 },
 {
 img:"https://sslimages.shoppersstop.com/sys-master/root/haa/h6f/27102693785630/web_hsp_Classy%20Cookware%204%20Widgets_shop-by-categorires_2022-02-19.jpg"
 },
 {
 img:"https://sslimages.shoppersstop.com/sys-master/root/h98/h6c/27102693851166/web_hsp_Lamp%204%20Widgets_shop-by-categoris_2022-02-19.jpg"
 },
 {
 img:"https://sslimages.shoppersstop.com/sys-master/root/h9b/h69/27102693916702/web_hsp_styling-furnishing_shop-by-categories_20220219.jpg"
 },
 {
 img:"https://sslimages.shoppersstop.com/sys-master/root/hd9/h68/27102693982238/web_hsp_Contemperory%20Gifts%204%20Widgets%20_shop-by-categories_2022-2-19new.jpg"
 },
 {
 img:"https://sslimages.shoppersstop.com/sys-master/root/h30/h1e/27102694047774/web-hsp_Planters%20_%20Artificial%20Plants_4widget_shop-by-categorires_2022-02-19.jpg"
 },
 {
 img:"https://sslimages.shoppersstop.com/sys-master/root/h1f/h1b/27102694113310/web_hsp_Figurines%20_%20Idols%204%20Widgets_shop-by-categories_20220219.jpg"
 },
 {
 img:"https://sslimages.shoppersstop.com/sys-master/root/h71/h1a/27102694178846/web_hsp_Aroma%20_%20Candles%204%20Widgets_shop-by-categories_20220219.jpg"
 },
 {
 img:"https://sslimages.shoppersstop.com/sys-master/root/h66/h7b/27112011923486/web_hsp_flask_shop-by-categories_202202191.jpg"
 },
 {
 img:"https://sslimages.shoppersstop.com/sys-master/root/h14/h7c/27112011989022/web_hsp_cushion-covers_shop-by-categories_202202191.jpg"
 },
 {
 img:"https://sslimages.shoppersstop.com/sys-master/root/hd1/hc6/27112012054558/web_hsp_microwave-safe_shop-by-categories_202202191.jpg"
 },
 {
 img:"https://sslimages.shoppersstop.com/sys-master/root/he2/hc9/27112012120094/web_hsp_containers_shop-by-categories_202202191.jpg"
 },
 {
 img:"https://sslimages.shoppersstop.com/sys-master/root/hd7/h61/27112014184478/web_hsp_harissa_shop-by-categories_20220219.jpg"
 },
 {
 img:"https://sslimages.shoppersstop.com/sys-master/root/h71/h5b/27112014348318/web_hsp_geometeric-collection_shop-by-categories_20220219.jpg"
 },
 {
 img:"https://sslimages.shoppersstop.com/sys-master/root/hb2/h57/27112014479390/web_hsp_sanguine-collection_shop-by-categories_20220219.jpg"
 },
 {
 img:"https://sslimages.shoppersstop.com/sys-master/root/ha1/h54/27112014544926/web_hsp_dulcet-collection_shop-by-categories_20220219.jpg"
 },
 {
 img:"https://sslimages.shoppersstop.com/sys-master/root/h86/h6e/27112011595806/web_hsp_towels_shop-by-categories_202202191.jpg"
 },
 {
 img:"https://sslimages.shoppersstop.com/sys-master/root/h99/h62/27112014118942/web_hsp_dispenser_shop-by-categories_202202191.jpg"
 },
 {
 img:"https://sslimages.shoppersstop.com/sys-master/root/h55/h78/27112011857950/web_hsp_bath-mats_shop-by-categories_202202191.jpg"
 },
 {
 img:"https://sslimages.shoppersstop.com/sys-master/root/h57/h75/27112011792414/web_hsp_laundary-baskets_shop-by-categories_202202191.jpg"
 },
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
     img:"https://sslimages.shoppersstop.com/sys-master/root/h30/hb0/27083018502174/Campus-Sutra----6-wid.jpg"
 },
 {
     img:"https://sslimages.shoppersstop.com/sys-master/root/h71/hab/27102691262494/app_men_voi-jens_upto-60-off_2022-2-19_six-widget.jpg"
 },
 {
     img:"https://sslimages.shoppersstop.com/sys-master/root/h3f/hb5/27102691524638/app_men_colum_bia_six-widget_2022-2-19_new.jpg"
 },
 {
     img:"https://sslimages.shoppersstop.com/sys-master/root/h30/haf/27102691393566/app_men_Monte-Carlo-6-widget_202-02-19_newww.jpg"
 },
 {
     img:"https://sslimages.shoppersstop.com/sys-master/root/h6f/hae/27102691328030/app_menpgg_realm_flat-60-off_six-widget_2022-02-19new.jpg"
 },
 {
     img:"https://sslimages.shoppersstop.com/sys-master/root/h2e/hb2/27102691459102/app_mens_Duke----6-widget_upto-40-off_2022-02-19new.jpg"
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
      img:"https://sslimages.shoppersstop.com/sys-master/root/h9e/h5d/27083022499870/CHINOS---Shirts-6-wid.jpg"
    },
    {
      img:"https://sslimages.shoppersstop.com/sys-master/root/h25/h57/27083022663710/CHINOS---6-wid-Jeans.jpg"
    },
    {
      img:"https://sslimages.shoppersstop.com/sys-master/root/h66/h53/27083022794782/CHINOS---6-wid-Chinos.jpg"
    },
    {
      img:"https://sslimages.shoppersstop.com/sys-master/root/h54/h50/27083022860318/CHINOS---6-wid-Activewear.jpg"
    },
    {
      img:"https://sslimages.shoppersstop.com/sys-master/root/h57/h4d/27083022925854/CHINOS---6-wid-Joggers.jpg"
    },
    {
      img:"https://sslimages.shoppersstop.com/sys-master/root/h95/h01/27083023089694/CHINOS---6-wid-T-Shirts.jpg"
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
// append_bot_img(bot_sweat)

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
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/hd2/h11/27100801728542/Color-Plus-3x3-widget.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/h11/h11/27100801794078/Louis-Philippe-3x3-widget.jpg"
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
   img:"https://sslimages.shoppersstop.com/sys-master/root/h74/hee/16336936075294/Spaces%20Logo.png"
  },
  {
   img:"https://sslimages.shoppersstop.com/sys-master/root/h19/hdc/11209829679134/Brand_Logo_Swayam.png"
  },
  {
   img:"https://sslimages.shoppersstop.com/sys-master/root/h38/h97/8917916614686/BrandIvy.png"
  },
  {
   img:"https://sslimages.shoppersstop.com/sys-master/root/hb5/h2d/11209830268958/Brand_Logo_BackToEarth.png"
  },
  {
   img:"https://sslimages.shoppersstop.com/sys-master/root/h2e/h34/11209830432798/Brand_Logo_SoulFlower.png"
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
