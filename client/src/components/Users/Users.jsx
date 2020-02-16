import React from 'react';
import ProfileInfo from './../Profile/ProfileInfo/ProfileInfo';
import c from './Users.module.css';
import User from './User/User'

const Users = (props) => {
    return ( 
          <>
                  <div className="container">
                        <div className="row">
                              <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className={c.content_block}>
                                          <ProfileInfo user={props.userData} status={props.status} updateUserStatus={props.updateUserStatus}/>
                                    </div>
                              </div> 
                        </div>
                  </div>
                  <div className="container">
                  <div className="row">
                        <User name="Artem Kosarev" 
                              largePhoto="https://html.crumina.net/html-olympus/img/friend1.jpg" 
                              smallPhoto="https://sun9-17.userapi.com/c846020/v846020920/105a10/Hl5kYiOYWjM.jpg"/>

                        <User name="Carol Summers" 
                              largePhoto="https://html.crumina.net/html-olympus/img/friend7.jpg" 
                              smallPhoto="https://html.crumina.net/html-olympus/img/avatar7.jpg"/>

                        <User name="Bruce Peterson" 
                              largePhoto="https://html.crumina.net/html-olympus/img/friend6.jpg" 
                              smallPhoto="https://html.crumina.net/html-olympus/img/avatar6.jpg"/>

                        <User name="Marina Valentine" 
                              largePhoto="https://html.crumina.net/html-olympus/img/friend2.jpg" 
                              smallPhoto="https://html.crumina.net/html-olympus/img/avatar2.jpg"/>

                        <User name="Chris Greyson" 
                              largePhoto="https://html.crumina.net/html-olympus/img/friend4.jpg" 
                              smallPhoto="https://html.crumina.net/html-olympus/img/avatar4.jpg"/>

                        <User name="Michael Maximoff" 
                              largePhoto="https://html.crumina.net/html-olympus/img/friend8.jpg" 
                              smallPhoto="https://html.crumina.net/html-olympus/img/avatar8.jpg"/> 

                        <User name="Elaine Dreifuss" 
                              largePhoto="https://html.crumina.net/html-olympus/img/friend5.jpg" 
                              smallPhoto="https://html.crumina.net/html-olympus/img/avatar5.jpg"/>

                        <User name="Nicholas Grissom" 
                              largePhoto="https://html.crumina.net/html-olympus/img/friend3.jpg" 
                              smallPhoto="https://html.crumina.net/html-olympus/img/avatar3.jpg"/>  

                        <User name="Marina Valentine" 
                              largePhoto="https://html.crumina.net/html-olympus/img/friend2.jpg" 
                              smallPhoto="https://html.crumina.net/html-olympus/img/avatar2.jpg"/>   

                        <User name="Bruce Peterson" 
                              largePhoto="https://html.crumina.net/html-olympus/img/friend6.jpg" 
                              smallPhoto="https://html.crumina.net/html-olympus/img/avatar6.jpg"/>                      
                  </div>
                  </div>
            </>
    )
}

export default Users;