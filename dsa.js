// Binary Search Algorithm
function binarySearch(haystack, needle) {
    let lo = 0
    let hi = haystack.length

    while (lo < hi) {
        let mid = Math.floor((lo + (hi - lo)) / 2)
        let midValue = haystack[mid]

        if (midValue == needle) return true

        else if (midValue > needle) hi = mid
        else lo = mid + 1

    }

    return false
}

console.log(binarySearch([2, 4, 5, 6, 8, 9], 9))
