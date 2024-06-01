export function localStorageStateYaz(key, data) {
    try {
        if(data == undefined){return "Boşver"} 
        localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.log('localStorageStateYaz(error) :', error, data);
    }
  
}

export function localStorageStateOku(key) {
  return JSON.parse(localStorage.getItem(key));
}
