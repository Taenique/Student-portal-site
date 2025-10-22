// student_portal.js

// Sample data for the portal
const studentInfo = [
  {
    title: "Database Project Deadline",
    type: "deadline",
    details: "Due Date: 25 Oct 2025 | Module: Database Systems"
  },
  {
    title: "Dr. Thandi Mokoena",
    type: "lecturer",
    details: "Subject: Web Development | Email: tmokoena@campus.edu"
  },
  {
    title: "Software Engineering 101",
    type: "class",
    details: "Room: C203 | Time: 10:00 - 11:30 AM"
  },
  {
    title: "IT Security Assignment",
    type: "deadline",
    details: "Due Date: 30 Oct 2025 | Module: Cybersecurity"
  }
];

// Function to display cards
function displayCards(list) {
  const container = document.getElementById("infoList");
  container.innerHTML = "";

  list.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    const title = document.createElement("h3");
    title.textContent = item.title;

    const details = document.createElement("p");
    details.textContent = item.details;

    card.appendChild(title);
    card.appendChild(details);
    container.appendChild(card);
  });
}

// Function to filter cards
function filterCards() {
  const searchText = document.getElementById("searchBar").value.toLowerCase();
  const filterType = document.getElementById("filterSelect").value;

  const filtered = studentInfo.filter(item => {
    const matchesText = item.title.toLowerCase().includes(searchText) ||
                        item.details.toLowerCase().includes(searchText);
    const matchesType = filterType === "all" || item.type === filterType;
    return matchesText && matchesType;
  });

  displayCards(filtered);
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  displayCards(studentInfo);

  document.getElementById("searchBar").addEventListener("input", filterCards);
  document.getElementById("filterSelect").addEventListener("change", filterCards);
});
