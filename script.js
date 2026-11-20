const form = document.getElementById("search-form");
const input = document.getElementById("registration-number");
const statusBox = document.getElementById("status");
const statusText = document.getElementById("status-text");
const resultNumber = document.getElementById("result-number");
const companyName = document.getElementById("company-name");
const incorporatedOn = document.getElementById("incorporated-on");

const sampleRecords = {
  "PV00273539": {
    name: "ANNAI HOLDINGS (PVT) LTD",
    date: "2023-03-21"
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const number = input.value.trim().toUpperCase();
  const record = sampleRecords[number];

  resultNumber.textContent = number || "—";
  statusBox.classList.remove("status-not-found");
  statusBox.classList.add("status-demo");

  if (record) {
    statusText.textContent = "Demo record found — not an official verification.";
    companyName.textContent = record.name;
    incorporatedOn.textContent = record.date;
  } else {
    statusBox.classList.remove("status-demo");
    statusBox.classList.add("status-not-found");
    statusText.textContent = "No matching sample record was found.";
    companyName.textContent = "—";
    incorporatedOn.textContent = "—";
  }
});

document.querySelector(".notice-close").addEventListener("click", () => {
  document.querySelector(".notice").hidden = true;
});
