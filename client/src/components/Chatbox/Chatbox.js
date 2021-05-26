import { useState,useEffect } from 'react';
import styles from './Chatbox.modules.css';


export const Chatbox = () => {
    
    const [message, setMessage] = useState('');

    useEffect(() =>{
        fetch('/users')
        .then((res) => res.json())
        .then((data) => setMessage(data.message));
    },[])

    return (
        <div className={styles.container}>
            <h1>React</h1>
            <p>{ message }</p>
        </div>
    );
}
