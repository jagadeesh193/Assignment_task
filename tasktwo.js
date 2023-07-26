function getUniqueNames(list1, list2) {
    const uniqueNamesList1 = [];
    const uniqueNamesList2 = [];
    const intersectionNames = [];
  
    
    function containsName(namesArray, name) {
      for (let i = 0; i < namesArray.length; i++) {
        if (namesArray[i] === name) {
          return true;
        }
      }
      return false;
    }
  
    
    for (let i = 0; i < list1.length; i++) {
      const name = list1[i];
      if (!containsName(list2, name)) {
        uniqueNamesList1.push(name);
      } else {
        intersectionNames.push(name);
      }
    }
  
    
    for (let i = 0; i < list2.length; i++) {
      const name = list2[i];
      if (!containsName(list1, name)) {
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
  