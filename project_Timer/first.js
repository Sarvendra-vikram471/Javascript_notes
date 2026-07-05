let root = document.getElementById("root");
let timing = function () {
  let timer = new Date();
  timer = timer.toLocaleTimeString();
  root.innerHTML = timer;
};
setInterval(timing, 1000);

root.style.fontSize = "200px";
root.style.display = "flex";
root.style.height = "100vh";
root.style.justifyContent = "center";
root.style.alignItems = "center";
