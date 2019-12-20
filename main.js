// var allCourses = document.getElementById('all-courses');
// var collections = document.getElementById('collections');
// var wishlist = document.getElementById('wishlist');
// var archived = document.getElementById('archived');
//
var courseSelection = document.querySelector(".course-selection")
// var collectionSelection = document.getElementsByClassName("collections-js")
// var wishlistSelection = document.getElementsByClassName("wishlist-js")
// var acrchivedSlection = document.getElementsByClassName("archived-js")
//
//
var courses = document.getElementById('all-courses');
var coursesHdr = document.getElementsByClassName('dashboard-icon');
courseSelection.addEventListener('click', showHTML)

function showHTML(){
  console.log(1);
  courses.classList.remove('all-courses')

}
