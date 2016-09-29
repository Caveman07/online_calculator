var myMax = function(arr) {
    var max = arr[0];
    for (var i in arr) {
      if (max < arr[i]) {
        max = arr[i];
      }
    }
    return max;
  };

console.log(myMax([1,2,3,5,10,7,9,6]));

////////////////////////////////////////////////////////////

function vowel_count(string) {
    return string.match(/[aeiou]/gi).length;
};
console.log(vowel_count('hey'));

///////////////////////////////////////////////////////////

function reverse(string) {
  var reverse_array = [];
  for(var i = 1; i < string.length+1; i++) {
    reverse_array.push(string[string.length - i]);
  }
  return reverse_array;
};

console.log(reverse('hey'));

/////////////////////////////////////////////////////////////
