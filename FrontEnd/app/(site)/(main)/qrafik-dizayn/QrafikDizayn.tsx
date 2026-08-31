"use client";

import { useEffect } from "react";
import { QRAFIK_MARKUP } from "./markup";

declare global {
  interface Window {
    handle_apply_Click?: () => void;
    contactformname?: string;
    gotopage3?: number;
    newui_awareness_confirmed?: boolean;
    __qrafikScriptsLoaded?: boolean;
    jQuery?: {
      (sel: string): {
        animate: (props: object, ms: number) => void;
        offset: () => { top: number } | undefined;
        val: () => string;
        text: (v?: string) => string;
        on: (ev: string, fn: () => void) => void;
        trigger: (ev: string) => void;
      };
    };
  }
}

const SCRIPTS = [
  "/qrafik-dizayn/js/jquery.min.js",
  "/qrafik-dizayn/js/jquery-migrate.min.js",
  "/qrafik-dizayn/js/slick.min.js",
  "/qrafik-dizayn/js/leftMenu.js",
  "/qrafik-dizayn/js/more.js",
  "/qrafik-dizayn/js/accordian.js",
  "/qrafik-dizayn/js/contact.js",
  "/qrafik-dizayn/js/detail.js",
  "/qrafik-dizayn/js/selectOption.js",
  "/qrafik-dizayn/js/validations.js",
  "/qrafik-dizayn/js/form-v2.js",
  "/qrafik-dizayn/js/test-v2.js",
  "/qrafik-dizayn/js/companie.js",
  "/qrafik-dizayn/js/lazyload.min.js",
];

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    if (document.querySelector(`script[data-qrafik-src="${src}"]`)) {
      resolve();
      return;
    }
    const el = document.createElement("script");
    el.src = src;
    el.async = false;
    el.dataset.qrafikSrc = src;
    el.onload = () => resolve();
    el.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(el);
  });
}

function bindApplyAndPopup() {
  window.handle_apply_Click = function handle_apply_Click() {
    if (window.innerWidth < 768) {
      let targetUrl = "/muraciet";
      const urlParams = new URLSearchParams(window.location.search);
      const utmParams: string[] = [];
      urlParams.forEach((value, key) => {
        if (key.startsWith("utm_")) {
          utmParams.push(`${key}=${encodeURIComponent(value)}`);
        }
      });
      if (utmParams.length > 0) targetUrl += `&${utmParams.join("&")}`;
      window.location.href = targetUrl;
    } else if (window.jQuery) {
      const $ = window.jQuery;
      const offset = $("#muraciet_form").offset();
      if (offset) {
        $("html, body").animate({ scrollTop: offset.top - 220 }, 500);
      }
    }
  };

  window.contactformname = "/qrafik-dizayn";

  const overlay = document.getElementById("popupOverlay");
  const btnBack = document.getElementById("btnBack");
  const btnConfirm = document.getElementById("btnConfirm");
  if (!overlay || !btnBack || !btnConfirm) return;

  function showPopup() {
    overlay!.classList.add("is-open");
  }
  function hidePopup() {
    overlay!.classList.remove("is-open");
  }

  btnBack.addEventListener("click", hidePopup);
  btnConfirm.addEventListener("click", () => {
    window.gotopage3 = 1;
    window.newui_awareness_confirmed = true;
    hidePopup();
    setTimeout(() => {
      window.jQuery?.(".next-btn").trigger("click");
      const nb = document.getElementById("newui-submit-btn");
      if (nb) nb.click();
    }, 500);
  });

  window.jQuery?.(".code-apply-select-option input").on("click", function () {
    const val = window.jQuery!(".code-apply-select-option input").val();
    const span = document.getElementById("applied_program");
    if (span) span.textContent = String(val ?? "");
  });

  document.addEventListener(
    "click",
    (e) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest(".next-btn")) {
        if (window.jQuery?.("#input-name").val() === "" || window.gotopage3 === 1)
          return;
        if (typeof window.gotopage3 === "undefined") {
          showPopup();
          e.stopImmediatePropagation();
          e.preventDefault();
        }
      }
      if (target?.closest("#newui-submit-btn")) {
        const btn = document.getElementById("newui-submit-btn") as HTMLButtonElement | null;
        if (btn?.disabled) return;
        if (window.newui_awareness_confirmed) {
          window.newui_awareness_confirmed = false;
          return;
        }
        const popup = document.querySelector("#popupOverlay .popup");
        const progSpan = popup?.querySelector("span");
        const progInput = document.querySelector("input#applied_program") as HTMLInputElement | null;
        if (progSpan && progInput) progSpan.textContent = progInput.value;
        showPopup();
        e.stopImmediatePropagation();
        e.preventDefault();
      }
    },
    true
  );
}

export default function QrafikDizayn() {
  useEffect(() => {
    if (window.__qrafikScriptsLoaded) return;
    window.__qrafikScriptsLoaded = true;

    const gtm = document.createElement("script");
    gtm.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5RG6HTH4');`;
    document.head.appendChild(gtm);


    (async () => {
      for (const src of SCRIPTS) {
        try {
          await loadScript(src);
        } catch (err) {
          console.warn(err);
        }
      }
      bindApplyAndPopup();
    })();
  }, []);

  return (
    <div
      className="qrafik-dizayn-root"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: QRAFIK_MARKUP }}
    />
  );
}
