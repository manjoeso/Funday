import React from 'react';
import {Link} from 'react-router-dom'
import WorkspaceTitleFormContainer from './forms/workspace_title_form_container'
class WelcomeDashboard extends React.Component {
    constructor(props) {
        super(props)

    }

    assignColor (idx) {
        let colorOptions = {
            0: "#f279f2",
            1: "#f65f7c",
            2: "#595ad4",
            3: "#ff146e",
            4: "#784bd1"
        }

        return (
            colorOptions[idx % 5]
        )
    }
 
    render () {
        if(this.props.currentWorkspace){
            return (
                <section className='ws-dash-parent-container'>
                    <div className='ws-dash-top'>
    
                    </div>
                    <div className='ws-dash-bot-cont'>
                        <div className='ws-dash-banner'>
                            <div className='ws-dash-banner-left'>
                                <div style={{backgroundColor: `${this.assignColor(this.props.workspaces.indexOf(this.props.currentWorkspace))}`}} 
                                        className='ws-big-icon'>
                                    {this.props.currentWorkspace.title[0]}
                                </div>
                                <WorkspaceTitleFormContainer workspace={this.props.currentWorkspace}/>
                            </div>
                            <div className='ws-dash-banner-right'>
                            
                            </div>
                        </div>
                        <div className='ws-dash-content'>
                            <div>
                                Recent Boards
                            </div>
                            <ul>
                                {this.props.boards.map(board => {
                                    return (
                                        <Link 
                                            className='ws-board-item' 
                                            to={`/${this.props.currentWorkspaceId}/boards/${board.id}`}>
                                        {board.title}
                                        </Link>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </section>
            )
        } else {
            return (null)
        }
    }
}

export default WelcomeDashboard;