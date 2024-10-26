To get the product of all elements except the one at index `i`, we can split the array into two parts:

- **Left side**: The product of all elements to the left of `i`.
- **Right side**: The product of all elements to the right of `i`.

The result at each index `i` will simply be the product of these two parts:  
\[
\text{result}[i] = \text{left_product}[i] \times \text{right_product}[i]
\]

## Implementation Details

### Step 1: Calculate Left Products

1. Initialize `prefix` to 1 (since there are no elements to the left of the first element).
2. Loop through the array from left to right.
3. At each index `i`, set `answer[i]` to the product of all elements to the left (stored in `prefix`).
4. Update `prefix` by multiplying it with `nums[i]`, so it will contain the product of elements up to the current `i` for the next iteration.

**Example** for `[1, 2, 3, 4]`:

After this step, `answer` will hold `[1, 1, 2, 6]`.

- `answer[0]` is 1 (nothing to the left),
- `answer[1]` is 1 (product of `1`),
- `answer[2]` is 2 (product of `1 * 2`),
- `answer[3]` is 6 (product of `1 * 2 * 3`).

### Step 2: Calculate Right Products

1. Initialize `suffix` to 1 (since there are no elements to the right of the last element).
2. Loop through the array from right to left.
3. At each index `i`, multiply `answer[i]` by `suffix`, which contains the product of all elements to the right of `i`.
4. Update `suffix` by multiplying it with `nums[i]`, so it contains the product of all elements up to the current `i` from the right for the next iteration.

Continuing with `[1, 2, 3, 4]`:

After this step, `answer` will be `[24, 12, 8, 6]`.

- `answer[3]` remains 6 (no elements to the right),
- `answer[2]` becomes 8 (`6 * 4`),
- `answer[1]` becomes 12 (`2 * 3 * 4`),
- `answer[0]` becomes 24 (`1 * 2 * 3 * 4`).

## Why This Works

This approach ensures that each `answer[i]` contains the product of all elements except `nums[i]` by systematically including all left and right elements without any division. Since each element is only visited twice (once for `prefix` and once for `suffix`), this solution is efficient at `O(n)` time complexity.
