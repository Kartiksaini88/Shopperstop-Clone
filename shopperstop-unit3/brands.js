let brands_data = [
    {
     img:"https://sslimages.shoppersstop.com/sys-master/root/h36/h09/26688162136094/Stop.jpg",
     name:"Stop"
    },
    {
     img:"https://sslimages.shoppersstop.com/sys-master/root/hce/h6f/26688163053598/Life.jpg",
     name:"Life"
    },
    {
     img:"https://sslimages.shoppersstop.com/sys-master/root/h2c/h84/26688163643422/Arcelia.jpg",
     name:"ARCELIA"
    },
    {
     img:"	https://sslimages.shoppersstop.com/sys-master/root/hfb/h8d/26688163905566/Haute-Curry.jpg",
     name:"Haute Curry"
    },
    {
     img:"	https://sslimages.shoppersstop.com/sys-master/root/h24/hdd/26688164167710/Kashish.jpg",
     name:"kashish"
    },
    {
     img:"https://sslimages.shoppersstop.com/sys-master/root/h82/hf1/26688164757534/Fratini.jpg",
     name:"Fratini"
    },
    {
     img:"https://sslimages.shoppersstop.com/sys-master/root/h03/hbd/26688165019678/IVY.jpg",
     name:"IVY"
    },
    {
     img:"https://sslimages.shoppersstop.com/sys-master/root/h7b/ha4/26688165773342/Treasures.jpg",
     name:"Treasures"
    },
    {
     img:"	https://sslimages.shoppersstop.com/sys-master/root/h43/h4f/26688166166558/Fern.jpg",
     name:"Fern"
    },
]

function append_brands(brands_data){
   brands_data.forEach(ele => {
       let div = document.createElement("div")

       let img = document.createElement("img")
       img.src=ele.img
       let p = document.createElement("p")
       p.setAttribute("id","js_p")
       p.textContent=ele.name

       div.append(img,p)

       document.getElementById("brands_div").append(div)

   });
}
append_brands(brands_data)
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

