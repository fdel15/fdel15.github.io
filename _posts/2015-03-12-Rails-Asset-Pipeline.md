---
layout: post
title: Rails Asset Pipeline
category: Tech
---

<p>In Chapter 5 of <a href="https://www.railstutorial.org/">Hartl's Rails Tutorial</a>, we polish up some of the routes, create partials, and style our layout page. The styling section talks about how the Rails Asset Pipeline works, but I thought it would be beneficial to give a little bit more background information that is not provided in the tutorial.</p>

<h4>What is the Rails Asset Pipeline?</h4>
<p>A framework (a basic structure underlying a system, concept, or text.) to concatenate and minify or compress JavaScript and CSS assets. It also adds the ability to write these assets in other languages such as CoffeeScript, Sass, and ERB.</p>

<h4>Why do you want to concatenate and compress these files?</h4>

<p>The major benefit of having assets pre-processed, compressed and minified by one central library (Sprockets) is that it makes Rails fast by default.</p>

<h4>What does concatenate assets mean?</h4>

<p>In production, it reduces the number of requests that a browser must make to render a web page. Web browsers are limited in the number of requests they can make in parallel so fewer requests can mean faster loading for your application.</p>

<h4>What does minifiying and compressing assets mean?</h4>

<p>For CSS files this is done by removing whitespace and comments.</p>

<p>For Javascript, more complex processes can be applied and you can choose from a set of built in options or specify your own.</p>

<p>The third feature of the asset pipeline is that it allows coding assets via a higher-level language, with precompilation down to the actual assets. Supported languages include Sass for CSS, CoffeeScript for JavaScript, and ERB for both by default.</p>

<p>Thanks for reading</p>