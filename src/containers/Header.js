import Brand from "../components/Brand";
import Navigation from "../components/Navigation";

function Header() {
    return (
        <header class="px-40 pt-5 flex items-center justify-between">
            <Brand />
            <Navigation />
        </header>
    );
}

export default Header;