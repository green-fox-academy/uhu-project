![Image of Calgo]
(https://uhusystems.com/img/calgo.png) 

 CALGO CALL CENTER MONITORING APPLICATION 
---
A monitoring application for the call center of the uhu systems 

First Step - node
---
**Install:**

1.  you need to install the latest `node.js.` you can download it from [here!](https://nodejs.org/)
2.  `node.js` comes with `npm`. update `npm` with the following command
```
sudo npm install npm -g
```
   in the project directory run this command to get all the necessary packages
```
npm install 
```

and install gulp globally

```
npm install gulp -g
```

Second Step - local database
---
 a local database is necessarry for a smooth development. we are using
 `postgreSQL`. [get it from here!](http://www.postgresql.org/download/)  
 after the installation, you need the configure the users settings in the
`pg_hba.conf` file  
it's located in the postgres installation directory. set the `postgres`  user authentication method from `md5` to  `trust` 


now you can log into `postgres` with the user `postgres` just paste the code below  

``` 
psql -U postgres
``` 

to change the password, use the following code
``` 
ALTER USER postgres WITH PASSWORD 'postgres';
``` 
after this, change back the aut method in `pg_hba.conf` to `md5`  
to create the local database use normal sql commands, or use the following commands
```
CREATE DATABASE uhu;
```
with `\connect uhu;` now you are at your local uhu database

create table for the heartbeat method with an existing sql file
```
psql -f tables.sql uhu
```
now you have it, with a simple select command test your table
```
SELECT ok FROM heartbeat;
```

Third Step - environment variables
---

set a local environment variable to the following
```
export DATABASE_URL=postgres://postgres:postgres@localhost:5432/uhu
export DEFAULT_LOGGINGLEVEL=INFO
```

Final Step
---
start your local server (the main is already running [on heroku](http://uhu-project.herokuapp.com/))
```
npm start
```
you can access the site through your browser with the following url 
```
localhost:3000
```
