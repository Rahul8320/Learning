<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmediad.publicbroadcasting.net%2Fp%2Fwuwm%2Ffiles%2Fstyles%2Fx_large%2Fpublic%2F201510%2FFotolia_63395468_Subscription_Monthly_M.jpg&f=1&nofb=1&ipt=487acbf1aa6215dc32fa33494fbc121fe58b524e71b69bd1e5b966be2be1a5f5&ipo=images" alt="Project logo"></a>
</p>

<h3 align="center">Result Managment System</h3>

---

<p align="center"> Implement a result managment system with Nodejs, Express, Mongodb
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

In this application teachers, after login, can add new student details with score. In the teacher dashboard all students will list according to their score by decreasing order. Teacher also can edit student details and change their profile picture.

Student can view their result with profile details by searching with their Roll no and Name.

<strong> Authentication and Atuorization is done by JWT Token.</strong>

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them.

```
 - Node JS
 - MongoDB Atlast Database
```

### Installing

A step by step series of examples that tell you how to get a development env running.

1. Clone this repository:

```
git clone <this repo>
```

2. Open the cloned folder and install the required dependencies:

```
npm install
```

3. Create a .env file in the root directory with the following variables:

```
PORT=<Enter your default port for the app>
DB_URI=<Enter your mongodb atlast database uri>
TOKEN_SECRET=<Enter any secret text for your JWT Token>
SESSION_SECRET=<Enter any secret text for your express sessions>
```

4. It's time for starting our express server:

```
npm start
```

## 🎈 Usage <a name="usage"></a>

Create a teacher user by going to register page and then login using the same user.
Now you can add student by going "add student" link in the navbar. From the dashboard you can view all setudent details, search student by name , edit or delete student by going to respected links.

After logout, you can go student page and search student result or details by entering roll no and name of the student.

## 🚀 Deployment <a name = "deployment"></a>

The easiest way to deploy the project to a live system is by using a platform like Heroku. You will need to create a new Heroku app and link it to your GitHub repository.

## ⛏️ Built Using <a name = "built_using"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [Ejs](https://ejs.co/) - View Engine
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [JWT](https://jwt.io/) - Authentication and Authorization
- [Bootstrap](https://getbootstrap.com/) - Responsive UI
- [Font Awesome](https://fontawesome.com/) - Icons

## ✍️ Authors <a name = "authors"></a>

- [@rahuldey](https://github.com/Rahul8320)

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Learning: https://www.youtube.com/watch?v=YSyFSnisip0
- Inspiration: https://www.youtube.com/playlist?list=PL6u82dzQtlfvJoAWdyf5mUxPQRnNKCMGt
- References: https://www.youtube.com/watch?v=EkQc-8uzxIA
