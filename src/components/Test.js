import { useState, useEffect } from "react";
import Test2 from "./Test2";
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Test = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        setCount(count + 20)
    }, [])

    return (
        <>
            <Button variant="contained">Contained</Button>
            <Test2
                name="sadas"
                abcd="jsakdksajkd"
            ></Test2>
            <br></br>
            {/* asdasd */}
            {
                count
            }

            <button
                onClick={
                    () => {
                        setCount(count + 1);
                    }}
            >hggjhghgj</button>

        </>

    );
}

export default Test;