import classes from "./header.module.scss";

import Link from "next/link";
import AboutIcon from "@/public/icons/about-icon";
import ApigatewayIcon from "@/public/icons/apigateway-icon";
import ApiIcon from "@/public/icons/api-icon";

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href="">
                            <span>
                                <AboutIcon />
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <span>
                                <ApigatewayIcon />
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <span>
                                <ApiIcon />
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <span></span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
