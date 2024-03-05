const cfpData = getSS();

function saveSS(cfpdata) {
  const serializedArr = JSON.stringify(cfpdata);
  sessionStorage.setItem("cfp", serializedArr);
}

function getSS() {
  const retrievedArr = sessionStorage.getItem("cfp");
  const data =
    retrievedArr && retrievedArr.length > 0 ? JSON.parse(retrievedArr) : [];
  return data;
}
export { cfpData, saveSS, getSS };
