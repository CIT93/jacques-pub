export const saveSS = (cfpdata) => {
  const serializedArr = JSON.stringify(cfpdata);
  sessionStorage.setItem("cfp", serializedArr);
};

export const getSS = () => {
  const retrievedArr = sessionStorage.getItem("cfp");
  const data =
    retrievedArr && retrievedArr.length > 0 ? JSON.parse(retrievedArr) : [];
  return data;
};
