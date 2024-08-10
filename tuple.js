var bookInfo = [
    "The Great Gatsby",
    "F. Scott Fitzgerald",
    1925,
    true,
];
var Title = bookInfo[0], Author = bookInfo[1], Year = bookInfo[2], Available = bookInfo[3];
console.log(Title);
console.log(Author);
console.log(Year);
console.log(Available);
var raceResult = [
    "John Doe",
    1,
    [120, 90, 110],
];
var Runner = raceResult[0], Position = raceResult[1], _a = raceResult[2], Time1 = _a[0], Time2 = _a[1], Time3 = _a[2];
console.log("Le coureur ".concat(Runner, " est arriv\u00E9 en ").concat(Position, " en effectuant les temps suivants : Course 1 : ").concat(Time1, ", Course 2 :").concat(Time2, ", Course3 ").concat(Time3));
var investment = [
    "ABC Corp",
    [100, 150, 200],
    [120, 180, 250],
];
var actifName = investment[0], _b = investment[1], achat1 = _b[0], achat2 = _b[1], achat3 = _b[2], _c = investment[2], prixVente1 = _c[0], prixVente2 = _c[1], prixVente3 = _c[2];
var sumTransaction = achat1 + achat2 + achat3;
var sumVente = prixVente1 + prixVente2 + prixVente3;
console.log("La soci\u00E9t\u00E9 ".concat(actifName, " \u00E0 une marge b\u00E9n\u00E9ficiaire de ").concat(sumVente - sumTransaction));
