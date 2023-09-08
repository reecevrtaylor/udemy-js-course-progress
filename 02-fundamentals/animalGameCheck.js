/* CHALLENGE #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!



Your tasks:

Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

Ignore draws this time. Instead, log No team wins... to the console if there is no winner.



TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.
*/

/*
// Task 1: Create an arrow function calcAverage to calculate the average of 3 scores
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Task 2: Create two new variables — scoreDolphins and scoreKoalas
let scoreDolphins;
let scoreKoalas;

// Task 3: Create a function checkWinner
const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No team wins...");  // Ignoring draws
    }
};

// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
scoreDolphins = calcAverage(44, 23, 71);
scoreKoalas = calcAverage(65, 54, 49);
// Use the checkWinner function to determine the winner for DATA 1
checkWinner(scoreDolphins, scoreKoalas);

// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
// Use the checkWinner function to determine the winner for DATA 2
checkWinner(scoreDolphins, scoreKoalas);

*/

// More efficient:

// Function to calculate the average of three numbers
// Takes three arguments (a, b, c) and returns their average.
const calcAverage = (a, b, c) => (a + b + c) / 3;

// Function to determine the winner between two teams based on their average scores
// Takes the average scores of Dolphins and Koalas as arguments.
const checkWinner = (avgDolphins, avgKoalas) => {
  // Check if Dolphins' average score is at least double that of Koalas
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  }
  // Check if Koalas' average score is at least double that of Dolphins
  else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  }
  // If neither team has double the score of the other, no team wins
  else {
    console.log("No team wins...");
  }
};

// Array of test data sets. Each set contains scores for Dolphins and Koalas.
// Stored as objects for better readability and extensibility.
const testData = [
  { dolphins: [44, 23, 71], koalas: [65, 54, 49] },
  { dolphins: [85, 54, 41], koalas: [23, 34, 27] },
];

// Loop through each test data set
for (const testData of testData) {
  // Calculate the average score for Dolphins using the spread operator to pass individual scores
  const avgDolphins = calcAverage(...testData.dolphins);
  // Calculate the average score for Koalas using the spread operator to pass individual scores
  const avgKoalas = calcAverage(...testData.koalas);
  // Determine the winner based on the average scores
  checkWinner(avgDolphins, avgKoalas);
}
