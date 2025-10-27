"use client";

import React, { useEffect, useState, MouseEvent } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";
import Image from "next/image";
import "./header.scss";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isCanvasExpanded, setIsCanvasExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY >= 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleCanvasMenu = (e: MouseEvent<HTMLAnchorElement | HTMLDivElement>) => {
    e.preventDefault();
    setIsCanvasExpanded((prev) => !prev);
  };

  return (
    <header className={`header ${isSticky ? "header--sticky" : ""}`}>
      {/* ---------- Topbar ---------- */}
      <div className="header__topbar">
        <div className="header__container">
          <div className="header__contact">
            <ul className="header__contact-list">
              <li className="header__contact-item">
                <EmailIcon style={{ color: "white" }} />
                <a href="mailto:info@schoolabroad.org"> info@schoolabroad.org</a>
              </li>
              <li className="header__contact-item">
                <PhoneIcon style={{ color: "white" }} />
                <a href="tel:+33769020091"> +33 769 020 091</a>
                <a href="tel:+2347081416069"> +234 708 1416 069</a>
              </li>
            </ul>
          </div>

          <div className="header__social">
            <ul className="header__social-list">
              <li><a href="https://m.facebook.com/schooloutsideng/" target="_blank"><FacebookIcon style={{ color: "white" }} /></a></li>
              <li><a href="https://www.instagram.com/schooloutside_ng/" target="_blank"><InstagramIcon style={{ color: "white" }} /></a></li>
              <li><a href="https://linkedin.com/company/schooloutside" target="_blank"><LinkedInIcon style={{ color: "white" }} /></a></li>
              <li><a href="https://www.youtube.com/@schooloutside" target="_blank"><YouTubeIcon style={{ color: "white" }} /></a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* ---------- Navbar ---------- */}
      <div className="header__navbar">
        <div className="header__container">
          <div className="header__logo">
            <Link href="/">
              <Image
                height={40}
                width={500}
                src="/assets/images/Schhol_Abroad_logo.jpeg"
                alt="School Abroad Logo"
              />
            </Link>
            <div className="header__hamburger">
              <a href="#" onClick={toggleCanvasMenu}>
                <span className="header__hamburger-dot"></span>
                <span className="header__hamburger-dot"></span>
                <span className="header__hamburger-dot"></span>
              </a>
            </div>
          </div>

          <nav className="header__menu d-lg-block d-none">
            <ul className="header__menu-list">
              <li className="header__menu-item header__menu-item--active"><Link href="/">Home</Link></li>
              <li className="header__menu-item"><Link href="#">About Us</Link></li>
              <li className="header__menu-item"><Link href="#">Students</Link></li>
              <li className="header__menu-item"><Link href="#">Recruitment Partners</Link></li>
              <li className="header__menu-item"><Link href="#">Institutions</Link></li>
              <li className="header__menu-item"><Link href="#">Contact Us</Link></li>
            </ul>
          </nav>
        </div>
      </div>

      {/* ---------- Overlay ---------- */}
      <div
        className={`header__overlay ${isCanvasExpanded ? "header__overlay--active" : ""}`}
        onClick={toggleCanvasMenu}
      ></div>

      {/* ---------- Offcanvas ---------- */}
      <div className={`header__offcanvas ${isCanvasExpanded ? "header__offcanvas--expanded" : ""}`}>
        <div className="header__offcanvas-header">
          <Link href="/">
            <Image src="/assets/images/logo.png" alt="Logo" width={150} height={50} />
          </Link>
          <a href="#" onClick={toggleCanvasMenu} className="header__offcanvas-close">
            <i className="fa-regular fa-xmark"></i>
          </a>
        </div>

        <nav className="header__offcanvas-menu">
          <ul className="header__offcanvas-list">
            <li className="header__offcanvas-item header__offcanvas-item--active"><Link href="/">Home</Link></li>
            <li className="header__offcanvas-item"><Link href="/about">About Us</Link></li>
            <li className="header__offcanvas-item"><Link href="/services">Services</Link></li>
            <li className="header__offcanvas-item"><Link href="/global-partnerships">Global Partnerships</Link></li>
            <li className="header__offcanvas-item"><Link href="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}