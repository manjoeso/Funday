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

user1 = User.create(email: 'john_smith@gmail.com', password: 'password', name: 'John Smith')
user2 = User.create(email: 'josh_allen@gmail.com', password: 'password2', name: 'Josh Allen')
user3 = User.create(email: 'Stefon_Diggs@gmail.com', password: 'password3', name: 'Stephon Diggs')
user4 = User.create(email: 'ColeB@gmail.com', password: 'password4', name: 'Cole Beasley')
user5 = User.create(email: 'mctown@gmail.com', password: 'password5', name: 'Isaiah Mckenzie')

workspace1 = Workspace.create(title: "Workspace1")
workspace2 = Workspace.create(title: "Workspace2")

board1 = Board.create(title: "Board1", workspace_id: workspace1.id)
board2 = Board.create(title: "Board2", workspace_id: workspace1.id)

board3 = Board.create(title: "Board3", workspace_id: workspace2.id)
board4 = Board.create(title: "Board4", workspace_id: workspace2.id)

project1 = Project.create(title: "Project1", board_id: board1.id)
project2 = Project.create(title: "Project2", board_id: board1.id)

project3 = Project.create(title: "Project3", board_id: board2.id)
project4 = Project.create(title: "Project4", board_id: board2.id)

project5 = Project.create(title: "Project5", board_id: board3.id)
project6 = Project.create(title: "Project6", board_id: board3.id)

project7 = Project.create(title: "Project7", board_id: board4.id)
project8 = Project.create(title: "Project8", board_id: board4.id)

task1 = Task.create(title: 'Walk the dog', project_id: project1.id, status: 'Done')

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

user_workspace4 = UsersWorkspace.create(workspace_id: workspace2.id, user_id: user3.id)
user_workspace5 = UsersWorkspace.create(workspace_id: workspace2.id, user_id: user5.id)
