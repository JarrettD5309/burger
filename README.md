# Burger Log
<https://secure-sea-97992.herokuapp.com/> \
Version 1.0 \
Original Deployment Date - July 17, 2020\
By Jarrett Dougherty

## Description
Burger Log is a full-stack application which uses a simple menu interface to allow users to enter, catalog, and 'eat' hamburgers. The application uses Node.js, Express.js, and a custom ORM. Data persistence is achieved with a MySQL database. Express Handlebars is used for HTML templates and a custom CSS creates the look.

## Technologies Used
* Javascript
* Node.js
* Express
* Express Handlebars
* MySQL
* jQuery
* HTML
* CSS

## Instructions For Use
### Getting Started 
1. Simply click the link to start the web app.

<https://secure-sea-97992.herokuapp.com/>

2. Use the text field to enter a custom burger type. Once submitted this burger will be entered into the database.

3. Burgers can be moved between the 'Burger List' and 'Eaten List' using the 'Devour' and 'Add to List' buttons.

If you are downloading this code and wish to run the application locally, please follow the instructions below.

### GitHub Code
1. Once you have downloaded the program you will need to run the following command to install the required node packages.

```console
$ npm install
```

2. Create a MySQL database and table using the `schema.sql` commands. This table can be seeded with `seed.sql`. These files can be found in the `db` folder.

3. Next, create a file named `.env` at the root level, add the following to it, replacing the value ****** with your MySQL password:

```console
# mySQL password

password=******
```
4. You will then need to start the local server on the command line. Navigate to the local file and run the following code to start the server.

```console
$ node server.js
```

5. Once in the server is running, use a web browser to navigate to the following address. From here you can follow the directions in the application.

`localhost:8080`