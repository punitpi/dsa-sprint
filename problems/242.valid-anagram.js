/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  var n = s.length
  var map1 = new Map()
  var map2 = new Map()
  var result = true
  if (n !== t.length) {
    return false
  }

  for (let ii = 0; ii < n; ii++) {
    map1.set(s[ii], (map1.get(s[ii]) || 0) + 1)
    map2.set(t[ii], (map2.get(t[ii]) || 0) + 1)
  }

  for (const [key, value] of map1) {
    if (map2.has(key)) {
      if (map2.get(key) !== value) {
        result = false
        break
      }
    } else {
      result = false
      break
    }
  }
  return result
}
// @lc code=end
