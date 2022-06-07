function numberOfPairs(gloves) {
    let counter = 0;
    let copyGloves = [...gloves].sort();
    for (let i = 0; i < copyGloves.length; i++) {
        if (copyGloves[i] === copyGloves[i+1]) {
            counter++;
            copyGloves.splice(i, 2)
            i--;
        }
    }
    return counter;
}