import React from "react"

export default function TableHeader (props) {
    const {children} = props
    return (
        <thead>
                <tr>
                    {children}
                </tr>
        </thead>
    )
}