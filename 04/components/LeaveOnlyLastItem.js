
// wycinka wszystkich elementów tablicy z wyjątkiem ostatniego

function leaveOnlyLastItem(e) {
    for (let i = 0; i < e.length; i++) {
        if (e.length > 1) {
            e.splice(0, 1);
        }
    }
}

export default leaveOnlyLastItem;