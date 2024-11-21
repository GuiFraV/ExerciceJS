const valideParenthese = (s) => {
  let stack = [];
  const parentheses = {
    "]": "[",
    ")": "(",
    "}": "{",
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (parentheses[char]) {
      if (stack.length === 0 || stack.pop() !== parentheses[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;

  //   1. verifier le symbol d'ouverture
  //   1.1 par exemple si le 1er symbol est ( alors le prochain symbol est soit ), soit, [ soit {, soit (
  //   1.2 sion return false
  //   1.3 si le prochain symbol est par exemple [ alors je dois chercher soit ], soit (, soit {,soit [
  // 1.4 le pattern est le suivant : Après le 1er symbol => ne pas trouver de symbol de fermeture différents du 1er symbol sinon false
  // mais je peux trouver n'importe quel symbol d'autre type

  // 2. Si je trouve le bon symbol par exemple () alors je le retire de s
  // 2.1 Imaginons par exemple s = ([{}])
  // 2.2 Je trouve le 1er symbol ( que j'enlève de s et que je place dans stack par exemple
  // 2.3 s = ([{}]) et stack = (
  // 2.4 Si true = s[1] = ) || [ || { || ( : comme s[1] = [ je compare stack avec s[1] ça ne se ferme pas stack = s[1]
  // 2.4.1 stack = [ alors s[2] = ] || { || ( || [ et stack = [
  // 2.4.2 s[2] = { alors s[3] = } || [ || ( || { et stack = {
  // 2.4.3 s[4] = } et que stack = { alors on le retire de s ce qui donne s = ([])
  // On recommence la boucle si à la fin s = 0 alors true
};

console.log(valideParenthese("([])"));