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

    formatDate(date) {
        if(date === null){
            return;
        }
        let displayDate = new Date(date.slice(0, 4), parseInt(date.slice(5, 7)), date.slice(8, 10))
        console.log(displayDate)
        return displayDate.toDateString().slice(4);
    }

    render () {
        let date = this.props.task.due_date;
        return (
            <div className='task-due-date'>
                <DatePicker value={this.formatDate(date)} onSelect={(date) => this.handleDateSelect(date)} />
            </div>
        )
    }
}