# Funday (Monday.com Clone)

![funday](https://user-images.githubusercontent.com/63963324/154087129-c97df329-888d-4ce3-8091-84534f80c04e.png)

[Live link](https://funday-aa.herokuapp.com/?#) 

# Description 

Funday.com is a single-page, interactive task-managemnt web application designed to help you be a more productive you! With fully implement user-authentication, feel
free to make your own account and invite other members to join your team. Keep track of tasks by assigning due-dates, status', and team members. Designed as a single-page application, funday.com is extremely fast and responsive, while persisting all of your updates and additions to a backend database. 

This project is my first fullstack application, designed to showcase my abilities in frontend and backend devleipmentn. This project was completed
using postgres for database management, Ruby on Rails for backend, and Javascript/React for frontend. 

Working on this project has been a humbling experience as it has taught me a lot. More than anything, it has shown me how much more there is to 
learn, and how much opportunity there is to grow as a web developer. Moreso, it has instilled confidence in myself, knowing that I can tackle anything
with enough time and research... and documentation :)  

Feel free to reach out to me at jmanso93@gmail.com if you have any questions regarding my project.

# Technologies 

- React/Redux
- Ruby on Rails
- JavaScript, HTML, & SCSS
- PostgreSQL
- Node.js
- jQuery
- jBuilder
- Webpack

Funday is built with the React framework and Redux architecture on the frontend, supported by Ruby on Rails and a PostgreSQL database on the backend.

# Core Functionality

## Task List

Dynamic task list where team members can share 'workspaces' where 'boards' and 'tasks' can be posted. Tasks can be assigned due-dates, statuses, and team members. All information can be created, updated, and destroyed. 

![image](https://user-images.githubusercontent.com/63963324/154088778-223bce01-8515-4acd-bd78-c37f4c1ae150.png)

# Search Tasks

ADD SEARCH GIF HERE

Using an architecture taking advantage of backend associations, all of the searchable data for a users workspace is fetched to the front end Redux stata upon log-in, allowing for a fully front-end search bar. By using selectors to select out a user's group and respective tasks, I was able to display the searched components dynamically.

# Display
