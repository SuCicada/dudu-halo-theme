export function group(arr, n) {
  let res = []
  for (let i = 0; i < arr.length;) {
    let ar = []
    for (let j = 0; j < n && i < arr.length; j++) {
      ar.push(arr[i])
      i++
    }
    res.push(ar)
  }
  return res
}
