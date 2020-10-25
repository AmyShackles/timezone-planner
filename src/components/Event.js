import React from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Event = (props) => {
    console.log(props.toggleModal)
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data)
    return (
        <div className="modal">
             <button className="cancel" onClick={(e) => props.toggleModal(e)}><FontAwesomeIcon icon="times-circle" />Cancel</button>
        <form onSubmit={handleSubmit(onSubmit)} className="eventForm">
            <label htmlFor="eventName">Event Name</label>
            <input name="eventName" ref={register({ required: true })}/>
            {errors.eventName && "Event name is required"}
            <label htmlFor="startTime">Start Time</label>
            <input name="startTime" ref={register({required: true })}/>
            {errors.startTime && "Start time is required"}
            <label htmlFor="endTime">End Time</label>
            <input name="endTime" ref={register({required: true})} />
            {errors.endTime && "End time is required"}
            <label htmlFor="timeZone">Timezone</label>
            <input name="timeZone" ref={register}/>
            <label htmlFor="description">Description</label>
            <input name="description" ref={register}/>
            <label htmlFor="notes">Notes</label>
            <input name="notes" ref={register}/>
            <input type="submit"/>
        </form>
       
        </div>
    )
}

export { Event };