import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'

export default function Page1() {
    const { data } = useContext(DataContext);
    return (
        <div>
            <h1>Page 1</h1>
            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>
            <hr />
        </div>
    )
}
