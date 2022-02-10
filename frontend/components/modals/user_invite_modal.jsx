import React from 'react'

class UserInviteModal extends React.Component {
    render() { 
        return (
            <div className='create-workspace-board-form-container'>
                <div className='create-workspace-board-header'>
                    <h1>Workspace Members</h1>
                </div>
                <div className='workspace-users-list'>
                    {
                        this.props.workspaceUsers.map(user => {
                            return (
                                <li>{user.name}</li>
                        )})
                    }
                </div>
                <div className='create-workspace-board-form-button-container'>
                    <button onClick={() => this.props.closeModal()} className='cancel-button'>Cancel</button>
                </div>
            </div>);
    }
}
 
export default UserInviteModal;