import classes from "./education-item.module.scss";

import Image from "next/image";
import degreeIcon from "@/public/icons/degree.svg";
import schoolIcon from "@/public/icons/school.svg";
import badgeIcon from "@/public/icons/badge.svg";

const EducationItem = ({ title, university, description, subject, gpa }) => {
    return (
        <div className={classes.educationItem}>
            <p className={classes.title}>
                <span className={classes.icon}>
                    <Image src={degreeIcon} alt="degree icon" width={25} />
                </span>
                {title}
            </p>
            <p className={classes.university}>
                <span className={classes.icon}>
                    <Image src={schoolIcon} alt="school icon" width={25} />
                </span>
                {university}
            </p>
            <p className={classes.description}>{description}</p>
            <div className={classes.details}>
                <p className={classes.achievement}>
                    <span>
                        <Image src={badgeIcon} alt="badge icon" width={20} />
                    </span>
                    Sub: {subject}
                </p>
                <p className={classes.achievement}>
                    <span>
                        <Image src={badgeIcon} alt="badge icon" width={20} />
                    </span>
                    GPA: {gpa}
                </p>
            </div>
        </div>
    );
};

export default EducationItem;
