import logo from "../images/icons/Header-logo.svg";

export function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="Место" />
        </header>
    );
}
