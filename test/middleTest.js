const assertEqual = require('../assertEqual')
const eqArrays = require('../eqArrays')
const middleArrays = require ('../middle')


assertEqual(eqArrays(middleArrays([]),[]),true);
assertEqual(eqArrays(middleArrays([1,2]),[]),true);
assertEqual(eqArrays(middleArrays([1,2,3,4]),[2]),false);
assertEqual(eqArrays(middleArrays([1,2,3,4,5]),[3]), true);