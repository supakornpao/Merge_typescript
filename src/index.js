"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = merge;
function merge(collection_1, collection_2, collection_3) {
    var D = [];
    var m, n, o, i, j, k;
    m = collection_1.length;
    n = collection_2.length;
    o = collection_3.length;
    i = j = 0;
    k = o - 1;
    while (i < m && j < n && k >= 0) {
        var m_1 = Math.min(Math.min(collection_1[i], collection_2[j]), collection_3[k]);
        D.push(m_1);
        if (m_1 == collection_1[i])
            i++;
        else if (m_1 == collection_2[j])
            j++;
        else
            k--;
    }
    //No 3 left 
    while (i < m && j < n) {
        if (collection_1[i] <= collection_2[j]) {
            D.push(collection_1[i]);
            i++;
        }
        else {
            D.push(collection_2[j]);
            j++;
        }
    }
    //No 2 left
    while (i < m && k >= 0) {
        if (collection_1[i] <= collection_3[k]) {
            D.push(collection_1[i]);
            i++;
        }
        else {
            D.push(collection_3[k]);
            k--;
        }
    }
    //No 1 left
    while (j < n && k >= 0) {
        if (collection_2[j] <= collection_3[k]) {
            D.push(collection_2[j]);
            j++;
        }
        else {
            D.push(collection_3[k]);
            k--;
        }
    }
    //No 1 and 2
    while (k >= 0)
        D.push(collection_3[k--]);
    //No 2 and 3
    while (i < m)
        D.push(collection_1[i]);
    //No 1 and 3
    while (j < n)
        D.push(collection_2[j]);
    return D;
}
