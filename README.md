# time-app
Clock, stopwatch, and timer

#journal
This was the second JavaScript application I developed without following any tutorials or source code. 
Although a clock/timer/stopwatch app is a very common beginner project, I anticipated lots of challenges. 

#Challenge 1 - Intersection Observer
The design I wanted to accomplish required me to know where on the html document I was currently looking at/what the viewport is
showing me. I didn't know such a thing as Intersection Observer existed, so I kind of went down a rabbit hole learning and trying to figure out how I can achieve my desired design with it. I used it to increase the font size of the navigation bar label of the current page.

#Challenge 2 - Scope Variables
With the stopwatch, it was difficult to figure out all the scopes of the variables and functions. I kept wanting to use function scoped variables in other functions, wanting to access functions I declared in one function in another function, etc. I wanted to limit the use of global variables as much as possible, especially since there are only so many variations of 'minute' and 'second' variable names I can come up with when I have a clock, stopwatch, and a timer all in one JS document before they start getting long. 