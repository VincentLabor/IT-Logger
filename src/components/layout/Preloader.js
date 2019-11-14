import React from 'react';

const Preloader = () => {
 
//This entire thing inside of the return is the indeterminate progress bar. 

    return(
        <div className='progress blue lighten-4'>
            <div className='indeterminate'>
            </div>
        </div>
    );
}

export default Preloader;