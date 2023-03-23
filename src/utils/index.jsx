export const getId = (pokeUrl) => {
    switch (pokeUrl.length) {
        case 36:
            return pokeUrl.slice(-2, -1);

        case 37:
            return pokeUrl.slice(-3, -1);

        case 38:
            return pokeUrl.slice(-4, -1);

        default:
            return null
    }
}