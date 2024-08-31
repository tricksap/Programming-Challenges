const students = [
    {
        name: "Alice",
        age: 20,
        major: "Computer Science",
        grades: {
            math: 85,
            english: 90,
            programming: 95
        },
        year: 2
    },
    {
        name: "Bob",
        age: 22,
        major: "Mechanical Engineering",
        grades: {
            math: 75,
            english: 80,
            programming: 78
        },
        year: 4
    },
    {
        name: "Charlie",
        age: 21,
        major: "Computer Science",
        grades: {
            math: 95,
            english: 85,
            programming: 100
        },
        year: 3
    },
    {
        name: "Diana",
        age: 19,
        major: "Mathematics",
        grades: {
            math: 92,
            english: 88,
            programming: 80
        },
        year: 1
    },
    {
        name: "Eve",
        age: 20,
        major: "Computer Science",
        grades: {
            math: 88,
            english: 92,
            programming: 85
        },
        year: 2
    }
];

/*
Filter Students by Major: Write a function filterByMajor(students, major) that filters students by their major and returns an array of student objects who are in that major.
*/
console.log(filterByMajor(students, "Computer Science"));

/*
Calculate Average Grade: Write a function calculateAverageGrade(students) that calculates and returns the average grade of each student across all subjects. The function should return an array of objects with the student's name and their average grade.
*/
console.log(calculateAverageGrade(students));

/*
Find the Top Student in Programming: Write a function topStudentInProgramming(students) that returns the name of the student with the highest programming grade.
*/
console.log(topStudentInProgramming(students));

/*
Find Average Age of Students: Write a function averageAge(students) that calculates and returns the average age of all students.
*/
console.log(averageAge(students));


///FUNCTIONS///
function averageAge(students) {
    // let sum =0
    // students.map(student =>{
    //  sum += student.age  
    // })
    const totalAge = students.reduce((acc, curr) => acc + curr.age, 0)
    return totalAge / students.length
}
function topStudentInProgramming(students) {
    students.sort((a, b) => b.grades.programming - a.grades.programming)
    return students[0].name
}
function calculateAverageGrade(students) {
    return students.map(student => {
        let sum = 0
        for (let key of Object.keys(student.grades)) {
            sum += student.grades[key]
        }

        const total = sum / Object.keys(student.grades).length
        return { Name: student.name, total }
    })
}
function filterByMajor(students, major) {
    return students.filter(student => student.major === major)
}





