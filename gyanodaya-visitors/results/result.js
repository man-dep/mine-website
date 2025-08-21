function checkResult() {
  const name = document.getElementById("name").value.trim().toLowerCase();
  const studentClass = document.getElementById("class").value.trim();
  const roll = document.getElementById("roll").value.trim();
  const resultDiv = document.getElementById("result");

  fetch(`results.php?name=${name}&class=${studentClass}&roll=${roll}`)
    .then(res => res.json())
    .then(data => {
      resultDiv.innerHTML = "";
      if (data.error) {
        resultDiv.innerHTML = `<p style="color:red;">❌ ${data.error}</p>`;
        return;
      }

      const congratsMsg = data.status === "Pass"
        ? `<div class="congrats-box">🎉 Congratulations! 🎉</div>`
        : `<p class="fail">❗Sorry, you did not pass this time.</p>`;

      resultDiv.innerHTML = `
        ${congratsMsg}
        <div><strong>Name:</strong> ${capitalize(data.name)}</div>
        <div><strong>Father's Name:</strong> ${capitalize(data.father_name)}</div>
        <div><strong>Class:</strong> ${data.class}</div>
        <div><strong>Section:</strong> ${data.section}</div>
        <div><strong>Symbol No:</strong> ${data.symbol_no}</div>
        <div><strong>Percentage:</strong> ${data.percentage}%</div>
        <div><strong>Grade:</strong> ${data.grade}</div>
        <div><strong>Result:</strong> <span class="${data.status.toLowerCase()}">${data.status}</span></div>
      `;
    });
}

function capitalize(str) {
  return str.replace(/\b\w/g, c => c.toUpperCase());
}