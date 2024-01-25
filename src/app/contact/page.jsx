"use client"

import Container from "../utils/Container";
import contactUs from "../../../public/contact_us.json"
import Lottie from "lottie-react";
import emailjs from "@emailjs/browser"
import { useRef, useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import toast from "react-hot-toast";


const ContactUs = () => {
    const [loading, setLoading] = useState(false);
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.sendForm('service_nbmux6f', 'template_t3455i9', form.current, 'N7sCXhxC1NSQ36mKf')
            .then((result) => {
                console.log(result.text);
                if (result.text) {
                    toast.success("Your Message Has been sent", { duration: 5000 });
                    form.current.reset();
                }
            })
            .catch((error) => {
                console.log(error.text);
            })
            .finally(() => {
                setLoading(false);
            });


    };
    return (
        <div>
            <h1 className="text-3xl lg:text-5xl text-center font-bold mt-12">Contact Us</h1>
            <Container>
                <div className="mt-12 flex gap-12 items-center justify-center flex-col lg:flex-row">
                    <div className="flex-1 p-5 lg:p-0 ">
                        <Lottie animationData={contactUs} loop={true} width={320} height={400} />

                    </div>
                    <div className="my-4 mx-auto max-w-xl bg-white font-[sans-serif] flex-1 p-5 lg:p-0">
                        <form className="mt-0 lg:mt-8 space-y-4" id="contactForm" ref={form} onSubmit={sendEmail}>
                            {/* <input
                                type="text"
                                placeholder="Name"
                                className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-[#FC440C]"
                                name="user_name"
                                required
                            /> */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-white">Name</span>
                                </label>
                                <input
                                    type="name"
                                    placeholder="Name"
                                    name="user_name"
                                    className="input  input-bordered rounded-none"
                                    required />
                            </div>
                            {/* <input
                                type="email"
                                placeholder="Email"
                                className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-[#FC440C]"
                                name="user_email"
                                required
                            /> */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-white">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="user_email"
                                    className="input  input-bordered rounded-none"
                                    required />
                            </div>
                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text dark:text-white">Comment</span>
                                </label>
                                <textarea
                                    placeholder="Message"
                                    rows={6}
                                    // className="w-full rounded-md px-4 bg-gray-100 text-sm pt-3 outline-[#FC440C]"
                                    className="input  input-bordered rounded-none w-full h-24"
                                    defaultValue={""}
                                    name="message"
                                    required
                                />
                            </div>
                            {loading ? <button
                                type="button"
                                className="btn text-white bg-slate-800 font-semibold rounded-none text-xl  w-full"
                            >
                                <ImSpinner9 className="animate-spin w-full mx-auto"></ImSpinner9>
                            </button> :
                                <input
                                    type="submit"
                                    value="Send"
                                    className="btn  text-white  bg-slate-800  border-none rounded-none w-full"
                                />}
                        </form>
                    </div>

                </div>
            </Container>


        </div>
    );
};

export default ContactUs;