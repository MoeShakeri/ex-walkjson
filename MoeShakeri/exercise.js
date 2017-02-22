var exercise = {} ; 
exercise.hobbies = [];
// return list of people taking 1.00
exercise.getCourseList = function(courseName) {
    var list = [];
    var dataLength = exercise.data.contacts.length;
    var people = exercise.data.contacts;
    var person;
    // enter code to list each person that takes this course
    for(idx=0; idx < dataLength; ++idx){
        courses = people[idx].courses;
        if(courses.includes(courseName)) {
            list.push(people[idx]);
            
        }
    }
    return list;
};
// return list of hobbies
exercise.getHobbies = function() {
    var dataLength = exercise.data.contacts.length;
    var people = exercise.data.contacts;
    var list = [];

    for(idx=0; idx < dataLength; ++idx){
        var hobbies = people[idx].hobbies;
        for(jdx=0; jdx < hobbies.length; ++jdx){
            list.push(hobbies[jdx]);
        }
    }
    exercise.hobbies = list;
    return exercise.hobbies;
};