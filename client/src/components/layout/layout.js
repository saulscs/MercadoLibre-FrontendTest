import  React from 'react'

const Layout = ({children}) => {
    return(
        <div className="content grid">
            {children}
        </div>
    )
}

export default Layout;