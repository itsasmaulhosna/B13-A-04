// get id for count
const totalCount = document.getElementById('total');
const interviewCount = document.getElementById('interview');
const rejectedCount = document.getElementById('rejected');
// get all cards
const allCards = document.getElementById('allCard');
// main
const mainContainer = document.querySelector('main');

// get filtered btn
const allFilteredBtn = document.getElementById('all-filter-btn');
const interviewFilteredBtn = document.getElementById('interview-filter-btn');
const rejectedFilteredBtn = document.getElementById('rejected-filter-btn');
rejectedFilteredBtn.addEventListener('click', function () {
  window.location.assign('/B13-A-04/rejected.html');
  console.log('hello');
});
mainContainer.addEventListener('click', function (event) {
  console.log(event.target);
});

// count total
function calculateCount() {
  totalCount.innerText = allCards.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}
calculateCount();
// interview & rejected list
let interviewList = [];
let rejectedList = [];

function toggleStyle(id) {
  allFilteredBtn.classList.remove('bg-blue-500', 'text-white');
  interviewFilteredBtn.classList.remove('bg-blue-500', 'text-white');
  rejectedFilteredBtn.classList.remove('bg-blue-500', 'text-white');

  allFilteredBtn.classList.add('text-gray-500', 'text-gray-400');
  interviewFilteredBtn.classList.add('text-gray-500', 'text-gray-400');
  rejectedFilteredBtn.classList.add('text-gray-500', 'text-gray-400');

  const selected = document.getElementById(id);
  selected.classList.remove('text-gray-500', 'bg-gray-50');
  selected.classList.add('bg-blue-500', 'text-white');
}
