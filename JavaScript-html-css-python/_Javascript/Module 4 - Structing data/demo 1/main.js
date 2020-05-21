
var article = {
    name: "Hammer",
    size: 2,
    brand: "No name",
    price: 10.00
}

var article2 = {
    name: "Driller",
    size: 5,
    brand: "Brand2",
    price: 50.00
}

var articles = [];

articles.push(article);
articles.push(article2);

articles.push( {name: "Screwdriver", size: 1, brand: "Husky", price: 20.00 } );
articles.push({ name: "Saw Machine", size: 8, brand: "Ryobi", price: 145.00});
articles.push({name: "Measuring Tape", size: 2, brand: "Dewalt", price: 30.00});
articles.push({name: "Ruler", size: 30, brand: "Bosch", price: 15.00});
articles.push({name: "Leveler", size: 5, brand: "Milwaukee", price: 15.00});


articles.push( {name: "Battery", size: 3, brand: "Ryobi", price: 88.00 } );
articles.push({ name: "Air nail machine", size: 6, brand: "Dewalt", price: 120.00});
articles.push({name: "Drill bits", size: 2, brand: "Makita", price: 45.00});
articles.push({name: "Cutters", size: 10, brand: "Bosch", price: 25.00});
articles.push({name: "Monkey wrench", size: 5, brand: "Makita", price: 64.00});


articles.push( {name: "Electrical tester", size: 12, brand: "Dewalt", price: 122.00 } );
articles.push({ name: "Duct Tape", size: 6, brand: "scothc", price: 45.00});
articles.push({name: "Clamps", size: 7, brand: "Bosch", price: 11.00});
articles.push({name: "Hand Saw", size: 10, brand: "Milwaukee", price: 10.00});
articles.push({name: "Chisels", size: 8, brand: "Ryobi", price: 18.00});


articles.push( {name: "Axe", size: 23, brand: "Makita", price: 72.00 } );
articles.push({ name: "Allen keys", size: 2, brand: "Titan", price: 29.00});
articles.push({name: "Pry bar", size: 8, brand: "Stanley", price: 37.00});
articles.push({name: "Socket wrench", size: 9, brand: "Empire", price: 79.00});
articles.push({name: "Trowel", size: 4, brand: "Titan", price: 24.00});

console.log(articles);


function myFunction() {

    var dynamicHTML = "";
    for(var i = 0; i < articles.length; i++){
        // dynamicHTML += "<p> name: " + articles[i].name + "<br/> size: " + articles[i].size + "<br/> brand: " + articles[i].brand + "<br/> price: " + articles[i].price + "</p>";

        dynamicHTML += "<tr><td>" + articles[i].name + "</td>" + 
                            "<td>" + articles[i].size + "</td>" + 
                            "<td>" + articles[i].brand + "</td>" + 
                            "<td>" + articles[i].price + "</td></tr>" ; 
    }

    document.getElementById("articles").innerHTML = dynamicHTML;
}





//------Sompare and sort by name
function compareByName(articleA, articleB){
    if(articleA.name < articleB.name){
        return -1;
    }
    if(articleA.name > articleB.name){
        return 1;
    }
    return 0;
}

function sortByName(){
    articles.sort(compareByName);
    console.log(articles.sort(compareByName));

    myFunction();
}



//----compare and sort by size -------
function compareBySize(articleA, articleB){
    if(articleA.size < articleB.size){
        return -1;
    }
    if(articleA.size > articleB.size){
        return 1;
    }
    return 0;
}

function sortBySize(){
    articles.sort(compareBySize);
    console.log(articles.sort(compareBySize));

    myFunction();
}


//----compare and sort by brand------
function compareByBrand(articleA, articleB){
    if(articleA.brand < articleB.brand)
    {
        return -1;
    }
    if(articleA.brand > articleB.brand){
        return 1;
    }
    return 0;
}

function sortByBrand(){
    articles.sort(compareByBrand);
    console.log(articles.sort(compareByBrand));

    myFunction();
}



//----compare and sort by price------
function compareByPrice(articleA, articleB){
    if(articleA.price < articleB.price)
    {
        return -1;
    }
    if(articleA.price > articleB.price){
        return 1;
    }
    return 0;
}

function sortByPrice(){
    articles.sort(compareByPrice);
    console.log(articles.sort(compareByPrice));

    myFunction();
}




myFunction();












{/* 
    <tr>
<td>1</td>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
</tr> */}


/* <p>
        name: Hammer <br/>
        size: 2 <br/>
        brand: no name <br/>
        price: 20 <br/>
    </p>

    <p>
        name: driller <br/>
        size: 5 <br/>
        brand: brand2 <br/>
        price: 50 <br/>
    </p> */