const a = (word1: string, word2: string): string => {

    let res: string[] = [];

    const maxLength: number = word1.length > word2.length ? word1.length : word2.length;

    for (let i: number = 0; i < maxLength; i++) {


        if (i < word1.length) {
            res.push(word1[i]);
        }

        if (i < word2.length) {
            res.push(word2[i]);
        }
    }

    return res.join("");



}