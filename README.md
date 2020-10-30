 # Review Managment System:
 ![alt text][img1]

[img1]: https://github.com/vikas-1729/review-management-system/screenshot/s1.png"
Live at [https://review-management-cbbc5.web.app/](https://review-management-cbbc5.web.app/)


## Tables of Content
  
 1. [Intro](https://github.com/vikas-1729/review-management-system#Intro) 
 2. [Setup](https://github.com/vikas-1729/review-management-system#Setup)
 3. [Database](https://github.com/vikas-1729/review-management-system#Database)
 4. [Frontend](https://github.com/vikas-1729/review-management-system#Frontend)
 5. [Backend](https://github.com/vikas-1729/review-management-system#Backend)
 5. [Tech](https://github.com/vikas-1729/review-management-system#Tech)



# Intro
  
  It is a review assignment project where you can see a review
  
  ![alt text][img2]
  
  [img2]: https://github.com/vikas-1729/review-management-system/screenshot/s2.png"
  
  create a review 
  ![alt text][img3]
  
  [img3]: https://github.com/vikas-1729/review-management-system/screenshot/s3.png"
  
  It is show you all accepted review so help you to know the feedback of your business
  
  
  # Setup
  
   After cloning this to run on local server In the project directory, you can run:

    ### `npm start`

  Runs the app in the development mode.\
  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
  You need to go [https://github.com/vikas-1729/client/src/helper/urls/] and  uncomment first line
  
  # Database
  I used no sql to store values here we have make three schema 
  
  1. review : it use to store all information about review i.e one which product which customer etc etc.
  2. customer: it use to store information about customer name etc
  3. product: similar to customer it store info about product
  4. you can know more about schemas by going to [https://github.com/vikas-1729/server/models/]
  
  # Frontend
   
   There are basically two urls one for 
   1. see the approved review [https://review-management-cbbc5.web.app/] here i use paginated so that our api don't taake too long to fetch the data it fetch 5 reviews at a time
   2. create review [https://review-management-cbbc5.web.app/create_review] this is a post request use to create review for dummy purpose customer and product data are given Here (/info) file
   
   # Backend
   
   1. we can divide the url in two part 
   * create review [https://review-management-system.herokuapp.com/api/v1/review_create] A post request to create review  
   * give approval to review [https://review-management-system.herokuapp.com/api/v1/review_approval] review_approval it is a get request with two parameter _id and status _id is which review and status to know it is approved or not  
   * read review 
   1 you will get all read review url in [https://github.com/vikas-1729/server/router/api/v1/read.js] 
   
   # Tech
   
   1. React js for front end
   2. Node js for backend
   3. Express frame work
   4. MongoDB for database
  
  
  
  
  

  
  
  
  





