import { useLocation, useNavigate } from "react-router-dom";
const Header =() => {
    const location = useLocation();
    const navigate = useNavigate();

    const Startover = () => {
        navigate("/");
    };
    
    const showStartOver = location.pathname === "/Showgame";
    
    return (
        <header>
            <h1>Free to Game</h1>
            {showStartOver && (
                <button onClick={Startover}>
                    Start Over
                </button>
            )}
        </header>
    );
}
export default Header;