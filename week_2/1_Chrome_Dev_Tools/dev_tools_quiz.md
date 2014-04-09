#### Include an inline screenshot of your codeschool's points from the profile page:

![Dev Tools Course - Codeschool](http://s10.postimg.org/a0k8761o9/Screen_Shot_2014_04_09_at_4_50_36_AM.png)

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS  
  ```
  Realtime editing of HTML and CSS is done in the "Elements" tab.

  HTML can be edited by double clicking on the element and modifying the element to reflect the change.  
  CSS can be edited, simply, by selecting the attribute and changing its value.  
  ```
  * Javascript Debugging
  ```
  For Javascript debugging, we, first, look at the error log file generated in the "Console" tab. Click
  on the link that appears next to the error which would take us to the .js source file under the
  "Sources" tab. Now, you can edit the .js source file to fix the issue.  
  ```
  * Performance Optimization  
  ```
  Performance Optimization is supported under the "Network" and the "Timeline" tab. It can be achieved
  by improving Network Performance, Frames View, and/or CPU Profiler.  
  ```

* What's the quick key for your OS to spawn the Dev Tools inspector?
  ```
  option + command + i  
  ```

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)  
  ```
  #0b0f11  
  ```
  * Tweak the background color to white.  
  ```
  Done
  ```
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.  
  ```
  Done  
  ```
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  ```
  Done
  ```
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the web using an image hosting service.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)  
  
  ![Screenshot of postmachina - edited](http://s28.postimg.org/of8etf4nx/Screen_Shot_2014_04_09_at_6_11_41_AM.png)

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.
  ```
  The text "The most important things are not things" is written inside a paragraph tag, or the <p> tag
  which, as per the CSS file, has a background property set to an image and in order to tweak the text's
  styling, we must remove or uncheck the background property and the text indent property.  
  ```

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? 
  ```
  92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png 
  ```
  * Explain how you would find out this information, and list the URL of offending image here and how big it is.  
  ```
  All the files associated with the website can be found under the "Resources" tab. To find the largest
  image, I looked under the "Images" category, also, found under the "Resources" tab. The URL for the
  largest image on the website is:
  ```
  [http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png](http://www.tickets wizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png)  
  ```
  The size of the image is: 316 KB
  ```

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the lowest hanging fruit to optimize the website?  How many kilobytes of data can be eliminated?
  ```
  Images: Optimizing the images will reduce the size by 885.9 KB (39% reduction).
  ```
