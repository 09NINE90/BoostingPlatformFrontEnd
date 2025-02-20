import styles from '../../styles/Header.module.css'
import {useDispatch, useSelector} from "react-redux";
import { selectAuth } from "../../store/slice/authSlice.js";
import { useState } from "react";
import {useNavigate, Link} from "react-router-dom";
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import SignIn from "../../components/authorization/SignIn.jsx";
import SignUp from "../../components/authorization/SignUp.jsx";
import ModalTemplate from "../../utils/modalTemplate/ModalTemplate.jsx";


const Header = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modelType, setModalType] = useState("signin");

    const isAuthenticated = useSelector(selectAuth);
    const navigate = useNavigate();

    const handleProfileClick = () => {
        if(isAuthenticated){
            navigate("/profile");
        } else {
            setModalIsOpen(true);
        }
    };

    const handleCartClick = () => {
        navigate("/cart");
    };

    const renderModal = () => (
        <ModalTemplate
                isOpen={modalIsOpen}
                onClose={() => setModalIsOpen(false)}
                title={"Sign In"}
                content= {
                    modelType == "signin" ? 
                        <SignIn 
                            closeModal={() => setModalIsOpen(false)} 
                            signUpRedirect={() => setModalType("signup")}
                        />
                    :  
                        <SignUp 
                            closeModal={() => setModalIsOpen(false)}
                            signInRedirect={() => setModalType("signin")}
                        />
                }
            />
    );

    return (
        <header className={styles.header}>
            <Link to="/">
                <div className={styles.logo}>
                    V-Boosting
                </div>
            </Link>
            <FormControl className="bg-conic-900 w-auto" variant="standard">
                <Input
                    id="search_field"
                    startAdornment={
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    }
                />
            </FormControl>
            <nav className="flex justify-between flex-row" >
                <div className="px-4">
                    <IconButton onClick={handleCartClick}>
                        <ShoppingCartIcon/>
                    </IconButton>
                </div>
                <div className="px-4">
                    {isAuthenticated ? 
                        <IconButton onClick={handleProfileClick}> 
                            <PersonIcon/>  
                        </IconButton>:
                        <Button variant="outlined" onClick={handleProfileClick}>Sign In</Button>
                    }
                </div>
            </nav>
            {renderModal()}
        </header>
    );
}

export default Header;