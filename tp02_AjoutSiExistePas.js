const arr1 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
const arr2 = [-1, 12, 17, 14, 5, -9, 0, 18, -6, 0, 4, -13, 5, 7, -2, 8, -1];
let sum = 0;

// Ajoutez dans le tableau 2 tous les éléments qui existent dans le tableau 1 mais qui ne sont pas le tableau 2.
arr1.forEach(x => {
    if (!arr2.includes(x)) arr2.push(x);
});

console.log("Nouveau tableau 2:", arr2);