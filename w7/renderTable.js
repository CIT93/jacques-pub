const TBL = document.getElementById("tab-data");

function createTableCell(cellType, cells) {
  const tr = document.createElement("tr");
  cells.forEach(function (cell) {
    let cellTypeEl = document.createElement(cellType);
    cellTypeEl.textContent = cell;
    tr.appendChild(cellTypeEl);
  });
  return tr;
}
function actionBtns() {
  const td = document.createElement("td");
  const form = document.createElement("form");
  form.id = "formActions";
  const editBtn = document.createElement("button");
  const delBtn = document.createElement("button");
  editBtn.id = "editBtn";
  editBtn.innerHTML = `
    <i class="fa-solid fa-pen-to-square" aria-hidden="true" title="Edit"></i>
    <span class="hidden">Edit</span>
    `;
  delBtn.id = "delBtn";
  delBtn.innerHTML = `
    <i class="fa fa-trash" aria-hidden="true" title="Delete"></i>
    <span class="hidden">Delete</span>
    `;
  form.append(editBtn, delBtn);
  td.appendChild(form);
  return td;
}
function createTableContent(data, withHeaders = false) {
  let tableRows = [];
  if (withHeaders) {
    const headers = ["Name", "Household", "HouseSize", "Footprint", "Actions"];
    const th = createTableCell("th", headers);
    const thead = document.createElement("thead");
    thead.appendChild(th);
    tableRows = [...tableRows, thead];
  }
  const tr = createTableCell("td", data);
  const actionForm = actionBtns();
  tr.appendChild(actionForm);
  const tbody = document.createElement("tbody");
  tbody.appendChild(tr);
  tableRows = [...tableRows, tbody];
  return tableRows;
}

function renderTbl(data, details) {
  const table = document.createElement("table");
  let tableRows;
  if (!TBL.hasChildNodes()) {
    tableRows = createTableContent(data, true);
  } else {
    tableRows = createTableContent(data);
  }
  table.append(...tableRows);
  const tbody = table.querySelector("tbody");
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  td.appendChild(details);
  td.colSpan = 6;
  tr.style.width = "100%";
  tr.appendChild(td);
  tbody.append(tr);
  return table;
}

export { renderTbl };
