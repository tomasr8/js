'use strict';

const bubble = require('./bubblesort/bubblesort.js');
const heap = require('./heapsort/heapsort.js');
const merge = require('./mergesort/mergesort.js');
const select = require('./selectsort/selectsort.js');
const insert = require('./insertsort/insertsort.js');

const size = process.argv[2];

stopWatch('selectsort', select);
stopWatch('insertsort', insert);
stopWatch('bubblesort', bubble);
stopWatch('heapsort', heap);
stopWatch('mergesort', merge);
stopWatch('native js Array#sort()', [].sort);


function stopWatch(name, sort) {
    let intArr = getRandomIntArray(size);
    let objArr = getRandomObjectArray(size);

    console.time(name + ' sorting int array');
    if (sort === [].sort) {
        sort.call(intArr);
    } else {
        sort(intArr);
    }
    console.timeEnd(name + ' sorting int array');

    console.time(name + ' sorting object array');
    if (sort === [].sort) {
        sort.call(intArr, (a, b) => {
            return a.prop - b.prop;
        });
    } else {
        sort(objArr, (a, b) => {
            return a.prop - b.prop;
        });
    }
    console.timeEnd(name + ' sorting object array');
}

function getRandomIntArray(size) {
    let res = [];
    for (let i = 1; i <= size; i++) {
        res.push(Math.floor(Math.random() * 100));
    }
    return res;
}

function getRandomObjectArray(size) {
    let res = [];
    for (let i = 1; i <= size; i++) {
        res.push({
            prop: Math.floor(Math.random() * 100)
        });
    }
    return res;
}
