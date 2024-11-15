const mergeTwoLists = (list1, list2) => {
  const newList = [];

  if (list1 !== null || list2 !== null) {
    for (let i = 0; i < list1.length; i++) {
      newList.push(list1[i]);
    }

    for (let i = 0; i < list2.length; i++) {
      newList.push(list2[i]);
    }
  }

  console.log(newList.sort());
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
