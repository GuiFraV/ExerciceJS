// Kid With the Greatest Number of Candies

const kidWithGreatestNumberOfCandies = (candies, extraCandies) => {

    const greatestNumberOfCandies = Math.max(...candies);

    return candies.map(candy => candy + extraCandies >= greatestNumberOfCandies);

}

console.log(kidWithGreatestNumberOfCandies([2,3,5,1,3], 3))
console.log(kidWithGreatestNumberOfCandies([4,2,1,1,2], 1))
console.log(kidWithGreatestNumberOfCandies([12,1,12], 10))
