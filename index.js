
//THIS IS WHERE I SET UP WHAT = WHAT

let freelancers = [
    {name: "Alice", occ: "writer", price: 30},
    {name: "Bob", occ: "teacher", price: 50},
]

let moreFreelancers = [
    {name: "Carol", occ: "programmer", price: 70}
]

let allRandomPrices = freelancers.map(freelancer => freelancer.price);

//Below finds the average price and returns it to the html but it only does it for the 2 prices already there --------------------------------


function findAvgPrice() {
    let total = allRandomPrices.reduce((sum, price) => sum + price, 0);
    return (total / allRandomPrices.length).toFixed(2); //.toFixed(2) says how many placements out we should round to after the decimal
}


const avgPrice = findAvgPrice();
            document.getElementById('avgPrice').textContent = `Average starting price: $${avgPrice}`;



//------This the code we actually need to find the UPDATED AND CHANGINE price every time-------------------------------------


function updateAvgPrice() {
    let avgPrice = findAvgPrice();
    document.getElementById('avgPrice').textContent = `Average starting price: $${avgPrice}`;
}


//----------------This is not neccesary, it just shows an array in the console-------------------Below works


function getCardbyId(cardId){
    let card= document.getElementById(cardId)
    let name = card.getElementsByClassName("name")[0].innerHTML
    let occ = card.getElementsByClassName("occ")[0].innerHTML
    let price = card.getElementsByClassName("price")[0].innerHTML

    console.log(name, occ, price)
}


getCardbyId("bob")

//-------------This entire SECTION is us creating a <DIV> card, but in java to magically add into the html


function createCard({name, occ, price}){

    // first create the parent or DIV tag
    let freeLancerParent = document.createElement("div")
    //this is not needed, but it calls my class="list" so my same css can be applied to everything new
    freeLancerParent.className= "list"

    // add children - here we are creating the other <p> elements that will fall in line with the same already in the html
    let nameChild = document.createElement("p")
    nameChild.className= "name"
    nameChild.textContent= name

    let occChild = document.createElement("p")
    occChild.className= "occ"
    occChild.textContent= occ

    let priceChild = document.createElement("p")
    priceChild.className= "price"
    priceChild.textContent= `$${price}`
    //---------------------------------------------

    // at this point all these things are floating around in space not connected to anything else

    //we need to GLUE the childern to the parent
    //can use append or appendChild
    freeLancerParent.append(nameChild, occChild, priceChild)

    //at this point we have one big thing floating around in space still not connected to the html
    //Big thing to HTML GLUE
    //use append again
    let allFreelancers = document.getElementById("allFreelancers")
    allFreelancers.appendChild(freeLancerParent)




    allRandomPrices.push(price)

    updateAvgPrice()
}

// then we must call the function, call back to the original "function" and add in what you want to be added into the html

//I would just call the function as normal below here if I wanted it to be there right away
//createCard({name: "Carol", occ: "programmer", price: 70})

//BUT I WANT IT TO DELAY 3 SECONDS so we use this setTimeout function
setTimeout(() => {
    createCard({ name: "Carol", occ: "programmer", price: 70 });
}, 2000);


//////working on this

///////////////////

//----------------Everything Above this line works-----------------------------------------------------------------------------------------------------------------



//how can we create random cards of Freelancers to appear??

//for each- generate cards for whats in an array
//math.random


function createRandom(){
    let names = ["Morgan", "Harold", "Samantha","Kurt", "Chirs", "Tiffany", "George"]
    let occs = ["Marketer", "Photographer", "Designer", "Plumber", "Carpenter", "Tech Support"]
    let prices = [35, 80, 100, 90, 20, 120, 40]

    let randomNameIndex = Math.floor(Math.random()*names.length)
    let randomName = names [randomNameIndex]

    let randomOccIndex = Math.floor(Math.random()*occs.length)
    let randomOcc = occs[randomOccIndex]

    let randomPriceIndex = Math.floor(Math.random()*prices.length)
    let randomPrice = prices[randomPriceIndex]

    console.log(randomName, randomOcc, randomPrice)



    createCard({name: randomName, occ: randomOcc, price: randomPrice})

}
setInterval(createRandom, 4000)
//createRandom()
