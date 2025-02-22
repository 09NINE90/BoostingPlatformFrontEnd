import Header from '../layouts/home/Header.jsx';
import { Outlet } from "react-router";
import '../styles/HomePage.css';

const HomePage = () => {
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </>
    );
};

export default HomePage;