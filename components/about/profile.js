import classes from "./profile.module.scss";

import Image from "next/image";

import profile from "@/public/profile.jpg";

const ProfileImg = () => {
    return (
        <div className={classes.profile}>
            <Image
                src={profile}
                alt="This is the profile photo of Yash Pathik."
            />
        </div>
    );
};

export default ProfileImg;
