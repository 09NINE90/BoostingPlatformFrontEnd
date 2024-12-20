import ServiceSection from "../components/Admin/services/section/ServiceSection.jsx";
import GameSection from "../components/Admin/game/section/GameSection.jsx";

export const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const navigationLinks =[
    {
        name: 'Games',
        path: '/admin/games',
        component: <GameSection />
    },
    {
        name: 'Services',
        path: '/admin/services',
        component: <ServiceSection />
    }
]

