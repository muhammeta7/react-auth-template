import React,{ useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function DashboardComponent(props) {

    return(
        <div className="mt-2">
            Dashboard content
        </div>
    )
}

export default withRouter(DashboardComponent);