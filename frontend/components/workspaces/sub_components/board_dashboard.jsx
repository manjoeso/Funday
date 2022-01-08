import React from 'react'

class BoardDashboard extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <h1> This is the board dashboard container</h1> 
            // this.props.projects.map(project => <li>{project.name}</li>)
        ) 
    }
}

export default BoardDashboard;