
We’ll use a Map (like a storage bin) to keep track of each number we see as we go through the array.

Go through each number in nums one by one.

For each number, calculate the complement:

complement is the number that, when added to the current number, equals the target.
Formula: complement = target - current number.
Check the Map for the Complement:

Look in the Map to see if the complement is already there:
If it is in the Map, it means we've already seen that number
So, we’ve found our two numbers! We return the index of the complement (from the Map) and the index of the current number.

If the complement is not in the Map, we store the current number and its index in the Map so that future numbers can check against it.
