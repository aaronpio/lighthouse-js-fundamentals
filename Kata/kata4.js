//------------------------- Kata 4 ----------------------------------

const instructorWithLongestName = (instructor) => {
    let longest = instructor[0].name
    instructor.forEach((el) => {
        if (el.name.length > longest.length)
        longest = el
    })
    return longest
}


console.log(instructorWithLongestName([
    {name: "Samuel", course: "iOS"},
    {name: "Jeremiah", course: "Web"},
    {name: "Ophilia", course: "Web"},
    {name: "Donald", course: "Web"}
  ]));
  console.log(instructorWithLongestName([
    {name: "Matthew", course: "Web"},
    {name: "David", course: "iOS"},
    {name: "Domascus", course: "Web"}
  ]));