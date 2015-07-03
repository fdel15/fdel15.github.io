---
layout: post
title: Linked Lists And Trees
category: Tech
---

<p>The only data structure we have explored in detail so far at Dev Boot Camp are Arrays. I have also been working with Hashes because the downside of nested Arrays made doing some of the assigned challenges more difficult, and using Hashes allowed me to write better and more readable code. We are going to turn it up a notch this week as we begin to delve into some more complex data structures such as Linked Lists and Trees.</p>

<p>All of the information in this blog post are from notes that I have taken from two recorded DBC lectures given by David Reinman. I highly encourage you to watch these videos for a more thorough primer of Linked Lists and Trees.</p>

<a href="https://talks.devbootcamp.com/linked-lists">Linked Lists</a>
<br>

<a href="https://talks.devbootcamp.com/tree-data-structure">Trees</a>


<h4>Linked Lists</h4>

<p>A Linked List is a data structure in which each node in the list will know about it’s successor. List’s are similar to arrays in that they are an ordered set of values, but unlike arrays, list values cannot be accessed by indices, only by it’s preceding value.</p>

<a href="/img/linked_list.gif"><img src="/img/linked_list.gif"></a>

<p>A linked list often does not offer any value over an array unless you are dealing with a large data set. They also come up often during technical interviews so it is important to know when a list offers more value. An array is a chunk of memory with a bunch of indices, and these indices act as pointers to memory locations. Arrays usually require a contiguous block to store all of it’s indices.</p>

<p>Nodes can exist in memory independently. The size of each node is relatively small, and the fact that they point to each other means you can place nodes scattered throughout your memory. The larger your array gets, the more efficient a linked list becomes as long as you only care about successive values.</p>

<h4>Trees</h4>

<p>A tree is a data structure that is made up of nodes or vertices and edges without having any cycle. A tree with no nodes is called the null or empty tree, and all other trees contain a root node and potentially many levels of additional nodes that forma  hierarchy. The tree structure begins with a “root” node. Node’s that branch off of this root node are known as the children of the root node, and likewise, the root node is the parent to these children.</p>

<a href="/img/binarytree.png"><img src="/img/binarytree.png"></a>

<p>The nodes on a tree only know about their children. The tree structure in general, only knows about the root node, but also contains the logic needed to search through the rest of the nodes in the tree. Sorted binary trees are a useful tree data structures because they are organized by a specific and simple rule. Any branch to the left of it’s parent is less than it’s parent, and any branch to the right of its parent is greater than or equal to its parent.</p>

<p>The benefit of this type of tree structure is it cuts down on search time significantly. An ordered nested tree makes your search logarithmic time instead of linear time. The difference between the two times is illustrated below:</p>

<a href="/img/linear_vs_logarithmic.png"><img src="/img/linear_vs_logarithmic.png"></a>


<p>A data set containing 512 items would take a maximum of 512 linear searches, but only takes a maxium of 9 logarimthic searches. As the data sets get larger, you can see by the pattern above that the difference between the two search times increases dramatically. This is because with well organized nested trees, you are performing a binary search in which you are eliminating large chunks of the tree after each search.</p>

<p>This concludes my primer on Linked Lists and Trees. I am just scratching the surface for these complex data structures, so future blog posts going in more detail are probably in the near future.</p>

<p>Thanks for reading.</p>