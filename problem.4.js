function Count(Arr1, Arr2) {
    let temp = 0;
    for (let i = 0; i < Arr2.length; i++) {
      for (let j = 0; j < Arr1.length; j++) {
        if (Arr1[j] % Arr2[i] == 0) {
          temp+=1;
        }
      }
      console.log(Arr2[i] + ":" + temp);
    }
  }
  Count([1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30], [1, 2, 3, 4, 5, 6, 7, 8, 9])