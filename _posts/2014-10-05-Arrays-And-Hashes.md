---
layout: post
title: Arrays And Hashes
category: Tech
---

<p>Arrays and hashes are both ruby objects that are used to store collections of data. They are similar in many ways but there are some key differences.</p>

<p>In an array, each object has a unique key assigned to it. We can access any object in the array using this unique key. The positions in an array starts from “0”. The first element is located at “0”, the second at “1” etc…</p>

<div class="code-example">
<p>animals = [“dog”, “cat”, “bird”, “frog”, “cow”]</p>
</div>

<p>In the example above, animals is the name of the array. The elements of the array are strings. You can call each element using it’s index. For example:</p>

<p class="code-example">
animals[0] = “dog”<br>
animals[1] = “cat”<br>
animals[2] = “bird”<br>
animals[3] = “frog”<br>
animals[4] = “cow”</p>

<p>If you wanted to add a new animal to the array, you would assign the next index to the type of animal you wanted to add. For example, to add a lizard you would type:</p>

<p class="code-example">
animals[5] = “lizard”<br>
animals = [“dog”, “cat”, “bird”, “frog”, “cow”, “lizard”]</p>

<p>In a hash, each object is assigned a unique key and a value. Where arrays use integers as it’s index, hashes allow you to use any object type. </p>

<ul class="code-example">
  <li>animals = {</li>
  <div class="hash-body">
    <li>:dog => “Buddy”,</li>
    <li>:cat => “Oscar”,</li>
    <li>:bird => “Tweety”,</li>
    <li>:frog => “Kermit”,</li>
    <li>:cow => “Betsy”,</li>
  </div>
  <li>}</li>
</ul>


<p>In this example the key value is a symbol (that is why it is preceded by the ':') of the type of animal, and the value is the name for that particular animal. To get the name of each animal, you can call the key associated with it. For example:</p>

<p class="code-example">
animals[:dog] = “Buddy”<br>
animals[:frog] = “Kermit”<br>
</p>

<p>To add a new element to the hash, you would need to assign a new key value pair. For example, if you wanted to add a lizard named Lizzy to your animals hash you would type the following:</p>


<ul class="code-example">
  <li><p>animals[:lizard] => "Lizzy"</p></li>
  <li>animals = {</li>
    <div class="hash-body">
      <li>:dog => “Buddy”,</li>
      <li>:cat => “Oscar”,</li>
      <li>:bird => “Tweety”,</li>
      <li>:frog => “Kermit”,</li>
      <li>:cow => “Betsy”,</li>
      <li>:lizard => “Lizzy”,</li>
    </div>
  <li>}</li>
</ul>


<p>Hopefully this post helps you understand the difference between hashes and arrays a little bit better!</p>

<p>Thanks for reading.</p>