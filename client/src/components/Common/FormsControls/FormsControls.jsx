import React from 'react';
import c from './FormsControls.module.css'

const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error; 
    return (
        <div className={c.formControl + ' ' + ( hasError ? c.error : '' )}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{ meta.error }</span>}
        </div>
    )
} 

export const Input = (props) => {
    const {input, meta, ...restProps} = props;

    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
} 

export const Textarea = ({input, meta, ...props}) => {
    return <textarea {...input} {...props}/>
}