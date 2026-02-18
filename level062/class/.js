let array1 = [kiwi,mango,zgmartli,churchkhela]

let array2 = [1,1,2,3,4,5,5,67]

let contactArray = [array1,array2]

contactArray.copyWithin(0,1,2)

console.log(contactArray)

contactArray.fill(0,1,3)

console.log(contactArray)

contactArray.pop(3)
let lastElement = contactArray[3]
console.log(lastElement)

contactArray.shift(0)
let firstElement = contactArray[0]
console.log(firstElement)

contactArray.unshift(10,20 (contactArray[0,1]))
print(contactArray)