import styles from "./Header.module.css";
import {clearAuth, setAuth, setRole} from "../../../store/slice/authSlice.js";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {postLogout} from "../../../api/authApi.jsx";


const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = async () => {
        const logout = await postLogout()

        if (logout) {
            dispatch(setRole(''));
            dispatch(setAuth(false))
            dispatch(clearAuth())
            navigate("/signInForm");
        }

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