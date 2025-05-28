/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */
// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  var set = new Set(nums)
  return set.size != nums.length
}
// @lc code=end
module.exports = containsDuplicate
