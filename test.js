const nums = [1, 2, 3, 4];
var decompressRLElist = function(nums) {
  const arr = [];
  for (let i = 0; i < nums.length; i += 2) {
    for (let j = 0; j < nums[i]; j++) {
      arr.push(nums[i + 1]);
    }
  }
  const res = [];
  console.log('1', arr);
  for (let i = 0; i < res.length; i++) {
    res[i] = arr[i];
  }
  console.log('2', res);
  return res;
};
decompressRLElist(nums);
