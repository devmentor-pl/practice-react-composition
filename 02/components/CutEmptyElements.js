
// wycinka pustych elementów tablicy

function cutEmptyElements(e) {
    for (let i = 0; i < e.length; i++) {
        if (e[i] === '') {
            e.splice(i, 1);
        }
    }
};

export default cutEmptyElements;