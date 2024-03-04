const TBL = document.getElementById("tab-data");
function renderTblHeading() {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");

  const headingTextArr = [
    "Name",
    "Household",
    "HouseSize",
    "Footprint",
    "Actions",
  ];
  headingTextArr.forEach(function (text) {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  return table;
}

function renderTbl(data) {
  TBL.innerHTML = "";
  let table, tbody;
  if (!TBL.hasChildNodes()) {
    table = renderTblHeading();
    tbody = document.createElement("tbody");
  } else {
    table = TBL.querySelector("table");
    if (table.querySelector("tbody")) {
      tbody = table.querySelector("tbody");
    }
  }
  createTblRow(data, tbody);
  table.appendChild(tbody);
  TBL.appendChild(table);
}

function createTblRow(data, tbody) {
  data.forEach(function (obj, index) {
    const tr = document.createElement("tr");
    for (const [key, value] of Object.entries(obj)) {
      if (key === "houseMPTS" || key === "houseSPTS" || key === "lastName") {
        continue;
      }
      let td = document.createElement("td");
      td.textContent = value;
      tr.appendChild(td);
    }
    const actionForm = actionBtns(data, index);
    tr.appendChild(actionForm);
    tbody.appendChild(tr);
  });
}

function actionBtns(data, index) {
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
  delBtn.addEventListener("click", deleteNode);
  editBtn.addEventListener("click", (e) => editNode(e, data, index));
  form.append(editBtn, delBtn);
  td.appendChild(form);
  return td;
}

function deleteNode(e) {
  e.preventDefault();
  const tr = e.target.closest("tr");
  const tbody = tr.parentNode;
  tbody.removeChild(tr);
}

function editNode(evt, data, index) {
  evt.preventDefault();
  const FORM = document.getElementById("form");
  const [firstname, lastName] = FORM.querySelectorAll("input");
  const [householdMembers, houseSize] = FORM.querySelectorAll("select");
  firstname.value = data[index].firstName;
  lastName.value = data[index].lastName;
  householdMembers.value = data[index].houseM;
  houseSize.value = data[index].houseS;
  deleteNode(evt);
}
export { renderTbl };
