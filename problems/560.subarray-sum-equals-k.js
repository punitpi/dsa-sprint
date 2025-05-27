/*
 * @lc app=leetcode id=560 lang=javascript
 *
 * [560] Subarray Sum Equals K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  var map = new Map()
  var currentCount = 0
  var count = 0
  map.set(0, 1)

  nums.forEach(item => {
    currentCount += item
    if (map.has(currentCount - k)) {
      count += map.get(currentCount - k)
    }
    map.set(currentCount, (map.get(currentCount) || 0) + 1)
  })
  return count
}
// @lc code=end
