import React from 'react';
import styles from '../../styles/Header.module.css'
import { Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';


const BoosterHeader = () => {

    const navButton = (path, title) => {
        return(
            <NavLink
                to={path}
                className={"px-5"}
            >
                <p className="">{title}</p>
            </NavLink>
        )
    };

    return (
        <header className={styles.header}>
            <Link to="/">
                <div className={""}>
                    V-Boosting
                </div>
            </Link>
            <div className="flex items-center justify-between">
                {navButton("/booster/dashboard", "Dashboard")}
                {navButton("/booster/orders", "My Orders")}
            </div>
            <nav className="flex justify-between flex-row" >
                
                <div className="px-4">
                    <IconButton > 
                        <PersonIcon/>  
                    </IconButton>
                </div>
            </nav>
        </header>
    );
}

export default BoosterHeader;