import React from 'react';
import c from './Header.module.css';
import ControlBlock from './ControlBlock/ControlBlock';
import {Search} from './../SVG/Svg-icons';
import {NavLink} from 'react-router-dom';
import HeaderResponsive from './HeaderResponsive/HeaderResponsive';

const Header = (props) => {
  return (
    <>
      <header className={`${c.header}`}>
        
        <div className={c.page_title}>
              <h6>{props.currentPage}</h6>
        </div>

        <div className={c.header_wrapper}>
          <form className={`${c.search_users}` + ` ` + `${c.w_search}`}>
            <div className={c.form_group}>
              <div className={`${c.from_control}` + ` ` + `${c.selectize_control}`}>
                <input className={c.search_input} type="text" autocomplete="off" tabindex="" placeholder="Search here people or pages..." />
              </div>
              <button >
                <Search />
              </button>
            </div>
          </form>
          <a href="#" className={c.find_friends}>Find friends</a>

          { props.isAuthenticated ? <ControlBlock logout={props.logout} user={props.user} isAuthenticated={props.isAuthenticated}/> 
                                  : <NavLink to="Login">Login</NavLink> }

        </div>
      </header>
      
      <HeaderResponsive />
    </>
  );
}

export default Header;