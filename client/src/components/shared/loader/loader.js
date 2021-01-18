import React from 'react'

import LoaderImg from '../../../assets/images/loader.svg'

const Loading = ( ) => {
    return(
        <div className="loader">
            <img src={LoaderImg} alt="Loader"/>
        </div>
        
    )
}

export default Loading;