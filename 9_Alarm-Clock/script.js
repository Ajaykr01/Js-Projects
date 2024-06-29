setInterval(() => {
  let clock = new Date();
  let hours = String(clock.getHours() % 12).padStart(2, "0");
  let minutes = String(clock.getMinutes()).padStart(2, "0");
  let seconds = String(clock.getSeconds()).padStart(2, "0");
  let ampm = clock.getHours() >= 12 ? "PM" : "AM";
  if (hours === "00" && ampm === "AM") {
    hours = "12";
  }
  document.getElementById(
    "showTime"
  ).innerText = `${hours}:${minutes}:${seconds} ${ampm}`;

  // check if the alarm time matches the current time
  const alarmHrs = document.getElementById("select-hrs").value.padStart(2, "0");
  const alarmMins = document
    .getElementById("select-mins")
    .value.padStart(2, "0");
  const alarmAmPm = document.getElementById("ampm").value;

  if (hours === alarmHrs && minutes === alarmMins && ampm === alarmAmPm) {
    playSound();
  }
}, 1000);

const hrsSelect = document.getElementById("select-hrs");
for (let i = 1; i <= 12; i++) {
  let option = document.createElement("option");
  option.value = String(i).padStart(2, "0");
  option.innerText = String(i).padStart(2, "0");
  hrsSelect.appendChild(option);
}
const minSelect = document.getElementById("select-mins");
for (let i = 0; i < 60; i++) {
  let option = document.createElement("option");
  option.value = String(i).padStart(2, "0");
  option.innerText = String(i).padStart(2, "0");
  minSelect.appendChild(option);
}

function setAlarm() {
  const hrsSelect = document.getElementById("select-hrs");
  const minSelect = document.getElementById("select-mins");
  const ampmSelect = document.getElementById("ampm");
  // console.log(ampmSelect.value);
  if (
    hrsSelect.value === "" ||
    minSelect.value === "" ||
    ampmSelect.value === ""
  ) {
    alert("Plz set hours, minutes, and AM/PM");
  } else {
    alert(
      "Alarm set at " +
        hrsSelect.value +
        ":" +
        minSelect.value +
        " " +
        ampmSelect.value
    );
    console.log(
      "Alarm set at " +
        hrsSelect.value +
        ":" +
        minSelect.value +
        " " +
        ampmSelect.value
    );
  }
}
document.getElementById("alarmBtn").addEventListener("click", setAlarm);

function playSound() {
  alarmAudio = new Audio("Alarm_Clock_Sound.mp3");
  alarmAudio.play();

  // after 10 seconds, stop the audio.
  setTimeout(() => {
    alarmAudio.pause();
  }, 10000);
}
