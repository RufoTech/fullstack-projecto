"use client";
import React, { useState } from "react";
import Link from "next/link";
import data from "@/data/data";

const { muraciet } = data;
const options = muraciet.options;

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const phonePattern = /^\+994\s\(\d{2}\)\s\d{3}\s\d{2}\s\d{2}$/;

export default function Muraciet() {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState("");
  const [form, setForm] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    otp: "",
  });
  const [focused, setFocused] = useState({
    name: false,
    surname: false,
    phone: false,
    email: false,
    otp: false,
  });
  const [errors, setErrors] = useState({});
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);

  // Step 1 -> Step 2
  const handleNextFromStep1 = (e) => {
    if (e) e.preventDefault();
    if (!selected) return;
    setStep(2);
  };

  // Name & Surname input handling with max length restrictions
  const handleNameChange = (e) => {
    const val = e.target.value;
    if (val.length <= 15) {
      setForm((prev) => ({ ...prev, name: val }));
      if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
    }
  };

  const handleSurnameChange = (e) => {
    const val = e.target.value;
    if (val.length <= 20) {
      setForm((prev) => ({ ...prev, surname: val }));
      if (errors.surname) setErrors((prev) => ({ ...prev, surname: "" }));
    }
  };

  // Phone input formatting (+994 (XX) XXX XX XX)
  const handlePhoneChange = (e) => {
    let inputValue = e.target.value.replace(/\D/g, "");

    if (!inputValue.startsWith("994") && inputValue !== "") {
      inputValue = "994 " + inputValue;
    }
    if (inputValue === "") {
      inputValue = "994 ";
    }

    const x = inputValue.match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);
    const formatted =
      "+" +
      (!x[2] ? x[1] : "" + x[1]) +
      (x[2]
        ? " (" +
          x[2] +
          (x[3]
            ? ") " + x[3] + (x[4] ? " " + x[4] : "") + (x[5] ? " " + x[5] : "")
            : "")
        : "");

    setForm((prev) => ({ ...prev, phone: formatted }));
    if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
  };

  const handlePhoneFocus = () => {
    setFocused((prev) => ({ ...prev, phone: true }));
    if (!form.phone.startsWith("+994")) {
      setForm((prev) => ({ ...prev, phone: "+994 " }));
    }
  };

  const handlePhoneBlur = () => {
    setFocused((prev) => ({ ...prev, phone: false }));
    if (form.phone === "+994 " || form.phone === "+994") {
      setForm((prev) => ({ ...prev, phone: "" }));
    }
  };

  const handleEmailChange = (e) => {
    setForm((prev) => ({ ...prev, email: e.target.value }));
    if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
  };

  const validateStep2 = () => {
    const errs = {};
    if (!form.name.trim()) {
      errs.name = muraciet.errors.name;
    }
    if (!form.surname.trim()) {
      errs.surname = muraciet.errors.surname;
    }
    if (!phonePattern.test(form.phone)) {
      errs.phone = muraciet.errors.phone;
    }
    if (!emailPattern.test(form.email)) {
      errs.email = muraciet.errors.email;
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Step 2 Davam et -> triggers confirmation popup
  const handleStep2Next = (e) => {
    if (e) e.preventDefault();
    if (validateStep2()) {
      setShowConfirmPopup(true);
    }
  };

  // Popup confirmation -> Step 3 (OTP)
  const handleConfirmPopup = () => {
    setShowConfirmPopup(false);
    setStep(3);
  };

  // OTP submit -> Step 4
  const handleOtpChange = (e) => {
    const val = e.target.value.slice(0, 4);
    setForm((prev) => ({ ...prev, otp: val }));
    if (errors.otp) setErrors((prev) => ({ ...prev, otp: "" }));
  };

  const handleOtpSubmit = (e) => {
    if (e) e.preventDefault();
    if (!form.otp || form.otp.length !== 4) {
      setErrors({
        otp: muraciet.errors.otp,
      });
      return;
    }
    setStep(4);
  };

  // Check if step 2 form is filled
  const isStep2Filled =
    form.name.trim() !== "" &&
    form.surname.trim() !== "" &&
    form.phone.trim() !== "" &&
    form.email.trim() !== "";

  return (
    <div className="min-h-screen  text-[#13171a] font-['Visby_CF',system-ui,-apple-system,sans-serif] p-0 m-0 box-border">
      <div className="max-w-[856px] mx-auto px-4 w-full">
        <main className="pt-3 pb-10">
          <section className="flex flex-col gap-1">
            {/* Top Logo & Title Card */}
            <div className="bg-white rounded-[20px] block p-6 text-center">
              <Link
                href="/"
                className="mx-auto text-center hidden md:block no-underline"
              >
                <span className="text-[#20172A] font-[family-name:var(--font-geist-mono)] text-[22px] font-bold tracking-[-1.5px]">
                  Webora
                </span>
              </Link>
              <h1 className="font-['Visby_CF_Bold',sans-serif] text-[20px] leading-[28px] font-bold text-[#20172A] text-center mt-5 mb-0">
                {muraciet.title}
              </h1>
            </div>

            {/* Form Section */}
            <form
              id="apply_form"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* PAGE 1: Course Category Selection */}
              {step === 1 && (
                <div className="bg-white rounded-[20px] overflow-hidden" id="page1">
                  <div className="p-[20px_24px] border-b border-[#f4f6fa] flex items-center justify-between">
                    <h6 className="font-['Visby_CF_DemiBold',sans-serif] text-[18px] leading-[28px] font-semibold text-[#13171a] m-0 flex items-center gap-2 flex-wrap lg:flex-nowrap">
                      <span className="block">{muraciet.heading} </span>
                      <span className="block text-[#9ba5b5]">{muraciet.step1Hint}</span>
                    </h6>
                    <button
                      type="button"
                      className={`hidden lg:inline-flex px-4 py-[10px] rounded-[12px] gap-2 text-[14px] leading-[20px] font-['Visby_CF_DemiBold',sans-serif] font-semibold justify-center items-center border-0 transition-all duration-300 ${
                        !selected
                          ? "bg-[#cdd4e0] text-[#62717c] cursor-not-allowed"
                          : "bg-[#6537A6] text-white cursor-pointer hover:bg-[#48345d]"
                      }`}
                      disabled={!selected}
                      onClick={handleNextFromStep1}
                    >
                      {muraciet.continueLabel}
                    </button>
                  </div>
                  <div className="p-5 grid grid-cols-1 lg:grid-cols-2 gap-2">
                    {options.map((opt) => {
                      const isChecked = selected === opt.id;
                      return (
                        <label
                          key={opt.id}
                          className={`p-[16px_20px] rounded-[16px] flex gap-3 overflow-hidden border cursor-pointer items-start select-none ${
                            isChecked
                              ? "border-[#6537A6] bg-[#6537A6]/[0.08]"
                              : "border-transparent bg-[#f4f6fa] hover:bg-[#ebeef2]"
                          }`}
                          onClick={() => setSelected(opt.id)}
                        >
                          <div className="relative flex items-center justify-center shrink-0 mt-1">
                            <input
                              type="radio"
                              name="apply"
                              id={opt.id}
                              value={opt.id}
                              checked={isChecked}
                              onChange={() => setSelected(opt.id)}
                              className="sr-only"
                            />
                            {isChecked ? (
                              <svg
                                className="w-5 h-5 block"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM17.0303 9.53033C17.3232 9.23744 17.3232 8.76256 17.0303 8.46967C16.7374 8.17678 16.2626 8.17678 15.9697 8.46967L10.5 13.9393L8.03033 11.4697C7.73744 11.1768 7.26256 11.1768 6.96967 11.4697C6.67678 11.7626 6.67678 12.2374 6.96967 12.5303L9.96967 15.5303C10.2626 15.8232 10.7374 15.8232 11.0303 15.5303L17.0303 9.53033Z"
                                  fill="#6537A6"
                                />
                              </svg>
                            ) : (
                              <div className="w-5 h-5 rounded-full border-[1.5px] border-[#8793A1] bg-transparent" />
                            )}
                          </div>
                          <div className="overflow-hidden w-[calc(100%-30px)] cursor-pointer">
                            <h3 className="font-['Visby_CF_DemiBold',sans-serif] text-[14px] leading-[20px] font-semibold text-[#13171a] mb-[2px] m-0">
                              {opt.title}
                            </h3>
                            <p className="font-['Visby_CF_Medium',sans-serif] text-[12px] leading-[16px] font-medium text-[#62717c] m-0">
                              {opt.desc}
                            </p>
                          </div>
                        </label>
                      );
                    })}
                    <button
                      type="button"
                      className={`flex lg:hidden mt-[17px] col-span-full w-full px-4 py-[10px] rounded-[12px] gap-2 text-[14px] leading-[20px] font-['Visby_CF_DemiBold',sans-serif] font-semibold justify-center items-center border-0 transition-all duration-300 ${
                        !selected
                          ? "bg-[#cdd4e0] text-[#62717c] cursor-not-allowed"
                          : "bg-[#6537A6] text-white cursor-pointer hover:bg-[#48345d]"
                      }`}
                      disabled={!selected}
                      onClick={handleNextFromStep1}
                    >
                      {muraciet.continueLabel}
                    </button>
                  </div>
                </div>
              )}

              {/* PAGE 2: Contact Info Form */}
              {step === 2 && (
                <div className="bg-white rounded-[20px] overflow-hidden" id="page2">
                  <div className="p-[20px_24px] border-b border-[#f4f6fa] flex items-center justify-between">
                    <h6 className="font-['Visby_CF_DemiBold',sans-serif] text-[18px] leading-[28px] font-semibold text-[#13171a] m-0 flex items-center gap-2 flex-wrap lg:flex-nowrap">
                      <span className="block">{muraciet.heading} </span>
                      <span className="block text-[#9ba5b5]">{muraciet.step2Hint}</span>
                    </h6>
                    <button
                      type="button"
                      className={`hidden lg:inline-flex px-4 py-[10px] rounded-[12px] gap-2 text-[14px] leading-[20px] font-['Visby_CF_DemiBold',sans-serif] font-semibold justify-center items-center border-0 transition-all duration-300 ${
                        !isStep2Filled
                          ? "bg-[#cdd4e0] text-[#62717c] cursor-not-allowed"
                          : "bg-[#6537A6] text-white cursor-pointer hover:bg-[#48345d]"
                      }`}
                      disabled={!isStep2Filled}
                      onClick={handleStep2Next}
                    >
                      {muraciet.continueLabel}
                    </button>
                  </div>

                  <p className="px-6 text-[14px] text-gray-500 italic mt-4 mb-0">
                    {muraciet.selectedPrefix}{" "}
                    <span className="font-medium text-[#13171a] not-italic">
                      {selected}
                    </span>
                  </p>

                  <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-2">
                    {/* Name */}
                    <div className="relative col-span-1">
                      <div className="relative">
                        <input
                          type="text"
                          className={`w-full h-[56px] px-4 rounded-[14px] outline-none text-[#13171a] font-['Visby_CF_Medium',sans-serif] text-[14px] transition-all duration-200 border ${
                            form.name || focused.name ? "pt-4" : ""
                          } ${
                            errors.name
                              ? "border-[#e3152e] bg-[#e3152e]/[0.16] focus:border-[#e3152e] focus:bg-[#e3152e]/[0.16]"
                              : "border-transparent bg-[#f4f6fa] focus:border-[#6537A6] focus:bg-[#6537A6]/[0.05]"
                          }`}
                          name="name"
                          id="input-name"
                          required
                          value={form.name}
                          onChange={handleNameChange}
                          onFocus={() =>
                            setFocused((prev) => ({ ...prev, name: true }))
                          }
                          onBlur={() =>
                            setFocused((prev) => ({ ...prev, name: false }))
                          }
                        />
                        <label
                          htmlFor="input-name"
                          className={`absolute left-4 pointer-events-none transition-all duration-200 font-['Visby_CF_Medium',sans-serif] text-[#62717c] m-0 ${
                            form.name || focused.name
                              ? "bottom-[35px] text-[12px] leading-[16px]"
                              : "bottom-[20px] text-[14px] leading-[20px]"
                          }`}
                        >
                          Ad
                        </label>
                      </div>
                      {errors.name && (
                        <p className="text-[12px] leading-[16px] text-[#e3152e] font-['Visby_CF_Medium',sans-serif] mt-[6px] mb-0">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Surname */}
                    <div className="relative col-span-1">
                      <div className="relative">
                        <input
                          type="text"
                          className={`w-full h-[56px] px-4 rounded-[14px] outline-none text-[#13171a] font-['Visby_CF_Medium',sans-serif] text-[14px] transition-all duration-200 border ${
                            form.surname || focused.surname ? "pt-4" : ""
                          } ${
                            errors.surname
                              ? "border-[#e3152e] bg-[#e3152e]/[0.16] focus:border-[#e3152e] focus:bg-[#e3152e]/[0.16]"
                              : "border-transparent bg-[#f4f6fa] focus:border-[#6537A6] focus:bg-[#6537A6]/[0.05]"
                          }`}
                          name="surname"
                          id="input-surname"
                          required
                          value={form.surname}
                          onChange={handleSurnameChange}
                          onFocus={() =>
                            setFocused((prev) => ({ ...prev, surname: true }))
                          }
                          onBlur={() =>
                            setFocused((prev) => ({ ...prev, surname: false }))
                          }
                        />
                        <label
                          htmlFor="input-surname"
                          className={`absolute left-4 pointer-events-none transition-all duration-200 font-['Visby_CF_Medium',sans-serif] text-[#62717c] m-0 ${
                            form.surname || focused.surname
                              ? "bottom-[35px] text-[12px] leading-[16px]"
                              : "bottom-[20px] text-[14px] leading-[20px]"
                          }`}
                        >
                          Soyad
                        </label>
                      </div>
                      {errors.surname && (
                        <p className="text-[12px] leading-[16px] text-[#e3152e] font-['Visby_CF_Medium',sans-serif] mt-[6px] mb-0">
                          {errors.surname}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="relative col-span-1 lg:col-span-2">
                      <div className="relative">
                        <input
                          type="tel"
                          className={`w-full h-[56px] px-4 rounded-[14px] outline-none text-[#13171a] font-['Visby_CF_Medium',sans-serif] text-[14px] transition-all duration-200 border ${
                            form.phone || focused.phone ? "pt-4" : ""
                          } ${
                            errors.phone
                              ? "border-[#e3152e] bg-[#e3152e]/[0.16] focus:border-[#e3152e] focus:bg-[#e3152e]/[0.16]"
                              : "border-transparent bg-[#f4f6fa] focus:border-[#6537A6] focus:bg-[#6537A6]/[0.05]"
                          }`}
                          name="phone"
                          id="input-phone"
                          required
                          value={form.phone}
                          onChange={handlePhoneChange}
                          onFocus={handlePhoneFocus}
                          onBlur={handlePhoneBlur}
                        />
                        <label
                          htmlFor="input-phone"
                          className={`absolute left-4 pointer-events-none transition-all duration-200 font-['Visby_CF_Medium',sans-serif] text-[#62717c] m-0 ${
                            form.phone || focused.phone
                              ? "bottom-[35px] text-[12px] leading-[16px]"
                              : "bottom-[20px] text-[14px] leading-[20px]"
                          }`}
                        >
                          Telefon nömrəsi
                        </label>
                      </div>
                      {errors.phone && (
                        <p className="text-[12px] leading-[16px] text-[#e3152e] font-['Visby_CF_Medium',sans-serif] mt-[6px] mb-0">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="relative col-span-1 lg:col-span-2">
                      <div className="relative">
                        <input
                          type="email"
                          className={`w-full h-[56px] px-4 rounded-[14px] outline-none text-[#13171a] font-['Visby_CF_Medium',sans-serif] text-[14px] transition-all duration-200 border ${
                            form.email || focused.email ? "pt-4" : ""
                          } ${
                            errors.email
                              ? "border-[#e3152e] bg-[#e3152e]/[0.16] focus:border-[#e3152e] focus:bg-[#e3152e]/[0.16]"
                              : "border-transparent bg-[#f4f6fa] focus:border-[#6537A6] focus:bg-[#6537A6]/[0.05]"
                          }`}
                          name="email"
                          id="input-mail"
                          required
                          value={form.email}
                          onChange={handleEmailChange}
                          onFocus={() =>
                            setFocused((prev) => ({ ...prev, email: true }))
                          }
                          onBlur={() =>
                            setFocused((prev) => ({ ...prev, email: false }))
                          }
                        />
                        <label
                          htmlFor="input-mail"
                          className={`absolute left-4 pointer-events-none transition-all duration-200 font-['Visby_CF_Medium',sans-serif] text-[#62717c] m-0 ${
                            form.email || focused.email
                              ? "bottom-[35px] text-[12px] leading-[16px]"
                              : "bottom-[20px] text-[14px] leading-[20px]"
                          }`}
                        >
                          Elektron mail
                        </label>
                      </div>
                      {errors.email && (
                        <p className="text-[12px] leading-[16px] text-[#e3152e] font-['Visby_CF_Medium',sans-serif] mt-[6px] mb-0">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <button
                      type="button"
                      className={`flex lg:hidden mt-[17px] col-span-full w-full px-4 py-[10px] rounded-[12px] gap-2 text-[14px] leading-[20px] font-['Visby_CF_DemiBold',sans-serif] font-semibold justify-center items-center border-0 transition-all duration-300 ${
                        !isStep2Filled
                          ? "bg-[#cdd4e0] text-[#62717c] cursor-not-allowed"
                          : "bg-[#6537A6] text-white cursor-pointer hover:bg-[#48345d]"
                      }`}
                      disabled={!isStep2Filled}
                      onClick={handleStep2Next}
                    >
                      {muraciet.continueLabel}
                    </button>
                  </div>
                </div>
              )}

              {/* PAGE 3: OTP Step */}
              {step === 3 && (
                <div className="bg-white rounded-[20px] overflow-hidden" id="page3">
                  <div className="p-[54px_20px] flex flex-col justify-center items-center">
                    <div className="w-[400px] max-w-full flex flex-col items-center">
                      <div className="w-full relative">
                        <div className="relative">
                          <input
                            type="number"
                            min="1000"
                            max="9999"
                            maxLength={4}
                            className={`w-full h-[56px] px-4 rounded-[14px] outline-none text-[#13171a] font-['Visby_CF_Medium',sans-serif] text-[14px] transition-all duration-200 border ${
                              form.otp || focused.otp ? "pt-4" : ""
                            } ${
                              errors.otp
                                ? "border-[#e3152e] bg-[#e3152e]/[0.16] focus:border-[#e3152e] focus:bg-[#e3152e]/[0.16]"
                                : "border-transparent bg-[#f4f6fa] focus:border-[#6537A6] focus:bg-[#6537A6]/[0.05]"
                            }`}
                            name="entered_otp_code"
                            id="entered_otp_code"
                            required
                            value={form.otp}
                            onChange={handleOtpChange}
                            onFocus={() =>
                              setFocused((prev) => ({ ...prev, otp: true }))
                            }
                            onBlur={() =>
                              setFocused((prev) => ({ ...prev, otp: false }))
                            }
                          />
                          <label
                            htmlFor="entered_otp_code"
                            className={`absolute left-4 pointer-events-none transition-all duration-200 font-['Visby_CF_Medium',sans-serif] text-[#62717c] m-0 ${
                              form.otp || focused.otp
                                ? "bottom-[35px] text-[12px] leading-[16px]"
                                : "bottom-[20px] text-[14px] leading-[20px]"
                            }`}
                          >
                            Nömrənizə gələn 4 rəqəmli kodu daxil edin
                          </label>
                        </div>
                        {errors.otp && (
                          <p className="text-[12px] leading-[16px] text-[#e3152e] font-['Visby_CF_Medium',sans-serif] mt-[6px] mb-0">
                            {errors.otp}
                          </p>
                        )}
                      </div>
                      <div className="w-full mt-6">
                        <button
                          type="submit"
                          className={`w-full px-4 py-[10px] rounded-[12px] gap-2 text-[14px] leading-[20px] font-['Visby_CF_DemiBold',sans-serif] font-semibold inline-flex justify-center items-center border-0 transition-all duration-300 ${
                            form.otp.length !== 4
                              ? "bg-[#cdd4e0] text-[#62717c] cursor-not-allowed"
                              : "bg-[#6537A6] text-white cursor-pointer hover:bg-[#48345d]"
                          }`}
                          disabled={form.otp.length !== 4}
                          onClick={handleOtpSubmit}
                        >
                          {muraciet.applyLabel}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* PAGE 4: Sending Animation & Result */}
              {step === 4 && (
                <div
                  className="bg-white rounded-[20px] overflow-hidden relative"
                  id="page4"
                >
                  <div className="p-[20px_24px] border-b border-[#f4f6fa] flex items-center justify-between">
                    <h4 className="font-['Visby_CF_DemiBold',sans-serif] text-[18px] leading-[28px] font-semibold text-[#13171a] m-0">
                      {muraciet.sendingTitle}
                    </h4>
                  </div>

                  <div
                    className="p-[54px_20px] flex flex-col justify-center items-center text-center"
                    id="page3_in"
                  >
                    <div>
                      <svg
                        className="w-[50px] h-[50px] mb-[30px]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 200 200"
                      >
                        <rect
                          fill="#6537A6"
                          stroke="#6537A6"
                          strokeWidth="15"
                          width="30"
                          height="30"
                          x="25"
                          y="85"
                        >
                          <animate
                            attributeName="opacity"
                            calcMode="spline"
                            dur="2"
                            values="1;0;1;"
                            keySplines=".5 0 .5 1;.5 0 .5 1"
                            repeatCount="indefinite"
                            begin="-.4"
                          />
                        </rect>
                        <rect
                          fill="#6537A6"
                          stroke="#6537A6"
                          strokeWidth="15"
                          width="30"
                          height="30"
                          x="85"
                          y="85"
                        >
                          <animate
                            attributeName="opacity"
                            calcMode="spline"
                            dur="2"
                            values="1;0;1;"
                            keySplines=".5 0 .5 1;.5 0 .5 1"
                            repeatCount="indefinite"
                            begin="-.2"
                          />
                        </rect>
                        <rect
                          fill="#6537A6"
                          stroke="#6537A6"
                          strokeWidth="15"
                          width="30"
                          height="30"
                          x="145"
                          y="85"
                        >
                          <animate
                            attributeName="opacity"
                            calcMode="spline"
                            dur="2"
                            values="1;0;1;"
                            keySplines=".5 0 .5 1;.5 0 .5 1"
                            repeatCount="indefinite"
                            begin="0"
                          />
                        </rect>
                      </svg>
                    </div>
                    <div id="subresult">
                      <p className="font-['Visby_CF_DemiBold',sans-serif] text-[16px] leading-[24px] text-[#13171a] m-0">
                        {muraciet.successText}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <input type="hidden" name="ca_form_submit" value="1" />
              <input type="hidden" name="ca_form_name" value="Apply form" />
            </form>
          </section>
        </main>

        {/* Confirmation Modal (Awareness Popup Overlay) */}
        {showConfirmPopup && (
          <div
            className="fixed inset-0 bg-black/55 flex items-center justify-center z-[9999] p-4 transition-all duration-200"
            id="popupOverlay"
            aria-modal="true"
            role="dialog"
          >
            <div
              className="bg-white text-[#20172A] w-[500px] max-w-[90%] rounded-[20px] p-[26px_28px] shadow-[0_18px_45px_rgba(0,0,0,0.18)] text-center font-['Visby_CF_Medium',sans-serif]"
              role="document"
            >
              <p className="m-0 leading-[1.45] text-[16px] text-[#20172A]">
                <strong className="font-['Visby_CF_Bold',sans-serif] font-bold">Diqqət:</strong>{" "}
                {muraciet.popupText.replace("{selected}", selected)}
              </p>
              <div className="mt-5 flex gap-3">
                <button
                  type="button"
                  className="flex-1 border-0 rounded-[10px] py-3 px-4 text-[15px] cursor-pointer inline-flex items-center justify-center gap-2 font-['Visby_CF_DemiBold',sans-serif] font-semibold transition-all duration-200 bg-[#F1F6F9] text-[#20172A] hover:bg-[#E3E9EF]"
                  id="btnBack"
                  onClick={() => setShowConfirmPopup(false)}
                >
                  <svg
                    className="w-[18px] h-[18px] inline-block -mb-[3px]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#000"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  {muraciet.editLabel}
                </button>
                <button
                  type="button"
                  className="flex-1 border-0 rounded-[10px] py-3 px-4 text-[15px] cursor-pointer inline-flex items-center justify-center gap-2 font-['Visby_CF_DemiBold',sans-serif] font-semibold transition-all duration-200 bg-[#6537A6] text-white hover:bg-[#493365]"
                  id="btnConfirm"
                  onClick={handleConfirmPopup}
                >
                  {muraciet.confirmLabel}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
