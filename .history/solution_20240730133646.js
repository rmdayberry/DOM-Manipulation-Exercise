document.getElementById("task1").innerText = "Changed using 'innerText'.";

document.getElementById("task2").innerHTML = "<button>Submit</button>";

document.body.style.backgroundColor = "#232323";

document.querySelectorAll(".item").forEach((item) => {
  item.style.border = "2px solid black";
});

document.getElementById("task5").href = "https://www.springboard.com/";

document.getElementById("task6").value = "DOM Master";

document.getElementById("task7").classList.add("new-class");

const taskEightBtn = document.createElement("button");
taskEightBtn.innerText = "Task 8 Button";
document.getElementById("task8").appendChild(taskEightBtn);

document.getElementById("task9").
