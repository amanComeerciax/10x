"use client";
import { useEffect, useState } from "react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFadeOut(true);
    }, 1300);

    const timer2 = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className={`page-loader-overlay ${fadeOut ? "fade-out" : ""}`}>
      <div className="page-loader-content">
        <div className="loader-logo-wrap">
          <div className="loader-logo-10x">
            10<span className="loader-logo-x">X</span>
          </div>
          <div className="loader-brand-title">INTERNATIONAL</div>
          <div className="loader-brand-sub">— IMPORT | EXPORT —</div>
        </div>

        <div className="loader-bar-container">
          <div className="loader-bar-fill"></div>
        </div>
      </div>
    </div>
  );
}
