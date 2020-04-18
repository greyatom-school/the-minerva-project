# Wrap Up

## What did you learn?

In this section, we got introduced to Trees, Binary Trees and Binary Search Trees which are non linear data structures. Studying their properties we understood how non linear data structures are different and what are their advantages when working with data of larger volumes.

Once we understood the structure and properties of Binary trees and Binary Search trees, we proceeded to learn how to search, insert and delete values in them.

## Key take-aways
- Structure and properties of Binary trees and Binary Search trees
- Traversal techniques of Binary trees and Binary Search trees
- Search, Insert and Delete operations of Binary trees and Binary Search trees
- Time and memory complexity when using Binary Search Trees
- Advantages of BST are:
	-   We can always keep the cost of insert, delete, search to O(logN) where N is the number of nodes in the tree - so the benefit really is that lookups can be done in logarithmic time which matters a lot when N is large.
	-   We have an ordering of keys stored in the tree. Any time we need to traverse the increasing (or decreasing) order of keys, we just need to do the in-order (and reverse in-order) traversal on the tree.
	- We can also do range queries - find keys between N and M (N <= M).
	-   BST can also be used in the design of memory allocators to speed up the search of free blocks (chunks of memory), and to implement best fit algorithms where we are interested in finding the smallest free chunk with size greater than or equal to size specified in allocation request.

- Disadvantages of using BST:
	-   The main disadvantage is that we should always implement a balanced binary search tree - AVL tree, Red-Black tree, Splay tree (***These are advanced concepts, don't worry if you don't know about them, but feel free to explore***). Otherwise the cost of operations may not be logarithmic and degenerate into a linear search on an array.
