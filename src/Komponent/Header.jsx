import { useLocation, useNagigate } from "react-router-dom";
const Header =() => {
    const location = useLocation();
    const navigate = useNagigate();

    const Startover = () => {
        navigate("/");
    };

    const showStartOver = location.pathname === "/Showgame"
}