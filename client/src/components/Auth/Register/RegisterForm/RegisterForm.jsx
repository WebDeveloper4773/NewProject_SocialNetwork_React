import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { Input } from './../../../Common/FormsControls/FormsControls';
import {requiredField, maxLengthCreator} from './../../../../utils/validators/validators';
import './RegisterForm.css';

const maxLength30 = maxLengthCreator(30)

const RegisterForm = (props) => {
  return (
        <form onSubmit={props.handleSubmit}>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <Field class="form-control" id="exampleInputPassword1" placeholder="Enter name" validate={[requiredField, maxLength30]} name="name" component={Input}/>
            </div>

            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <Field class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" validate={[requiredField, maxLength30]} name="email" placeholder="Enter email" component={Input}/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>      
            </div>

            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <Field class="form-control" id="exampleInputPassword1" placeholder="Password" validate={[requiredField, maxLength30]} name="password" component={Input}/>
            </div>
                       
            { props.error &&  
                <div class='formCommonError'>
                    {props.error}
                </div>
            }
            <div>
                <button type="submit" class="btn btn-primary">Submit</button>  
            </div>
        </form> 
  );
}
const RegisterReduxForm = reduxForm({ form: 'register' })(RegisterForm)


export default RegisterReduxForm;