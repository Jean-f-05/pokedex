export const getId = (pokeUrl) => {
    switch (pokeUrl.length) {
        case 44:
            return pokeUrl.slice(-2, -1);

        case 45:
            return pokeUrl.slice(-3, -1);

        case 46:
            return pokeUrl.slice(-4, -1);

        case 47:
            return pokeUrl.slice(-5, -1);

        case 48: return pokeUrl.slice(-6, -1)
        default:
            return null
    }
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