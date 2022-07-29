import React from 'react'
import { Outlet, Link } from "react-router-dom";


const Right = () => {
    return (
        
            <div class="col-sm-8">
                <h2>TITLE HEADING</h2>
                <h5>Title description, Dec 7, 2020</h5>
                <Outlet />
                
                <h2 class="mt-5">TITLE HEADING</h2>
                <h5>Title description, Sep 2, 2020</h5>
                <div class="fakeimg">Fake Image</div>
            </div>

        
    )
}

export default Right