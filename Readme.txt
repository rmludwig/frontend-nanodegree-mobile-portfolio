This is the Project 4 README for Rich Ludwig.

This Project 4 for the Nanodegree - Front End Web Developer course is specific to the perfomance optimization course material. 

Below you will find my notes and observations from working on this project.


INSTRUCTIONS
  - For instructions on the projects please see the README.md file provided as a part of the forked portfolio.
  - Additional information can be found on P4, including the rubric, at https://www.udacity.com/course/viewer/#!/c-nd001/l-2735848561/m-2664138537


TESTING INSTRUCTIONS
  - To test the main index.tml load it in your browser and run timeoine in dev tools. Also the google pagespeed insights site can be used one you set up a local web server to host the page and create the ngrok tunnel.


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

   Other things I could do:
    Possibly some additional minification could help especially if the site was larger.
    Investigate the server side setting or use .htaccess to provide some caching of page resources.
    Look more closely at image optimizations.
    Look into compression oportunities for images and other files.

#### Part 2 (pizza fps)














Things to add to my Web Perf notes

Run a local web server (works on mac)

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```


  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok 8080
  ```

MUST have ngrok in that folder. Download at https://ngrok.com
