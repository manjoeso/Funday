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

user1 = User.create(email: 'john_smith@gmail.com', password: 'password', name: 'John Smith')
user2 = User.create(email: 'josh_allen@gmail.com', password: 'password2', name: 'Josh Allen')
user3 = User.create(email: 'Stefon_Diggs@gmail.com', password: 'password3', name: 'Stephon Diggs')
user4 = User.create(email: 'ColeB@gmail.com', password: 'password4', name: 'Cole Beasley')
user5 = User.create(email: 'mctown@gmail.com', password: 'password5', name: 'Isaiah Mckenzie')

workspace1 = Workspace.create(title: "Workspace1")
workspace2 = Workspace.create(title: "Workspace2")

user_workspace1 = UsersWorkspace.create(workspace_id: workspace1.id, user_id: user1.id)
user_workspace2 = UsersWorkspace.create(workspace_id: workspace1.id, user_id: user2.id)
user_workspace3 = UsersWorkspace.create(workspace_id: workspace1.id, user_id: user3.id)

user_workspace4 = UsersWorkspace.create(workspace_id: workspace2.id, user_id: user3.id)
user_workspace5 = UsersWorkspace.create(workspace_id: workspace2.id, user_id: user5.id)
