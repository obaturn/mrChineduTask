const testScore = [2, 4, 5, 7, 8, 90, 34, 45, 78, 28];
const indexScores = testScore.filter(function(score) {
    return score >= 70;
});
console.log(indexScores); 

const examGrades = [85, 92, 78, 88, 95];
const increasedExamGrade = examGrades.map(score=> score +5)
console.log(examGrades)

const squareOfNumbers = [2,4,6,8,10];
const numberOfSquare = squareOfNumbers.map(number => number * squareOfNumbers)
console.log(squareOfNumbers)

const members = ["emily","jack","sophia","daniel"]
const bookDistribution = ["book1","book2","book3","book4"]
const distribution ={}
for (const memebers of members) {
    distribution[memebers] = []
}
let index = 0;
for (const bookDistributions of bookDistribution) {
    const memebers = members[index % members.length]

    distribution[memebers].push(bookDistribution)
    index ++;
}
console.log(distribution)
