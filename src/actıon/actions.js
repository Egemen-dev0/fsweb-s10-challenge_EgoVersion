

export const NOT_EKLE = "NOT_EKLE"
export const NOT_SIL = "NOT_SIL"

export function notEkle(not) {
  
 return {type: NOT_EKLE, payload: not};
}

export function notSil(notId) {
  return {type: NOT_SIL, payload: notId};
}
