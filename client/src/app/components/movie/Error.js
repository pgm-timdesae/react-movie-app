import React from 'react'

const Error = ({children}) => {
    return (
        <div>
            <strong>Error!</strong>
            <p>
                {children}
            </p>
        </div>
    )
}

export default Error