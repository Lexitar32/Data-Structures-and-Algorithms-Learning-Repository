// Question Breakdown
    // nums1 and nums2 - integer array
    // return an array of their intersection - (return an array of elements that nums1 and nums2 have in common)
    // the elements must appear as many times as it shows in both arrays
    // the result array should also be in any order

    // Solution Steps
    // create a map to store the elements of nums1 (key is element and value is the no. of times they appear)
    // loop through nums 2 to check if the element appears in 1 and if it appears, push it to the result array and reduce the number it appears

function intersectionOfArray(nums1, nums2) {
    let map = new Map();
    let resultArray = [];

    for(let i = 0; i < nums1.length; i++) {
        if(map.has(nums1[i])) {
            map.set(nums1[i], map.get(nums1[i]) + 1);
        } else {
            map.set(nums1[i], 1)
        }
    }

    for(let num of nums2) {
        if(map.has(num) && map.get(num) > 0) {
            resultArray.push(num);
            map.set(num, map.get(num) - 1)
        }
    }

    return resultArray;
}