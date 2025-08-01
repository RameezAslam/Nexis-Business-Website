import React, {useState, useEffect} from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout() {
   const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
     const sections = document.querySelectorAll('section');
        const handleScroll = () => {
         let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.id || '';
            }
        });

        setActiveSection(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    }, []);
   
  return (
    <>
      <Navbar activeSection={activeSection} />
      <Outlet /> {/* This renders nested route content like <HomePage /> */}
      <Footer />
    </>
  );
}
  