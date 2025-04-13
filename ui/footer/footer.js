import clases from "./footer.module.scss";

import {
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    GithubIcon,
} from "@/public/icons";

import Link from "next/link";

import HoverBounce from "../animation/hover-bounce";

const Footer = () => {
    return (
        <footer className={clases.footer}>
            <div className={clases.disclaimer}>
                &copy; 2025 <span className={clases.name}>Yash Pathik</span>.
                All rights reserved.
            </div>
            <div className={clases.socialLinks}>
                <Link
                    href="https://www.facebook.com/yashpathik.07/"
                    target="_blank"
                >
                    <HoverBounce>
                        <FacebookIcon />
                    </HoverBounce>
                </Link>
                <Link href="https://x.com/kingyash07" target="_blank">
                    <HoverBounce>
                        <TwitterIcon />
                    </HoverBounce>
                </Link>
                <Link
                    href="https://www.linkedin.com/in/yash-pathik-9b0372338/"
                    target="_blank"
                >
                    <HoverBounce>
                        <LinkedinIcon />
                    </HoverBounce>
                </Link>
                <Link href="https://github.com/officialyash07" target="_blank">
                    <HoverBounce>
                        <GithubIcon />
                    </HoverBounce>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
