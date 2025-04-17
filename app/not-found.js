import classes from "./page.module.scss";

import Image from "next/image";

import notfoundImg from "@/public/not-found.jpg";

const NotFound = () => {
    return (
        <main>
            <div className={classes.notfoundWrapper}>
                <h1 className={classes.title}>404 Page Not Found</h1>
                <p className={classes.tagLine}>
                    This page doesn&apos;t exist. Maybe Thanos snapped it away?
                </p>
                <Image src={notfoundImg} alt="Not Found" />
            </div>
        </main>
    );
};

export default NotFound;
