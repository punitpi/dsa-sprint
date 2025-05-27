/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var map = new Map()
  var n = nums.length
  if (n <= 2 && nums[0] + nums[1] === target) {
    return [0, 1]
  }
  for (let ii = 0; ii < n; ii++) {
    let item = nums[ii]
    if (map.has(target - item)) {
      return [ii, map.get(target - item)]
    }
    map.set(item, ii)
  }
}
// @lc code=end
