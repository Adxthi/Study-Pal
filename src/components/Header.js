import logo from '../Assets/LogoApp.png';
import '../Assets/AppCss.css';

export default function Header() {
    return (
        <div className="header">
            <div>
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <div>
                <h1 className="header-title">Study Pal</h1>
            </div>
        </div>
    );
}
