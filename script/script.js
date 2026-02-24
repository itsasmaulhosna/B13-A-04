let interviewList = [];
let rejectedList = [];
let currentStatus = 'all';

// get btn

// get id for count
const totalCount = document.getElementById('total');
const interviewCount = document.getElementById('interview');
const rejectedCount = document.getElementById('rejected');
// get all cards
const allCards = document.getElementById('allCard');
const mainContainer = document.querySelector('main');
const filteredSection = document.getElementById('filtered-section');
const noJob = document.getElementById('no-job');

// get filtered btn
const allFilteredBtn = document.getElementById('all-filter-btn');
const interviewFilteredBtn = document.getElementById('interview-filter-btn');
const rejectedFilteredBtn = document.getElementById('rejected-filter-btn');

// no jobs
interviewFilteredBtn.addEventListener('click', function () {
  if (interviewList.length === 0) {
    noJob.classList.remove('hidden');
  }
});
rejectedFilteredBtn.addEventListener('click', function () {
  if (rejectedList.length === 0) {
    noJob.classList.remove('hidden');
  }
});

mainContainer.addEventListener('click', function (event) {
  if (event.target.classList.contains('interview-btn')) {
    noJob.classList.add('hidden');
    // filteredSection.classList.remove('hidden');

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

    const exist = interviewList.find(
      (item) => item.mobileApp == cardInfo.mobileApp,
    );

    if (!exist) {
      interviewList.push(cardInfo);
    }
    rejectedList = rejectedList.filter(
      (item) => item.mobileApp != cardInfo.mobileApp,
    );

    // after remove rerender the html
    if (currentStatus == 'rejected-filter-btn') {
      renderReject();
    }

    event.target.classList.add('bg-green-400', 'text-white');
    event.target.classList.remove('text-green-300');
    calculateCount();
    if (currentStatus === 'interview-filter-btn') renderInterviewing();
    if (currentStatus === 'rejected-filter-btn') renderReject();
  } else if (event.target.classList.contains('rejected-btn')) {
    noJob.classList.add('hidden');
    // filteredSection.classList.remove('hidden');
    const parenNode = event.target.parentNode.parentNode;
    const mobileApp = parenNode.querySelector('.mobile').innerText;
    const react = parenNode.querySelector('.react').innerText;
    const type = parenNode.querySelector('.type').innerText;
    const status = parenNode.querySelector('.status').innerText;
    const note = parenNode.querySelector('.notes').innerText;
    parenNode.querySelector('.status').innerText = 'Rejectd';
    const cardInfo = {
      mobileApp,
      react,
      type,
      status,
      note,
    };

    const exist = rejectedList.find(
      (item) => item.mobileApp == cardInfo.mobileApp,
    );

    if (!exist) {
      rejectedList.push(cardInfo);
    }
    interviewList = interviewList.filter(
      (item) => item.mobileApp != cardInfo.mobileApp,
    );

    // after remove rerender the html
    if (currentStatus == 'interview-filter-btn') {
      renderInterviewing();
    }
    event.target.classList.add('bg-red-400', 'text-white');
    event.target.classList.remove('text-red-300');
    calculateCount();
    if (currentStatus === 'interview-filter-btn') renderInterviewing();
    if (currentStatus === 'rejected-filter-btn') renderReject();
  }
});

// render
function renderInterviewing() {
  filteredSection.innerHTML = '';
  for (let interview of interviewList) {
    // console.log(interview);
    let div = document.createElement('div');
    div.innerHTML = `<div
          class="card flex justify-between bg-gray-50 rounded p-4 md:flex-row md:justify-between"
        >
          <!-- 1 -->
          <div class="space-y-6">
            <div>
              <h3 class="text-blue-950 font-bold mobile">${interview.mobileApp}</h3>
              <p class="text-gray-400 react">${interview.react}</p>
            </div>
            <div class="flex gap-3 flex-col sm:flex-row sm:gap-3 type">
              <p class="text-gray-400">${interview.type}</p>

            </div>

            <p class="px-3 py-3 bg-blue-100 inline-block status">Interview</p>
            <p class="text-gray-500 notes">
              ${interview.note}
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

// rejected render
function renderReject() {
  filteredSection.innerHTML = '';
  for (let rejecte of rejectedList) {
    // console.log(rejecte);
    let div = document.createElement('div');
    div.innerHTML = `<div
          class="card flex justify-between bg-gray-50 rounded p-4 md:flex-row md:justify-between"
        >
          <!-- 1 -->
          <div class="space-y-6">
            <div>
              <h3 class="text-blue-950 font-bold mobile">${rejecte.mobileApp}</h3>
              <p class="text-gray-400 react">${rejecte.react}</p>
            </div>
            <div class="flex gap-3 flex-col sm:flex-row sm:gap-3 type">
              <p class="text-gray-400">${rejecte.type}</p>
              
            </div>

            <p class="px-3 py-3 bg-blue-100 inline-block status">Rejected</p>
            <p class="text-gray-500 notes">
              ${rejecte.note}
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

// dlt
mainContainer.addEventListener('click', function (event) {
  if (event.target.closest('.fa-trash-can')) {
    const card = event.target.closest('.card');

    card.remove();

    const totalElement = document.getElementById('total');
    let total = parseInt(totalElement.innerText);

    if (total > 0) {
      totalElement.innerText = total - 1;
    }
    //   if (currentStatus === 'interview-filter-btn') renderInterviewing();
    //   if (currentStatus === 'rejected-filter-btn') renderReject();
  }
});

// count jobs text
const availableJob = document.querySelector('.job');
function updateAvailableJob() {
  const totalJobs = allCards.children.length;
  let currentCount = 0;
  if (currentStatus === 'all-filter-btn') {
    currentCount = totalJobs;
  } else if (currentStatus === 'interview-filter-btn') {
    currentCount = interviewList.length;
  } else if (currentStatus === 'rejected-filter-btn') {
    currentCount = rejectedList.length;
  }
  availableJob.innerText = `${currentCount} of ${totalJobs} jobs`;
}

// count total
function calculateCount() {
  totalCount.innerText = allCards.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
  updateAvailableJob();
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
  currentStatus = id;
  selected.classList.remove('text-gray-500', 'bg-gray-50');
  selected.classList.add('bg-blue-500', 'text-white');

  if (id == 'interview-filter-btn') {
    allCards.classList.add('hidden');
    filteredSection.classList.remove('hidden');
    if (interviewList.length === 0) {
      noJob.classList.remove('hidden');
    } else {
      noJob.classList.add('hidden');
      renderInterviewing(); // 🔥 must call
    }
  } else if (id == 'all-filter-btn') {
    allCards.classList.remove('hidden');
    filteredSection.classList.add('hidden');
  } else if (id == 'rejected-filter-btn') {
    allCards.classList.add('hidden');
    filteredSection.classList.remove('hidden');
    if (rejectedList.length === 0) {
      noJob.classList.remove('hidden');
    } else {
      noJob.classList.add('hidden');
      renderReject(); // 🔥 must call
    }
  } else {
    noJob.classList.add('hidden');
    renderReject();
  }

  calculateCount();
}
