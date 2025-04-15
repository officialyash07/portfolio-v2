import classes from "./skill.module.scss";

import Image from "next/image";

const Skill = ({ src, alt, name }) => {
    return (
        <div className={classes.skill}>
            <Image src={src} alt={alt} width={20} />
            <span>{name}</span>
        </div>
    );
};

export default Skill;
