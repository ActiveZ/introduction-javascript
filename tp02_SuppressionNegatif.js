const arr = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

// Retirez tous les nombres négatifs du tableau.
arr.forEach(x => {
    if (x < 0) arr.splice(arr.indexOf(x),1);
});

console.log("Mouveau tableau:", arr);