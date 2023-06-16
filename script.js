function createTable() {
  // Prompt for number of rows
  const rows = prompt("Input number of rows");
  if (rows === null || isNaN(rows) || rows <= 0) {
    return;
  }

  // Prompt for number of columns
  const columns = prompt("Input number of columns");
  if (columns === null || isNaN(columns) || columns <= 0) {
    return;
  }

  const table = document.getElementById("myTable");

  // Clear any existing rows
  table.innerHTML = "";

  // Create new rows and cells
  for (let i = 0; i < rows; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < columns; j++) {
      const cell = document.createElement("td");
      cell.textContent = `Row-${i} Column-${j}`;
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
}
