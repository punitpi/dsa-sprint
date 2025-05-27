/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  var n1 = new Set(nums1)
  var n2 = new Set(nums2)
  var result = []
  n1.forEach(item => {
    if (n2.has(item)) {
      result.push(item)
    }
  })
  return result
}
// @lc code=end
