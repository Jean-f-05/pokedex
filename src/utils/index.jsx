export const getId = (pokeUrl) => {
    var id = pokeUrl.substring(pokeUrl.length - 10).replace(/[^0-9]/g, '');
    return id
}

export const stdNumber = (pokeNumber) => {
    switch (pokeNumber.length) {
        case 1:
            return "00" + pokeNumber;
        case 2:
            return "0" + pokeNumber;

        default:
            return pokeNumber
    }
}

export const sortByNumber = (data) => {
    return data.sort((a, b) => getId(a.url) - getId(b.url));
}

export const filterItems = (arr, query) => {
    console.log("arr", arr);
    console.log("query", query)
    return arr.filter((el) => {
        console.log(el)
        return el.name.toLowerCase().includes(query.toLowerCase())
    });
}
