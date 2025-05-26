class MinHeap {
  constructor () {
    this.h = []
  }
  push (x) {
    this.h.push(x)
    this._up(this.h.length - 1)
  }
  pop () {
    if (!this.h.length) return undefined
    const top = this.h[0]
    const last = this.h.pop()
    if (this.h.length) {
      this.h[0] = last
      this._down(0)
    }
    return top
  }
  _up (i) {
    while (i) {
      const p = (i - 1) >> 1
      if (this.h[p] <= this.h[i]) break
      ;[this.h[p], this.h[i]] = [this.h[i], this.h[p]]
      i = p
    }
  }
  _down (i) {
    const n = this.h.length
    while (true) {
      let smallest = i
      const l = i * 2 + 1,
        r = l + 1
      if (l < n && this.h[l] < this.h[smallest]) smallest = l
      if (r < n && this.h[r] < this.h[smallest]) smallest = r
      if (smallest === i) break
      ;[this.h[i], this.h[smallest]] = [this.h[smallest], this.h[i]]
      i = smallest
    }
  }
}
module.exports = MinHeap
