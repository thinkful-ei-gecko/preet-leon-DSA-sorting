'use strict';
/*
Q1: understanding merge sort
[21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]
a)after 3 recursive calls? b)after 16

1R.[21, 1, 26, 45, 29, 28, 2, 9]        [16, 49, 39, 27, 43, 34, 46, 40]
2R.[21, 1, 26, 45] [29, 28, 2, 9]       [16, 49, 39, 27, 43, 34, 46, 40]
3R.[21, 1] [26, 4] [29, 28] [2, 9]      [16, 49, 39, 27, 43, 34, 46, 40]
4R.[21] [1] [26] [4] [29] [28] [2] [9]  [16, 49, 39, 27, 43, 34, 46, 40]
5R.[21] [1] [26] [4] [29] [28] [2, 9]  [16, 49, 39, 27, 43, 34, 46, 40]
6R.[21] [1] [26] [4] [28, 29] [2, 9]  [16, 49, 39, 27, 43, 34, 46, 40]
7R.[21] [1] [4, 26] [28, 29] [2, 9]  [16, 49, 39, 27, 43, 34, 46, 40]
8R.[1,21] [4, 26] [28, 29] [2, 9]  [16, 49, 39, 27, 43, 34, 46, 40]
9R.[1,21] [4, 26] [2, 9, 28, 29]  [16, 49, 39, 27, 43, 34, 46, 40]
10R.[1, 4, 21, 26] [2, 9, 28, 29]  [16, 49, 39, 27, 43, 34, 46, 40]
11R.[1, 2, 4, 9, 21, 26, 28, 29]  [16, 49, 39, 27, 43, 34, 46, 40]
12R.[1, 2, 4, 9, 21, 26, 28, 29]  [16, 49, 39, 27] [43, 34, 46, 40]
13R.[1, 2, 4, 9, 21, 26, 28, 29]  [16, 49] [39, 27] [43, 34] [46, 40]
14R.[1, 2, 4, 9, 21, 26, 28, 29]  [16] [49] [39] [27] [43] [34] [46] [40]
15R.[1, 2, 4, 9, 21, 26, 28, 29]  [16] [49] [39] [27] [43] [34] [40, 46]
16R.[1, 2, 4, 9, 21, 26, 28, 29]  [16] [49] [39] [27] [34, 43] [40, 46]
17R.[1, 2, 4, 9, 21, 26, 28, 29]  [16] [49] [27, 39] [34, 43] [40, 46]
18R.[1, 2, 4, 9, 21, 26, 28, 29]  [16, 49] [27, 39] [34, 43] [40, 46]
19R.[1, 2, 4, 9, 21, 26, 28, 29]  [16, 49] [27, 39] [34, 40, 43, 46]
20R.[1, 2, 4, 9, 21, 26, 28, 29]  [16, 27, 39, 49] [34, 40, 43, 46]
21R.[1, 2, 4, 9, 21, 26, 28, 29]  [16, 27, 34, 39, 40, 43, 46, 49]
22R.[1, 2, 4, 9, 16, 21, 26, 27, 28, 29, 34, 39, 40, 43, 46, 49] - merge and sort complete(I think!)

c)first 2 lists to be merged together? [2, 9] - 5R.
d)which 2 lists are merged on the 7th merge? [1, 4, 21, 26] [2, 9, 28, 29]

Q2: understanding quick sort
after first partition:
[3 9 1 14 17 24 22 20]

a) pivot could be either 14 or 17 - left and right side's of array satisfy both conditions for both values

b)  [14, 17, 13, 15, 19, 10, 3, 16, 9, 12] - pivot = 12
1P. [10, 17, 13, 15, 19, 14, 3, 16, 9, 12]
    [10, 3, 13, 15, 19, 14, 17, 16, 9, 12]
    [10, 3, 9, 15, 19, 14, 17, 16, 13, 12]
    [10, 3, 9, 12, 19, 14, 17, 16, 13, 15]
    [10, 3, 9, 12] 
2P. [3, 9, 10, 12] - result
    
    [14, 17, 13, 15, 19, 10, 3, 16, 9, 12] - pivot = 14
    [14, 13, 17, 15, 19, 10, 3, 16, 9, 12]
    [14, 13, 10, 15, 19, 17, 3, 16, 9, 12]
    [14, 13, 10, 3, 19, 17, 15, 16, 9, 12]
    [14, 13, 10, 3, 9, 17, 15, 16, 19, 12]
    [14, 13, 10, 3, 9, 12, 15, 16, 19, 17]
    [12, 13, 10, 3, 9, 14, 15, 16, 19, 17]

2P: [12, 13, 10, 3, 9] - we understand what to do!!!
*/

//Q3: implementing quicksort - requires partition
const data = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];
//let dataArray = data.split(' ');

function quickSort(array, start = 0, end = array.length){
  if(start >= end){
    return array
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
}

function partition(array, start, end){
  const pivot = array[end - 1];
  let j = start;
  for(let i = start; i < end - 1; i++){
    if(array[i] <= pivot){
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j; 
}

function swap(array, i, j){
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

//console.log(quickSort(data));


//Q4: implementing merge sort
function mSort(array){
  if(array.length <= 1){
    return array;
  }
  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mSort(left);
  right = mSort(right);
  return merge(left, right, array);
}

function merge(left, right, array){
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while(leftIndex < left.length && rightIndex < right.length){
    if(left[leftIndex] < right[rightIndex]){
      array[outputIndex++] = left[leftIndex++];
    }
    else{
      array[outputIndex++] = right[rightIndex++];
    }
  }
  for(let i = leftIndex; i < left.length; i++){
    array[outputIndex++] = left[i];
  }
  for(let i = rightIndex; i < right.length; i++){
    array[outputIndex++] = right[i];
  }
  return array; 
}
//console.log(mSort(data));





function mLinkedListSort(ll){
  if(ll.head.next == null){
    return ll;
  }
  let currNode = ll.head;
  let count = 0;
  while (currNode != null) {
    count++;
    currNode = currNode.next;
  }
  const middle = Math.floor(count / 2);
  let leftList = new LinkedList();
  let rightList = new LinkedList();
  currNode = ll.head;
  for (let i=0;i<middle;i++) {
    leftList.insertLast(currNode.value);
    currNode = currNode.next;
  }
  while (currNode != null) {
    rightList.insertLast(currNode.value);
    currNode = currNode.next;
  }

  leftList = mLinkedListSort(leftList);
  rightList = mLinkedListSort(rightList);
  return mergeLinkedList(leftList, rightList);
}
  

function mergeLinkedList(leftList, rightList){
  let newAdditions = new LinkedList();
  let leftNode = leftList.head;
  let rightNode = rightList.head;
  while(leftNode != null && rightNode != null){
    if(leftNode.value < rightNode.value) {
      newAdditions.insertLast(leftNode.value);
      leftNode = leftNode.next;
    }
    else{
      newAdditions.insertLast(rightNode.value);
      rightNode = rightNode.next;
    }
  }
  while (leftNode != null) {
    newAdditions.insertLast(leftNode.value);
    leftNode = leftNode.next;
  }

  while (rightNode != null) {
    newAdditions.insertLast(rightNode.value);
    rightNode = rightNode.next;
  }
  return newAdditions; 
}


function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
  }
  

let LinkedList = require('./linked-list');
let listFive = new LinkedList();
let unique = data.filter(onlyUnique);
unique.forEach(dataItem => listFive.insertLast(dataItem));