import { useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';

export default function Approved () {
    useEffect(()=>{
        setTimeout("window.close()", 3000);
    })

    return (<Alert variant="success">
            Successfully Authenticated!
            This page will close automatically!
    </Alert>)
}