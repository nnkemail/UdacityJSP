let cats = [];
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

            let selectedCatElement = document.getElementById("selectedCatId");
            selectedCatElement.removeChild(selectedCatElement.childNodes[0]);

            let selectedCatDiv = document.createElement("div");

            let selectedCatText = document.createElement('p');
            selectedCatText.textContent = element.name + " " + element.counter;

            let selectedCatImage = document.createElement("img");
            selectedCatImage.setAttribute('src', element.address);

            selectedCatDiv.appendChild(selectedCatText);
            selectedCatDiv.appendChild(selectedCatImage);

            selectedCatElement.appendChild(selectedCatDiv);
        }, false);
    }
}

function incrementCounter(catObject) {
    catObject.counter++;
}
