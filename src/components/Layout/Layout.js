import React from 'react';

import Aux from '../../hoc/auxx';
import classes from './Layout.css';

const layout = (props) => (
    <Aux>
        <div>Tollbar,Sidebar,Backdrop</div>
        <main className = {classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;