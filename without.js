const without = function(array1, array2) {
   
      let result = [];
      for (let i = 0; i < array1.length; i++) {
        if (!array2.includes(array1[i])) {
          result.push(array1[i]);
        }
      }
      return result;
    };
    
    console.log(without([1, 2, 3], [1]));
    console.log(without(["1", "2", "3"], [1, 2, "3"]))
    console.log(without(["Hello", "Lighthous", "Labs", "Bootcamp"], ["Bootcamp"]));