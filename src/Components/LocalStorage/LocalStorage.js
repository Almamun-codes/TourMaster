const addToDb = (id) => {
  const exists = localStorage.getItem("itemNames");
  let itemNames = {};
  if (!exists) {
    itemNames[id] = 1;
  } else {
    itemNames = JSON.parse(exists);
    if (!itemNames[id]) {
      itemNames[id] = 1;
    }
  }
  localStorage.setItem("itemNames", JSON.stringify(itemNames));
};

const getFromDb = () => {
  const exists = localStorage.getItem("itemNames");
  return exists ? JSON.parse(exists) : {};
};

const removeDb = (id) => {
  const exists = localStorage.getItem("itemNames");
  if (!exists) {
  } else {
    const itemNames = JSON.parse(exists);
    delete itemNames[id];
    localStorage.setItem("itemNames", JSON.stringify(itemNames));
  }
};

export { addToDb, getFromDb, removeDb };
