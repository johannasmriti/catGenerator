//Age in Days
function ageInDays(){
    var birthYear = prompt('What year where you born?!');
    var ageInD = (2020-birthYear)*365;
    var h1= document.createElement('h1');
    var textAnswer = document.createTextNode('You are '+ageInD+" days old.");
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}

//Cat Generator
function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}