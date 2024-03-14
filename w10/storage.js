export const saveSS = function (cfpdata) {
  const serializedArr = JSON.stringify(cfpdata);
  sessionStorage.setItem("cfp", serializedArr);
};

export const getSS = function () {
  const retrievedArr = sessionStorage.getItem("cfp");
  const data =
    retrievedArr && retrievedArr.length > 0 ? JSON.parse(retrievedArr) : [];
  return data;
};
