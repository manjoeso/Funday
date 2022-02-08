import React from 'react'
import { Link } from 'react-router-dom'

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let id = this.props.workspaces[0].id
        return (
            <nav className='sidebar'>
                <div className='sidebar-container'>
                    <div className='sidebar-top-buttons'>
                        <a className='f' href="">
                            <img style={{'background': 'white'}} src={fundaylogoURL}/>
                        </a>
                        <Link className='workspace-home-link-button' to={`/workspaces/${id}`}>W</Link>
                        <a className='linkedin' href="https://www.linkedin.com/in/josephmanso1/">
                            <img src={linkedinlogoURL}/>
                        </a>
                        <a className='github' href="https://github.com/manjoeso">
                            <img style={{'backgroundColor': 'white'}} src={githublogoURL}/>
                        </a>
                        <a className='angel' href="https://angel.co/u/joseph-manso">
                            <img style={{'background': 'white'}} src={angellogoURL}/>
                        </a>
                    </div>
                    <div className='sidebar-bottom-buttons'>
                        <button className='logout-button' onClick={()=> this.props.logout()}>{this.props.currentUser.name[0]}</button>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Sidebar;

