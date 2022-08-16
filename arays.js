//find the product.

const Find_Prod = (array, N) => 
{
    let product = 1;
    for(let i = 0; i< array.length; i++) {
       product *= array[i];
     }
     
     return product;

};

//find the sum.

const Find_Sum = (array, N) => 
{
  let product = 0;
    for(let i = 0; i< array.length; i++) {
       product += array[i];
     }
     
     return product;


};

//Count Ocueeances.

const findCount = (N, K, Arr) => {
    let count = 0;
    for (let i = 0; i < N; i++) {
        if (K === Arr[i]) {
            count += 1;
      }
    }
    return count;
  };

  //Evenodd

  const findEvenOdd = (N, Arr) => {
    let sumOfEven = 0;
    let sumOfOdd = 0;
    for (let i = 0; i < N; i++) {
        if (Arr[i] % 2 === 0) {
            sumOfEven += Arr[i];
        } else {
            sumOfOdd += Arr[i];
        }
    }
    let newArray = [sumOfEven, sumOfOdd];

    return newArray;
};

findEvenOdd(7, [1, 2, 3, 4, 5, 6, 7]);

//find the no. present or not.

const Find_Num = (array,N,M) => 
{
 
 for(let i=0 ; i< N; i++){
   if(array[i] === M){
     return "YES"
   }
 }
    return "NO"  
};

//higher age.

const highAge = (N, Arr) => 
{
    const arr = [];
    for(let i = 0; i < N; i++) {
      if(Arr[i] >= 18) {
        arr.push(Arr[i]);
      }
    }
    return arr;
};
 
//Incremental array.

const Inc_Arr = (array, N) => {
    let newArray = [];
    for (let i = 0; i < N; i++) {
      newArray.push(array[i] + 1);
    }
    console.log(newArray.join(" "));
  };
  
  Inc_Arr([1, 2, 3, 4, 5], 5);

  //pass or fails.

  const isAllPass = (N, Arr) => {
    let allPassed = true;
    for (let i = 0; i < N; i++) {
      if (Arr[i] < 32) {
        allPassed = false;
      } else {
        continue;
      }
    }
  
    if (allPassed) {
      return "YES";
    } else {
      return "NO";
    }
  };

  //unique shirt color.

  function Unique_Shirts(arr, N) {
    let newArray = arr.sort();
    for (let i = 0; i < newArray.length; i++) {
      let count = 0;
      for (let j = 0; j < N; j++) {
        if (newArray[i] === newArray[j]) {
          count++;
        }
      }
      if (count > 1) {
        newArray.splice(i, count);
        i = 0;
      }
    }
    return newArray.length;
  }
  
  console.log(Unique_Shirts([3, 2, 4, 1, 2, 3], 6));

  // min & max.

  
function arrayMin(arr) {
    let temp = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr[0];
  }
  
  function arrayMax(arr) {
    let temp = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
          temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr[0];
  }

  //birthday game.

  function Birthday_Game(arr, D, M) {
    let numberOfWays = 0; 
    let numberOfSquares = arr.length; 
    for (let i = 0; i < numberOfSquares; i++) {
      let sum = 0;
      if (i + M > numberOfSquares) {
        return numberOfWays;
      }
      for (let j = 0; j < M; j++) {
        sum += arr[i + j];
      }
      if (sum === D) {
        numberOfWays++;
      }
    }
    return numberOfWays;
  }
  
  console.log(Birthday_Game([2, 2, 1, 3, 2], 4, 2));