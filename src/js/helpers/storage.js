export const save = (key, data) => {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(key, serializedData);
  } catch (err) {
    console.error("Не вдалося зберегти дані в сховище!", err);
  }
};

export const load = (key) => {
  try {
    const serializedData = localStorage.getItem(key);
    return serializedData ? JSON.parse(serializedData) : null;
  } catch (err) {
    console.error("Не вдалося завантажити дані зі сховища!", err);
  }
};

export const remove = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.error(`Не вдалося видалити дані за ключем ${key}!`, err);
  }
};

export const clear = () => {
  try {
    localStorage.clear();
  } catch (err) {
    console.error("Не вдалося очистити схлвище ", err);
  }
};
