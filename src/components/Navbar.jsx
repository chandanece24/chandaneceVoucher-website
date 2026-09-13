// src/components/Navbar.jsx

import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaClipboardList,
  FaTicketAlt,
  FaStar,
  FaBookOpen,
  FaShieldAlt,
  FaCheckCircle,
  FaChevronDown,
  FaEnvelope,
} from "react-icons/fa";

import tclogo from "../assets/tclogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);

  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setBlogOpen(false);
  }, [location.pathname]);

  // Navigation links
  const navLinks = [

    {
      name: "Home",
      path: "/",
      icon: <FaHome className="text-sm" />,
    },
    {
      name: "Exam Vouchers",
      path: "/vouchers",
      icon: <FaTicketAlt className="text-sm" />,
    },
    {
      name: "About",
      path: "/about",
      icon: <FaInfoCircle className="text-sm" />,
    },
     {
      name: "Reviews",
      path: "/reviews",
      icon: <FaStar className="text-sm" />,
    },
    {
      name: "How It Works",
      path: "/how-it-works",
      icon: <FaClipboardList className="text-sm" />,
    },
    {
      name:"Contact",
      path:"/contact",
      icon:<FaEnvelope className="text-sm"/>
    }

   
  ];

  // Blog categories
  const blogCategories = [
    {
      name: "Microsoft Azure",
      path: "/blog/microsoft-azure-exam-vouchers",
    },
    {
      name: "AWS",
      path: "/blog/aws-exam-vouchers",
    },
    {
      name: "Google Cloud",
      path: "/blog/google-cloud-exam-vouchers",
    },
    {
      name: "Databricks",
      path: "/blog/databricks-exam-vouchers",
    },
    {
      name: "Fortinet",
      path: "/blog/fortinet-exam-vouchers",
    },
    {
      name: "CompTIA",
      path: "/blog/comptia-exam-vouchers",
    },
    {
      name:"Salesforce",
      path:"/blog/salesforce-exam-vouchers"
    }
    ,
    {
      name:"hashicorp terraform certification",
      path:"/blog/hashicorp-exam-vouchers"
    }
    ,
    {
      name:"Claude Certification",
      path:"/blog/ClaudeCertification-vouchers"
    }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
          ? "bg-black/95 backdrop-blur-xl shadow-2xl shadow-sky-500/5 border-b border-slate-800/50"
          : "bg-black/80 backdrop-blur-md border-b border-slate-800/30"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <NavLink to="/" className="block">
                <img
                  src={tclogo}
                  alt="TechCyfy"
                  className="h-10 w-auto object-contain md:h-12"
                />
              </NavLink>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">

              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${isActive
                      ? "text-white bg-sky-500/10 border border-sky-500/30"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="flex items-center gap-2">
                        <span
                          className={
                            isActive
                              ? "text-sky-400"
                              : "text-slate-500"
                          }
                        >
                          {link.icon}
                        </span>

                        {link.name}
                      </span>

                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-sky-400 to-amber-400 rounded-full"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}

              {/* BLOG DROPDOWN */}
              <div
                className="relative"
                onMouseEnter={() => setBlogOpen(true)}
                onMouseLeave={() => setBlogOpen(false)}
              >
                <div
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg cursor-default transition-all duration-300 ${location.pathname.startsWith("/blog")
                    ? "text-white bg-sky-500/10 border border-sky-500/30"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                    }`}
                >
                  <FaBookOpen
                    className={
                      location.pathname.startsWith("/blog")
                        ? "text-sky-400"
                        : "text-slate-500"
                    }
                  />
                  <span className="text-sm font-medium">Blog</span>
                  <FaChevronDown
                    className={`text-xs transition-transform duration-300 ${blogOpen ? "rotate-180" : ""
                      }`}
                  />
                </div>

                {/* Dropdown */}
                <AnimatePresence>
                  {blogOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 10,
                        scale: 0.97,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        y: 10,
                        scale: 0.97,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 rounded-xl overflow-hidden bg-white backdrop-blur-xl border border-slate-200 shadow-2xl shadow-black/40"
                    >
                      {/* Dropdown Header */}
                      <div className="px-4 py-3 border-b border-slate-200 bg-gradient-to-r from-sky-50 to-amber-50">
                        <p className="text-xs uppercase tracking-wider text-sky-600 font-semibold">
                          Certification Blogs
                        </p>
                      </div>

                      {/* Categories */}
                      <div className="p-2 bg-white">
                        {blogCategories.map((category) => (
                          <NavLink
                            key={category.name}
                            to={category.path}
                            className={({ isActive }) =>
                              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${isActive
                                ? "bg-sky-100 text-sky-700 border border-sky-200"
                                : "text-slate-800 hover:text-sky-600 hover:bg-sky-50 hover:pl-4"
                              }`
                            }
                          >
                            {({ isActive }) => (
                              <>
                                <span
                                  className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${isActive
                                    ? "bg-sky-500 scale-125"
                                    : "bg-sky-400"
                                    }`}
                                />
                                <span className="font-medium">{category.name}</span>
                                {isActive && (
                                  <FaCheckCircle className="ml-auto text-[10px] text-sky-500" />
                                )}
                              </>
                            )}
                          </NavLink>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-2 md:gap-3">

              {/* Accredited Badge */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 group cursor-default"
              >
                <div className="relative">
                  <FaShieldAlt className="text-emerald-400 text-sm group-hover:scale-110 transition-transform duration-300" />

                  <FaCheckCircle className="absolute -top-1 -right-1 text-[8px] text-emerald-300" />
                </div>

                <span className="text-[10px] sm:text-xs font-semibold text-emerald-400 tracking-wide uppercase whitespace-nowrap">
                  Techcyfy Accredited
                </span>

                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.9 }}
                className="lg:hidden p-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors border border-slate-700/50 hover:border-slate-600"
                aria-label="Toggle menu"
              >
                <AnimatePresence
                  mode="wait"
                  initial={false}
                >
                  <motion.div
                    key={isOpen ? "close" : "open"}
                    initial={{
                      rotate: -90,
                      opacity: 0,
                    }}
                    animate={{
                      rotate: 0,
                      opacity: 1,
                    }}
                    exit={{
                      rotate: 90,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    {isOpen ? (
                      <FaTimes size={22} />
                    ) : (
                      <FaBars size={22} />
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="lg:hidden overflow-hidden bg-black/95 backdrop-blur-xl border-t border-slate-800/50 shadow-2xl"
            >
              <div className="px-4 pt-2 pb-4 space-y-1">

                {/* Main Links */}
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                        ? "bg-sky-500/10 border border-sky-500/30 text-white"
                        : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span
                          className={
                            isActive
                              ? "text-sky-400"
                              : "text-slate-500"
                          }
                        >
                          {link.icon}
                        </span>

                        <span className="font-medium">
                          {link.name}
                        </span>

                        {isActive && (
                          <span className="ml-auto text-xs bg-sky-500/20 text-sky-400 px-2 py-0.5 rounded-full">
                            Active
                          </span>
                        )}
                      </>
                    )}
                  </NavLink>
                ))}

                {/* Mobile Blog */}
                <div className="rounded-xl overflow-hidden">

                  <button
                    onClick={() => setBlogOpen(!blogOpen)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${location.pathname.startsWith("/blog")
                      ? "bg-sky-500/10 border border-sky-500/30 text-white"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                      }`}
                  >
                    <span
                      className={
                        location.pathname.startsWith("/blog")
                          ? "text-sky-400"
                          : "text-slate-500"
                      }
                    >
                      <FaBookOpen className="text-sm" />
                    </span>

                    <span className="font-medium">
                      Blog
                    </span>

                    <FaChevronDown
                      className={`ml-auto text-xs transition-transform duration-300 ${blogOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  <AnimatePresence>
                    {blogOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        className="ml-4 mt-1 pl-3 border-l border-slate-700 space-y-1"
                      >
                        {blogCategories.map((category) => (
                          <NavLink
                            key={category.name}
                            to={category.path}
                            className={({ isActive }) =>
                              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 bg-white ${isActive
                                ? "text-sky-700 bg-sky-100 border border-sky-200"
                                : "text-slate-800 hover:text-sky-600 hover:bg-sky-50 hover:pl-4"
                              }`
                            }
                          >
                            {({ isActive }) => (
                              <>
                                <span
                                  className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${isActive
                                    ? "bg-sky-500 scale-125"
                                    : "bg-sky-400"
                                    }`}
                                />
                                <span className="font-medium">{category.name}</span>
                                {isActive && (
                                  <FaCheckCircle className="ml-auto text-[10px] text-sky-500" />
                                )}
                              </>
                            )}
                          </NavLink>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Navbar;