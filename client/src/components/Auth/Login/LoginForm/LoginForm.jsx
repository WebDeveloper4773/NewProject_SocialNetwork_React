import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { Input } from './../../../Common/FormsControls/FormsControls';
import {requiredField, maxLengthCreator} from '../../../../utils/validators/validators';
import c from './LoginForm.module.css';

const maxLength30 = maxLengthCreator(30)

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <Field class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" validate={[requiredField, maxLength30]} name="email" placeholder="Enter email" component={Input}/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>      
            </div>

            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <Field class="form-control" id="exampleInputPassword1" placeholder="Password" validate={[requiredField, maxLength30]} name="password" component={Input}/>
            </div>

            <div class="form-check">
                <Field class="form-check-input" id="exampleCheck1" name="rememberMe" type="checkbox" component={Input}/>
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
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
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)


export default LoginReduxForm;