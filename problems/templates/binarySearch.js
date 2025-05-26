function lowerBound (arr, target) {
  let l = 0,
    r = arr.length // r is exclusive
  while (l < r) {
    const mid = l + ((r - l) >> 1)
    if (arr[mid] < target) l = mid + 1
    else r = mid
  }
  return l // first ≥ target
}
