
function getSecondLargestNum(nums) {
    let maxNum = nums[0];
    let secondMaxNum = 0;
  
    for (let i = 1; i < nums.length; i++) {
      const element = nums[i];
  
      if (maxNum < element) {
        secondMaxNum = maxNum;
        maxNum = element;
      }
       else if (element < maxNum && element > secondMaxNum) {
        secondMaxNum = element;
      }
    }
  
    // const arr = nums.filter((n) => n !== maxNum);
    // const secondMaxNum = Math.max(...arr);
    console.log(secondMaxNum);
  }

  getSecondLargestNum([2, 3, 6, 6, 5]);



  
  function getSecondLargest(nums) {
   
    var sorted_array = nums.sort(function (a,b) {return a - b;});

    var unique_sorted_array = sorted_array.filter(function(elem, index, self) {
        return index === self.indexOf(elem);
        // console.log(self.indexOf(elem));
        // console.log(index);
        // console.log(self);
    })

    console.log(unique_sorted_array);
  
    return unique_sorted_array[unique_sorted_array.length - 2];
  }
  

  
  console.log(getSecondLargest([2, 3, 6, 6, 5]));