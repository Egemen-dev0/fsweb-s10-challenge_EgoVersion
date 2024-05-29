import { NOT_EKLE, NOT_SIL } from "./actions";

const s10chLocalStorageKey = "s10ch";

const baslangicDegerleri = {
  notlar: [
    {
      id: "75g1IyB8JLehAr0Lr5v3p",
      date: "Fri Feb 03 2023 09:40:27 GMT+0300 (GMT+03:00)",
      body: "Bugün hava çok güzel!|En iyi arkadaşımın en iyi arkadaşı olduğumu öğrendim :)|Kedim iyileşti!",
    },
  ],
};

function localStorageStateYaz(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function localStorageStateOku(key) {
  return JSON.parse(localStorage.getItem(key));
}

function baslangicNotlariniGetir(key) {
  const eskiNotlar = localStorage.getItem(key);

  if (eskiNotlar) {
    return localStorageStateOku(key);
  } else {
    return baslangicDegerleri;
  }
}

const intialState = baslangicNotlariniGetir(s10chLocalStorageKey);

export const reducerFn = (state = intialState, action) => {
  switch (action.type) {
    case NOT_EKLE:
      const yeniNotlar = [...state.notlar, action.payload];
      const updatedStateAdded = { ...state, notlar: yeniNotlar };
      localStorageStateYaz(s10chLocalStorageKey, updatedStateAdded);
      return updatedStateAdded;
    case NOT_SIL:
      const filteredNotlar = state.notlar.filter(
        (item) => item.id !== action.payload
      );
      const updatedStateDeleted = { ...state, notlar: filteredNotlar };
      localStorageStateYaz(s10chLocalStorageKey, updatedStateDeleted);
      return updatedStateDeleted;
    default:
      return state;
  }
};
