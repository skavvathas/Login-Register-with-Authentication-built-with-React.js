# Login-Register-with-Authentication-built-with-React.js

The project has been developed using the Node.js environment. Therefore, it is necessary for the user to have Node.js installed on their computer. Additionally, the project utilizes React.js for the frontend and Express.js for the backend. The database used is MongoDB, where all user and post data is stored. It's important to note that CSS was used for the user interface design.

Once the files are downloaded, the user can run the project locally. To do this, open a terminal in both the server and client folders and execute the command npm i in each of them. This will install all the required node modules.

Furthermore, the user needs to connect their MongoDB database in the application. This can be done by modifying the server.js file in the server folder. The specific cluster used by the editor is not provided for safety reasons.

In the project, JWT tokens are used for user authentication. To enable user authentication in the app, the user should create a file named .env. In this file, they should add a secret key by writing SECRET=<key> and specify the port as PORT=4000. The .env file used by the editor is not provided for obvious security reasons.

Once these configurations are complete, the user can run the application by typing npm start in both terminals. The server will be running on localhost:4000 and the client on localhost:3000.

## About the project

The project is a simple Login and Register website built with React.js. The user can register into the application from the "/register" route, after the completion of the 
his/her credentials. After the click of the button "Register" he/she will be guided to the "/home" route. If he want to logout and connect again in the application he can 
press the button "Logout". In the route "/login" he can login to the app with the credentials he has already given in the register.



### route "/"

The user here can select if he want to login or register.

![Στιγμιότυπο οθόνης 2023-06-27 182352](https://github.com/skavvathas/Login-Register-with-Authentication-built-with-React.js/assets/122029632/26232e0a-6691-4fc8-a9df-9731e8e2155c)


###  route "/login"

The user can login in his profile (if he is already have a profile).


![login](https://github.com/skavvathas/Login-Register-with-Authentication-built-with-React.js/assets/122029632/cf370bf9-567d-48e1-b5c4-adce3683f4ff)



###  route /register

The user can register in the app, putting his credentials.


![register](https://github.com/skavvathas/Login-Register-with-Authentication-built-with-React.js/assets/122029632/11ad4fff-cbeb-4c35-b734-a6cebc5cb219)


We put the credentials of the user "Mat".
![ΣLog-reg](https://github.com/skavvathas/Login-Register-with-Authentication-built-with-React.js/assets/122029632/57397505-7c9a-4e3f-8372-5ccb18cc542d)


###  route /home

From the user matthomas

![mat](https://github.com/skavvathas/Login-Register-with-Authentication-built-with-React.js/assets/122029632/174bcd44-c9c0-42de-b11f-dcb9984d7583)

