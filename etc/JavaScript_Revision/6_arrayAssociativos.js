var mainFamily = new Object();

function addname(family, name, feature){
    family[name] = feature;
}

addname(mainFamily, "jeferson", "rico")
addname(mainFamily, "luiz", "famoso")
addname(mainFamily, "alves", "rico dnv")

console.log(mainFamily)