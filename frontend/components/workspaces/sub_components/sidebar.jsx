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
                            <img src={fundaylogoURL}/>
                        </a>
                        <Link className='workspace-home-link-button' to={`/workspaces/${id}`}>
                            <img src={fourBoxes}/>
                        </Link>
                        <a target="_blank" className='linkedin' href="https://www.linkedin.com/in/josephmanso1/">
                            <img src={linkedinlogoURL}/>
                        </a>
                        <a  target="_blank" className='github' href="https://github.com/manjoeso/Funday">
                            <img src={githublogoURL}/>
                        </a>
                        <a  target="_blank" className='angel' href="https://angel.co/u/joseph-manso">
                            <img src={angellogoURL}/>
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

