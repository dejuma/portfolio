"use client";
import React, { useState } from "react";
import Image from "next/image";
import SocialLink from "../Shared/SocialLink";
import contactImg from "/public/assets/contact.png";

import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        body: JSON.stringify({
          name,
          tel,
          email,
          subject,
          message,
        }),
        headers: {
          "content-type": "application/json",
        },
      });
    } catch (err) {
      console.error("Err", err);
    }
  };

  return (
    <div className="w-full min-h-94vh pt-10 flex flex-col">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="uppercase text-xl tracking-widest text-[#E2C6BC]">
          Contact
        </p>
        <h2 className="py-4 text-gray-100">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-lg shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={contactImg}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-4 text-gray-100">Oluwadunsin Olesin</h2>
                <p>Software Eng.</p>
                <p className="py-4">
                  Open to talk about any project or full time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div className="">
                <p className="uppercase tracking-widest pt-8">
                  {" "}
                  Connect With Me
                </p>
                <div className="flex items-center justify-between my-4 2-full  text-[#1f2937] sm:w-[80%]">
                  <SocialLink
                    href="https://www.linkedin.com/in/olesin/"
                    icon={<FaLinkedinIn />}
                    label="LinkedIn"
                    target="_blank"
                  />

                  <SocialLink
                    href="https://github.com/dejuma"
                    icon={<FaGithub />}
                    label="GitHub"
                    target="_blank"
                  />

                  <SocialLink
                    href="mailto:info@olesin.me"
                    icon={<AiOutlineMail />}
                    label="Mail"
                  />

                  <SocialLink
                    href="/contact"
                    icon={<BsFillPersonLinesFill />}
                    label="Contact"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-lg shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={onSubmit}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="border-1 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      value={tel}
                      onChange={(e) => setTel(e.target.value)}
                      className="border-1 rounded-lg p-3 flex border-gray-300"
                      type="tel"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    className="border-1 rounded-lg p-3 flex border-gray-300"
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    id="subject"
                    className="border-1 rounded-lg p-3 flex border-gray-300"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    id="message"
                    className="border-1 rounded-lg p-3 border-gray-300"
                    rows="10"
                  />
                </div>
                <button type="submit" className="w-full p-4 text-gray-100 mt-4 bg-blue-500 hover:bg-blue-600">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;