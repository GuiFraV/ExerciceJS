function gcdOfStrings(s, t) {
    // Fonction pour vérifier si str1 est divisible par str2
    function isDivisible(str1, str2) {
        if (str1.length % str2.length !== 0) {
            return false;
        }
        const repetition = str1.length / str2.length;
        return str2.repeat(repetition) === str1;
    }

    // Identifier la plus petite et la plus grande chaîne
    const [smaller, larger] = s.length < t.length ? [s, t] : [t, s];

    // Itérer sur les sous-chaînes de la plus petite chaîne
    for (let i = smaller.length; i > 0; i--) {
        const candidate = smaller.substring(0, i);
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
