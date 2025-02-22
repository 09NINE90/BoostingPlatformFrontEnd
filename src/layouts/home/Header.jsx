import styles from '../../styles/Header.module.css'
import {useSelector} from "react-redux";
import { selectAuth } from "../../store/slice/authSlice.js";
import { useState } from "react";
import {useNavigate, Link} from "react-router-dom";
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppBar, IconButton } from '@mui/material';
import Badge from '@mui/material/Badge';
import PersonIcon from '@mui/icons-material/Person';
import SignIn from "../../components/authorization/SignIn.jsx";
import SignUp from "../../components/authorization/SignUp.jsx";
import ModalTemplate from "../../utils/modalTemplate/ModalTemplate.jsx";
import logo from "../../assets/logo.png"


const Header = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modelType, setModalType] = useState("signin");
    const [cartCount, setCartCount] = useState(0);

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
            title={modelType == "signin" ? "Sign In" : "Sign Up"}
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
        <AppBar position='static' color="bgColor" enableColorOnDark>
            <div className="flex flex-row items-center justify-between px-5 py-2">
                <Link color='secondary' to="/">
                    <div className={styles.logo}>
                        <img className="w-15" src={logo} />
                    </div>
                </Link>
                <FormControl className="bg-conic-900" variant="standard">
                    <Input
                        id="search_field"
                        startAdornment={
                            <InputAdornment position="start">
                                <SearchIcon color='secondary' />
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <nav className="flex justify-between flex-row" >
                    <div className="px-4">
                        <Badge badgeContent={cartCount} color="primary">
                            <IconButton onClick={handleCartClick}>
                                <ShoppingCartIcon color='secondary'/>
                            </IconButton>
                        </Badge>
                    </div>
                    <div className="px-4">
                        {isAuthenticated ? 
                            <IconButton onClick={handleProfileClick}> 
                                <PersonIcon color='secondary'/>  
                            </IconButton>:
                            <Button sx={{ borderRadius: '25px' }} variant="contained" onClick={handleProfileClick}>Sign In</Button>
                        }
                    </div>
                </nav>
            </div>
            {renderModal()}
        </AppBar>
    );
}

export default Header;