# Personalized-Horoscope-API


1. Command to install all the package `npm i`
2. Connect with the Database(Postgres) , .env files include all the details.
   Need to create .env file in root and you need to have all three details copied `PORT=3000`,`JWT_SECRET=your_secret_key`,`DATABASE_URL=postgres://myuser:mypassword@localhost:5432/horoscope_db`
   Command to run the app: `npx ts-node src/app.ts`.
3. There are four routes defined two are POST request for signup and login .
    For signup four field are mandatory {name,email,password,birthdate}, the result you will get is signup meassage with zodiacSign:http://localhost:3000/auth/signup, 

    For login you need pass same {email and password } details acoording to signup.Here you will get the token which you will need further for other two get routes and some user deatails.http://localhost:3000/auth/login ,
    For horoscope/today GET routes you need to pass the same token form login and the output you will recieve a horhoroscope details and zodiacsign along with date of birth http://localhost:3000/horoscope/today
    
    For horoscope/history GET routes need to pass same Bearer token and you will get all the history details.
    http://localhost:3000/horoscope/history
