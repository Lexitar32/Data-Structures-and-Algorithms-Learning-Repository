function mergeSortedArray(nums1, m, nums2, n) {
    // Question Breakdown
    // nums1 - array of integer/number
    // nums2 - array of integer/number
    // non decreasing which means that the next number is always higher or the same with the previous number
    // m -length of nums1
    // n - length of nums2
    // Problem - Merge nums1 and nums2 into a single array sorted in non-decreasing order
    
    // Solution Steps
    // - set up 3 pointers i,j,k
    // i will be at m-1
    // j will be at n-1
    // k will be at m+n-1
    // compare i and j values and add it to k then decrement the pointer index till it is at index 0

    
    let i = m - 1;
    let j = n - 1;
    let k = m + n -1;

    while(i >= 0 && j >= 0) {
        if(nums2[j] > nums1[i]) {
            nums1[k] = nums2[j];

            j--;
            k--;
        } else {
            nums1[k] = nums1[i];

            i--;
            k--;
        }
    }

    while(i >= 0) {
           nums1[k] = nums1[i];

            i--;
            k--;
    }

    while(j >= 0) {
           nums1[k] = nums2[j];

            j--;
            k--;
    }
};