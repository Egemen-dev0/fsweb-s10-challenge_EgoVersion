import { NOT_EKLE, NOT_SIL } from "../actıon/actions";
import {
  localStorageStateYaz,
  localStorageStateOku,
} from "./../data/localstorage";
const LOCAL_STORAGE_KEY = "KEY_ONE";

const baslangicDegerleri = {
  notlar: [
    {
      id: "75g1IyB8JLehAr0Lr5v3p",
      date: "Fri Feb 03 2023 09:40:27 GMT+0300 (GMT+03:00)",
      body: "Bugün hava çok güzel!|En iyi arkadaşımın en iyi arkadaşı olduğumu öğrendim :)|Kedim iyileşti!",
    },
  ],
};

function baslangicNotlariniGetir(key) {
  const eskiNotlar = localStorage.getItem(key);

  if (eskiNotlar) {
    return localStorageStateOku(key);
  } else {
    return baslangicDegerleri;
  }
}

const intialState = baslangicNotlariniGetir(LOCAL_STORAGE_KEY);

export const reducerFn = (state = intialState, action) => {
  switch (action.type) {
    case NOT_EKLE:
      const result_state = {
        ...state,
        notlar: [...state.notlar, action.payload],
      };
      localStorageStateYaz(LOCAL_STORAGE_KEY, result_state);

      return result_state;
    case NOT_SIL:
      const last_state = {
        ...state,
        notlar: state.notlar.filter((item) => item.id !== action.payload),
      };
      localStorageStateYaz(LOCAL_STORAGE_KEY, last_state);

      return last_state;
    default:
      return state;
  }
};
