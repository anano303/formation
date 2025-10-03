"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./Navigation.css";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const sideNav = document.getElementById("sideNav");
      const desktopMenuBtn = document.getElementById("desktopMenuBtn");
      const mobileMenuBtn = document.getElementById("mobileMenuBtn");

      if (window.innerWidth <= 767) {
        // Mobile: close on outside click
        if (
          !sideNav?.contains(e.target as Node) &&
          !mobileMenuBtn?.contains(e.target as Node)
        ) {
          setIsOpen(false);
        }
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Menu Button */}
      <button
        className="desktop-menu-btn"
        id="desktopMenuBtn"
        onClick={toggleMenu}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      {/* Mobile Menu Button */}
      <button
        className={`mobile-menu-btn ${isOpen ? "active" : ""}`}
        id="mobileMenuBtn"
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Side Navigation Menu */}
      <nav className={`side-nav ${isOpen ? "open" : ""}`} id="sideNav">
        <div className="nav-header">
          <div className="nav-logo">
            <Image src="/logo.png" alt="ფორმაცია" width={40} height={40} />
            <span>ფორმაცია</span>
          </div>
          <button className="close-menu" id="closeMenu" onClick={closeMenu}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <ul className="nav-links">
          <li>
            <Link href="/" className="nav-link" onClick={closeMenu}>
              მთავარი
            </Link>
          </li>
          <li>
            <Link href="/courses" className="nav-link" onClick={closeMenu}>
              კურსები
            </Link>
          </li>
          <li>
            <Link href="/about" className="nav-link" onClick={closeMenu}>
              ჩვენ შესახებ
            </Link>
          </li>
          <li>
            <Link href="/contact" className="nav-link" onClick={closeMenu}>
              კონტაქტი
            </Link>
          </li>
        </ul>

        <div className="nav-footer">
          <div className="nav-contact">
            <p>📞 511 44 75 77</p>
            <p>📧 info@formation.ge</p>
          </div>
          <div className="nav-social">
            <a
              href="https://www.facebook.com/Formationemotionalhub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
