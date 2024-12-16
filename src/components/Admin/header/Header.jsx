import styles from "./Header.module.css";
import {logout} from "../../../store/authSlice.js";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";


const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout())
            .unwrap()
            .then(() => {
                console.log("Logged out successfully");
                navigate("/signInForm");
            })
            .catch((error) => {
                console.error("Logout failed:", error);
            });
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                Dead PackMan <span>Admin</span>
            </div>
            <nav>
                <button onClick={handleLogout} className={styles.profileBtn}>
                    Logout
                </button>
            </nav>
        </header>
    );
}

export default Header;