const societe = {
    nom: "Google",
    siegeSocial: "Googleplex, Mountain View, California, United State",
    fondateurs: [{
            prenom: "Larry",
            nom: "Page",
            dateNaissance: new Date(1973, 03, 26),
            villeNaissance: "East Lansig",
            paysNaissance: "Michigan"
        },
        {
            prenom: "Sergey",
            nom: "Brin",
            dateNaissance: new Date(1973, 08, 21),
            villeNaissance: "Moscou",
            paysNaissance: "Union Soviétique"
        }
    ],
    chiffreAffaire: [{
            annee: "2008",
            montant: "16.49"
        },
        {
            annee: "2012",
            montant: "37.97"
        },
        {
            annee: "2016",
            montant: "89.46"
        },
        {
            annee: "2018",
            montant: "136.2"
        }
    ]
}

societe.fondateurs.forEach(f => {
    console.log("Fondateur:", f.nom + " " + f.prenom + ", né le " + f.dateNaissance.toLocaleString().split(",")[0] + " à " + f.villeNaissance + ", " + f.paysNaissance)
});

societe.chiffreAffaire.forEach(ca => {
    console.log("Année:", ca.annee + ", montant: " + ca.montant)
})