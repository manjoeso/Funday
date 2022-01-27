import React from 'react'
import { Link } from 'react-router-dom'

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let id = this.props.workspaces[0].id
        return (
            <div className='sidebar-container'>
                <div className='sidebar-top-buttons'>
                    <Link className='workspace-home-link-button' to={`/workspaces/${id}`}>W</Link>
                    <a className='linkedin' href="https://www.linkedin.com/in/josephmanso1/">
                        <img src={linkedinlogoURL}/>
                    </a>
                    <a className='github' href="https://github.com/manjoeso">
                        <img style={{'backgroundColor': 'white'}} src={githublogoURL}/>
                    </a>
                </div>
                <div className='sidebar-bottom-buttons'>
                    <button className='logout-button' onClick={()=> this.props.logout()}>{this.props.currentUser.name[0]}</button>
                </div>
            </div>
        )
    }
}

export default Sidebar;

