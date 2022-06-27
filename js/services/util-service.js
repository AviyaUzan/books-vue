export const utilService = {
    saveToStorage,
    loadFromStorage,
    makeId,
    getCurrency,
    greenOrRed
};

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value) || null);
}

function loadFromStorage(key) {
    let data = localStorage.getItem(key);
    return (data) ? JSON.parse(data) : undefined;
}

function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function getCurrency(price, currencyCode) {
    if (currencyCode === 'USD') return '$' + price;
    else if (currencyCode === 'ILS') return price + '₪'
    else if (currencyCode === 'EUR') return '€' + price 
}

function greenOrRed(price){
      if(price > 150) return red
      else if(price < 20) return green
      else return
}