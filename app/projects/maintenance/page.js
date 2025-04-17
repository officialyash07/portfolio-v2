"use client";

import classes from "./page.module.scss";

import Image from "next/image";

import maintenanceImg from "@/public/maintenance-1.jpg";

const UnderMaintenance = () => {
    return (
        <main>
            <div className={classes.maintenance}>
                <h1 className={classes.title}>🚧 Under Maintenance</h1>
                <p className={classes.tagLine}>
                    Stark Industries is upgrading the website. Hang tight!
                </p>
                <Image src={maintenanceImg} alt="Under Maintenance" />
            </div>
        </main>
    );
};

export default UnderMaintenance;
