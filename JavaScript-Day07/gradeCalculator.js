const grades = [85, 92, 58, 73, 68, 90, 42];

// Calculate average grade
function calculateAverage(grades) {
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    return total / grades.length;
}


// Find the highest grade
function highestGrade(grades) {
    return Math.max(...grades);
};


// Find the lowest grade
function lowestGrade(grades) {
    return Math.min(...grades);
}

// Find passing students (grade >= 60)
function passingGrades(grades) {
    return grades.filter(grade => grade >= 60);
}


console.log("Grades:", grades);
console.log("Average Grade:", calculateAverage(grades)); // Output: Average grade
console.log("Highest Grade:", highestGrade(grades)); // Output: Highest grade
console.log("Lowest Grade:", lowestGrade(grades)); // Output: Lowest grade
console.log("Passing Grades:", passingGrades(grades)); // Output: List of passing grades