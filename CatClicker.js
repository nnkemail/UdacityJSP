var catPicture1 = document.getElementById("cat1");
var catPicture2 = document.getElementById("cat2");

var cats = [];
cats.push({
    name: "Kot1",
    address: "https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426",
    counter: 0
});

cats.push({
    name: "Kot2",
    address: "https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426",
    counter: 0
});

cats.push({
    name: "Kot3",
    address: "https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426",
    counter: 0
});

cats.push({
    name: "Kot4",
    address: "https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426",
    counter: 0
});

cats.push({
    name: "Kot5",
    address: "https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426",
    counter: 0

});

addElementsToDom(cats);

function addElementsToDom(elements) {
    for (let element of elements) {
        let elemDOM = document.createElement('li');
        elemDOM.textContent = element.name;

        let oImg = document.createElement("img");
        oImg.setAttribute('src', element.address);

        let parent = document.getElementById("cats");
        parent.appendChild(elemDOM);
        parent.appendChild(oImg);

        oImg.addEventListener('click', function(){
            incrementCounter(element);

            let selectedCatDiv = document.getElementById("selectedCat");
            selectedCatDiv.removeChild(selectedCatDiv.childNodes[0]);

            let = document.createElement("div");


            selectedCatDiv.appendChild


        }, false);
    }
}

function incrementCounter(catObject) {
    catObject.counter++;
}

/*
nameCats("Kot 1", "Kot 2");
var catsElements;

catPicture1.addEventListener('click', function(){
    incrementCounter();
}, false);

catPicture2.addEventListener('click', function(){
    incrementCounter();
}, false);

function incrementCounter() {
    var counter = document.getElementById('counter');
    var tmpCounter = parseInt(counter.innerText);
    tmpCounter++;
    counter.innerHTML = tmpCounter.toString();
}

function nameCats(cat1Name, cat2Name) {
    var cat1NameElement = document.getElementById('cat1name');
    cat1NameElement.innerHTML = cat1Name;
    var cat2NameElement = document.getElementById('cat2name');
    cat2NameElement.innerHTML = cat2Name;
}*/