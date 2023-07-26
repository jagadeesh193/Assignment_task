function getUniqueNames(list1, list2) {
    const uniqueNamesList1 = [];
    const uniqueNamesList2 = [];
    const intersectionNames = [];
  
    for (const name of list1) {
      if (!list2.includes(name)) {
        uniqueNamesList1.push(name);
      } else {
        intersectionNames.push(name);
      }
    }
  
    for (const name of list2) {
      if (!list1.includes(name)) {
        uniqueNamesList2.push(name);
      }
    }
  
    return [uniqueNamesList1, uniqueNamesList2, intersectionNames];
  }
  
  const List1 = ['Arjun', 'Adwait', 'Swapnil', 'Amit', 'Vishal', 'Adnan'];
  const List2 = ['Adwait', 'Laxman', 'Amit', 'Adnan', 'Nitin', 'Gaurav'];
  
  const [uniqueNamesList1, uniqueNamesList2, intersectionNames] = getUniqueNames(List1, List2);
  
  console.log("Array(3)", uniqueNamesList1);
  console.log("Array(3)", uniqueNamesList2);
  console.log("Array(3)", intersectionNames);
  