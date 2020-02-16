import React, {useState, useEffect} from 'react';
import c from './ProfileStatus.module.css';

const ProfileStatusHook = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    let activateEditMode = () => {
        setEditMode(true); 
    }

    let deactivateEditMode = () => {
        setEditMode(false);
        /* props.updateUserStatus(status); */
    }

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    useEffect( () => {
        setStatus(props.status);
    }, [props.status])

    return (
        <>
            { !editMode && <span onClick={ activateEditMode }>{status || 'Изменить статус'}</span>
            }
            { editMode && <input className={c.status_input} onChange={ onStatusChange } autoFocus={true} onBlur={ deactivateEditMode } value={status}/>
            }
        </> 
    )
}
export default ProfileStatusHook;