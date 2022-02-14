import React from 'react';
import {Link} from 'react-router-dom'
import SidebarContainer from '../sub_components/sidebar_container'
import WorkspaceContainer from '../sub_components/workspace_container';
import BoardIndexContainer from '../sub_components/board_index_container';
import ProjectShowContainer from '../sub_components/project_show_container'
// import ProjectFormContainer from '../sub_components/forms/create_project_form_container'
import BoardTitleFormContainer from '../sub_components/forms/board_title_form_container'
import { AuthRoute, ProtectedRoute } from '../../../util/route_util';
import { isThisSecond } from 'date-fns';

class BoardShow extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            search: false,
            query: "",
            searchInput: 'search-not-selected',
        }

        this.createProject = this.createProject.bind(this)
        this.createItem = this.createItem.bind(this)
        this.createTasks = this.createTasks.bind(this)
        this.updateSearch = this.updateSearch.bind(this)
        this.selectProjects = this.selectProjects.bind(this)
        this.selectSearch = this.selectSearch.bind(this)
        this.handleBlur = this.handleBlur.bind(this)

    }

    componentDidMount () {
        if(this.props.workspaces.length < 1){
            this.props.fetchAllWorkspaceData(this.props.currentUser.id);
        }
        if (this.props.currentUser.current_workspace_id === null){
            this.props.assignCurrentWorkspace(this.props.currentUser, parseInt(this.props.currentWorkspaceId))
        }
    }

    assignColor (idx) {
        let colorOptions = {
            0: "#579BFC",
            1: "#A25DDC",
            2: "#C4C4C4",
            3: "#CAB641",
            4: "#784bd1"
        }

        return (
            colorOptions[idx % 5]
        )
    }

    createProject () {
        this.props.createProject({title: 'New Group'}, parseInt(this.props.currentBoard.id))
        .then(obj => this.createTasks(obj))
        .then(this.setState({['title']: ''})) // resets form input field
    }

    createItem () {
        let task = {}
        task['project_id'] = this.props.firstProject.id
        task['title'] = 'New Item'
        this.props.createTask(task)
    }
    
    createTasks (obj) {
        let task = {}
        task['project_id'] = obj.project.id
        task['title'] = 'Item 1'
        this.props.createTask(task)
        task['title'] = 'Item 2'
        this.props.createTask(task)
    }

    updateSearch(e){
        if(e.target.value.length === 0){
            this.setState({search: false, query: ''})
        } else {
            this.setState({search: true, query: e.target.value})
        }
    }

    selectProjects () {
        // return array of project objects which have matching tasks to the query
        let filteredProjects = {};
        let query = this.state.query;
        let newProjects = {}
        this.props.projects.reverse().forEach(project => {
            newProjects[project.id] = project;
        })

        this.props.allTasks.forEach(task => {

            if((task.title.toLowerCase()).includes((query).toLowerCase())){
                filteredProjects[task.project_id] = newProjects[task.project_id];
            }
        })
        return Object.values(filteredProjects);
    }

    selectSearch () {
        this.setState({ searchInput: 'search-selected'})
    }

    handleBlur () {
        if(this.state.search === false){
            this.setState({searchInput: 'search-not-selected'})
        }
    }
    render () {
        let currentWorkspaceId = this.props.match.params.workspace_id;
        if(this.props.workspaces.length > 0){
            return (
                <div className='main-parent-container'>
                    <ProtectedRoute path="/" component={SidebarContainer} />
                    <section className='main-work-area'>
                        <nav className='workspace-board-parent-container'>
                            <WorkspaceContainer currentWorkspaceId={currentWorkspaceId}/> 
                            <BoardIndexContainer 
                                currentWorkspaceId={currentWorkspaceId}
                                boards={this.props.boards}
                                currentBoard={this.props.currentBoard}/>  
                        </nav>
                        <section className='dashboard-container'>
                            <BoardTitleFormContainer board={this.props.currentBoard}/> 
                            <div className='project-nav-bar'>
                                <div className='main-table'>
                                    Main Table
                                </div>
                                <div className='create-project-form-container'>
                                    <div className='project-buttons'>
                                        <button onClick={() => this.createItem()} className='add-project-button'>New Item</button>
                                        <button onClick={() => this.createProject()} className='add-project-item-button'></button>
                                    </div>
                                    <div id='search-bar-container'>
                                        {/* <div id='mag-glass'>
                                            🔍
                                        </div> */}
                                        <div className='search-input-container'>
                                            <form>
                                                <input
                                                    onBlur={this.handleBlur}
                                                    onFocus={this.selectSearch}
                                                    onChange={this.updateSearch}
                                                    value={this.state.query}
                                                    placeholder='Search Tasks'
                                                    className={this.state.searchInput}
                                                />
                                            </form>
                                        </div>
                                    </div>
                                    {/* <div id='person-filter'>
                                        Person
                                    </div> */}
                                </div>
                            </div>
                            <div className='projects-parent-container'>
                                    {(this.state.search ? this.selectProjects() : this.props.projects).map((project, idx) => 
                                        <ProjectShowContainer 
                                            key={project.id}
                                            search={this.state.search}
                                            query={this.state.query}
                                            project={project} 
                                            currentBoard={this.props.currentBoard}
                                            color={this.assignColor(idx)}
                                            currentWorkspaceId={currentWorkspaceId}
                                        />
                                    )}
                            </div>
                        </section>
                    </section>
                </div>
            )
        } else {
            return null
        }
    }
}

export default BoardShow; 