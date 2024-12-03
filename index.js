// ================= Variables ================

const dailyLink = document.getElementById("daily-link");
const weeklyLink = document.getElementById("weekly-link");
const monthlyLink = document.getElementById("monthly-link");
const dailyActivities = document.querySelector(".daily");
const weeklyActivities = document.querySelector(".weekly");
const monthlyActivities = document.querySelector(".monthly");
const body = document.querySelector("body");

// ================= Events Listeners ================

dailyLink.addEventListener("click", handleDailyClick);

weeklyLink.addEventListener("click", handleWeeklyClick);

monthlyLink.addEventListener("click", handleMonthlyClick);

// ================= Functions ================

function handleDailyClick() {
  dailyLink.classList.add("active");
  weeklyLink.classList.remove("active");
  monthlyLink.classList.remove("active");
  dailyActivities.style.display = "grid";
  weeklyActivities.style.display = "none";
  monthlyActivities.style.display = "none";
}

function handleWeeklyClick() {
  weeklyLink.classList.add("active");
  dailyLink.classList.remove("active");
  monthlyLink.classList.remove("active");
  weeklyActivities.style.display = "grid";
  dailyActivities.style.display = "none";
  monthlyActivities.style.display = "none";
}

function handleMonthlyClick() {
  monthlyLink.classList.add("active");
  weeklyLink.classList.remove("active");
  dailyLink.classList.remove("active");
  monthlyActivities.style.display = "grid";
  dailyActivities.style.display = "none";
  weeklyActivities.style.display = "none";
}
