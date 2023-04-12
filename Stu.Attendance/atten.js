function submitAttendance() {
    // Get all the checkboxes for attendance
    const presentCheckboxes = document.getElementsByName("present[]");
    const absentCheckboxes = document.getElementsByName("absent[]");
    const downloadBtn = document.querySelector('#download-btn');

    // Collect attendance data
    let attendanceData = [];
    for (let i = 0; i < presentCheckboxes.length; i++) {
        if (presentCheckboxes[i].checked) {
            attendanceData.push({ name: presentCheckboxes[i].parentNode.parentNode.firstChild.innerHTML, status: "Present" });
        } else if (absentCheckboxes[i].checked) {
            attendanceData.push({ name: absentCheckboxes[i].parentNode.parentNode.firstChild.innerHTML, status: "Absent" });
        }
    }
    
    // Send attendance data to server using AJAX
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/submitAttendance");
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(attendanceData));
    
    // Reset checkboxes
    for (let i = 0; i < presentCheckboxes.length; i++) {
        presentCheckboxes[i].checked = false;
        absentCheckboxes[i].checked = false;
    }
    
    alert("Attendance submitted successfully.");
    console.log("Attendance submitted successfully.")
}
downloadBtn.addEventListener('click', () => {
    // Code to download attendance data as CSV or Excel file
  });
// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();
// const PORT = 3000;

// // Use body-parser middleware to parse request bodies
// app.use(bodyParser.json());

// // Route to handle attendance submission
// app.post("/submitAttendance", (req, res) => {
//   const attendanceData = req.body;
//   console.log(attendanceData); 
//   alert("Attendance Submitted")
//   // log attendance data to console for testing purposes
//   // TODO
// }
// )
const addNameButton = document.getElementById("add-name-button");
const namesList = document.getElementById("names-list");

addNameButton.addEventListener("click", () => {
  const name = prompt("Enter a name:");
  if (name) {
    const li = document.createElement("li");
    li.textContent = name;
    namesList.appendChild(li);
}
});
console.log("name")
