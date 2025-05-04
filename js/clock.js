const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const ampm = hours >= 12 ? "午後" : "午前";

  hours = hours % 12;
  hours = hours ? hours : 12;

  clock.innerText = `${ampm} ${String(hours).padStart(2, "0")}:${minutes}`;
}

getClock();
setInterval(getClock, 1000);
