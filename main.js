// Write your JavaScript code here!
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
];

planets.reverse();

var select = document.getElementById('planets');

planets.forEach(function(item) {
    var planet = item[0];
    var el = document.createElement('option');
    el.text = planet;
    el.value = planet;
    select.appendChild(el);
});

function calculateWeight(weight, planetName) {
    weight = document.getElementById('user-weight').value;
    planetName = document.getElementById('planets').value;
    for (var i = 0; i < planets.length; i++) {
        if (planetName === planets[i][0]) {
            var multiplier = planets[i][1];
        } 
    }
    return multiplier * weight;
}

function handleClickEvent() {
    var planetName = document.getElementById('planets').value;
    var result = calculateWeight().toFixed(2);
    document.getElementById('output').innerHTML = 'If you were on ' + planetName + ', you would weigh ' + result + ' lbs!';
}

document.getElementById('calculate-button').addEventListener('click', function(){handleClickEvent()});
