"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GSAPAnimations() {
  useEffect(() => {
    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // 1. Hero Section Animations
    const heroTl = gsap.timeline();
    heroTl
      .fromTo(
        ".hero-clean-left",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      )
      .fromTo(
        ".hero-image-box",
        { opacity: 0, scale: 0.95, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 1.1, ease: "power3.out" },
        "-=0.7"
      );

    // 2. Stats Banner Cards Animation
    gsap.fromTo(
      ".stat-banner-item",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".stats-banner-card",
          start: "top 85%",
        },
      }
    );

    // 3. Products Cards Stagger Reveal Animation
    gsap.fromTo(
      ".product-card",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#products",
          start: "top 80%",
        },
      }
    );

    // 4. Why Choose Us Cards Stagger Reveal Animation
    gsap.fromTo(
      ".why-card",
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#why-us",
          start: "top 80%",
        },
      }
    );

    // 5. Our Process Steps Reveal Animation
    gsap.fromTo(
      ".process-step-clean",
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#process",
          start: "top 80%",
        },
      }
    );

    // 6. CTA Banner Reveal Animation
    gsap.fromTo(
      ".cta-banner-card",
      { opacity: 0, scale: 0.96, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cta-banner-section",
          start: "top 85%",
        },
      }
    );

    // 7. Section Header Fade & Slide Animation
    gsap.utils.toArray(".section-header").forEach((header) => {
      gsap.fromTo(
        header,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: header,
            start: "top 85%",
          },
        }
      );
    });

    // 8. Quality Cert Card Reveal
    if (document.querySelector(".quality-cert-card")) {
      gsap.fromTo(
        ".quality-cert-card",
        { opacity: 0, scale: 0.96, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".quality-cert-card",
            start: "top 85%",
          },
        }
      );
    }

    // Cleanup triggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}
