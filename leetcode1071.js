function gcdOfStrings(s, t) {
    // Fonction pour vérifier si str1 est divisible par str2
    function isDivisible(str1, str2) { // 1°str1 = ABAB, str2 = ABAB  || str1 = ABABAB, str2 = ABAB :: 2°str1 : ABAB, str2 = ABA || str1 = ABABAB, str2 = ABA :: 3° str1 = ABAB, str2 = AB || str1 = ABABAB, str2 = AB 
        if (str1.length % str2.length !== 0) {
            return false;
        }
        const repetition = str1.length / str2.length;
        return str2.repeat(repetition) === str1; //1°ABAB = true || false :: 2° false || ABA ABA ABA === ABABAB true :: 3° AB AB AB = true || AB AB AB = true
    }

    // Identifier la plus petite et la plus grande chaîne
    const [smaller, larger] = s.length < t.length ? [s, t] : [t, s];  // smaller = ABAB larger = ABABAB

    // Itérer sur les sous-chaînes de la plus petite chaîne
    for (let i = smaller.length; i > 0; i--) {
        const candidate = smaller.substring(0, i);  // 1°ABAB || 2°ABA || 3°AB
        if (isDivisible(smaller, candidate) && isDivisible(larger, candidate)) {
            return candidate;
        }
    }

    // Retourner une chaîne vide si aucun diviseur commun n'est trouvé
    return '';
}

// Exemple d'utilisation
console.log(gcdOfStrings("ABABAB", "ABAB")); // "AB"
console.log(gcdOfStrings("ABCDEF", "ABC")); // ""
