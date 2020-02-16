import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Quill from 'react-quill'
import { connect } from 'react-redux';
import { create } from '../../../../redux/profile-reducer';

const PostForm = ({ create }) => {
  const [body, setBody] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    create({ body })
    setBody('')
  }

  return (
    <div className="card mb-4">
      <div className="card-body">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <Quill
              placeholder="What's up?"
              theme="snow"
              modules={{
                toolbar: [
                  ['bold', 'italic', 'underline', 'strike'],
                  ['link', 'image', 'video'],
                  ['clean']
                ]
              }}
              value={body}
              onChange={value => {
                setBody(value)
              }}
            />
          </div>
          <div className="btn-group float-right">
            <button type="submit" className="btn btn-dark">Share</button>
          </div>
        </form>
      </div>
    </div>
  )
}

PostForm.propTypes = {
  create: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({ auth: state.auth })

export default connect(mapStateToProps, { create })(PostForm)




/* import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {requiredField, maxLengthCreator} from '../../../../utils/validators/validators';
import {Textarea} from './../../../Common/FormsControls/FormsControls';

const maxLength30 = maxLengthCreator(30);

const ProfileForm = (props) => { 
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[requiredField, maxLength30]} component={Textarea} placeholder="Что у вас нового?" name="post"/>
            </div>
            <div>
                <button>App post</button>
            </div>         
        </form>
    )
}
const ProfileFormRedux = reduxForm({ form: 'ProfileFormRedux' })(ProfileForm) 

export default ProfileFormRedux; */