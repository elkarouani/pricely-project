import Brand from "../components/Header/Brand";
import Navigation from "../components/Header/Navigation";

function Header() {
    return (
        <header class="px-40 pt-5 flex items-center justify-between">
            <Brand />
            <Navigation />
        </header>
    );
}

export default Header;