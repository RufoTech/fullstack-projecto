"use client";
import React, { useState } from "react";
import data from "@/data/data";

const { apply } = data;
const options = apply.options;

export default function Apply() {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [form, setForm] = useState({ name: "", surname: "", phone: "", email: "", otp: "" });
  const [errors, setErrors] = useState({});

  const handleNextFromStep1 = (e) => {
    e.preventDefault();
    if (!selected) return;
    setShowPopup(true);
  };

  const confirmPopup = () => {
    setShowPopup(false);
    setStep(2);
  };

  const cancelPopup = () => {
    setShowPopup(false);
  };

  const validateStep2 = () => {
    const e = {};
    if (!form.name.trim()) e.name = apply.errors.name;
    if (!form.surname.trim()) e.surname = apply.errors.surname;
    if (!form.phone.trim() || form.phone.length < 9) e.phone = apply.errors.phone;
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = apply.errors.email;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleStep2Next = (e) => {
    e.preventDefault();
    if (validateStep2()) {
      setStep(3);
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (!form.otp || form.otp.length !== 4) {
      setErrors({ otp: apply.errors.otp });
      return;
    }
    setStep(4);
  };

  return (
    <>
      <section id="apply" className="bg-white w-full rounded-[20px] overflow-hidden">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* PAGE 1 */}
          <div className={step === 1 ? "block" : "hidden"} id="page1">
            <div className="p-[20px_24px] border-b border-[#F1F6F9] flex justify-between items-center max-lg:gap-3">
              <h6 className="m-0 flex items-center gap-2 max-lg:flex-col max-lg:items-start max-lg:gap-1">
                <span className="text-[#20172A] font-semibold text-[20px] leading-[28px]">
                  {apply.title}
                </span>
                <span className="text-[#8793A1] text-[16px] leading-[28px] font-normal">
                  {apply.step1Hint}
                </span>
              </h6>
              <button
                type="button"
                className={`hidden lg:inline-flex items-center justify-center px-4 py-[10px] h-10 rounded-full text-sm font-semibold transition-all duration-250 cursor-pointer shadow-[0_1px_1px_rgba(32,23,42,0.08)] ${
                  !selected
                    ? "bg-[#E3E9EF] text-[#8793A1] !cursor-not-allowed shadow-none"
                    : "bg-[#20172A] text-white hover:bg-[#3A294F] hover:shadow-[0_8px_18px_rgba(101,55,166,0.22)] hover:-translate-y-px"
                }`}
                disabled={!selected}
                onClick={handleNextFromStep1}
              >
                {apply.submitLabel}
              </button>
            </div>

            <div className="p-5 grid grid-cols-1 lg:grid-cols-2 gap-2">
              {options.map((opt) => {
                const isActive = selected === opt.id;
                return (
                  <label
                    key={opt.id}
                    className={`p-[16px_20px] rounded-[16px] flex gap-3 items-start overflow-hidden transition-all duration-300 border cursor-pointer ${
                      isActive
                        ? "border-[#6537A6] bg-[#6537A6]/10"
                        : "bg-[#F1F6F9] hover:bg-[#E3E9EF] border-transparent"
                    }`}
                  >
                    <input
                      className="w-5 h-5 border-[1.5px] border-[#8793A1] rounded-full appearance-none bg-transparent shrink-0 mt-[3px] cursor-pointer outline-none transition-all duration-200 checked:bg-[url('https://code.edu.az/wp-content/themes/codev2024/assets/icons/radio2.svg')] checked:bg-center checked:border-[#6537A6] checked:bg-white checked:bg-[length:24px_24px] checked:bg-no-repeat"
                      type="radio"
                      name="apply"
                      value={opt.id}
                      checked={isActive}
                      onChange={() => setSelected(opt.id)}
                    />
                    <div className="flex-1 cursor-pointer">
                      <h3 className="m-0 mb-[2px] text-[#20172A] font-semibold text-[16px] leading-[24px]">
                        {opt.title}
                      </h3>
                      <p className="m-0 text-[#5E6875] font-semibold text-[12px] leading-[16px] lg:text-[14px] lg:leading-[20px]">
                        {opt.desc}
                      </p>
                    </div>
                  </label>
                );
              })}
              <button
                type="button"
                className={`block lg:hidden mt-4 w-full items-center justify-center px-4 py-[10px] h-10 rounded-full text-sm font-semibold transition-all duration-250 cursor-pointer shadow-[0_1px_1px_rgba(32,23,42,0.08)] ${
                  !selected
                    ? "bg-[#E3E9EF] text-[#8793A1] !cursor-not-allowed shadow-none"
                    : "bg-[#20172A] text-white hover:bg-[#3A294F] hover:shadow-[0_8px_18px_rgba(101,55,166,0.22)] hover:-translate-y-px"
                }`}
                disabled={!selected}
                onClick={handleNextFromStep1}
              >
                {apply.submitLabel}
              </button>
            </div>
          </div>

          {/* PAGE 2 */}
          <div className={step === 2 ? "block" : "hidden"} id="page2">
            <div className="p-[20px_24px] border-b border-[#F1F6F9] flex justify-between items-center max-lg:gap-3">
              <h6 className="m-0 flex items-center gap-2 max-lg:flex-col max-lg:items-start max-lg:gap-1">
                <span className="text-[#20172A] font-semibold text-[20px] leading-[28px]">
                  {apply.step2Title}
                </span>
                <span className="text-[#8793A1] text-[16px] leading-[28px] font-normal">
                  {apply.step2Hint}
                </span>
              </h6>
              <button
                type="button"
                className="hidden lg:inline-flex items-center justify-center px-4 py-[10px] h-10 rounded-full text-sm font-semibold bg-[#20172A] text-white hover:bg-[#3A294F] hover:shadow-[0_8px_18px_rgba(101,55,166,0.22)] hover:-translate-y-px transition-all duration-250 cursor-pointer shadow-[0_1px_1px_rgba(32,23,42,0.08)]"
                onClick={handleStep2Next}
              >
                {apply.continueLabel}
              </button>
            </div>

            <div className="p-5 grid grid-cols-1 lg:grid-cols-2 gap-2">
              {/* Ad */}
              <div className="col-span-1 relative">
                <div
                  className={`relative w-full h-[56px] rounded-[14px] bg-[#F1F6F9] border transition-all duration-200 ${
                    errors.name
                      ? "!border-[#e3152e] !bg-[#e3152e]/15"
                      : "border-transparent focus-within:border-[#6537A6] focus-within:bg-[#6537A6]/10"
                  }`}
                >
                  <input
                    type="text"
                    name="name"
                    id="input-name"
                    placeholder=" "
                    className="peer w-full h-full pt-[20px] pb-[6px] px-4 bg-transparent outline-none text-[#20172A] font-medium text-[16px]"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                  <label
                    htmlFor="input-name"
                    className={`absolute left-[17px] pointer-events-none transition-all duration-200 ${
                      form.name
                        ? "top-[8px] text-[12px] leading-[16px] text-[#5E6875]"
                        : "top-[18px] text-[16px] leading-[20px] text-[#8793A1] peer-focus:top-[8px] peer-focus:text-[12px] peer-focus:leading-[16px] peer-focus:text-[#5E6875]"
                    }`}
                  >
                    {apply.fields.name}
                  </label>
                </div>
                {errors.name && (
                  <p className="mt-[6px] mb-0 text-[12px] text-[#e3152e] leading-[16px]">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Soyad */}
              <div className="col-span-1 relative">
                <div
                  className={`relative w-full h-[56px] rounded-[14px] bg-[#F1F6F9] border transition-all duration-200 ${
                    errors.surname
                      ? "!border-[#e3152e] !bg-[#e3152e]/15"
                      : "border-transparent focus-within:border-[#6537A6] focus-within:bg-[#6537A6]/10"
                  }`}
                >
                  <input
                    type="text"
                    name="surname"
                    id="input-surname"
                    placeholder=" "
                    className="peer w-full h-full pt-[20px] pb-[6px] px-4 bg-transparent outline-none text-[#20172A] font-medium text-[16px]"
                    value={form.surname}
                    onChange={(e) => setForm({ ...form, surname: e.target.value })}
                    required
                  />
                  <label
                    htmlFor="input-surname"
                    className={`absolute left-[17px] pointer-events-none transition-all duration-200 ${
                      form.surname
                        ? "top-[8px] text-[12px] leading-[16px] text-[#5E6875]"
                        : "top-[18px] text-[16px] leading-[20px] text-[#8793A1] peer-focus:top-[8px] peer-focus:text-[12px] peer-focus:leading-[16px] peer-focus:text-[#5E6875]"
                    }`}
                  >
                    {apply.fields.surname}
                  </label>
                </div>
                {errors.surname && (
                  <p className="mt-[6px] mb-0 text-[12px] text-[#e3152e] leading-[16px]">
                    {errors.surname}
                  </p>
                )}
              </div>

              {/* Telefon */}
              <div className="col-span-1 lg:col-span-2 relative">
                <div
                  className={`relative w-full h-[56px] rounded-[14px] bg-[#F1F6F9] border transition-all duration-200 ${
                    errors.phone
                      ? "!border-[#e3152e] !bg-[#e3152e]/15"
                      : "border-transparent focus-within:border-[#6537A6] focus-within:bg-[#6537A6]/10"
                  }`}
                >
                  <input
                    type="tel"
                    name="phone"
                    id="input-phone"
                    placeholder=" "
                    className="peer w-full h-full pt-[20px] pb-[6px] px-4 bg-transparent outline-none text-[#20172A] font-medium text-[16px]"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    required
                  />
                  <label
                    htmlFor="input-phone"
                    className={`absolute left-[17px] pointer-events-none transition-all duration-200 ${
                      form.phone
                        ? "top-[8px] text-[12px] leading-[16px] text-[#5E6875]"
                        : "top-[18px] text-[16px] leading-[20px] text-[#8793A1] peer-focus:top-[8px] peer-focus:text-[12px] peer-focus:leading-[16px] peer-focus:text-[#5E6875]"
                    }`}
                  >
                    {apply.fields.phone}
                  </label>
                </div>
                {errors.phone && (
                  <p className="mt-[6px] mb-0 text-[12px] text-[#e3152e] leading-[16px]">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="col-span-1 lg:col-span-2 relative">
                <div
                  className={`relative w-full h-[56px] rounded-[14px] bg-[#F1F6F9] border transition-all duration-200 ${
                    errors.email
                      ? "!border-[#e3152e] !bg-[#e3152e]/15"
                      : "border-transparent focus-within:border-[#6537A6] focus-within:bg-[#6537A6]/10"
                  }`}
                >
                  <input
                    type="email"
                    name="email"
                    id="input-mail"
                    placeholder=" "
                    className="peer w-full h-full pt-[20px] pb-[6px] px-4 bg-transparent outline-none text-[#20172A] font-medium text-[16px]"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                  <label
                    htmlFor="input-mail"
                    className={`absolute left-[17px] pointer-events-none transition-all duration-200 ${
                      form.email
                        ? "top-[8px] text-[12px] leading-[16px] text-[#5E6875]"
                        : "top-[18px] text-[16px] leading-[20px] text-[#8793A1] peer-focus:top-[8px] peer-focus:text-[12px] peer-focus:leading-[16px] peer-focus:text-[#5E6875]"
                    }`}
                  >
                    {apply.fields.email}
                  </label>
                </div>
                {errors.email && (
                  <p className="mt-[6px] mb-0 text-[12px] text-[#e3152e] leading-[16px]">
                    {errors.email}
                  </p>
                )}
              </div>

              <button
                type="button"
                className="block lg:hidden mt-4 w-full items-center justify-center px-4 py-[10px] h-10 rounded-full text-sm font-semibold bg-[#20172A] text-white hover:bg-[#3A294F] hover:shadow-[0_8px_18px_rgba(101,55,166,0.22)] hover:-translate-y-px transition-all duration-250 cursor-pointer shadow-[0_1px_1px_rgba(32,23,42,0.08)]"
                onClick={handleStep2Next}
              >
                {apply.completeLabel}
              </button>
            </div>
          </div>

          {/* PAGE 3 OTP */}
          <div className={step === 3 ? "block" : "hidden"} id="page3">
            <div className="p-[54px_20px] flex flex-col items-center justify-center">
              <div className="w-[400px] max-w-full flex flex-col items-center gap-4">
                <div className="w-full relative">
                  <div
                    className={`relative w-full h-[56px] rounded-[14px] bg-[#F1F6F9] border transition-all duration-200 ${
                      errors.otp
                        ? "!border-[#e3152e] !bg-[#e3152e]/15"
                        : "border-transparent focus-within:border-[#6537A6] focus-within:bg-[#6537A6]/10"
                    }`}
                  >
                    <input
                      type="number"
                      min="1000"
                      max="9999"
                      maxLength={4}
                      name="entered_otp_code"
                      id="entered_otp_code"
                      placeholder=" "
                      className="peer w-full h-full pt-[20px] pb-[6px] px-4 bg-transparent outline-none text-[#20172A] font-medium text-[16px]"
                      value={form.otp}
                      onChange={(e) => setForm({ ...form, otp: e.target.value.slice(0, 4) })}
                      required
                    />
                    <label
                      htmlFor="entered_otp_code"
                      className={`absolute left-[17px] pointer-events-none transition-all duration-200 ${
                        form.otp
                          ? "top-[8px] text-[12px] leading-[16px] text-[#5E6875]"
                          : "top-[18px] text-[16px] leading-[20px] text-[#8793A1] peer-focus:top-[8px] peer-focus:text-[12px] peer-focus:leading-[16px] peer-focus:text-[#5E6875]"
                      }`}
                    >
                      {apply.otpLabel}
                    </label>
                  </div>
                  {errors.otp && (
                    <p className="mt-[6px] mb-0 text-[12px] text-[#e3152e] leading-[16px]">
                      {errors.otp}
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-[10px] h-10 rounded-full text-sm font-semibold bg-[#20172A] text-white hover:bg-[#3A294F] hover:shadow-[0_8px_18px_rgba(101,55,166,0.22)] hover:-translate-y-px transition-all duration-250 cursor-pointer shadow-[0_1px_1px_rgba(32,23,42,0.08)]"
                  onClick={handleOtpSubmit}
                >
                  {apply.otpSubmit}
                </button>
              </div>
            </div>
          </div>

          {/* PAGE 4 LOADING */}
          <div className={step === 4 ? "block" : "hidden"} id="page4">
            <div className="p-[20px_24px] border-b border-[#F1F6F9]">
              <h4 className="m-0 text-[#20172A] font-semibold text-[20px] leading-[28px]">
                {apply.sendingTitle}
              </h4>
            </div>
            <div className="p-[54px_20px] flex flex-col items-center justify-center text-center">
              <div className="mb-[50px]">
                <svg className="w-[50px] h-[50px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                  <rect fill="#493365" stroke="#493365" strokeWidth="15" width="30" height="30" x="25" y="85">
                    <animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate>
                  </rect>
                  <rect fill="#493365" stroke="#493365" strokeWidth="15" width="30" height="30" x="85" y="85">
                    <animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate>
                  </rect>
                  <rect fill="#493365" stroke="#493365" strokeWidth="15" width="30" height="30" x="145" y="85">
                    <animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate>
                  </rect>
                </svg>
              </div>
              <div>
                <p className="m-0 text-[#5E6875] font-semibold text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px]">
                  {apply.successText}
                </p>
              </div>
            </div>
          </div>
        </form>
      </section>

      {/* Pop-up Confirmation Modal */}
      {showPopup && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-[10000] p-4 transition-all duration-300"
          id="popupOverlay"
          aria-modal="true"
          role="dialog"
        >
          <div className="bg-white rounded-[20px] p-6 max-w-[480px] w-full shadow-[0px_10px_40px_rgba(0,0,0,0.2)]" role="document">
            <p className="m-0 mb-5 text-[#20172A] font-medium text-[16px] leading-[24px]">
              <strong>{apply.popupPrefix}</strong> {apply.popupTextBefore}<span>{selected}</span>{apply.popupTextAfter}
            </p>
            <div className="flex gap-3 justify-end">
              <button
                type="button"
                className="inline-flex items-center gap-[6px] px-4 py-[10px] rounded-full bg-[#F1F6F9] text-[#20172A] hover:bg-[#E3E9EF] text-sm font-semibold transition-all duration-300 cursor-pointer border-0"
                onClick={cancelPopup}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#000" width={16} height={16}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                {apply.editLabel}
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-[6px] px-4 py-[10px] rounded-full bg-[#6537A6] text-white hover:bg-[#493365] text-sm font-semibold transition-all duration-300 cursor-pointer border-0 shadow-[0_1px_1px_rgba(32,23,42,0.08)]"
                onClick={confirmPopup}
              >
                {apply.confirmLabel}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
