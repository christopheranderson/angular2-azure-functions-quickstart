var HEROES = [
    {
        id: 1,
        name: 'Dr. One'
    },
    {
        id: 2,
        name: '"Tuesday" Sanders'
    },
    {
        id: 3,
        name: 'Superbman'
    },
    {
        id: 4,
        name: 'Wonderous Womaan'
    },
    {
        id: 5,
        name: 'Nocturnal Flying Rodent Man'
    }
]

var heroes = HEROES;

var getHeroes = function() {
    return heroes;
}

var addHero = function(hero) {
    hero.id = heroes.length + 1;
    heroes.push(hero);
}

module.exports = {
    getHeroes: getHeroes,
    addHero: addHero
}