import React from 'react';

class BoardShow extends React.Component {
    constructor(props) {
        super(props)
       
    }

 
    render () {
        return (
            <div className=''>
                <h1>Projects</h1>
                {
                    this.props.projects.map(project => <li key={project.id}>{project.title}</li>)
                }
            </div>
        )
    }
}

export default BoardShow; 