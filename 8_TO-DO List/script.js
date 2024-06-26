document.querySelector("#push").onclick = function () {
  if (document.querySelector("#input").value.length == "") {
    alert("Please enter a Task");
  } else {
    let task = `
        <div class="edit-box">
         <input type="text" readonly="true" placeholder="${
           document.querySelector("#input").value
         }"/>
          <button class="del">
            <span class="material-symbols-outlined" class="del"> delete </span>
          </button>
        </div>`;
    document.querySelector("#tasks").innerHTML += task;
    document.querySelector("#input").value = "";
  }
};
document.querySelector("#tasks").addEventListener("click", function (e) {
  if (e.target.classList.contains("del")) {
    e.target.parentElement.remove();
  }
});
