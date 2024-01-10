# Kryzen-assignment

<h3>Technologies used </h3>
1. Frontend: React.js
2. Backend: Node.js
3. Database: MongoDB (or your preferred choice)
4. Authentication: JSON Web Tokens (JWT)

<h3>User Authentication:</h3>
Implement user authentication to ensure secure access to the application. Users should be able to:
1. Register a new account with a unique username and password.
2. Log in securely with their credentials.
3. Access specific pages only when authenticated.
2. Data Collection Form:

<h3>Create a simple form to collect the following user information</h3>
1. Name
2. Age
3. Address
4. Photo (upload functionality)
3. Data Display and Preview:
After submitting the form, display the collected data as a preview to the user. The preview should include the
user's details and a thumbnail of the uploaded photo.

<h3>4. PDF Download</h3>
Provide users with the option to download the collected data in PDF format. The PDF should be generated
dynamically and include all the information entered in the form.
 
<h3>Project Setup </h3>
1.Clone the Repository
2.Go to backend folder - open terminal - npm install (to install dependencies) 
  create .env file in backend folder and add PORT=5000 MONGODB_URI= your mongodb url SECRET_KEY= your secret key 
  then in terminal add run command node server.js. your server will run on port 5000 and connect to mongodb.

3.Go to fronted folder - open terminal run command npm install your dependencies will get installed .
  then run another command npm run start your frontend will run on port 3000


<h2>User Guide</h2>  

Step-1 :  Open the app using the following link : https://kryzen-assignment.netlify.app/
step-2 :  after opening the app you will first get the Signup Page to create a user here you need to add two credentials username and password.
          every user must have unique name that's why if your username is unique then and then only you will be redirect to Login Page
          otherwise you will get an error that User Already Exists !

 <h3>this is the screenshot of Signup Page</h3>

![image (40)](https://github.com/nsalunkhe/Kryzen-assignment/assets/101391587/8c4ee5b4-5d67-4f32-b870-243f014bc6fd)


 step-3 : after successful signup you will be redirect to Login Page where you need to add the same credentials which added while Signup.
          if your credentials are correct then and then only you will be redirect to update that users information .
          otherwise you will get an error Invalid username or password
          
   <h3>this is the screenshot of Login Page</h3> 

   ![image (41)](https://github.com/nsalunkhe/Kryzen-assignment/assets/101391587/080b79bb-5130-48f2-b7fc-af3b141d7a7a)

step-4 : after successful Login you will be redirect to update user info like Name,Age,Photo,Address.
         here only the logged in person can add information to his account because proper individual state management.

 <h3>this is the screenshot of page to update information of user </h3>

![image (42)](https://github.com/nsalunkhe/Kryzen-assignment/assets/101391587/e769ba22-6961-44f2-99c9-f275bd71e877)

 step-5: after adding the information you will see the information below the update form with the button export to pdf
         if you want to export to pdf you can click on that button. and youcan see the information inside the pdf for preview.
         you can also download that pdf. and if you want to close the preview at the right side there is a X button to close preview.

   <h3> these are the screenshots of the page for pdf preview and download</h3>      

   ![image (43)](https://github.com/nsalunkhe/Kryzen-assignment/assets/101391587/b175b980-f545-4d97-9044-cba46f9969cd)


![image (44)](https://github.com/nsalunkhe/Kryzen-assignment/assets/101391587/fef0dcb3-5a26-4038-abb7-408cd9a69513)


<h1>!! Thank You !!</h1>
   
