This is the Project 4 README for Rich Ludwig.

This Project 4 for the Nanodegree - Front End Web Developer course is specific to the perfomance optimization course material. 

Below you will find my notes and observations from working on this project.


Check out the original README.md, renamed to Instructions_README.md, provided with the forked portfolio repo for more information on this project and the instructions I followed to complete it.

Additional information can be found on P4, including the rubric, at https://www.udacity.com/course/viewer/#!/c-nd001/l-2735848561/m-2664138537


TESTING INSTRUCTIONS
  - Clone the repo on your local machine from https://github.com/rmludwig/frontend-nanodegree-mobile-portfolio
  - For PART 1 to test the main index.html load it in your browser and run timeline in dev tools. 
  - To test index.html with google pagespeed insights via local webserver go to the directory of the cloned repo you created above via cli. 
      Then in that window start the webserver with:
      python -m SimpleHTTPServer 8080

      Then in a sepperate window make your tunnel with:
      ./ngrok 8080

      The ngrok script will return a public internet URL you can use for pagespeed insights.

    OR AS AN ALTERNATIVE

      You can use http://rmlsn.net/P4WebOptimization/ where I have the project hosted at this time.
  
  - For PART 2 on FPS you can load the pizza.html page from your local repo.
  - Check the console for speed measurements.
  - In the same directory as this file I have some timeline data including the timeline-final_scroll which is the last timeline I saved.


REFERENCES
  * Udacity course material
  * Google developer documentation
  * An article on node list and get/selector speed at http://www.nczonline.net/blog/2010/09/28/why-is-getelementsbytagname-faster-that-queryselectorall/ 
  * Udacity/Piazza forums
  * W3schools website
  * Node.js documentation
  * Download ngrok at https://ngrok.com
  * gulp.js documentation (http://travismaynard.com/writing/getting-started-with-gulp)
  * Rabbit & Udacity Coffee, Coach, & Code sessions.
  * Github and the udacity/fend-office-hours documentation (recommended by coaches)


RICH's NOTES
  - I decided to complete this project on my MAC at home rather than completing the project on my laptop where I completed other projects.
  - In order to setup the MAC for this type of testing I followed the bash example and the ngrok setup instructions found at https://ngrok.com (where I also downloaded the .zip for that app)
  - I installed Google Canary for the MAC as described in the course work.
  - I forked the portfolio into my repo then cloned to the MAC. From there I started my first round of testing. Below I have captured the specific testing data from my testing.
 

TESTING
 #### Part 1 (pagespeed-insights)
   NOTE: Each test starts with pagespeed insights PC score|Mobile score, and several Desctop|Mobile page load speeds.

   1. 89|75 m, 9.52|3.93|3.76 m
      Initial test without any changes
   2. 89|78 m, 3.56|3.42 m
      Used the media attribute to eliminate the print css from CRP.
   3. 91|77 m, *|3.32 m
      Removed the use of a web font from google. Minimal performance gain.
   4. 93|86 m, *|3.30 m
      Made the first JS import similar to the second with async. Minimal performance gain.
   5. 92|81 m, *|3.20 m
      Removed mobile CSS from main CSS file and added media specific tag. No real performance gain.
      Reversed this change.
   6. 95/88 m, *|3.27 m
      Added my own anylitics account. Moved the JS content to the footer. 
   7. 94|87 m, *|3.40 m
      Moved JS file content into footer. No real performance gain.
      Reversed this change.
   8. 98|97 m, *|3.27 m
      Moved the CSS content into HTML file due to its small size. Noticable perfromance gain.
   SUCCESS!!

   After the initial work I also discovered that when the page was hosted on the internet, versus using ngrok, the large pizza image was an issue. At that time I also created a "thumb" image for the pizza shop and changed the index.html to use the thumb.

   Other things I could do:
    1. Possibly some additional minification could help especially if the site was larger. There is a minified js file in dist/ but the original file was so small I'm not pointing index.html to the min version. However, minification is in use for pizza.html.
    2. Investigate the server side setting or use .htaccess to provide some caching of page resources. This is out of scope for this project but could be usefull in real world applicaitons.
    3. Look more closely at image optimizations. Look into other compression oportunities for images and other files.


#### Part 2 (pizza fps)

   I read on google's development site and from other sites in the references above that the querySelector and querySelectorAll were a possible issue on the FPS testing. I read about perfromance issues when used in loops due to static node list which takes longer to build as opposed to Live node list that is built as needed on the fly. So I replaced those methods in the code. MEthods I used instead were like getElementById or getElementsByClassName.

   Then I examined the loops closely and tried to make them as efficient as possible removing the unneccessary parts. Between this change and the one above the efficiency gains were significant. Measuring via the console the resize was less than 3ms and the scroll was less than 1ms. But I was still struggling with the amount of time paint would take.

   I then spent some time optimizing the images for the background. I recorded several timelines (you can find them in this dir) as I worked through different image options. Once I found the better oth the ones I tried I was still struggling with paint time.

   I then went to a coffee, Coach, and Code session. In that session the coaches were very helpful and pointed me to the compisite layer idea. With that coaching I was able to optimize the site furter using the transform hacks they pointed me to. After that optimization I was satified with the console measurements and the FPS status in my timeline for scrolling.

   I furhter tweaked the pizza page with some minification and cleaned up comments.

   SUCCESS!!


SUMMARY
  This project was certainly a great learning experience. I found the FPS part a bit frustrating but in the end it was very educational. Thanks for looking over my project. I hope you are satified with my changes. Also thanks for reading this far. :-P Have a good day!!!!

  