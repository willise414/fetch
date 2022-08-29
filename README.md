# fetch
This is a simple example of a promise returned from an API and how you can take the data and display it on a page. I'll go through it line by line to 
give you the bestexplanation I can (as a relative beginner myself)

I think of a promise in Javascript like a lottery ticket. A promise can only be used once and has three states - PENDING, FULFILLED, and REJECTED. 
When you buy a lottery ticket, you are in the PENDING state. Life continues on as normal until the draw date. Then you either win (FULFILLED) and get the money
of you lose (REJECTED) and throw away the ticket. It cannot be used again. 

A promsise is the same. A promise will do something and then wait for something else to happen. This is the asynchronous part of javascript. 

In the code, indext.html, it is a regular template with one div in the body named userData. Also, I reference the javascript file as well. That's all for the
HTML file.

In the promises.js file, I have a variable that calls jsonplaceholder. That is a site that uses dummy data to test your code. In this case, I am calling for the list of users. The fetch function will always return a promise. Just by running this code, you should see PENDING in teh javascript console.

const users = fetch("https://jsonplaceholder.typicode.com/users");
console.log(users);

Next comes the actual logic:

The return from the fetch will be objects, but we want to use JSON, so we tell our code to take the response and convert it to JSON for us. (line 21-23)
Now we will take that data that was returned and go through it. We create a variable called dataReturned, and create aplace to hold the data. We insert the h2 tag Users.
Now we have to loop through the data and pull out of it what we want to display. We do this with a forEach loop. We loop through each user that is returned and assign it to the user parameter.

Then we take the dataReturned and add the results of the forEach loop to a table. We use dot notation to define what goes in the table - example user.name

Now we simply take the userData and insert it into the HTML file in the dataReturned div we created. 

You can also comment out the table and uncomment lines 29-37 for a different view of the data. 

