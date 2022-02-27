function showdata(PeopleAlsoView,parent){
    PeopleAlsoView.forEach(element => {
        var div=document.createElement("div");
        div.setAttribute("class","carousel-cell1")
        div.setAttribute("id","Card-div")

        var img=document.createElement("img");
        img.src=element.image


        var h3=document.createElement("h3");
        h3.innerText=element.name
     
        var descriptiondiv=document.createElement("div");
        descriptiondiv.setAttribute("class","descriptionDiv")
        var description=document.createElement("p");
        description.innerText=element.description
        descriptiondiv.append(description)

        var prize=document.createElement("h3");
        prize.innerText=element.prize

        var buttondiv=document.createElement("div")
        buttondiv.setAttribute("class","dataButtondiv")
        var button=document.createElement("button");
        button.innerText="Add To Bag"
        buttondiv.append(button)

        div.append(img,h3,descriptiondiv,prize,buttondiv)
        parent.append(div)
    });
}

export {showdata}