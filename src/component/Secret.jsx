import React, { Component } from 'react';
import { withRouter} from "react-router-dom";

const Secret = ({logout, ...rest}) => {
    return ( 
        <div>
            <h1>Secret</h1>
            <button onClick={logout}>Logout</button>
        </div>
     );
}
 
export default withRouter(Secret);