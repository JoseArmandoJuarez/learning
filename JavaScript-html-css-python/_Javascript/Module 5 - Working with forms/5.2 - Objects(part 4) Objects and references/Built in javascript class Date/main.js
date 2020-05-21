var date = new Date();
 
console.log(date);
//output: Wed Apr 12 2017 11:10:28 GMT+0200 (CEST)

console.log(date.toString()); // same thing!
//output:  Wed Apr 12 2017 11:10:28 GMT+0200 (CEST)


console.log(new Date('2017 04 28'));
//output:  Fri Apr 28 2017 00:00:00 GMT+0200 (CEST)
 
console.log(new Date('2017 1 2'));
//ouput:  Mon Jan 02 2017 00:00:00 GMT+0100 (CET)
 
console.log(new Date('2017 1 2 8:30'));
//output: Mon Jan 02 2017 08:30:00 GMT+0100 (CET)