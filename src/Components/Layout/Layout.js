import React, { Fragment } from 'react';

export default function( props ) {
    return(
        <Fragment>
            <div>Toolbar, Sidebar, Backdrop</div>
            <main>
                {props.children}
            </main>
        </Fragment>
    )
}