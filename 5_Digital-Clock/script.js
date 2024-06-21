setInterval(() => {
  let date = new Date();
  let hrs = String(date.getHours()).padStart(2, "0");
  let min = String(date.getMinutes()).padStart(2, "0");
  let sec = String(date.getSeconds()).padStart(2, "0");
  let time = hrs + ":" + min + ":" + sec;
  document.getElementById("showTime").innerText = time;
}, 1000);
