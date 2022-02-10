import React from 'react'

class WorkspaceTitleForm extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
            workspace: this.props.workspace,
            workspaceTitleInputClass: 'wtns',
            workspaceDescriptionInputClass: 'wdns'
        }
        this.updateWorkspace = this.updateWorkspace.bind(this)
        this.selectTitle = this.selectTitle.bind(this)
        this.selectDescription = this.selectDescription.bind(this)
    }
    
    componentDidMount () {
        this.setState({workspace: this.props.workspace})
    }

    componentDidUpdate (prevProps) {
        if(this.props.workspace !== prevProps.workspace){
            this.setState({workspace: this.props.workspace})
        }
    }

    updateTitle (e) {
        return e => (this.setState({workspace: {['title']: e.target.value}}))
    }

    updateDescription (e) {
        return e => (this.setState({workspace: {['description']: e.target.value}}))
    }

    updateWorkspace (e) {
        let newWorkspace = Object.assign({}, this.state.workspace, {['id']: this.props.workspace.id})
        this.props.updateWorkspace(newWorkspace)
        this.setState({workspaceTitleInputClass: 'wtns'})
        this.setState({workspaceDescriptionInputClass: 'wdns'})
    }

    selectTitle () {
        this.setState({ workspaceTitleInputClass: 'wts'})
    }

    selectDescription () {
        this.setState({ workspaceDescriptionInputClass: 'wds'})
    }

    render(){
        return ( 
            <div className='wsdbrs'>
                <form onSubmit={this.updateWorkspace}>
                    <input
                        className='workspace-title'
                        id={this.state.workspaceTitleInputClass}
                        onBlur={this.updateWorkspace}
                        onFocus={this.selectTitle}
                        value={this.state.workspace.title}
                        onChange={this.updateTitle()}
                        placeholder='Add workspace title'
                    >
                    </input>
                </form>
                <form onSubmit={this.updateWorkspace}>
                    <input
                        className='workspace-description'
                        id={this.state.workspaceDescriptionInputClass}
                        onBlur={this.updateWorkspace}
                        onFocus={this.selectDescription}
                        value={this.state.workspace.description ? this.state.workspace.description : ''}
                        onChange={this.updateDescription()}
                        placeholder='Add workspace description'
                        type={this.state.workspaceDescriptionInputClass === 'workspace-description-selected' ? 'textarea' : 'text'}
                    >
                    </input>
                </form>
            </div>
        )
    }
}

export default WorkspaceTitleForm;