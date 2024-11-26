function getCommonElements(array1, array2) {
    let resultArr = [];
    for (let i = 0; i < array1.length; i++) {

        for (let j = 0; j < array2.lenght; j++) {
            if (array2[j] == array1[i]) {
                resultArr.push(array1[i]);
                break;
            }

        }
    }

    return resultArr;
}
