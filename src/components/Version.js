import React from "react";
import { format } from 'date-fns';

const Version = ({ todayDate }) => {

    const currentYear = format(todayDate, 'yyyy');

    return(
        <>
            <div className="version">
                <div> © 2023 - {currentYear} </div>
                <div style={{fontSize: '8px'}}> V1.03.2024 </div>
            </div> 
        </>
    );
};

export default Version;