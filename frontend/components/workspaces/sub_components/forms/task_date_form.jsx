import React, {useState} from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default class TaskDateForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            task: this.props.task
        }
        this.handleDateSelect = this.handleDateSelect.bind(this)
    }

    handleDateSelect (date) {
        let newTask = Object.assign({}, this.state.task, {['due_date']: date})
        this.props.updateTask(newTask, this.state.task.id)
    }

    render () {
        let date = this.props.task.due_date; 
        return (
            <div className='task-due-date'>
                <DatePicker value={date} onSelect={(date) => this.handleDateSelect(date)} />
            </div>
        )
    }
}