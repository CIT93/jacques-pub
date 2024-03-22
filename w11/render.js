import { FORM, TBL } from "./global.js";
import { getSS, saveSS } from "./storage.js";

const renderTblHeading = () => {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");

  const headingTextArr = [
    "Name",
    "Household",
    "HouseSize",
    "Food Choice",
    "Footprint",
    "Actions",
  ];
  headingTextArr.forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  return table;
};

const renderTbl = () => {
  const data = getSS();
  TBL.innerHTML = "";
  if (data.length > 0) {
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
    createTblRow(tbody);
    table.appendChild(tbody);
    TBL.appendChild(table);
  }
};

const createTblRow = (tbody) => {
  const data = getSS();
  data.forEach(function (obj, index) {
    const tr = document.createElement("tr");
    const ignoreVals = [
      "householdPts",
      "houseSizePts",
      "last",
      "foodChoiceTwo",
      "foodChoicePts",
    ];
    for (const [key, value] of Object.entries(obj)) {
      if (ignoreVals.some((val) => val === key)) {
        continue;
      }
      let td = document.createElement("td");
      td.textContent = `${value}`.replace("_", " ");
      tr.appendChild(td);
    }
    const actionForm = actionBtns(index);
    tr.appendChild(actionForm);
    tbody.appendChild(tr);
  });
};

function actionBtns(index) {
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
  delBtn.addEventListener("click", (e) => deleteNode(e, index));
  editBtn.addEventListener("click", (e) => editNode(e, index));
  form.append(editBtn, delBtn);
  td.appendChild(form);
  return td;
}

function deleteNode(e, index) {
  e.preventDefault();
  const tr = e.target.closest("tr");
  const tbody = tr.parentNode;
  tbody.removeChild(tr);
  const cfpData = getSS();
  const newArr = cfpData.filter((data, inx) => inx !== index);
  saveSS(newArr);
  const newArrData = getSS();
  renderTbl(newArrData);
}

function editNode(evt, index) {
  evt.preventDefault();
  const data = getSS();
  const [firstname, lastName] = FORM.querySelectorAll("input");
  const [householdMembers, houseSize] = FORM.querySelectorAll("select");
  firstname.value = data[index].first;
  lastName.value = data[index].last;
  householdMembers.value = data[index].houseMembers;
  houseSize.value = data[index].houseSize;
  deleteNode(evt, index);
}
export { renderTbl };

