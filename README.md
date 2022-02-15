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

Using an architecture taking advantage of backend associations, all of the searchable data for a users workspace is fetched to the front end Redux stata upon log-in, allowing for a fully front-end search bar. By using selectors to select out a user's group and respective tasks, I was able to display the searched components dynamically.

Since tasks have a 'belongs to' relationship with groups, the search had to be handled in two separate components. By modifying the exisiting set-up, I was able to re-factor the rendering code to dynamically take in selected tasks based on whether or not the search bar was active (had a string inside). For each cycle of the search (each new character inputted), I needed to check to see if the search bar still had content, and to select the correct groups to render.

```
selectGroups () {
        let filteredGroups = {};
        let query = this.state.query;
        let newGroups = {};
        this.props.groups.forEach(project => {
            newGroups[group.id] = project;
        })
        this.props.allTasks.forEach(task => {
            if((task.title.toLowerCase()).includes((query).toLowerCase())){
                filteredGroups[task.group_id] = newGroups[task.group_id];
            }
        })
        
        return Object.values(filteredProjects);
    }
```

By then checking the local React state if there was content in the search bar, I was conditionally able to render the appropriate tasks related to the given group without having to modify the existing task selector which otherwise will select all the relevant tasks for a group. 

```
tasksSelector = function(tasks, groupId) {
        let taskArray = Object.values(tasks)
        let returnArr = [];
    
        taskArray.forEach(task => {
            if (task.group_id === groupId) {
                returnArr.push(task)    
            }
        })
        if(this.props.query) { // checks for 
            let filteredTasks = returnArr.filter(task => (task.title.toLowerCase()).includes(this.props.query.toLowerCase()))
            return filteredTasks;
        }
        return returnArr; 
    }
```
# Display
