---
layout: post
title: Rack Middleware
category: Tech
permalink: /blog/Rack-Middleware
---

Less than a week after graduating from DBC, I had my first coding challenge as part of the interview process with a potential future employer. I was excited and eager to get started on the challenge, but my heart dropped for a second as I read over the instructions. “Create a Rack Middleware application.” I was aware of what Rack was thanks to my experience with Rails and Sinatra, and I had heard the term middleware before, but imposter syndrome quickly struck me and I thought to myself “Oh no, I have no idea how to build a middleware application.”

<p>Fortunately, after spending a few hours Googling, reading some documentation, and watching a few tutorials I was able to complete the application. I wanted to write this blog post to share some of the things I learned about Rack middleware during the challenge. </p>

<h5>What is Rack?</h5>

<p>The first thing I wanted to do when beginning this challenge was to define exactly what Rack was. I knew it was the foundation that Ruby frameworks such as Rails and Sinatra are built on top of, but in order to build a Rack application I felt that I needed a more concrete definition.</p>

<p>Rack is an HTTP interface for Ruby. It makes it easy to write HTTP facing applications in Ruby by defining the interface between the code that accepts an HTTP request and the code that serves the response. A Rack application is an object that responds to the call. It must return a triplet that contains the status code, headers, and body.</p>

 <a href="/img/rack_object.png"><img src="/img/rack_object.png"></a>

<p>This definition was much better than my original definition. I also understood that all Rack applications had to respond to a call method. But what exactly is the env parameter being passed to this call method? I did some more research and discovered that env is a hash that meets the rack spec. It defines incoming information, gives you access to incoming headers, host info, query string, and other common information, and is raw data.</p>


 <a href="/img/env_hash.png">Keys in an Env hash<br><img src="/img/env_hash.png"></a>

<h5>What is Middleware?</h5>

<p>At this point, things started to click for me, and momentum took over. Now that I understood what a simple Rack application is, I could now define middleware. Middleware is a series of rack applications in which each class simply calls the next one and returns its value.  There is no limitation to the number of Rack applications you can string together as part of your middleware. In fact, Rails is just a complex Rack app with a  complex middleware stack. The final middleware app for Rails is called dispatcher which reads the routing table and calls the correct controller and method.</p>

 <a href="/img/rails_middleware.png"><img src="/img/rails_middleware.png"></a>

<h5>How Does It All Work?</h5>

<p>In order to build a Rack application, I needed to install the rack gem. Included with the rack gem is a command called ‘rackup’ that you call from the terminal. This is a simple way to start a web process using one of the rack servers installed on the system. In my case, it used Thin Web server which I already had installed.</p>

<p>Rackup then looks for a config.ru file in your application by default. This file is wrapped in a Rack::Builder. Code inside config.ru is evaluated and built using a Rack::Builder which generates an API compliant object. This object is then passed to the rack server.</p>

<a href="/img/configru.png"><img src="/img/configru.png"></a>

<p>In hindsight, the Rack application I built for this challenge is extremely simple. There is only one rack application being called in the config.ru file. But, the application works. It takes a text file of Ricky Gervais quotes and randomly displays one every time a call to the server is made.</p>

<p>I have a code review with the CTO of my potential employer on Wednesday.  I am looking forward to discussing Rack applications, and learning how I could have built this application better. I’m not sure if I will get the job, or if the way I interpreted the challenge is the way he would’ve liked me to complete it, but I do know that I learned quite a bit. </p>

 <p>Landing your first programming job after graduating from a bootcamp can take anywhere from 1 to 100 interviews with different companies. This process is described as an emotional roller coaster with many ups and downs. I like to think of myself on a roller coaster that only goes up. The trick to avoid the downs is to control the things you can and make peace with the things you  can’t. </p>

 <p>I have no control over if I will get hired, but I can make sure that in every interview, every coding challenge, and every interaction with a potential employer that I learn something. As long as I am constantly learning and improving, I can take comfort with the fact that I am  a better programmer today than I was yesterday. And if I keep stringing together days like this, then it is only a matter of time before I am employed.</p>

<p>Thanks for reading.</p>

<h5>Resources:</h5>

<a href="http://hawkins.io/2012/07/rack_from_the_beginning/">Rack From The Beginning</a>

<p><a href="https://www.youtube.com/watch?v=BtfI-MiVUoQ">Rack Basics Tutorial</a></p>

<p><a href="https://www.amberbit.com/blog/2011/07/13/introduction-to-rack-middleware/">Introduction To Rack Middleware</a></p>

<a href="https://www.youtube.com/watch?v=iJ-ZsWtHTIg">Tekpub: Understanding Rack</a>
