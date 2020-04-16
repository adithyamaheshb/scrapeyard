// export function uniqueCount(scrapes) {
//     return scrapes.reduce((acc, scrape) => {
//         if (!acc.find(el => el.count === scrape.count)) {
//             return [...acc, scrape];
//         }
//         return acc;
//     }, []);
// }

export function uniqueCount(scrapes) {
    return scrapes.filter((item, i, arr) => {
        if (i === 0) return true;
        const lastItem = arr[i - 1];
        return !(item.count === lastItem.count);
    })
}