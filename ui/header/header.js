import classes from "./header.module.scss";

import Link from "next/link";
import ApigatewayIcon from "@/public/icons/ApigatewayIcon";

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href="">
                            <ApigatewayIcon />
                        </Link>
                    </li>
                    <li>
                        <Link href=""></Link>
                    </li>
                    <li>
                        <Link href=""></Link>
                    </li>
                    <li>
                        <Link href=""></Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
