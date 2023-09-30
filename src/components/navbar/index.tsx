import React, {useState} from 'react';
import styles from './styles.module.scss'
import person from '../../assets/person.jpg'
import {BiBarChartSquare, BiSolidDashboard} from "react-icons/bi";
import {HiOutlineCreditCard} from "react-icons/hi";
import {BsPerson} from "react-icons/bs";
import {IoSettingsOutline} from "react-icons/io5";
import {CiHeadphones} from "react-icons/ci";
import {Dropdown} from "antd";
import {AiOutlineDown} from "react-icons/ai";
import {useNavigate} from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate()

    const [activePage, setActivePage] = useState('Dashboard')

    const menuArray = [
        {title: 'Dashboard', icon: <BiSolidDashboard />},
        {title: 'Billing', icon: <HiOutlineCreditCard />},
        {title: 'Profile', icon: <BsPerson />},
        {title: 'Settings', icon: <IoSettingsOutline />},
        {title: 'Statistics', icon: <BiBarChartSquare />},
     ]

    const items: ({ label: JSX.Element; key: string })[] = [
        {
            key: '1',
            label: (
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.antgroup.com"
                    style={{fontFamily: 'Inter'}}
                >
                    Contact us
                </a>
            ),
        }
    ];

    const handleActivePage = (pageName: string) =>{
        if (pageName) {
            setActivePage(pageName)
            navigate(`${pageName}`)
        }

    }

    return (
        <div className={styles.navbar_wrapper}>
            <div className={styles.navbar_upper}>
                <div className={styles.navbar_logo}>
                    Logo
                </div>
                <div className={styles.navbar_user_info}>
                    <img src={person} alt="user" className={styles.image} />
                    <p>Iman Yousefi</p>
                </div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.navbar_lower}>
                <div className={styles.menu_items_wrapper}>
                    {
                        menuArray.map(item => <div
                            key={item.title}
                            className={`${styles.menu_items} ${item.title === activePage && styles.active_menu}`}
                            onClick={() => handleActivePage(item.title)}
                            >
                                {item.icon}
                                <span>{item.title}</span>
                            </div>
                        )
                    }
                    <Dropdown menu={{items}}>
                        <div className={styles.more_button}>
                            <span>More</span>
                            <AiOutlineDown />
                        </div>
                    </Dropdown>

                </div>
                <div className={styles.support}>
                    <CiHeadphones />
                    <p>Support</p>
                    <div className={styles.status_circle}></div>
                </div>
            </div>
            <div className={styles.divider}></div>

        </div>
    );
};

export default Navbar;