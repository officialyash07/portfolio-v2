"use client";

import classes from "./form.module.scss";

import { useForm } from "react-hook-form";

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleSend = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(handleSend)}>
            <div className={classes.inputWrapper}>
                <label className={classes.label}>
                    Your Name <span className={classes.mandatory}>*</span>
                </label>
                <input
                    type="text"
                    {...register("name", { required: "Name is required." })}
                />
                {errors.name && (
                    <p className={classes.error}>{errors.name.message}</p>
                )}
            </div>
            <div className={classes.inputWrapper}>
                <label className={classes.label}>
                    Your Email <span className={classes.mandatory}>*</span>
                </label>
                <input
                    type="email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Invalid email address",
                        },
                    })}
                />
                {errors.email && (
                    <p className={classes.error}>{errors.email.message}</p>
                )}
            </div>
            <div className={classes.inputWrapper}>
                <label className={classes.label}>
                    Your Message <span className={classes.mandatory}>*</span>
                </label>
                <textarea
                    {...register("message", {
                        required: "Message is required",
                    })}
                ></textarea>
                {errors.message && (
                    <p className={classes.error}>{errors.message.message}</p>
                )}
            </div>
            <button type="submit" className={classes.submitBtn}>
                Send
            </button>
        </form>
    );
};

export default ContactForm;
