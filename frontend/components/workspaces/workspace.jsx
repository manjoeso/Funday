import React from 'react';

class Workspace extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount () {
        this.props.fetchWorkspaces(this.props.currentUser.id);
    }

    render () {
            return (
                <div>
                    <ul>{}
                        {
                            this.props.workspaces.map((workspace, idx) => <li key={idx}>{workspace.title}</li>)
                        }
                    </ul>
                </div>
        )
    }
}

export default Workspace