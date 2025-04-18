"use client";

import classes from "./form.module.scss";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const formRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const handleSend = (data) => {
        setIsSubmitting(true);
        setSubmitSuccess(false);
        setSubmitError(null);

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

        emailjs
            .sendForm(serviceId, templateId, formRef.current, publicKey)
            .then((result) => {
                console.log("Email sent successfully:", result.text);
                setSubmitSuccess(true);
                reset();
            })
            .catch((error) => {
                console.error("Failed to send email:", error);
                setSubmitError(
                    "Failed to send your message. Please try again later."
                );
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <>
            <form ref={formRef} onSubmit={handleSubmit(handleSend)}>
                <div className={classes.inputWrapper}>
                    <label className={classes.label}>
                        Your Name <span className={classes.mandatory}>*</span>
                    </label>
                    <input
                        type="text"
                        name="from_name"
                        {...register("from_name", {
                            required: "Name is required.",
                        })}
                    />
                    {errors.from_name && (
                        <p className={classes.error}>
                            {errors.from_name.message}
                        </p>
                    )}
                </div>
                <div className={classes.inputWrapper}>
                    <label className={classes.label}>
                        Your Email <span className={classes.mandatory}>*</span>
                    </label>
                    <input
                        type="email"
                        name="from_email"
                        {...register("from_email", {
                            required: "Email is required",
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Invalid email address",
                            },
                        })}
                    />
                    {errors.from_email && (
                        <p className={classes.error}>
                            {errors.from_email.message}
                        </p>
                    )}
                </div>
                <div className={classes.inputWrapper}>
                    <label className={classes.label}>
                        Your Message{" "}
                        <span className={classes.mandatory}>*</span>
                    </label>
                    <textarea
                        name="message"
                        {...register("message", {
                            required: "Message is required",
                        })}
                    ></textarea>
                    {errors.message && (
                        <p className={classes.error}>
                            {errors.message.message}
                        </p>
                    )}
                </div>
                <button
                    type="submit"
                    className={classes.submitBtn}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Sending..." : "Send"}
                </button>
            </form>
            {submitSuccess && (
                <div className={classes.successMessage}>
                    Thank you! Your message has been sent successfully.
                </div>
            )}

            {submitError && (
                <div className={classes.errorMessage}>{submitError}</div>
            )}
        </>
    );
};

export default ContactForm;
