let bookInfo: [string, string, number, boolean] = [
  "The Great Gatsby",
  "F. Scott Fitzgerald",
  1925,
  true,
];

let [Title, Author, Year, Available] = bookInfo;

console.log(Title);
console.log(Author);
console.log(Year);
console.log(Available);

let raceResult: [string, number, [number, number, number]] = [
  "John Doe",
  1,
  [120, 90, 110],
];

let [Runner, Position, [Time1, Time2, Time3]] = raceResult;

console.log(
  `Le coureur ${Runner} est arrivé en ${Position} en effectuant les temps suivants : Course 1 : ${Time1}, Course 2 :${Time2}, Course3 ${Time3}`
);

let investment: [string, [number, number, number], [number, number, number]] = [
  "ABC Corp",
  [100, 150, 200],
  [120, 180, 250],
];

let [
  actifName,
  [achat1, achat2, achat3],
  [prixVente1, prixVente2, prixVente3],
] = investment;

let sumTransaction: number = achat1 + achat2 + achat3;
let sumVente: number = prixVente1 + prixVente2 + prixVente3;

console.log(
  `La société ${actifName} à une marge bénéficiaire de ${
    sumVente - sumTransaction
  }`
);

let discount: number | string = 20;
discount;
console.log(discount);
