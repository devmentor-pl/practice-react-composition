import React from "react"

export default function TableBody (props) {
    const {children} = props;
    
    return(
        <tbody>
           {children}
        </tbody>
    )
}