import React,{ useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import LoginForm from "../LoginForm/LoginForm";

function Home(props) {
    return(
        <div className="mt-2">
            <h2>Home Container</h2>
            <LoginForm />
        </div>
    )
}

export default withRouter(Home);


