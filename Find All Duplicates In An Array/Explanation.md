## Solution: In-Place Modification Using Sign Flipping

### Key Insight

Since the problem guarantees that each number is between `1` and `n` (where `n` is the length of the array), each number can correspond to a specific index in the array. For example:

- If you see the number `3`, it can map to index `2` (since array indices are zero-based).
- Using this property, we can mark elements in the array to keep track of whether a number has been seen before by flipping the sign of the number at the mapped index.

### Steps

#### 1. Loop Through Each Number:

- For each element `nums[i]`, get its absolute value to determine which index it maps to. This index will be `Math.abs(nums[i]) - 1`.
  - For example, if `nums[i]` is `3`, this maps to index `3 - 1 = 2`.

#### 2. Check the Sign at the Mapped Index:

- If the element at `nums[index]` is positive, it means we haven’t seen this number before, so we mark it by flipping the sign (making it negative).
- If the element at `nums[index]` is negative, it means we’ve already flipped it once, so this number has been seen before. Therefore, it’s a duplicate, and we add `nums[i]` to the result array.

#### 3. Accumulate Duplicates:

- Every time you find a number that has already been flipped (indicating a duplicate), add it to the `duplicates` array.

#### 4. Return the Result:

- At the end of the loop, the `duplicates` array will contain all the duplicate elements.

### Example Walkthrough

Suppose we have `nums = [4, 3, 2, 7, 8, 2, 3, 1]`:

- **Initial Array:** `[4, 3, 2, 7, 8, 2, 3, 1]`

#### Step-by-Step Process:

1. `i = 0`: `nums[0] = 4` → Maps to `index = 3`  
   → Mark `nums[3]` (i.e., `7`) by negating it: `[4, 3, 2, -7, 8, 2, 3, 1]`.

2. `i = 1`: `nums[1] = 3` → Maps to `index = 2`  
   → Mark `nums[2]` (i.e., `2`) by negating it: `[4, 3, -2, -7, 8, 2, 3, 1]`.

3. `i = 2`: `nums[2] = -2` → Maps to `index = 1`  
   → Mark `nums[1]` (i.e., `3`) by negating it: `[4, -3, -2, -7, 8, 2, 3, 1]`.

4. `i = 3`: `nums[3] = -7` → Maps to `index = 6`  
   → Mark `nums[6]` (i.e., `3`) by negating it: `[4, -3, -2, -7, 8, 2, -3, 1]`.

5. `i = 4`: `nums[4] = 8` → Maps to `index = 7`  
   → Mark `nums[7]` (i.e., `1`) by negating it: `[4, -3, -2, -7, 8, 2, -3, -1]`.

6. `i = 5`: `nums[5] = 2` → Maps to `index = 1`  
   → `nums[1]` is already negative (`-3`), so `2` is a duplicate → Add `2` to `duplicates`.

7. `i = 6`: `nums[6] = -3` → Maps to `index = 2`  
   → `nums[2]` is already negative (`-2`), so `3` is a duplicate → Add `3` to `duplicates`.

8. `i = 7`: `nums[7] = -1` → Maps to `index = 0`  
   → Mark `nums[0]` (i.e., `4`) by negating it: `[-4, -3, -2, -7, 8, 2, -3, -1]`.

- **Final Duplicates Array:** `[2, 3]`

### Why This Works

- **In-Place Tracking:** By negating numbers at certain indices, we keep track of which numbers have been seen without additional space.
- **Avoiding Extra Space:** The input array itself serves as a tracking mechanism, achieving `O(1)` extra space complexity.
