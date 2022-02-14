# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all 
Workspace.destroy_all
UsersWorkspace.destroy_all
Board.destroy_all
Project.destroy_all
Task.destroy_all
UsersTask.destroy_all

user1 = User.create(email: 'john_smith@gmail.com', password: 'password', name: 'John Smith')
user9 = User.create(email: 'josh_allen@gmail.com', password: 'password', name: 'Josh Allen')
user3 = User.create(email: 'demo_user@gmail.com', password: 'password', name: 'Demo User')
user8 = User.create(email: 'ColeB@gmail.com', password: 'password', name: 'Cole Beasley')
user5 = User.create(email: 'mctown@gmail.com', password: 'password', name: 'Isaiah Mckenzie')
user6 = User.create(email: 'lknope@gmail.com', password: 'password', name: 'Leslie Knope')
user7 = User.create(email: 'phalpert@gmail.com', password: 'password', name: 'Pam Halpert')
user4 = User.create(email: 'swilliams@gmail.com', password: 'password', name: 'Serena Williams')
user2 = User.create(email: 'aperkins@gmail.com', password: 'password', name: 'Anne Perkins')

workspace1 = Workspace.create(title: "Workspace1")
workspace2 = Workspace.create(title: "Workspace2")

board1 = Board.create(title: "Board1", workspace_id: workspace1.id)
board2 = Board.create(title: "Board2", workspace_id: workspace1.id)

board3 = Board.create(title: "Board3", workspace_id: workspace2.id)
board4 = Board.create(title: "Board4", workspace_id: workspace2.id)

project1 = Project.create(title: "Recruit Awesome Engineer", board_id: board1.id)
project2 = Project.create(title: "Group2", board_id: board1.id)

project3 = Project.create(title: "Group3", board_id: board2.id)
project4 = Project.create(title: "Group4", board_id: board2.id)

project5 = Project.create(title: "Group5", board_id: board3.id)
project6 = Project.create(title: "Group6", board_id: board3.id)

project7 = Project.create(title: "Group7", board_id: board4.id)
project8 = Project.create(title: "Group8", board_id: board4.id)

task1 = Task.create(title: 'Search linked in', project_id: project1.id, status: 'Working on it')
task12 = Task.create(title: 'Go through Angel List', project_id: project1.id, status: 'Working on it')
task13 = Task.create(title: 'Check out awesome monday.com clone, funday.com', project_id: project1.id, status: 'Done')

task2 = Task.create(title: 'Walk the dog', project_id: project3.id, status: 'Done')
task3 = Task.create(title: 'Walk the cat', project_id: project3.id, status: 'Stuck')

task4 = Task.create(title: 'Do the thing that takes a long time thought lalalalla', project_id: project2.id, status: 'Stuck')
task5 = Task.create(title: 'Do the other thing', project_id: project2.id, status: 'Stuck')
task6 = Task.create(title: 'Do the special thing', project_id: project2.id, status: 'Done')
task7 = Task.create(title: 'But most importantly', project_id: project2.id, status: 'Working on it')
task8 = Task.create(title: 'Do the right thing', project_id: project2.id, status: 'Done')


user_workspace1 = UsersWorkspace.create(workspace_id: workspace1.id, user_id: user1.id)

user_workspace2 = UsersWorkspace.create(workspace_id: workspace1.id, user_id: user2.id)
user_workspace3 = UsersWorkspace.create(workspace_id: workspace1.id, user_id: user3.id)
user_workspace1 = UsersWorkspace.create(workspace_id: workspace2.id, user_id: user3.id)
user_workspace4 = UsersWorkspace.create(workspace_id: workspace1.id, user_id: user4.id)

user_workspace5 = UsersWorkspace.create(workspace_id: workspace2.id, user_id: user5.id)
user_workspace6 = UsersWorkspace.create(workspace_id: workspace2.id, user_id: user6.id)
user_workspace7 = UsersWorkspace.create(workspace_id: workspace2.id, user_id: user7.id)
user_workspace8 = UsersWorkspace.create(workspace_id: workspace2.id, user_id: user8.id)


user_task1 = UsersTask.create(task_id: task1.id, user_id: user1.id)
user_task2 = UsersTask.create(task_id: task1.id, user_id: user2.id)
user_task3 = UsersTask.create(task_id: task2.id, user_id: user1.id)