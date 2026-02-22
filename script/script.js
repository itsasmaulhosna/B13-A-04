let interviewList = [];
let rejectedList = [];

// get id for count
const totalCount = document.getElementById('total');
const interviewCount = document.getElementById('interview');
const rejectedCount = document.getElementById('rejected');
// get all cards
const allCards = document.getElementById('allCard');
// main
const mainContainer = document.querySelector('main');
// filtered
const filteredSection = document.getElementById('filtered-section');
// get filtered btn
const allFilteredBtn = document.getElementById('all-filter-btn');
const interviewFilteredBtn = document.getElementById('interview-filter-btn');
const rejectedFilteredBtn = document.getElementById('rejected-filter-btn');
rejectedFilteredBtn.addEventListener('click', function () {
  window.location.assign('/B13-A-04/rejected.html');
});

mainContainer.addEventListener('click', function (event) {
  if (event.target.classList.contains('interview-btn')) {
    const parenNode = event.target.parentNode.parentNode;
    const mobileApp = parenNode.querySelector('.mobile').innerText;
    const react = parenNode.querySelector('.react').innerText;
    const type = parenNode.querySelector('.type').innerText;
    const status = parenNode.querySelector('.status').innerText;
    const note = parenNode.querySelector('.notes').innerText;
    parenNode.querySelector('.status').innerText = 'Interview';
    const cardInfo = {
      mobileApp,
      react,
      type,
      status,
      note,
    };
    const exist = interviewList.find((item) => item.mobile == cardInfo.mobile);

    if (!exist) {
      interviewList.push(cardInfo);
      exist.status = 'Interview';
    }
    calculateCount();
    renderInterviewing();
  }
});
function renderInterviewing() {
  filteredSection.innerHTML = '';
  for (let interview of interviewList) {
    console.log(interview);
    let div = document.createElement('div');
    div.innerHTML = `<div
          class="card flex justify-between bg-gray-50 rounded p-4 md:flex-row md:justify-between"
        >
          <!-- 1 -->
          <div class="space-y-6">
            <div>
              <h3 class="text-blue-950 font-bold mobile">Mobile Frist Crop</h3>
              <p class="text-gray-400 react">React Native Developer</p>
            </div>
            <div class="flex gap-3 flex-col sm:flex-row sm:gap-3 type">
              <p class="text-gray-400">Remote .</p>
              <p class="text-gray-400">Full Time .</p>
              <p class="text-gray-400">$130,000-$175,000</p>
            </div>

            <p class="px-3 py-3 bg-blue-100 inline-block status">NOT APPLIED</p>
            <p class="text-gray-500 notes">
              Bulid cross-platfrom mobile application using React Native.Work on
              products used by millions of user worldwide.
            </p>

            <button
              class="text-green-300 border border-green-200 rounded px-4 py-2"
            >
              INTERVIEW
            </button>
            <button
              class="text-red-300 border border-red-100 rounded px-4 py-2"
            >
              REJECTED
            </button>
          </div>
          <!-- 2 -->

          <div
            class="inline-flex rounded-full border border-gray-300 w-fit h-fit p-2"
          >
            <i class="fa-regular fa-trash-can"></i>
          </div>
        </div>`;
    filteredSection.appendChild(div);
  }
}

// count total
function calculateCount() {
  totalCount.innerText = allCards.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}
calculateCount();
// interview & rejected list

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

  if (id == 'interview-filter-btn') {
    allCards.classList.add('hidden');
    filteredSection.classList.remove('hidden');
  } else if (id == 'all-filter-btn') {
    allCards.classList.remove('hidden');
    filteredSection.classList.add('hidden');
  }
}
