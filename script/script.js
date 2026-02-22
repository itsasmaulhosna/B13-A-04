// get id for count
const totalCount = document.getElementById('total');
const interviewCount = document.getElementById('interview');
const rejectedCount = document.getElementById('rejected');
// get all cards
const allCards = document.getElementById('allCard');
// count total
function calculateCount() {
  totalCount.innerText = allCards.children.length;
}
calculateCount();
