import classes from "./social-links.module.scss";

import Link from "next/link";

import {
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    GithubIcon,
} from "@/public/icons";

import HoverBounce from "@/ui/animation/hover-bounce";

const Links = () => {
    return (
        <div className={classes.socialLinks}>
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
    );
};

export default Links;
