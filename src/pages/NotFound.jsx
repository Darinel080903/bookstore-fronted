import React from 'react'
import Navbar from '../components/Navbar'
import Advice from '../components/Advice'
import Footer from '../components/Footer'
import styles from '../css/NotFound.module.css'
AiOutlineMeh
import { AiOutlineMeh } from "react-icons/ai"


function NotFound() {
    return (
        <div>
            <Navbar />
            <Advice />
            <div className={styles.notFound}>
                <p>
                    404 Error Not Found 
                </p>
                <AiOutlineMeh/>
            </div>
            <Footer />
        </div>
    )
}

export default NotFound