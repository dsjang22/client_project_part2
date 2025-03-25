
document.getElementById("degree-progress-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let courses = document.getElementById("courses-completed").value.split(",");
    let requiredCourses = ["SI 106", "SI 206", "SI 506"];
    let remaining = requiredCourses.filter(course => !courses.includes(course.trim()));



    document.getElementById("progress-result").innerText = 
        remaining.length ? `Remaining Courses: ${remaining.join(", ")}` : "All required courses completed!";
});