import React from 'react';
import c from './Pogination.module.css';

const Pogination = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.count);

    let pages = [];
    for ( let i=1; i <= pagesCount; i++ ) {
        pages.push(i);
    }
    return (
        <div className={c.pagesNumber}>
            { pages.map( p => {
                    return  <span className={ props.currentPage === p ? c.active : c.normal }
                            onClick={ () => {props.onPageChanged(p)} }>{p}</span> 
            }) }
        </div>
    )
}

export default Pogination;

