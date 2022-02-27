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
      img:"https://sslimages.shoppersstop.com/sys-master/root/hc9/h63/26688161054750/yvesSaintLaurent_3x3widget_20211210.jpg"
  },
  {
      img:"https://sslimages.shoppersstop.com/sys-master/root/h09/h60/26688161185822/gucci_3x3widget_20211210.jpg"
  },
  {
      img:"https://sslimages.shoppersstop.com/sys-master/root/hfa/h59/26688161316894/rarlfLauren_3x3widget_20211210.jpg"
  },
  {
      img:"https://sslimages.shoppersstop.com/sys-master/root/h91/h04/27000770789406/narciso_3x3-widget--web-luxepage-04022022new-mbyn--neww.jpg"
  },
  {
      img:"https://sslimages.shoppersstop.com/sys-master/root/h59/h4c/26688161710110/HUGO-BOSS_3x3widget_20211210.jpg"
  },
  {
      img:"https://sslimages.shoppersstop.com/sys-master/root/h80/h01/27000770854942/jimmy-choo_3x3-widget--web-mbyn-04022022-newrevised-.jpg"
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
  img:"https://sslimages.shoppersstop.com/sys-master/root/h30/ha6/26903272226846/Stop--web----6-Widgets_20220124.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/h6e/ha5/26903272292382/Bandeya----web----6-Widgets_20220124.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/h20/h89/27015756185630/Fratini-----web----6-Widgets_20220124_newjpg.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/h5f/h9f/26903272423454/Infuse----web----6-Widgets_20220124.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/h26/hb0/27015754514462/LIFE--6-wid.jpg"
 },
 {
  img:"https://sslimages.shoppersstop.com/sys-master/root/hd8/he5/27015755530270/Fratini---6-wid.jpg"
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
// append_shoppers_img(shoppers_data)

var winter_img=[
 {
 img:"https://sslimages.shoppersstop.com/sys-master/root/h2c/hbd/27126396551198/web_gt_titan_brands-to-pick-for-your-dinner-dates_20220223.jpg"
 },
 {
 img:"https://sslimages.shoppersstop.com/sys-master/root/h07/hb3/27126396846110/web_gt_daniel-wellington_brands-to-pick-for-your-dinner-dates_20220223.jpg"
 },
 {
 img:"https://sslimages.shoppersstop.com/sys-master/root/hf6/haf/27126396911646/web_gt_guess_brands-to-pick-for-your-dinner-dates_20220223.jpg"
 },
 {
 img:"https://sslimages.shoppersstop.com/sys-master/root/h48/haf/27126396977182/web_gt_giordano_brands-to-pick-for-your-dinner-dates_20220223.jpg"
 },

 {
 img:"https://sslimages.shoppersstop.com/sys-master/root/hcc/h60/27126397173790/web_gt_giorgio-armani_brands-to-pick-for-your-dinner-dates_20220223.jpg"
 },
 {
 img:"https://sslimages.shoppersstop.com/sys-master/root/h55/h57/27126397403166/web_gt_carolina_brands-to-pick-for-your-dinner-dates_20220223.jpg"
 },
 {
 img:"https://sslimages.shoppersstop.com/sys-master/root/h96/h53/27126397534238/web_gt_arcelia_brands-to-pick-for-your-dinner-dates_20220223.jpg"
 },
 {
 img:"https://sslimages.shoppersstop.com/sys-master/root/he8/h52/27126397599774/web_gt_burberry_brands-to-pick-for-your-dinner-dates_20220223.jpg"
 },

 {
 img:"https://sslimages.shoppersstop.com/sys-master/root/h17/h4c/27126397796382/web_gt_guess-handbags_brands-to-pick-for-your-dinner-dates_20220223.jpg"
 },
 {
 img:"https://sslimages.shoppersstop.com/sys-master/root/h06/h49/27126397861918/web_gt_steve-madden_brands-to-pick-for-your-dinner-dates_20220223.jpg"
 },
 {
 img:"https://sslimages.shoppersstop.com/sys-master/root/h08/h46/27126397927454/web_gt_tommy-hilfiger_brands-to-pick-for-your-dinner-dates_20220223.jpg"
 },
 {
 img:"https://sslimages.shoppersstop.com/sys-master/root/h62/h05/27126398058526/web_gt_hidesign_brands-to-pick-for-your-dinner-dates_20220223.jpg"
 },

 {
 img:"https://sslimages.shoppersstop.com/sys-master/root/h21/h09/27126398189598/web_gt_swarovski_brands-to-pick-for-your-dinner-dates_20220223.jpg"
 },
 {
 img:"https://sslimages.shoppersstop.com/sys-master/root/h32/h0c/27126398255134/web_gt_michael-kors_brands-to-pick-for-your-dinner-dates_20220223.jpg"
 },
 {
 img:"https://sslimages.shoppersstop.com/sys-master/root/hda/h78/27126399303710/web_gt_mia_brands-to-pick-for-your-dinner-dates_20220223.jpg"
 },
 {
 img:"https://sslimages.shoppersstop.com/sys-master/root/h43/h0f/27126398320670/web_gt_shaya_brands-to-pick-for-your-dinner-dates_20220223.jpg"
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
// append_winter(winter_img)

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
