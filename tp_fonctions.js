// Ecrivez une fonction qui ne prend pas de paramètre et retourne le nombre 33.
// Appelez cette fonction et affichez son résultat d’appel

function retourne33() {
    return 33;
}


// Ecrivez une fonction qui prend en paramètre une variable de type chaine de caractères et affichage « Bonjour » suivi de la variable.
function bonjour(name) {
    if (typeof name !== "undefined") console.log("Bonjour " + name);
}


// Ecrivez une fonction qui prend 2 nombres a et b en paramètres et retourne le résultat suivant : a * b + a + b
function calcul(a, b) {
    return (typeof a === "number" && typeof b === "number") ? a * b + a + b : "Erreur: a ou b n'est pas un nombre !";
}


// Si le tableau ne contient que des nombres alors la fonction retourne true sinon la fonction retourne false
function controleTableau(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "number") {
            return false;
        }
    }
    return true;
}


// Créer une fonction qui calcule et retourne la moyenne d’un tableau passé en paramètre.
// Cette fonction doit retourner un message d’erreur dans le cas où un élément du tableau n’est pas un nombre
function moyenne(arr) {
    let sum = 0;

    // retourne 0 si tableau vide
    if (arr.length == 0) return 0;

    // retourne un message d'erreur si un élément n'est pas numérique
    if (!controleTableau(arr)) return "Erreur: un des éléments du tableau n'est pas une valeur numérique !"

    // retourne la moyenne
    arr.forEach(x => sum += x);
    return sum / arr.length;
}



////////////// MAIN //////////////////

// EXERCICE FONCTIONCONSTANTE
console.log("Fonction constante:", retourne33());

// EXERCICE BONJOURUNTEL
bonjour();
bonjour("Marcel");

// EXERCICE FONCTIONCALCUL
console.log("calcul 2 et 3:", calcul(2, 3));
console.log("calcul a et b:", calcul("a", "b"));

// EXERCICE FONCTIONCONTROLETABLEAU
console.log("Le tableau ne contient que des chiffres:", controleTableau([1, 2, 3]));
console.log("Le tableau ne contient que des chiffres:", controleTableau([1, 2, 3, "h"]));
console.log("Le tableau ne contient que des chiffres:", controleTableau([]));

// EXERCICE FONCTIONMOYENNE
console.log("Moyenne de [2, 5, 8]:", moyenne([2, 5, 8]));
console.log("Moyenne de []:", moyenne([]));
console.log("Moyenne de ['a', 'b', 'c']:", moyenne(["a", "b", "c"]));