function rendu_glouton(arendre, pieces_rendues, indice) {
    //Tableau de pièces à utiliser pour le rendu de monnaie.
    const pieces = [100, 50, 20, 10, 5, 2, 1];
    
    //Cas de base : si le montant à rendre est 0, on a terminé et on renvoie la pieces_rendues.
    if (arendre == 0) {
        return pieces_rendues;
    }

    //Si la pièce actuelle est inférieure ou égale au montant à rendre, on l'ajoute à la pieces_rendues.
    if (pieces[indice] <= arendre) {
        pieces_rendues.push(pieces[indice])

        //On rappelle la fonction récursivement avec le montant à rendre mis à jour
        //en soustrayant la valeur de la pièce actuelle, et en gardant la même pièce.
        return rendu_glouton(arendre - pieces[indice], pieces_rendues, indice)
    }

    //Si la pièce actuelle est supérieure au montant à rendre, on passe à la pièce suivante.
    //On rappelle la fonction récursivement avec le même montant à rendre et la pièce suivante.
    else {
        return rendu_glouton(arendre, pieces_rendues, indice += 1);
    }
}

//Appel de la fonction
console.log(rendu_glouton(68, [], 0));
console.log(rendu_glouton(300, [], 0));
