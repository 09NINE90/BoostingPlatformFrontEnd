import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./components/home/HomePage.jsx";
import Navigation from "./components/navigation/Navigation.jsx";
import LoginForm from "./components/login/LoginForm.jsx";

import GamePage from "./components/Admin/Game/gamePage/GamePage.jsx";
import OrderPage from "./components/Admin/Order/orderPage/OrderPage.jsx";
import AppealsPage from "./components/Admin/Appeals/appealsPage/AppealsPage.jsx";
import PayoutsPage from "./components/Admin/Payout/payoutsPage/PayoutsPage.jsx";
import UsersPage from "./components/Admin/User/userPage/UserPage.jsx";
import WorkingAppealsPage from "./components/Admin/WorkingAppeal/workingAppealsPage/WorkingAppealsPage.jsx";
import StatisticsPage from "./components/Admin/Statistic/statisticsPage/StatisticsPage.jsx";
import ReviewPage from "./components/Admin/Review/reviewsPage/ReviewPage.jsx";
import ChatPage from "./components/Admin/Chat/chatPage/ChatPage.jsx";
import ServicesPage from "./components/Admin/Service/servicePage/ServicesPage.jsx";

import DashboardPage from "./components/Booster/Dashboard/DashboardPage.jsx";
import Order from "./components/Booster/Orders/OrderPage.jsx";
import GameTags from "./components/Booster/gameTags/GameTagsPage.jsx";
import ProfilePage from "./components/Manager/profile/Profile.jsx";

const App = () => {
    return (
        <>
            <Navigation />
            <Routes>
                <Route
                    exact
                    path="/homePage"
                    element={<HomePage />}
                />
                <Route
                    exact
                    path="/loginForm"
                    element={<LoginForm />}
                />
                <Route
                    exact
                    path="/servicesPage"
                    element={<ServicesPage />}
                />
                <Route
                    exact
                    path="/Admin/gamePage"
                    element={<GamePage />}
                />

                <Route
                    exact
                    path="/Booster/dashboardPage"
                    element={<DashboardPage />}
                />
                <Route
                    exact
                    path="/Booster/orderPage"
                    element={<Order />}
                />
                <Route
                    exact
                    path="/Booster/gameTagsPage"
                    element={<GameTags />}
                />
                <Route
                    exact
                    path="/Manager/profile"
                    element={<ProfilePage />}
                />
                <Route
                    exact
                    path="/Admin/orderPage"
                    element={<OrderPage />}
                />
                <Route
                    exact
                    path="/Admin/appealsPage"
                    element={<AppealsPage />}
                />
                <Route
                    exact
                    path="/Admin/payoutsPage"
                    element={<PayoutsPage />}
                />
                <Route
                    exact
                    path="/Admin/usersPage"
                    element={<UsersPage />}
                />
                <Route
                    exact
                    path="/Admin/workingAppealsPage"
                    element={<WorkingAppealsPage />}
                />
                <Route
                    exact
                    path="/Admin/statisticsPage"
                    element={<StatisticsPage />}
                />
                <Route
                    exact
                    path="/Admin/reviewsPage"
                    element={<ReviewPage />}
                />
                <Route
                    exact
                    path="/Admin/chatPage"
                    element={<ChatPage />}
                />
                <Route
                    exact
                    path="/Admin/servicePage"
                    element={<ServicesPage />}
                />
            </Routes>
        </>
    );
};

export default App;
