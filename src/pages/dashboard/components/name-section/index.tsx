import React from 'react';
import styles from './styles.module.scss'
import {AiFillThunderbolt} from "react-icons/ai";

const nameSection = () => {
    return (
        <div className={styles.name_section_wrapper}>
            <p>Hi, Iman.</p>
            <div className={styles.role_button}>
                <AiFillThunderbolt />
                <span>Researcher</span>
            </div>
        </div>
    );
};

export default nameSection;