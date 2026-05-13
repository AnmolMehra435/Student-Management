This is my fullstack student management system build in MERN stack

keys:- 
1. Authentication and Authorization
2. CRUD operations
3. Logout/Go back
4. Search data
   
Roles:-
1. Admin :- Create Student, view all Students, edit student, search student, delete student
2. Student :- View their data

Tech Stack:-

Frontend:-
1. React :- used to build and style pages and components
2. Axios :- used in react to send request to server and handle its response
3. React-router-dom:- used to route pages in frontend and navigate user from one page to another

Backend:-
1. Node.js :- used to run the js server
2. Express.js :- used for routing, middlewares and controllers
3. Bcrypt :- used to hash and compare password
4. cors:- used for allowing Cross origin request sharing
5. dotenv:- used to store secret keys and urls
6. jsonwebtoken(jwt):- used to create token for each user to verify them for future requests
7. mongoose:- create model schema and handle database

DataBase:-
1. MongoDB:- used for cloud base database using mongodb atlas

Model Schema:-
1. User: { email: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['Admin', 'Student']
    }}
2. Students: {name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    marks: Number,
    course: {
        type: String,
        enum: ['MCA', 'BCA', 'Btech']
    }}
