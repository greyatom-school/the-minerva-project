# Assignment

In this assignment, you'd be given an array of numbers with duplicate values and you'd have to write a function to return an array of approximately equally divided sorted array of unique numbers.

## Your Tasks

### Task 1

if the user provides an array of numbers say

> [1, 10, 20, 2, 5, 2, 2, 2, 5, 3, 4, 8]

### Task 2

If the total count of numbers is one and the array cannot be divided into exactly 2 arrays of same length, then return an array of only one array. So say, we have an array:

> [3]

Then, the final result would be:

> [[3]]

### Sample Input

[1, 9, 2, 3, 3, 3, 3, 3, 4, 4, 5, 6, 7, 8, 5, 6, 6, 9, 10, 10]

### Sample Output

[[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]]

### Constraints

- 1 < number < 10^3

- 2 < Array of numbers < 10^3
