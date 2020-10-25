import React from 'react';
import { Event } from './Event.js';
import { Modal } from './Modal.js';

const Day = (props) => {
    const [modalOpen, setModalOpen] = React.useState(false);
    let date = props.date || Date.now();
    const hours = ['12 AM', '1A AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM'];
    const toggleModal = (e) => {
        console.log('event', e)
        if (!modalOpen) {
            setModalOpen(e.target.innerText);
        } else {
            setModalOpen(false);
        }
    }
    return (
        <>
        <table>
            <thead>
                <tr>
                    <th className="calendar">{new Date(date).toLocaleDateString('en-US', {dateStyle: 'long'})}</th>
                </tr>
            </thead>
            <tbody>
                {hours.map((time, index) => {
                    return (
                        <tr key={time + index}>
                            <td><button className="calendar" disabled={modalOpen} onClick={(e) => toggleModal(e)}>{time}</button> </td>
                            {modalOpen === time ? (
                            <Modal>
                                <Event toggleModal={toggleModal}/>
                            </Modal> ) : null}
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>
    )
}

export { Day }