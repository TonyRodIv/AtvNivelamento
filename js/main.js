const data = [
    {
        "category": "Reaction",
        "score": 80,
        "icon": "./assets/images/icon-reaction.svg"
    },
    {
        "category": "Memory",
        "score": 92,
        "icon": "./assets/images/icon-memory.svg"
    },
    {
        "category": "Verbal",
        "score": 61,
        "icon": "./assets/images/icon-verbal.svg"
    },
    {
        "category": "Visual",
        "score": 72,
        "icon": "./assets/images/icon-visual.svg"
    }
]
let write = document.getElementById('writeSummary')
let i = 0
for (i; i < data.length; i++) {
    write.innerHTML += `
    <div id="${data[i].category}" class="summaryCards">
    <div class="nameIcon">
      <img src="${data[i].icon}" class="icon">
      <p>${data[i].category}</p>
    </div>
    <div class="percent">
      <p>${data[i].score} <span class="percentLight">/ 100</span></p>
    </div>
  </div>
    `
}

