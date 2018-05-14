var pageCounter = 1;
var btn = document.querySelector('#btn');
btn.addEventListener("click", function () {
    var request = new XMLHttpRequest();
    request.open('GET','http://json-ajax/json/animals-' + pageCounter + '.json');
    request.onload = function () {
        var data = JSON.parse(request.responseText);
        console.log(data[0]);
        addHTML(data);
    };
    request.onerror = function () {
        console.log(request.responseText);
    };
    request.send();
    pageCounter++;
    if (pageCounter > 3) {
        btn.classList.add("hide-me")
    }
});


function addHTML(data) {
    var htmlstring = "";
    for (i=0; i< data.length; i++) {
        htmlstring += '<p>' + data[i].name + 'is a' + data[i].species + ' likes ';
        for(j = 0; j < data[i].foods.likes.length; j++) {
            if (j == 0) {
                htmlstring += data[i].foods.likes[j];

            } else {
                htmlstring += " and " + data[i].foods.likes[j];

            }
        }
        htmlstring += '.</p>';
    }

    var container = document.querySelector("#info-block");
    container.insertAdjacentHTML('beforeend', htmlstring);
}