import classes from "./page.module.scss";

import { PhoneIcon, OpenmailIcon, LocationIcon } from "@/public/icons";

import ContactForm from "@/components/contact/form";

const ContactPage = () => {
    return (
        <main className={classes.main}>
            <div className={classes.socials}>
                <p className={classes.heading}>Get in Touch</p>
                <p className={classes.social}>
                    <PhoneIcon />
                    <span className={classes.text}>+91-8076586547</span>
                </p>
                <p className={classes.social}>
                    <OpenmailIcon />
                    <span className={classes.text}>
                        yashpathik.official@gmail.com
                    </span>
                </p>
                <p className={classes.social}>
                    <LocationIcon />
                    <span className={classes.text}>Delhi, India</span>
                </p>
            </div>
            <div className={classes.formWrapper}>
                <ContactForm />
            </div>
        </main>
    );
};

export default ContactPage;
