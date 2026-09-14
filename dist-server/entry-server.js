import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link, NavLink, Outlet, Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaBars, FaBolt, FaBookOpen, FaCcMastercard, FaCcVisa, FaCheck, FaCheckCircle, FaChevronDown, FaChevronRight, FaClipboardList, FaClock, FaCloud, FaEdit, FaEnvelope, FaExternalLinkAlt, FaFacebook, FaFileAlt, FaGithub, FaGlobe, FaGlobeAmericas, FaHeadset, FaHome, FaInfoCircle, FaLayerGroup, FaLightbulb, FaListUl, FaLock, FaPaypal, FaPercent, FaPercentage, FaQuestionCircle, FaRocket, FaSearch, FaShieldAlt, FaStar, FaStarHalfAlt, FaTag, FaTelegramPlane, FaThumbsUp, FaTicketAlt, FaTimes, FaTrash, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { FaTelegram } from "react-icons/fa6";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import emailjs from "@emailjs/browser";
//#region src/assets/tclogo.png
var tclogo_default = "/assets/tclogo-CxoFeW-j.png";
//#endregion
//#region src/components/Navbar.jsx
var Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [blogOpen, setBlogOpen] = useState(false);
	const location = useLocation();
	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	useEffect(() => {
		setIsOpen(false);
		setBlogOpen(false);
	}, [location.pathname]);
	const navLinks = [
		{
			name: "Home",
			path: "/",
			icon: /* @__PURE__ */ jsx(FaHome, { className: "text-sm" })
		},
		{
			name: "Exam Vouchers",
			path: "/vouchers",
			icon: /* @__PURE__ */ jsx(FaTicketAlt, { className: "text-sm" })
		},
		{
			name: "About",
			path: "/about",
			icon: /* @__PURE__ */ jsx(FaInfoCircle, { className: "text-sm" })
		},
		{
			name: "Reviews",
			path: "/reviews",
			icon: /* @__PURE__ */ jsx(FaStar, { className: "text-sm" })
		},
		{
			name: "How It Works",
			path: "/how-it-works",
			icon: /* @__PURE__ */ jsx(FaClipboardList, { className: "text-sm" })
		},
		{
			name: "Contact",
			path: "/contact",
			icon: /* @__PURE__ */ jsx(FaEnvelope, { className: "text-sm" })
		}
	];
	const blogCategories = [
		{
			name: "Microsoft Azure",
			path: "/blog/microsoft-azure-exam-vouchers"
		},
		{
			name: "AWS",
			path: "/blog/aws-exam-vouchers"
		},
		{
			name: "Google Cloud",
			path: "/blog/google-cloud-exam-vouchers"
		},
		{
			name: "Databricks",
			path: "/blog/databricks-exam-vouchers"
		},
		{
			name: "Fortinet",
			path: "/blog/fortinet-exam-vouchers"
		},
		{
			name: "CompTIA",
			path: "/blog/comptia-exam-vouchers"
		},
		{
			name: "Salesforce",
			path: "/blog/salesforce-exam-vouchers"
		},
		{
			name: "hashicorp terraform certification",
			path: "/blog/hashicorp-exam-vouchers"
		},
		{
			name: "Claude Certification",
			path: "/blog/ClaudeCertification-vouchers"
		}
	];
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("nav", {
		className: `fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-black/95 backdrop-blur-xl shadow-2xl shadow-sky-500/5 border-b border-slate-800/50" : "bg-black/80 backdrop-blur-md border-b border-slate-800/30"}`,
		children: [/* @__PURE__ */ jsx("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex justify-between items-center h-16 md:h-20",
				children: [
					/* @__PURE__ */ jsx(motion.div, {
						initial: {
							opacity: 0,
							x: -20
						},
						animate: {
							opacity: 1,
							x: 0
						},
						transition: { duration: .5 },
						className: "flex-shrink-0",
						children: /* @__PURE__ */ jsx(NavLink, {
							to: "/",
							className: "block",
							children: /* @__PURE__ */ jsx("img", {
								src: tclogo_default,
								alt: "TechCyfy",
								className: "h-10 w-auto object-contain md:h-12"
							})
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "hidden lg:flex items-center space-x-1",
						children: [navLinks.map((link) => /* @__PURE__ */ jsx(NavLink, {
							to: link.path,
							className: ({ isActive }) => `relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${isActive ? "text-white bg-sky-500/10 border border-sky-500/30" : "text-slate-400 hover:text-white hover:bg-slate-800/50"}`,
							children: ({ isActive }) => /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("span", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ jsx("span", {
									className: isActive ? "text-sky-400" : "text-slate-500",
									children: link.icon
								}), link.name]
							}), isActive && /* @__PURE__ */ jsx(motion.div, {
								layoutId: "activeIndicator",
								className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-sky-400 to-amber-400 rounded-full",
								transition: {
									type: "spring",
									stiffness: 300,
									damping: 30
								}
							})] })
						}, link.name)), /* @__PURE__ */ jsxs("div", {
							className: "relative",
							onMouseEnter: () => setBlogOpen(true),
							onMouseLeave: () => setBlogOpen(false),
							children: [/* @__PURE__ */ jsxs("div", {
								className: `flex items-center gap-1.5 px-3 py-2 rounded-lg cursor-default transition-all duration-300 ${location.pathname.startsWith("/blog") ? "text-white bg-sky-500/10 border border-sky-500/30" : "text-slate-400 hover:text-white hover:bg-slate-800/50"}`,
								children: [
									/* @__PURE__ */ jsx(FaBookOpen, { className: location.pathname.startsWith("/blog") ? "text-sky-400" : "text-slate-500" }),
									/* @__PURE__ */ jsx("span", {
										className: "text-sm font-medium",
										children: "Blog"
									}),
									/* @__PURE__ */ jsx(FaChevronDown, { className: `text-xs transition-transform duration-300 ${blogOpen ? "rotate-180" : ""}` })
								]
							}), /* @__PURE__ */ jsx(AnimatePresence, { children: blogOpen && /* @__PURE__ */ jsxs(motion.div, {
								initial: {
									opacity: 0,
									y: 10,
									scale: .97
								},
								animate: {
									opacity: 1,
									y: 0,
									scale: 1
								},
								exit: {
									opacity: 0,
									y: 10,
									scale: .97
								},
								transition: { duration: .2 },
								className: "absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 rounded-xl overflow-hidden bg-white backdrop-blur-xl border border-slate-200 shadow-2xl shadow-black/40",
								children: [/* @__PURE__ */ jsx("div", {
									className: "px-4 py-3 border-b border-slate-200 bg-gradient-to-r from-sky-50 to-amber-50",
									children: /* @__PURE__ */ jsx("p", {
										className: "text-xs uppercase tracking-wider text-sky-600 font-semibold",
										children: "Certification Blogs"
									})
								}), /* @__PURE__ */ jsx("div", {
									className: "p-2 bg-white",
									children: blogCategories.map((category) => /* @__PURE__ */ jsx(NavLink, {
										to: category.path,
										className: ({ isActive }) => `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${isActive ? "bg-sky-100 text-sky-700 border border-sky-200" : "text-slate-800 hover:text-sky-600 hover:bg-sky-50 hover:pl-4"}`,
										children: ({ isActive }) => /* @__PURE__ */ jsxs(Fragment, { children: [
											/* @__PURE__ */ jsx("span", { className: `w-1.5 h-1.5 rounded-full transition-all duration-200 ${isActive ? "bg-sky-500 scale-125" : "bg-sky-400"}` }),
											/* @__PURE__ */ jsx("span", {
												className: "font-medium",
												children: category.name
											}),
											isActive && /* @__PURE__ */ jsx(FaCheckCircle, { className: "ml-auto text-[10px] text-sky-500" })
										] })
									}, category.name))
								})]
							}) })]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2 md:gap-3",
						children: [/* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								scale: .8
							},
							animate: {
								opacity: 1,
								scale: 1
							},
							transition: {
								duration: .5,
								delay: .2
							},
							className: "flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 group cursor-default",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "relative",
									children: [/* @__PURE__ */ jsx(FaShieldAlt, { className: "text-emerald-400 text-sm group-hover:scale-110 transition-transform duration-300" }), /* @__PURE__ */ jsx(FaCheckCircle, { className: "absolute -top-1 -right-1 text-[8px] text-emerald-300" })]
								}),
								/* @__PURE__ */ jsx("span", {
									className: "text-[10px] sm:text-xs font-semibold text-emerald-400 tracking-wide uppercase whitespace-nowrap",
									children: "Techcyfy Accredited"
								}),
								/* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" })
							]
						}), /* @__PURE__ */ jsx(motion.button, {
							onClick: () => setIsOpen(!isOpen),
							whileTap: { scale: .9 },
							className: "lg:hidden p-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors border border-slate-700/50 hover:border-slate-600",
							"aria-label": "Toggle menu",
							children: /* @__PURE__ */ jsx(AnimatePresence, {
								mode: "wait",
								initial: false,
								children: /* @__PURE__ */ jsx(motion.div, {
									initial: {
										rotate: -90,
										opacity: 0
									},
									animate: {
										rotate: 0,
										opacity: 1
									},
									exit: {
										rotate: 90,
										opacity: 0
									},
									transition: { duration: .2 },
									children: isOpen ? /* @__PURE__ */ jsx(FaTimes, { size: 22 }) : /* @__PURE__ */ jsx(FaBars, { size: 22 })
								}, isOpen ? "close" : "open")
							})
						})]
					})
				]
			})
		}), /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsx(motion.div, {
			initial: {
				height: 0,
				opacity: 0
			},
			animate: {
				height: "auto",
				opacity: 1
			},
			exit: {
				height: 0,
				opacity: 0
			},
			transition: {
				duration: .3,
				ease: "easeInOut"
			},
			className: "lg:hidden overflow-hidden bg-black/95 backdrop-blur-xl border-t border-slate-800/50 shadow-2xl",
			children: /* @__PURE__ */ jsxs("div", {
				className: "px-4 pt-2 pb-4 space-y-1",
				children: [navLinks.map((link) => /* @__PURE__ */ jsx(NavLink, {
					to: link.path,
					className: ({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive ? "bg-sky-500/10 border border-sky-500/30 text-white" : "text-slate-400 hover:text-white hover:bg-slate-800/50"}`,
					children: ({ isActive }) => /* @__PURE__ */ jsxs(Fragment, { children: [
						/* @__PURE__ */ jsx("span", {
							className: isActive ? "text-sky-400" : "text-slate-500",
							children: link.icon
						}),
						/* @__PURE__ */ jsx("span", {
							className: "font-medium",
							children: link.name
						}),
						isActive && /* @__PURE__ */ jsx("span", {
							className: "ml-auto text-xs bg-sky-500/20 text-sky-400 px-2 py-0.5 rounded-full",
							children: "Active"
						})
					] })
				}, link.name)), /* @__PURE__ */ jsxs("div", {
					className: "rounded-xl overflow-hidden",
					children: [/* @__PURE__ */ jsxs("button", {
						onClick: () => setBlogOpen(!blogOpen),
						className: `w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${location.pathname.startsWith("/blog") ? "bg-sky-500/10 border border-sky-500/30 text-white" : "text-slate-400 hover:text-white hover:bg-slate-800/50"}`,
						children: [
							/* @__PURE__ */ jsx("span", {
								className: location.pathname.startsWith("/blog") ? "text-sky-400" : "text-slate-500",
								children: /* @__PURE__ */ jsx(FaBookOpen, { className: "text-sm" })
							}),
							/* @__PURE__ */ jsx("span", {
								className: "font-medium",
								children: "Blog"
							}),
							/* @__PURE__ */ jsx(FaChevronDown, { className: `ml-auto text-xs transition-transform duration-300 ${blogOpen ? "rotate-180" : ""}` })
						]
					}), /* @__PURE__ */ jsx(AnimatePresence, { children: blogOpen && /* @__PURE__ */ jsx(motion.div, {
						initial: {
							height: 0,
							opacity: 0
						},
						animate: {
							height: "auto",
							opacity: 1
						},
						exit: {
							height: 0,
							opacity: 0
						},
						className: "ml-4 mt-1 pl-3 border-l border-slate-700 space-y-1",
						children: blogCategories.map((category) => /* @__PURE__ */ jsx(NavLink, {
							to: category.path,
							className: ({ isActive }) => `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 bg-white ${isActive ? "text-sky-700 bg-sky-100 border border-sky-200" : "text-slate-800 hover:text-sky-600 hover:bg-sky-50 hover:pl-4"}`,
							children: ({ isActive }) => /* @__PURE__ */ jsxs(Fragment, { children: [
								/* @__PURE__ */ jsx("span", { className: `w-1.5 h-1.5 rounded-full transition-all duration-200 ${isActive ? "bg-sky-500 scale-125" : "bg-sky-400"}` }),
								/* @__PURE__ */ jsx("span", {
									className: "font-medium",
									children: category.name
								}),
								isActive && /* @__PURE__ */ jsx(FaCheckCircle, { className: "ml-auto text-[10px] text-sky-500" })
							] })
						}, category.name))
					}) })]
				})]
			})
		}) })]
	}), /* @__PURE__ */ jsx("div", { className: "h-16 md:h-20" })] });
};
//#endregion
//#region src/components/FloatingSocialIcons.jsx
var FloatingSocialIcons = () => {
	return /* @__PURE__ */ jsxs("div", {
		className: "fixed right-4 sm:right-8 md:right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 sm:gap-5",
		children: [[
			{
				icon: /* @__PURE__ */ jsx(FaWhatsapp, { className: "text-2xl" }),
				label: "WhatsApp",
				href: "https://wa.me/+8801982188224?text=I want to know more about your services.",
				target: "_blank",
				color: "bg-green-500 hover:bg-green-600",
				delay: 0
			},
			{
				icon: /* @__PURE__ */ jsx(FaTelegramPlane, { className: "text-2xl" }),
				label: "Telegram",
				href: "https://t.me/techcyfy",
				target: "_blank",
				color: "bg-blue-500 hover:bg-blue-600",
				delay: .2
			},
			{
				icon: /* @__PURE__ */ jsx(FaFacebook, { className: "text-2xl" }),
				label: "Facebook",
				href: "https://www.facebook.com/techcyfy24/",
				target: "_blank",
				color: "bg-blue-500 hover:bg-blue-600",
				delay: .4
			}
		].map((item, index) => /* @__PURE__ */ jsx(motion.a, {
			href: item.href,
			target: "_blank",
			rel: "noopener noreferrer",
			"aria-label": item.label,
			initial: {
				opacity: 0,
				x: 20
			},
			animate: {
				opacity: 1,
				x: 0,
				y: [
					0,
					-6,
					0,
					6,
					0
				]
			},
			transition: {
				opacity: {
					duration: .5,
					delay: item.delay
				},
				x: {
					duration: .5,
					delay: item.delay
				},
				y: {
					duration: 3 + index * .5,
					repeat: Infinity,
					ease: "easeInOut",
					delay: item.delay
				}
			},
			whileHover: {
				scale: 1.15,
				rotate: [
					0,
					-5,
					5,
					-5,
					0
				],
				transition: { duration: .3 }
			},
			className: `w-12 h-12 sm:w-14 sm:h-14 rounded-full ${item.color} text-white flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 backdrop-blur-sm bg-opacity-90 hover:bg-opacity-100 border border-white/20`,
			children: item.icon
		}, index)), /* @__PURE__ */ jsx(motion.div, {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			transition: { delay: .8 },
			className: "hidden md:block text-center",
			children: /* @__PURE__ */ jsx("span", {
				className: "text-[10px] text-slate-400 dark:text-slate-500 font-medium tracking-wider uppercase bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10",
				children: "Connect"
			})
		})]
	});
};
//#endregion
//#region src/components/Footer.jsx
var Footer = () => {
	const footerLinks = [
		"Privacy Policy",
		"Terms & Conditions",
		"Refund Policy",
		"Sitemap"
	];
	const paymentIcons = [
		{
			icon: /* @__PURE__ */ jsx(FaCcVisa, { className: "text-3xl text-blue-600" }),
			label: "Visa"
		},
		{
			icon: /* @__PURE__ */ jsx(FaCcMastercard, { className: "text-3xl text-orange-500" }),
			label: "Mastercard"
		},
		{
			icon: /* @__PURE__ */ jsx(FaPaypal, { className: "text-3xl text-blue-400" }),
			label: "PayPal"
		},
		{
			icon: /* @__PURE__ */ jsx(FaLock, { className: "text-3xl text-emerald-500" }),
			label: "SSL Secured"
		}
	];
	const socialLinks = [
		{
			icon: /* @__PURE__ */ jsx(FaYoutube, { className: "text-2xl" }),
			label: "YouTube",
			href: "https://youtube.com/@techtalkhq24?si=oRyUIM0VGu7mAnJU",
			hoverColor: "text-red-600 hover:text-red-500"
		},
		{
			icon: /* @__PURE__ */ jsx(FaGithub, { className: "text-2xl" }),
			label: "GitHub",
			href: "https://github.com/techcyfy",
			hoverColor: "hover:text-slate-200"
		},
		{
			icon: /* @__PURE__ */ jsx(FaTelegram, { className: "text-2xl" }),
			label: "Telegram",
			href: "https://t.me/techcyfy",
			hoverColor: "text-sky-600 hover:text-sky-400"
		}
	];
	return /* @__PURE__ */ jsx("div", {
		className: "max-w-7xl mx-auto px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "border-t border-slate-800 pt-8",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "flex flex-wrap justify-center gap-4 md:gap-6 mb-6",
					children: footerLinks.map((link, index) => /* @__PURE__ */ jsx("a", {
						href: "#",
						className: "text-xs md:text-sm text-slate-400 hover:text-white transition-colors duration-200",
						children: link
					}, index))
				}),
				/* @__PURE__ */ jsx("div", {
					className: "flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-6",
					children: paymentIcons.map((item, index) => /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors duration-200",
						children: [item.icon, /* @__PURE__ */ jsx("span", {
							className: "text-xs font-medium",
							children: item.label
						})]
					}, index))
				}),
				/* @__PURE__ */ jsx("div", {
					className: "flex justify-center items-center gap-6 mb-6",
					children: socialLinks.map((social, index) => /* @__PURE__ */ jsx("a", {
						href: social.href,
						target: "_blank",
						rel: "noopener noreferrer",
						"aria-label": social.label,
						className: `text-slate-400 transition-colors duration-200 ${social.hoverColor}`,
						children: social.icon
					}, index))
				}),
				/* @__PURE__ */ jsx("div", {
					className: "text-center",
					children: /* @__PURE__ */ jsx("p", {
						className: "text-xs md:text-sm text-slate-500",
						children: "© 2025 Techcyfy. All Rights Reserved."
					})
				})
			]
		})
	});
};
//#endregion
//#region src/components/Layout.jsx
var Layout = () => {
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-black",
		children: [
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx(Outlet, {}) }),
			/* @__PURE__ */ jsx(FloatingSocialIcons, {}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
};
//#endregion
//#region src/components/RouteLoading.jsx
var RouteLoading = () => {
	return /* @__PURE__ */ jsx("div", {
		className: "fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm",
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col items-center",
			children: [/* @__PURE__ */ jsxs(motion.div, {
				className: "relative w-16 h-16",
				animate: { rotate: 360 },
				transition: {
					duration: 1.2,
					repeat: Infinity,
					ease: "linear"
				},
				children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full border-4 border-slate-800" }), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full border-4 border-t-sky-500 border-r-blue-500 border-b-amber-400 border-l-transparent" })]
			}), /* @__PURE__ */ jsx(motion.p, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: { duration: .3 },
				className: "text-xs text-slate-400 mt-4 tracking-widest uppercase",
				children: "Loading..."
			})]
		})
	});
};
//#endregion
//#region src/components/BreadcrumbSchema.jsx
var BreadcrumbSchema = ({ items }) => {
	if (!items || !Array.isArray(items) || items.length === 0) return null;
	const schema = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"itemListElement": items.map((item, index) => ({
			"@type": "ListItem",
			"position": index + 1,
			"name": item.name || "Home",
			"item": `https://techcyfy.com${item.url || "/"}`
		}))
	};
	return /* @__PURE__ */ jsx(Helmet, { children: /* @__PURE__ */ jsx("script", {
		type: "application/ld+json",
		children: JSON.stringify(schema)
	}) });
};
//#endregion
//#region src/components/SEO.jsx
var SEO = ({ title, description, keywords, canonicalUrl, imageUrl, type = "website" }) => {
	const siteName = "TECHCYFY";
	const siteUrl = "https://techcyfy.com";
	const defaultTitle = "IT Certification Exam Vouchers | AWS, Azure, CompTIA & More";
	const defaultDescription = "Get genuine and discounted IT certification exam vouchers for AWS, Microsoft Azure, Google Cloud, CompTIA, Cisco, Fortinet, Red Hat, Databricks, Salesforce and more.";
	const defaultKeywords = "IT certification exam vouchers, discounted exam vouchers, AWS exam voucher, Azure exam voucher, Microsoft certification voucher, Google Cloud voucher, CompTIA voucher, Cisco voucher, Fortinet voucher";
	const defaultImage = "https://techcyfy.com/og-image.jpg";
	const cleanSiteUrl = siteUrl.replace(/\/$/, "");
	const canonical = canonicalUrl || cleanSiteUrl + "/";
	const fullTitle = title ? `${title} | ${siteName}` : defaultTitle;
	const metaDescription = description || defaultDescription;
	const metaKeywords = keywords || defaultKeywords;
	const socialImage = imageUrl || defaultImage;
	return /* @__PURE__ */ jsxs(Helmet, { children: [
		/* @__PURE__ */ jsx("html", { lang: "en" }),
		/* @__PURE__ */ jsx("title", { children: fullTitle }),
		/* @__PURE__ */ jsx("meta", {
			name: "description",
			content: metaDescription
		}),
		/* @__PURE__ */ jsx("meta", {
			name: "keywords",
			content: metaKeywords
		}),
		/* @__PURE__ */ jsx("meta", {
			name: "robots",
			content: "index, follow"
		}),
		/* @__PURE__ */ jsx("meta", {
			name: "googlebot",
			content: "index, follow"
		}),
		/* @__PURE__ */ jsx("link", {
			rel: "canonical",
			href: canonical
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:type",
			content: type
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:title",
			content: fullTitle
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:description",
			content: metaDescription
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:url",
			content: canonical
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:site_name",
			content: siteName
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:locale",
			content: "en_US"
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:image",
			content: socialImage
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:image:alt",
			content: fullTitle
		}),
		/* @__PURE__ */ jsx("meta", {
			name: "twitter:card",
			content: "summary_large_image"
		}),
		/* @__PURE__ */ jsx("meta", {
			name: "twitter:title",
			content: fullTitle
		}),
		/* @__PURE__ */ jsx("meta", {
			name: "twitter:description",
			content: metaDescription
		}),
		/* @__PURE__ */ jsx("meta", {
			name: "twitter:image",
			content: socialImage
		}),
		/* @__PURE__ */ jsx("meta", {
			name: "twitter:image:alt",
			content: fullTitle
		}),
		/* @__PURE__ */ jsx("meta", {
			name: "theme-color",
			content: "#0f172a"
		})
	] });
};
//#endregion
//#region src/assets/aws2.png
var aws2_default = "/assets/aws2-QhWXAvTr.png";
//#endregion
//#region src/assets/google.png
var google_default = "/assets/google-C55WHSGW.png";
//#endregion
//#region src/assets/mic.png
var mic_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAFACAYAAADNkKWqAAANSUlEQVR4AezZS24kWxEGYBsJxASJTbATxAaYsRnEZpixAcRO2AQSE8Qd+FZ3q33tdlY5H+cRJ+JDXd12VWaeiO8v/UK6v3ryPwIECBQVUIBFg7c2AQJPTwrQt4AAgbICpQuwbOoWJ0Dgq4AC/MrgLwIEKgoowIqp25kAga8CCvArQ8G/rEyAgP8I4jtAgEBdAf8PsG72NidQXkABlv8KVASwM4FvAgrwm4O/CRAoKKAAC4ZuZQIEvgkowG8O/iZQRcCebwQU4BsMPxIgUEtAAdbK27YECLwRUIBvMPxIgEBugR+3U4A/ividAIEyAgqwTNQWJUDgRwEF+KOI3wkQKCNQqgDLpGpRAgR2CTQvwP/++Q8vXgx2ffsOXPS3f/3mxYvBga/MrkubF+CuU11EgACBAAIKMEAIQ0ZwCAECHwQU4AcSbxAgUEVAAVZJ2p4ECHwQUIAfSLyRT8BGBLYFFOC2i3cJECggoAALhGxFAgS2BRTgtot3CWQRsMcDAQX4AMdHBAjkFlCAufO1HQECDwQU4AMcHxEgsLbAZ9MrwM+EfE6AQFoBBZg2WosRIPCZgAL8TMjnBAikFUhdgGlTsxgBAk0EFGATRg8hQGBFAQW4YmpmJkCgiYACbMIY8CFGIkDgUwEF+CmRCwgQyCqgALMmay8CBD4VUICfErlgPQETE9gnoAD3ObmKAIGEAgowYahWIkBgn4AC3OfkKgKrCJjzgIACPIDlUgIEcgkowFx52oYAgQMCCvAAlksJEIgtcHQ6BXhUzPUECKQRUIBporQIAQJHBRTgUTHXEyCQRiBVAaZJxSIECAwRUIBDmB1CgEBEAQUYMRUzESAwREABDmEecIgjCBA4LKAAD5O5gQCBLAIKMEuS9iBA4LCAAjxM5oZ4AiYicE5AAZ5zcxcBAgkEFGCCEK1AgMA5AQV4zs1dBKIImOOCgAK8gOdWAgTWFlCAa+dnegIELggowAt4biVAYK7A1dMV4FVB9xMgsKyAAlw2OoMTIHBVQAFeFXQ/AQLLCixdgMuqG5wAgRACCjBEDIYgQGCGgAKcoe5MAgRCCCjAEDGcGMItBAhcFlCAlwk9gACBVQUU4KrJmZsAgcsCCvAyoQeMF3AigTYCCrCNo6cQILCggAJcMDQjEyDQRkABtnH0FAKjBJzTUEABNsT0KAIE1hJQgGvlZVoCBBoKKMCGmB5FgEBfgdZPV4CtRT2PAIFlBBTgMlEZlACB1gIKsLWo5xEgsIzAUgW4jKpBCRBYQkABLhGTIQkQ6CGgAHuoeiYBAksIKMAlYnp6ejInAQLNBRRgc1IPJEBgFQEFuEpS5iRAoLmAAmxO6oHtBTyRQB8BBdjH1VMJEFhAQAEuEJIRCRDoI6AA+7h6KoFWAp7TUUABdsT1aAIEYgsowNj5mI4AgY4CCrAjrkcTIHBNoPfdCrC3sOcTIBBWQAGGjcZgBAj0FlCAvYU9nwCBsAKhCzCsmsEIEEghoABTxGgJAgTOCCjAM2ruIUAghYACjBqjuQgQ6C6gALsTO4AAgagCCjBqMuYiQKC7gALsTuyA4wLuIDBGQAGOcXYKAQIBBRRgwFCMRIDAGAEFOMbZKQT2CrhuoIACHIjtKAIEYgkowFh5mIYAgYECCnAgtqMIEHgsMPpTBTha3HkECIQRUIBhojAIAQKjBRTgaHHnESAQRiBUAYZRMQgBAiUEFGCJmC1JgMCWgALcUvEeAQIlBBRglJjNQYDAcAEFOJzcgQQIRBFQgFGSMAcBAsMFFOBwcgd+FPAOgTkCCnCOu1MJEAggoAADhGAEAgTmCCjAOe5OJfBdwL8TBRTgRHxHEyAwV0ABzvV3OgECEwUU4ER8RxOoLjB7fwU4OwHnEyAwTUABTqN3MAECswUU4OwEnE+AwDSBqQU4bWsHEyBA4CagAG8I/hAgUFNAAdbM3dYECNwEFOANYcofhxIgMF1AAU6PwAAECMwSUICz5J1LgMB0AQU4PYKKA9iZQAwBBRgjB1MQIDBBQAFOQHckAQIxBBRgjBxMUUfApoEEFGCgMIxCgMBYAQU41ttpBAgEElCAgcIwCoHsAtH2U4DREjEPAQLDBBTgMGoHESAQTUABRkvEPAQIDBMYWoDDtnIQAQIEdggowB1ILiFAIKeAAsyZq60IENgh0LwAf/ePfz97bRgUc9nx3Tt0yV//+P9nLwaHvjQ7Lm5egDvOdAkBAgRCCCjAEDEYggCBGQIKcIZ6uTMtTCCmgAKMmYupCBAYIKAAByA7ggCBmAIKMGYupsojYJPAAgowcDhGI0Cgr4AC7Ovr6QQIBBZQgIHDMRqB1QWiz68AoydkPgIEugkowG60HkyAQHQBBRg9IfMRINBNoGsBdpvagwkQINBAQAE2QPQIAgTWFFCAa+ZmagIEGggowAaIm4/wJgEC4QUUYPiIDEiAQC8BBdhL1nMJEAgvoADDR7TigGYmsIZA8wL89d//8+LFoPXX/+Wfv33xYtD6e9W8AFsP6HkECBDoJaAAe8l6blUBey8koAAXCsuoBAi0FVCAbT09jQCBhQQU4EJhGZVAdIHV5lOAqyVmXgIEmgkowGaUHkSAwGoCCnC1xMxLgEAzgaYF2GwqDyJAgMAAAQU4ANkRBAjEFFCAMXMxFQECAwQUYCtkzyFAYDkBBbhcZAYmQKCVgAJsJek5BAgsJ6AAl4ss4sBmIrCmgAJcMzdTEyDQQEABNkD0CAIE1hRQgGvmZuo4AiZZWEABLhye0QkQuCagAK/5uZsAgYUFFODC4RmdwGyB1c9XgKsnaH4CBE4LKMDTdG4kQGB1AQW4eoLmJ0DgtMClAjx9qhsJECAQQEABBgjBCAQIzBFQgHPcnUqAQAABBXg2BPcRILC8gAJcPkILECBwVkABnpVzHwECywsowOUjnLGAMwnkEFCAOXK0BQECJwQU4Ak0txAgkENAAebI0RbjBJyUSEABJgrTKgQIHBNQgMe8XE2AQCIBBZgoTKsQ6C2Q7fkKMFui9iFAYLeAAtxN5UICBLIJKMBsidqHAIHdAocKcPdTXUiAAIEFBBTgAiEZkQCBPgIKsI+rpxIgsICAAtwbkusIEEgnoADTRWohAgT2CijAvVKuI0AgnYACTBdpj4U8k0BOAQWYM1dbESCwQ0AB7kByCQECOQUUYM5cbdVOwJMSCyjAxOFajQCBxwIK8LGPTwkQSCygABOHazUCVwWy368AsydsPwIE7goowLs0PiBAILuAAsyesP0IELgr8LAA797lAwIECCQQUIAJQrQCAQLnBBTgOTd3ESCQQEAB3gvR+wQIpBdQgOkjtiABAvcEFOA9Ge8TIJBeQAGmj/jMgu4hUENAAdbI2ZYECGwIKMANFG8RIFBDQAHWyNmW+wVcWUhAARYK26oECLwXUIDvPfxGgEAhAQVYKGyrEvhMoNrnCrBa4vYlQOBVQAG+UviBAIFqAgqwWuL2JUDgVeBdAb6+6wcCBAgUEFCABUK2IgEC2wIKcNvFuwQIFBBQgN9D9i8BAuUEFGC5yC1MgMB3AQX4XcK/BAiUE1CA5SLfWth7BGoKKMCauduaAIGbgAK8IfhDgEBNAQVYM3db/yLgp8ICCrBw+FYnUF1AAVb/BtifQGEBBVg4fKsTqC6gAKt/A+xPoLCAAiwcvtUJVBdQgNW/AfYnUFXgtrcCvCH4Q4BATQEFWDN3WxMgcBNQgDcEfwgQqClQtwBr5m1rAgTeCCjANxh+JECgloACrJW3bQkQeCOgAN9g1PnRpgQIfBFQgF8UvAgQKCmgAEvGbmkCBL4IKMAvCl6VBOxK4FVAAb5S+IEAgWoCCrBa4vYlQOBVQAG+UviBQH4BG74XUIDvPfxGgEAhAQVYKGyrEiDwXkABvvfwGwECWQU29lKAGyjeIkCghoACrJGzLQkQ2BBQgBso3iJAoIZAnQKskactCRA4IKAAD2C5lACBXAIKMFeetiFA4ICAAjyAte6lJidAYEtAAW6peI8AgRICCrBEzJYkQGBLQAFuqXgvk4BdCNwVUIB3aXxAgEB2AQWYPWH7ESBwV0AB3qXxAYH1BWzwWEABPvbxKQECiQUUYOJwrUaAwGMBBfjYx6cECKwqsGNuBbgDySUECOQUUIA5c7UVAQI7BBTgDiSXECCQUyBvAebMy1YECDQUUIANMT2KAIG1BBTgWnmZlgCBhgIKsCFmnEeZhACBPQIKcI+SawgQSCmgAFPGaikCBPYINC/An/7y+2cvBnu+fEeuef7T/553vlyX2OrId2bPtc0LcM+hriFAgEAEAQUYIQUzECAwRUABTmF3KIE+Ap56TEABHvNyNQECiQQUYKIwrUKAwDEBBXjMy9UECEQVODGXAjyB5hYCBHIIKMAcOdqCAIETAgrwBJpbCBDIIZCnAHPkYQsCBAYKKMCB2I4iQCCWgAKMlYdpCBAYKKAAB2L3O8qTCRA4I6AAz6i5hwCBFAIKMEWMliBA4IyAAjyj5p5IAmYhcFpAAZ6mcyMBAqsLKMDVEzQ/AQKnBRTgaTo3EpgvYIJrAj8DAAD//+qdXyYAAAAGSURBVAMAvp0i+d3XdfwAAAAASUVORK5CYII=";
//#endregion
//#region src/assets/red.png
var red_default = "/assets/red-BeIBfDBh.png";
//#endregion
//#region src/assets/cisco.png
var cisco_default = "/assets/cisco-WSmB2nKR.png";
//#endregion
//#region src/assets/comptia.png
var comptia_default = "/assets/comptia-DdTGY6cF.png";
//#endregion
//#region src/assets/databricks.png
var databricks_default = "/assets/databricks-BxnS-WX3.png";
//#endregion
//#region src/assets/Fortinet2.png
var Fortinet2_default = "/assets/Fortinet2-DkGfMjpE.png";
//#endregion
//#region src/assets/kubernetes.png
var kubernetes_default = "/assets/kubernetes-2mf20XX1.png";
//#endregion
//#region src/assets/Vmware.png
var Vmware_default = "/assets/Vmware-DLiH1-lt.png";
//#endregion
//#region src/assets/juniper.png
var juniper_default = "/assets/juniper-D2bzfBnu.png";
//#endregion
//#region src/assets/snowflake.png
var snowflake_default = "/assets/snowflake-D-Do1E5k.png";
//#endregion
//#region src/assets/salesforcs.png
var salesforcs_default = "/assets/salesforcs-DjLQPwNp.png";
//#endregion
//#region src/assets/oracle.png
var oracle_default = "/assets/oracle-B5mC3wdF.png";
//#endregion
//#region src/assets/service.png
var service_default = "/assets/service-CXud0jqi.png";
//#endregion
//#region src/assets/alibaba.png
var alibaba_default = "/assets/alibaba-SFDt_DVw.png";
//#endregion
//#region src/assets/docker.png
var docker_default = "/assets/docker-DBJSdWr4.png";
//#endregion
//#region src/assets/git.png
var git_default = "/assets/git-DZayX64z.png";
//#endregion
//#region src/assets/huawel.png
var huawel_default = "/assets/huawel-CYNdaLph.png";
//#endregion
//#region src/assets/mongodb.png
var mongodb_default = "/assets/mongodb-DzLRMONt.png";
//#endregion
//#region src/assets/nutanix.png
var nutanix_default = "/assets/nutanix-C0TszxJZ.png";
//#endregion
//#region src/assets/PaloAlto.png
var PaloAlto_default = "/assets/PaloAlto-rtj0kCLo.png";
//#endregion
//#region src/assets/sap.png
var sap_default = "/assets/sap-DeYlIBvd.png";
//#endregion
//#region src/assets/IBM.png
var IBM_default = "/assets/IBM-D1Vvb9Cr.png";
//#endregion
//#region src/components/LogoCarousel.jsx
var BRAND_LOGOS = [
	{
		id: 1,
		name: "AWS",
		image: aws2_default,
		color: "from-orange-500 to-yellow-500"
	},
	{
		id: 2,
		name: "Microsoft",
		image: mic_default,
		color: "from-blue-500 to-cyan-500"
	},
	{
		id: 3,
		name: "Google Cloud",
		image: google_default,
		color: "from-blue-400 to-green-400"
	},
	{
		id: 4,
		name: "CompTIA",
		image: comptia_default,
		color: "from-purple-500 to-pink-500"
	},
	{
		id: 5,
		name: "Cisco",
		image: cisco_default,
		color: "from-blue-600 to-indigo-600"
	},
	{
		id: 6,
		name: "Red Hat",
		image: red_default,
		color: "from-red-500 to-orange-500"
	},
	{
		id: 7,
		name: "Databricks",
		image: databricks_default,
		color: "from-red-600 to-orange-600"
	},
	{
		id: 8,
		name: "Fortinet",
		image: Fortinet2_default,
		color: "from-red-500 to-red-700"
	},
	{
		id: 9,
		name: "Kubernetes",
		image: kubernetes_default,
		color: "from-blue-500 to-indigo-500"
	},
	{
		id: 10,
		name: "VMware",
		image: Vmware_default,
		color: "from-blue-600 to-purple-600"
	},
	{
		id: 11,
		name: "Juniper",
		image: juniper_default,
		color: "from-green-500 to-teal-500"
	},
	{
		id: 12,
		name: "Snowflake",
		image: snowflake_default,
		color: "from-cyan-400 to-blue-400"
	},
	{
		id: 13,
		name: "Salesforce",
		image: salesforcs_default,
		color: "from-blue-500 to-indigo-500"
	},
	{
		id: 14,
		name: "Oracle",
		image: oracle_default,
		color: "from-red-600 to-orange-600"
	},
	{
		id: 15,
		name: "ServiceNow",
		image: service_default,
		color: "from-emerald-500 to-teal-600"
	},
	{
		id: 16,
		name: "Alibaba Cloud",
		image: alibaba_default,
		color: "from-orange-500 to-amber-500"
	},
	{
		id: 17,
		name: "Docker",
		image: docker_default,
		color: "from-blue-400 to-cyan-600"
	},
	{
		id: 18,
		name: "Git",
		image: git_default,
		color: "from-orange-600 to-red-600"
	},
	{
		id: 19,
		name: "Huawei",
		image: huawel_default,
		color: "from-red-600 to-rose-600"
	},
	{
		id: 20,
		name: "MongoDB",
		image: mongodb_default,
		color: "from-green-600 to-emerald-600"
	},
	{
		id: 21,
		name: "Nutanix",
		image: nutanix_default,
		color: "from-green-500 to-emerald-500"
	},
	{
		id: 22,
		name: "Palo Alto",
		image: PaloAlto_default,
		color: "from-orange-500 to-red-500"
	},
	{
		id: 23,
		name: "SAP",
		image: sap_default,
		color: "from-blue-700 to-indigo-800"
	},
	{
		id: 24,
		name: "IBM",
		image: IBM_default,
		color: "from-blue-600 to-indigo-700"
	}
];
var SLIDE_INTERVAL_MS = 2500;
var TRUSTPILOT_RATING = {
	score: "4.9",
	reviewCount: "1200+"
};
var TrustpilotRating = ({ score, reviewCount }) => /* @__PURE__ */ jsxs("div", {
	className: "flex items-center gap-1",
	children: [
		/* @__PURE__ */ jsx("span", {
			className: "text-sm font-semibold text-gray-700 dark:text-gray-300",
			children: "Trustpilot"
		}),
		/* @__PURE__ */ jsxs("div", {
			className: "flex text-yellow-400",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ jsx(FaStar, {}),
				/* @__PURE__ */ jsx(FaStar, {}),
				/* @__PURE__ */ jsx(FaStar, {}),
				/* @__PURE__ */ jsx(FaStar, {}),
				/* @__PURE__ */ jsx(FaStarHalfAlt, {})
			]
		}),
		/* @__PURE__ */ jsxs("span", {
			className: "sr-only",
			children: [score, " out of 5 stars"]
		}),
		/* @__PURE__ */ jsx("span", {
			className: "text-sm font-bold text-gray-900 dark:text-white",
			children: score
		}),
		/* @__PURE__ */ jsxs("span", {
			className: "text-xs text-gray-500 dark:text-gray-400",
			children: [
				"(",
				reviewCount,
				" Reviews)"
			]
		})
	]
});
var LogoBadge = ({ logo, size = "md" }) => {
	return /* @__PURE__ */ jsx("div", {
		className: `flex-shrink-0 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-md overflow-hidden ${size === "sm" ? "w-7 h-7 p-1" : "w-10 h-10 md:w-12 md:h-12 p-1.5"}`,
		children: /* @__PURE__ */ jsx("img", {
			src: logo.image,
			alt: logo.name,
			className: "w-full h-full object-contain"
		})
	});
};
var ProgressDots = ({ logos, activeIndex, onSelect }) => /* @__PURE__ */ jsx("div", {
	className: "flex-shrink-0 flex gap-1.5 overflow-x-auto max-w-[150px] md:max-w-none py-1",
	role: "tablist",
	"aria-label": "Featured brand slides",
	children: logos.map((logo, index) => /* @__PURE__ */ jsx("button", {
		type: "button",
		role: "tab",
		"aria-selected": index === activeIndex,
		"aria-label": `Show ${logo.name}`,
		onClick: () => onSelect(index),
		className: `transition-all duration-300 rounded-full flex-shrink-0 ${index === activeIndex ? "w-6 h-2 bg-indigo-600 dark:bg-indigo-400" : "w-2 h-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"}`
	}, logo.id))
});
var FeaturedBrandSlide = ({ activeIndex, currentLogo, nextLogo }) => /* @__PURE__ */ jsx("div", {
	className: "flex-1 overflow-hidden relative h-12 md:h-14",
	children: /* @__PURE__ */ jsx(AnimatePresence, {
		mode: "wait",
		children: /* @__PURE__ */ jsx(motion.div, {
			initial: {
				x: 50,
				opacity: 0
			},
			animate: {
				x: 0,
				opacity: 1
			},
			exit: {
				x: -50,
				opacity: 0
			},
			transition: {
				duration: .5,
				ease: "easeInOut"
			},
			className: "absolute inset-0 flex items-center",
			"aria-live": "polite",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-4 md:gap-6 w-full",
				children: [
					/* @__PURE__ */ jsx(LogoBadge, { logo: currentLogo }),
					/* @__PURE__ */ jsx("span", {
						className: "text-lg md:text-2xl font-bold text-gray-800 dark:text-white",
						children: currentLogo.name
					}),
					/* @__PURE__ */ jsx("span", {
						className: "flex-shrink-0 w-2 h-2 bg-green-500 rounded-full animate-pulse",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "hidden md:flex items-center gap-3 ml-auto opacity-40",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-xs text-gray-400 dark:text-gray-500",
								children: "UP NEXT"
							}),
							/* @__PURE__ */ jsx(LogoBadge, {
								logo: nextLogo,
								size: "sm"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-xs text-gray-500 dark:text-gray-400",
								children: nextLogo.name
							})
						]
					})
				]
			})
		}, activeIndex)
	})
});
var BrandGridItem = ({ logo }) => /* @__PURE__ */ jsxs(motion.div, {
	whileHover: {
		scale: 1.05,
		y: -3
	},
	className: "flex items-center gap-2 px-3 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 shadow-sm hover:shadow-md transition-all duration-300",
	children: [/* @__PURE__ */ jsx(LogoBadge, {
		logo,
		size: "sm"
	}), /* @__PURE__ */ jsx("span", {
		className: "text-xs font-medium text-gray-700 dark:text-gray-300 truncate",
		children: logo.name
	})]
});
var LogoCarousel = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	const intervalRef = useRef(null);
	const goToSlide = useCallback((index) => {
		setActiveIndex(index);
	}, []);
	useEffect(() => {
		if (isPaused) return void 0;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return void 0;
		intervalRef.current = setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % BRAND_LOGOS.length);
		}, SLIDE_INTERVAL_MS);
		return () => clearInterval(intervalRef.current);
	}, [isPaused]);
	const pauseAutoplay = () => setIsPaused(true);
	const resumeAutoplay = () => setIsPaused(false);
	const currentLogo = BRAND_LOGOS[activeIndex];
	const nextLogo = useMemo(() => BRAND_LOGOS[(activeIndex + 1) % BRAND_LOGOS.length], [activeIndex]);
	return /* @__PURE__ */ jsx("div", {
		className: "w-full bg-dark dark:bg-gray-900 py-8 md:py-12 dark:border-gray-700",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 md:mb-8",
					children: [/* @__PURE__ */ jsx(TrustpilotRating, { ...TRUSTPILOT_RATING }), /* @__PURE__ */ jsx("span", {
						className: "text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded-full",
						children: "FEATURED PARTNERS"
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-indigo-50/30 dark:from-gray-800 dark:to-indigo-900/20 p-4 md:p-6 shadow-lg",
					onMouseEnter: pauseAutoplay,
					onMouseLeave: resumeAutoplay,
					onFocus: pauseAutoplay,
					onBlur: resumeAutoplay,
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-4",
						children: [
							/* @__PURE__ */ jsxs("span", {
								className: "flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-lg",
								children: [/* @__PURE__ */ jsx("span", {
									className: "w-1.5 h-1.5 bg-white rounded-full animate-pulse",
									"aria-hidden": "true"
								}), "NOW SHOWING"]
							}),
							/* @__PURE__ */ jsx(FeaturedBrandSlide, {
								activeIndex,
								currentLogo,
								nextLogo
							}),
							/* @__PURE__ */ jsx(ProgressDots, {
								logos: BRAND_LOGOS,
								activeIndex,
								onSelect: goToSlide
							})
						]
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3",
					children: BRAND_LOGOS.map((logo) => /* @__PURE__ */ jsx(BrandGridItem, { logo }, logo.id))
				})
			]
		})
	});
};
//#endregion
//#region src/components/VoucherCard.jsx
var logoMap = {
	aws: aws2_default,
	amazon: aws2_default,
	google: google_default,
	gcp: google_default,
	microsoft: mic_default,
	azure: mic_default,
	redhat: red_default,
	cisco: cisco_default,
	comptia: comptia_default,
	databricks: databricks_default,
	fortinet: Fortinet2_default,
	kubernetes: kubernetes_default,
	cncf: kubernetes_default,
	vmware: Vmware_default,
	juniper: juniper_default,
	snowflake: snowflake_default,
	salesforce: salesforcs_default,
	oracle: oracle_default,
	servicenow: service_default,
	alibaba: alibaba_default,
	alibabacloud: alibaba_default,
	docker: docker_default,
	git: git_default,
	huawel: huawel_default,
	huawei: huawel_default,
	mongodb: mongodb_default,
	mongo: mongodb_default,
	nutanix: nutanix_default,
	paloalto: PaloAlto_default,
	sap: sap_default,
	ibm: IBM_default
};
var VoucherCard = ({ voucher = {}, index = 0 }) => {
	const navigate = useNavigate();
	const { _id, shortName = "AWS All Exams", code = "CODE-123", logo = "aws", discount = 70, popular = true, instantDelivery = true, category = "Cloud", description = "Certification Exam Vouchers" } = voucher;
	const whatsappUrl = `https://wa.me/+8801982188224?text=${encodeURIComponent(`Hi, I'm interested in buying the ${shortName} (${code}) voucher.`)}`;
	const handleDetailsClick = (e) => {
		e.stopPropagation();
		navigate(`/vouchers/${_id || code}`);
	};
	return /* @__PURE__ */ jsxs(motion.div, {
		initial: {
			opacity: 0,
			y: 20
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			duration: .35,
			delay: index * .05
		},
		whileHover: {
			y: -4,
			transition: { duration: .2 }
		},
		className: "w-full max-w-sm bg-[#0a0f1d] border border-slate-800/80 rounded-[28px] p-5 font-sans text-white shadow-xl flex flex-col justify-between select-none",
		children: [/* @__PURE__ */ jsxs("div", { children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between mb-5",
				children: [/* @__PURE__ */ jsx("span", {
					className: "px-4 py-1.5 rounded-full text-xs font-semibold bg-slate-800/70 text-slate-200 border border-slate-700/50",
					children: category
				}), popular && /* @__PURE__ */ jsxs("span", {
					className: "inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/30",
					children: [/* @__PURE__ */ jsx(FaBolt, { className: "text-amber-400 text-xs" }), "Popular"]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-4 mb-5",
				children: [/* @__PURE__ */ jsx("div", {
					className: "w-16 h-16 shrink-0 rounded-2xl bg-[#0d1425] border border-slate-800 p-2.5 flex items-center justify-center",
					children: /* @__PURE__ */ jsx("img", {
						src: logoMap[logo?.toLowerCase()] || logoMap.aws,
						alt: `${shortName} voucher`,
						className: "w-full h-full object-contain"
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "text-2xl font-bold tracking-tight text-white line-clamp-1",
						children: shortName
					}), /* @__PURE__ */ jsx("p", {
						className: "text-sm text-slate-400 font-medium mt-0.5 line-clamp-1",
						children: description
					})]
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "h-[1px] bg-slate-800/80 w-full mb-5" }),
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between gap-3 mb-5",
				children: [
					instantDelivery && /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2 text-emerald-400 font-medium text-sm",
						children: [/* @__PURE__ */ jsx(FaBolt, { className: "text-emerald-400 text-base shrink-0" }), /* @__PURE__ */ jsx("span", { children: "Instant Delivery" })]
					}),
					/* @__PURE__ */ jsx("div", { className: "h-5 w-[1px] bg-slate-800" }),
					discount > 0 && /* @__PURE__ */ jsxs("div", {
						className: "px-3.5 py-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-medium text-xs",
						children: [
							"Save up to ",
							discount,
							"%"
						]
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "bg-[#0d1425]/60 border border-slate-800/80 rounded-2xl p-4 mb-4 space-y-3",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ jsx("div", {
							className: "p-1 rounded-full border border-emerald-500/40 text-emerald-400",
							children: /* @__PURE__ */ jsx(FaShieldAlt, { className: "text-xs" })
						}), /* @__PURE__ */ jsx("span", {
							className: "text-sm font-semibold text-slate-200",
							children: "Official Exam Vouchers"
						})]
					}),
					/* @__PURE__ */ jsx("div", { className: "h-[1px] bg-slate-800/60 w-full" }),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ jsx("div", {
							className: "p-1 text-sky-400",
							children: /* @__PURE__ */ jsx(FaGlobe, { className: "text-base" })
						}), /* @__PURE__ */ jsx("span", {
							className: "text-sm font-semibold text-slate-200",
							children: "Worldwide Availability"
						})]
					})
				]
			})
		] }), /* @__PURE__ */ jsxs("div", {
			className: "space-y-3 mt-2",
			children: [/* @__PURE__ */ jsxs(motion.button, {
				onClick: handleDetailsClick,
				whileHover: { scale: 1.01 },
				whileTap: { scale: .98 },
				className: "w-full flex items-center justify-between px-4 py-3 bg-[#0d1425] hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 text-white font-semibold rounded-2xl text-sm transition-all",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ jsx(HiOutlineDocumentSearch, { className: "text-xl text-slate-300" }), /* @__PURE__ */ jsx("span", { children: "Browse All Certificates" })]
				}), /* @__PURE__ */ jsx(FaChevronRight, { className: "text-xs text-slate-400" })]
			}), /* @__PURE__ */ jsxs(motion.a, {
				href: whatsappUrl,
				target: "_blank",
				rel: "noopener noreferrer",
				whileHover: { scale: 1.01 },
				whileTap: { scale: .98 },
				onClick: (e) => e.stopPropagation(),
				className: "w-full flex items-center justify-between px-4 py-3 bg-[#05a650] hover:bg-[#049346] text-white font-bold rounded-2xl text-sm transition-all shadow-lg shadow-emerald-950/20",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ jsx(FaWhatsapp, { className: "text-xl" }), /* @__PURE__ */ jsx("span", { children: "Order via WhatsApp" })]
				}), /* @__PURE__ */ jsx(FaChevronRight, { className: "text-xs text-white/80" })]
			})]
		})]
	});
};
//#endregion
//#region src/data/Vouchers.js
var vouchersData = [
	{
		_id: "voucher-1",
		id: 1,
		name: "AWS Certified Solutions Architect - Associate",
		shortName: "AWS Solutions Architect",
		code: "SAA-C03",
		logo: "aws",
		category: "Cloud",
		officialPrice: 150,
		youPay: 105,
		discount: 60,
		popular: true,
		instantDelivery: true,
		guideId: "aws",
		description: "AWS Certified Solutions Architect - Associate (SAA-C03) exam voucher. Design and deploy scalable, highly available systems on AWS."
	},
	{
		_id: "voucher-2",
		id: 2,
		name: "Microsoft Azure Administrator Associate",
		shortName: "Azure Administrator",
		code: "AZ-104",
		logo: "microsoft",
		category: "Cloud",
		officialPrice: 165,
		youPay: 115,
		discount: 60,
		popular: true,
		instantDelivery: true,
		guideId: "azure",
		description: "Microsoft Azure Administrator Associate (AZ-104) exam voucher. Manage and maintain Azure environments."
	},
	{
		_id: "voucher-3",
		id: 3,
		name: "Google Cloud Professional Cloud Architect",
		shortName: "Google Cloud Architect",
		code: "GCP-PCA",
		logo: "google",
		category: "Cloud",
		officialPrice: 200,
		youPay: 140,
		discount: 60,
		popular: true,
		instantDelivery: true,
		guideId: "google",
		description: "Google Cloud Professional Cloud Architect (PCA) exam voucher. Design, develop, and manage secure, scalable solutions on GCP."
	},
	{
		_id: "voucher-4",
		id: 4,
		name: "Red Hat Certified System Administrator",
		shortName: "Red Hat System Admin",
		code: "EX200",
		logo: "redhat",
		category: "Linux",
		officialPrice: 400,
		youPay: 280,
		discount: 60,
		popular: true,
		instantDelivery: true,
		guideId: "redhat",
		description: "Red Hat Certified System Administrator (EX200) exam voucher. Validate your Linux system administration skills on Red Hat Enterprise Linux."
	},
	{
		_id: "voucher-5",
		id: 5,
		name: "CompTIA Security+",
		shortName: "CompTIA Security+",
		code: "SY0-701",
		logo: "comptia",
		category: "Security",
		officialPrice: 392,
		youPay: 274,
		discount: 60,
		popular: true,
		instantDelivery: true,
		guideId: "comptia",
		description: "CompTIA Security+ (SY0-701) exam voucher. Validate your security fundamentals, threat management, and compliance skills."
	},
	{
		_id: "voucher-6",
		id: 6,
		name: "Cisco Certified Network Associate",
		shortName: "CCNA",
		code: "200-301",
		logo: "cisco",
		category: "Networking",
		officialPrice: 300,
		youPay: 210,
		discount: 60,
		popular: false,
		instantDelivery: true,
		guideId: "cisco",
		description: "Cisco Certified Network Associate (CCNA) exam voucher. Learn network fundamentals, IP connectivity, security, and automation."
	},
	{
		_id: "voucher-7",
		id: 7,
		name: "Databricks Certified Data Engineer Associate",
		shortName: "Databricks Data Engineer",
		code: "DB-DEA",
		logo: "databricks",
		category: "Data",
		officialPrice: 200,
		youPay: 140,
		discount: 60,
		popular: false,
		instantDelivery: true,
		guideId: "databricks",
		description: "Databricks Certified Data Engineer Associate exam voucher. Validate processing and data pipeline engineering skills."
	},
	{
		_id: "voucher-8",
		id: 8,
		name: "Certified Kubernetes Administrator",
		shortName: "CKA (Kubernetes)",
		code: "CKA",
		logo: "kubernetes",
		category: "DevOps",
		officialPrice: 395,
		youPay: 276,
		discount: 60,
		popular: true,
		instantDelivery: true,
		guideId: "kubernetes",
		description: "Certified Kubernetes Administrator (CKA) exam voucher. Demonstrate competence in Kubernetes administration and management."
	},
	{
		_id: "voucher-9",
		id: 9,
		name: "VMware Certified Professional - Data Center Virtualization",
		shortName: "VMware VCP-DCV",
		code: "2V0-21.23",
		logo: "vmware",
		category: "Virtualization",
		officialPrice: 250,
		youPay: 175,
		discount: 60,
		popular: false,
		instantDelivery: true,
		guideId: "vmware",
		description: "VMware Certified Professional - Data Center Virtualization exam voucher. Demonstrate skills in vSphere environments."
	},
	{
		_id: "voucher-10",
		id: 10,
		name: "CompTIA Network+",
		shortName: "CompTIA Network+",
		code: "N10-008",
		logo: "comptia",
		category: "Networking",
		officialPrice: 348,
		youPay: 244,
		discount: 60,
		popular: false,
		instantDelivery: true,
		guideId: "comptia",
		description: "CompTIA Network+ (N10-008) exam voucher. Learn networking fundamentals, infrastructure, operations, and security."
	},
	{
		_id: "voucher-11",
		id: 11,
		name: "Juniper Networks Certified Associate - Junos",
		shortName: "JNCIA-Junos",
		code: "JN0-104",
		logo: "juniper",
		category: "Networking",
		officialPrice: 200,
		youPay: 140,
		discount: 60,
		popular: false,
		instantDelivery: true,
		guideId: "juniper",
		description: "Juniper Networks Certified Associate (JNCIA-Junos) exam voucher. Entry-level networking fundamentals for Junos OS."
	},
	{
		_id: "voucher-12",
		id: 12,
		name: "Fortinet NSE 4 - FortiOS",
		shortName: "Fortinet NSE 4",
		code: "NSE4",
		logo: "fortinet",
		category: "Security",
		officialPrice: 400,
		youPay: 280,
		discount: 60,
		popular: false,
		instantDelivery: true,
		guideId: "fortinet",
		description: "Fortinet NSE 4 (FortiOS) exam voucher. Validate your skills in Fortinet security solutions and network security."
	},
	{
		_id: "voucher-13",
		id: 13,
		name: "SnowPro Core Certification",
		shortName: "SnowPro Core",
		code: "COF-C02",
		logo: "snowflake",
		category: "Data",
		officialPrice: 350,
		youPay: 245,
		discount: 60,
		popular: false,
		instantDelivery: true,
		guideId: "snowflake",
		description: "SnowPro Core Certification (COF-C02) exam voucher. Validate your understanding of Snowflake architecture, security, and performance."
	},
	{
		_id: "voucher-14",
		id: 14,
		name: "Salesforce Certified Administrator",
		shortName: "Salesforce Admin",
		code: "ADM-201",
		logo: "salesforce",
		category: "CRM",
		officialPrice: 250,
		youPay: 175,
		discount: 60,
		popular: false,
		instantDelivery: true,
		guideId: "salesforce",
		description: "Salesforce Certified Administrator (ADM-201) exam voucher. Validate your skills in Salesforce configuration, automation, and user management."
	},
	{
		_id: "voucher-15",
		id: 15,
		name: "Oracle Cloud Infrastructure Architect Associate",
		shortName: "Oracle OCI Architect",
		code: "1Z0-1072",
		logo: "oracle",
		category: "Cloud",
		officialPrice: 245,
		youPay: 170,
		discount: 60,
		popular: false,
		instantDelivery: true,
		guideId: "oracle",
		description: "Oracle Cloud Infrastructure Architect Associate exam voucher. Design and deploy Oracle Cloud solutions."
	},
	{
		_id: "voucher-16",
		id: 16,
		name: "ServiceNow Certified System Administrator",
		shortName: "ServiceNow CSA",
		code: "CSA",
		logo: "servicenow",
		category: "ITSM",
		officialPrice: 300,
		youPay: 210,
		discount: 60,
		popular: false,
		instantDelivery: true,
		guideId: "servicenow",
		description: "ServiceNow Certified System Administrator (CSA) exam voucher. Configure, implement, and maintain ServiceNow platform."
	},
	{
		_id: "voucher-17",
		id: 17,
		name: "Alibaba Cloud Certified Associate",
		shortName: "Alibaba ACA",
		code: "ACA-Cloud1",
		logo: "alibaba",
		category: "Cloud",
		officialPrice: 120,
		youPay: 84,
		discount: 60,
		popular: false,
		instantDelivery: true,
		guideId: "alibaba",
		description: "Alibaba Cloud Certified Associate exam voucher. Demonstrate basic knowledge of Alibaba Cloud core services."
	},
	{
		_id: "voucher-18",
		id: 18,
		name: "Docker Certified Associate",
		shortName: "Docker DCA",
		code: "DCA",
		logo: "docker",
		category: "DevOps",
		officialPrice: 195,
		youPay: 136,
		discount: 60,
		popular: true,
		instantDelivery: true,
		guideId: "docker",
		description: "Docker Certified Associate (DCA) exam voucher. Validate container orchestration, image creation, and security skills."
	},
	{
		_id: "voucher-19",
		id: 19,
		name: "GitLab Certified Associate",
		shortName: "GitLab Associate",
		code: "GL-ASSOC",
		logo: "git",
		category: "DevOps",
		officialPrice: 150,
		youPay: 105,
		discount: 60,
		popular: false,
		instantDelivery: true,
		guideId: "git",
		description: "GitLab Certified Associate exam voucher. Demonstrate proficiency in Git fundamentals, CI/CD, and DevOps workflows."
	},
	{
		_id: "voucher-20",
		id: 20,
		name: "Huawei Certified ICT Associate",
		shortName: "Huawei HCIA",
		code: "HCIA-Datacom",
		logo: "huawel",
		category: "Networking",
		officialPrice: 200,
		youPay: 140,
		discount: 60,
		popular: false,
		instantDelivery: true,
		guideId: "huawei",
		description: "Huawei Certified ICT Associate (HCIA) exam voucher. Master basic routing, switching, and network engineering."
	},
	{
		_id: "voucher-21",
		id: 21,
		name: "MongoDB Certified Developer Associate",
		shortName: "MongoDB Developer",
		code: "C100DEV",
		logo: "mongodb",
		category: "Database",
		officialPrice: 150,
		youPay: 105,
		discount: 60,
		popular: false,
		instantDelivery: true,
		guideId: "mongodb",
		description: "MongoDB Certified Developer Associate exam voucher. Validate skills in building applications with MongoDB."
	},
	{
		_id: "voucher-22",
		id: 22,
		name: "Nutanix Certified Professional - Multicloud Infrastructure",
		shortName: "Nutanix NCP-MCI",
		code: "NCP-MCI",
		logo: "nutanix",
		category: "Virtualization",
		officialPrice: 199,
		youPay: 139,
		discount: 60,
		popular: false,
		instantDelivery: true,
		guideId: "nutanix",
		description: "Nutanix Certified Professional (NCP-MCI) exam voucher. Demonstrate ability to deploy and manage Nutanix Enterprise Cloud."
	},
	{
		_id: "voucher-23",
		id: 23,
		name: "Palo Alto Networks Certified Network Security Engineer",
		shortName: "Palo Alto PCNSE",
		code: "PCNSE",
		logo: "PaloAlto",
		category: "Security",
		officialPrice: 175,
		youPay: 122,
		discount: 60,
		popular: true,
		instantDelivery: true,
		guideId: "paloalto",
		description: "Palo Alto Networks Certified Network Security Engineer (PCNSE) exam voucher. Demonstrate expertise in Next-Generation Firewalls."
	},
	{
		_id: "voucher-24",
		id: 24,
		name: "SAP Certified Associate - Integration Associate",
		shortName: "SAP Associate",
		code: "C_CPI_15",
		logo: "sap",
		category: "ERP",
		officialPrice: 250,
		youPay: 175,
		discount: 60,
		popular: false,
		instantDelivery: true,
		guideId: "sap",
		description: "SAP Certified Application Associate exam voucher. Validate expertise in SAP Integration Suite and cloud solutions."
	},
	{
		_id: "voucher-25",
		id: 25,
		name: "IBM Certified Solution Architect - Cloud",
		shortName: "IBM Cloud Architect",
		code: "C1000-118",
		logo: "IBM",
		category: "Cloud",
		officialPrice: 200,
		youPay: 140,
		discount: 60,
		popular: false,
		instantDelivery: true,
		guideId: "ibm",
		description: "IBM Certified Solution Architect - Cloud v4 exam voucher. Design, plan, and architect secure IBM Cloud solutions."
	}
];
//#endregion
//#region src/components/ProductSchema.jsx
var ProductSchema = ({ voucher }) => {
	if (!voucher) return null;
	const { name = "Techcyfy Voucher", shortName = "Exam Voucher", code = "", officialPrice = 0, youPay = 0, discount = 0, category = "Certification", rating = 4.9, reviewCount = 1200 } = voucher;
	const schema = {
		"@context": "https://schema.org",
		"@type": "Product",
		"name": shortName || name,
		"description": `Get genuine ${shortName || name} exam voucher with ${discount}% discount. Instant delivery guaranteed.`,
		"sku": code,
		"category": category || "IT Certification",
		"brand": {
			"@type": "Brand",
			"name": "Techcyfy"
		},
		"offers": {
			"@type": "Offer",
			"price": youPay,
			"priceCurrency": "USD",
			"availability": "https://schema.org/InStock",
			"url": `https://your-domain.com/vouchers/${code}`,
			"seller": {
				"@type": "Organization",
				"name": "Techcyfy"
			}
		},
		"aggregateRating": {
			"@type": "AggregateRating",
			"ratingValue": rating || 4.9,
			"reviewCount": reviewCount || 1200
		}
	};
	return /* @__PURE__ */ jsx(Helmet, { children: /* @__PURE__ */ jsx("script", {
		type: "application/ld+json",
		children: JSON.stringify(schema)
	}) });
};
//#endregion
//#region src/components/VoucherSection.jsx
var VoucherSection = () => {
	const [showAll, setShowAll] = useState(false);
	const [visibleCount, setVisibleCount] = useState(4);
	const filteredVouchers = showAll ? vouchersData : vouchersData.filter((v) => v.popular);
	const displayedVouchers = showAll ? filteredVouchers : filteredVouchers.slice(0, visibleCount);
	const hasMore = !showAll && visibleCount < filteredVouchers.length;
	const hasLess = !showAll && visibleCount > 4;
	const toggleShowAll = () => {
		setShowAll(!showAll);
		setVisibleCount(4);
	};
	const loadOneMore = () => {
		setVisibleCount((prev) => Math.min(prev + 1, filteredVouchers.length));
	};
	const removeOne = () => {
		setVisibleCount((prev) => Math.max(prev - 1, 4));
	};
	const getGridCols = () => {
		if (displayedVouchers.length === 1) return "grid-cols-1";
		if (displayedVouchers.length === 2) return "grid-cols-1 sm:grid-cols-2";
		if (displayedVouchers.length === 3) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
		return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(SEO, {
			title: "IT Certification Exam Vouchers",
			description: "Explore discounted IT certification exam vouchers from AWS, Microsoft Azure, Google Cloud, CompTIA, Cisco, Fortinet and more.",
			keywords: "IT exam vouchers, certification vouchers, AWS, Azure, GCP, CompTIA, Cisco, Fortinet",
			canonicalUrl: "https://techcyfy.com/vouchers"
		}),
		/* @__PURE__ */ jsx(BreadcrumbSchema, { items: [{
			name: "Home",
			url: "/"
		}, {
			name: "Vouchers",
			url: "/vouchers"
		}] }),
		vouchersData.slice(1, visibleCount).map((voucher) => /* @__PURE__ */ jsx(ProductSchema, { vouchers: [voucher] }, voucher.id || voucher._id)),
		/* @__PURE__ */ jsx("section", {
			className: "py-6 sm:py-8 md:py-12 lg:py-16 text-white",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6",
						children: [/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-1.5",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-[8px] sm:text-[10px] font-bold text-sky-400 bg-sky-500/10 border border-sky-500/30 px-2 sm:px-2.5 py-0.5 rounded-full",
									children: "FEATURED"
								}), /* @__PURE__ */ jsx("div", { className: "h-px flex-1 bg-gradient-to-r from-sky-400/30 to-transparent" })]
							}),
							/* @__PURE__ */ jsx("h2", {
								id: "vouchers-heading",
								className: "text-base sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-white leading-tight",
								children: showAll ? "All IT Certification Exam Vouchers" : "Popular IT Certification Exam Vouchers"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-[10px] sm:text-xs md:text-sm text-slate-400 mt-0.5",
								children: showAll ? "Explore our complete catalog of IT certification exam vouchers." : "Most in-demand certification vouchers with best discounts."
							})
						] }), /* @__PURE__ */ jsxs(motion.button, {
							onClick: toggleShowAll,
							whileHover: { scale: 1.03 },
							whileTap: { scale: .97 },
							className: "flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600 hover:bg-blue-500 text-white text-[10px] sm:text-xs font-semibold rounded-lg shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 transition-all duration-300 flex-shrink-0 self-start sm:self-auto",
							children: [showAll ? "Show Popular" : "View All", /* @__PURE__ */ jsx(FaArrowRight, { className: `text-[8px] sm:text-[10px] transition-transform duration-300 ${showAll ? "rotate-180" : ""}` })]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "relative",
						children: [
							!showAll && /* @__PURE__ */ jsxs("div", {
								className: "hidden md:block",
								children: [hasLess && /* @__PURE__ */ jsx(motion.button, {
									onClick: removeOne,
									whileHover: {
										scale: 1.1,
										x: -3
									},
									whileTap: { scale: .9 },
									className: "absolute -left-3 lg:-left-5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 hover:border-sky-400/50 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 shadow-lg",
									"aria-label": "Show less",
									children: /* @__PURE__ */ jsx(FaArrowLeft, { className: "text-[10px] lg:text-sm" })
								}), hasMore && /* @__PURE__ */ jsx(motion.button, {
									onClick: loadOneMore,
									whileHover: {
										scale: 1.1,
										x: 3
									},
									whileTap: { scale: .9 },
									className: "absolute -right-3 lg:-right-5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 hover:border-sky-400/50 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 shadow-lg",
									"aria-label": "Load more",
									children: /* @__PURE__ */ jsx(FaArrowRight, { className: "text-[10px] lg:text-sm" })
								})]
							}),
							/* @__PURE__ */ jsx(AnimatePresence, {
								mode: "wait",
								children: /* @__PURE__ */ jsx(motion.div, {
									initial: {
										opacity: 0,
										y: 20
									},
									animate: {
										opacity: 1,
										y: 0
									},
									exit: {
										opacity: 0,
										y: -20
									},
									transition: { duration: .3 },
									className: `grid ${getGridCols()} gap-2 sm:gap-3 md:gap-4 lg:gap-5 justify-items-center sm:justify-items-stretch`,
									children: displayedVouchers.map((voucher, index) => /* @__PURE__ */ jsx(VoucherCard, {
										voucher,
										index
									}, voucher.id || voucher._id || index))
								}, showAll ? "all" : "popular")
							}),
							displayedVouchers.length === 0 && /* @__PURE__ */ jsx("div", {
								className: "text-center py-8 sm:py-12",
								children: /* @__PURE__ */ jsx("p", {
									className: "text-slate-400 text-xs sm:text-sm",
									children: "No vouchers found."
								})
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-col items-center gap-2 sm:gap-3 mt-4 sm:mt-5 md:mt-6",
						children: [!showAll && /* @__PURE__ */ jsxs("div", {
							className: "flex md:hidden items-center gap-3",
							children: [
								hasLess && /* @__PURE__ */ jsxs(motion.button, {
									onClick: removeOne,
									whileHover: { scale: 1.05 },
									whileTap: { scale: .95 },
									className: "flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white text-[10px]",
									children: [/* @__PURE__ */ jsx(FaArrowLeft, { className: "text-[8px]" }), "Less"]
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "text-[10px] text-slate-400",
									children: [
										/* @__PURE__ */ jsx("span", {
											className: "text-white font-semibold",
											children: displayedVouchers.length
										}),
										" ",
										"/",
										" ",
										/* @__PURE__ */ jsx("span", {
											className: "text-white font-semibold",
											children: filteredVouchers.length
										})
									]
								}),
								hasMore && /* @__PURE__ */ jsxs(motion.button, {
									onClick: loadOneMore,
									whileHover: { scale: 1.05 },
									whileTap: { scale: .95 },
									className: "flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white text-[10px]",
									children: ["More", /* @__PURE__ */ jsx(FaArrowRight, { className: "text-[8px]" })]
								})
							]
						}), /* @__PURE__ */ jsx("div", {
							className: "flex items-center gap-2",
							children: /* @__PURE__ */ jsxs("span", {
								className: "text-[10px] sm:text-xs text-slate-400",
								children: [
									"Showing",
									" ",
									/* @__PURE__ */ jsx("span", {
										className: "text-white font-semibold",
										children: displayedVouchers.length
									}),
									" ",
									"of",
									" ",
									/* @__PURE__ */ jsx("span", {
										className: "text-white font-semibold",
										children: filteredVouchers.length
									})
								]
							})
						})]
					})
				]
			})
		})
	] });
};
//#endregion
//#region src/components/WhyChoose.jsx
var WhyChoose = () => {
	const features = [
		{
			icon: /* @__PURE__ */ jsx(FaShieldAlt, { className: "text-3xl text-sky-400" }),
			title: "100% Genuine",
			description: "All vouchers are 100% genuine and valid."
		},
		{
			icon: /* @__PURE__ */ jsx(FaRocket, { className: "text-3xl text-emerald-400" }),
			title: "Instant Delivery",
			description: "Receive your voucher instantly via email."
		},
		{
			icon: /* @__PURE__ */ jsx(FaLock, { className: "text-3xl text-amber-400" }),
			title: "Secure Payment",
			description: "Your payment information is 100% secure."
		},
		{
			icon: /* @__PURE__ */ jsx(FaHeadset, { className: "text-3xl text-purple-400" }),
			title: "Worldwide Support",
			description: "24/7 support for all your queries worldwide."
		},
		{
			icon: /* @__PURE__ */ jsx(FaPercent, { className: "text-3xl text-rose-400" }),
			title: "Best Discounts",
			description: "Get the biggest discounts on all exam vouchers."
		},
		{
			icon: /* @__PURE__ */ jsx(FaThumbsUp, { className: "text-3xl text-blue-400" }),
			title: "Easy & Reliable",
			description: "Simple process, reliable and hassle-free."
		}
	];
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: .1,
				delayChildren: .2
			}
		}
	};
	const itemVariants = {
		hidden: {
			opacity: 0,
			y: 30
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: .5,
				ease: "easeOut"
			}
		}
	};
	return /* @__PURE__ */ jsx("section", {
		className: "py-12 md:py-16 lg:py-20 px-4 bg-black text-white",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-6xl mx-auto",
			children: [/* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					amount: .3
				},
				transition: { duration: .6 },
				className: "text-center mb-10 md:mb-12 lg:mb-14",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-xs md:text-sm font-bold text-sky-400 bg-sky-500/10 border border-sky-500/30 px-4 py-1.5 rounded-full uppercase tracking-wider",
					children: "Why Choose TechCyfy?"
				}), /* @__PURE__ */ jsxs("h2", {
					className: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-3",
					children: [
						"Trusted by ",
						/* @__PURE__ */ jsx("span", {
							className: "text-sky-400",
							children: "Professionals"
						}),
						" Worldwide"
					]
				})]
			}), /* @__PURE__ */ jsx(motion.div, {
				variants: containerVariants,
				initial: "hidden",
				whileInView: "visible",
				viewport: {
					once: true,
					amount: .2
				},
				className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6",
				children: features.map((feature, index) => /* @__PURE__ */ jsxs(motion.div, {
					variants: itemVariants,
					whileHover: {
						y: -6,
						transition: { duration: .2 }
					},
					className: "group relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-slate-700/50 hover:border-sky-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/5",
					children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" }), /* @__PURE__ */ jsxs("div", {
						className: "relative z-10",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "w-14 h-14 md:w-16 md:h-16 rounded-xl bg-slate-700/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300",
								children: feature.icon
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "text-base md:text-lg font-bold text-white mb-2",
								children: feature.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm md:text-base text-slate-400 leading-relaxed",
								children: feature.description
							})
						]
					})]
				}, index))
			})]
		})
	});
};
//#endregion
//#region src/components/HowItWorks.jsx
var HowItWorks = () => {
	const breadcrumbItems = [{
		name: "Home",
		url: "/"
	}, {
		name: "How It Works",
		url: "/how-it-works"
	}];
	const steps = [
		{
			number: "1",
			icon: /* @__PURE__ */ jsx(FaSearch, { className: "text-3xl text-sky-400" }),
			title: "Choose Exam",
			description: "Browse and select the exam voucher you need.",
			delay: 0
		},
		{
			number: "2",
			icon: /* @__PURE__ */ jsx(FaWhatsapp, { className: "text-3xl text-green-400" }),
			title: "Contact Us",
			description: "Message us on WhatsApp or Telegram.",
			delay: .2
		},
		{
			number: "3",
			icon: /* @__PURE__ */ jsx(FaEnvelope, { className: "text-3xl text-amber-400" }),
			title: "Get Voucher",
			description: "Receive your voucher instantly via email.",
			delay: .4
		}
	];
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs(Helmet, { children: [
			/* @__PURE__ */ jsx("title", { children: "How It Works - Get Your Exam Voucher in 3 Easy Steps | Techcyfy" }),
			/* @__PURE__ */ jsx("meta", {
				name: "description",
				content: "Learn how to get your genuine IT certification exam voucher in 3 easy steps. Choose exam, contact us, get voucher instantly."
			}),
			/* @__PURE__ */ jsx("link", {
				rel: "canonical",
				href: "https://techcyfy.com/how-it-works"
			})
		] }),
		/* @__PURE__ */ jsx(BreadcrumbSchema, { items: breadcrumbItems }),
		/* @__PURE__ */ jsx("section", {
			className: "py-12 md:py-16 lg:py-20 px-4 bg-black text-white",
			children: /* @__PURE__ */ jsx("div", {
				className: "max-w-6xl mx-auto",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mb-14 md:mb-20",
					children: [/* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .5 },
						viewport: { once: true },
						className: "text-center mb-10 md:mb-12",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-xs font-bold text-sky-400 bg-sky-500/10 border border-sky-500/30 px-3 py-1 rounded-full uppercase tracking-wider",
							children: "HOW IT WORKS"
						}), /* @__PURE__ */ jsxs("h2", {
							className: "text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-3",
							children: ["Get Your Exam Voucher in ", /* @__PURE__ */ jsx("span", {
								className: "text-sky-400",
								children: "3 Easy Steps"
							})]
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8",
						children: steps.map((step, index) => /* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								y: 30
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .5,
								delay: step.delay
							},
							viewport: { once: true },
							className: "relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-slate-700/50 hover:border-sky-500/30 transition-all duration-300 text-center group",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-sky-600 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-sky-600/30",
									children: step.number
								}),
								/* @__PURE__ */ jsx("div", {
									className: "mt-4 mb-4 flex justify-center",
									children: /* @__PURE__ */ jsx("div", {
										className: "w-16 h-16 rounded-full bg-slate-700/50 flex items-center justify-center group-hover:bg-sky-500/20 transition-all duration-300",
										children: step.icon
									})
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "text-lg md:text-xl font-bold text-white mb-2",
									children: step.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-sm text-slate-400 leading-relaxed",
									children: step.description
								}),
								index < steps.length - 1 && /* @__PURE__ */ jsx("div", { className: "hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-sky-500/30 to-transparent" })
							]
						}, index))
					})]
				})
			})
		})
	] });
};
//#endregion
//#region src/pages/Home.jsx
var LEFT_PARTNER_LOGOS = [
	{
		src: aws2_default,
		alt: "AWS Certification",
		label: "AWS"
	},
	{
		src: mic_default,
		alt: "Microsoft Certification",
		label: "Microsoft"
	},
	{
		src: google_default,
		alt: "Google Cloud Certification",
		label: "Google Cloud"
	},
	{
		src: Fortinet2_default,
		alt: "Fortinet Certification",
		label: "Fortinet"
	},
	{
		src: comptia_default,
		alt: "CompTIA Certification",
		label: "CompTIA"
	},
	{
		src: databricks_default,
		alt: "Databricks Certification",
		label: "Databricks"
	}
];
var RIGHT_PARTNER_LOGOS = [
	{
		src: cisco_default,
		alt: "Cisco Certification",
		label: "CISCO"
	},
	{
		src: snowflake_default,
		alt: "Snowflake Certification",
		label: "Snowflake"
	},
	{
		src: salesforcs_default,
		alt: "Salesforce Certification",
		label: "Salesforce"
	},
	{
		src: juniper_default,
		alt: "Juniper Certification",
		label: "Juniper"
	},
	{
		src: oracle_default,
		alt: "Oracle Certification",
		label: "Oracle"
	},
	{
		src: service_default,
		alt: "ServiceNow Certification",
		label: "ServiceNow"
	},
	{
		src: Vmware_default,
		alt: "VMware Certification",
		label: "VMware"
	},
	{
		src: kubernetes_default,
		alt: "Kubernetes Certification",
		label: "Kubernetes"
	},
	{
		src: red_default,
		alt: "Red Hat Certification",
		label: "Red Hat"
	}
];
var ALL_PARTNER_LOGOS = [...LEFT_PARTNER_LOGOS, ...RIGHT_PARTNER_LOGOS];
var TRUST_FEATURES = [
	{
		icon: FaCheck,
		title: "100% Genuine",
		subtitle: "Authentic Vouchers"
	},
	{
		icon: FaClock,
		title: "Instant Delivery",
		subtitle: "In Minutes"
	},
	{
		icon: FaLock,
		title: "Secure Payment",
		subtitle: "100% Safe & Secure"
	},
	{
		icon: FaGlobeAmericas,
		title: "Worldwide Support",
		subtitle: "24/7 Assistance"
	}
];
var TrustFeature = ({ icon: Icon, title, subtitle }) => /* @__PURE__ */ jsxs("div", {
	className: "flex items-start gap-3 p-2 rounded-xl bg-slate-900/40 border border-slate-800/60 sm:bg-transparent sm:border-none sm:p-0",
	children: [/* @__PURE__ */ jsx("div", {
		className: "p-2 sm:p-0 rounded-lg bg-sky-500/10 sm:bg-transparent",
		children: /* @__PURE__ */ jsx(Icon, {
			className: "text-sky-400 text-base sm:text-lg shrink-0",
			"aria-hidden": "true"
		})
	}), /* @__PURE__ */ jsxs("div", {
		className: "min-w-0",
		children: [/* @__PURE__ */ jsx("p", {
			className: "text-xs sm:text-sm font-semibold text-slate-100 leading-snug truncate",
			children: title
		}), /* @__PURE__ */ jsx("p", {
			className: "text-[11px] sm:text-xs text-slate-400 leading-snug truncate",
			children: subtitle
		})]
	})]
});
var FloatingLogo = ({ src, alt, label, index, total }) => {
	const angle = index / total * 2 * Math.PI - Math.PI / 2;
	const radiusPercent = 42;
	const x = Math.cos(angle) * radiusPercent;
	const y = Math.sin(angle) * radiusPercent;
	return /* @__PURE__ */ jsx("div", {
		className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto",
		style: { transform: `translate(calc(-50% + ${x}cqi), calc(-50% + ${y}cqi))` },
		children: /* @__PURE__ */ jsxs(motion.div, {
			animate: { rotate: -360 },
			transition: {
				duration: 50,
				repeat: Infinity,
				ease: "linear"
			},
			className: "flex flex-col items-center gap-1 group",
			children: [/* @__PURE__ */ jsx("div", {
				className: "w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white border-2 border-sky-400/30 shadow-[0_0_15px_rgba(56,189,248,0.25)] flex items-center justify-center p-1.5 sm:p-2 group-hover:scale-110 group-hover:border-sky-400 group-hover:shadow-[0_0_25px_rgba(56,189,248,0.45)] transition-all duration-300",
				children: /* @__PURE__ */ jsx("img", {
					src,
					alt,
					className: "w-full h-full object-contain rounded-full",
					loading: "lazy",
					decoding: "async"
				})
			}), /* @__PURE__ */ jsx("span", {
				className: "text-[9px] sm:text-[10px] font-medium text-slate-300 bg-slate-900/90 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border border-slate-700/80 whitespace-nowrap shadow-md",
				children: label
			})]
		})
	});
};
var HeroArt = () => /* @__PURE__ */ jsxs("div", {
	className: "relative w-full max-w-[320px] sm:max-w-[420px] md:max-w-[500px] aspect-square mx-auto flex items-center justify-center [container-type:inline-size]",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full bg-sky-500/15 blur-3xl" }),
		/* @__PURE__ */ jsx("div", { className: "absolute inset-2 sm:inset-4 rounded-full border border-dashed border-sky-500/25 animate-[spin_35s_linear_infinite]" }),
		/* @__PURE__ */ jsx("div", { className: "absolute inset-8 sm:inset-12 rounded-full border border-dashed border-sky-400/15 animate-[spin_25s_linear_infinite_reverse]" }),
		/* @__PURE__ */ jsxs("svg", {
			viewBox: "0 0 400 400",
			className: "absolute inset-0 w-full h-full opacity-30",
			children: [
				/* @__PURE__ */ jsx("circle", {
					cx: "200",
					cy: "200",
					r: "150",
					fill: "none",
					stroke: "#38bdf8",
					strokeWidth: "1"
				}),
				/* @__PURE__ */ jsx("ellipse", {
					cx: "200",
					cy: "200",
					rx: "150",
					ry: "55",
					fill: "none",
					stroke: "#38bdf8",
					strokeWidth: "1"
				}),
				/* @__PURE__ */ jsx("ellipse", {
					cx: "200",
					cy: "200",
					rx: "150",
					ry: "105",
					fill: "none",
					stroke: "#38bdf8",
					strokeWidth: "1"
				}),
				/* @__PURE__ */ jsx("line", {
					x1: "50",
					y1: "200",
					x2: "350",
					y2: "200",
					stroke: "#38bdf8",
					strokeWidth: "1"
				})
			]
		}),
		/* @__PURE__ */ jsxs("div", {
			className: "relative z-10 flex items-center justify-center pointer-events-none",
			children: [/* @__PURE__ */ jsx(FaCloud, { className: "text-7xl sm:text-8xl md:text-9xl text-sky-400 drop-shadow-[0_0_30px_rgba(56,189,248,0.5)]" }), /* @__PURE__ */ jsxs("div", {
				className: "absolute flex items-center justify-center",
				children: [/* @__PURE__ */ jsx(FaShieldAlt, { className: "text-3xl sm:text-4xl md:text-5xl text-slate-950 drop-shadow-md" }), /* @__PURE__ */ jsx(FaCheck, { className: "absolute text-xs sm:text-sm md:text-base text-sky-400 translate-y-0.5" })]
			})]
		}),
		/* @__PURE__ */ jsx(motion.div, {
			className: "absolute inset-0 z-20 pointer-events-none",
			animate: { rotate: 360 },
			transition: {
				duration: 50,
				repeat: Infinity,
				ease: "linear"
			},
			children: ALL_PARTNER_LOGOS.map((logo, index) => /* @__PURE__ */ jsx(FloatingLogo, {
				...logo,
				index,
				total: ALL_PARTNER_LOGOS.length
			}, logo.label))
		})
	]
});
var Home = () => {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(SEO, {
			title: "IT Certification Exam Vouchers",
			description: "Get genuine and discounted IT certification exam vouchers for AWS, Microsoft Azure, Google Cloud, CompTIA, Cisco, Fortinet, Red Hat, Databricks, Salesforce and more.",
			keywords: "IT certification exam vouchers, discounted exam vouchers, AWS exam voucher, Azure exam voucher, Microsoft certification voucher, Google Cloud voucher, CompTIA exam voucher, Cisco exam voucher, Fortinet exam voucher, Red Hat exam voucher, Databricks exam voucher, Salesforce exam voucher, GCP exam voucher",
			canonicalUrl: "https://techcyfy.com/",
			imageUrl: "https://techcyfy.com/og-image.jpg"
		}),
		/* @__PURE__ */ jsx("script", {
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Organization",
				name: "Techcyfy",
				description: "Techcyfy provides genuine and discounted IT certification exam vouchers for AWS, Microsoft Azure, Google Cloud, CompTIA, Cisco, Fortinet, Red Hat and other leading certification providers.",
				url: "https://techcyfy.com/",
				logo: "https://techcyfy.com/tclogo.png",
				contactPoint: {
					"@type": "ContactPoint",
					telephone: "+8801982188224",
					contactType: "sales",
					availableLanguage: ["English", "Bengali"]
				}
			})
		}),
		/* @__PURE__ */ jsx("script", {
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "WebSite",
				name: "Techcyfy",
				url: "https://techcyfy.com/",
				description: "Genuine and discounted IT certification exam vouchers for AWS, Microsoft Azure, Google Cloud, CompTIA, Cisco, Fortinet, Red Hat, Databricks, Salesforce and more."
			})
		}),
		/* @__PURE__ */ jsx(BreadcrumbSchema, { items: [{
			name: "Home",
			url: "https://techcyfy.com/"
		}] }),
		/* @__PURE__ */ jsxs("div", {
			className: "min-h-screen bg-slate-950 text-slate-50 selection:bg-sky-500 selection:text-white",
			children: [
				/* @__PURE__ */ jsx("section", {
					className: "relative pt-6 sm:pt-10 pb-12 sm:pb-16 lg:pb-24 overflow-hidden",
					"aria-labelledby": "hero-heading",
					children: /* @__PURE__ */ jsx("div", {
						className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
						children: /* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center",
							children: [/* @__PURE__ */ jsxs(motion.div, {
								initial: {
									opacity: 0,
									y: 20
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: { duration: .5 },
								className: "lg:col-span-7 space-y-6 text-center lg:text-left",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-semibold text-sky-400 tracking-wide",
										children: [/* @__PURE__ */ jsx(FaGlobeAmericas, { "aria-hidden": "true" }), /* @__PURE__ */ jsx("span", { children: "Global IT Certification Vouchers" })]
									}),
									/* @__PURE__ */ jsxs("h1", {
										id: "hero-heading",
										className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white",
										children: [
											"Get Genuine IT Certification Exam Vouchers at",
											" ",
											/* @__PURE__ */ jsx("span", {
												className: "text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400",
												children: "Discounted Prices"
											})
										]
									}),
									/* @__PURE__ */ jsx("h2", {
										className: "text-base sm:text-lg text-emerald-400 font-semibold",
										children: "Save Up to 70% on Official IT Exam Vouchers"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-sm sm:text-base text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed",
										children: "Purchase authentic IT certification exam vouchers for AWS, Microsoft Azure, Google Cloud, CompTIA, Cisco, Red Hat, Fortinet, Databricks, Salesforce, and more. Enjoy instant delivery, secure checkout, and worldwide customer support."
									}),
									/* @__PURE__ */ jsx("div", {
										className: "grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2",
										children: TRUST_FEATURES.map((feature) => /* @__PURE__ */ jsx(TrustFeature, { ...feature }, feature.title))
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2",
										children: [
											/* @__PURE__ */ jsxs(motion.a, {
												href: "#vouchers",
												whileHover: { scale: 1.02 },
												whileTap: { scale: .98 },
												className: "inline-flex items-center gap-2 px-5 py-3 bg-sky-600 hover:bg-sky-500 active:bg-sky-600 text-white text-sm font-semibold rounded-xl shadow-lg shadow-sky-600/25 transition-all duration-200",
												"aria-label": "Browse all IT certification exam vouchers",
												children: [/* @__PURE__ */ jsx(FaSearch, {
													className: "text-xs",
													"aria-hidden": "true"
												}), /* @__PURE__ */ jsx("span", { children: "Browse All Vouchers" })]
											}),
											/* @__PURE__ */ jsxs(motion.a, {
												href: "https://wa.me/+8801982188224",
												target: "_blank",
												rel: "noopener noreferrer",
												whileHover: { scale: 1.02 },
												whileTap: { scale: .98 },
												className: "inline-flex items-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-600 text-white text-sm font-semibold rounded-xl shadow-lg shadow-emerald-600/25 transition-all duration-200",
												"aria-label": "Chat with Techcyfy on WhatsApp",
												children: [/* @__PURE__ */ jsx(FaWhatsapp, {
													className: "text-base",
													"aria-hidden": "true"
												}), /* @__PURE__ */ jsx("span", { children: "Chat on WhatsApp" })]
											}),
											/* @__PURE__ */ jsxs(motion.a, {
												href: "https://t.me/techcyfy",
												target: "_blank",
												rel: "noopener noreferrer",
												whileHover: { scale: 1.02 },
												whileTap: { scale: .98 },
												className: "inline-flex items-center gap-2 px-5 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-sky-400 text-sm font-semibold rounded-xl transition-all duration-200",
												"aria-label": "Join Techcyfy on Telegram",
												children: [/* @__PURE__ */ jsx(FaTelegramPlane, {
													className: "text-base",
													"aria-hidden": "true"
												}), /* @__PURE__ */ jsx("span", { children: "Telegram" })]
											})
										]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-center lg:justify-start gap-2 pt-2 text-xs sm:text-sm",
										children: [
											/* @__PURE__ */ jsx("span", {
												className: "font-semibold text-white",
												children: "Excellent"
											}),
											/* @__PURE__ */ jsx("div", {
												className: "flex text-emerald-400 gap-0.5",
												"aria-label": "5 out of 5 stars",
												children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(FaStar, { "aria-hidden": "true" }, i))
											}),
											/* @__PURE__ */ jsx("span", {
												className: "text-slate-400 font-medium",
												children: "4.9/5 on Trustpilot (1,200+ reviews)"
											})
										]
									})
								]
							}), /* @__PURE__ */ jsxs(motion.div, {
								initial: {
									opacity: 0,
									scale: .95
								},
								animate: {
									opacity: 1,
									scale: 1
								},
								transition: {
									duration: .5,
									delay: .1
								},
								className: "lg:col-span-5 flex flex-col items-center justify-center",
								children: [/* @__PURE__ */ jsx(HeroArt, {}), /* @__PURE__ */ jsxs(motion.div, {
									initial: {
										opacity: 0,
										y: 10
									},
									animate: {
										opacity: 1,
										y: 0
									},
									transition: { delay: .3 },
									className: "mt-6 w-full max-w-sm flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-slate-800 shadow-xl",
									role: "banner",
									"aria-label": "Limited time exam voucher offer",
									children: [/* @__PURE__ */ jsx("div", {
										className: "w-10 h-10 shrink-0 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center",
										children: /* @__PURE__ */ jsx(FaPercentage, {
											className: "text-amber-400 text-lg",
											"aria-hidden": "true"
										})
									}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
										className: "text-xs font-bold text-amber-400 uppercase tracking-wide",
										children: "Limited Time Offer"
									}), /* @__PURE__ */ jsxs("p", {
										className: "text-xs text-slate-300",
										children: [
											"Get up to",
											" ",
											/* @__PURE__ */ jsx("span", {
												className: "text-white font-bold",
												children: "70% OFF"
											}),
											" ",
											"on top IT certifications today."
										]
									})] })]
								})]
							})]
						})
					})
				}),
				/* @__PURE__ */ jsx(LogoCarousel, {}),
				/* @__PURE__ */ jsx("section", {
					id: "vouchers",
					"aria-labelledby": "vouchers-heading",
					children: /* @__PURE__ */ jsx(VoucherSection, {})
				}),
				/* @__PURE__ */ jsx(WhyChoose, {}),
				/* @__PURE__ */ jsx(HowItWorks, {})
			]
		})
	] });
};
//#endregion
//#region src/pages/About.jsx
var About = () => {
	const breadcrumbItems = [{
		name: "Home",
		url: "/"
	}, {
		name: "About",
		url: "/about"
	}];
	const handleCredlyRedirect = () => {
		window.open("https://www.credly.com/users/chandan-kumar-biswas/edit/badges/credly", "_blank");
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(SEO, {
			title: "About TECHCYFY",
			description: "Learn about TECHCYFY, an international provider of genuine and discounted IT certification exam vouchers.",
			keywords: "about Techcyfy, IT certification vouchers, exam voucher provider",
			canonicalUrl: "https://techcyfy.com/about"
		}),
		/* @__PURE__ */ jsx(BreadcrumbSchema, { items: breadcrumbItems }),
		/* @__PURE__ */ jsx("section", {
			className: "py-12 md:py-20 px-4 bg-slate-950 text-white min-h-screen",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-5xl mx-auto",
				children: [/* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .5 },
					className: "text-center mb-12",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-xs font-bold text-sky-400 bg-sky-500/10 border border-sky-500/30 px-3 py-1 rounded-full uppercase tracking-wider",
						children: "About Techcyfy"
					}), /* @__PURE__ */ jsxs("h1", {
						className: "text-3xl md:text-5xl font-extrabold text-white mt-4",
						children: [
							"Your Trusted Partner for ",
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsx("span", {
								className: "text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400",
								children: "IT Certification Vouchers"
							})
						]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
					children: [/* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							x: -20
						},
						animate: {
							opacity: 1,
							x: 0
						},
						transition: {
							duration: .5,
							delay: .1
						},
						className: "lg:col-span-2 space-y-6",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "bg-slate-800/40 rounded-2xl p-6 md:p-8 border border-slate-700/50",
								children: [/* @__PURE__ */ jsx("h2", {
									className: "text-2xl font-bold text-white mb-4",
									children: "Who We Are"
								}), /* @__PURE__ */ jsx("p", {
									className: "text-slate-300 leading-relaxed",
									children: "Techcyfy is a global provider of authentic IT certification exam vouchers. We help professionals and students achieve their career goals by offering genuine exam vouchers at discounted prices."
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "bg-slate-800/40 rounded-2xl p-6 md:p-8 border border-slate-700/50",
								children: [/* @__PURE__ */ jsx("h2", {
									className: "text-2xl font-bold text-white mb-4",
									children: "Our Mission"
								}), /* @__PURE__ */ jsx("p", {
									className: "text-slate-300 leading-relaxed",
									children: "Our mission is to make IT certification accessible to everyone by providing affordable, genuine exam vouchers with instant delivery. We believe in transparency, trust, and customer satisfaction."
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "bg-slate-800/40 rounded-2xl p-6 md:p-8 border border-slate-700/50",
								children: [/* @__PURE__ */ jsx("h2", {
									className: "text-2xl font-bold text-white mb-4",
									children: "Why Choose Techcyfy?"
								}), /* @__PURE__ */ jsx("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
									children: [
										{
											icon: FaCheckCircle,
											text: "100% Genuine Vouchers"
										},
										{
											icon: FaCheckCircle,
											text: "Instant Email Delivery"
										},
										{
											icon: FaCheckCircle,
											text: "Secure Payment"
										},
										{
											icon: FaCheckCircle,
											text: "24/7 Customer Support"
										},
										{
											icon: FaCheckCircle,
											text: "Best Price Guarantee"
										},
										{
											icon: FaCheckCircle,
											text: "Worldwide Availability"
										}
									].map((item, index) => /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ jsx(item.icon, { className: "text-emerald-400 text-sm" }), /* @__PURE__ */ jsx("span", {
											className: "text-slate-300 text-sm",
											children: item.text
										})]
									}, index))
								})]
							}),
							/* @__PURE__ */ jsxs(motion.div, {
								initial: {
									opacity: 0,
									y: 20
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: .5,
									delay: .3
								},
								className: "bg-gradient-to-br from-sky-600/20 to-blue-600/20 rounded-2xl p-6 md:p-8 border border-sky-500/30 text-center",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-center gap-3 mb-3",
										children: [/* @__PURE__ */ jsx(FaShieldAlt, { className: "text-sky-400 text-2xl" }), /* @__PURE__ */ jsx("h3", {
											className: "text-xl font-bold text-white",
											children: "Verify Our Badges"
										})]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-slate-400 text-sm mb-4",
										children: "Check our verified credentials and badges on Credly."
									}),
									/* @__PURE__ */ jsxs(motion.button, {
										onClick: handleCredlyRedirect,
										whileHover: { scale: 1.03 },
										whileTap: { scale: .97 },
										className: "inline-flex items-center gap-3 px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-semibold rounded-xl shadow-lg shadow-sky-600/25 transition-all duration-200",
										children: [/* @__PURE__ */ jsx("span", { children: "View Credly Badges" }), /* @__PURE__ */ jsx(FaExternalLinkAlt, { className: "text-sm" })]
									})
								]
							})
						]
					}), /* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							x: 20
						},
						animate: {
							opacity: 1,
							x: 0
						},
						transition: {
							duration: .5,
							delay: .2
						},
						className: "space-y-6",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "bg-slate-800/40 rounded-2xl p-6 border border-slate-700/50 text-center",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "text-4xl font-bold text-sky-400",
										children: "1200+"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-slate-400 text-sm",
										children: "Happy Customers"
									}),
									/* @__PURE__ */ jsx("div", { className: "mt-4 h-px bg-slate-700" }),
									/* @__PURE__ */ jsx("div", {
										className: "mt-4 text-4xl font-bold text-emerald-400",
										children: "4.9/5"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-slate-400 text-sm",
										children: "Average Rating"
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "bg-slate-800/40 rounded-2xl p-6 border border-slate-700/50",
								children: [/* @__PURE__ */ jsx("h4", {
									className: "font-bold text-white mb-3",
									children: "Quick Links"
								}), /* @__PURE__ */ jsxs("div", {
									className: "space-y-2",
									children: [
										/* @__PURE__ */ jsxs(Link, {
											to: "/vouchers",
											className: "flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm",
											children: [/* @__PURE__ */ jsx(FaArrowRight, { className: "text-sky-400 text-xs" }), "Browse Vouchers"]
										}),
										/* @__PURE__ */ jsxs(Link, {
											to: "/reviews",
											className: "flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm",
											children: [/* @__PURE__ */ jsx(FaArrowRight, { className: "text-sky-400 text-xs" }), "Customer Reviews"]
										}),
										/* @__PURE__ */ jsxs(Link, {
											to: "/contact",
											className: "flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm",
											children: [/* @__PURE__ */ jsx(FaArrowRight, { className: "text-sky-400 text-xs" }), "Contact Us"]
										})
									]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "bg-slate-800/40 rounded-2xl p-6 border border-slate-700/50",
								children: [
									/* @__PURE__ */ jsx("h4", {
										className: "font-bold text-white mb-2",
										children: "Need Help?"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-slate-400 text-sm",
										children: "Chat with us on WhatsApp"
									}),
									/* @__PURE__ */ jsxs("a", {
										href: "https://wa.me/+8801982188224",
										target: "_blank",
										rel: "noopener noreferrer",
										className: "inline-flex items-center gap-2 mt-3 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold rounded-xl transition-all duration-200",
										children: [/* @__PURE__ */ jsx(FaExternalLinkAlt, { className: "text-xs" }), "WhatsApp Now"]
									})
								]
							})
						]
					})]
				})]
			})
		})
	] });
};
//#endregion
//#region src/pages/Services.jsx
var Services = () => {
	return /* @__PURE__ */ jsxs(motion.div, {
		className: "max-w-6xl mx-auto px-4 py-16",
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		transition: { duration: .6 },
		children: [/* @__PURE__ */ jsx("h1", {
			className: "text-4xl font-bold text-center text-gray-900 dark:text-white mb-12",
			children: "Our Services"
		}), /* @__PURE__ */ jsx("div", {
			className: "grid grid-cols-1 md:grid-cols-3 gap-8",
			children: [
				{
					title: "Web Development",
					icon: "💻"
				},
				{
					title: "UI/UX Design",
					icon: "🎨"
				},
				{
					title: "Mobile Apps",
					icon: "📱"
				}
			].map((service, index) => /* @__PURE__ */ jsxs(motion.div, {
				className: "p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center",
				whileHover: { scale: 1.03 },
				transition: {
					type: "spring",
					stiffness: 300
				},
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "text-5xl mb-4",
						children: service.icon
					}),
					/* @__PURE__ */ jsx("h3", {
						className: "text-2xl font-semibold text-gray-900 dark:text-white",
						children: service.title
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-2 text-gray-600 dark:text-gray-400",
						children: "High-quality, scalable solutions tailored to your needs."
					})
				]
			}, index))
		})]
	});
};
//#endregion
//#region src/pages/Contact.jsx
var Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: ""
	});
	const [loading, setLoading] = useState(false);
	const [statusMessage, setStatusMessage] = useState(null);
	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setStatusMessage(null);
		const serviceId = "service_h537rwn";
		const templateId = "template_zrdqskf";
		const publicKey = "UhPDQK4ZN-hGHONFM";
		try {
			await emailjs.send(serviceId, templateId, {
				from_name: formData.name,
				from_email: formData.email,
				message: formData.message
			}, publicKey);
			setStatusMessage({
				type: "success",
				text: "Thank you! Your message has been sent successfully."
			});
			setFormData({
				name: "",
				email: "",
				message: ""
			});
		} catch (error) {
			console.error("EmailJS Error:", error);
			setStatusMessage({
				type: "error",
				text: "Something went wrong! Please try again later."
			});
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(SEO, {
		title: "Contact Us - Techcyfy",
		description: "Get in touch with Techcyfy for any questions about IT certification vouchers. We're here to help 24/7."
	}), /* @__PURE__ */ jsx("div", {
		className: "min-h-screen bg-slate-50 dark:bg-gray-950 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300",
		children: /* @__PURE__ */ jsxs(motion.div, {
			className: "max-w-6xl mx-auto",
			initial: {
				opacity: 0,
				y: 30
			},
			animate: {
				opacity: 1,
				y: 0
			},
			transition: { duration: .5 },
			children: [/* @__PURE__ */ jsxs("div", {
				className: "text-center max-w-3xl mx-auto mb-16",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-indigo-600 dark:text-indigo-400 text-sm font-semibold tracking-wider uppercase bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800",
						children: "Get In Touch"
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mt-4 tracking-tight",
						children: "We'd Love to Hear From You"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 text-lg text-gray-600 dark:text-gray-300",
						children: "Have questions about certification vouchers, pricing, or bulk orders? Reach out to us anytime!"
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-start",
				children: [/* @__PURE__ */ jsx(motion.div, {
					className: "lg:col-span-5 space-y-6",
					initial: {
						opacity: 0,
						x: -20
					},
					animate: {
						opacity: 1,
						x: 0
					},
					transition: {
						duration: .6,
						delay: .2
					},
					children: /* @__PURE__ */ jsxs("div", {
						className: "bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 text-white rounded-2xl p-8 shadow-xl relative overflow-hidden",
						children: [
							/* @__PURE__ */ jsx("div", { className: "absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" }),
							/* @__PURE__ */ jsx("h3", {
								className: "text-2xl font-bold mb-4",
								children: "Contact Information"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-indigo-100 mb-8 leading-relaxed",
								children: "Fill out the form and our support team will get back to you within 24 hours."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-6",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-start space-x-4",
										children: [/* @__PURE__ */ jsx("div", {
											className: "p-3 bg-white/10 rounded-xl backdrop-blur-md",
											children: /* @__PURE__ */ jsx("svg", {
												className: "w-6 h-6 text-indigo-200",
												fill: "none",
												stroke: "currentColor",
												viewBox: "0 0 24 24",
												children: /* @__PURE__ */ jsx("path", {
													strokeLinecap: "round",
													strokeLinejoin: "round",
													strokeWidth: "2",
													d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
												})
											})
										}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
											className: "text-sm font-semibold text-indigo-200 uppercase tracking-wider",
											children: "Email Us"
										}), /* @__PURE__ */ jsx("p", {
											className: "text-base font-medium text-white mt-1",
											children: "techcyfy@gmail.com"
										})] })]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-start space-x-4",
										children: [/* @__PURE__ */ jsx("div", {
											className: "p-3 bg-white/10 rounded-xl backdrop-blur-md",
											children: /* @__PURE__ */ jsx("svg", {
												className: "w-6 h-6 text-indigo-200",
												fill: "none",
												stroke: "currentColor",
												viewBox: "0 0 24 24",
												children: /* @__PURE__ */ jsx("path", {
													strokeLinecap: "round",
													strokeLinejoin: "round",
													strokeWidth: "2",
													d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
												})
											})
										}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
											className: "text-sm font-semibold text-indigo-200 uppercase tracking-wider",
											children: "Support Hours"
										}), /* @__PURE__ */ jsx("p", {
											className: "text-base font-medium text-white mt-1",
											children: "24/7 Live Customer Support"
										})] })]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-start space-x-4",
										children: [/* @__PURE__ */ jsx("div", {
											className: "p-3 bg-white/10 rounded-xl backdrop-blur-md",
											children: /* @__PURE__ */ jsx("svg", {
												className: "w-6 h-6 text-indigo-200",
												fill: "none",
												stroke: "currentColor",
												viewBox: "0 0 24 24",
												children: /* @__PURE__ */ jsx("path", {
													strokeLinecap: "round",
													strokeLinejoin: "round",
													strokeWidth: "2",
													d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
												})
											})
										}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
											className: "text-sm font-semibold text-indigo-200 uppercase tracking-wider",
											children: "Guaranteed"
										}), /* @__PURE__ */ jsx("p", {
											className: "text-base font-medium text-white mt-1",
											children: "100% Genuine Exam Vouchers"
										})] })]
									})
								]
							})
						]
					})
				}), /* @__PURE__ */ jsxs(motion.div, {
					className: "lg:col-span-7 bg-white dark:bg-gray-900 rounded-2xl p-8 sm:p-10 shadow-lg border border-gray-100 dark:border-gray-800",
					initial: {
						opacity: 0,
						x: 20
					},
					animate: {
						opacity: 1,
						x: 0
					},
					transition: {
						duration: .6,
						delay: .3
					},
					children: [statusMessage && /* @__PURE__ */ jsx("div", {
						className: `mb-6 p-4 rounded-xl text-sm font-medium ${statusMessage.type === "success" ? "bg-green-50 dark:bg-green-950/50 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800" : "bg-red-50 dark:bg-red-950/50 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800"}`,
						children: statusMessage.text
					}), /* @__PURE__ */ jsxs("form", {
						onSubmit: handleSubmit,
						className: "space-y-6",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("label", {
									className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
									children: ["Full Name ", /* @__PURE__ */ jsx("span", {
										className: "text-red-500",
										children: "*"
									})]
								}), /* @__PURE__ */ jsx("input", {
									type: "text",
									name: "name",
									required: true,
									value: formData.name,
									onChange: handleChange,
									placeholder: "John Doe",
									className: "w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:bg-white dark:focus:bg-gray-800 outline-none transition duration-200"
								})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("label", {
									className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
									children: ["Email Address ", /* @__PURE__ */ jsx("span", {
										className: "text-red-500",
										children: "*"
									})]
								}), /* @__PURE__ */ jsx("input", {
									type: "email",
									name: "email",
									required: true,
									value: formData.email,
									onChange: handleChange,
									placeholder: "john@example.com",
									className: "w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:bg-white dark:focus:bg-gray-800 outline-none transition duration-200"
								})] })]
							}),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("label", {
								className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
								children: ["Message ", /* @__PURE__ */ jsx("span", {
									className: "text-red-500",
									children: "*"
								})]
							}), /* @__PURE__ */ jsx("textarea", {
								name: "message",
								required: true,
								rows: "5",
								value: formData.message,
								onChange: handleChange,
								placeholder: "Type your message here...",
								className: "w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:bg-white dark:focus:bg-gray-800 outline-none transition duration-200 resize-none"
							})] }),
							/* @__PURE__ */ jsx("button", {
								type: "submit",
								disabled: loading,
								className: "w-full py-3.5 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-200 disabled:opacity-60 flex items-center justify-center space-x-2 cursor-pointer",
								children: loading ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("svg", {
									className: "animate-spin h-5 w-5 text-white",
									fill: "none",
									viewBox: "0 0 24 24",
									children: [/* @__PURE__ */ jsx("circle", {
										className: "opacity-25",
										cx: "12",
										cy: "12",
										r: "10",
										stroke: "currentColor",
										strokeWidth: "4"
									}), /* @__PURE__ */ jsx("path", {
										className: "opacity-75",
										fill: "currentColor",
										d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
									})]
								}), /* @__PURE__ */ jsx("span", { children: "Sending Message..." })] }) : /* @__PURE__ */ jsx("span", { children: "Send Message" })
							})
						]
					})]
				})]
			})]
		})
	})] });
};
//#endregion
//#region src/components/ReviewSystem.jsx
var API_URL = "https://voucher-selling-website-backend-1.onrender.com/api";
var ReviewSystem = () => {
	const [reviews, setReviews] = useState([]);
	const [stats, setStats] = useState({
		total: 0,
		average: 0,
		distribution: {}
	});
	const [name, setName] = useState("");
	const [rating, setRating] = useState(5);
	const [comment, setComment] = useState("");
	const [hoverRating, setHoverRating] = useState(0);
	const [editingId, setEditingId] = useState(null);
	const [filter, setFilter] = useState("all");
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [currentUserId, setCurrentUserId] = useState(null);
	useEffect(() => {
		const getUserId = () => {
			let userId = localStorage.getItem("techcyfy_user_id");
			if (!userId) {
				userId = "user_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);
				localStorage.setItem("techcyfy_user_id", userId);
			}
			return userId;
		};
		setCurrentUserId(getUserId());
	}, []);
	useEffect(() => {
		if (currentUserId) {
			fetchReviews();
			fetchStats();
		}
	}, [currentUserId]);
	const fetchReviews = async () => {
		try {
			setIsLoading(true);
			setError(null);
			const response = await fetch(`${API_URL}/reviews`);
			if (!response.ok) {
				const errorData = await response.json().catch(() => ({}));
				throw new Error(errorData.message || `HTTP ${response.status}: Failed to fetch reviews`);
			}
			const data = await response.json();
			setReviews(data.data || []);
		} catch (err) {
			console.error("Fetch reviews error:", err);
			setError(err.message || "Failed to load reviews. Please try again.");
		} finally {
			setIsLoading(false);
		}
	};
	const fetchStats = async () => {
		try {
			const response = await fetch(`${API_URL}/reviews/stats/all`);
			if (!response.ok) throw new Error("Failed to fetch stats");
			const data = await response.json();
			setStats({
				total: data?.data?.total || 0,
				average: data?.data?.average || 0,
				distribution: data?.data?.distribution || {}
			});
		} catch (err) {
			console.error("Stats error:", err);
			setStats({
				total: 0,
				average: 0,
				distribution: {}
			});
		}
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!name.trim() || !comment.trim()) {
			setError("Please fill in all fields");
			return;
		}
		if (!currentUserId) {
			setError("User ID not found. Please refresh the page.");
			return;
		}
		try {
			setError(null);
			const url = editingId ? `${API_URL}/reviews/${editingId}` : `${API_URL}/reviews`;
			const method = editingId ? "PUT" : "POST";
			const requestBody = {
				name: name.trim(),
				rating: Number(rating),
				comment: comment.trim(),
				userId: currentUserId
			};
			console.log("Sending review data:", requestBody);
			const response = await fetch(url, {
				method,
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(requestBody)
			});
			if (!response.ok) {
				const errorData = await response.json().catch(() => ({}));
				throw new Error(errorData.message || "Failed to save review");
			}
			const data = await response.json();
			if (editingId) {
				setReviews(reviews.map((r) => r._id === editingId ? data.data : r));
				setEditingId(null);
			} else {
				setReviews([data.data, ...reviews]);
				fetchStats();
			}
			setName("");
			setRating(5);
			setComment("");
			setError(null);
		} catch (err) {
			console.error("Submit error:", err);
			setError(err.message || "Failed to submit review. Please try again.");
		}
	};
	const handleDelete = async (id) => {
		const reviewToDelete = reviews.find((r) => r._id === id);
		if (reviewToDelete && reviewToDelete.userId !== currentUserId) {
			setError("You can only delete your own reviews!");
			return;
		}
		if (!window.confirm("Are you sure you want to delete your review?")) return;
		try {
			setError(null);
			const response = await fetch(`${API_URL}/reviews/${id}`, { method: "DELETE" });
			if (!response.ok) {
				const errorData = await response.json().catch(() => ({}));
				throw new Error(errorData.message || "Failed to delete review");
			}
			setReviews(reviews.filter((r) => r._id !== id));
			fetchStats();
		} catch (err) {
			console.error("Delete error:", err);
			setError(err.message || "Failed to delete review. Please try again.");
		}
	};
	const handleEdit = (review) => {
		if (review.userId !== currentUserId) {
			setError("You can only edit your own reviews!");
			return;
		}
		setEditingId(review._id);
		setName(review.name);
		setRating(review.rating);
		setComment(review.comment);
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	const cancelEdit = () => {
		setEditingId(null);
		setName("");
		setRating(5);
		setComment("");
		setError(null);
	};
	const filteredReviews = reviews.filter((review) => {
		if (filter === "all") return true;
		return review.rating === parseInt(filter);
	});
	const averageRating = stats.average || 0;
	const totalReviews = stats.total || 0;
	const ratingDistribution = [
		5,
		4,
		3,
		2,
		1
	].map((star) => {
		const count = stats.distribution?.[star] || 0;
		return {
			star,
			count,
			percentage: totalReviews > 0 ? count / totalReviews * 100 : 0
		};
	});
	const StarRating = ({ rating, onRatingChange, onHover, size = "text-2xl" }) => {
		return /* @__PURE__ */ jsx("div", {
			className: "flex gap-1",
			children: [
				1,
				2,
				3,
				4,
				5
			].map((star) => /* @__PURE__ */ jsx(motion.button, {
				type: "button",
				whileHover: { scale: 1.1 },
				whileTap: { scale: .9 },
				onClick: () => onRatingChange(star),
				onMouseEnter: () => onHover(star),
				onMouseLeave: () => onHover(0),
				className: `${size} ${star <= (hoverRating || rating) ? "text-amber-400" : "text-slate-600"} transition-colors duration-150`,
				children: /* @__PURE__ */ jsx(FaStar, {})
			}, star))
		});
	};
	const formatDate = (dateString) => {
		if (!dateString) return "Recently";
		try {
			return new Date(dateString).toLocaleDateString("en-US", {
				year: "numeric",
				month: "short",
				day: "numeric"
			});
		} catch {
			return "Recently";
		}
	};
	if (isLoading) return /* @__PURE__ */ jsx("div", {
		className: "flex items-center justify-center min-h-[400px]",
		children: /* @__PURE__ */ jsx("div", { className: "w-12 h-12 border-4 border-sky-500 border-t-transparent rounded-full animate-spin" })
	});
	return /* @__PURE__ */ jsx("section", {
		className: "py-12 md:py-16 px-4 bg-black text-white",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-6xl mx-auto",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "text-center mb-10",
					children: [/* @__PURE__ */ jsxs("h2", {
						className: "text-3xl md:text-4xl font-extrabold text-white mb-2",
						children: ["Customer ", /* @__PURE__ */ jsx("span", {
							className: "text-amber-400",
							children: "Reviews"
						})]
					}), /* @__PURE__ */ jsx("p", {
						className: "text-slate-400",
						children: "Share your experience with Techcyfy"
					})]
				}),
				error && /* @__PURE__ */ jsxs("div", {
					className: "bg-red-500/10 border border-red-500/30 p-4 rounded-xl mb-6",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-red-400 text-sm",
						children: error
					}), /* @__PURE__ */ jsx("button", {
						onClick: () => setError(null),
						className: "text-red-400/70 text-xs hover:text-red-400 mt-1",
						children: "Dismiss"
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-1",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 mb-6",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "text-center",
									children: [
										/* @__PURE__ */ jsx("div", {
											className: "text-5xl font-bold text-white mb-1",
											children: averageRating ? averageRating.toFixed(1) : "0.0"
										}),
										/* @__PURE__ */ jsx(StarRating, {
											rating: parseFloat(averageRating) || 0,
											onRatingChange: () => {},
											onHover: () => {},
											size: "text-lg"
										}),
										/* @__PURE__ */ jsxs("p", {
											className: "text-sm text-slate-400 mt-1",
											children: [totalReviews, " reviews"]
										})
									]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "mt-4 space-y-2",
									children: ratingDistribution.map((item) => /* @__PURE__ */ jsxs("button", {
										onClick: () => setFilter(filter === String(item.star) ? "all" : String(item.star)),
										className: `w-full flex items-center gap-2 px-2 py-1 rounded-lg transition-all ${filter === String(item.star) ? "bg-amber-500/20 border border-amber-500/30" : "hover:bg-slate-700/30"}`,
										children: [
											/* @__PURE__ */ jsx("span", {
												className: "text-sm font-medium text-white w-6",
												children: item.star
											}),
											/* @__PURE__ */ jsx(FaStar, { className: "text-amber-400 text-sm" }),
											/* @__PURE__ */ jsx("div", {
												className: "flex-1 h-1.5 bg-slate-700 rounded-full overflow-hidden",
												children: /* @__PURE__ */ jsx("div", {
													className: "h-full bg-amber-400 rounded-full transition-all",
													style: { width: `${item.percentage}%` }
												})
											}),
											/* @__PURE__ */ jsx("span", {
												className: "text-xs text-slate-400 w-8 text-right",
												children: item.count
											})
										]
									}, item.star))
								}),
								filter !== "all" && /* @__PURE__ */ jsx("button", {
									onClick: () => setFilter("all"),
									className: "mt-3 text-xs text-slate-400 hover:text-white transition-colors",
									children: "Clear filter"
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-lg font-bold text-white mb-4",
								children: editingId ? "Edit Your Review" : "Write a Review"
							}), /* @__PURE__ */ jsxs("form", {
								onSubmit: handleSubmit,
								className: "space-y-4",
								children: [
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
										className: "block text-sm font-medium text-slate-300 mb-1",
										children: "Your Name"
									}), /* @__PURE__ */ jsx("input", {
										type: "text",
										value: name,
										onChange: (e) => setName(e.target.value),
										placeholder: "Enter your name",
										className: "w-full px-4 py-2.5 rounded-xl bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 focus:border-sky-500 focus:outline-none transition-colors",
										required: true
									})] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
										className: "block text-sm font-medium text-slate-300 mb-1",
										children: "Rating"
									}), /* @__PURE__ */ jsx(StarRating, {
										rating,
										onRatingChange: setRating,
										onHover: setHoverRating,
										size: "text-2xl"
									})] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
										className: "block text-sm font-medium text-slate-300 mb-1",
										children: "Your Review"
									}), /* @__PURE__ */ jsx("textarea", {
										value: comment,
										onChange: (e) => setComment(e.target.value),
										placeholder: "Share your experience...",
										rows: "3",
										className: "w-full px-4 py-2.5 rounded-xl bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 focus:border-sky-500 focus:outline-none transition-colors resize-none",
										required: true
									})] }),
									/* @__PURE__ */ jsxs("div", {
										className: "flex gap-3",
										children: [/* @__PURE__ */ jsx(motion.button, {
											type: "submit",
											whileHover: { scale: 1.02 },
											whileTap: { scale: .98 },
											className: "flex-1 px-6 py-2.5 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300",
											children: editingId ? "Update Review" : "Submit Review"
										}), editingId && /* @__PURE__ */ jsx(motion.button, {
											type: "button",
											whileHover: { scale: 1.02 },
											whileTap: { scale: .98 },
											onClick: cancelEdit,
											className: "px-4 py-2.5 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl transition-all duration-300",
											children: "Cancel"
										})]
									})
								]
							})]
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-2",
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex items-center justify-between mb-4",
							children: /* @__PURE__ */ jsxs("p", {
								className: "text-sm text-slate-400",
								children: [
									"Showing ",
									filteredReviews.length,
									" of ",
									reviews.length,
									" reviews"
								]
							})
						}), /* @__PURE__ */ jsx("div", {
							className: "space-y-4",
							children: /* @__PURE__ */ jsx(AnimatePresence, { children: filteredReviews.length === 0 ? /* @__PURE__ */ jsx("div", {
								className: "text-center py-12 bg-slate-800/40 rounded-2xl border border-slate-700/50",
								children: /* @__PURE__ */ jsx("p", {
									className: "text-slate-400",
									children: "No reviews yet. Be the first!"
								})
							}) : filteredReviews.map((review, index) => {
								const isOwnReview = review.userId === currentUserId;
								return /* @__PURE__ */ jsx(motion.div, {
									initial: {
										opacity: 0,
										y: 20
									},
									animate: {
										opacity: 1,
										y: 0
									},
									exit: {
										opacity: 0,
										y: -20
									},
									transition: {
										duration: .3,
										delay: index * .05
									},
									className: `bg-slate-800/40 backdrop-blur-sm rounded-2xl p-5 md:p-6 border transition-all duration-300 ${isOwnReview ? "border-emerald-500/40 hover:border-emerald-400/60" : "border-slate-700/50 hover:border-slate-600"}`,
									children: /* @__PURE__ */ jsxs("div", {
										className: "flex items-start justify-between",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "flex-1",
											children: [/* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-3 mb-2",
												children: [/* @__PURE__ */ jsx("div", {
													className: `w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${isOwnReview ? "bg-gradient-to-br from-emerald-500 to-green-600" : "bg-gradient-to-br from-sky-500 to-blue-600"}`,
													children: review.name?.charAt(0) || "U"
												}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ jsx("h4", {
														className: "font-bold text-white",
														children: review.name
													}), isOwnReview && /* @__PURE__ */ jsx("span", {
														className: "text-[10px] font-medium text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full",
														children: "You"
													})]
												}), /* @__PURE__ */ jsxs("div", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ jsx(StarRating, {
														rating: review.rating || 0,
														onRatingChange: () => {},
														onHover: () => {},
														size: "text-sm"
													}), /* @__PURE__ */ jsx("span", {
														className: "text-xs text-slate-500",
														children: formatDate(review.date || review.createdAt)
													})]
												})] })]
											}), /* @__PURE__ */ jsxs("p", {
												className: "text-sm text-slate-300 leading-relaxed",
												children: [
													"\"",
													review.comment,
													"\""
												]
											})]
										}), isOwnReview && /* @__PURE__ */ jsxs("div", {
											className: "flex gap-2 ml-4",
											children: [/* @__PURE__ */ jsx("button", {
												onClick: () => handleEdit(review),
												className: "p-2 rounded-lg text-slate-400 hover:text-sky-400 hover:bg-slate-700/50 transition-all",
												"aria-label": "Edit review",
												children: /* @__PURE__ */ jsx(FaEdit, { className: "text-sm" })
											}), /* @__PURE__ */ jsx("button", {
												onClick: () => handleDelete(review._id),
												className: "p-2 rounded-lg text-slate-400 hover:text-red-400 hover:bg-slate-700/50 transition-all",
												"aria-label": "Delete review",
												children: /* @__PURE__ */ jsx(FaTrash, { className: "text-sm" })
											})]
										})]
									})
								}, review._id || index);
							}) })
						})]
					})]
				})
			]
		})
	});
};
//#endregion
//#region src/pages/Reviews.jsx
var Reviews = () => {
	const breadcrumbItems = [{
		name: "Home",
		url: "/"
	}, {
		name: "Reviews",
		url: "/reviews"
	}];
	const reviews = [
		{
			name: "Michael Anderson",
			rating: 5,
			text: "Got my AWS SAA-C03 voucher instantly. Smooth process and great support!",
			delay: 0
		},
		{
			name: "Sarah Thompson",
			rating: 5,
			text: "Best prices for Azure exams. Highly recommended Techcyfy!",
			delay: .1
		},
		{
			name: "David Wilson",
			rating: 5,
			text: "Quick delivery and genuine voucher. Will buy again for sure.",
			delay: .2
		},
		{
			name: "James Parker",
			rating: 5,
			text: "Great experience! Saved a lot of money on my exam.",
			delay: .3
		}
	];
	const StarRating = ({ rating }) => {
		const stars = [];
		for (let i = 1; i <= 5; i++) if (i <= rating) stars.push(/* @__PURE__ */ jsx(FaStar, { className: "text-amber-400" }, i));
		else stars.push(/* @__PURE__ */ jsx(FaStarHalfAlt, { className: "text-amber-400" }, i));
		return /* @__PURE__ */ jsx("div", {
			className: "flex",
			children: stars
		});
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(SEO, {
			title: "Customer Reviews - Techcyfy",
			description: "Read what our customers say about Techcyfy. Share your experience and help others choose the best IT certification vouchers.",
			canonicalUrl: "https://teckey.netlify.app/reviews"
		}),
		/* @__PURE__ */ jsx(BreadcrumbSchema, { items: breadcrumbItems }),
		/* @__PURE__ */ jsx(ReviewSystem, {}),
		/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs(motion.div, {
			initial: {
				opacity: 0,
				y: 20
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			transition: { duration: .5 },
			viewport: { once: true },
			className: "text-center mb-10 md:mb-12",
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full uppercase tracking-wider",
					children: "Testimonials"
				}),
				/* @__PURE__ */ jsxs("h2", {
					className: "text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-3",
					children: ["What Our ", /* @__PURE__ */ jsx("span", {
						className: "text-amber-400",
						children: "Customers Say"
					})]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-sm text-slate-400 mt-2",
					children: "Trusted by Thousands of Happy Customers"
				})
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6",
			children: reviews.map((review, index) => /* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					y: 30
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				transition: {
					duration: .5,
					delay: review.delay
				},
				viewport: { once: true },
				whileHover: {
					y: -4,
					transition: { duration: .2 }
				},
				className: "bg-slate-800/40 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-slate-700/50 hover:border-amber-500/30 transition-all duration-300",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-start justify-between mb-3",
						children: [/* @__PURE__ */ jsx("h4", {
							className: "text-sm md:text-base font-bold text-white",
							children: review.name
						}), /* @__PURE__ */ jsx(StarRating, { rating: review.rating })]
					}),
					/* @__PURE__ */ jsxs("p", {
						className: "text-sm text-slate-400 leading-relaxed",
						children: [
							"\"",
							review.text,
							"\""
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-3 text-amber-400/20 text-2xl",
						children: /* @__PURE__ */ jsx("svg", {
							className: "w-6 h-6",
							fill: "currentColor",
							viewBox: "0 0 24 24",
							children: /* @__PURE__ */ jsx("path", { d: "M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" })
						})
					})
				]
			}, index))
		})] })
	] });
};
//#endregion
//#region src/pages/Blog.jsx
var Blog = () => {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(SEO, {
		title: "IT Certification Exam Voucher Blog",
		description: "Read expert guides, certification news, exam voucher tips, AWS, Azure, Google Cloud, CompTIA, Fortinet and Databricks certification resources.",
		canonicalUrl: "https://techcyfy.com/blog"
	}), /* @__PURE__ */ jsx("main", {
		className: "min-h-screen bg-slate-950 text-white px-4 py-16",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-6xl mx-auto",
			children: [/* @__PURE__ */ jsxs("header", {
				className: "text-center mb-12",
				children: [/* @__PURE__ */ jsx("h1", {
					className: "text-4xl md:text-5xl font-bold",
					children: "IT Certification Exam Voucher Blog"
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-4 text-slate-400 max-w-3xl mx-auto",
					children: "Explore IT certification guides, exam voucher tips, certification news, and resources for AWS, Microsoft Azure, Google Cloud, CompTIA, Fortinet, Databricks and more."
				})]
			}), /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsx("h2", {
				className: "text-2xl font-bold mb-6",
				children: "Latest Certification Guides"
			}) })]
		})
	})] });
};
//#endregion
//#region src/pages/VaoucherDetails.jsx
var VoucherDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [voucher, setVoucher] = useState(null);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const found = vouchersData.find((v) => {
			if (v._id && v._id === id) return true;
			if (v.id !== void 0 && String(v.id) === id) return true;
			if (v.code && v.code === id) return true;
			return false;
		});
		setVoucher(found);
		setLoading(false);
	}, [id]);
	const breadcrumbItems = [
		{
			name: "Home",
			url: "/"
		},
		{
			name: "Vouchers",
			url: "/vouchers"
		},
		{
			name: voucher?.shortName || "Details",
			url: `/vouchers/${id}`
		}
	];
	if (loading) return /* @__PURE__ */ jsx("div", {
		className: "flex items-center justify-center min-h-[60vh]",
		children: /* @__PURE__ */ jsx("div", { className: "w-12 h-12 border-4 border-sky-500 border-t-transparent rounded-full animate-spin" })
	});
	if (!voucher) return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col items-center justify-center min-h-[60vh] px-4",
		children: [
			/* @__PURE__ */ jsx("h2", {
				className: "text-2xl font-bold text-white mb-4",
				children: "Voucher Not Found"
			}),
			/* @__PURE__ */ jsxs("p", {
				className: "text-slate-400 mb-6",
				children: [
					"The voucher you're looking for doesn't exist. (ID: ",
					id,
					")"
				]
			}),
			/* @__PURE__ */ jsx(Link, {
				to: "/vouchers",
				className: "px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white rounded-xl transition-colors",
				children: "Browse All Vouchers"
			})
		]
	});
	const { _id, shortName, name, code, logo, officialPrice, youPay, discount, popular, instantDelivery, category, description } = voucher;
	const whatsappUrl = `https://wa.me/+8801982188224?text=${encodeURIComponent(`Hi, I'm interested in buying the ${shortName} (${code}) voucher.`)}`;
	const logoMap = {
		aws: aws2_default,
		amazon: aws2_default,
		google: google_default,
		gcp: google_default,
		microsoft: mic_default,
		azure: mic_default,
		redhat: red_default,
		cisco: cisco_default,
		comptia: comptia_default,
		databricks: databricks_default,
		fortinet: Fortinet2_default,
		kubernetes: kubernetes_default,
		cncf: kubernetes_default,
		vmware: Vmware_default,
		juniper: juniper_default,
		snowflake: snowflake_default,
		salesforce: salesforcs_default,
		oracle: oracle_default,
		servicenow: service_default
	};
	const features = [
		{
			icon: FaShieldAlt,
			label: "100% Genuine",
			color: "text-emerald-400"
		},
		{
			icon: FaClock,
			label: "Instant Delivery",
			color: "text-sky-400"
		},
		{
			icon: FaGlobe,
			label: "Worldwide Available",
			color: "text-purple-400"
		},
		{
			icon: FaCheckCircle,
			label: "Secure Payment",
			color: "text-green-400"
		}
	];
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs(Helmet, { children: [
			/* @__PURE__ */ jsxs("title", { children: [shortName, " - Exam Voucher | Techcyfy"] }),
			/* @__PURE__ */ jsx("meta", {
				name: "description",
				content: `Get ${shortName} exam voucher at ${discount}% discount. Pay $${youPay} instead of $${officialPrice}. Instant delivery, worldwide availability.`
			}),
			/* @__PURE__ */ jsx("link", {
				rel: "canonical",
				href: `https://your-domain.com/vouchers/${_id || code}`
			})
		] }),
		/* @__PURE__ */ jsx(BreadcrumbSchema, { items: breadcrumbItems }),
		/* @__PURE__ */ jsx(ProductSchema, { voucher }),
		/* @__PURE__ */ jsx("section", {
			className: "py-12 md:py-16 px-4 bg-black text-white min-h-screen",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-6xl mx-auto",
				children: [/* @__PURE__ */ jsxs("button", {
					onClick: () => navigate(-1),
					className: "flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6",
					children: [/* @__PURE__ */ jsx(FaArrowLeft, { className: "text-sm" }), /* @__PURE__ */ jsx("span", { children: "Back to Vouchers" })]
				}), /* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12",
					children: [/* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							x: -20
						},
						animate: {
							opacity: 1,
							x: 0
						},
						transition: { duration: .5 },
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap items-center gap-3 mb-4",
								children: [
									/* @__PURE__ */ jsxs("span", {
										className: "inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-sky-300 bg-sky-500/10 border border-sky-500/30 rounded-full",
										children: [/* @__PURE__ */ jsx(FaCloud, { className: "text-[10px]" }), category]
									}),
									popular && /* @__PURE__ */ jsxs("span", {
										className: "inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/30 rounded-full",
										children: [/* @__PURE__ */ jsx(FaBolt, { className: "text-amber-400 text-xs" }), "Popular"]
									}),
									instantDelivery && /* @__PURE__ */ jsxs("span", {
										className: "inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded-full",
										children: [/* @__PURE__ */ jsx(FaBolt, { className: "text-emerald-400 text-[10px]" }), "Instant Delivery"]
									})
								]
							}),
							/* @__PURE__ */ jsx("h1", {
								className: "text-3xl md:text-4xl font-extrabold text-white mb-2",
								children: shortName
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-lg text-slate-400 mb-4",
								children: name || shortName
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm text-slate-500 font-mono mb-6",
								children: code
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-slate-300 leading-relaxed mb-6",
								children: description || `Get genuine ${shortName} certification exam voucher at a discounted price. Official voucher with instant delivery and worldwide support.`
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mb-6",
								children: /* @__PURE__ */ jsxs(Link, {
									to: `/vouchers/${_id || code}/exams`,
									className: "inline-flex items-center gap-3 px-6 py-3.5 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white text-sm font-semibold rounded-xl shadow-lg shadow-sky-900/30 hover:shadow-sky-600/30 transition-all duration-200 group",
									children: [
										/* @__PURE__ */ jsx(FaListUl, { className: "text-base group-hover:rotate-12 transition-transform duration-300" }),
										/* @__PURE__ */ jsx("span", { children: "View Covered Exam List" }),
										/* @__PURE__ */ jsx(FaExternalLinkAlt, { className: "text-xs opacity-70 group-hover:opacity-100 transition-opacity duration-200" })
									]
								})
							}),
							/* @__PURE__ */ jsx("div", {
								className: "grid grid-cols-2 gap-3 mb-6",
								children: features.map((feature, index) => /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2 bg-slate-800/40 rounded-xl p-3 border border-slate-700/50",
									children: [/* @__PURE__ */ jsx(feature.icon, { className: `${feature.color} text-lg` }), /* @__PURE__ */ jsx("span", {
										className: "text-sm text-slate-300",
										children: feature.label
									})]
								}, index))
							}),
							/* @__PURE__ */ jsxs(motion.a, {
								href: whatsappUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								whileHover: { scale: 1.02 },
								whileTap: { scale: .98 },
								className: "w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-emerald-600 hover:bg-emerald-500 text-white text-base font-bold rounded-xl shadow-lg shadow-emerald-900/30 hover:shadow-emerald-600/30 transition-all duration-200",
								children: [/* @__PURE__ */ jsx(FaWhatsapp, { className: "text-2xl" }), "Order on WhatsApp Now"]
							})
						]
					}), /* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							x: 20
						},
						animate: {
							opacity: 1,
							x: 0
						},
						transition: {
							duration: .5,
							delay: .2
						},
						className: "flex flex-col items-center justify-center",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "w-full max-w-md bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-3xl p-8 border border-slate-700/50 text-center",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "w-32 h-32 mx-auto mb-6 rounded-2xl bg-slate-900/80 p-4 border border-slate-700/80 flex items-center justify-center",
									children: /* @__PURE__ */ jsx("img", {
										src: logoMap[logo?.toLowerCase()] || logoMap.aws,
										alt: shortName,
										className: "w-full h-full object-contain"
									})
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "text-xl font-bold text-white mb-2",
									children: shortName
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-sm text-slate-400 mb-4",
									children: code
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-center gap-4 text-xs text-slate-500",
									children: [
										/* @__PURE__ */ jsxs("span", {
											className: "flex items-center gap-1",
											children: [/* @__PURE__ */ jsx(FaGlobe, { className: "text-sky-400" }), "Worldwide"]
										}),
										/* @__PURE__ */ jsx("span", { className: "w-px h-4 bg-slate-700" }),
										/* @__PURE__ */ jsxs("span", {
											className: "flex items-center gap-1",
											children: [/* @__PURE__ */ jsx(FaBolt, { className: "text-emerald-400" }), "Instant"]
										}),
										/* @__PURE__ */ jsx("span", { className: "w-px h-4 bg-slate-700" }),
										/* @__PURE__ */ jsxs("span", {
											className: "flex items-center gap-1",
											children: [/* @__PURE__ */ jsx(FaShieldAlt, { className: "text-emerald-400" }), "Genuine"]
										})
									]
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "mt-6 flex items-center gap-2 bg-slate-800/40 rounded-xl px-4 py-2 border border-slate-700/50",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex text-amber-400",
								children: [
									/* @__PURE__ */ jsx(FaStar, {}),
									/* @__PURE__ */ jsx(FaStar, {}),
									/* @__PURE__ */ jsx(FaStar, {}),
									/* @__PURE__ */ jsx(FaStar, {}),
									/* @__PURE__ */ jsx(FaStar, {})
								]
							}), /* @__PURE__ */ jsx("span", {
								className: "text-sm text-slate-300",
								children: "4.9/5 (1200+ Reviews)"
							})]
						})]
					})]
				})]
			})
		})
	] });
};
//#endregion
//#region src/data/examData.js
var examGuides = {
	aws: {
		title: "AWS Certification Exams",
		description: "Explore AWS certification exams for cloud, architecture, development, operations, and DevOps professionals.",
		levels: [
			{
				name: "Fundamentals",
				exams: [{
					code: "CLF-C02",
					name: "AWS Certified Cloud Practitioner",
					description: "Foundational certification covering AWS cloud concepts, services, security, architecture, pricing, and support."
				}]
			},
			{
				name: "Associate",
				exams: [
					{
						code: "SAA-C03",
						name: "AWS Certified Solutions Architect – Associate",
						description: "Validates the ability to design secure, resilient, high-performing, and cost-optimized AWS architectures."
					},
					{
						code: "DVA-C02",
						name: "AWS Certified Developer – Associate",
						description: "Validates skills in developing, deploying, and debugging cloud applications using AWS services."
					},
					{
						code: "SOA-C02",
						name: "AWS Certified CloudOps Engineer – Associate",
						description: "Validates skills in deploying, managing, and operating workloads on AWS."
					}
				]
			},
			{
				name: "Professional",
				exams: [{
					code: "SAP-C02",
					name: "AWS Certified Solutions Architect – Professional",
					description: "Advanced certification for designing complex AWS solutions and architectures."
				}, {
					code: "DOP-C02",
					name: "AWS Certified DevOps Engineer – Professional",
					description: "Validates advanced DevOps skills including CI/CD, automation, monitoring, and infrastructure management."
				}]
			},
			{
				name: "Specialty",
				exams: [{
					code: "ANS-C01",
					name: "AWS Certified Advanced Networking – Specialty",
					description: "Advanced certification covering AWS networking architecture, connectivity, routing, and security."
				}]
			}
		],
		whyCertify: [
			"Validate your AWS cloud skills.",
			"Build a career in cloud computing.",
			"Improve your professional profile.",
			"Demonstrate practical AWS knowledge."
		],
		careerPaths: {
			"Cloud Architect": [
				"CLF-C02",
				"SAA-C03",
				"SAP-C02"
			],
			"Cloud Developer": ["CLF-C02", "DVA-C02"],
			DevOps: [
				"CLF-C02",
				"SOA-C02",
				"DOP-C02"
			],
			Networking: ["SAA-C03", "ANS-C01"]
		}
	},
	azure: {
		title: "Microsoft Azure Certification Exams",
		description: "Explore Microsoft Azure certification exams covering cloud, AI, data, administration, networking, security, and DevOps.",
		levels: [
			{
				name: "Fundamentals",
				exams: [
					{
						code: "AZ-900",
						name: "Microsoft Azure Fundamentals",
						description: "Introduction to cloud concepts, Azure services, security, pricing, and management."
					},
					{
						code: "AI-900",
						name: "Microsoft Azure AI Fundamentals",
						description: "Introduction to artificial intelligence and machine learning concepts on Azure."
					},
					{
						code: "DP-900",
						name: "Microsoft Azure Data Fundamentals",
						description: "Introduction to data concepts and Microsoft Azure data services."
					},
					{
						code: "SC-900",
						name: "Microsoft Security, Compliance, and Identity Fundamentals",
						description: "Introduction to Microsoft security, compliance, and identity concepts."
					}
				]
			},
			{
				name: "Associate",
				exams: [
					{
						code: "AZ-104",
						name: "Azure Administrator Associate",
						description: "Validates skills in managing Azure subscriptions, storage, networking, compute, and security."
					},
					{
						code: "AZ-204",
						name: "Developing Solutions for Microsoft Azure",
						description: "Validates skills in developing cloud applications and services on Microsoft Azure."
					},
					{
						code: "AZ-700",
						name: "Designing and Implementing Microsoft Azure Networking Solutions",
						description: "Focuses on Azure networking architecture, connectivity, routing, and network security."
					},
					{
						code: "AZ-140",
						name: "Configuring and Operating Microsoft Azure Virtual Desktop",
						description: "Validates skills for implementing and managing Azure Virtual Desktop environments."
					}
				]
			},
			{
				name: "Professional",
				exams: [{
					code: "AZ-305",
					name: "Designing Microsoft Azure Infrastructure Solutions",
					description: "Advanced certification focused on designing Azure infrastructure and cloud solutions."
				}, {
					code: "AZ-400",
					name: "Designing and Implementing Microsoft DevOps Solutions",
					description: "Covers DevOps practices including CI/CD, source control, infrastructure as code, and monitoring."
				}]
			},
			{
				name: "Security, Compliance & Identity",
				exams: [
					{
						code: "SC-100",
						name: "Microsoft Cybersecurity Architect",
						description: "Advanced cybersecurity architecture across Microsoft cloud and enterprise environments."
					},
					{
						code: "SC-200",
						name: "Microsoft Security Operations Analyst",
						description: "Focuses on threat detection, incident response, security monitoring, and investigation."
					},
					{
						code: "SC-300",
						name: "Microsoft Identity and Access Administrator",
						description: "Focuses on identity, authentication, authorization, and Microsoft Entra ID."
					},
					{
						code: "SC-401",
						name: "Microsoft Information Security Administrator",
						description: "Focuses on information protection, security, compliance, and data governance."
					}
				]
			}
		],
		whyCertify: [
			"Validate Microsoft Azure cloud skills.",
			"Build a career in cloud computing.",
			"Improve your professional profile.",
			"Prepare for Azure administration, development, architecture, DevOps, and security roles."
		],
		careerPaths: {
			"Azure Administrator": ["AZ-900", "AZ-104"],
			"Azure Developer": ["AZ-900", "AZ-204"],
			"Cloud Architect": [
				"AZ-900",
				"AZ-104",
				"AZ-305"
			],
			DevOps: [
				"AZ-900",
				"AZ-104",
				"AZ-400"
			],
			Cybersecurity: [
				"SC-900",
				"SC-200",
				"SC-300",
				"SC-100"
			],
			Networking: ["AZ-900", "AZ-700"]
		}
	},
	google: {
		title: "Google Cloud Certification Exams",
		description: "Explore Google Cloud certifications covering cloud engineering, architecture, data, security, and machine learning.",
		levels: [
			{
				name: "Fundamentals",
				exams: [{
					code: "CDL",
					name: "Google Cloud Digital Leader",
					description: "Foundational certification covering Google Cloud products, services, and digital transformation."
				}]
			},
			{
				name: "Associate",
				exams: [{
					code: "ACE",
					name: "Associate Cloud Engineer",
					description: "Validates skills in deploying, managing, and operating applications on Google Cloud."
				}]
			},
			{
				name: "Professional",
				exams: [
					{
						code: "PCA",
						name: "Professional Cloud Architect",
						description: "Validates advanced skills in designing secure, scalable, and highly available Google Cloud solutions."
					},
					{
						code: "PDE",
						name: "Professional Data Engineer",
						description: "Validates skills in designing and building data processing systems on Google Cloud."
					},
					{
						code: "PCSE",
						name: "Professional Cloud Security Engineer",
						description: "Validates skills in designing and implementing secure Google Cloud infrastructure."
					}
				]
			}
		],
		whyCertify: [
			"Validate Google Cloud skills.",
			"Build a cloud engineering career.",
			"Improve your professional profile.",
			"Demonstrate Google Cloud expertise."
		],
		careerPaths: {
			"Cloud Engineer": ["CDL", "ACE"],
			"Cloud Architect": [
				"CDL",
				"ACE",
				"PCA"
			],
			"Data Engineer": ["CDL", "PDE"],
			Security: ["CDL", "PCSE"]
		}
	},
	redhat: {
		title: "Red Hat Certification Exams",
		description: "Explore Red Hat certifications covering Linux administration, automation, engineering, and enterprise technologies.",
		levels: [
			{
				name: "Core",
				exams: [{
					code: "EX200",
					name: "Red Hat Certified System Administrator",
					description: "Validates core Linux system administration skills using Red Hat Enterprise Linux."
				}]
			},
			{
				name: "Professional",
				exams: [{
					code: "EX294",
					name: "Red Hat Certified Engineer",
					description: "Advanced Linux administration and automation using Ansible."
				}]
			},
			{
				name: "Advanced",
				exams: [{
					code: "RHCA",
					name: "Red Hat Certified Architect",
					description: "Advanced Red Hat certification path for experienced enterprise Linux professionals."
				}]
			}
		],
		whyCertify: [
			"Validate Linux administration skills.",
			"Build a Linux career.",
			"Improve your professional profile.",
			"Demonstrate enterprise Linux expertise."
		],
		careerPaths: {
			"Linux Administrator": ["EX200"],
			"Linux Engineer": ["EX200", "EX294"],
			DevOps: ["EX200", "EX294"],
			"Enterprise Architect": [
				"EX200",
				"EX294",
				"RHCA"
			]
		}
	},
	comptia: {
		title: "CompTIA Certification Exams",
		description: "Explore CompTIA vendor-neutral certifications covering IT support, networking, cybersecurity, cloud, and infrastructure.",
		levels: [{
			name: "Core",
			exams: [
				{
					code: "A+",
					name: "CompTIA A+",
					description: "Foundational IT certification covering hardware, software, troubleshooting, operating systems, and support."
				},
				{
					code: "Network+",
					name: "CompTIA Network+",
					description: "Covers networking concepts, infrastructure, operations, troubleshooting, and security."
				},
				{
					code: "Security+",
					name: "CompTIA Security+",
					description: "Foundational cybersecurity certification covering threats, risk, security architecture, and operations."
				}
			]
		}, {
			name: "Professional",
			exams: [{
				code: "CySA+",
				name: "CompTIA CySA+",
				description: "Cybersecurity analytics, threat detection, vulnerability management, and incident response."
			}, {
				code: "PenTest+",
				name: "CompTIA PenTest+",
				description: "Penetration testing, vulnerability assessment, and ethical hacking concepts."
			}]
		}],
		whyCertify: [
			"Vendor-neutral IT certifications.",
			"Build a career in IT and cybersecurity.",
			"Improve your professional profile.",
			"Demonstrate practical IT knowledge."
		],
		careerPaths: {
			"IT Support": ["A+"],
			Networking: ["A+", "Network+"],
			Cybersecurity: [
				"Security+",
				"CySA+",
				"PenTest+"
			],
			"Network Security": ["Network+", "Security+"]
		}
	},
	cisco: {
		title: "Cisco Certification Exams",
		description: "Explore Cisco certifications covering networking, security, infrastructure, automation, and enterprise technologies.",
		levels: [{
			name: "Associate",
			exams: [{
				code: "200-301",
				name: "Cisco Certified Network Associate (CCNA)",
				description: "Covers networking fundamentals, IP connectivity, network access, security fundamentals, and automation."
			}]
		}, {
			name: "Professional",
			exams: [{
				code: "CCNP",
				name: "Cisco Certified Network Professional",
				description: "Advanced networking certification covering enterprise networking, security, and automation."
			}]
		}],
		whyCertify: [
			"Validate networking skills.",
			"Build a network engineering career.",
			"Improve your professional profile.",
			"Demonstrate enterprise networking knowledge."
		],
		careerPaths: {
			"Network Engineer": ["200-301", "CCNP"],
			"Network Administrator": ["200-301"],
			"Network Security": ["200-301", "CCNP"]
		}
	},
	fortinet: {
		title: "Fortinet Certification Exams",
		description: "Explore Fortinet certifications covering network security, FortiGate administration, and security operations.",
		levels: [
			{
				name: "Fundamentals",
				exams: [{
					code: "NSE 1",
					name: "Fortinet Certified Fundamentals",
					description: "Introduces cybersecurity concepts and Fortinet security technologies."
				}, {
					code: "NSE 2",
					name: "Fortinet Certified Associate",
					description: "Covers foundational network security concepts and Fortinet solutions."
				}]
			},
			{
				name: "Professional",
				exams: [{
					code: "NSE 4",
					name: "Fortinet Certified Professional",
					description: "Validates FortiGate configuration, administration, and security management skills."
				}]
			},
			{
				name: "Advanced",
				exams: [{
					code: "NSE 5",
					name: "Fortinet Certified Solution Specialist",
					description: "Advanced Fortinet security operations and security management skills."
				}, {
					code: "NSE 6",
					name: "Fortinet Certified Specialist",
					description: "Advanced configuration and management of Fortinet security products."
				}]
			}
		],
		whyCertify: [
			"Validate network security skills.",
			"Build a cybersecurity career.",
			"Improve your professional profile.",
			"Demonstrate Fortinet security expertise."
		],
		careerPaths: {
			"Network Security": ["NSE 2", "NSE 4"],
			"Security Administration": ["NSE 4", "NSE 5"],
			"Security Operations": [
				"NSE 4",
				"NSE 5",
				"NSE 6"
			]
		}
	},
	snowflake: {
		title: "Snowflake Certification Exams",
		description: "Explore Snowflake certifications covering cloud data platforms, data engineering, analytics, and architecture.",
		levels: [{
			name: "Core",
			exams: [{
				code: "COF-C02",
				name: "SnowPro Core",
				description: "Validates knowledge of Snowflake architecture, security, data loading, performance, and administration."
			}]
		}, {
			name: "Advanced",
			exams: [{
				code: "SnowPro Advanced",
				name: "SnowPro Advanced Certifications",
				description: "Advanced certifications for Snowflake architecture, data engineering, and specialized data roles."
			}]
		}],
		whyCertify: [
			"Validate cloud data platform skills.",
			"Build a data engineering career.",
			"Improve your professional profile.",
			"Demonstrate Snowflake expertise."
		],
		careerPaths: {
			"Data Engineer": ["COF-C02"],
			"Data Analyst": ["COF-C02"],
			"Cloud Data Architect": ["COF-C02"]
		}
	},
	salesforce: {
		title: "Salesforce Certification Exams",
		description: "Explore Salesforce certifications covering CRM administration, development, consulting, and architecture.",
		levels: [{
			name: "Fundamentals",
			exams: [{
				code: "ADM-201",
				name: "Salesforce Certified Administrator",
				description: "Validates Salesforce configuration, security, automation, data management, and administration skills."
			}]
		}, {
			name: "Professional",
			exams: [{
				code: "Platform Developer",
				name: "Salesforce Platform Developer",
				description: "Covers Salesforce application development and platform customization."
			}, {
				code: "Consultant",
				name: "Salesforce Certified Consultant",
				description: "Validates Salesforce implementation and consulting skills."
			}]
		}],
		whyCertify: [
			"Validate CRM platform skills.",
			"Build a Salesforce career.",
			"Improve your professional profile.",
			"Demonstrate Salesforce expertise."
		],
		careerPaths: {
			Administrator: ["ADM-201"],
			Developer: ["ADM-201", "Platform Developer"],
			Consultant: ["ADM-201", "Consultant"]
		}
	},
	databricks: {
		title: "Databricks Certification Exams",
		description: "Explore Databricks certifications covering data engineering, analytics, machine learning, and the Lakehouse platform.",
		levels: [{
			name: "Associate",
			exams: [{
				code: "Data Engineer Associate",
				name: "Databricks Data Engineer Associate",
				description: "Validates foundational data engineering skills using the Databricks Lakehouse platform."
			}]
		}, {
			name: "Professional",
			exams: [{
				code: "Data Engineer Professional",
				name: "Databricks Data Engineer Professional",
				description: "Advanced data engineering skills including production pipelines and optimization."
			}]
		}],
		whyCertify: [
			"Validate modern data engineering skills.",
			"Build a data engineering career.",
			"Improve your professional profile.",
			"Demonstrate Lakehouse platform knowledge."
		],
		careerPaths: {
			"Data Engineer": ["Data Engineer Associate", "Data Engineer Professional"],
			"Data Analytics": ["Data Engineer Associate"]
		}
	},
	kubernetes: {
		title: "Kubernetes Certification Exams",
		description: "Explore Kubernetes certifications covering cluster administration, application development, and security.",
		levels: [
			{
				name: "Administrator",
				exams: [{
					code: "CKA",
					name: "Certified Kubernetes Administrator",
					description: "Validates practical skills in Kubernetes cluster administration and operations."
				}]
			},
			{
				name: "Developer",
				exams: [{
					code: "CKAD",
					name: "Certified Kubernetes Application Developer",
					description: "Validates skills in developing and deploying applications on Kubernetes."
				}]
			},
			{
				name: "Security",
				exams: [{
					code: "CKS",
					name: "Certified Kubernetes Security Specialist",
					description: "Validates Kubernetes security configuration and operational security skills."
				}]
			}
		],
		whyCertify: [
			"Validate Kubernetes skills.",
			"Build a DevOps career.",
			"Improve your cloud-native skills.",
			"Demonstrate container orchestration expertise."
		],
		careerPaths: {
			"Kubernetes Administrator": ["CKA"],
			"Cloud Native Developer": ["CKA", "CKAD"],
			"Kubernetes Security": ["CKA", "CKS"],
			DevOps: [
				"CKA",
				"CKAD",
				"CKS"
			]
		}
	},
	vmware: {
		title: "VMware Certification Exams",
		description: "Explore VMware certifications covering virtualization, data center, cloud infrastructure, and enterprise technologies.",
		levels: [{
			name: "Professional",
			exams: [{
				code: "VCP",
				name: "VMware Certified Professional",
				description: "Validates skills in VMware virtualization and data center technologies."
			}]
		}, {
			name: "Advanced",
			exams: [{
				code: "VCAP",
				name: "VMware Certified Advanced Professional",
				description: "Advanced VMware skills across architecture, design, and deployment."
			}]
		}],
		whyCertify: [
			"Validate virtualization skills.",
			"Build a cloud infrastructure career.",
			"Improve your professional profile.",
			"Demonstrate enterprise virtualization expertise."
		],
		careerPaths: {
			Virtualization: ["VCP", "VCAP"],
			"Data Center": ["VCP", "VCAP"],
			"Cloud Infrastructure": ["VCP"]
		}
	},
	juniper: {
		title: "Juniper Networks Certification Exams",
		description: "Explore Juniper certifications covering networking, routing, switching, security, and Junos technologies.",
		levels: [{
			name: "Associate",
			exams: [{
				code: "JNCIA-Junos",
				name: "JNCIA-Junos",
				description: "Entry-level certification covering Junos OS and fundamental networking concepts."
			}]
		}, {
			name: "Professional",
			exams: [{
				code: "JNCIP",
				name: "Juniper Networks Certified Professional",
				description: "Advanced Junos networking and troubleshooting skills."
			}]
		}],
		whyCertify: [
			"Validate Juniper networking skills.",
			"Build a network engineering career.",
			"Improve your professional profile.",
			"Demonstrate Junos expertise."
		],
		careerPaths: {
			Networking: ["JNCIA-Junos", "JNCIP"],
			"Network Engineer": ["JNCIA-Junos", "JNCIP"],
			"Network Administrator": ["JNCIA-Junos"]
		}
	},
	oracle: {
		title: "Oracle Certification Exams",
		description: "Explore Oracle certifications covering cloud infrastructure, databases, enterprise applications, and development.",
		levels: [{
			name: "Associate",
			exams: [{
				code: "OCI-Associate",
				name: "Oracle Cloud Infrastructure Architect Associate",
				description: "Validates foundational Oracle Cloud Infrastructure architecture and deployment skills."
			}]
		}, {
			name: "Professional",
			exams: [{
				code: "OCI-Professional",
				name: "Oracle Cloud Infrastructure Architect Professional",
				description: "Advanced Oracle Cloud infrastructure architecture and design skills."
			}]
		}],
		whyCertify: [
			"Validate Oracle Cloud skills.",
			"Build a cloud architecture career.",
			"Improve your professional profile.",
			"Demonstrate enterprise cloud expertise."
		],
		careerPaths: {
			"Cloud Architect": ["OCI-Associate", "OCI-Professional"],
			"Cloud Engineer": ["OCI-Associate"],
			"Enterprise IT": ["OCI-Associate", "OCI-Professional"]
		}
	},
	servicenow: {
		title: "ServiceNow Certification Exams",
		description: "Explore ServiceNow certifications covering IT service management, administration, application development, and enterprise workflows.",
		levels: [{
			name: "Fundamentals",
			exams: [{
				code: "CSA",
				name: "ServiceNow Certified System Administrator",
				description: "Validates ServiceNow configuration, administration, security, and platform management skills."
			}]
		}, {
			name: "Professional",
			exams: [{
				code: "CAD",
				name: "ServiceNow Certified Application Developer",
				description: "Validates application development and customization skills on the ServiceNow platform."
			}]
		}],
		whyCertify: [
			"Validate ServiceNow platform skills.",
			"Build an ITSM career.",
			"Improve your professional profile.",
			"Demonstrate enterprise workflow expertise."
		],
		careerPaths: {
			"ServiceNow Administrator": ["CSA"],
			"ServiceNow Developer": ["CSA", "CAD"],
			ITSM: ["CSA"]
		}
	},
	alibaba: {
		title: "Alibaba Cloud Certification Exams",
		description: "Explore Alibaba Cloud certifications covering cloud computing, architecture, networking, and infrastructure.",
		levels: [{
			name: "Associate",
			exams: [{
				code: "ACA",
				name: "Alibaba Cloud Certified Associate",
				description: "Foundational Alibaba Cloud services, infrastructure, and cloud computing concepts."
			}]
		}, {
			name: "Professional",
			exams: [{
				code: "ACP",
				name: "Alibaba Cloud Certified Professional",
				description: "Advanced Alibaba Cloud architecture and infrastructure skills."
			}]
		}],
		whyCertify: [
			"Validate Alibaba Cloud skills.",
			"Build a cloud computing career.",
			"Improve your professional profile.",
			"Demonstrate cloud infrastructure expertise."
		],
		careerPaths: {
			"Cloud Engineer": ["ACA", "ACP"],
			"Cloud Architect": ["ACA", "ACP"],
			"Cloud Administrator": ["ACA"]
		}
	},
	docker: {
		title: "Docker Certification Exams",
		description: "Explore Docker certification paths covering containers, images, networking, security, and DevOps workflows.",
		levels: [{
			name: "Associate",
			exams: [{
				code: "DCA",
				name: "Docker Certified Associate",
				description: "Validates practical Docker containerization and management skills."
			}]
		}],
		whyCertify: [
			"Validate Docker skills.",
			"Build a DevOps career.",
			"Improve containerization knowledge.",
			"Demonstrate practical Docker expertise."
		],
		careerPaths: {
			DevOps: ["DCA"],
			"Container Engineer": ["DCA"],
			"Cloud Engineer": ["DCA"]
		}
	},
	git: {
		title: "Git Certification Exams",
		description: "Explore Git and GitLab-related certification paths covering source control, collaboration, and DevOps workflows.",
		levels: [{
			name: "Core",
			exams: [{
				code: "GIT",
				name: "Git Version Control",
				description: "Covers source control, branching, merging, collaboration, and Git workflows."
			}]
		}, {
			name: "DevOps",
			exams: [{
				code: "GIT-CI",
				name: "Git CI/CD & DevOps",
				description: "Covers source control workflows, automation, and CI/CD practices."
			}]
		}],
		whyCertify: [
			"Improve source control skills.",
			"Build a software development career.",
			"Improve DevOps knowledge.",
			"Demonstrate Git workflow expertise."
		],
		careerPaths: {
			"Software Developer": ["GIT"],
			DevOps: ["GIT", "GIT-CI"],
			"CI/CD Engineer": ["GIT-CI"]
		}
	},
	huawei: {
		title: "Huawei Certification Exams",
		description: "Explore Huawei ICT certifications covering networking, routing, switching, cloud, and enterprise infrastructure.",
		levels: [{
			name: "Associate",
			exams: [{
				code: "HCIA",
				name: "Huawei Certified ICT Associate",
				description: "Foundational Huawei networking and ICT technology certification."
			}]
		}, {
			name: "Professional",
			exams: [{
				code: "HCIP",
				name: "Huawei Certified ICT Professional",
				description: "Advanced networking and enterprise infrastructure skills."
			}]
		}],
		whyCertify: [
			"Validate Huawei networking skills.",
			"Build a network engineering career.",
			"Improve your professional profile.",
			"Demonstrate enterprise networking knowledge."
		],
		careerPaths: {
			Networking: ["HCIA", "HCIP"],
			"Network Engineer": ["HCIA", "HCIP"],
			"Network Administrator": ["HCIA"]
		}
	},
	mongodb: {
		title: "MongoDB Certification Exams",
		description: "Explore MongoDB certification paths covering database development, administration, data modeling, and application development.",
		levels: [{
			name: "Developer",
			exams: [{
				code: "MongoDB-Developer",
				name: "MongoDB Developer Certification",
				description: "Validates skills in building applications using MongoDB."
			}]
		}, {
			name: "Database",
			exams: [{
				code: "MongoDB-DBA",
				name: "MongoDB Database Administration",
				description: "Covers database deployment, administration, monitoring, and operations."
			}]
		}],
		whyCertify: [
			"Validate MongoDB skills.",
			"Build a backend development career.",
			"Improve your database knowledge.",
			"Demonstrate NoSQL database expertise."
		],
		careerPaths: {
			"Backend Developer": ["MongoDB-Developer"],
			"Database Developer": ["MongoDB-Developer"],
			"Database Administrator": ["MongoDB-DBA"]
		}
	},
	nutanix: {
		title: "Nutanix Certification Exams",
		description: "Explore Nutanix certifications covering hyperconverged infrastructure, virtualization, cloud, and enterprise infrastructure.",
		levels: [{
			name: "Professional",
			exams: [{
				code: "NCP",
				name: "Nutanix Certified Professional",
				description: "Validates skills in Nutanix infrastructure, virtualization, and cloud management."
			}]
		}, {
			name: "Advanced",
			exams: [{
				code: "NCM",
				name: "Nutanix Certified Master",
				description: "Advanced Nutanix infrastructure and enterprise cloud skills."
			}]
		}],
		whyCertify: [
			"Validate enterprise cloud infrastructure skills.",
			"Build a virtualization career.",
			"Improve your professional profile.",
			"Demonstrate Nutanix expertise."
		],
		careerPaths: {
			"Cloud Infrastructure": ["NCP", "NCM"],
			Virtualization: ["NCP"],
			Multicloud: ["NCP", "NCM"]
		}
	},
	paloalto: {
		title: "Palo Alto Networks Certification Exams",
		description: "Explore Palo Alto Networks certifications covering network security, firewalls, cybersecurity, and security operations.",
		levels: [{
			name: "Associate",
			exams: [{
				code: "PCNSA",
				name: "Palo Alto Networks Certified Network Security Administrator",
				description: "Validates foundational Palo Alto Networks firewall administration skills."
			}]
		}, {
			name: "Professional",
			exams: [{
				code: "PCNSE",
				name: "Palo Alto Networks Certified Network Security Engineer",
				description: "Validates advanced skills in Palo Alto Networks security technologies."
			}]
		}],
		whyCertify: [
			"Validate network security skills.",
			"Build a cybersecurity career.",
			"Improve your professional profile.",
			"Demonstrate firewall security expertise."
		],
		careerPaths: {
			"Network Security": ["PCNSA", "PCNSE"],
			"Security Engineer": ["PCNSA", "PCNSE"],
			"Firewall Administrator": ["PCNSA"]
		}
	},
	sap: {
		title: "SAP Certification Exams",
		description: "Explore SAP certifications covering enterprise applications, cloud, integration, business technology, and ERP.",
		levels: [{
			name: "Associate",
			exams: [{
				code: "SAP-ASSOCIATE",
				name: "SAP Certified Associate",
				description: "Validates foundational SAP technology and enterprise application skills."
			}]
		}, {
			name: "Professional",
			exams: [{
				code: "SAP-PROFESSIONAL",
				name: "SAP Certified Professional",
				description: "Advanced SAP technology, integration, and enterprise solution skills."
			}]
		}],
		whyCertify: [
			"Validate SAP enterprise technology skills.",
			"Build an enterprise IT career.",
			"Improve your professional profile.",
			"Demonstrate SAP expertise."
		],
		careerPaths: {
			"SAP Consultant": ["SAP-ASSOCIATE", "SAP-PROFESSIONAL"],
			"Enterprise IT": ["SAP-ASSOCIATE"],
			"SAP Cloud": ["SAP-ASSOCIATE", "SAP-PROFESSIONAL"]
		}
	},
	ibm: {
		title: "IBM Certification Exams",
		description: "Explore IBM certifications covering cloud, AI, data, security, architecture, and enterprise technologies.",
		levels: [{
			name: "Professional",
			exams: [{
				code: "IBM-CLOUD",
				name: "IBM Cloud Certification",
				description: "Validates knowledge and skills related to IBM Cloud technologies."
			}]
		}, {
			name: "Advanced",
			exams: [{
				code: "IBM-ARCH",
				name: "IBM Certified Solution Architect",
				description: "Advanced enterprise architecture and cloud solution design skills."
			}]
		}],
		whyCertify: [
			"Validate IBM technology skills.",
			"Build a cloud or enterprise IT career.",
			"Improve your professional profile.",
			"Demonstrate IBM technology expertise."
		],
		careerPaths: {
			"Cloud Engineer": ["IBM-CLOUD"],
			"Cloud Architect": ["IBM-CLOUD", "IBM-ARCH"],
			"Enterprise Architect": ["IBM-ARCH"]
		}
	}
};
var getExamGuide = (guideId) => {
	if (!guideId) return null;
	return examGuides[String(guideId).trim().toLowerCase()] || null;
};
//#endregion
//#region src/pages/ExamList.jsx
var ExamList = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [voucher, setVoucher] = useState(null);
	const [examGuide, setExamGuide] = useState(null);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const found = vouchersData.find((v) => String(v._id) === String(id) || String(v.code) === String(id) || String(v.id) === String(id));
		setVoucher(found);
		if (found) {
			const guide = getExamGuide(found.guideId);
			setExamGuide(guide);
		} else setExamGuide(null);
		setLoading(false);
	}, [id]);
	const breadcrumbItems = [
		{
			name: "Home",
			url: "/"
		},
		{
			name: "Vouchers",
			url: "/vouchers"
		},
		{
			name: voucher?.shortName || "Details",
			url: `/vouchers/${id}`
		},
		{
			name: "Exam Guide",
			url: `/vouchers/${id}/exams`
		}
	];
	const getIconForLevel = (levelName) => {
		return {
			"Fundamentals": /* @__PURE__ */ jsx(FaCloud, { className: "text-sky-400" }),
			"Core": /* @__PURE__ */ jsx(FaCloud, { className: "text-sky-400" }),
			"Associate & Professional": /* @__PURE__ */ jsx(FaLayerGroup, { className: "text-purple-400" }),
			"Associate": /* @__PURE__ */ jsx(FaLayerGroup, { className: "text-purple-400" }),
			"Professional": /* @__PURE__ */ jsx(FaLayerGroup, { className: "text-purple-400" }),
			"Professional & Specialty": /* @__PURE__ */ jsx(FaLayerGroup, { className: "text-purple-400" }),
			"Security, Compliance & Identity": /* @__PURE__ */ jsx(FaLock, { className: "text-emerald-400" })
		}[levelName] || /* @__PURE__ */ jsx(FaFileAlt, { className: "text-slate-400" });
	};
	const whatsappUrl = `https://wa.me/+8801982188224?text=${encodeURIComponent(`Hi, I'm interested in the ${voucher?.shortName || "Exam"} (${voucher?.code || ""}) voucher. Can you please share more details?`)}`;
	const telegramUrl = `https://t.me/techcyfy`;
	if (loading) return /* @__PURE__ */ jsx("div", {
		className: "flex items-center justify-center min-h-[60vh]",
		children: /* @__PURE__ */ jsx("div", { className: "w-12 h-12 border-4 border-sky-500 border-t-transparent rounded-full animate-spin" })
	});
	if (!voucher) return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col items-center justify-center min-h-[60vh] px-4",
		children: [/* @__PURE__ */ jsx("h2", {
			className: "text-2xl font-bold text-white mb-4",
			children: "Voucher Not Found"
		}), /* @__PURE__ */ jsx(Link, {
			to: "/vouchers",
			className: "px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white rounded-xl transition-colors",
			children: "Browse All Vouchers"
		})]
	});
	const { shortName, code, category } = voucher;
	const displayGuide = examGuide || {
		title: `${shortName} - Complete Exam Guide`,
		description: `Comprehensive guide for ${shortName} certification exams.`,
		levels: [{
			name: "Core Exams",
			exams: [{
				code,
				name: shortName,
				description: `Complete ${shortName} certification exam guide.`
			}]
		}],
		whyCertify: [
			"Validate your cloud computing skills",
			"Build a successful career in IT",
			"Get recognized by top employers",
			"Stay competitive in the job market"
		],
		careerPaths: {
			"Cloud Professional": [code],
			"System Administrator": [code],
			"Cloud Architect": [code]
		}
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs(Helmet, { children: [
			/* @__PURE__ */ jsxs("title", { children: [
				"Exam Guide - ",
				shortName,
				" | Techcyfy"
			] }),
			/* @__PURE__ */ jsx("meta", {
				name: "description",
				content: `Complete exam guide for ${shortName} certification. All exam topics, career paths, and certification details covered.`
			}),
			/* @__PURE__ */ jsx("link", {
				rel: "canonical",
				href: `https://techcyfy.com/vouchers/${id}/exams`
			})
		] }),
		/* @__PURE__ */ jsx(BreadcrumbSchema, { items: breadcrumbItems }),
		/* @__PURE__ */ jsx("section", {
			className: "py-12 md:py-16 px-4 bg-black text-white min-h-screen",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-4xl mx-auto",
				children: [
					/* @__PURE__ */ jsxs("button", {
						onClick: () => navigate(-1),
						className: "flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6",
						children: [/* @__PURE__ */ jsx(FaArrowLeft, { className: "text-sm" }), /* @__PURE__ */ jsx("span", { children: "Back to Details" })]
					}),
					/* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .5 },
						className: "mb-8",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3 mb-3",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-xs font-bold text-sky-400 bg-sky-500/10 border border-sky-500/30 px-3 py-1 rounded-full uppercase tracking-wider",
									children: "Exam Guide"
								}), /* @__PURE__ */ jsx("span", {
									className: "text-xs text-slate-500",
									children: category
								})]
							}),
							/* @__PURE__ */ jsx("h1", {
								className: "text-3xl md:text-4xl font-extrabold text-white mb-2",
								children: displayGuide.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-lg text-slate-400 leading-relaxed",
								children: displayGuide.description
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "text-sm text-slate-500 font-mono mt-2",
								children: [
									"Voucher: ",
									shortName,
									" (",
									code,
									")"
								]
							})
						]
					}),
					/* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .5,
							delay: .1
						},
						className: "mb-10",
						children: [
							/* @__PURE__ */ jsxs("h2", {
								className: "text-2xl font-bold text-white mb-4 flex items-center gap-2",
								children: [/* @__PURE__ */ jsx(FaLayerGroup, { className: "text-sky-400" }), "Certification Levels"]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm text-slate-400 mb-6",
								children: "Certifications are organized into different levels based on experience and expertise."
							}),
							/* @__PURE__ */ jsx("div", {
								className: "space-y-6",
								children: displayGuide.levels.map((level, levelIndex) => /* @__PURE__ */ jsxs(motion.div, {
									initial: {
										opacity: 0,
										y: 20
									},
									animate: {
										opacity: 1,
										y: 0
									},
									transition: {
										duration: .4,
										delay: levelIndex * .15
									},
									className: "bg-slate-800/40 rounded-2xl p-6 border border-slate-700/50",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3 mb-4",
										children: [
											/* @__PURE__ */ jsx("span", {
												className: "text-xl",
												children: getIconForLevel(level.name)
											}),
											/* @__PURE__ */ jsx("h3", {
												className: "text-lg font-bold text-white",
												children: level.name
											}),
											/* @__PURE__ */ jsxs("span", {
												className: "text-xs text-slate-500 bg-slate-700/50 px-2 py-0.5 rounded-full",
												children: [level.exams.length, " exams"]
											})
										]
									}), /* @__PURE__ */ jsx("div", {
										className: "grid grid-cols-1 gap-4",
										children: level.exams.map((exam, examIndex) => /* @__PURE__ */ jsx("div", {
											className: "bg-slate-900/50 rounded-xl p-4 border border-slate-700/30 hover:border-sky-500/30 transition-all duration-200",
											children: /* @__PURE__ */ jsxs("div", {
												className: "flex items-start gap-3",
												children: [/* @__PURE__ */ jsx(FaCheckCircle, { className: "text-emerald-400 text-sm mt-1 flex-shrink-0" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
													className: "flex items-center gap-2 flex-wrap",
													children: [/* @__PURE__ */ jsx("span", {
														className: "text-sm font-bold text-white",
														children: exam.name
													}), /* @__PURE__ */ jsx("span", {
														className: "text-xs font-mono text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded-full",
														children: exam.code
													})]
												}), /* @__PURE__ */ jsx("p", {
													className: "text-sm text-slate-400 mt-1 leading-relaxed",
													children: exam.description
												})] })]
											})
										}, examIndex))
									})]
								}, levelIndex))
							})
						]
					}),
					/* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .5,
							delay: .2
						},
						className: "mb-10",
						children: [/* @__PURE__ */ jsxs("h2", {
							className: "text-2xl font-bold text-white mb-4 flex items-center gap-2",
							children: [/* @__PURE__ */ jsx(FaShieldAlt, { className: "text-emerald-400" }), "Why Get Certified?"]
						}), /* @__PURE__ */ jsx("div", {
							className: "grid grid-cols-1 md:grid-cols-2 gap-4",
							children: displayGuide.whyCertify.map((item, index) => /* @__PURE__ */ jsx("div", {
								className: "bg-slate-800/40 rounded-xl p-4 border border-slate-700/50",
								children: /* @__PURE__ */ jsx("p", {
									className: "text-sm text-slate-300 leading-relaxed",
									children: item
								})
							}, index))
						})]
					}),
					/* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .5,
							delay: .3
						},
						className: "mb-10",
						children: [
							/* @__PURE__ */ jsxs("h2", {
								className: "text-2xl font-bold text-white mb-4 flex items-center gap-2",
								children: [/* @__PURE__ */ jsx(FaTag, { className: "text-amber-400" }), "Career Paths"]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm text-slate-400 mb-4",
								children: "Choose the certification path that matches your career goals:"
							}),
							/* @__PURE__ */ jsx("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
								children: Object.entries(displayGuide.careerPaths).map(([path, exams], index) => /* @__PURE__ */ jsxs("div", {
									className: "bg-slate-800/40 rounded-xl p-4 border border-slate-700/50",
									children: [/* @__PURE__ */ jsx("h4", {
										className: "text-sm font-bold text-white mb-2",
										children: path
									}), /* @__PURE__ */ jsx("div", {
										className: "flex flex-wrap gap-2",
										children: exams.map((examCode, i) => /* @__PURE__ */ jsx("span", {
											className: "text-xs font-mono text-sky-400 bg-sky-500/10 px-2 py-1 rounded-full",
											children: examCode
										}, i))
									})]
								}, index))
							})
						]
					}),
					/* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .5,
							delay: .4
						},
						className: "bg-gradient-to-r from-sky-600/20 to-blue-600/20 rounded-2xl p-8 border border-sky-500/30 text-center",
						children: [
							/* @__PURE__ */ jsx("h3", {
								className: "text-xl font-bold text-white mb-2",
								children: "Ready to Start Your Certification Journey?"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-slate-400 mb-4",
								children: "Get your exam voucher today. Contact us on WhatsApp or Telegram."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap items-center justify-center gap-4",
								children: [/* @__PURE__ */ jsxs(motion.a, {
									href: whatsappUrl,
									target: "_blank",
									rel: "noopener noreferrer",
									whileHover: { scale: 1.03 },
									whileTap: { scale: .97 },
									className: "inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl shadow-lg shadow-emerald-600/25 transition-all duration-200",
									children: [/* @__PURE__ */ jsx(FaWhatsapp, { className: "text-lg" }), /* @__PURE__ */ jsx("span", { children: "Order Now" })]
								}), /* @__PURE__ */ jsxs(motion.a, {
									href: telegramUrl,
									target: "_blank",
									rel: "noopener noreferrer",
									whileHover: { scale: 1.03 },
									whileTap: { scale: .97 },
									className: "inline-flex items-center gap-2 px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-semibold rounded-xl shadow-lg shadow-sky-600/25 transition-all duration-200",
									children: [/* @__PURE__ */ jsx(FaTelegramPlane, { className: "text-lg" }), /* @__PURE__ */ jsx("span", { children: "Join Telegram" })]
								})]
							})
						]
					})
				]
			})
		})
	] });
};
//#endregion
//#region src/Blog/AzureBlogDetails.jsx
var AzureVouchers = () => {
	const [activeExam, setActiveExam] = useState(null);
	const exams = [
		{
			id: "az-900",
			code: "AZ-900",
			name: "Microsoft Azure Fundamentals",
			level: "Fundamentals",
			area: "Cloud Fundamentals",
			status: "Available",
			description: "One of the most popular entry-level Microsoft Azure certification exams. Designed for candidates who want to demonstrate foundational knowledge of cloud concepts, Azure services, Azure management, security, compliance, and pricing.",
			suitable: [
				"Beginners learning cloud computing",
				"Students entering the IT industry",
				"IT support professionals",
				"Business and technical professionals",
				"Professionals planning to pursue advanced Azure certifications"
			]
		},
		{
			id: "az-104",
			code: "AZ-104",
			name: "Microsoft Azure Administrator",
			level: "Associate",
			area: "Cloud Administration",
			status: "Available",
			description: "Focuses on administering Microsoft Azure environments. Candidates should understand Azure identities and governance, storage, compute resources, networking, monitoring, and management.",
			suitable: [
				"Azure administrators",
				"Cloud administrators",
				"System administrators",
				"Infrastructure engineers",
				"IT professionals moving into cloud administration"
			]
		},
		{
			id: "az-305",
			code: "AZ-305",
			name: "Designing Microsoft Azure Infrastructure Solutions",
			level: "Expert",
			area: "Solutions Architecture",
			status: "Available",
			description: "Designed for professionals who architect cloud and hybrid solutions on Microsoft Azure. Focuses on designing solutions involving compute, networking, storage, monitoring, security, identity, governance, business continuity, disaster recovery, and data platforms.",
			suitable: [
				"Experienced cloud engineers",
				"Solution architects",
				"Infrastructure professionals",
				"Senior IT professionals"
			]
		},
		{
			id: "az-400",
			code: "AZ-400",
			name: "Designing and Implementing Microsoft DevOps Solutions",
			level: "Expert",
			area: "DevOps",
			status: "Available",
			description: "Focuses on designing and implementing DevOps practices across Microsoft technologies. Combines development and infrastructure expertise to enable continuous delivery of value.",
			topics: [
				"Continuous integration",
				"Continuous delivery",
				"Source control",
				"Automation",
				"Testing",
				"Deployment",
				"Monitoring",
				"Security",
				"Collaboration",
				"Azure DevOps",
				"GitHub"
			]
		},
		{
			id: "az-500",
			code: "AZ-500",
			name: "Microsoft Azure Security Engineer",
			level: "Associate",
			area: "Security",
			status: "Verify current status",
			description: "Aimed at professionals working with Microsoft Azure security technologies. Covers identity and access management, platform protection, security operations, data security, network security, and security governance."
		},
		{
			id: "az-700",
			code: "AZ-700",
			name: "Designing and Implementing Microsoft Azure Networking Solutions",
			level: "Associate",
			area: "Networking",
			status: "Verify current status",
			description: "Focuses on designing and implementing networking solutions in Microsoft Azure. Relevant to network engineers, cloud engineers, Azure administrators, infrastructure professionals, and network architects."
		},
		{
			id: "az-800",
			code: "AZ-800",
			name: "Administering Windows Server Hybrid Core Infrastructure",
			level: "Associate",
			area: "Hybrid Infrastructure",
			status: "Available",
			description: "Part of the Windows Server Hybrid Administrator certification. Focuses on administering Windows Server hybrid core infrastructure.",
			note: "Requires both AZ-800 and AZ-801 for certification."
		},
		{
			id: "az-801",
			code: "AZ-801",
			name: "Configuring Windows Server Hybrid Advanced Services",
			level: "Associate",
			area: "Hybrid Infrastructure",
			status: "Available",
			description: "Part of the Windows Server Hybrid Administrator certification. Focuses on configuring Windows Server hybrid advanced services.",
			note: "Requires both AZ-800 and AZ-801 for certification."
		},
		{
			id: "dp-900",
			code: "DP-900",
			name: "Microsoft Azure Data Fundamentals",
			level: "Fundamentals",
			area: "Data",
			status: "Available",
			description: "An entry-level data certification designed for candidates who want to demonstrate foundational knowledge of data concepts and Microsoft Azure data services.",
			suitable: [
				"Cloud data professionals",
				"Database beginners",
				"Data analytics enthusiasts",
				"Data engineering aspirants",
				"Azure data services learners"
			]
		},
		{
			id: "dp-300",
			code: "DP-300",
			name: "Administering Microsoft Azure SQL Solutions",
			level: "Associate",
			area: "Database Administration",
			status: "Verify current status",
			description: "Designed for professionals responsible for administering Microsoft Azure SQL solutions. Relevant to database administrators, SQL professionals, Azure database administrators, and cloud database engineers."
		},
		{
			id: "sc-900",
			code: "SC-900",
			name: "Microsoft Security, Compliance, and Identity Fundamentals",
			level: "Fundamentals",
			area: "Security Fundamentals",
			status: "Available",
			description: "Introduces foundational concepts related to Microsoft security, compliance, and identity. Suitable for candidates who want to understand Microsoft's security and identity ecosystem before progressing toward more advanced security certifications."
		},
		{
			id: "sc-200",
			code: "SC-200",
			name: "Microsoft Security Operations Analyst",
			level: "Associate",
			area: "Security Operations",
			status: "Verify current status",
			description: "Aimed at security operations professionals working with Microsoft security technologies. Covers security monitoring, threat detection, incident response, Microsoft Defender, and Microsoft Sentinel."
		},
		{
			id: "sc-300",
			code: "SC-300",
			name: "Microsoft Identity and Access Administrator",
			level: "Associate",
			area: "Identity & Access",
			status: "Verify current status",
			description: "Focuses on identity and access administration within Microsoft's security ecosystem. Relevant to professionals working with Microsoft Entra ID, identity management, access management, authentication, authorization, and identity governance."
		},
		{
			id: "sc-400",
			code: "SC-400",
			name: "Microsoft Information Protection Administrator",
			level: "Associate",
			area: "Information Protection",
			status: "Verify current status",
			description: "Focuses on information protection, governance, compliance, and data security capabilities within Microsoft's ecosystem."
		},
		{
			id: "sc-100",
			code: "SC-100",
			name: "Microsoft Cybersecurity Architect",
			level: "Expert",
			area: "Cybersecurity Architecture",
			status: "Available",
			description: "Designed for experienced cybersecurity professionals who architect security solutions. Covers identity, devices, data, AI, applications, networks, infrastructure, DevOps, governance, risk, compliance, and security operations.",
			suitable: [
				"Experienced cybersecurity architects",
				"Senior security professionals",
				"Security solution designers"
			]
		},
		{
			id: "pl-900",
			code: "PL-900",
			name: "Microsoft Power Platform Fundamentals",
			level: "Fundamentals",
			area: "Low-Code / Business Applications",
			status: "Verify current status",
			description: "Introduces the Microsoft Power Platform. Designed for candidates who want foundational knowledge of Microsoft's low-code and business application ecosystem.",
			suitable: [
				"Power Apps users",
				"Power Automate users",
				"Business process automation professionals",
				"Low-code solution builders"
			]
		}
	];
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(SEO, {
		title: "Microsoft Azure Exam Vouchers",
		description: "Explore Microsoft Azure certification exam vouchers, exam codes, certification paths and voucher information.",
		keywords: "Azure exam voucher, Microsoft Azure voucher, Azure certification voucher, AZ-900 voucher",
		canonicalUrl: "https://techcyfy.com/blog/microsoft-azure-exam-vouchers"
	}), /* @__PURE__ */ jsx("div", {
		className: "min-h-screen bg-white text-gray-800 font-sans",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-6xl mx-auto px-4 py-8",
			children: [
				/* @__PURE__ */ jsxs("header", {
					className: "border-b border-gray-200 pb-6 mb-8",
					children: [
						/* @__PURE__ */ jsx("h1", {
							className: "text-3xl md:text-4xl font-bold text-gray-900",
							children: "Microsoft Azure Vouchers: Complete Guide to Discounted Microsoft Azure Certification Vouchers"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-gray-600 mt-2 text-lg",
							children: "Exam Codes, Certifications & Discounted Voucher Guide"
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "text-sm text-gray-500 mt-3",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "font-medium",
									children: "Looking for Microsoft Azure certification exam vouchers at discounted prices?"
								}),
								" ",
								"Techcyfy helps IT professionals, students, developers, administrators, security specialists, and cloud engineers find certification exam voucher options for Microsoft Azure and other leading technology certifications."
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800",
							children: [/* @__PURE__ */ jsx("span", {
								className: "font-semibold",
								children: "⚠️ Important:"
							}), " Microsoft regularly updates, replaces, and retires certification exams. Always verify the current exam status on Microsoft Learn before purchasing or scheduling an exam."]
						})
					]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "mb-10",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-semibold text-gray-900 mb-4",
						children: "Popular Microsoft Azure Exam Codes"
					}), /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 bg-gray-50 p-4 rounded-lg border border-gray-200",
						children: exams.map((exam) => /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2 text-sm",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "font-mono font-bold text-blue-600",
									children: exam.code
								}),
								/* @__PURE__ */ jsx("span", {
									className: "text-gray-600",
									children: "—"
								}),
								/* @__PURE__ */ jsx("span", {
									className: "text-gray-700 truncate",
									children: exam.name
								}),
								/* @__PURE__ */ jsx("span", {
									className: `text-xs px-1.5 py-0.5 rounded ${exam.status === "Available" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`,
									children: exam.status
								})
							]
						}, exam.id))
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "mb-10",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-semibold text-gray-900 mb-4",
						children: "Retired Microsoft Exams You Should Know About"
					}), /* @__PURE__ */ jsxs("div", {
						className: "bg-red-50 border border-red-200 rounded-lg p-4",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "text-sm text-red-800 mb-3",
								children: "Certification websites must be careful when listing Microsoft exam vouchers because Microsoft periodically retires examinations. Several exams appearing in older voucher lists are no longer current."
							}),
							/* @__PURE__ */ jsx("div", {
								className: "space-y-2",
								children: [
									{
										code: "AZ-204",
										name: "Developing Solutions for Microsoft Azure",
										retiredDate: "July 31, 2026"
									},
									{
										code: "AI-102",
										name: "Designing and Implementing a Microsoft Azure AI Solution",
										retiredDate: "June 30, 2026"
									},
									{
										code: "AI-900",
										name: "Microsoft Azure AI Fundamentals",
										retiredDate: "June 30, 2026",
										note: "Microsoft has introduced newer AI certification pathways. For example, AI-901 — Microsoft Azure AI Fundamentals is currently listed by Microsoft Learn."
									}
								].map((exam, idx) => /* @__PURE__ */ jsxs("div", {
									className: "bg-white p-3 rounded border border-red-200",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex flex-wrap items-center gap-2",
										children: [
											/* @__PURE__ */ jsx("span", {
												className: "font-mono font-bold text-red-600",
												children: exam.code
											}),
											/* @__PURE__ */ jsx("span", {
												className: "text-gray-700",
												children: "—"
											}),
											/* @__PURE__ */ jsx("span", {
												className: "text-gray-700",
												children: exam.name
											}),
											/* @__PURE__ */ jsx("span", {
												className: "text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded",
												children: "Retired"
											}),
											/* @__PURE__ */ jsxs("span", {
												className: "text-sm text-gray-500",
												children: [
													"(",
													exam.retiredDate,
													")"
												]
											})
										]
									}), exam.note && /* @__PURE__ */ jsx("p", {
										className: "text-sm text-gray-600 mt-1",
										children: exam.note
									})]
								}, idx))
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm text-red-700 mt-3 font-medium",
								children: "⚠️ This is why Techcyfy recommends checking the current exam code before purchasing a voucher."
							})
						]
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "mb-10",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-semibold text-gray-900 mb-4",
						children: "All Microsoft Azure Certifications"
					}), /* @__PURE__ */ jsx("div", {
						className: "space-y-4",
						children: exams.map((exam) => /* @__PURE__ */ jsxs("div", {
							className: "border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-white",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap items-start justify-between cursor-pointer",
								onClick: () => setActiveExam(activeExam === exam.id ? null : exam.id),
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
									className: "flex flex-wrap items-center gap-2",
									children: [
										/* @__PURE__ */ jsx("h3", {
											className: "text-xl font-bold text-gray-900",
											children: exam.code
										}),
										/* @__PURE__ */ jsx("span", {
											className: "text-gray-700 text-lg font-medium",
											children: "—"
										}),
										/* @__PURE__ */ jsx("span", {
											className: "text-lg font-medium text-gray-800",
											children: exam.name
										})
									]
								}), /* @__PURE__ */ jsxs("div", {
									className: "flex flex-wrap gap-2 mt-1",
									children: [
										/* @__PURE__ */ jsx("span", {
											className: "text-xs bg-gray-100 px-2 py-0.5 rounded-full text-gray-700",
											children: exam.level
										}),
										/* @__PURE__ */ jsx("span", {
											className: "text-xs bg-gray-100 px-2 py-0.5 rounded-full text-gray-700",
											children: exam.area
										}),
										/* @__PURE__ */ jsx("span", {
											className: `text-xs px-2 py-0.5 rounded-full ${exam.status === "Available" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`,
											children: exam.status
										})
									]
								})] }), /* @__PURE__ */ jsx("span", {
									className: "text-gray-400 text-sm mt-1",
									children: activeExam === exam.id ? "▼" : "▶"
								})]
							}), activeExam === exam.id && /* @__PURE__ */ jsxs("div", {
								className: "mt-4 pt-4 border-t border-gray-100 space-y-3",
								children: [
									/* @__PURE__ */ jsx("p", {
										className: "text-gray-700",
										children: exam.description
									}),
									exam.suitable && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: "font-semibold text-gray-800 text-sm",
										children: "Suitable for:"
									}), /* @__PURE__ */ jsx("ul", {
										className: "list-disc list-inside text-sm text-gray-600 grid grid-cols-1 sm:grid-cols-2 gap-x-4",
										children: exam.suitable.map((item, i) => /* @__PURE__ */ jsx("li", { children: item }, i))
									})] }),
									exam.topics && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: "font-semibold text-gray-800 text-sm",
										children: "Key Areas:"
									}), /* @__PURE__ */ jsx("ul", {
										className: "list-disc list-inside text-sm text-gray-600 grid grid-cols-1 sm:grid-cols-2 gap-x-4",
										children: exam.topics.map((topic, i) => /* @__PURE__ */ jsx("li", { children: topic }, i))
									})] }),
									exam.note && /* @__PURE__ */ jsxs("p", {
										className: "text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded border border-blue-200",
										children: ["ℹ️ ", exam.note]
									}),
									/* @__PURE__ */ jsx("div", {
										className: "mt-2 p-2 bg-gray-50 rounded border border-gray-200",
										children: /* @__PURE__ */ jsxs("p", {
											className: "text-sm text-gray-600",
											children: [
												/* @__PURE__ */ jsxs("span", {
													className: "font-medium",
													children: [
														"Looking for a ",
														exam.code,
														" voucher?"
													]
												}),
												" ",
												"Contact Techcyfy to check current discounted voucher availability."
											]
										})
									})
								]
							})]
						}, exam.id))
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "mb-10 border border-gray-200 rounded-lg p-6 bg-white",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-semibold text-gray-900 mb-3",
							children: "Why Choose Techcyfy for Certification Exam Vouchers?"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-gray-600 mb-4",
							children: "Techcyfy is focused on helping IT professionals access certification exam voucher options at competitive prices."
						}),
						/* @__PURE__ */ jsxs("ul", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700",
							children: [
								/* @__PURE__ */ jsxs("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-green-600 font-bold",
										children: "✓"
									}), " Competitive Pricing – Find discounted certification voucher options"]
								}),
								/* @__PURE__ */ jsxs("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-green-600 font-bold",
										children: "✓"
									}), " Genuine Voucher Options – Focused on valid certification voucher solutions"]
								}),
								/* @__PURE__ */ jsxs("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-green-600 font-bold",
										children: "✓"
									}), " Fast Response – Send the exam name or code and ask about current availability"]
								}),
								/* @__PURE__ */ jsxs("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-green-600 font-bold",
										children: "✓"
									}), " Multiple Certification Providers – Across major technology platforms"]
								}),
								/* @__PURE__ */ jsxs("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-green-600 font-bold",
										children: "✓"
									}), " Professional Support – Get assistance identifying the appropriate exam code and voucher option"]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "mb-10 bg-gray-50 p-6 rounded-lg border border-gray-200",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-semibold text-gray-900 mb-3",
							children: "How to Buy a Microsoft Azure Exam Voucher"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-gray-600 mb-4",
							children: "Buying an Azure exam voucher through Techcyfy is simple:"
						}),
						/* @__PURE__ */ jsxs("ol", {
							className: "list-decimal list-inside space-y-2 text-gray-700",
							children: [
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
									className: "font-medium",
									children: "Choose Your Exam"
								}), " – Select the Microsoft certification exam you want to take (AZ-900, AZ-104, AZ-305, AZ-400, AZ-500, AZ-700, DP-900, DP-300, SC-900, SC-200, SC-300, SC-400, SC-100)."] }),
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
									className: "font-medium",
									children: "Send the Exam Code"
								}), " – Contact Techcyfy with your exam name or exam code."] }),
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
									className: "font-medium",
									children: "Check Current Availability"
								}), " – Voucher availability, pricing, expiration conditions, and eligibility can vary by certification and voucher type."] }),
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
									className: "font-medium",
									children: "Purchase Your Voucher"
								}), " – After confirming the details, complete your order through Techcyfy."] }),
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
									className: "font-medium",
									children: "Schedule Your Certification Exam"
								}), " – Follow Microsoft's official certification and exam-scheduling process to book your examination."] })
							]
						})
					]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "mb-10",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-semibold text-gray-900 mb-4",
						children: "Frequently Asked Questions About Microsoft Azure Exam Vouchers"
					}), /* @__PURE__ */ jsx("div", {
						className: "space-y-3",
						children: [
							{
								q: "What is a Microsoft Azure exam voucher?",
								a: "A Microsoft Azure exam voucher is a prepaid or discounted payment option that can be used toward an eligible Microsoft certification examination, depending on the voucher's terms and conditions."
							},
							{
								q: "Where can I buy a discounted Azure exam voucher?",
								a: "You can contact Techcyfy to check current Microsoft Azure exam voucher availability and pricing."
							},
							{
								q: "Which Azure certification should beginners take?",
								a: "For many beginners, AZ-900 — Microsoft Azure Fundamentals is a suitable starting point because it introduces foundational Azure and cloud concepts."
							},
							{
								q: "What is the AZ-104 exam?",
								a: "AZ-104 is the Microsoft Azure Administrator exam and focuses on administering and managing Azure environments."
							},
							{
								q: "What is the AZ-305 exam?",
								a: "AZ-305 is the exam associated with the Microsoft Azure Solutions Architect Expert certification."
							},
							{
								q: "Is AZ-204 still available?",
								a: "No. Microsoft retired AZ-204 on July 31, 2026."
							},
							{
								q: "Is AI-900 still available?",
								a: "No. Microsoft lists AI-900 as retired on June 30, 2026. Candidates should check Microsoft's current Azure AI certification pathway instead."
							},
							{
								q: "Are Microsoft exam codes changed over time?",
								a: "Yes. Microsoft periodically updates, replaces, or retires certification examinations. Always verify the current exam code and status before purchasing or scheduling an exam."
							},
							{
								q: "Can I request a specific Microsoft exam voucher?",
								a: "Yes. Send Techcyfy the Microsoft certification exam name or exam code, and the team can check the current voucher availability and price."
							}
						].map((faq, idx) => /* @__PURE__ */ jsxs("div", {
							className: "border border-gray-200 rounded-lg p-4 bg-white",
							children: [/* @__PURE__ */ jsx("h4", {
								className: "font-semibold text-gray-800",
								children: faq.q
							}), /* @__PURE__ */ jsx("p", {
								className: "text-gray-600 text-sm mt-1",
								children: faq.a
							})]
						}, idx))
					})]
				}),
				/* @__PURE__ */ jsxs("footer", {
					className: "border-t border-gray-200 pt-6 text-center",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "text-xl font-bold text-gray-900",
							children: "Start Your Microsoft Azure Certification Journey"
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "text-gray-600 mt-2 max-w-2xl mx-auto",
							children: [
								"Whether you are preparing for your first cloud certification with ",
								/* @__PURE__ */ jsx("strong", { children: "AZ-900" }),
								", advancing toward expert-level roles with ",
								/* @__PURE__ */ jsx("strong", { children: "AZ-305" }),
								" or ",
								/* @__PURE__ */ jsx("strong", { children: "AZ-400" }),
								", or pursuing security certifications like ",
								/* @__PURE__ */ jsx("strong", { children: "SC-100" }),
								", there are Microsoft certification pathways for different career goals and experience levels."
							]
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "text-gray-700 mt-4 font-medium",
							children: [
								"Looking for a discounted Microsoft Azure exam voucher? Visit ",
								/* @__PURE__ */ jsx("strong", { children: "Techcyfy" }),
								" and send us your required exam name or exam code to check current voucher availability and pricing."
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-sm text-gray-500 mt-6",
							children: "Techcyfy — Your IT Certification Voucher Partner"
						})
					]
				})
			]
		})
	})] });
};
//#endregion
//#region src/Blog/AwsBlogDetails.jsx
var AwsVouchers = () => {
	const [activeCert, setActiveCert] = useState(null);
	const certifications = [
		{
			id: "cloud-practitioner",
			name: "AWS Certified Cloud Practitioner",
			code: "CLF-C02",
			level: "Foundational",
			fee: "$100",
			duration: "90 minutes",
			description: "Designed for individuals who want to demonstrate broad knowledge of AWS Cloud, independent of a specific technical job role. Covers cloud concepts, AWS global infrastructure, security and compliance, AWS technologies and services, cloud economics, billing and pricing, and AWS support.",
			domains: [
				"Cloud Concepts",
				"Security and Compliance",
				"Cloud Technology and Services",
				"Billing, Pricing, and Support"
			],
			suitable: [
				"IT beginners",
				"Students",
				"Business professionals",
				"Non-technical professionals",
				"Career changers",
				"Cloud beginners"
			],
			pathway: "Cloud Practitioner → Associate Certification → Professional/Specialty Certification"
		},
		{
			id: "ai-practitioner",
			name: "AWS Certified AI Practitioner",
			code: "AIF-C01",
			level: "Foundational",
			description: "Validates foundational knowledge of artificial intelligence, machine learning, generative AI, foundation models, AI use cases, responsible AI, and AWS AI services.",
			suitable: [
				"AI beginners",
				"Business professionals",
				"Developers",
				"Product professionals",
				"IT professionals",
				"Cloud professionals"
			]
		},
		{
			id: "solutions-architect-associate",
			name: "AWS Certified Solutions Architect – Associate",
			code: "SAA-C03",
			level: "Associate",
			fee: "$150",
			duration: "130 minutes",
			description: "One of the most popular AWS certifications for cloud professionals. Validates skills in designing distributed systems and AWS solutions using the AWS Well-Architected Framework.",
			topics: [
				"AWS architecture",
				"Compute",
				"Storage",
				"Databases",
				"Networking",
				"Security",
				"High availability",
				"Disaster recovery",
				"Scalability",
				"Cost optimization",
				"Serverless architecture",
				"Containers",
				"Cloud migration"
			],
			suitable: [
				"Cloud engineers",
				"Solutions architects",
				"System administrators",
				"DevOps professionals",
				"Software developers",
				"IT professionals"
			],
			pathway: "Cloud Practitioner → SAA-C03 → SAP-C02/SAP-C03"
		},
		{
			id: "developer-associate",
			name: "AWS Certified Developer – Associate",
			code: "DVA-C02 → DVA-C03",
			level: "Associate",
			fee: "$150",
			duration: "130 minutes",
			description: "Validates skills in AWS application development, deployment, testing, troubleshooting, optimization, AWS services, security, CI/CD, databases, and serverless applications.",
			topics: [
				"AWS application development",
				"Deployment",
				"Testing",
				"Troubleshooting",
				"Optimization",
				"AWS services",
				"Security",
				"CI/CD",
				"Databases",
				"Serverless applications"
			],
			suitable: [
				"AWS developers",
				"Software developers",
				"Cloud developers",
				"DevOps engineers",
				"Application developers",
				"Backend developers"
			],
			note: "DVA-C03 registration opens October 27, 2026. Last day for DVA-C02 is November 30, 2026. DVA-C03 GA begins December 1, 2026.",
			dates: {
				registration: "October 27, 2026",
				lastDay: "November 30, 2026",
				ga: "December 1, 2026"
			}
		},
		{
			id: "cloudops-engineer",
			name: "AWS Certified CloudOps Engineer – Associate",
			code: "SOA-C03",
			level: "Associate",
			fee: "$150",
			duration: "130 minutes",
			description: "Validates technical skills for deploying, managing, and operating workloads on AWS. Positions toward professionals performing systems-administrator and cloud operations responsibilities.",
			topics: [
				"Deployment",
				"AWS operations",
				"Monitoring",
				"Security",
				"Networking",
				"Troubleshooting",
				"Infrastructure management",
				"Automation",
				"Reliability",
				"Business continuity"
			],
			suitable: [
				"Cloud administrators",
				"System administrators",
				"Cloud operations engineers",
				"DevOps professionals",
				"Infrastructure engineers"
			]
		},
		{
			id: "data-engineer-associate",
			name: "AWS Certified Data Engineer – Associate",
			code: "DEA-C01",
			level: "Associate",
			fee: "$150",
			duration: "130 minutes",
			description: "Validates skills in implementing data pipelines and data stores on AWS.",
			topics: [
				"Data ingestion",
				"Data transformation",
				"Data pipelines",
				"Data stores",
				"Data security",
				"Data monitoring",
				"Data quality",
				"Cost optimization",
				"Performance optimization"
			],
			suitable: [
				"Data engineers",
				"Cloud data professionals",
				"Analytics engineers",
				"Data platform engineers",
				"Developers working with AWS data services"
			]
		},
		{
			id: "ml-engineer-associate",
			name: "AWS Certified Machine Learning Engineer – Associate",
			code: "MLA-C01 → MLA-C02",
			level: "Associate",
			fee: "$150 ($75 beta for ME1-C02)",
			duration: "130 minutes (170 minutes beta)",
			description: "Designed for professionals who build and operationalize ML and generative AI solutions in production.",
			topics: [
				"Generative AI",
				"Foundation models",
				"Large language models",
				"Amazon Bedrock",
				"RAG architectures",
				"Agentic AI",
				"Responsible AI",
				"Traditional machine learning",
				"ML operations"
			],
			suitable: [
				"Machine learning engineers",
				"MLOps engineers",
				"Data engineers",
				"Data scientists",
				"LLMOps engineers",
				"AI developers",
				"ML architects"
			],
			note: "MLA-C02 beta registration opened September 1, 2026. MLA-C01 available until September 28, 2026. Standard MLA-C02 expected in early 2027.",
			beta: {
				code: "ME1-C02",
				fee: "$75",
				duration: "170 minutes",
				questions: "85"
			}
		},
		{
			id: "solutions-architect-professional",
			name: "AWS Certified Solutions Architect – Professional",
			code: "SAP-C02 → SAP-C03",
			level: "Professional",
			fee: "$300",
			duration: "180 minutes",
			description: "Designed for experienced cloud professionals performing complex technical tasks. SAP-C03 expands the role to include modern cloud-native architecture, GenAI and agentic architectures, resilience, DevSecOps automation, and post-quantum cryptography.",
			domains: [
				"Cloud-native architecture design and implementation",
				"Security, compliance, and governance",
				"Cost-optimized architecture design",
				"Resilience, migration, and business continuity",
				"Operational excellence and automation"
			],
			suitable: [
				"Senior solutions architects",
				"Cloud architects",
				"Enterprise architects",
				"Cloud engineers",
				"Technical leads"
			],
			dates: {
				registration: "October 27, 2026",
				lastDay: "November 16, 2026",
				ga: "November 17, 2026"
			}
		},
		{
			id: "devops-engineer",
			name: "AWS Certified DevOps Engineer – Professional",
			code: "DOP-C02",
			level: "Professional",
			fee: "$300",
			duration: "180 minutes",
			description: "Validates advanced skills in provisioning, operating, and managing distributed application systems on AWS.",
			topics: [
				"CI/CD",
				"Infrastructure as code",
				"Monitoring",
				"Logging",
				"Deployment automation",
				"Security",
				"Reliability",
				"Incident response",
				"Automation",
				"Cloud operations"
			],
			suitable: [
				"DevOps engineers",
				"Cloud engineers",
				"Platform engineers",
				"SRE professionals",
				"Senior developers",
				"Infrastructure engineers"
			]
		},
		{
			id: "genai-developer",
			name: "AWS Certified Generative AI Developer – Professional",
			code: "AIP-C01",
			level: "Professional",
			fee: "$300",
			duration: "180 minutes",
			description: "Validates advanced technical skills for designing, implementing, and deploying generative AI solutions on AWS.",
			topics: [
				"Generative AI applications",
				"Foundation models",
				"Amazon Bedrock",
				"AI application development",
				"Model integration",
				"Security",
				"Responsible AI",
				"Deployment",
				"Monitoring",
				"Optimization"
			],
			suitable: [
				"AI developers",
				"Generative AI engineers",
				"Cloud developers",
				"ML engineers",
				"Software engineers",
				"AI solution architects"
			]
		},
		{
			id: "security-specialty",
			name: "AWS Certified Security – Specialty",
			code: "SCS-C03",
			level: "Specialty",
			fee: "$300",
			duration: "170 minutes",
			description: "Validates expertise in securing AWS workloads and applications.",
			domains: [
				{
					name: "Detection",
					weight: "16%"
				},
				{
					name: "Incident Response",
					weight: "14%"
				},
				{
					name: "Infrastructure Security",
					weight: "18%"
				},
				{
					name: "Identity and Access Management",
					weight: "20%"
				},
				{
					name: "Data Protection",
					weight: "18%"
				},
				{
					name: "Security Foundations and Governance",
					weight: "14%"
				}
			],
			topics: [
				"IAM",
				"Data protection",
				"Encryption",
				"Network security",
				"Infrastructure security",
				"Security monitoring",
				"Incident response",
				"Governance",
				"Compliance",
				"Vulnerability management"
			],
			suitable: [
				"Cloud security engineers",
				"Security engineers",
				"Cybersecurity professionals",
				"Security architects",
				"SOC professionals",
				"AWS administrators"
			]
		},
		{
			id: "networking-specialty",
			name: "AWS Certified Advanced Networking – Specialty",
			code: "ANS-C01",
			level: "Specialty",
			fee: "$300",
			duration: "170 minutes",
			description: "Validates advanced skills in designing and implementing AWS and hybrid IT network architectures.",
			topics: [
				"AWS networking",
				"Hybrid connectivity",
				"Network architecture",
				"Routing",
				"DNS",
				"Network security",
				"Automation",
				"High availability",
				"Troubleshooting",
				"Large-scale networking"
			],
			suitable: [
				"Network engineers",
				"Cloud network engineers",
				"Network architects",
				"Solutions architects",
				"Infrastructure engineers"
			]
		}
	];
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(SEO, {
		title: "AWS Exam Vouchers",
		description: "Learn about AWS certification exam vouchers, available AWS exams, voucher options and certification resources.",
		keywords: "AWS exam voucher, AWS certification voucher, AWS voucher price, AWS certification",
		canonicalUrl: "https://techcyfy.com/blog/aws-exam-vouchers"
	}), /* @__PURE__ */ jsx("div", {
		className: "min-h-screen bg-white text-gray-800 font-sans",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-6xl mx-auto px-4 py-8",
			children: [
				/* @__PURE__ */ jsxs("header", {
					className: "border-b border-gray-200 pb-6 mb-8",
					children: [
						/* @__PURE__ */ jsx("h1", {
							className: "text-3xl md:text-4xl font-bold text-gray-900",
							children: /* @__PURE__ */ jsx("h1", { children: "AWS Exam Vouchers: Complete Guide to Discounted AWS Certification Vouchers" })
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-gray-600 mt-2 text-lg",
							children: "Complete AWS Exam List, Codes, Costs & Certification Guide"
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "text-sm text-gray-500 mt-3",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "font-medium",
									children: "Looking for AWS certification exam vouchers at competitive prices?"
								}),
								" ",
								"Techcyfy helps IT professionals, cloud engineers, developers, architects, DevOps professionals, data engineers, cybersecurity specialists, and technology students explore AWS certification exam voucher options for globally recognized AWS certifications."
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "font-semibold",
									children: "⚠️ 2026 Update:"
								}),
								" AWS is currently updating several certification exams. Candidates should verify the exact exam code and availability before purchasing or scheduling an exam. AWS has announced updates to ",
								/* @__PURE__ */ jsx("strong", { children: "MLA-C02, SAP-C03, and DVA-C03" }),
								"."
							]
						})
					]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "mb-10",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-semibold text-gray-900 mb-4",
						children: "AWS Certification Exam Codes at a Glance"
					}), /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 bg-gray-50 p-4 rounded-lg border border-gray-200",
						children: certifications.map((cert) => /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2 text-sm",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "font-mono font-bold text-blue-600",
									children: cert.code
								}),
								/* @__PURE__ */ jsx("span", {
									className: "text-gray-400",
									children: "—"
								}),
								/* @__PURE__ */ jsx("span", {
									className: "text-gray-700 truncate",
									children: cert.name.replace("AWS Certified ", "")
								}),
								/* @__PURE__ */ jsx("span", {
									className: `text-xs px-1.5 py-0.5 rounded flex-shrink-0 ${cert.level === "Foundational" ? "bg-blue-100 text-blue-700" : cert.level === "Associate" ? "bg-green-100 text-green-700" : cert.level === "Professional" ? "bg-purple-100 text-purple-700" : "bg-orange-100 text-orange-700"}`,
									children: cert.level
								})
							]
						}, cert.id))
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "mb-10",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-semibold text-gray-900 mb-4",
						children: "Which AWS Certification Should You Choose?"
					}), /* @__PURE__ */ jsx("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ jsxs("table", {
							className: "w-full text-sm border-collapse",
							children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", {
								className: "bg-gray-100",
								children: [/* @__PURE__ */ jsx("th", {
									className: "border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700",
									children: "Career Goal"
								}), /* @__PURE__ */ jsx("th", {
									className: "border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700",
									children: "Recommended AWS Certification"
								})]
							}) }), /* @__PURE__ */ jsx("tbody", { children: [
								{
									goal: "New to AWS",
									cert: "Cloud Practitioner – CLF-C02"
								},
								{
									goal: "AI fundamentals",
									cert: "AI Practitioner – AIF-C01"
								},
								{
									goal: "Cloud architecture",
									cert: "Solutions Architect – Associate – SAA-C03"
								},
								{
									goal: "AWS development",
									cert: "Developer – Associate – DVA-C02/DVA-C03"
								},
								{
									goal: "Cloud operations",
									cert: "CloudOps Engineer – Associate – SOA-C03"
								},
								{
									goal: "AWS data engineering",
									cert: "Data Engineer – Associate – DEA-C01"
								},
								{
									goal: "Machine learning",
									cert: "ML Engineer – Associate – MLA-C01/MLA-C02"
								},
								{
									goal: "Senior architecture",
									cert: "Solutions Architect – Professional – SAP-C02/SAP-C03"
								},
								{
									goal: "AWS DevOps",
									cert: "DevOps Engineer – Professional – DOP-C02"
								},
								{
									goal: "Generative AI development",
									cert: "Generative AI Developer – Professional – AIP-C01"
								},
								{
									goal: "AWS security",
									cert: "Security – Specialty – SCS-C03"
								},
								{
									goal: "Advanced networking",
									cert: "Advanced Networking – Specialty – ANS-C01"
								}
							].map((item, idx) => /* @__PURE__ */ jsxs("tr", {
								className: idx % 2 === 0 ? "bg-white" : "bg-gray-50",
								children: [/* @__PURE__ */ jsx("td", {
									className: "border border-gray-300 px-4 py-2",
									children: item.goal
								}), /* @__PURE__ */ jsx("td", {
									className: "border border-gray-300 px-4 py-2 font-medium text-blue-700",
									children: item.cert
								})]
							}, idx)) })]
						})
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "mb-10",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-semibold text-gray-900 mb-4",
						children: "All AWS Certifications"
					}), /* @__PURE__ */ jsx("div", {
						className: "space-y-4",
						children: certifications.map((cert) => /* @__PURE__ */ jsxs("div", {
							className: "border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-white",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap items-start justify-between cursor-pointer",
								onClick: () => setActiveCert(activeCert === cert.id ? null : cert.id),
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
									className: "flex flex-wrap items-center gap-2",
									children: [
										/* @__PURE__ */ jsx("h3", {
											className: "text-xl font-bold text-gray-900",
											children: cert.name
										}),
										/* @__PURE__ */ jsx("span", {
											className: "font-mono text-blue-600 text-sm font-semibold",
											children: cert.code
										}),
										/* @__PURE__ */ jsx("span", {
											className: `text-xs px-2 py-0.5 rounded-full ${cert.level === "Foundational" ? "bg-blue-100 text-blue-700" : cert.level === "Associate" ? "bg-green-100 text-green-700" : cert.level === "Professional" ? "bg-purple-100 text-purple-700" : "bg-orange-100 text-orange-700"}`,
											children: cert.level
										})
									]
								}), /* @__PURE__ */ jsxs("div", {
									className: "flex flex-wrap gap-3 mt-1 text-sm text-gray-600",
									children: [cert.fee && /* @__PURE__ */ jsxs("span", { children: ["Fee: ", cert.fee] }), cert.duration && /* @__PURE__ */ jsxs("span", { children: ["Duration: ", cert.duration] })]
								})] }), /* @__PURE__ */ jsx("span", {
									className: "text-gray-400 text-sm mt-1",
									children: activeCert === cert.id ? "▼" : "▶"
								})]
							}), activeCert === cert.id && /* @__PURE__ */ jsxs("div", {
								className: "mt-4 pt-4 border-t border-gray-100 space-y-3",
								children: [
									/* @__PURE__ */ jsx("p", {
										className: "text-gray-700",
										children: cert.description
									}),
									cert.domains && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: "font-semibold text-gray-800 text-sm",
										children: "Exam Domains:"
									}), typeof cert.domains[0] === "string" ? /* @__PURE__ */ jsx("ul", {
										className: "list-disc list-inside text-sm text-gray-600 grid grid-cols-1 sm:grid-cols-2 gap-x-4",
										children: cert.domains.map((domain, i) => /* @__PURE__ */ jsx("li", { children: domain }, i))
									}) : /* @__PURE__ */ jsx("ul", {
										className: "list-disc list-inside text-sm text-gray-600 grid grid-cols-1 sm:grid-cols-2 gap-x-4",
										children: cert.domains.map((domain, i) => /* @__PURE__ */ jsxs("li", { children: [
											domain.name,
											" — ",
											/* @__PURE__ */ jsx("span", {
												className: "font-medium",
												children: domain.weight
											})
										] }, i))
									})] }),
									cert.topics && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: "font-semibold text-gray-800 text-sm",
										children: "Key Topics:"
									}), /* @__PURE__ */ jsx("ul", {
										className: "list-disc list-inside text-sm text-gray-600 grid grid-cols-1 sm:grid-cols-2 gap-x-4",
										children: cert.topics.map((topic, i) => /* @__PURE__ */ jsx("li", { children: topic }, i))
									})] }),
									cert.suitable && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: "font-semibold text-gray-800 text-sm",
										children: "Recommended for:"
									}), /* @__PURE__ */ jsx("ul", {
										className: "list-disc list-inside text-sm text-gray-600 grid grid-cols-1 sm:grid-cols-2 gap-x-4",
										children: cert.suitable.map((item, i) => /* @__PURE__ */ jsx("li", { children: item }, i))
									})] }),
									cert.pathway && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: "font-semibold text-gray-800 text-sm",
										children: "Career Pathway:"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-sm text-gray-600 font-mono bg-gray-50 px-3 py-1 rounded inline-block",
										children: cert.pathway
									})] }),
									cert.dates && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: "font-semibold text-gray-800 text-sm",
										children: "Important Dates:"
									}), /* @__PURE__ */ jsxs("div", {
										className: "text-sm text-gray-600 space-y-1",
										children: [
											/* @__PURE__ */ jsxs("p", { children: ["• Registration opens: ", /* @__PURE__ */ jsx("strong", { children: cert.dates.registration })] }),
											/* @__PURE__ */ jsxs("p", { children: ["• Last day for current exam: ", /* @__PURE__ */ jsx("strong", { children: cert.dates.lastDay })] }),
											/* @__PURE__ */ jsxs("p", { children: ["• New exam GA: ", /* @__PURE__ */ jsx("strong", { children: cert.dates.ga })] })
										]
									})] }),
									cert.beta && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: "font-semibold text-gray-800 text-sm",
										children: "Beta Information:"
									}), /* @__PURE__ */ jsxs("div", {
										className: "text-sm text-gray-600 space-y-1",
										children: [
											/* @__PURE__ */ jsxs("p", { children: ["• Beta Exam Code: ", /* @__PURE__ */ jsx("strong", {
												className: "font-mono",
												children: cert.beta.code
											})] }),
											/* @__PURE__ */ jsxs("p", { children: ["• Beta Fee: ", /* @__PURE__ */ jsx("strong", { children: cert.beta.fee })] }),
											/* @__PURE__ */ jsxs("p", { children: ["• Beta Duration: ", /* @__PURE__ */ jsx("strong", { children: cert.beta.duration })] }),
											/* @__PURE__ */ jsxs("p", { children: ["• Beta Questions: ", /* @__PURE__ */ jsx("strong", { children: cert.beta.questions })] })
										]
									})] }),
									cert.note && /* @__PURE__ */ jsxs("p", {
										className: "text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded border border-blue-200",
										children: ["ℹ️ ", cert.note]
									}),
									/* @__PURE__ */ jsx("div", {
										className: "mt-2 p-2 bg-gray-50 rounded border border-gray-200",
										children: /* @__PURE__ */ jsxs("p", {
											className: "text-sm text-gray-600",
											children: [
												/* @__PURE__ */ jsxs("span", {
													className: "font-medium",
													children: [
														"Looking for a ",
														cert.code,
														" voucher?"
													]
												}),
												" ",
												"Contact Techcyfy to check current discounted voucher availability."
											]
										})
									})
								]
							})]
						}, cert.id))
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "mb-10 bg-gray-50 p-6 rounded-lg border border-gray-200",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-semibold text-gray-900 mb-3",
							children: "What Is an AWS Exam Voucher?"
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "text-gray-700 mb-3",
							children: [
								"An ",
								/* @__PURE__ */ jsx("strong", { children: "AWS exam voucher" }),
								" is a payment voucher that can be used toward an eligible AWS Certification exam according to the voucher's terms and conditions."
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm",
							children: [/* @__PURE__ */ jsxs("ul", {
								className: "list-disc list-inside text-gray-600 space-y-1",
								children: [
									/* @__PURE__ */ jsx("li", { children: "Certification name" }),
									/* @__PURE__ */ jsx("li", { children: "Exam code" }),
									/* @__PURE__ */ jsx("li", { children: "Current exam version" }),
									/* @__PURE__ */ jsx("li", { children: "Voucher validity" }),
									/* @__PURE__ */ jsx("li", { children: "Country/region restrictions" })
								]
							}), /* @__PURE__ */ jsxs("ul", {
								className: "list-disc list-inside text-gray-600 space-y-1",
								children: [
									/* @__PURE__ */ jsx("li", { children: "Redemption conditions" }),
									/* @__PURE__ */ jsx("li", { children: "Exam delivery options" }),
									/* @__PURE__ */ jsx("li", { children: "Testing availability" }),
									/* @__PURE__ */ jsx("li", { children: "Expiration date" })
								]
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-sm text-gray-500 mt-3",
							children: "AWS also provides an official exam-voucher system for organizations and teams, including online purchasing and voucher management."
						})
					]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "mb-10 border border-gray-200 rounded-lg p-6 bg-white",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-semibold text-gray-900 mb-3",
						children: "Why Choose Techcyfy for AWS Exam Vouchers?"
					}), /* @__PURE__ */ jsxs("ul", {
						className: "grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700",
						children: [
							/* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-2",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-green-600 font-bold",
									children: "✓"
								}), " Competitive AWS Voucher Pricing"]
							}),
							/* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-2",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-green-600 font-bold",
									children: "✓"
								}), " Multiple AWS Certifications – Cloud Practitioner, Solutions Architect, Developer, Security, DevOps, AI & more"]
							}),
							/* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-2",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-green-600 font-bold",
									children: "✓"
								}), " Easy Ordering – Tell Techcyfy the certification name and exam code"]
							}),
							/* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-2",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-green-600 font-bold",
									children: "✓"
								}), " Professional Assistance – Get guidance on certification pathways"]
							}),
							/* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-2",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-green-600 font-bold",
									children: "✓"
								}), " Exam-Code Verification – AWS periodically updates exam versions"]
							})
						]
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "mb-10 bg-gray-50 p-6 rounded-lg border border-gray-200",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-semibold text-gray-900 mb-3",
						children: "How to Buy an AWS Certification Exam Voucher"
					}), /* @__PURE__ */ jsxs("ol", {
						className: "list-decimal list-inside space-y-2 text-gray-700",
						children: [
							/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
								className: "font-medium",
								children: "Select Your AWS Certification"
							}), " – Choose the certification that matches your career goal (e.g., AWS Certified Security – Specialty)."] }),
							/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
								className: "font-medium",
								children: "Confirm the Exam Code"
							}), " – Verify the current exam code (e.g., SCS-C03)."] }),
							/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
								className: "font-medium",
								children: "Contact Techcyfy"
							}), " – Provide the AWS certification name and exam code."] }),
							/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
								className: "font-medium",
								children: "Confirm Voucher Details"
							}), " – Verify price, validity, redemption terms, certification, exam code, region, and delivery method."] }),
							/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
								className: "font-medium",
								children: "Schedule Your AWS Exam"
							}), " – After receiving an eligible voucher, follow the applicable AWS Certification process to redeem the voucher and schedule your exam."] })
						]
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "mb-10",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-semibold text-gray-900 mb-4",
						children: "Frequently Asked Questions About AWS Certification Exams"
					}), /* @__PURE__ */ jsx("div", {
						className: "space-y-3",
						children: [
							{
								q: "What is an AWS exam voucher?",
								a: "An AWS exam voucher is a payment voucher that can be used toward an eligible AWS Certification exam according to the voucher's terms and conditions."
							},
							{
								q: "What is the AWS Cloud Practitioner exam code?",
								a: "The current AWS Cloud Practitioner exam is CLF-C02."
							},
							{
								q: "What is the AWS AI Practitioner exam code?",
								a: "The AWS AI Practitioner exam code is AIF-C01."
							},
							{
								q: "What is the AWS Solutions Architect Associate exam code?",
								a: "The current exam code is SAA-C03."
							},
							{
								q: "What is the AWS Developer Associate exam code?",
								a: "The current exam is DVA-C02, with DVA-C03 scheduled to become generally available on December 1, 2026."
							},
							{
								q: "What is the AWS CloudOps Engineer Associate exam code?",
								a: "The exam code is SOA-C03."
							},
							{
								q: "What is the AWS Data Engineer Associate exam code?",
								a: "The exam code is DEA-C01."
							},
							{
								q: "What is the AWS Machine Learning Engineer Associate exam code?",
								a: "The current exam is MLA-C01, while MLA-C02 is the updated exam currently entering beta."
							},
							{
								q: "What is the AWS Solutions Architect Professional exam code?",
								a: "The current exam is SAP-C02. AWS has announced SAP-C03, with general availability beginning November 17, 2026."
							},
							{
								q: "What is the AWS DevOps Engineer Professional exam code?",
								a: "The current exam code is DOP-C02."
							},
							{
								q: "What is the AWS Generative AI Developer Professional exam code?",
								a: "The exam code is AIP-C01."
							},
							{
								q: "What is the AWS Security Specialty exam code?",
								a: "The current Security – Specialty exam is SCS-C03."
							},
							{
								q: "What is the AWS Advanced Networking Specialty exam code?",
								a: "The exam code is ANS-C01."
							},
							{
								q: "Which AWS certification is best for beginners?",
								a: "AWS Certified Cloud Practitioner — CLF-C02 is designed to validate broad AWS Cloud knowledge and can be a suitable starting point for beginners."
							},
							{
								q: "Which AWS certification is best for cybersecurity?",
								a: "AWS Certified Security – Specialty (SCS-C03) is designed specifically around securing AWS workloads and applications."
							},
							{
								q: "How long is an AWS certification valid?",
								a: "AWS certifications generally have a three-year validity period, with recertification options depending on the certification."
							}
						].map((faq, idx) => /* @__PURE__ */ jsxs("div", {
							className: "border border-gray-200 rounded-lg p-4 bg-white",
							children: [/* @__PURE__ */ jsx("h4", {
								className: "font-semibold text-gray-800",
								children: faq.q
							}), /* @__PURE__ */ jsx("p", {
								className: "text-gray-600 text-sm mt-1",
								children: faq.a
							})]
						}, idx))
					})]
				}),
				/* @__PURE__ */ jsxs("footer", {
					className: "border-t border-gray-200 pt-6 text-center",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "text-xl font-bold text-gray-900",
							children: "Ready to Take Your AWS Certification Exam?"
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "text-gray-600 mt-2 max-w-2xl mx-auto",
							children: [
								"Whether you're starting your cloud journey with ",
								/* @__PURE__ */ jsx("strong", { children: "AWS Certified Cloud Practitioner" }),
								", building architecture skills with ",
								/* @__PURE__ */ jsx("strong", { children: "SAA-C03" }),
								", developing cloud applications with",
								" ",
								/* @__PURE__ */ jsx("strong", { children: "DVA-C02/DVA-C03" }),
								", advancing into DevOps with ",
								/* @__PURE__ */ jsx("strong", { children: "DOP-C02" }),
								", specializing in security with ",
								/* @__PURE__ */ jsx("strong", { children: "SCS-C03" }),
								", or developing expertise in AI and machine learning, Techcyfy can help you explore available AWS exam voucher options."
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-gray-700 mt-4 font-medium",
							children: "Choose your AWS certification, verify the current exam code, and contact Techcyfy for the latest voucher availability and pricing."
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "text-sm text-gray-500 mt-6",
							children: [
								"Techcyfy — Your Certification Voucher Partner",
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("span", {
									className: "italic",
									children: "Explore. Prepare. Certify."
								})
							]
						})
					]
				})
			]
		})
	})] });
};
//#endregion
//#region src/Blog/DatabricksVouchers.jsx
var DatabricksVouchers = () => {
	const [activeCert, setActiveCert] = useState(null);
	const certifications = [
		{
			id: "data-analyst-associate",
			name: "Databricks Certified Data Analyst Associate",
			level: "Associate",
			code: "No public code",
			description: "Validates foundational data analysis skills using Databricks SQL and related capabilities. The role uses Databricks SQL to complete introductory data analysis tasks.",
			topics: [
				"SQL analytics",
				"Data querying",
				"Data visualization",
				"Dashboards",
				"Data exploration",
				"Databricks SQL",
				"Analytical workflows"
			],
			suitable: [
				"Data analysts",
				"Business analysts",
				"BI professionals",
				"SQL developers",
				"Junior data professionals",
				"Analytics professionals"
			]
		},
		{
			id: "data-engineer-associate",
			name: "Databricks Certified Data Engineer Associate",
			level: "Associate",
			code: "PR000054",
			fee: "$200",
			duration: "90 minutes",
			questions: "45 scored questions",
			experience: "6 months hands-on Databricks experience",
			validity: "2 years",
			description: "Validates foundational data engineering skills using the Databricks Data Intelligence Platform. Assesses foundational data engineering tasks including the Databricks workspace, architecture, data ingestion, data loading, data transformation and modeling, PySpark, Lakeflow Jobs, CI/CD, troubleshooting, monitoring, optimization, governance, and security.",
			topics: [
				"Databricks Data Intelligence Platform",
				"Data ingestion",
				"Data loading",
				"ETL",
				"PySpark",
				"Data transformation",
				"Data modeling",
				"Lakeflow Jobs",
				"CI/CD",
				"Monitoring",
				"Troubleshooting",
				"Optimization",
				"Governance",
				"Security"
			],
			suitable: [
				"Data engineers",
				"Junior data engineers",
				"Cloud engineers",
				"ETL developers",
				"Analytics engineers",
				"Big data professionals"
			],
			note: "Exam guide updated May 4, 2026. Recertification required every 2 years."
		},
		{
			id: "data-engineer-professional",
			name: "Databricks Certified Data Engineer Professional",
			level: "Professional",
			code: "No public code",
			description: "Designed for advanced data engineering professionals who work with complex data engineering workloads on Databricks. Assesses advanced data engineering tasks using Databricks.",
			topics: [
				"Advanced data engineering",
				"Production data pipelines",
				"Data transformation",
				"Performance optimization",
				"Data governance",
				"Security",
				"CI/CD",
				"Workflow orchestration",
				"Advanced Spark",
				"Lakehouse architecture"
			],
			suitable: [
				"Senior data engineers",
				"Lead data engineers",
				"Data platform engineers",
				"Cloud data engineers",
				"Big data engineers",
				"Analytics platform engineers"
			],
			note: "Check official exam page for current version as of June 2026."
		},
		{
			id: "ml-associate",
			name: "Databricks Certified Machine Learning Associate",
			level: "Associate",
			code: "No public code",
			description: "Validates foundational machine learning skills using Databricks. Assesses the ability to use Databricks to perform basic machine learning tasks.",
			topics: [
				"Machine learning workflows",
				"Data preparation",
				"Model development",
				"Model evaluation",
				"Model deployment",
				"Databricks Machine Learning",
				"ML lifecycle management"
			],
			suitable: [
				"Junior ML engineers",
				"Data scientists",
				"ML developers",
				"AI engineers",
				"Data analysts moving into ML",
				"Cloud professionals entering machine learning"
			]
		},
		{
			id: "ml-professional",
			name: "Databricks Certified Machine Learning Professional",
			level: "Professional",
			code: "No public code",
			description: "Validates advanced machine learning skills using Databricks. Assesses advanced machine learning tasks performed in production using Databricks Machine Learning.",
			topics: [
				"Advanced machine learning",
				"Model development",
				"Model deployment",
				"ML pipelines",
				"Production ML",
				"MLOps",
				"Model monitoring",
				"Feature engineering",
				"Machine learning optimization",
				"Large-scale ML workloads"
			],
			suitable: [
				"Machine learning engineers",
				"Senior data scientists",
				"ML platform engineers",
				"MLOps engineers",
				"AI engineers",
				"Machine learning architects"
			]
		},
		{
			id: "genai-associate",
			name: "Databricks Certified Generative AI Engineer Associate",
			level: "Associate",
			code: "No public code",
			description: "Assesses the ability to design, build, and deploy Generative AI solutions with Databricks.",
			topics: [
				"Generative AI",
				"Large language models",
				"Retrieval-augmented generation",
				"AI application development",
				"Prompt engineering",
				"Model evaluation",
				"AI application deployment",
				"Governance",
				"Responsible AI"
			],
			suitable: [
				"Generative AI engineers",
				"AI developers",
				"ML engineers",
				"Data scientists",
				"Full-stack AI developers",
				"Cloud AI professionals"
			]
		},
		{
			id: "spark-developer",
			name: "Databricks Certified Associate Developer for Apache Spark",
			level: "Associate",
			code: "No public code",
			description: "Focuses on fundamental Spark development skills. Assesses understanding of the Spark DataFrame API.",
			topics: [
				"Apache Spark",
				"Spark DataFrame API",
				"Data manipulation",
				"Data transformations",
				"Spark sessions",
				"Data processing",
				"PySpark concepts"
			],
			suitable: [
				"Spark developers",
				"Data engineers",
				"Big data developers",
				"PySpark developers",
				"Data platform professionals"
			]
		}
	];
	return /* @__PURE__ */ jsx("div", {
		className: "min-h-screen bg-white text-gray-800 font-sans",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-6xl mx-auto px-4 py-8",
			children: [
				/* @__PURE__ */ jsxs("header", {
					className: "border-b border-gray-200 pb-6 mb-8",
					children: [
						/* @__PURE__ */ jsx("h1", {
							className: "text-3xl md:text-4xl font-bold text-gray-900",
							children: "Databricks Exam Vouchers: Complete Guide to Discounted Databricks Certification Vouchers"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-gray-600 mt-2 text-lg",
							children: "Complete Certification List, Exam Guide & Discounted Vouchers"
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "text-sm text-gray-500 mt-3",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "font-medium",
									children: "Looking for Databricks certification exam vouchers at competitive prices?"
								}),
								" ",
								"Techcyfy helps data engineers, data analysts, machine learning professionals, AI engineers, developers, and cloud professionals find Databricks certification exam voucher options."
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800",
							children: [/* @__PURE__ */ jsx("span", {
								className: "font-semibold",
								children: "⚠️ Important:"
							}), " Databricks periodically updates certification exams and exam guides. Always verify the current exam version, certification requirements, voucher terms, and registration information before purchasing or scheduling an examination."]
						})
					]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "mb-10",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-semibold text-gray-900 mb-4",
							children: "Complete Databricks Certification List"
						}),
						/* @__PURE__ */ jsx("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-2 bg-gray-50 p-4 rounded-lg border border-gray-200",
							children: certifications.map((cert) => /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2 text-sm",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "text-gray-700 truncate",
										children: cert.name
									}),
									/* @__PURE__ */ jsx("span", {
										className: `text-xs px-1.5 py-0.5 rounded flex-shrink-0 ${cert.level === "Associate" ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700"}`,
										children: cert.level
									}),
									cert.code !== "No public code" && /* @__PURE__ */ jsx("span", {
										className: "text-xs bg-gray-200 text-gray-700 px-1.5 py-0.5 rounded font-mono flex-shrink-0",
										children: cert.code
									})
								]
							}, cert.id))
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-xs text-gray-500 mt-2",
							children: "Note: Databricks primarily uses certification names rather than standardized alphanumeric exam codes."
						})
					]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "mb-10",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-semibold text-gray-900 mb-4",
						children: "Which Databricks Certification Should You Choose?"
					}), /* @__PURE__ */ jsx("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ jsxs("table", {
							className: "w-full text-sm border-collapse",
							children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", {
								className: "bg-gray-100",
								children: [/* @__PURE__ */ jsx("th", {
									className: "border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700",
									children: "Career Goal"
								}), /* @__PURE__ */ jsx("th", {
									className: "border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700",
									children: "Recommended Certification"
								})]
							}) }), /* @__PURE__ */ jsx("tbody", { children: [
								{
									goal: "Data analytics",
									cert: "Data Analyst Associate"
								},
								{
									goal: "Data engineering",
									cert: "Data Engineer Associate"
								},
								{
									goal: "Advanced data engineering",
									cert: "Data Engineer Professional"
								},
								{
									goal: "Machine learning",
									cert: "Machine Learning Associate"
								},
								{
									goal: "Advanced machine learning",
									cert: "Machine Learning Professional"
								},
								{
									goal: "Generative AI",
									cert: "Generative AI Engineer Associate"
								},
								{
									goal: "Apache Spark development",
									cert: "Associate Developer for Apache Spark"
								}
							].map((item, idx) => /* @__PURE__ */ jsxs("tr", {
								className: idx % 2 === 0 ? "bg-white" : "bg-gray-50",
								children: [/* @__PURE__ */ jsx("td", {
									className: "border border-gray-300 px-4 py-2",
									children: item.goal
								}), /* @__PURE__ */ jsx("td", {
									className: "border border-gray-300 px-4 py-2 font-medium text-blue-700",
									children: item.cert
								})]
							}, idx)) })]
						})
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "mb-10",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-semibold text-gray-900 mb-4",
						children: "All Databricks Certifications"
					}), /* @__PURE__ */ jsx("div", {
						className: "space-y-4",
						children: certifications.map((cert) => /* @__PURE__ */ jsxs("div", {
							className: "border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-white",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap items-start justify-between cursor-pointer",
								onClick: () => setActiveCert(activeCert === cert.id ? null : cert.id),
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
									className: "flex flex-wrap items-center gap-2",
									children: [/* @__PURE__ */ jsx("h3", {
										className: "text-xl font-bold text-gray-900",
										children: cert.name
									}), /* @__PURE__ */ jsx("span", {
										className: `text-xs px-2 py-0.5 rounded-full ${cert.level === "Associate" ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700"}`,
										children: cert.level
									})]
								}), /* @__PURE__ */ jsxs("div", {
									className: "flex flex-wrap gap-3 mt-1 text-sm text-gray-600",
									children: [
										cert.code !== "No public code" && /* @__PURE__ */ jsxs("span", {
											className: "font-mono bg-gray-100 px-2 py-0.5 rounded",
											children: ["Code: ", cert.code]
										}),
										cert.fee && /* @__PURE__ */ jsxs("span", { children: ["Fee: ", cert.fee] }),
										cert.duration && /* @__PURE__ */ jsxs("span", { children: ["Duration: ", cert.duration] })
									]
								})] }), /* @__PURE__ */ jsx("span", {
									className: "text-gray-400 text-sm mt-1",
									children: activeCert === cert.id ? "▼" : "▶"
								})]
							}), activeCert === cert.id && /* @__PURE__ */ jsxs("div", {
								className: "mt-4 pt-4 border-t border-gray-100 space-y-3",
								children: [
									/* @__PURE__ */ jsx("p", {
										className: "text-gray-700",
										children: cert.description
									}),
									cert.topics && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: "font-semibold text-gray-800 text-sm",
										children: "Key Topics:"
									}), /* @__PURE__ */ jsx("ul", {
										className: "list-disc list-inside text-sm text-gray-600 grid grid-cols-1 sm:grid-cols-2 gap-x-4",
										children: cert.topics.map((topic, i) => /* @__PURE__ */ jsx("li", { children: topic }, i))
									})] }),
									cert.suitable && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: "font-semibold text-gray-800 text-sm",
										children: "Suitable for:"
									}), /* @__PURE__ */ jsx("ul", {
										className: "list-disc list-inside text-sm text-gray-600 grid grid-cols-1 sm:grid-cols-2 gap-x-4",
										children: cert.suitable.map((item, i) => /* @__PURE__ */ jsx("li", { children: item }, i))
									})] }),
									cert.experience && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: "font-semibold text-gray-800 text-sm",
										children: "Recommended Experience:"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-sm text-gray-600",
										children: cert.experience
									})] }),
									cert.questions && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: "font-semibold text-gray-800 text-sm",
										children: "Exam Format:"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-sm text-gray-600",
										children: cert.questions
									})] }),
									cert.validity && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: "font-semibold text-gray-800 text-sm",
										children: "Certification Validity:"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-sm text-gray-600",
										children: cert.validity
									})] }),
									cert.note && /* @__PURE__ */ jsxs("p", {
										className: "text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded border border-blue-200",
										children: ["ℹ️ ", cert.note]
									}),
									/* @__PURE__ */ jsx("div", {
										className: "mt-2 p-2 bg-gray-50 rounded border border-gray-200",
										children: /* @__PURE__ */ jsxs("p", {
											className: "text-sm text-gray-600",
											children: [
												/* @__PURE__ */ jsxs("span", {
													className: "font-medium",
													children: [
														"Looking for a ",
														cert.name,
														" voucher?"
													]
												}),
												" ",
												"Contact Techcyfy to check current discounted voucher availability."
											]
										})
									})
								]
							})]
						}, cert.id))
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "mb-10 bg-gray-50 p-6 rounded-lg border border-gray-200",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-semibold text-gray-900 mb-3",
							children: "Databricks Exam Voucher Guide"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-gray-700 mb-3",
							children: "A Databricks certification exam voucher can help eligible candidates pay for a Databricks certification examination according to the voucher's terms and conditions."
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "text-gray-600 mb-3",
							children: [
								"Databricks states that discounted certification vouchers are generally associated with",
								" ",
								/* @__PURE__ */ jsx("strong", { children: "Databricks events, beta exams, partner organizations, or pre-purchased credits" }),
								"."
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-gray-600",
							children: "Because voucher eligibility and availability can vary, candidates should verify the applicable terms before purchasing."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-3 p-3 bg-blue-50 border border-blue-200 rounded text-sm text-blue-800",
							children: [/* @__PURE__ */ jsx("span", {
								className: "font-semibold",
								children: "Looking for a Databricks certification voucher?"
							}), " Techcyfy can help you check current availability for certifications such as Data Engineer Associate, Data Engineer Professional, Data Analyst Associate, Machine Learning Associate, Machine Learning Professional, Generative AI Engineer Associate, and Associate Developer for Apache Spark."]
						})
					]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "mb-10 border border-gray-200 rounded-lg p-6 bg-white",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-semibold text-gray-900 mb-3",
						children: "Why Choose Techcyfy for Databricks Exam Vouchers?"
					}), /* @__PURE__ */ jsxs("ul", {
						className: "grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700",
						children: [
							/* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-2",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-green-600 font-bold",
									children: "✓"
								}), " Competitive Pricing – Explore available voucher options"]
							}),
							/* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-2",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-green-600 font-bold",
									children: "✓"
								}), " Multiple Certification Options – Across data engineering, analytics, ML, GenAI, and Spark"]
							}),
							/* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-2",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-green-600 font-bold",
									children: "✓"
								}), " Easy Voucher Inquiry – Send the exact certification name"]
							}),
							/* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-2",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-green-600 font-bold",
									children: "✓"
								}), " Professional Support – Get help finding the right certification"]
							}),
							/* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-2",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-green-600 font-bold",
									children: "✓"
								}), " Current Certification Information – Stay up to date with exam changes"]
							})
						]
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "mb-10 bg-gray-50 p-6 rounded-lg border border-gray-200",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-semibold text-gray-900 mb-3",
						children: "How to Buy a Databricks Certification Exam Voucher"
					}), /* @__PURE__ */ jsxs("ol", {
						className: "list-decimal list-inside space-y-2 text-gray-700",
						children: [
							/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
								className: "font-medium",
								children: "Choose Your Certification"
							}), " – Select the certification that matches your career goal (e.g., Databricks Certified Data Engineer Associate, Databricks Certified Machine Learning Professional)."] }),
							/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
								className: "font-medium",
								children: "Contact Techcyfy"
							}), " – Send the exact Databricks certification name."] }),
							/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
								className: "font-medium",
								children: "Check Current Availability"
							}), " – Ask Techcyfy for the latest voucher availability and pricing."] }),
							/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
								className: "font-medium",
								children: "Verify Voucher Terms"
							}), " – Confirm certification name, voucher eligibility, expiration date, redemption conditions, restrictions, and current exam version."] }),
							/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
								className: "font-medium",
								children: "Register for the Examination"
							}), " – Databricks provides certification registration information through its certification ecosystem."] })
						]
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "mb-10",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-semibold text-gray-900 mb-4",
						children: "Frequently Asked Questions About Databricks Exam Vouchers"
					}), /* @__PURE__ */ jsx("div", {
						className: "space-y-3",
						children: [
							{
								q: "What is a Databricks certification exam voucher?",
								a: "A Databricks certification exam voucher is a payment or discount mechanism that can be used toward an eligible Databricks certification exam according to the applicable voucher terms."
							},
							{
								q: "Where can I buy a Databricks exam voucher?",
								a: "You can contact Techcyfy to check current Databricks certification voucher availability and pricing."
							},
							{
								q: "What Databricks certifications are currently available?",
								a: "The current catalog includes Associate and Professional certifications covering data analytics, data engineering, machine learning, generative AI, and Apache Spark."
							},
							{
								q: "What is the Databricks Data Engineer Associate certification?",
								a: "It is an Associate-level certification that validates foundational data engineering skills using the Databricks Data Intelligence Platform."
							},
							{
								q: "What is the Databricks Data Engineer Associate exam code?",
								a: "PR000054 has appeared as the Webassessor exam code in Databricks Community posts. Verify before displaying as official."
							},
							{
								q: "How long is the Databricks Data Engineer Associate certification valid?",
								a: "The current exam guide states the certification is valid for two years and requires recertification every two years."
							},
							{
								q: "Does Databricks update its certification exams?",
								a: "Yes. Databricks updates exam guides when certification content changes. The Data Engineer Associate guide was updated May 4, 2026."
							},
							{
								q: "Are Databricks certification vouchers discounted?",
								a: "Databricks states that discounted certification vouchers are reserved for certain events, beta exams, partner organizations, or pre-purchased credits."
							},
							{
								q: "Which Databricks certification is best for data engineers?",
								a: "Data Engineer Associate is recommended for foundational skills, while Data Engineer Professional is for advanced production workloads."
							},
							{
								q: "Which Databricks certification is best for machine learning engineers?",
								a: "Machine Learning Associate is for foundational skills, while Machine Learning Professional is for advanced production ML workloads."
							}
						].map((faq, idx) => /* @__PURE__ */ jsxs("div", {
							className: "border border-gray-200 rounded-lg p-4 bg-white",
							children: [/* @__PURE__ */ jsx("h4", {
								className: "font-semibold text-gray-800",
								children: faq.q
							}), /* @__PURE__ */ jsx("p", {
								className: "text-gray-600 text-sm mt-1",
								children: faq.a
							})]
						}, idx))
					})]
				}),
				/* @__PURE__ */ jsxs("footer", {
					className: "border-t border-gray-200 pt-6 text-center",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "text-xl font-bold text-gray-900",
							children: "Start Your Databricks Certification Journey"
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "text-gray-600 mt-2 max-w-2xl mx-auto",
							children: [
								"Whether you are beginning your career in ",
								/* @__PURE__ */ jsx("strong", { children: "data analytics" }),
								", developing your skills as a",
								" ",
								/* @__PURE__ */ jsx("strong", { children: "data engineer" }),
								", advancing into ",
								/* @__PURE__ */ jsx("strong", { children: "professional data engineering" }),
								", building",
								" ",
								/* @__PURE__ */ jsx("strong", { children: "machine learning solutions" }),
								", developing ",
								/* @__PURE__ */ jsx("strong", { children: "generative AI applications" }),
								", or working with ",
								/* @__PURE__ */ jsx("strong", { children: "Apache Spark" }),
								", Databricks provides certification paths for a wide range of modern data and AI roles."
							]
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "text-gray-700 mt-4 font-medium",
							children: [
								"Looking for a specific Databricks voucher? Send Techcyfy the exact",
								" ",
								/* @__PURE__ */ jsx("strong", { children: "Databricks Certification Name" }),
								" (e.g., Databricks Certified Data Engineer Associate, Databricks Certified Machine Learning Professional) and ask for the latest voucher availability and price."
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-sm text-gray-500 mt-6",
							children: "Techcyfy — Your IT Certification Voucher Partner"
						})
					]
				})
			]
		})
	});
};
//#endregion
//#region src/Blog/ComptiaVouchers.jsx
var ComptiaVouchers = () => {
	const [activeCert, setActiveCert] = useState(null);
	const certifications = [
		{
			id: "techplus",
			name: "CompTIA Tech+",
			code: "FC0-U71",
			category: "IT Fundamentals",
			level: "Beginner",
			description: "Designed for people who want to develop a basic understanding of modern technology and IT concepts before progressing into more specialized certifications.",
			topics: [
				"Computing",
				"Hardware",
				"Software",
				"Networking",
				"Cybersecurity",
				"Cloud computing",
				"Data",
				"IT infrastructure",
				"Emerging technologies",
				"Basic troubleshooting concepts"
			],
			pathway: "Tech+ → A+ → Network+ / Security+ → Advanced Certification"
		},
		{
			id: "aplus",
			name: "CompTIA A+",
			code: "220-1201 & 220-1202",
			category: "IT Support",
			level: "Entry-level",
			description: "A foundational IT certification designed for technical support and IT operations careers. Requires two exams.",
			core1: "220-1201 – Mobile devices, Networking, Hardware, Virtualization, Cloud computing, Hardware/Network troubleshooting",
			core2: "220-1202 – Operating systems, Security, Software troubleshooting, Operational procedures, IT support, System configuration",
			careers: [
				"IT Support Specialist",
				"Help Desk Technician",
				"Desktop Support Technician",
				"Technical Support Specialist",
				"IT Technician",
				"Field Service Technician"
			]
		},
		{
			id: "networkplus",
			name: "CompTIA Network+",
			code: "N10-009",
			category: "Networking",
			level: "Intermediate",
			description: "Validates foundational and practical networking knowledge across modern IT environments.",
			topics: [
				"Networking concepts",
				"Network infrastructure",
				"Network operations",
				"Network security",
				"Network troubleshooting",
				"Wireless networking",
				"Routing and switching",
				"Virtual networking",
				"Cloud networking",
				"Network monitoring"
			],
			recommended: [
				"Network technicians",
				"Network administrators",
				"IT support professionals",
				"System administrators",
				"Junior network engineers",
				"Cybersecurity professionals"
			]
		},
		{
			id: "securityplus",
			name: "CompTIA Security+",
			code: "SY0-701",
			category: "Cybersecurity",
			level: "Intermediate",
			description: "One of the most recognized vendor-neutral cybersecurity certifications. Covers fundamental security concepts and practical cybersecurity skills.",
			topics: [
				"General security concepts",
				"Threats and vulnerabilities",
				"Security architecture",
				"Security operations",
				"Identity and access management",
				"Cryptography",
				"Network security",
				"Incident response",
				"Risk management",
				"Governance",
				"Compliance",
				"Security controls"
			],
			recommended: [
				"Cybersecurity analysts",
				"Security administrators",
				"SOC analysts",
				"Network security professionals",
				"IT administrators",
				"Security engineers",
				"Entry-level cybersecurity professionals"
			],
			pathway: "A+ → Network+ → Security+ → CySA+ / PenTest+ → SecurityX"
		},
		{
			id: "linuxplus",
			name: "CompTIA Linux+",
			code: "XK0-006",
			category: "Linux / Infrastructure",
			level: "Intermediate",
			description: "Validates practical Linux administration and troubleshooting skills.",
			topics: [
				"Linux system management",
				"Linux security",
				"System configuration",
				"Networking",
				"Shell scripting",
				"Troubleshooting",
				"Containers",
				"Virtualization",
				"System maintenance",
				"Linux automation"
			],
			ideal: [
				"Linux administrators",
				"System administrators",
				"Cloud engineers",
				"DevOps professionals",
				"Infrastructure engineers",
				"Cybersecurity professionals"
			]
		},
		{
			id: "serverplus",
			name: "CompTIA Server+",
			code: "SK0-005",
			category: "Server Infrastructure",
			level: "Intermediate",
			description: "Focuses on server hardware, administration, security, troubleshooting, and disaster recovery.",
			topics: [
				"Server hardware",
				"Server installation",
				"Server management",
				"Virtualization",
				"Storage",
				"Networking",
				"Security",
				"Troubleshooting",
				"Disaster recovery",
				"Business continuity"
			]
		},
		{
			id: "cloudplus",
			name: "CompTIA Cloud+",
			code: "CV0-004",
			category: "Cloud Infrastructure",
			level: "Intermediate",
			description: "Focuses on deploying, managing, securing, and troubleshooting cloud infrastructure.",
			topics: [
				"Cloud architecture",
				"Cloud deployment",
				"Virtualization",
				"Cloud security",
				"Resource management",
				"High availability",
				"Disaster recovery",
				"Cloud troubleshooting",
				"Infrastructure operations"
			],
			recommended: [
				"Cloud administrators",
				"Cloud engineers",
				"Systems administrators",
				"Infrastructure engineers",
				"DevOps professionals",
				"IT professionals"
			]
		},
		{
			id: "cloudessentials",
			name: "CompTIA Cloud Essentials+",
			code: "CLO-002",
			category: "Cloud Fundamentals / Business",
			level: "Beginner",
			description: "Focuses on cloud concepts from both technical and business perspectives.",
			topics: [
				"Cloud technologies",
				"Cloud concepts",
				"Cloud services",
				"Business principles",
				"Risk management",
				"Governance",
				"Cloud security",
				"Migration",
				"Cost considerations"
			]
		},
		{
			id: "dataplus",
			name: "CompTIA Data+",
			code: "DA0-001",
			category: "Data Analytics",
			level: "Intermediate",
			description: "Validates foundational data analytics skills.",
			topics: [
				"Data concepts",
				"Data mining",
				"Data analysis",
				"Data visualization",
				"Statistical concepts",
				"Data quality",
				"Data governance",
				"Reporting",
				"Business decision-making"
			],
			ideal: [
				"Data analysts",
				"Business analysts",
				"Reporting professionals",
				"Data professionals",
				"IT professionals working with business data"
			]
		},
		{
			id: "projectplus",
			name: "CompTIA Project+",
			code: "PK0-005",
			category: "Project Management",
			level: "Intermediate",
			description: "Designed for IT and technology professionals who need project-management knowledge.",
			topics: [
				"Project fundamentals",
				"Project lifecycle",
				"Planning",
				"Project execution",
				"Risk management",
				"Communication",
				"Change management",
				"Documentation",
				"Project closure",
				"Project governance"
			],
			recommended: [
				"IT project coordinators",
				"Project managers",
				"IT professionals",
				"Team leaders",
				"Business professionals managing technical projects"
			]
		},
		{
			id: "cysaplus",
			name: "CompTIA CySA+",
			code: "CS0-003",
			category: "Cybersecurity Analytics",
			level: "Advanced",
			description: "Cybersecurity Analyst – focuses on security analytics, threat detection, vulnerability management, and incident response.",
			topics: [
				"Security operations",
				"Threat detection",
				"Vulnerability management",
				"Security analytics",
				"Incident response",
				"Threat intelligence",
				"Security monitoring",
				"Reporting",
				"Risk management"
			],
			careers: [
				"SOC Analyst",
				"Cybersecurity Analyst",
				"Security Operations Analyst",
				"Threat Analyst",
				"Vulnerability Analyst",
				"Security Engineer"
			]
		},
		{
			id: "pentestplus",
			name: "CompTIA PenTest+",
			code: "PT0-003",
			category: "Penetration Testing / Cybersecurity",
			level: "Advanced",
			description: "Focuses on penetration testing and vulnerability assessment.",
			topics: [
				"Planning penetration tests",
				"Reconnaissance",
				"Vulnerability scanning",
				"Exploitation",
				"Web application testing",
				"Network attacks",
				"Cloud testing",
				"Wireless testing",
				"Reporting",
				"Remediation",
				"Communication"
			],
			recommended: [
				"Penetration testers",
				"Security analysts",
				"Vulnerability analysts",
				"Security consultants",
				"Ethical hackers",
				"Cybersecurity professionals"
			]
		},
		{
			id: "securityx",
			name: "CompTIA SecurityX",
			code: "CAS-005",
			category: "Advanced Cybersecurity",
			level: "Advanced",
			description: "CompTIA's advanced cybersecurity certification – the current successor to the CASP+ branding. Intended for experienced cybersecurity professionals working with enterprise security architecture and advanced security operations.",
			topics: [
				"Security architecture",
				"Enterprise security",
				"Security engineering",
				"Risk management",
				"Governance",
				"Security operations",
				"Incident response",
				"Cryptography",
				"Compliance",
				"Advanced security technologies"
			],
			recommended: [
				"Senior security engineers",
				"Security architects",
				"Cybersecurity managers",
				"Enterprise security professionals",
				"Senior security analysts"
			]
		},
		{
			id: "cloudnetx",
			name: "CompTIA CloudNetX",
			code: "CNX-001",
			category: "Cloud + Networking",
			level: "Advanced",
			description: "Focuses on the convergence of networking and cloud infrastructure.",
			topics: [
				"Cloud networking",
				"Network architecture",
				"Hybrid infrastructure",
				"Cloud connectivity",
				"Network security",
				"Infrastructure design",
				"Automation",
				"Troubleshooting",
				"Cloud operations"
			]
		},
		{
			id: "secaiplus",
			name: "CompTIA SecAI+",
			code: "SAI-001",
			category: "AI + Cybersecurity",
			level: "Advanced",
			description: "Addresses the growing intersection between artificial intelligence and cybersecurity.",
			topics: [
				"AI security",
				"AI risk",
				"Cybersecurity applications of AI",
				"Secure AI implementation",
				"AI governance",
				"Threat detection",
				"Responsible AI",
				"Security operations"
			],
			recommended: [
				"Cybersecurity professionals",
				"Security engineers",
				"AI security professionals",
				"Security analysts",
				"Technology leaders",
				"IT professionals working with AI"
			],
			note: "Verify current availability before listing SecAI+ as an immediately purchasable exam voucher."
		}
	];
	return /* @__PURE__ */ jsx("div", {
		className: "min-h-screen bg-white text-gray-800 font-sans",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-6xl mx-auto px-4 py-8",
			children: [
				/* @__PURE__ */ jsxs("header", {
					className: "border-b border-gray-200 pb-6 mb-8",
					children: [
						/* @__PURE__ */ jsx("h1", {
							className: "text-3xl md:text-4xl font-bold text-gray-900",
							children: "CompTIA Exam Vouchers: Complete Guide to Discounted CompTIA Certification Vouchers"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-gray-600 mt-2 text-lg",
							children: "Complete Exam List, Codes, Prices & Certification Guide"
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "text-sm text-gray-500 mt-3",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "font-medium",
									children: "Looking for genuine CompTIA certification exam vouchers at competitive prices?"
								}),
								" ",
								"Techcyfy helps IT professionals, cybersecurity specialists, network engineers, cloud professionals, data analysts, and technology students find the right CompTIA certification exam voucher for their career goals."
							]
						})
					]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "mb-10",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-semibold text-gray-900 mb-4",
						children: "Complete CompTIA Exam Code List"
					}), /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 bg-gray-50 p-4 rounded-lg border border-gray-200",
						children: certifications.map((cert) => /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2 text-sm",
							children: [/* @__PURE__ */ jsxs("span", {
								className: "font-medium text-gray-700",
								children: [cert.name, ":"]
							}), /* @__PURE__ */ jsx("span", {
								className: "text-blue-600 font-mono",
								children: cert.code
							})]
						}, cert.id))
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "mb-10",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-semibold text-gray-900 mb-4",
						children: "Which CompTIA Certification Should You Choose?"
					}), /* @__PURE__ */ jsx("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ jsxs("table", {
							className: "w-full text-sm border-collapse",
							children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", {
								className: "bg-gray-100",
								children: [/* @__PURE__ */ jsx("th", {
									className: "border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700",
									children: "Your Career Goal"
								}), /* @__PURE__ */ jsx("th", {
									className: "border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700",
									children: "Recommended Certification"
								})]
							}) }), /* @__PURE__ */ jsx("tbody", { children: [
								{
									goal: "New to IT",
									cert: "Tech+"
								},
								{
									goal: "IT support",
									cert: "A+"
								},
								{
									goal: "Networking",
									cert: "Network+"
								},
								{
									goal: "Cybersecurity",
									cert: "Security+"
								},
								{
									goal: "Linux administration",
									cert: "Linux+"
								},
								{
									goal: "Server administration",
									cert: "Server+"
								},
								{
									goal: "Cloud infrastructure",
									cert: "Cloud+"
								},
								{
									goal: "Cloud fundamentals",
									cert: "Cloud Essentials+"
								},
								{
									goal: "Data analytics",
									cert: "Data+"
								},
								{
									goal: "IT project management",
									cert: "Project+"
								},
								{
									goal: "Security analytics",
									cert: "CySA+"
								},
								{
									goal: "Penetration testing",
									cert: "PenTest+"
								},
								{
									goal: "Advanced cybersecurity",
									cert: "SecurityX"
								},
								{
									goal: "Cloud + networking",
									cert: "CloudNetX"
								},
								{
									goal: "AI + cybersecurity",
									cert: "SecAI+"
								}
							].map((item, idx) => /* @__PURE__ */ jsxs("tr", {
								className: idx % 2 === 0 ? "bg-white" : "bg-gray-50",
								children: [/* @__PURE__ */ jsx("td", {
									className: "border border-gray-300 px-4 py-2",
									children: item.goal
								}), /* @__PURE__ */ jsx("td", {
									className: "border border-gray-300 px-4 py-2 font-medium text-blue-700",
									children: item.cert
								})]
							}, idx)) })]
						})
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "mb-10",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-semibold text-gray-900 mb-4",
						children: "All CompTIA Certifications"
					}), /* @__PURE__ */ jsx("div", {
						className: "space-y-4",
						children: certifications.map((cert) => /* @__PURE__ */ jsxs("div", {
							className: "border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-white",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap items-start justify-between cursor-pointer",
								onClick: () => setActiveCert(activeCert === cert.id ? null : cert.id),
								children: [/* @__PURE__ */ jsxs("div", { children: [
									/* @__PURE__ */ jsx("h3", {
										className: "text-xl font-bold text-gray-900",
										children: cert.name
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-sm text-blue-600 font-mono",
										children: cert.code
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex flex-wrap gap-2 mt-1",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-xs bg-gray-100 px-2 py-0.5 rounded-full text-gray-700",
											children: cert.category
										}), /* @__PURE__ */ jsx("span", {
											className: "text-xs bg-gray-100 px-2 py-0.5 rounded-full text-gray-700",
											children: cert.level
										})]
									})
								] }), /* @__PURE__ */ jsx("span", {
									className: "text-gray-400 text-sm mt-1",
									children: activeCert === cert.id ? "▼" : "▶"
								})]
							}), activeCert === cert.id && /* @__PURE__ */ jsxs("div", {
								className: "mt-4 pt-4 border-t border-gray-100 space-y-3",
								children: [
									/* @__PURE__ */ jsx("p", {
										className: "text-gray-700",
										children: cert.description
									}),
									cert.topics && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: "font-semibold text-gray-800 text-sm",
										children: "Key Topics:"
									}), /* @__PURE__ */ jsx("ul", {
										className: "list-disc list-inside text-sm text-gray-600 grid grid-cols-1 sm:grid-cols-2 gap-x-4",
										children: cert.topics.map((topic, i) => /* @__PURE__ */ jsx("li", { children: topic }, i))
									})] }),
									cert.recommended && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: "font-semibold text-gray-800 text-sm",
										children: "Recommended for:"
									}), /* @__PURE__ */ jsx("ul", {
										className: "list-disc list-inside text-sm text-gray-600 grid grid-cols-1 sm:grid-cols-2 gap-x-4",
										children: cert.recommended.map((item, i) => /* @__PURE__ */ jsx("li", { children: item }, i))
									})] }),
									cert.ideal && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: "font-semibold text-gray-800 text-sm",
										children: "Ideal for:"
									}), /* @__PURE__ */ jsx("ul", {
										className: "list-disc list-inside text-sm text-gray-600 grid grid-cols-1 sm:grid-cols-2 gap-x-4",
										children: cert.ideal.map((item, i) => /* @__PURE__ */ jsx("li", { children: item }, i))
									})] }),
									cert.careers && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: "font-semibold text-gray-800 text-sm",
										children: "Career Opportunities:"
									}), /* @__PURE__ */ jsx("ul", {
										className: "list-disc list-inside text-sm text-gray-600 grid grid-cols-1 sm:grid-cols-2 gap-x-4",
										children: cert.careers.map((item, i) => /* @__PURE__ */ jsx("li", { children: item }, i))
									})] }),
									cert.pathway && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: "font-semibold text-gray-800 text-sm",
										children: "Recommended Pathway:"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-sm text-gray-600 font-mono bg-gray-50 px-3 py-1 rounded inline-block",
										children: cert.pathway
									})] }),
									cert.core1 && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: "font-semibold text-gray-800 text-sm",
										children: "Core 1 (220-1201):"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-sm text-gray-600",
										children: cert.core1
									})] }),
									cert.core2 && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: "font-semibold text-gray-800 text-sm",
										children: "Core 2 (220-1202):"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-sm text-gray-600",
										children: cert.core2
									})] }),
									cert.note && /* @__PURE__ */ jsxs("p", {
										className: "text-sm text-amber-600 bg-amber-50 px-3 py-1 rounded border border-amber-200",
										children: ["⚠️ ", cert.note]
									})
								]
							})]
						}, cert.id))
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "mb-10 bg-gray-50 p-6 rounded-lg border border-gray-200",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-semibold text-gray-900 mb-3",
							children: "CompTIA Exam Voucher Guide"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-gray-700 mb-3",
							children: "A CompTIA exam voucher is a payment instrument that can be used toward an eligible CompTIA certification examination under the applicable voucher terms."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm",
							children: [/* @__PURE__ */ jsxs("ul", {
								className: "list-disc list-inside text-gray-600 space-y-1",
								children: [
									/* @__PURE__ */ jsx("li", { children: "Exact certification name" }),
									/* @__PURE__ */ jsx("li", { children: "Exact exam code" }),
									/* @__PURE__ */ jsx("li", { children: "Current exam version" }),
									/* @__PURE__ */ jsx("li", { children: "Voucher expiration date" }),
									/* @__PURE__ */ jsx("li", { children: "Exam delivery options" })
								]
							}), /* @__PURE__ */ jsxs("ul", {
								className: "list-disc list-inside text-gray-600 space-y-1",
								children: [
									/* @__PURE__ */ jsx("li", { children: "Testing-center availability" }),
									/* @__PURE__ */ jsx("li", { children: "Online-proctoring availability" }),
									/* @__PURE__ */ jsx("li", { children: "Voucher redemption conditions" }),
									/* @__PURE__ */ jsx("li", { children: "Country or region restrictions" }),
									/* @__PURE__ */ jsx("li", { children: "Current CompTIA pricing" })
								]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-4 p-3 bg-blue-50 border border-blue-200 rounded text-sm text-blue-800",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "font-semibold",
									children: "Example:"
								}),
								" If you want to take",
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "font-medium",
									children: "CompTIA Security+"
								}),
								", make sure you are purchasing a voucher for",
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "font-mono",
									children: "SY0-701"
								}),
								" rather than an older Security+ examination version."
							]
						})
					]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "mb-10 border border-gray-200 rounded-lg p-6 bg-white",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-semibold text-gray-900 mb-3",
						children: "Why Buy CompTIA Exam Vouchers from Techcyfy?"
					}), /* @__PURE__ */ jsxs("ul", {
						className: "grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700",
						children: [
							/* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-2",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-green-600 font-bold",
									children: "✓"
								}), " Competitive Pricing"]
							}),
							/* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-2",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-green-600 font-bold",
									children: "✓"
								}), " Multiple Certification Options"]
							}),
							/* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-2",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-green-600 font-bold",
									children: "✓"
								}), " Easy Ordering Process"]
							}),
							/* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-2",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-green-600 font-bold",
									children: "✓"
								}), " Professional Support"]
							}),
							/* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-2",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-green-600 font-bold",
									children: "✓"
								}), " Current Exam Information"]
							})
						]
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "mb-10 bg-gray-50 p-6 rounded-lg border border-gray-200",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-semibold text-gray-900 mb-3",
						children: "How to Buy a CompTIA Exam Voucher from Techcyfy"
					}), /* @__PURE__ */ jsxs("ol", {
						className: "list-decimal list-inside space-y-2 text-gray-700",
						children: [
							/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
								className: "font-medium",
								children: "Select Your Certification"
							}), " – Choose your CompTIA certification (e.g., A+, Network+, Security+, CySA+, PenTest+, SecurityX)."] }),
							/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
								className: "font-medium",
								children: "Confirm the Exam Code"
							}), " – Verify the current exam code (e.g., Security+ — SY0-701)."] }),
							/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
								className: "font-medium",
								children: "Contact Techcyfy"
							}), " – Send the certification name and exam code to Techcyfy."] }),
							/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
								className: "font-medium",
								children: "Confirm Voucher Details"
							}), " – Check price, validity, exam eligibility, redemption terms, and delivery method."] }),
							/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
								className: "font-medium",
								children: "Schedule Your Exam"
							}), " – Redeem the eligible voucher according to the applicable CompTIA examination process and schedule your test."] })
						]
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "mb-10",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-semibold text-gray-900 mb-4",
						children: "Frequently Asked Questions"
					}), /* @__PURE__ */ jsx("div", {
						className: "space-y-3",
						children: [
							{
								q: "What is a CompTIA exam voucher?",
								a: "A CompTIA exam voucher is a payment instrument that can be used toward an eligible CompTIA certification examination under the applicable voucher terms."
							},
							{
								q: "What is the CompTIA A+ exam code?",
								a: "The current A+ certification uses two exams: 220-1201 and 220-1202."
							},
							{
								q: "What is the CompTIA Network+ exam code?",
								a: "The current Network+ examination is N10-009."
							},
							{
								q: "What is the CompTIA Security+ exam code?",
								a: "The current Security+ examination is SY0-701."
							},
							{
								q: "Which CompTIA certification is best for beginners?",
								a: "CompTIA Tech+ is a suitable starting point for candidates who are completely new to IT. Candidates seeking an IT-support career can then consider A+."
							},
							{
								q: "Which CompTIA certification is best for cybersecurity?",
								a: "For foundational cybersecurity, Security+ is a strong starting point. Candidates with more experience can progress toward CySA+, PenTest+, and SecurityX."
							},
							{
								q: "Can CompTIA exams be taken online?",
								a: "CompTIA offers online testing options for eligible examinations, subject to current testing policies and availability."
							},
							{
								q: "How long are CompTIA certifications valid?",
								a: "Many CompTIA professional certifications operate under a three-year renewal cycle, while some certifications have different renewal rules."
							}
						].map((faq, idx) => /* @__PURE__ */ jsxs("div", {
							className: "border border-gray-200 rounded-lg p-4 bg-white",
							children: [/* @__PURE__ */ jsx("h4", {
								className: "font-semibold text-gray-800",
								children: faq.q
							}), /* @__PURE__ */ jsx("p", {
								className: "text-gray-600 text-sm mt-1",
								children: faq.a
							})]
						}, idx))
					})]
				}),
				/* @__PURE__ */ jsxs("footer", {
					className: "border-t border-gray-200 pt-6 text-center",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "text-xl font-bold text-gray-900",
							children: "Ready to Take Your CompTIA Certification Exam?"
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "text-gray-600 mt-2 max-w-2xl mx-auto",
							children: [
								"Whether you're starting your IT career with ",
								/* @__PURE__ */ jsx("strong", { children: "Tech+ or A+" }),
								", building networking skills with",
								" ",
								/* @__PURE__ */ jsx("strong", { children: "Network+" }),
								", entering cybersecurity with ",
								/* @__PURE__ */ jsx("strong", { children: "Security+" }),
								", advancing with",
								" ",
								/* @__PURE__ */ jsx("strong", { children: "CySA+" }),
								", specializing with ",
								/* @__PURE__ */ jsx("strong", { children: "PenTest+" }),
								", or pursuing",
								" ",
								/* @__PURE__ */ jsx("strong", { children: "SecurityX" }),
								", Techcyfy can help you explore available CompTIA exam voucher options."
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-gray-700 mt-4 font-medium",
							children: "Choose your CompTIA certification, confirm the current exam code, and contact Techcyfy for the latest voucher availability and pricing."
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "text-sm text-gray-500 mt-6",
							children: [
								"Techcyfy — IT Certification Exam Vouchers Made Simple",
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("span", {
									className: "italic",
									children: "Explore. Choose. Certify."
								})
							]
						})
					]
				})
			]
		})
	});
};
//#endregion
//#region src/Blog/FortinetVouchers.jsx
var FortinetVouchers = () => {
	const [activeCert, setActiveCert] = useState(null);
	return /* @__PURE__ */ jsx("div", {
		className: "min-h-screen bg-white text-gray-800 font-sans",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-6xl mx-auto px-4 py-8",
			children: [
				/* @__PURE__ */ jsxs("header", {
					className: "border-b border-gray-200 pb-6 mb-8",
					children: [
						/* @__PURE__ */ jsx("h1", {
							className: "text-3xl md:text-4xl font-bold text-gray-900",
							children: "Fortinet Exam Vouchers: Complete Guide to Discounted Fortinet Certification Vouchers"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-gray-600 mt-2 text-lg",
							children: "Complete NSE Exam List, Codes & Discounted Vouchers"
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "text-sm text-gray-500 mt-3",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "font-medium",
									children: "Looking for Fortinet certification exam vouchers at competitive prices?"
								}),
								" ",
								"Techcyfy provides information and voucher options for Fortinet NSE certification exams, including NSE 4, NSE 5, NSE 6, NSE 7, NSE 8, and Fortinet industry certifications."
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800",
							children: [/* @__PURE__ */ jsx("span", {
								className: "font-semibold",
								children: "⚠️ Important:"
							}), " Fortinet certification names, exam versions, product versions, requirements, and availability can change. Always verify the latest Fortinet Training Institute exam information before purchasing or scheduling an examination."]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-2 p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-800",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "font-semibold",
									children: "📢 Fortinet Program Update:"
								}),
								" The Fortinet certification program underwent a major update on ",
								/* @__PURE__ */ jsx("strong", { children: "July 15, 2026" }),
								", expanding from five levels to eight levels with new tracks, comprehensive NSE 7 exams, industry certifications, and updated recertification rules."
							]
						})
					]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "mb-10",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-semibold text-gray-900 mb-4",
							children: "Fortinet NSE Certification Levels"
						}),
						/* @__PURE__ */ jsx("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 bg-gray-50 p-4 rounded-lg border border-gray-200",
							children: [
								"NSE 1",
								"NSE 2",
								"NSE 3",
								"NSE 4",
								"NSE 5",
								"NSE 6",
								"NSE 7",
								"NSE 8",
								"Industry"
							].map((level) => /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2 text-sm",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "font-bold text-blue-600",
										children: level
									}),
									/* @__PURE__ */ jsx("span", {
										className: "text-gray-400",
										children: "—"
									}),
									/* @__PURE__ */ jsxs("span", {
										className: "text-gray-700",
										children: [
											level === "NSE 1" && "Cybersecurity Fundamentals",
											level === "NSE 2" && "NGFW Fundamentals",
											level === "NSE 3" && "FortiGate Operation",
											level === "NSE 4" && "FortiOS Administration",
											level === "NSE 5" && "Specialized Products",
											level === "NSE 6" && "Advanced Administration",
											level === "NSE 7" && "Advanced Architecture",
											level === "NSE 8" && "Expert Cybersecurity",
											level === "Industry" && "Specialized Domains"
										]
									})
								]
							}, level))
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "text-xs text-gray-500 mt-2",
							children: [
								"Note: NSE 1–3 are foundational assessments. NSE 4–7 use voucher SKU ",
								/* @__PURE__ */ jsx("strong", { children: "NSE-EX-FTE2" }),
								". NSE 8 uses ",
								/* @__PURE__ */ jsx("strong", { children: "NSE-EX-FTE4" }),
								" (written) and ",
								/* @__PURE__ */ jsx("strong", { children: "NSE-EX-FTE8" }),
								" (practical)."
							]
						})
					]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "mb-10",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-semibold text-gray-900 mb-4",
						children: "Which Fortinet Certification Should You Choose?"
					}), /* @__PURE__ */ jsx("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ jsxs("table", {
							className: "w-full text-sm border-collapse",
							children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", {
								className: "bg-gray-100",
								children: [/* @__PURE__ */ jsx("th", {
									className: "border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700",
									children: "Career Goal"
								}), /* @__PURE__ */ jsx("th", {
									className: "border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700",
									children: "Recommended Fortinet Certification"
								})]
							}) }), /* @__PURE__ */ jsx("tbody", { children: [
								{
									goal: "Cybersecurity beginner",
									cert: "NSE 1 / NSE 2"
								},
								{
									goal: "FortiGate fundamentals",
									cert: "NSE 3"
								},
								{
									goal: "FortiGate administration",
									cert: "NSE 4 FortiOS"
								},
								{
									goal: "Secure networking",
									cert: "NSE 5 Secure Networking"
								},
								{
									goal: "SASE",
									cert: "NSE 5 SASE"
								},
								{
									goal: "Cloud security",
									cert: "NSE 5 Cloud Security"
								},
								{
									goal: "Security operations",
									cert: "NSE 5 Security Operations"
								},
								{
									goal: "Advanced Fortinet administration",
									cert: "NSE 6"
								},
								{
									goal: "Cloud security architecture",
									cert: "NSE 7 Public Cloud Security"
								},
								{
									goal: "SASE architecture",
									cert: "NSE 7 SASE"
								},
								{
									goal: "Network security architecture",
									cert: "NSE 7 Secure Networking"
								},
								{
									goal: "SOC architecture",
									cert: "NSE 7 Security Operations"
								},
								{
									goal: "Expert cybersecurity",
									cert: "NSE 8 Cybersecurity Expert"
								},
								{
									goal: "OT cybersecurity",
									cert: "OT Security Industry Certification"
								}
							].map((item, idx) => /* @__PURE__ */ jsxs("tr", {
								className: idx % 2 === 0 ? "bg-white" : "bg-gray-50",
								children: [/* @__PURE__ */ jsx("td", {
									className: "border border-gray-300 px-4 py-2",
									children: item.goal
								}), /* @__PURE__ */ jsx("td", {
									className: "border border-gray-300 px-4 py-2 font-medium text-blue-700",
									children: item.cert
								})]
							}, idx)) })]
						})
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "mb-8 bg-gray-50 p-4 rounded-lg border border-gray-200",
					children: [
						/* @__PURE__ */ jsx("h3", {
							className: "font-semibold text-gray-800",
							children: "Fortinet Exam Voucher Prices"
						}),
						/* @__PURE__ */ jsxs("ul", {
							className: "text-sm text-gray-600 mt-2 space-y-1",
							children: [
								/* @__PURE__ */ jsxs("li", { children: [
									"• ",
									/* @__PURE__ */ jsx("strong", { children: "NSE 4–6 exams:" }),
									" USD $200* (until November 2, 2026)"
								] }),
								/* @__PURE__ */ jsxs("li", { children: [
									"• ",
									/* @__PURE__ */ jsx("strong", { children: "NSE 7 exams:" }),
									" USD $400* (beginning November 2, 2026; $200* until then)"
								] }),
								/* @__PURE__ */ jsxs("li", { children: [
									"• ",
									/* @__PURE__ */ jsx("strong", { children: "NSE 8 Practical Exam:" }),
									" USD $800*"
								] }),
								/* @__PURE__ */ jsxs("li", { children: [
									"• ",
									/* @__PURE__ */ jsx("strong", { children: "NSE 8 Recertification Exam:" }),
									" USD $400*"
								] })
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-xs text-gray-500 mt-1",
							children: "*Prices subject to Fortinet policies and applicable taxes. Verify latest price before purchase."
						})
					]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "mb-10",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-semibold text-gray-900 mb-4",
						children: "All Fortinet Certifications"
					}), /* @__PURE__ */ jsx("div", {
						className: "space-y-4",
						children: [
							{
								id: "nse1",
								name: "NSE 1 in Cybersecurity",
								level: "NSE 1",
								code: "NSE 1",
								voucherSku: "N/A",
								description: "The entry point into the Fortinet cybersecurity certification pathway. Designed to provide foundational knowledge for people beginning their cybersecurity journey.",
								topics: [
									"Cybersecurity fundamentals",
									"Common cyber threats",
									"Security concepts",
									"Digital security",
									"Network security awareness",
									"Cybersecurity careers",
									"Basic security practices"
								],
								suitable: [
									"Students",
									"Beginners",
									"IT professionals",
									"Career changers",
									"Entry-level cybersecurity candidates"
								],
								format: "Online course assessment"
							},
							{
								id: "nse2",
								name: "NSE 2 in Cybersecurity",
								level: "NSE 2",
								code: "NSE 2",
								voucherSku: "N/A",
								description: "Introduces candidates to next-generation firewall concepts and foundational Fortinet security technologies.",
								topics: [
									"Next-generation firewalls",
									"Network security",
									"Security policies",
									"Firewall concepts",
									"Security technologies",
									"Fortinet security solutions"
								],
								format: "Online course assessment"
							},
							{
								id: "nse3",
								name: "NSE 3 in Cybersecurity / FortiGate Operator",
								level: "NSE 3",
								code: "NSE 3",
								voucherSku: "N/A",
								description: "Focuses on fundamental FortiGate operation. Validates high-level FortiGate operation, including fundamental configuration and monitoring tasks.",
								suitable: [
									"Network administrators",
									"Security administrators",
									"Junior network engineers",
									"IT support professionals",
									"FortiGate beginners"
								],
								format: "Online assessment"
							},
							{
								id: "nse4",
								name: "NSE 4 FortiOS / FortiOS Administrator",
								level: "NSE 4",
								code: "NSE 4",
								voucherSku: "NSE-EX-FTE2",
								fee: "$200",
								description: "One of the most important Fortinet certifications for professionals who administer FortiGate and FortiOS environments.",
								topics: [
									"FortiGate administration",
									"FortiOS configuration",
									"Firewall policies",
									"Network security",
									"VPN",
									"Routing",
									"Security profiles",
									"Authentication",
									"High availability",
									"Troubleshooting",
									"Monitoring"
								],
								suitable: [
									"Network security administrators",
									"Network engineers",
									"Security engineers",
									"FortiGate administrators",
									"Firewall administrators",
									"Cybersecurity professionals"
								],
								note: "Prerequisite for several higher-level NSE 5 certification tracks."
							},
							{
								id: "nse5-fortiswitch",
								name: "NSE 5 - FortiSwitch Administrator",
								level: "NSE 5",
								code: "NSE 5",
								voucherSku: "NSE-EX-FTE2",
								fee: "$200",
								track: "Secure Networking",
								description: "Focuses on deploying, configuring, managing, and troubleshooting FortiSwitch environments.",
								topics: [
									"FortiSwitch deployment",
									"FortiLink",
									"VLANs",
									"Switching",
									"Network security",
									"Switch management",
									"Troubleshooting"
								]
							},
							{
								id: "nse5-sdwan",
								name: "NSE 5 - SD-WAN Core Administrator",
								level: "NSE 5",
								code: "NSE 5",
								voucherSku: "NSE-EX-FTE2",
								fee: "$200",
								track: "Secure Networking",
								description: "Focuses on SD-WAN administration and secure network connectivity.",
								topics: [
									"SD-WAN",
									"WAN optimization",
									"SD-WAN policies",
									"Network performance",
									"Traffic steering",
									"Monitoring",
									"Troubleshooting"
								]
							},
							{
								id: "nse5-wireless",
								name: "NSE 5 - Secure Wireless LAN Administrator",
								level: "NSE 5",
								code: "NSE 5",
								voucherSku: "NSE-EX-FTE2",
								fee: "$200",
								track: "Secure Networking",
								description: "Validates skills related to Fortinet secure wireless networking.",
								note: "Secure Wireless LAN 7.6 Administrator released May 2026; previous 7.4 version last delivery August 31, 2026."
							},
							{
								id: "nse5-sase",
								name: "NSE 5 - FortiSASE and SD-WAN 26 Core Administrator",
								level: "NSE 5",
								code: "NSE 5",
								voucherSku: "NSE-EX-FTE2",
								fee: "$200",
								track: "SASE",
								description: "The current SASE-focused NSE 5 exam released in July 2026. Covers FortiSASE, secure internet access, SaaS security, SD-WAN, endpoint security, security policies, cloud-delivered security, and remote-user security.",
								topics: [
									"FortiSASE",
									"Secure internet access",
									"SaaS security",
									"SD-WAN",
									"Endpoint security",
									"Security policies",
									"Cloud-delivered security",
									"Remote-user security"
								]
							},
							{
								id: "nse5-fortiweb",
								name: "NSE 5 - FortiWeb Administrator",
								level: "NSE 5",
								code: "NSE 5",
								voucherSku: "NSE-EX-FTE2",
								fee: "$200",
								track: "Cloud Security",
								description: "Focuses on web application security and application-layer protection.",
								topics: [
									"Web application firewall",
									"Application security",
									"API security",
									"Bot protection",
									"SSL/TLS",
									"Web application monitoring",
									"Threat protection"
								]
							},
							{
								id: "nse5-fortiappsec",
								name: "NSE 5 - FortiAppSec Administrator",
								level: "NSE 5",
								code: "NSE 5",
								voucherSku: "NSE-EX-FTE2",
								fee: "$200",
								track: "Cloud Security",
								description: "Focuses on application security technologies and cloud-based application protection. Released August 27, 2026."
							},
							{
								id: "nse5-fortiadc",
								name: "NSE 5 - FortiADC Administrator",
								level: "NSE 5",
								code: "NSE 5",
								voucherSku: "NSE-EX-FTE2",
								fee: "$200",
								track: "Cloud Security",
								description: "Focuses on application delivery controller technologies and related application availability and performance capabilities. Availability planned for Q3 2026."
							},
							{
								id: "nse5-fortianalyzer",
								name: "NSE 5 - FortiAnalyzer Analyst",
								level: "NSE 5",
								code: "NSE 5",
								voucherSku: "NSE-EX-FTE2",
								fee: "$200",
								track: "Security Operations",
								description: "Focuses on centralized logging, event analysis, security monitoring, reporting, and security operations.",
								topics: [
									"FortiAnalyzer",
									"Log analysis",
									"Event management",
									"Security incidents",
									"Reports",
									"Threat analysis",
									"Security operations"
								]
							},
							{
								id: "nse6-fortimanager",
								name: "NSE 6 - FortiManager Administrator",
								level: "NSE 6",
								code: "NSE 6",
								voucherSku: "NSE-EX-FTE2",
								fee: "$200",
								track: "Secure Networking",
								description: "Focuses on centralized FortiGate management, configuration management, policy management, device management, templates, SD-WAN management, and automation. Released July 15, 2026.",
								topics: [
									"Centralized FortiGate management",
									"Configuration management",
									"Policy management",
									"Device management",
									"Templates",
									"SD-WAN management",
									"Automation"
								]
							},
							{
								id: "nse6-fortinac",
								name: "NSE 6 - FortiNAC Administrator",
								level: "NSE 6",
								code: "NSE 6",
								voucherSku: "NSE-EX-FTE2",
								fee: "$200",
								track: "Secure Networking",
								description: "Focuses on network access control, device visibility, endpoint security, network segmentation, authentication, and access policies. Updated July 2026."
							},
							{
								id: "nse6-fortivoice",
								name: "NSE 6 - FortiVoice Administrator",
								level: "NSE 6",
								code: "NSE 6",
								voucherSku: "NSE-EX-FTE2",
								fee: "$200",
								track: "Secure Networking",
								description: "Focuses on FortiVoice administration. Availability planned for Q3 2026."
							},
							{
								id: "nse6-forticlient",
								name: "NSE 6 - FortiClient EMS Administrator",
								level: "NSE 6",
								code: "NSE 6",
								voucherSku: "NSE-EX-FTE2",
								fee: "$200",
								track: "SASE",
								description: "Focuses on endpoint management, FortiClient EMS, endpoint security, policy management, device management, and security posture."
							},
							{
								id: "nse6-fortidlp",
								name: "NSE 6 - FortiDLP Administrator",
								level: "NSE 6",
								code: "NSE 6",
								voucherSku: "NSE-EX-FTE2",
								fee: "$200",
								track: "SASE",
								description: "Focuses on data loss prevention and protection of sensitive organizational data. Released May 2026."
							},
							{
								id: "nse6-fortiedr",
								name: "NSE 6 - FortiEDR Administrator",
								level: "NSE 6",
								code: "NSE 6",
								voucherSku: "NSE-EX-FTE2",
								fee: "$200",
								track: "SASE",
								description: "Focuses on endpoint detection and response capabilities."
							},
							{
								id: "nse6-forticnapp",
								name: "NSE 6 - FortiCNAPP Analyst",
								level: "NSE 6",
								code: "NSE 6",
								voucherSku: "NSE-EX-FTE2",
								fee: "$200",
								track: "Cloud Security",
								description: "Focuses on cloud-native application protection and cloud security posture. Released May 28, 2026."
							},
							{
								id: "nse6-fortiddos",
								name: "NSE 6 - FortiDDoS Administrator",
								level: "NSE 6",
								code: "NSE 6",
								voucherSku: "NSE-EX-FTE2",
								fee: "$200",
								track: "Cloud Security",
								description: "Focuses on DDoS protection, network availability, traffic analysis, attack mitigation, and security monitoring. Updated August 14, 2026."
							},
							{
								id: "nse6-fortimail",
								name: "NSE 6 - FortiMail Administrator",
								level: "NSE 6",
								code: "NSE 6",
								voucherSku: "NSE-EX-FTE2",
								fee: "$200",
								track: "Cloud Security",
								description: "Focuses on email security, anti-spam, malware protection, email filtering, security policies, and email threat detection."
							},
							{
								id: "nse6-fortindr",
								name: "NSE 6 - FortiNDR Cloud Analyst",
								level: "NSE 6",
								code: "NSE 6",
								voucherSku: "NSE-EX-FTE2",
								fee: "$200",
								track: "Security Operations",
								description: "Focuses on network detection and response, threat detection, network analytics, investigation, and security monitoring."
							},
							{
								id: "nse6-fortisoar",
								name: "NSE 6 - FortiSOAR Analyst",
								level: "NSE 6",
								code: "NSE 6",
								voucherSku: "NSE-EX-FTE2",
								fee: "$200",
								track: "Security Operations",
								description: "Focuses on security orchestration, automation, incident response, playbooks, security workflows, and SOC operations. Released August 8, 2026."
							},
							{
								id: "nse6-fortisiem",
								name: "NSE 6 - FortiSIEM Analyst",
								level: "NSE 6",
								code: "NSE 6",
								voucherSku: "NSE-EX-FTE2",
								fee: "$200",
								track: "Security Operations",
								description: "Focuses on SIEM, security monitoring, event analysis, incident detection, log management, and SOC operations. Released February 2026."
							},
							{
								id: "nse6-fortirecon",
								name: "NSE 6 - FortiRecon Analyst",
								level: "NSE 6",
								code: "NSE 6",
								voucherSku: "NSE-EX-FTE2",
								fee: "$200",
								track: "Security Operations",
								description: "Focuses on digital risk protection, external attack surface, threat intelligence, brand protection, and security monitoring."
							},
							{
								id: "nse7-secure-networking",
								name: "NSE 7 - Secure Networking 7.6 Architect",
								level: "NSE 7",
								code: "NSE 7",
								voucherSku: "NSE-EX-FTE2",
								fee: "$200 (until Nov 2, 2026) / $400 after",
								questions: "40–50 questions",
								duration: "60–70 minutes",
								description: "Evaluates advanced expertise in designing, administering, and supporting secure SD-WAN and enterprise security infrastructure using multiple FortiGate devices.",
								topics: [
									"Security Fabric",
									"SD-WAN",
									"FortiManager",
									"FortiAnalyzer",
									"Routing",
									"BGP",
									"OSPF",
									"IPsec VPN",
									"SSL inspection",
									"Security profiles",
									"Enterprise firewall",
									"Network troubleshooting"
								],
								note: "Remote OnVUE delivery will end September 21, 2026. After this date, NSE 7 exams available only at Pearson VUE-authorized testing centers."
							},
							{
								id: "nse7-sase",
								name: "NSE 7 - SASE 26 Architect",
								level: "NSE 7",
								code: "NSE 7",
								voucherSku: "NSE-EX-FTE2",
								fee: "$200 (until Nov 2, 2026) / $400 after",
								description: "Focuses on advanced SASE architecture and secure access.",
								topics: [
									"FortiSASE",
									"SD-WAN",
									"Secure internet access",
									"SaaS security",
									"Remote access",
									"Zero Trust",
									"Security policies",
									"SASE architecture",
									"Network security"
								]
							},
							{
								id: "nse7-public-cloud",
								name: "NSE 7 - Public Cloud Security 7.6.4 Architect",
								level: "NSE 7",
								code: "NSE 7",
								voucherSku: "NSE-EX-FTE2",
								fee: "$200 (until Nov 2, 2026) / $400 after",
								questions: "35–40 questions",
								duration: "75 minutes",
								description: "Validates advanced expertise in integrating Fortinet security solutions within public cloud environments.",
								topics: [
									"AWS",
									"Microsoft Azure",
									"FortiGate",
									"FortiWeb",
									"FortiCNAPP",
									"Terraform",
									"Ansible",
									"Azure Bicep",
									"AWS CloudFormation",
									"Cloud networking",
									"Cloud security monitoring"
								]
							},
							{
								id: "nse7-security-ops",
								name: "NSE 7 - Security Operations 7.6 Architect",
								level: "NSE 7",
								code: "NSE 7",
								voucherSku: "NSE-EX-FTE2",
								fee: "$200 (until Nov 2, 2026) / $400 after",
								questions: "35–40 questions",
								duration: "75 minutes",
								description: "Focuses on designing and operating a Fortinet SOC using FortiSIEM and FortiSOAR.",
								topics: [
									"SOC architecture",
									"Threat detection",
									"Incident analysis",
									"Threat hunting",
									"FortiSIEM",
									"FortiSOAR",
									"Security automation",
									"Playbooks",
									"Incident response",
									"Security operations"
								]
							},
							{
								id: "nse8-written",
								name: "NSE 8 Written Exam",
								level: "NSE 8",
								code: "NSE 8",
								voucherSku: "NSE-EX-FTE4",
								description: "The written component of Fortinet's highest technical certification level. Evaluates network security architecture, complex configuration, troubleshooting, Fortinet security technologies, and security design scenarios.",
								note: "Requires both written and practical components for full NSE 8 certification."
							},
							{
								id: "nse8-practical",
								name: "NSE 8 Practical Exam",
								level: "NSE 8",
								code: "NSE 8",
								voucherSku: "NSE-EX-FTE8",
								fee: "$800",
								description: "The hands-on component of Fortinet's highest technical certification level. Involves a complex network topology and multiple Fortinet products.",
								note: "Requires both written and practical components for full NSE 8 certification."
							},
							{
								id: "ot-security",
								name: "OT Security Architect",
								level: "Industry",
								code: "Industry",
								voucherSku: "NSE-EX-FTE2",
								fee: "$200 (until Nov 2, 2026) / $400 after",
								description: "Focuses on cybersecurity for operational technology environments.",
								topics: [
									"OT security",
									"Industrial networks",
									"Critical infrastructure",
									"Network segmentation",
									"Industrial cybersecurity",
									"Threat detection",
									"Security architecture"
								]
							},
							{
								id: "mssp-security",
								name: "MSSP Security",
								level: "Industry",
								code: "Industry",
								voucherSku: "Coming Soon",
								description: "Currently listed as coming soon in Fortinet's purchasing information. Not available for purchase yet.",
								status: "Coming Soon"
							}
						].map((cert) => /* @__PURE__ */ jsxs("div", {
							className: "border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-white",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap items-start justify-between cursor-pointer",
								onClick: () => setActiveCert(activeCert === cert.id ? null : cert.id),
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
									className: "flex flex-wrap items-center gap-2",
									children: [
										/* @__PURE__ */ jsx("h3", {
											className: "text-xl font-bold text-gray-900",
											children: cert.name
										}),
										/* @__PURE__ */ jsx("span", {
											className: `text-xs px-2 py-0.5 rounded-full ${cert.level === "NSE 1" || cert.level === "NSE 2" || cert.level === "NSE 3" ? "bg-green-100 text-green-700" : cert.level === "NSE 4" ? "bg-blue-100 text-blue-700" : cert.level === "NSE 5" ? "bg-cyan-100 text-cyan-700" : cert.level === "NSE 6" ? "bg-purple-100 text-purple-700" : cert.level === "NSE 7" ? "bg-orange-100 text-orange-700" : cert.level === "NSE 8" ? "bg-red-100 text-red-700" : "bg-gray-100 text-gray-700"}`,
											children: cert.level
										}),
										cert.track && /* @__PURE__ */ jsx("span", {
											className: "text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full",
											children: cert.track
										}),
										cert.status === "Coming Soon" && /* @__PURE__ */ jsx("span", {
											className: "text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full",
											children: "Coming Soon"
										})
									]
								}), /* @__PURE__ */ jsxs("div", {
									className: "flex flex-wrap gap-3 mt-1 text-sm text-gray-600",
									children: [
										cert.voucherSku !== "N/A" && cert.voucherSku !== "Coming Soon" && /* @__PURE__ */ jsxs("span", {
											className: "font-mono bg-gray-100 px-2 py-0.5 rounded",
											children: ["SKU: ", cert.voucherSku]
										}),
										cert.fee && /* @__PURE__ */ jsxs("span", { children: ["Fee: ", cert.fee] }),
										cert.duration && /* @__PURE__ */ jsxs("span", { children: ["Duration: ", cert.duration] })
									]
								})] }), /* @__PURE__ */ jsx("span", {
									className: "text-gray-400 text-sm mt-1",
									children: activeCert === cert.id ? "▼" : "▶"
								})]
							}), activeCert === cert.id && /* @__PURE__ */ jsxs("div", {
								className: "mt-4 pt-4 border-t border-gray-100 space-y-3",
								children: [
									/* @__PURE__ */ jsx("p", {
										className: "text-gray-700",
										children: cert.description
									}),
									cert.topics && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: "font-semibold text-gray-800 text-sm",
										children: "Key Topics:"
									}), /* @__PURE__ */ jsx("ul", {
										className: "list-disc list-inside text-sm text-gray-600 grid grid-cols-1 sm:grid-cols-2 gap-x-4",
										children: cert.topics.map((topic, i) => /* @__PURE__ */ jsx("li", { children: topic }, i))
									})] }),
									cert.suitable && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: "font-semibold text-gray-800 text-sm",
										children: "Suitable for:"
									}), /* @__PURE__ */ jsx("ul", {
										className: "list-disc list-inside text-sm text-gray-600 grid grid-cols-1 sm:grid-cols-2 gap-x-4",
										children: cert.suitable.map((item, i) => /* @__PURE__ */ jsx("li", { children: item }, i))
									})] }),
									cert.questions && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: "font-semibold text-gray-800 text-sm",
										children: "Exam Format:"
									}), /* @__PURE__ */ jsxs("p", {
										className: "text-sm text-gray-600",
										children: [cert.questions, " questions"]
									})] }),
									cert.format && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: "font-semibold text-gray-800 text-sm",
										children: "Format:"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-sm text-gray-600",
										children: cert.format
									})] }),
									cert.note && /* @__PURE__ */ jsxs("p", {
										className: "text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded border border-blue-200",
										children: ["ℹ️ ", cert.note]
									}),
									/* @__PURE__ */ jsx("div", {
										className: "mt-2 p-2 bg-gray-50 rounded border border-gray-200",
										children: /* @__PURE__ */ jsxs("p", {
											className: "text-sm text-gray-600",
											children: [
												/* @__PURE__ */ jsxs("span", {
													className: "font-medium",
													children: [
														"Looking for a ",
														cert.name,
														" voucher?"
													]
												}),
												" ",
												"Contact Techcyfy to check current discounted voucher availability."
											]
										})
									})
								]
							})]
						}, cert.id))
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "mb-10 border border-gray-200 rounded-lg p-6 bg-white",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-semibold text-gray-900 mb-3",
						children: "Why Choose Techcyfy for Fortinet Certification Vouchers?"
					}), /* @__PURE__ */ jsxs("ul", {
						className: "grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700",
						children: [
							/* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-2",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-green-600 font-bold",
									children: "✓"
								}), " Competitive Pricing – Explore competitive pricing for eligible Fortinet vouchers"]
							}),
							/* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-2",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-green-600 font-bold",
									children: "✓"
								}), " Multiple Fortinet Exams – Across NSE certification levels"]
							}),
							/* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-2",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-green-600 font-bold",
									children: "✓"
								}), " Easy Ordering – Simply provide the Fortinet exam name"]
							}),
							/* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-2",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-green-600 font-bold",
									children: "✓"
								}), " Professional Assistance – Get help finding the right certification path"]
							}),
							/* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-2",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-green-600 font-bold",
									children: "✓"
								}), " Updated Certification Information – Stay current with Fortinet program changes"]
							})
						]
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "mb-10 bg-gray-50 p-6 rounded-lg border border-gray-200",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-semibold text-gray-900 mb-3",
						children: "How to Buy a Fortinet Exam Voucher from Techcyfy"
					}), /* @__PURE__ */ jsxs("ol", {
						className: "list-decimal list-inside space-y-2 text-gray-700",
						children: [
							/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
								className: "font-medium",
								children: "Choose Your Fortinet Exam"
							}), " – Select the exact exam you want to take (e.g., NSE 4 FortiOS, NSE 5 FortiSwitch Administrator, NSE 6 FortiManager Administrator, NSE 7 Secure Networking 7.6 Architect, NSE 8 Cybersecurity Expert)."] }),
							/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
								className: "font-medium",
								children: "Contact Techcyfy"
							}), " – Send Techcyfy the exact exam name."] }),
							/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
								className: "font-medium",
								children: "Check Current Voucher Availability"
							}), " – Techcyfy can provide the latest available voucher option and pricing."] }),
							/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
								className: "font-medium",
								children: "Verify the Voucher Details"
							}), " – Confirm the exam name, validity period, redemption requirements, and applicable conditions."] }),
							/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
								className: "font-medium",
								children: "Schedule Your Exam"
							}), " – Use the eligible voucher according to Fortinet's current examination registration process."] })
						]
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "mb-10",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-semibold text-gray-900 mb-4",
						children: "Frequently Asked Questions About Fortinet Certification Exams"
					}), /* @__PURE__ */ jsx("div", {
						className: "space-y-3",
						children: [
							{
								q: "What is a Fortinet certification?",
								a: "A Fortinet certification validates technical knowledge and skills related to Fortinet cybersecurity technologies and solutions."
							},
							{
								q: "What are the Fortinet NSE certification levels?",
								a: "The current Fortinet program includes NSE 1 through NSE 8, along with Industry Certifications."
							},
							{
								q: "What is the Fortinet NSE 4 exam?",
								a: "NSE 4 FortiOS is the Fortinet certification level focused on FortiOS and FortiGate administration."
							},
							{
								q: "What is the Fortinet NSE 5 certification?",
								a: "NSE 5 focuses on specialized Fortinet technologies across Secure Networking, SASE, Cloud Security, and Security Operations."
							},
							{
								q: "What is the Fortinet NSE 6 certification?",
								a: "NSE 6 validates advanced product-specific Fortinet administration skills."
							},
							{
								q: "What is the Fortinet NSE 7 certification?",
								a: "NSE 7 is Fortinet's advanced architecture level and currently includes Public Cloud Security, SASE, Secure Networking, and Security Operations architecture exams."
							},
							{
								q: "What is Fortinet NSE 8?",
								a: "NSE 8 is Fortinet's expert-level cybersecurity certification and requires written and practical assessments."
							},
							{
								q: "What is the Fortinet NSE 4 exam code?",
								a: "The Fortinet exam level is NSE 4, while Fortinet's purchasing documentation identifies NSE-EX-FTE2 as the exam voucher SKU for the NSE 4 FortiOS exam."
							},
							{
								q: "Where can I buy a Fortinet exam voucher?",
								a: "You can contact Techcyfy to check current Fortinet certification exam voucher availability and pricing."
							},
							{
								q: "Can Fortinet exams be taken online?",
								a: "Fortinet offers online-proctored options for many NSE exams. However, NSE 7 remote OnVUE delivery will end September 21, 2026."
							},
							{
								q: "Are Fortinet NSE exams changing in 2026?",
								a: "Yes. Fortinet significantly updated its NSE Certification Program on July 15, 2026, including new levels, tracks, exams, industry certifications, and recertification rules."
							}
						].map((faq, idx) => /* @__PURE__ */ jsxs("div", {
							className: "border border-gray-200 rounded-lg p-4 bg-white",
							children: [/* @__PURE__ */ jsx("h4", {
								className: "font-semibold text-gray-800",
								children: faq.q
							}), /* @__PURE__ */ jsx("p", {
								className: "text-gray-600 text-sm mt-1",
								children: faq.a
							})]
						}, idx))
					})]
				}),
				/* @__PURE__ */ jsxs("footer", {
					className: "border-t border-gray-200 pt-6 text-center",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "text-xl font-bold text-gray-900",
							children: "Start Your Fortinet Certification Journey"
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "text-gray-600 mt-2 max-w-2xl mx-auto",
							children: [
								"Whether you are beginning with ",
								/* @__PURE__ */ jsx("strong", { children: "NSE 1" }),
								", building FortiGate skills through ",
								/* @__PURE__ */ jsx("strong", { children: "NSE 4" }),
								", specializing in secure networking through ",
								/* @__PURE__ */ jsx("strong", { children: "NSE 5" }),
								", advancing into product-specific security administration with ",
								/* @__PURE__ */ jsx("strong", { children: "NSE 6" }),
								", designing enterprise security architectures through ",
								/* @__PURE__ */ jsx("strong", { children: "NSE 7" }),
								", or pursuing expert-level cybersecurity with ",
								/* @__PURE__ */ jsx("strong", { children: "NSE 8" }),
								", Fortinet provides certification paths for cybersecurity professionals at different experience levels."
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-gray-700 mt-4 font-medium",
							children: "Looking for a Fortinet certification exam voucher? Send Techcyfy the exact certification or exam name (e.g., NSE 4 FortiOS, NSE 5 FortiSwitch Administrator, NSE 7 Secure Networking 7.6 Architect) and ask for the latest voucher availability and pricing."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-sm text-gray-500 mt-6",
							children: "Techcyfy — Your IT Certification Voucher Partner"
						})
					]
				})
			]
		})
	});
};
//#endregion
//#region src/Blog/GoogleCloudVoucher.jsx
var GoogleCloudVouchers = () => {
	const [activeCert, setActiveCert] = useState(null);
	const certifications = [
		{
			id: "cloud-digital-leader",
			name: "Cloud Digital Leader",
			level: "Foundational",
			fee: "$99",
			duration: "90 minutes",
			description: "Designed for professionals who want to demonstrate foundational knowledge of cloud computing and Google Cloud. Covers digital transformation, Google Cloud products and services, data transformation, AI, infrastructure modernization, application modernization, cloud security, cloud operations, and business use cases.",
			suitable: [
				"Students",
				"Business professionals",
				"IT professionals",
				"Project managers",
				"Sales professionals",
				"Cloud beginners",
				"Professionals working with technical teams"
			],
			note: "No technical prerequisites listed by Google Cloud."
		},
		{
			id: "genai-leader",
			name: "Generative AI Leader",
			level: "Foundational",
			fee: "$99",
			duration: "90 minutes",
			description: "A Google Cloud certification focused on business-level understanding of generative artificial intelligence. Suitable for people in any job role, with or without hands-on technical experience.",
			topics: [
				"Generative AI fundamentals",
				"Google Cloud generative AI offerings",
				"Improving generative AI model output",
				"Business strategies for generative AI",
				"Responsible AI concepts",
				"AI adoption"
			],
			suitable: [
				"Business leaders",
				"Product managers",
				"Technology professionals",
				"AI-curious professionals",
				"Consultants",
				"Project managers",
				"Non-technical professionals"
			]
		},
		{
			id: "associate-cloud-engineer",
			name: "Associate Cloud Engineer",
			level: "Associate",
			fee: "$125",
			duration: "2 hours",
			format: "50–60 multiple-choice and multiple-select questions",
			experience: "6+ months hands-on Google Cloud experience",
			validity: "3 years",
			description: "One of the most popular Google Cloud certifications for cloud infrastructure professionals. Deploys and secures applications, services, and infrastructure, monitors multiple projects, and maintains enterprise solutions.",
			topics: [
				"Set up a cloud solution environment",
				"Plan and implement cloud solutions",
				"Operate cloud solutions",
				"Configure access and security"
			],
			suitable: [
				"Cloud engineers",
				"System administrators",
				"Infrastructure engineers",
				"DevOps professionals",
				"IT administrators",
				"Cloud support engineers"
			]
		},
		{
			id: "associate-workspace-admin",
			name: "Associate Google Workspace Administrator",
			level: "Associate",
			description: "Validates skills required to manage and secure Google Workspace environments. Responsible for daily management including user accounts, Gmail, Drive, security, compliance, organizational units, groups, permissions, endpoints, and troubleshooting.",
			topics: [
				"User account management",
				"Google Workspace services",
				"Data governance",
				"Compliance",
				"Security policies",
				"Access controls",
				"Endpoint management",
				"Troubleshooting"
			],
			suitable: [
				"IT administrators",
				"System administrators",
				"Help desk professionals",
				"Technical support engineers",
				"Collaboration engineers"
			],
			experience: "Approximately 6 months of Google Workspace Super Admin experience"
		},
		{
			id: "associate-data-practitioner",
			name: "Associate Data Practitioner",
			level: "Associate",
			description: "Designed for professionals working with data on Google Cloud. Assesses skills in preparing and ingesting data, data analysis, data visualization, data pipeline orchestration, and data management.",
			topics: [
				"Preparing and ingesting data",
				"Data analysis",
				"Data visualization",
				"Data pipeline orchestration",
				"Data management"
			],
			suitable: [
				"Data analysts",
				"Junior data engineers",
				"Data professionals",
				"Analytics professionals",
				"AI/ML professionals",
				"Cloud professionals working with data"
			],
			experience: "6+ months experience working with data on Google Cloud"
		},
		{
			id: "professional-cloud-architect",
			name: "Professional Cloud Architect",
			level: "Professional",
			description: "Designed for professionals who design and manage secure, scalable, reliable, and cost-effective cloud architectures. Assesses capabilities including cloud solution architecture, infrastructure provisioning, security and compliance, technical optimization, business-process optimization, architecture implementation, and operational excellence.",
			topics: [
				"Cloud solution architecture",
				"Infrastructure provisioning",
				"Security and compliance",
				"Technical optimization",
				"Business-process optimization",
				"Architecture implementation",
				"Operational excellence"
			],
			suitable: [
				"Cloud architects",
				"Solutions architects",
				"Enterprise architects",
				"Cloud engineers",
				"Senior infrastructure engineers",
				"Cloud consultants"
			]
		},
		{
			id: "professional-cloud-developer",
			name: "Professional Cloud Developer",
			level: "Professional",
			description: "Validates advanced skills in building and configuring scalable and secure cloud-native applications. Assesses the ability to design scalable applications, build and test applications, configure applications for deployment, and integrate applications with Google Cloud services.",
			topics: [
				"Design scalable applications",
				"Build and test applications",
				"Configure applications for deployment",
				"Integrate applications with Google Cloud services"
			],
			suitable: [
				"Software developers",
				"Full-stack developers",
				"Backend developers",
				"Cloud developers",
				"Application engineers",
				"DevOps developers"
			],
			note: "Google Cloud also incorporates AI-powered development capabilities and generative AI APIs into the current role description."
		},
		{
			id: "professional-data-engineer",
			name: "Professional Data Engineer",
			level: "Professional",
			description: "Validates advanced skills for designing, building, deploying, and managing data processing systems on Google Cloud.",
			topics: [
				"Data architecture",
				"Data pipelines",
				"Data processing",
				"Data storage",
				"Data security",
				"Data governance",
				"Analytics",
				"Machine learning integration"
			],
			suitable: ["Experienced data engineers", "Cloud data professionals"]
		},
		{
			id: "professional-cloud-database-engineer",
			name: "Professional Cloud Database Engineer",
			level: "Professional",
			description: "Focuses on designing, creating, managing, and troubleshooting Google Cloud database solutions. Validates the ability to design scalable and highly available database solutions, manage multiple database solutions, migrate data solutions, and deploy scalable and highly available databases.",
			topics: [
				"Design scalable and highly available database solutions",
				"Manage multiple database solutions",
				"Migrate data solutions",
				"Deploy scalable and highly available databases"
			],
			suitable: [
				"Database administrators",
				"Database engineers",
				"Cloud database engineers",
				"Data architects",
				"Cloud architects"
			]
		},
		{
			id: "professional-cloud-devops-engineer",
			name: "Professional Cloud DevOps Engineer",
			level: "Professional",
			description: "Validates advanced capabilities related to development, deployment, reliability, automation, monitoring, and cloud operations.",
			topics: [
				"CI/CD",
				"Automation",
				"Infrastructure",
				"Deployment",
				"Reliability engineering",
				"Monitoring",
				"Observability",
				"Performance optimization",
				"Incident management"
			],
			suitable: [
				"DevOps engineers",
				"SRE professionals",
				"Cloud engineers",
				"Platform engineers"
			]
		},
		{
			id: "professional-cloud-security-engineer",
			name: "Professional Cloud Security Engineer",
			level: "Professional",
			description: "Focuses on designing, developing, and managing secure solutions on Google Cloud.",
			topics: [
				"Identity and access management",
				"Network security",
				"Data protection",
				"Security architecture",
				"Compliance",
				"Security monitoring",
				"Infrastructure security",
				"Cloud governance"
			],
			suitable: [
				"Cloud security engineers",
				"Cybersecurity professionals",
				"Security architects",
				"Cloud architects",
				"Security consultants"
			]
		},
		{
			id: "professional-cloud-network-engineer",
			name: "Professional Cloud Network Engineer",
			level: "Professional",
			description: "Validates advanced networking skills on Google Cloud. Assesses capabilities including designing VPC networks, implementing VPC networks, managed network services, hybrid connectivity, multi-cloud connectivity, network monitoring, network troubleshooting, and cloud network security.",
			topics: [
				"Designing VPC networks",
				"Implementing VPC networks",
				"Managed network services",
				"Hybrid connectivity",
				"Multi-cloud connectivity",
				"Network monitoring",
				"Network troubleshooting",
				"Cloud network security"
			],
			suitable: [
				"Network engineers",
				"Cloud network engineers",
				"Network architects",
				"Infrastructure engineers",
				"Cloud security engineers"
			]
		},
		{
			id: "professional-ml-engineer",
			name: "Professional Machine Learning Engineer",
			level: "Professional",
			description: "Validates advanced skills for designing, deploying, operating, and optimizing AI and machine learning solutions on Google Cloud.",
			topics: [
				"AI solution architecture",
				"Machine learning models",
				"Data and model management",
				"Model serving",
				"ML pipelines",
				"Automation",
				"MLOps",
				"Monitoring",
				"Generative AI"
			],
			suitable: [
				"Machine learning engineers",
				"AI engineers",
				"Data scientists",
				"ML developers",
				"MLOps engineers",
				"AI architects"
			],
			note: "Google Cloud has updated this examination to reflect current AI and Google Cloud platform changes, including generative AI capabilities."
		},
		{
			id: "professional-security-ops-engineer",
			name: "Professional Security Operations Engineer",
			level: "Professional",
			description: "Focused on detecting, investigating, and responding to security threats. Covers platform operations, data management, threat hunting, detection engineering, incident response, and observability.",
			topics: [
				"Platform operations",
				"Data management",
				"Threat hunting",
				"Detection engineering",
				"Incident response",
				"Observability"
			],
			suitable: [
				"Security operations engineers",
				"SOC professionals",
				"Threat hunters",
				"Detection engineers",
				"Incident responders",
				"Cloud security engineers"
			],
			experience: "3+ years security industry experience, including at least 1 year using Google Cloud security tooling"
		},
		{
			id: "professional-agentic-architect",
			name: "Professional Agentic Architect — Beta",
			level: "Professional",
			status: "Beta",
			fee: "$120",
			duration: "3 hours",
			format: "Approximately 80 multiple-choice questions",
			betaOpens: "September 3, 2026",
			description: "A new Google Cloud Professional certification for professionals designing and managing autonomous AI-driven agentic workflows.",
			topics: [
				"Building agents with low-code tools",
				"Coding agents",
				"Custom agents",
				"Agentic workflow evaluation",
				"Agentic workflow deployment",
				"Security",
				"Governance",
				"Scalability",
				"Reliability",
				"Performance",
				"Cost optimization"
			],
			note: "Google Cloud states that vouchers are accepted for beta exam attempts."
		}
	];
	return /* @__PURE__ */ jsx("div", {
		className: "min-h-screen bg-white text-gray-800 font-sans",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-6xl mx-auto px-4 py-8",
			children: [
				/* @__PURE__ */ jsxs("header", {
					className: "border-b border-gray-200 pb-6 mb-8",
					children: [
						/* @__PURE__ */ jsx("h1", {
							className: "text-3xl md:text-4xl font-bold text-gray-900",
							children: "Google Cloud Exam Vouchers: Complete Guide to Discounted Google Cloud Certification Vouchers"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-gray-600 mt-2 text-lg",
							children: "Complete Exam List, Certification Guide & Discounted Vouchers"
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "text-sm text-gray-500 mt-3",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "font-medium",
									children: "Looking for discounted Google Cloud certification exam vouchers?"
								}),
								" ",
								"Techcyfy helps IT professionals, cloud engineers, developers, data professionals, cybersecurity specialists, AI engineers, network engineers, system administrators, and business professionals find Google Cloud certification voucher options."
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800",
							children: [/* @__PURE__ */ jsx("span", {
								className: "font-semibold",
								children: "⚠️ Important:"
							}), " Google Cloud updates certification exams and certification paths regularly. Always verify the current certification status, exam requirements, and voucher terms before purchasing or scheduling an exam."]
						})
					]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "mb-10",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-semibold text-gray-900 mb-4",
							children: "Complete Google Cloud Certification List"
						}),
						/* @__PURE__ */ jsx("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 bg-gray-50 p-4 rounded-lg border border-gray-200",
							children: certifications.map((cert) => /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2 text-sm",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "text-gray-700 truncate",
										children: cert.name
									}),
									/* @__PURE__ */ jsx("span", {
										className: `text-xs px-1.5 py-0.5 rounded flex-shrink-0 ${cert.level === "Foundational" ? "bg-blue-100 text-blue-700" : cert.level === "Associate" ? "bg-green-100 text-green-700" : "bg-purple-100 text-purple-700"}`,
										children: cert.level
									}),
									cert.status === "Beta" && /* @__PURE__ */ jsx("span", {
										className: "text-xs bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded flex-shrink-0",
										children: "Beta"
									})
								]
							}, cert.id))
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-xs text-gray-500 mt-2",
							children: "Note: Google Cloud identifies exams by certification name rather than alphanumeric codes."
						})
					]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "mb-10",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-semibold text-gray-900 mb-4",
						children: "Which Google Cloud Certification Should You Choose?"
					}), /* @__PURE__ */ jsx("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ jsxs("table", {
							className: "w-full text-sm border-collapse",
							children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", {
								className: "bg-gray-100",
								children: [/* @__PURE__ */ jsx("th", {
									className: "border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700",
									children: "Career Goal"
								}), /* @__PURE__ */ jsx("th", {
									className: "border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700",
									children: "Recommended Certification"
								})]
							}) }), /* @__PURE__ */ jsx("tbody", { children: [
								{
									goal: "Google Cloud beginner",
									cert: "Cloud Digital Leader"
								},
								{
									goal: "Business + cloud knowledge",
									cert: "Cloud Digital Leader"
								},
								{
									goal: "Generative AI fundamentals",
									cert: "Generative AI Leader"
								},
								{
									goal: "Cloud engineering",
									cert: "Associate Cloud Engineer"
								},
								{
									goal: "Google Workspace administration",
									cert: "Associate Google Workspace Administrator"
								},
								{
									goal: "Data fundamentals",
									cert: "Associate Data Practitioner"
								},
								{
									goal: "Cloud architecture",
									cert: "Professional Cloud Architect"
								},
								{
									goal: "Cloud development",
									cert: "Professional Cloud Developer"
								},
								{
									goal: "Data engineering",
									cert: "Professional Data Engineer"
								},
								{
									goal: "Database engineering",
									cert: "Professional Cloud Database Engineer"
								},
								{
									goal: "DevOps / SRE",
									cert: "Professional Cloud DevOps Engineer"
								},
								{
									goal: "Cloud security",
									cert: "Professional Cloud Security Engineer"
								},
								{
									goal: "Cloud networking",
									cert: "Professional Cloud Network Engineer"
								},
								{
									goal: "Machine learning / AI",
									cert: "Professional Machine Learning Engineer"
								},
								{
									goal: "Security operations / SOC",
									cert: "Professional Security Operations Engineer"
								},
								{
									goal: "Agentic AI architecture",
									cert: "Professional Agentic Architect — Beta"
								}
							].map((item, idx) => /* @__PURE__ */ jsxs("tr", {
								className: idx % 2 === 0 ? "bg-white" : "bg-gray-50",
								children: [/* @__PURE__ */ jsx("td", {
									className: "border border-gray-300 px-4 py-2",
									children: item.goal
								}), /* @__PURE__ */ jsx("td", {
									className: "border border-gray-300 px-4 py-2 font-medium text-blue-700",
									children: item.cert
								})]
							}, idx)) })]
						})
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "mb-10",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-semibold text-gray-900 mb-4",
						children: "All Google Cloud Certifications"
					}), /* @__PURE__ */ jsx("div", {
						className: "space-y-4",
						children: certifications.map((cert) => /* @__PURE__ */ jsxs("div", {
							className: "border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-white",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap items-start justify-between cursor-pointer",
								onClick: () => setActiveCert(activeCert === cert.id ? null : cert.id),
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
									className: "flex flex-wrap items-center gap-2",
									children: [
										/* @__PURE__ */ jsx("h3", {
											className: "text-xl font-bold text-gray-900",
											children: cert.name
										}),
										/* @__PURE__ */ jsx("span", {
											className: `text-xs px-2 py-0.5 rounded-full ${cert.level === "Foundational" ? "bg-blue-100 text-blue-700" : cert.level === "Associate" ? "bg-green-100 text-green-700" : "bg-purple-100 text-purple-700"}`,
											children: cert.level
										}),
										cert.status === "Beta" && /* @__PURE__ */ jsx("span", {
											className: "text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full",
											children: "Beta"
										})
									]
								}), cert.fee && /* @__PURE__ */ jsxs("div", {
									className: "flex flex-wrap gap-3 mt-1 text-sm text-gray-600",
									children: [/* @__PURE__ */ jsxs("span", { children: ["Fee: ", cert.fee] }), cert.duration && /* @__PURE__ */ jsxs("span", { children: ["Duration: ", cert.duration] })]
								})] }), /* @__PURE__ */ jsx("span", {
									className: "text-gray-400 text-sm mt-1",
									children: activeCert === cert.id ? "▼" : "▶"
								})]
							}), activeCert === cert.id && /* @__PURE__ */ jsxs("div", {
								className: "mt-4 pt-4 border-t border-gray-100 space-y-3",
								children: [
									/* @__PURE__ */ jsx("p", {
										className: "text-gray-700",
										children: cert.description
									}),
									cert.topics && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: "font-semibold text-gray-800 text-sm",
										children: "Key Topics:"
									}), /* @__PURE__ */ jsx("ul", {
										className: "list-disc list-inside text-sm text-gray-600 grid grid-cols-1 sm:grid-cols-2 gap-x-4",
										children: cert.topics.map((topic, i) => /* @__PURE__ */ jsx("li", { children: topic }, i))
									})] }),
									cert.suitable && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: "font-semibold text-gray-800 text-sm",
										children: "Suitable for:"
									}), /* @__PURE__ */ jsx("ul", {
										className: "list-disc list-inside text-sm text-gray-600 grid grid-cols-1 sm:grid-cols-2 gap-x-4",
										children: cert.suitable.map((item, i) => /* @__PURE__ */ jsx("li", { children: item }, i))
									})] }),
									cert.experience && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: "font-semibold text-gray-800 text-sm",
										children: "Recommended Experience:"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-sm text-gray-600",
										children: cert.experience
									})] }),
									cert.format && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: "font-semibold text-gray-800 text-sm",
										children: "Exam Format:"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-sm text-gray-600",
										children: cert.format
									})] }),
									cert.validity && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: "font-semibold text-gray-800 text-sm",
										children: "Certification Validity:"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-sm text-gray-600",
										children: cert.validity
									})] }),
									cert.betaOpens && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: "font-semibold text-gray-800 text-sm",
										children: "Beta Opens:"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-sm text-gray-600",
										children: cert.betaOpens
									})] }),
									cert.note && /* @__PURE__ */ jsxs("p", {
										className: "text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded border border-blue-200",
										children: ["ℹ️ ", cert.note]
									}),
									/* @__PURE__ */ jsx("div", {
										className: "mt-2 p-2 bg-gray-50 rounded border border-gray-200",
										children: /* @__PURE__ */ jsxs("p", {
											className: "text-sm text-gray-600",
											children: [
												/* @__PURE__ */ jsxs("span", {
													className: "font-medium",
													children: [
														"Looking for a ",
														cert.name,
														" voucher?"
													]
												}),
												" ",
												"Contact Techcyfy to check current discounted voucher availability."
											]
										})
									})
								]
							})]
						}, cert.id))
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "mb-10 border border-gray-200 rounded-lg p-6 bg-white",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-semibold text-gray-900 mb-3",
							children: "Why Choose Techcyfy for Google Cloud Exam Vouchers?"
						}),
						/* @__PURE__ */ jsxs("ul", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700",
							children: [
								/* @__PURE__ */ jsxs("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-green-600 font-bold",
										children: "✓"
									}), " Competitive Voucher Pricing"]
								}),
								/* @__PURE__ */ jsxs("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-green-600 font-bold",
										children: "✓"
									}), " Multiple Google Cloud Certifications"]
								}),
								/* @__PURE__ */ jsxs("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-green-600 font-bold",
										children: "✓"
									}), " Easy Exam Selection"]
								}),
								/* @__PURE__ */ jsxs("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-green-600 font-bold",
										children: "✓"
									}), " Professional Support"]
								}),
								/* @__PURE__ */ jsxs("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-green-600 font-bold",
										children: "✓"
									}), " Current Certification Information"]
								})
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-sm text-gray-500 mt-3",
							children: "Always verify the certification status and exam requirements with Google Cloud before purchase."
						})
					]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "mb-10 bg-gray-50 p-6 rounded-lg border border-gray-200",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-semibold text-gray-900 mb-3",
						children: "How to Buy a Google Cloud Certification Exam Voucher"
					}), /* @__PURE__ */ jsxs("ol", {
						className: "list-decimal list-inside space-y-2 text-gray-700",
						children: [
							/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
								className: "font-medium",
								children: "Choose Your Certification"
							}), " – Select the Google Cloud certification that matches your career goal (e.g., Associate Cloud Engineer, Professional Cloud Architect)."] }),
							/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
								className: "font-medium",
								children: "Contact Techcyfy"
							}), " – Send the exact certification name to Techcyfy."] }),
							/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
								className: "font-medium",
								children: "Check Current Voucher Availability"
							}), " – Techcyfy can check the available voucher option and current pricing."] }),
							/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
								className: "font-medium",
								children: "Review Voucher Terms"
							}), " – Verify certification name, exam eligibility, voucher validity, expiration date, restrictions, and redemption conditions."] }),
							/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
								className: "font-medium",
								children: "Schedule Your Google Cloud Exam"
							}), " – After obtaining an eligible voucher, follow Google's official certification registration process."] })
						]
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "mb-10",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-semibold text-gray-900 mb-4",
						children: "Frequently Asked Questions About Google Cloud Exam Vouchers"
					}), /* @__PURE__ */ jsx("div", {
						className: "space-y-3",
						children: [
							{
								q: "What is a Google Cloud certification exam voucher?",
								a: "A Google Cloud exam voucher is a payment option that can be applied toward an eligible Google Cloud certification examination according to its terms."
							},
							{
								q: "Where can I buy a discounted Google Cloud exam voucher?",
								a: "You can contact Techcyfy to check current Google Cloud certification voucher availability and pricing."
							},
							{
								q: "Does Google Cloud use exam codes like AZ-900 or SAA-C03?",
								a: "Google Cloud's official certification pages generally identify exams by their certification names rather than a universal alphanumeric exam-code system."
							},
							{
								q: "What is the Associate Cloud Engineer exam?",
								a: "Associate Cloud Engineer is an Associate-level certification that validates practical skills for deploying, securing, monitoring, and maintaining Google Cloud solutions."
							},
							{
								q: "What is the Professional Cloud Architect certification?",
								a: "Professional Cloud Architect validates advanced skills in designing, provisioning, implementing, and managing Google Cloud architectures."
							},
							{
								q: "Which Google Cloud certification is best for beginners?",
								a: "Cloud Digital Leader is designed for foundational cloud knowledge and has no technical prerequisites."
							},
							{
								q: "Which Google Cloud certification is best for cybersecurity?",
								a: "Professional Cloud Security Engineer is designed for cloud security, while Professional Security Operations Engineer focuses on security operations."
							},
							{
								q: "What is Professional Agentic Architect?",
								a: "A new Google Cloud Professional certification being introduced as a beta examination in September 2026, focusing on designing and managing autonomous AI agent workflows."
							},
							{
								q: "Can I use a voucher for a Google Cloud beta exam?",
								a: "Google Cloud states that vouchers are accepted for Professional Agentic Architect beta attempts."
							}
						].map((faq, idx) => /* @__PURE__ */ jsxs("div", {
							className: "border border-gray-200 rounded-lg p-4 bg-white",
							children: [/* @__PURE__ */ jsx("h4", {
								className: "font-semibold text-gray-800",
								children: faq.q
							}), /* @__PURE__ */ jsx("p", {
								className: "text-gray-600 text-sm mt-1",
								children: faq.a
							})]
						}, idx))
					})]
				}),
				/* @__PURE__ */ jsxs("footer", {
					className: "border-t border-gray-200 pt-6 text-center",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "text-xl font-bold text-gray-900",
							children: "Start Your Google Cloud Certification Journey"
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "text-gray-600 mt-2 max-w-2xl mx-auto",
							children: [
								"Whether you are starting with ",
								/* @__PURE__ */ jsx("strong", { children: "Cloud Digital Leader" }),
								", developing practical cloud engineering skills with ",
								/* @__PURE__ */ jsx("strong", { children: "Associate Cloud Engineer" }),
								", designing enterprise architectures with",
								" ",
								/* @__PURE__ */ jsx("strong", { children: "Professional Cloud Architect" }),
								", or building AI solutions with",
								" ",
								/* @__PURE__ */ jsx("strong", { children: "Professional Machine Learning Engineer" }),
								", Google Cloud offers certification paths for a wide range of technology careers."
							]
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "text-gray-700 mt-4 font-medium",
							children: [
								"Looking for a specific Google Cloud voucher? Send Techcyfy the ",
								/* @__PURE__ */ jsx("strong", { children: "Google Cloud Certification Name" }),
								" ",
								"(e.g., Professional Cloud Architect, Associate Cloud Engineer) and ask for the latest voucher availability and pricing."
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-sm text-gray-500 mt-6",
							children: "Techcyfy — Your IT Certification Voucher Partner"
						})
					]
				})
			]
		})
	});
};
//#endregion
//#region src/Blog/SalesforceCRM.jsx
var SalesforceCRM = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return /* @__PURE__ */ jsxs("article", {
		className: "min-h-screen bg-white text-slate-700",
		children: [
			/* @__PURE__ */ jsx("section", {
				className: "border-b border-slate-200",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "mb-6 flex items-center gap-2 text-sm text-slate-500",
							children: [
								/* @__PURE__ */ jsx(Link, {
									to: "/",
									className: "hover:text-sky-600 transition-colors",
									children: "Home"
								}),
								/* @__PURE__ */ jsx("span", { children: "/" }),
								/* @__PURE__ */ jsx(Link, {
									to: "/blog",
									className: "hover:text-sky-600 transition-colors",
									children: "Blog"
								}),
								/* @__PURE__ */ jsx("span", { children: "/" }),
								/* @__PURE__ */ jsx("span", {
									className: "text-sky-600",
									children: "Salesforce CRM"
								})
							]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mb-6",
							children: /* @__PURE__ */ jsx("span", {
								className: "inline-block px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-semibold uppercase tracking-wider",
								children: "Salesforce CRM Guide"
							})
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6",
							children: "Salesforce CRM: The Complete Guide to Features, Benefits, Implementation & Business Growth"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-lg text-slate-600 leading-relaxed",
							children: "Discover how Salesforce CRM helps businesses manage customers, automate sales, improve productivity, and scale with AI. Explore Salesforce features, benefits, implementation, and more."
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10",
				children: /* @__PURE__ */ jsxs("div", {
					className: "p-6 rounded-xl bg-slate-50 border border-slate-200",
					children: [/* @__PURE__ */ jsxs("h2", {
						className: "text-base font-bold text-slate-900 mb-4 flex items-center gap-2",
						children: [/* @__PURE__ */ jsx(FaLightbulb, { className: "text-amber-500" }), "Table of Contents"]
					}), /* @__PURE__ */ jsx("nav", {
						className: "grid sm:grid-cols-2 gap-2 text-sm",
						children: [
							{
								id: "what-is-salesforce",
								label: "What Is Salesforce CRM?"
							},
							{
								id: "why-important",
								label: "Why Is Salesforce CRM Important?"
							},
							{
								id: "key-features",
								label: "Key Salesforce CRM Features"
							},
							{
								id: "benefits",
								label: "Salesforce CRM Benefits"
							},
							{
								id: "sales-cloud-vs-agentforce",
								label: "Sales Cloud vs Agentforce Sales"
							},
							{
								id: "data-360",
								label: "What Is Salesforce Data 360?"
							},
							{
								id: "integration",
								label: "Salesforce Integration"
							},
							{
								id: "customization",
								label: "Salesforce Customization"
							},
							{
								id: "implementation",
								label: "Salesforce Implementation"
							},
							{
								id: "consulting-partner",
								label: "Why Work With a Consulting Partner?"
							},
							{
								id: "cost",
								label: "How Much Does Salesforce Cost?"
							},
							{
								id: "right-for-business",
								label: "Is Salesforce Right for Your Business?"
							},
							{
								id: "best-practices",
								label: "Salesforce CRM Best Practices"
							},
							{
								id: "future",
								label: "The Future of Salesforce CRM"
							},
							{
								id: "faq",
								label: "Frequently Asked Questions"
							}
						].map((item) => /* @__PURE__ */ jsxs("a", {
							href: `#${item.id}`,
							className: "flex items-center gap-2 text-slate-600 hover:text-sky-600 transition-colors py-1",
							children: [/* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-sky-500" }), item.label]
						}, item.id))
					})]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20",
				children: /* @__PURE__ */ jsxs("div", {
					className: "space-y-12",
					children: [
						/* @__PURE__ */ jsxs("section", {
							id: "what-is-salesforce",
							className: "scroll-mt-24",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
								children: "What Is Salesforce CRM?"
							}), /* @__PURE__ */ jsxs("div", {
								className: "space-y-4 leading-relaxed",
								children: [
									/* @__PURE__ */ jsxs("p", { children: [
										"In today's competitive business environment, managing customer relationships efficiently is essential for sustainable growth. ",
										/* @__PURE__ */ jsx("strong", {
											className: "text-slate-900",
											children: "Salesforce CRM"
										}),
										" is a cloud-based customer relationship management platform designed to help businesses manage customer data, sales activities, marketing, service, analytics, and business processes from a connected ecosystem."
									] }),
									/* @__PURE__ */ jsx("p", { children: "Salesforce provides tools that allow companies to manage prospects and customers, track interactions, automate workflows, analyze business data, and create personalized customer experiences. Salesforce also enables organizations to customize the platform according to their unique business processes." }),
									/* @__PURE__ */ jsx("p", { children: "For businesses looking to improve sales productivity, customer engagement, operational efficiency, and scalability, Salesforce CRM can provide a centralized foundation for managing the customer lifecycle." }),
									/* @__PURE__ */ jsx("div", {
										className: "p-4 rounded-lg bg-sky-50 border-l-4 border-sky-500",
										children: /* @__PURE__ */ jsxs("p", {
											className: "text-sky-900 text-sm",
											children: [
												"At ",
												/* @__PURE__ */ jsx("strong", { children: "Techcyfy" }),
												", we help businesses understand how Salesforce can fit into their technology environment and how CRM implementation, customization, integration, and automation can support long-term business objectives."
											]
										})
									})
								]
							})]
						}),
						/* @__PURE__ */ jsxs("section", {
							id: "why-important",
							className: "scroll-mt-24",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
								children: "Why Is Salesforce CRM Important for Businesses?"
							}), /* @__PURE__ */ jsxs("div", {
								className: "space-y-4 leading-relaxed",
								children: [
									/* @__PURE__ */ jsx("p", { children: "Many organizations still manage customer information across spreadsheets, emails, disconnected applications, and separate departmental systems. This can make it difficult to understand the complete customer journey." }),
									/* @__PURE__ */ jsx("p", { children: "A modern CRM brings customer information and business processes together." }),
									/* @__PURE__ */ jsx("p", {
										className: "text-slate-900 font-medium",
										children: "Salesforce can help businesses:"
									}),
									/* @__PURE__ */ jsx("ul", {
										className: "grid sm:grid-cols-2 gap-2",
										children: [
											"Centralize customer and prospect information",
											"Manage leads and opportunities",
											"Track sales pipelines",
											"Automate repetitive processes",
											"Improve customer service",
											"Connect business applications",
											"Analyze business performance",
											"Personalize customer interactions",
											"Improve collaboration between teams",
											"Scale CRM operations as the business grows"
										].map((item) => /* @__PURE__ */ jsxs("li", {
											className: "flex items-start gap-2 text-sm",
											children: [/* @__PURE__ */ jsx(FaCheckCircle, { className: "text-sky-500 mt-0.5 flex-shrink-0" }), /* @__PURE__ */ jsx("span", { children: item })]
										}, item))
									}),
									/* @__PURE__ */ jsx("p", { children: "Salesforce describes CRM as a system for managing interactions with current and potential customers while improving relationships and supporting business growth." }),
									/* @__PURE__ */ jsx("p", { children: "The result is a more connected approach to customer management." })
								]
							})]
						}),
						/* @__PURE__ */ jsxs("section", {
							id: "key-features",
							className: "scroll-mt-24",
							children: [
								/* @__PURE__ */ jsx("h2", {
									className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
									children: "Key Salesforce CRM Features"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "leading-relaxed mb-8",
									children: "Salesforce offers a broad range of capabilities that can be configured for different industries, departments, and business models. Here are some of the most important Salesforce CRM features."
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "space-y-6",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "p-6 rounded-lg bg-slate-50 border border-slate-200",
											children: [/* @__PURE__ */ jsx("h3", {
												className: "text-lg font-bold text-slate-900 mb-3",
												children: "1. Lead Management"
											}), /* @__PURE__ */ jsx("p", {
												className: "leading-relaxed text-sm",
												children: "Lead management helps sales teams capture, organize, qualify, and follow up with potential customers. Instead of manually tracking prospects across spreadsheets or emails, teams can maintain lead information in a centralized CRM environment. Salesforce can help sales teams identify promising leads, assign them to the appropriate representatives, track activities, and move qualified prospects through the sales process."
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "p-6 rounded-lg bg-slate-50 border border-slate-200",
											children: [
												/* @__PURE__ */ jsx("h3", {
													className: "text-lg font-bold text-slate-900 mb-3",
													children: "2. Opportunity Management"
												}),
												/* @__PURE__ */ jsx("p", {
													className: "leading-relaxed text-sm mb-4",
													children: "Opportunity management allows businesses to track potential deals throughout the sales pipeline. Sales teams can monitor:"
												}),
												/* @__PURE__ */ jsx("ul", {
													className: "grid sm:grid-cols-2 gap-2 mb-4",
													children: [
														"Deal stages",
														"Expected revenue",
														"Close dates",
														"Customer interactions",
														"Sales activities",
														"Decision makers",
														"Products or services",
														"Next steps"
													].map((item) => /* @__PURE__ */ jsxs("li", {
														className: "flex items-start gap-2 text-sm",
														children: [/* @__PURE__ */ jsx(FaCheckCircle, { className: "text-sky-500 mt-0.5 flex-shrink-0 text-xs" }), item]
													}, item))
												}),
												/* @__PURE__ */ jsx("p", {
													className: "leading-relaxed text-sm",
													children: "Salesforce's sales capabilities are designed to help teams manage opportunities through the pipeline and forecast future revenue. Better visibility into opportunities can help sales managers identify bottlenecks and make more informed decisions."
												})
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "p-6 rounded-lg bg-slate-50 border border-slate-200",
											children: [
												/* @__PURE__ */ jsx("h3", {
													className: "text-lg font-bold text-slate-900 mb-3",
													children: "3. Sales Automation"
												}),
												/* @__PURE__ */ jsx("p", {
													className: "leading-relaxed text-sm mb-4",
													children: "Sales representatives often spend significant time on repetitive administrative work. Salesforce automation can help reduce manual tasks by automating activities such as:"
												}),
												/* @__PURE__ */ jsx("ul", {
													className: "grid sm:grid-cols-2 gap-2 mb-4",
													children: [
														"Lead assignment",
														"Follow-up tasks",
														"Notifications",
														"Email workflows",
														"Data updates",
														"Approval processes",
														"Opportunity processes",
														"Customer communications"
													].map((item) => /* @__PURE__ */ jsxs("li", {
														className: "flex items-start gap-2 text-sm",
														children: [/* @__PURE__ */ jsx(FaCheckCircle, { className: "text-sky-500 mt-0.5 flex-shrink-0 text-xs" }), item]
													}, item))
												}),
												/* @__PURE__ */ jsx("p", {
													className: "leading-relaxed text-sm",
													children: "Automation allows employees to spend more time on activities that require human judgment, relationship building, and strategic decision-making."
												})
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "p-6 rounded-lg bg-slate-50 border border-slate-200",
											children: [/* @__PURE__ */ jsx("h3", {
												className: "text-lg font-bold text-slate-900 mb-3",
												children: "4. Customer Service Management"
											}), /* @__PURE__ */ jsx("p", {
												className: "leading-relaxed text-sm",
												children: "Salesforce is not limited to sales. Businesses can also use Salesforce to manage customer service interactions and provide service teams with customer context. A connected CRM can help service representatives understand a customer's history, interactions, and relevant information so they can provide more personalized support. This is particularly valuable when customers interact with a business through multiple channels."
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "p-6 rounded-lg bg-slate-50 border border-slate-200",
											children: [
												/* @__PURE__ */ jsx("h3", {
													className: "text-lg font-bold text-slate-900 mb-3",
													children: "5. Reporting and Analytics"
												}),
												/* @__PURE__ */ jsx("p", {
													className: "leading-relaxed text-sm mb-4",
													children: "Data is only useful when businesses can turn it into actionable insights. Salesforce provides reporting and analytics capabilities that can help organizations monitor important metrics such as:"
												}),
												/* @__PURE__ */ jsx("ul", {
													className: "grid sm:grid-cols-2 gap-2 mb-4",
													children: [
														"Sales performance",
														"Pipeline value",
														"Conversion rates",
														"Revenue forecasts",
														"Customer activity",
														"Team productivity",
														"Service performance"
													].map((item) => /* @__PURE__ */ jsxs("li", {
														className: "flex items-start gap-2 text-sm",
														children: [/* @__PURE__ */ jsx(FaCheckCircle, { className: "text-sky-500 mt-0.5 flex-shrink-0 text-xs" }), item]
													}, item))
												}),
												/* @__PURE__ */ jsx("p", {
													className: "leading-relaxed text-sm",
													children: "These insights can help business leaders understand what is working, identify areas for improvement, and make data-driven decisions."
												})
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "p-6 rounded-lg bg-sky-50 border border-sky-200",
											children: [
												/* @__PURE__ */ jsx("h3", {
													className: "text-lg font-bold text-slate-900 mb-3",
													children: "6. Salesforce AI and Agentforce"
												}),
												/* @__PURE__ */ jsxs("p", {
													className: "leading-relaxed text-sm mb-4",
													children: [
														"Artificial intelligence is becoming an increasingly important part of CRM. Salesforce has expanded its platform around ",
														/* @__PURE__ */ jsx("strong", {
															className: "text-sky-700",
															children: "Agentforce"
														}),
														", enabling AI agents to work with business data and workflows."
													]
												}),
												/* @__PURE__ */ jsx("p", {
													className: "leading-relaxed text-sm mb-4",
													children: "Salesforce's current platform includes AI-powered capabilities for sales, service, data, and other business functions. Its 2026 releases have also introduced capabilities around multi-agent orchestration, AI-powered workflows, and real-time data activation."
												}),
												/* @__PURE__ */ jsxs("p", {
													className: "leading-relaxed text-sm mb-4",
													children: [
														"For sales organizations, Salesforce's sales solution is now referred to as ",
														/* @__PURE__ */ jsx("strong", {
															className: "text-slate-900",
															children: "Agentforce Sales"
														}),
														", formerly known as Sales Cloud. It combines sales automation with AI capabilities across activities such as prospecting, pipeline management, and sales engagement."
													]
												}),
												/* @__PURE__ */ jsx("p", {
													className: "leading-relaxed text-sm",
													children: "AI can help organizations automate repetitive processes while allowing employees to focus on higher-value activities."
												})
											]
										})
									]
								})
							]
						}),
						/* @__PURE__ */ jsxs("section", {
							id: "benefits",
							className: "scroll-mt-24",
							children: [
								/* @__PURE__ */ jsx("h2", {
									className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
									children: "Salesforce CRM Benefits for Businesses"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "leading-relaxed mb-8",
									children: "Implementing Salesforce CRM can provide several business benefits."
								}),
								/* @__PURE__ */ jsx("div", {
									className: "grid md:grid-cols-2 gap-4",
									children: [
										{
											title: "Centralized Customer Data",
											desc: "Instead of storing customer information across disconnected systems, organizations can create a more unified view of customer relationships. A centralized CRM can make it easier for authorized employees to access relevant information and collaborate across departments."
										},
										{
											title: "Improved Sales Productivity",
											desc: "Sales teams can use Salesforce to organize leads, manage opportunities, automate repetitive tasks, and monitor their pipelines. This can reduce administrative work and help representatives focus more of their time on selling."
										},
										{
											title: "Better Customer Experience",
											desc: "Customers expect businesses to understand their needs and previous interactions. A connected CRM can provide teams with customer context, helping them deliver more relevant and consistent experiences."
										},
										{
											title: "Business Process Automation",
											desc: "Manual processes can create delays and increase the risk of errors. Salesforce automation can streamline repetitive workflows and reduce unnecessary manual intervention."
										},
										{
											title: "Better Business Visibility",
											desc: "Salesforce reporting and analytics can give managers greater visibility into business performance. Leadership teams can use CRM data to monitor sales activity, customer engagement, pipeline performance, and other important metrics."
										},
										{
											title: "Scalability",
											desc: "As a business grows, its CRM requirements often become more complex. Salesforce is designed to support organizations ranging from small businesses to large enterprises, with products and capabilities that can be customized and extended."
										}
									].map((benefit, index) => /* @__PURE__ */ jsxs("div", {
										className: "p-5 rounded-lg bg-slate-50 border border-slate-200",
										children: [/* @__PURE__ */ jsx("h3", {
											className: "text-base font-bold text-slate-900 mb-2",
											children: benefit.title
										}), /* @__PURE__ */ jsx("p", {
											className: "text-sm leading-relaxed",
											children: benefit.desc
										})]
									}, index))
								})
							]
						}),
						/* @__PURE__ */ jsxs("section", {
							id: "sales-cloud-vs-agentforce",
							className: "scroll-mt-24",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
								children: "Salesforce Sales Cloud vs. Agentforce Sales"
							}), /* @__PURE__ */ jsxs("div", {
								className: "space-y-4 leading-relaxed",
								children: [
									/* @__PURE__ */ jsxs("p", { children: [
										"One important terminology change businesses should understand is that ",
										/* @__PURE__ */ jsx("strong", {
											className: "text-slate-900",
											children: "Sales Cloud is now called Agentforce Sales"
										}),
										" in current Salesforce documentation."
									] }),
									/* @__PURE__ */ jsx("p", { children: "The solution continues to provide core sales capabilities such as:" }),
									/* @__PURE__ */ jsx("ul", {
										className: "grid sm:grid-cols-2 gap-2",
										children: [
											"Lead management",
											"Opportunity management",
											"Account management",
											"Sales pipeline management",
											"Forecasting",
											"Sales automation",
											"Sales analytics",
											"AI-powered sales capabilities"
										].map((item) => /* @__PURE__ */ jsxs("li", {
											className: "flex items-start gap-2 text-sm",
											children: [/* @__PURE__ */ jsx(FaCheckCircle, { className: "text-sky-500 mt-0.5 flex-shrink-0" }), item]
										}, item))
									}),
									/* @__PURE__ */ jsx("p", { children: "Salesforce's documentation confirms that Sales Cloud is now Agentforce Sales, while its sales platform continues to support lead generation, opportunity management, account relationships, forecasting, and sales operations." }),
									/* @__PURE__ */ jsx("p", { children: "This evolution reflects a broader shift from CRM software simply storing information toward CRM platforms that can actively assist employees and automate business work." })
								]
							})]
						}),
						/* @__PURE__ */ jsxs("section", {
							id: "data-360",
							className: "scroll-mt-24",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
								children: "What Is Salesforce Data 360?"
							}), /* @__PURE__ */ jsxs("div", {
								className: "space-y-4 leading-relaxed",
								children: [
									/* @__PURE__ */ jsx("p", { children: "Data is one of the most important components of modern CRM." }),
									/* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("strong", {
										className: "text-slate-900",
										children: "Salesforce Data 360"
									}), ", formerly known as Data Cloud, is Salesforce's data platform designed to activate trusted enterprise data across applications and AI agents."] }),
									/* @__PURE__ */ jsx("p", { children: "Salesforce says Data 360 can connect and activate enterprise data, including through Zero Copy integrations, without requiring all data to be physically moved into Salesforce." }),
									/* @__PURE__ */ jsx("p", { children: "For organizations with data spread across multiple systems, connecting relevant information can help create a more complete understanding of customers and business operations." })
								]
							})]
						}),
						/* @__PURE__ */ jsxs("section", {
							id: "integration",
							className: "scroll-mt-24",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
								children: "Salesforce Integration"
							}), /* @__PURE__ */ jsxs("div", {
								className: "space-y-4 leading-relaxed",
								children: [
									/* @__PURE__ */ jsx("p", { children: "Most businesses use multiple applications." }),
									/* @__PURE__ */ jsx("p", { children: "For example, a company may use:" }),
									/* @__PURE__ */ jsx("ul", {
										className: "grid sm:grid-cols-2 gap-2",
										children: [
											"ERP software",
											"Accounting platforms",
											"Marketing tools",
											"E-commerce systems",
											"Communication platforms",
											"Customer support applications",
											"Data warehouses",
											"Business intelligence tools"
										].map((item) => /* @__PURE__ */ jsxs("li", {
											className: "flex items-start gap-2 text-sm",
											children: [/* @__PURE__ */ jsx(FaCheckCircle, { className: "text-sky-500 mt-0.5 flex-shrink-0 text-xs" }), item]
										}, item))
									}),
									/* @__PURE__ */ jsx("p", { children: "Salesforce integration can connect these systems so information can move between platforms more efficiently. A well-designed Salesforce integration strategy can help reduce duplicate data entry, improve data consistency, and create more connected workflows." }),
									/* @__PURE__ */ jsx("p", { children: "In 2026, Salesforce has continued expanding integrations and AI capabilities across external platforms. For example, Salesforce and Google Cloud announced expanded integrations designed to allow AI agents to execute workflows across both ecosystems." })
								]
							})]
						}),
						/* @__PURE__ */ jsxs("section", {
							id: "customization",
							className: "scroll-mt-24",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
								children: "Salesforce Customization"
							}), /* @__PURE__ */ jsxs("div", {
								className: "space-y-4 leading-relaxed",
								children: [
									/* @__PURE__ */ jsx("p", { children: "Every business operates differently. That is why Salesforce can be customized to reflect specific business processes." }),
									/* @__PURE__ */ jsx("p", {
										className: "text-slate-900 font-medium",
										children: "Common Salesforce customization services include:"
									}),
									/* @__PURE__ */ jsx("ul", {
										className: "grid sm:grid-cols-2 gap-2",
										children: [
											"Custom objects",
											"Custom fields",
											"Custom page layouts",
											"Validation rules",
											"Flows",
											"Reports and dashboards",
											"Approval processes",
											"User permissions",
											"Automation",
											"Custom applications"
										].map((item) => /* @__PURE__ */ jsxs("li", {
											className: "flex items-start gap-2 text-sm",
											children: [/* @__PURE__ */ jsx(FaCheckCircle, { className: "text-sky-500 mt-0.5 flex-shrink-0 text-xs" }), item]
										}, item))
									}),
									/* @__PURE__ */ jsx("p", { children: "Customization should be approached strategically. Adding unnecessary complexity can make a Salesforce environment harder to maintain." }),
									/* @__PURE__ */ jsx("p", { children: "A good implementation focuses on solving actual business problems rather than customizing the platform simply because a feature is available." })
								]
							})]
						}),
						/* @__PURE__ */ jsxs("section", {
							id: "implementation",
							className: "scroll-mt-24",
							children: [
								/* @__PURE__ */ jsx("h2", {
									className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
									children: "Salesforce Implementation: What Does It Involve?"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "leading-relaxed mb-6",
									children: "A successful Salesforce implementation involves more than installing software. A typical Salesforce implementation process can include:"
								}),
								/* @__PURE__ */ jsx("div", {
									className: "space-y-3",
									children: [
										{
											title: "Business Requirements Analysis",
											desc: "First, identify the organization's objectives, processes, users, systems, and pain points."
										},
										{
											title: "Salesforce Solution Design",
											desc: "Next, determine how Salesforce should be configured and customized to support those requirements."
										},
										{
											title: "Data Migration",
											desc: "Existing customer, sales, or operational data may need to be cleaned, mapped, transformed, and migrated."
										},
										{
											title: "Salesforce Configuration",
											desc: "Administrators configure objects, fields, workflows, permissions, dashboards, automation, and other platform components."
										},
										{
											title: "Integration",
											desc: "Salesforce can then be connected with other business applications where required."
										},
										{
											title: "Testing",
											desc: "Testing helps identify configuration issues, data problems, integration failures, and workflow errors before launch."
										},
										{
											title: "User Training",
											desc: "Employees need to understand how the new system fits into their daily workflows."
										},
										{
											title: "Deployment",
											desc: "After testing and training, the Salesforce solution can be deployed."
										},
										{
											title: "Continuous Optimization",
											desc: "Salesforce implementation should not necessarily end at launch. Businesses can continuously improve their CRM as requirements, customers, processes, and technologies evolve."
										}
									].map((item, index) => /* @__PURE__ */ jsxs("div", {
										className: "flex gap-4 p-4 rounded-lg bg-slate-50 border border-slate-200",
										children: [/* @__PURE__ */ jsx("div", {
											className: "flex items-center justify-center w-8 h-8 rounded-full bg-sky-500 text-white text-sm font-bold flex-shrink-0",
											children: index + 1
										}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
											className: "text-slate-900 font-semibold mb-1",
											children: item.title
										}), /* @__PURE__ */ jsx("p", {
											className: "text-sm leading-relaxed",
											children: item.desc
										})] })]
									}, index))
								})
							]
						}),
						/* @__PURE__ */ jsxs("section", {
							id: "consulting-partner",
							className: "scroll-mt-24",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
								children: "Why Work With a Salesforce Consulting Partner?"
							}), /* @__PURE__ */ jsxs("div", {
								className: "space-y-4 leading-relaxed",
								children: [
									/* @__PURE__ */ jsx("p", { children: "Salesforce is a powerful platform, but implementing it effectively can require technical expertise and business-process knowledge." }),
									/* @__PURE__ */ jsx("p", {
										className: "text-slate-900 font-medium",
										children: "A Salesforce consulting partner can help organizations with:"
									}),
									/* @__PURE__ */ jsx("ul", {
										className: "grid sm:grid-cols-2 gap-2",
										children: [
											"Salesforce strategy",
											"CRM implementation",
											"Salesforce customization",
											"Salesforce development",
											"Data migration",
											"Salesforce integration",
											"Automation",
											"User training",
											"System optimization",
											"Ongoing support"
										].map((item) => /* @__PURE__ */ jsxs("li", {
											className: "flex items-start gap-2 text-sm",
											children: [/* @__PURE__ */ jsx(FaCheckCircle, { className: "text-sky-500 mt-0.5 flex-shrink-0 text-xs" }), item]
										}, item))
									}),
									/* @__PURE__ */ jsx("p", { children: "The right approach is to start with business objectives and then determine which Salesforce capabilities can support those objectives." }),
									/* @__PURE__ */ jsx("div", {
										className: "p-4 rounded-lg bg-sky-50 border-l-4 border-sky-500",
										children: /* @__PURE__ */ jsxs("p", {
											className: "text-sky-900 text-sm",
											children: [
												"At ",
												/* @__PURE__ */ jsx("strong", { children: "Techcyfy" }),
												", our goal is to help businesses use technology strategically—not simply add another software platform to their technology stack."
											]
										})
									})
								]
							})]
						}),
						/* @__PURE__ */ jsxs("section", {
							id: "cost",
							className: "scroll-mt-24",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
								children: "How Much Does Salesforce CRM Cost?"
							}), /* @__PURE__ */ jsxs("div", {
								className: "space-y-4 leading-relaxed",
								children: [
									/* @__PURE__ */ jsx("p", { children: "Salesforce pricing depends on factors such as:" }),
									/* @__PURE__ */ jsx("ul", {
										className: "grid sm:grid-cols-2 gap-2",
										children: [
											"Product or Salesforce edition",
											"Number of users",
											"Required features",
											"AI capabilities",
											"Data requirements",
											"Integrations",
											"Customization",
											"Implementation complexity",
											"Ongoing support requirements"
										].map((item) => /* @__PURE__ */ jsxs("li", {
											className: "flex items-start gap-2 text-sm",
											children: [/* @__PURE__ */ jsx(FaCheckCircle, { className: "text-sky-500 mt-0.5 flex-shrink-0 text-xs" }), item]
										}, item))
									}),
									/* @__PURE__ */ jsx("p", { children: "Therefore, there is no single Salesforce implementation cost that applies to every business." }),
									/* @__PURE__ */ jsx("p", { children: "Organizations should evaluate total cost based on their actual business requirements rather than choosing a package based solely on the initial subscription price." })
								]
							})]
						}),
						/* @__PURE__ */ jsxs("section", {
							id: "right-for-business",
							className: "scroll-mt-24",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
								children: "Is Salesforce CRM Right for Your Business?"
							}), /* @__PURE__ */ jsxs("div", {
								className: "space-y-4 leading-relaxed",
								children: [
									/* @__PURE__ */ jsx("p", {
										className: "text-slate-900 font-medium",
										children: "Salesforce can be a strong option for organizations that need:"
									}),
									/* @__PURE__ */ jsx("ul", {
										className: "grid sm:grid-cols-2 gap-2",
										children: [
											"A scalable CRM platform",
											"Centralized customer data",
											"Sales pipeline visibility",
											"Business process automation",
											"Advanced reporting",
											"Customer service capabilities",
											"Marketing and commerce connectivity",
											"AI-powered workflows",
											"Enterprise integrations",
											"Custom business processes"
										].map((item) => /* @__PURE__ */ jsxs("li", {
											className: "flex items-start gap-2 text-sm",
											children: [/* @__PURE__ */ jsx(FaCheckCircle, { className: "text-sky-500 mt-0.5 flex-shrink-0 text-xs" }), item]
										}, item))
									}),
									/* @__PURE__ */ jsx("p", { children: "However, choosing a CRM should always depend on the organization's size, goals, budget, processes, technical environment, and future growth plans." }),
									/* @__PURE__ */ jsx("p", {
										className: "text-slate-900",
										children: "The best CRM is not necessarily the one with the most features. It is the one that solves the right business problems and is adopted successfully by the people who use it."
									})
								]
							})]
						}),
						/* @__PURE__ */ jsxs("section", {
							id: "best-practices",
							className: "scroll-mt-24",
							children: [
								/* @__PURE__ */ jsx("h2", {
									className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
									children: "Salesforce CRM Best Practices"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "leading-relaxed mb-6",
									children: "To get the most value from Salesforce, businesses should consider the following best practices."
								}),
								/* @__PURE__ */ jsx("div", {
									className: "space-y-3",
									children: [
										{
											num: "1",
											title: "Define Clear Business Goals",
											desc: "Before implementation, establish measurable objectives."
										},
										{
											num: "2",
											title: "Keep Data Clean",
											desc: "Poor-quality data can reduce the value of any CRM."
										},
										{
											num: "3",
											title: "Avoid Unnecessary Customization",
											desc: "Customize Salesforce when there is a genuine business requirement."
										},
										{
											num: "4",
											title: "Automate Repetitive Work",
											desc: "Identify repetitive processes that can be safely automated."
										},
										{
											num: "5",
											title: "Train Users",
											desc: "User adoption is one of the most important factors in CRM success."
										},
										{
											num: "6",
											title: "Monitor Performance",
											desc: "Use reports and dashboards to measure whether Salesforce is delivering the intended results."
										},
										{
											num: "7",
											title: "Review the System Regularly",
											desc: "Business requirements change. Your Salesforce environment should evolve with them."
										}
									].map((item) => /* @__PURE__ */ jsxs("div", {
										className: "flex gap-3 p-4 rounded-lg bg-slate-50 border border-slate-200",
										children: [/* @__PURE__ */ jsx("span", {
											className: "flex items-center justify-center w-8 h-8 rounded-full bg-sky-500 text-white text-sm font-bold flex-shrink-0",
											children: item.num
										}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
											className: "text-slate-900 font-semibold text-sm mb-1",
											children: item.title
										}), /* @__PURE__ */ jsx("p", {
											className: "text-xs leading-relaxed",
											children: item.desc
										})] })]
									}, item.num))
								})
							]
						}),
						/* @__PURE__ */ jsxs("section", {
							id: "future",
							className: "scroll-mt-24",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
								children: "The Future of Salesforce CRM"
							}), /* @__PURE__ */ jsxs("div", {
								className: "space-y-4 leading-relaxed",
								children: [
									/* @__PURE__ */ jsx("p", { children: "The CRM industry is moving beyond traditional systems of record." }),
									/* @__PURE__ */ jsx("p", { children: "Modern CRM platforms are increasingly combining customer data, automation, analytics, applications, and AI agents." }),
									/* @__PURE__ */ jsx("p", { children: "Salesforce's recent releases demonstrate this shift, with capabilities focused on AI agents, multi-agent orchestration, real-time data, automation, and connected enterprise workflows." }),
									/* @__PURE__ */ jsx("p", { children: "This means the future of Salesforce is not simply about storing customer information." }),
									/* @__PURE__ */ jsxs("p", {
										className: "text-slate-900 font-medium",
										children: ["It is increasingly about helping businesses ", /* @__PURE__ */ jsx("strong", {
											className: "text-sky-600",
											children: "understand data, automate work, assist employees, and take action across the customer lifecycle."
										})]
									}),
									/* @__PURE__ */ jsx("p", { children: "For organizations planning their CRM strategy, this makes it increasingly important to think about Salesforce as a broader business platform rather than simply a sales database." })
								]
							})]
						}),
						/* @__PURE__ */ jsxs("section", {
							id: "faq",
							className: "scroll-mt-24",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
								children: "Frequently Asked Questions About Salesforce CRM"
							}), /* @__PURE__ */ jsx("div", {
								className: "space-y-3",
								children: [
									{
										q: "What is Salesforce CRM?",
										a: "Salesforce CRM is a cloud-based customer relationship management platform that helps organizations manage customer relationships, sales processes, service operations, data, automation, and other business activities."
									},
									{
										q: "What is Salesforce used for?",
										a: "Salesforce can be used for sales, customer service, marketing, commerce, analytics, automation, customer data management, and AI-powered business workflows."
									},
									{
										q: "Is Salesforce a CRM?",
										a: "Yes. Salesforce is one of the world's leading CRM platforms. Salesforce currently describes its platform as an agentic CRM that connects sales, service, marketing, commerce, data, and AI capabilities."
									},
									{
										q: "What is Salesforce Sales Cloud?",
										a: "Sales Cloud is Salesforce's sales CRM solution. Salesforce now refers to it as Agentforce Sales, while documentation and existing implementations may still use the Sales Cloud name."
									},
									{
										q: "What is Agentforce?",
										a: "Agentforce is Salesforce's platform for building and using AI agents that can assist with business processes and perform actions using business context, data, and workflows."
									},
									{
										q: "Can Salesforce be customized?",
										a: "Yes. Salesforce can be configured and customized with objects, fields, automation, workflows, permissions, reports, integrations, and development tools."
									},
									{
										q: "Is Salesforce suitable for small businesses?",
										a: "Yes. Salesforce offers CRM options for businesses of different sizes, including solutions designed for small businesses as well as enterprise organizations."
									},
									{
										q: "How long does Salesforce implementation take?",
										a: "Implementation time varies depending on the number of users, business processes, integrations, data migration requirements, customization, and project scope. A simple implementation may be relatively quick, while complex enterprise deployments can require significantly more planning and development."
									},
									{
										q: "Why hire a Salesforce consulting company?",
										a: "A Salesforce consulting company can help businesses plan, implement, customize, integrate, optimize, and support Salesforce based on their specific business requirements."
									}
								].map((faq, index) => /* @__PURE__ */ jsxs("details", {
									className: "group p-5 rounded-lg bg-slate-50 border border-slate-200 cursor-pointer",
									children: [/* @__PURE__ */ jsxs("summary", {
										className: "flex items-center justify-between text-slate-900 font-semibold list-none",
										children: [/* @__PURE__ */ jsxs("span", {
											className: "flex items-center gap-3 text-sm",
											children: [/* @__PURE__ */ jsx(FaQuestionCircle, { className: "text-sky-500 flex-shrink-0" }), faq.q]
										}), /* @__PURE__ */ jsx("span", {
											className: "text-sky-500 text-xl group-open:rotate-45 transition-transform duration-300 flex-shrink-0",
											children: "+"
										})]
									}), /* @__PURE__ */ jsx("p", {
										className: "mt-4 text-sm leading-relaxed pl-7 text-slate-600",
										children: faq.a
									})]
								}, index))
							})]
						}),
						/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
							className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
							children: "Conclusion: Build a Smarter CRM Strategy With Salesforce"
						}), /* @__PURE__ */ jsxs("div", {
							className: "space-y-4 leading-relaxed",
							children: [
								/* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("strong", {
									className: "text-slate-900",
									children: "Salesforce CRM"
								}), " has evolved from a traditional customer relationship management system into a broader platform connecting customer data, applications, automation, analytics, and AI."] }),
								/* @__PURE__ */ jsx("p", { children: "For businesses, the real value of Salesforce is not simply having another CRM system. The value comes from using customer data and automation to create better processes, improve productivity, strengthen customer relationships, and support sustainable growth." }),
								/* @__PURE__ */ jsxs("p", { children: [
									"Whether your business needs ",
									/* @__PURE__ */ jsx("strong", {
										className: "text-slate-900",
										children: "Salesforce implementation, customization, integration, automation, development, or ongoing CRM support"
									}),
									", choosing the right strategy is essential."
								] })
							]
						})] }),
						/* @__PURE__ */ jsxs("section", {
							className: "p-8 rounded-xl bg-slate-50 border border-slate-200",
							children: [
								/* @__PURE__ */ jsx("h2", {
									className: "text-xl md:text-2xl font-bold text-slate-900 mb-3",
									children: "Ready to improve your CRM strategy?"
								}),
								/* @__PURE__ */ jsxs("p", {
									className: "mb-6",
									children: [
										"Talk to ",
										/* @__PURE__ */ jsx("strong", {
											className: "text-slate-900",
											children: "Techcyfy"
										}),
										" about how Salesforce can be customized around your business goals and processes."
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex flex-wrap gap-3",
									children: [/* @__PURE__ */ jsxs(Link, {
										to: "/contact",
										className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-sky-600 text-white font-semibold hover:bg-sky-700 transition-colors",
										children: ["Contact Techcyfy Today", /* @__PURE__ */ jsx(FaArrowRight, { className: "text-sm" })]
									}), /* @__PURE__ */ jsx(Link, {
										to: "/services",
										className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 transition-colors",
										children: "Explore Our Services"
									})]
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap items-center justify-center gap-6 pt-8 border-t border-slate-200",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2 text-slate-500 text-sm",
									children: [/* @__PURE__ */ jsx(FaShieldAlt, { className: "text-emerald-500" }), /* @__PURE__ */ jsx("span", { children: "Techcyfy Accredited" })]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2 text-slate-500 text-sm",
									children: [/* @__PURE__ */ jsx(FaClock, { className: "text-sky-500" }), /* @__PURE__ */ jsx("span", { children: "10 min read" })]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2 text-slate-500 text-sm",
									children: [/* @__PURE__ */ jsx(FaCheckCircle, { className: "text-emerald-500" }), /* @__PURE__ */ jsx("span", { children: "Expert Reviewed" })]
								})
							]
						})
					]
				})
			})
		]
	});
};
//#endregion
//#region src/Blog/HashiCorpTerraformCertification.jsx
var HashiCorpTerraformCertification = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return /* @__PURE__ */ jsxs("article", {
		className: "min-h-screen bg-white text-slate-700",
		children: [
			/* @__PURE__ */ jsx("section", {
				className: "border-b border-slate-200",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "mb-6 flex items-center gap-2 text-sm text-slate-500",
							children: [
								/* @__PURE__ */ jsx(Link, {
									to: "/",
									className: "hover:text-sky-600 transition-colors",
									children: "Home"
								}),
								/* @__PURE__ */ jsx("span", { children: "/" }),
								/* @__PURE__ */ jsx(Link, {
									to: "/blog",
									className: "hover:text-sky-600 transition-colors",
									children: "Blog"
								}),
								/* @__PURE__ */ jsx("span", { children: "/" }),
								/* @__PURE__ */ jsx("span", {
									className: "text-sky-600",
									children: "Terraform Certification"
								})
							]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mb-6",
							children: /* @__PURE__ */ jsx("span", {
								className: "inline-block px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-semibold uppercase tracking-wider",
								children: "HashiCorp Certification Guide"
							})
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6",
							children: "HashiCorp Terraform Certification: Complete Guide to Terraform Associate 004"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-lg text-slate-600 leading-relaxed",
							children: "Learn everything about HashiCorp Terraform Certification and Terraform Associate 004, including exam topics, eligibility, preparation, career benefits, study plan, and FAQs."
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10",
				children: /* @__PURE__ */ jsxs("div", {
					className: "p-6 rounded-xl bg-slate-50 border border-slate-200",
					children: [/* @__PURE__ */ jsxs("h2", {
						className: "text-base font-bold text-slate-900 mb-4 flex items-center gap-2",
						children: [/* @__PURE__ */ jsx(FaLightbulb, { className: "text-amber-500" }), "Table of Contents"]
					}), /* @__PURE__ */ jsx("nav", {
						className: "grid sm:grid-cols-2 gap-2 text-sm",
						children: [
							{
								id: "what-is-certification",
								label: "What Is Terraform Certification?"
							},
							{
								id: "what-is-terraform",
								label: "What Is Terraform?"
							},
							{
								id: "what-is-associate-004",
								label: "What Is Terraform Associate 004?"
							},
							{
								id: "why-get-certified",
								label: "Why Should You Get Certified?"
							},
							{
								id: "exam-topics",
								label: "Terraform Associate 004 Exam Topics"
							},
							{
								id: "003-vs-004",
								label: "Terraform Associate 003 vs 004"
							},
							{
								id: "preparation-strategy",
								label: "Exam Preparation Strategy"
							},
							{
								id: "study-plan",
								label: "Terraform Certification Study Plan"
							},
							{
								id: "is-it-difficult",
								label: "Is Terraform Certification Difficult?"
							},
							{
								id: "prerequisites",
								label: "Terraform Certification Prerequisites"
							},
							{
								id: "who-should-take",
								label: "Who Should Take the Certification?"
							},
							{
								id: "cert-vs-course",
								label: "Certification vs Terraform Course"
							},
							{
								id: "career-benefits",
								label: "Terraform Certification Career Benefits"
							},
							{
								id: "best-practices",
								label: "Terraform Certification Best Practices"
							},
							{
								id: "after-associate",
								label: "What Comes After Terraform Associate?"
							},
							{
								id: "faq",
								label: "Frequently Asked Questions"
							}
						].map((item) => /* @__PURE__ */ jsxs("a", {
							href: `#${item.id}`,
							className: "flex items-center gap-2 text-slate-600 hover:text-sky-600 transition-colors py-1",
							children: [/* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-sky-500" }), item.label]
						}, item.id))
					})]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20",
				children: /* @__PURE__ */ jsxs("div", {
					className: "space-y-12",
					children: [
						/* @__PURE__ */ jsxs("section", {
							id: "what-is-certification",
							className: "scroll-mt-24",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
								children: "What Is HashiCorp Terraform Certification?"
							}), /* @__PURE__ */ jsxs("div", {
								className: "space-y-4 leading-relaxed",
								children: [
									/* @__PURE__ */ jsx("p", { children: "Infrastructure automation has become an essential skill for modern cloud and DevOps professionals. As organizations increasingly adopt cloud infrastructure, Infrastructure as Code (IaC) helps teams provision, manage, and scale infrastructure using repeatable configuration instead of relying entirely on manual processes." }),
									/* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("strong", {
										className: "text-slate-900",
										children: "HashiCorp Terraform Certification"
									}), " is designed to validate professionals' knowledge and practical understanding of Terraform and infrastructure automation."] }),
									/* @__PURE__ */ jsxs("p", { children: [
										"HashiCorp currently offers two Terraform certification levels: ",
										/* @__PURE__ */ jsx("strong", {
											className: "text-slate-900",
											children: "Terraform Associate (004)"
										}),
										" for foundational Terraform knowledge and ",
										/* @__PURE__ */ jsx("strong", {
											className: "text-slate-900",
											children: "Terraform Authoring and Operations Advanced"
										}),
										" for professionals with advanced production experience."
									] }),
									/* @__PURE__ */ jsxs("p", { children: [
										"For beginners and professionals building their Terraform skills, the ",
										/* @__PURE__ */ jsx("strong", {
											className: "text-slate-900",
											children: "HashiCorp Certified: Terraform Associate (004)"
										}),
										" certification is the primary entry-level credential to consider."
									] }),
									/* @__PURE__ */ jsxs("p", { children: [
										"The current Terraform Associate exam tests ",
										/* @__PURE__ */ jsx("strong", {
											className: "text-slate-900",
											children: "Terraform 1.12"
										}),
										" and focuses on fundamental Terraform and HCP Terraform concepts and skills."
									] }),
									/* @__PURE__ */ jsxs("p", { children: [
										"If you are planning a career in ",
										/* @__PURE__ */ jsx("strong", {
											className: "text-slate-900",
											children: "DevOps, cloud engineering, site reliability engineering (SRE), platform engineering, or infrastructure automation"
										}),
										", Terraform certification can be a valuable addition to your professional profile."
									] })
								]
							})]
						}),
						/* @__PURE__ */ jsxs("section", {
							id: "what-is-terraform",
							className: "scroll-mt-24",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
								children: "What Is Terraform?"
							}), /* @__PURE__ */ jsxs("div", {
								className: "space-y-4 leading-relaxed",
								children: [
									/* @__PURE__ */ jsx("p", { children: "Terraform is an Infrastructure as Code tool that allows engineers to define infrastructure using configuration files." }),
									/* @__PURE__ */ jsx("p", { children: "Instead of manually creating cloud resources through a graphical console, engineers can describe infrastructure in code and use Terraform to create and manage those resources." }),
									/* @__PURE__ */ jsx("p", { children: "Terraform supports infrastructure workflows across multiple cloud and service providers, making it useful for multi-cloud, hybrid-cloud, and service-agnostic infrastructure automation. HashiCorp's Terraform Associate 004 exam specifically includes Infrastructure as Code concepts and Terraform's multi-cloud and hybrid-cloud capabilities." }),
									/* @__PURE__ */ jsx("p", { children: "A simplified Terraform workflow looks like this:" }),
									/* @__PURE__ */ jsx("p", {
										className: "font-semibold text-slate-900",
										children: "Write → Initialize → Plan → Apply → Manage"
									}),
									/* @__PURE__ */ jsx("p", { children: "For example:" }),
									/* @__PURE__ */ jsxs("div", {
										className: "p-4 rounded-lg bg-slate-900 text-slate-100 text-sm font-mono overflow-x-auto",
										children: [
											/* @__PURE__ */ jsx("p", { children: "terraform init" }),
											/* @__PURE__ */ jsx("p", { children: "terraform plan" }),
											/* @__PURE__ */ jsx("p", { children: "terraform apply" })
										]
									}),
									/* @__PURE__ */ jsx("p", { children: "Terraform then uses the configuration, providers, dependency graph, and state to determine how infrastructure should be created or modified." })
								]
							})]
						}),
						/* @__PURE__ */ jsxs("section", {
							id: "what-is-associate-004",
							className: "scroll-mt-24",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
								children: "What Is the Terraform Associate 004 Certification?"
							}), /* @__PURE__ */ jsxs("div", {
								className: "space-y-4 leading-relaxed",
								children: [
									/* @__PURE__ */ jsxs("p", { children: [
										"The ",
										/* @__PURE__ */ jsx("strong", {
											className: "text-slate-900",
											children: "HashiCorp Certified: Terraform Associate (004)"
										}),
										" is an associate-level certification designed to validate foundational Terraform knowledge and skills."
									] }),
									/* @__PURE__ */ jsx("p", { children: "According to HashiCorp, the certification is intended for cloud engineers with foundational Terraform knowledge who can understand Terraform concepts and distinguish capabilities across Terraform offerings." }),
									/* @__PURE__ */ jsx("h3", {
										className: "text-lg font-bold text-slate-900 mt-6 mb-3",
										children: "Current Terraform Associate 004 highlights"
									}),
									/* @__PURE__ */ jsx("ul", {
										className: "space-y-2",
										children: [
											{
												label: "Certification",
												value: "HashiCorp Certified: Terraform Associate (004)"
											},
											{
												label: "Terraform version tested",
												value: "Terraform 1.12"
											},
											{
												label: "Level",
												value: "Associate"
											},
											{
												label: "Exam duration",
												value: "Approximately one hour"
											},
											{
												label: "Format",
												value: "Multiple-choice style assessment"
											},
											{
												label: "Focus",
												value: "Terraform fundamentals, workflows, configuration, modules, state, infrastructure maintenance, and HCP Terraform"
											},
											{
												label: "Recommended background",
												value: "Basic terminal skills and an understanding of on-premises and cloud architecture"
											}
										].map((item) => /* @__PURE__ */ jsxs("li", {
											className: "flex items-start gap-2 text-sm",
											children: [/* @__PURE__ */ jsx(FaCheckCircle, { className: "text-sky-500 mt-0.5 flex-shrink-0" }), /* @__PURE__ */ jsxs("span", { children: [
												/* @__PURE__ */ jsxs("strong", {
													className: "text-slate-900",
													children: [item.label, ":"]
												}),
												" ",
												item.value
											] })]
										}, item.label))
									}),
									/* @__PURE__ */ jsx("p", { children: "HashiCorp also recommends practical experience with Terraform in production, although it notes that candidates can prepare by performing the exam objectives in a personal demonstration environment." })
								]
							})]
						}),
						/* @__PURE__ */ jsxs("section", {
							id: "why-get-certified",
							className: "scroll-mt-24",
							children: [
								/* @__PURE__ */ jsx("h2", {
									className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
									children: "Why Should You Get Terraform Certified?"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "leading-relaxed mb-6",
									children: "A Terraform certification can help demonstrate that you understand fundamental infrastructure automation concepts and know how Terraform is used to manage infrastructure. Here are some of the major benefits."
								}),
								/* @__PURE__ */ jsx("div", {
									className: "space-y-4",
									children: [
										{
											title: "1. Validate Your Terraform Skills",
											desc: "A certification gives employers a standardized way to verify foundational Terraform knowledge. Instead of simply listing Terraform on your resume, you can demonstrate that your knowledge has been assessed through a HashiCorp certification."
										},
										{
											title: "2. Improve Your DevOps Career Opportunities",
											desc: "Terraform is widely associated with modern DevOps and cloud infrastructure workflows. Terraform knowledge can be valuable for roles such as DevOps Engineer, Cloud Engineer, Cloud Administrator, Site Reliability Engineer, Platform Engineer, Infrastructure Engineer, DevSecOps Engineer, Cloud Solutions Architect, and Automation Engineer. Certification does not guarantee employment, but it can strengthen your professional profile when combined with hands-on experience."
										},
										{
											title: "3. Build Infrastructure as Code Expertise",
											desc: "Terraform certification preparation helps you understand important Infrastructure as Code concepts. You learn how Terraform configurations describe infrastructure and how Terraform plans and applies changes. This foundation is useful for organizations seeking repeatable and automated infrastructure management."
										},
										{
											title: "4. Strengthen Your Cloud Engineering Knowledge",
											desc: "Terraform works with cloud providers through providers. Understanding Terraform therefore complements knowledge of platforms such as AWS, Microsoft Azure, and Google Cloud. HashiCorp's official Associate preparation materials recommend completing Terraform fundamentals using a cloud provider of your choice, including AWS, Azure, Google Cloud Platform, or Docker."
										},
										{
											title: "5. Demonstrate Infrastructure Automation Skills",
											desc: "Modern engineering teams increasingly automate infrastructure provisioning and operational workflows. Terraform certification preparation introduces important concepts including providers, resources, data sources, variables, outputs, modules, state, backends, dependency management, infrastructure plans, and HCP Terraform."
										}
									].map((item) => /* @__PURE__ */ jsxs("div", {
										className: "p-5 rounded-lg bg-slate-50 border border-slate-200",
										children: [/* @__PURE__ */ jsx("h3", {
											className: "text-base font-bold text-slate-900 mb-2",
											children: item.title
										}), /* @__PURE__ */ jsx("p", {
											className: "text-sm leading-relaxed",
											children: item.desc
										})]
									}, item.title))
								})
							]
						}),
						/* @__PURE__ */ jsxs("section", {
							id: "exam-topics",
							className: "scroll-mt-24",
							children: [
								/* @__PURE__ */ jsx("h2", {
									className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
									children: "Terraform Associate 004 Exam Topics"
								}),
								/* @__PURE__ */ jsxs("p", {
									className: "leading-relaxed mb-8",
									children: [
										"One of the most important parts of preparing for the Terraform certification exam is understanding the official exam objectives. HashiCorp currently organizes the Terraform Associate 004 objectives into ",
										/* @__PURE__ */ jsx("strong", {
											className: "text-slate-900",
											children: "eight major areas"
										}),
										"."
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "space-y-6",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "p-6 rounded-lg bg-slate-50 border border-slate-200",
											children: [
												/* @__PURE__ */ jsx("h3", {
													className: "text-lg font-bold text-slate-900 mb-3",
													children: "1. Infrastructure as Code With Terraform"
												}),
												/* @__PURE__ */ jsx("p", {
													className: "leading-relaxed text-sm mb-4",
													children: "The first section focuses on Infrastructure as Code fundamentals. You should understand:"
												}),
												/* @__PURE__ */ jsx("ul", {
													className: "grid sm:grid-cols-2 gap-2 mb-4",
													children: [
														"What Infrastructure as Code means",
														"Advantages of IaC",
														"Terraform's role in IaC",
														"Multi-cloud infrastructure",
														"Hybrid-cloud workflows",
														"Service-agnostic infrastructure management"
													].map((item) => /* @__PURE__ */ jsxs("li", {
														className: "flex items-start gap-2 text-sm",
														children: [/* @__PURE__ */ jsx(FaCheckCircle, { className: "text-sky-500 mt-0.5 flex-shrink-0 text-xs" }), item]
													}, item))
												}),
												/* @__PURE__ */ jsx("p", {
													className: "leading-relaxed text-sm",
													children: "The goal is to understand why Terraform is useful—not simply memorize Terraform commands."
												})
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "p-6 rounded-lg bg-slate-50 border border-slate-200",
											children: [
												/* @__PURE__ */ jsx("h3", {
													className: "text-lg font-bold text-slate-900 mb-3",
													children: "2. Terraform Fundamentals"
												}),
												/* @__PURE__ */ jsx("p", {
													className: "leading-relaxed text-sm mb-4",
													children: "The second area covers Terraform fundamentals. Important concepts include:"
												}),
												/* @__PURE__ */ jsx("ul", {
													className: "grid sm:grid-cols-2 gap-2 mb-4",
													children: [
														"Terraform providers",
														"Provider requirements",
														"Provider versions",
														"Dependency lock files",
														"Multiple providers",
														"Terraform state",
														"Provider plugins"
													].map((item) => /* @__PURE__ */ jsxs("li", {
														className: "flex items-start gap-2 text-sm",
														children: [/* @__PURE__ */ jsx(FaCheckCircle, { className: "text-sky-500 mt-0.5 flex-shrink-0 text-xs" }), item]
													}, item))
												}),
												/* @__PURE__ */ jsx("p", {
													className: "leading-relaxed text-sm",
													children: "You should understand how Terraform communicates with infrastructure platforms through providers and how Terraform tracks managed infrastructure using state."
												})
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "p-6 rounded-lg bg-slate-50 border border-slate-200",
											children: [
												/* @__PURE__ */ jsx("h3", {
													className: "text-lg font-bold text-slate-900 mb-3",
													children: "3. Core Terraform Workflow"
												}),
												/* @__PURE__ */ jsx("p", {
													className: "leading-relaxed text-sm mb-4",
													children: "Understanding the Terraform workflow is essential for the Associate exam. The core workflow includes:"
												}),
												/* @__PURE__ */ jsx("div", {
													className: "space-y-4",
													children: [
														{
															cmd: "terraform init",
															desc: "Initializes a Terraform working directory and prepares the configuration for use."
														},
														{
															cmd: "terraform validate",
															desc: "Checks whether the Terraform configuration is syntactically valid and internally consistent."
														},
														{
															cmd: "terraform plan",
															desc: "Creates an execution plan showing proposed infrastructure changes."
														},
														{
															cmd: "terraform apply",
															desc: "Applies the planned infrastructure changes."
														},
														{
															cmd: "terraform destroy",
															desc: "Destroys infrastructure managed by the Terraform configuration."
														},
														{
															cmd: "terraform fmt",
															desc: "Formats Terraform configuration according to Terraform's formatting conventions."
														}
													].map((item) => /* @__PURE__ */ jsxs("div", {
														className: "flex flex-col sm:flex-row sm:items-start gap-2",
														children: [/* @__PURE__ */ jsx("code", {
															className: "inline-block px-2 py-1 rounded bg-slate-900 text-sky-300 text-xs font-mono whitespace-nowrap",
															children: item.cmd
														}), /* @__PURE__ */ jsx("p", {
															className: "text-sm leading-relaxed",
															children: item.desc
														})]
													}, item.cmd))
												}),
												/* @__PURE__ */ jsx("p", {
													className: "leading-relaxed text-sm mt-4",
													children: "HashiCorp's official Associate 004 objectives specifically include initialization, validation, planning, applying, destroying, and formatting Terraform configurations."
												})
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "p-6 rounded-lg bg-slate-50 border border-slate-200",
											children: [
												/* @__PURE__ */ jsx("h3", {
													className: "text-lg font-bold text-slate-900 mb-3",
													children: "4. Terraform Configuration"
												}),
												/* @__PURE__ */ jsx("p", {
													className: "leading-relaxed text-sm mb-4",
													children: "Terraform configuration is another major area of the certification. Candidates should understand Terraform configuration language and concepts including:"
												}),
												/* @__PURE__ */ jsx("ul", {
													className: "grid sm:grid-cols-2 gap-2 mb-4",
													children: [
														"Resources",
														"Data sources",
														"Resource attributes",
														"References",
														"Variables",
														"Outputs",
														"Complex types",
														"Expressions",
														"Functions",
														"Dependencies",
														"Custom conditions",
														"Sensitive data"
													].map((item) => /* @__PURE__ */ jsxs("li", {
														className: "flex items-start gap-2 text-sm",
														children: [/* @__PURE__ */ jsx(FaCheckCircle, { className: "text-sky-500 mt-0.5 flex-shrink-0 text-xs" }), item]
													}, item))
												}),
												/* @__PURE__ */ jsxs("p", {
													className: "leading-relaxed text-sm mb-4",
													children: [
														"Terraform configurations use ",
														/* @__PURE__ */ jsx("strong", {
															className: "text-slate-900",
															children: "HashiCorp Configuration Language (HCL)"
														}),
														". For example:"
													]
												}),
												/* @__PURE__ */ jsxs("div", {
													className: "p-4 rounded-lg bg-slate-900 text-slate-100 text-sm font-mono overflow-x-auto",
													children: [
														/* @__PURE__ */ jsxs("p", { children: ["resource \"example_resource\" \"app\" ", "{"] }),
														/* @__PURE__ */ jsx("p", {
															className: "pl-4",
															children: "name = \"production-app\""
														}),
														/* @__PURE__ */ jsx("p", { children: "}" })
													]
												}),
												/* @__PURE__ */ jsx("p", {
													className: "leading-relaxed text-sm mt-4",
													children: "You should understand how resources are declared and how different parts of a Terraform configuration reference one another. The current 004 objectives also include dependency management, custom conditions, and sensitive-data practices."
												})
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "p-6 rounded-lg bg-slate-50 border border-slate-200",
											children: [
												/* @__PURE__ */ jsx("h3", {
													className: "text-lg font-bold text-slate-900 mb-3",
													children: "5. Terraform Modules"
												}),
												/* @__PURE__ */ jsx("p", {
													className: "leading-relaxed text-sm mb-4",
													children: "Terraform modules allow engineers to organize and reuse configuration. Instead of repeatedly writing the same infrastructure configuration, teams can create reusable modules. Important certification topics include:"
												}),
												/* @__PURE__ */ jsx("ul", {
													className: "grid sm:grid-cols-2 gap-2 mb-4",
													children: [
														"Module sources",
														"Local modules",
														"Registry modules",
														"Module variables",
														"Module outputs",
														"Module composition",
														"Module versioning"
													].map((item) => /* @__PURE__ */ jsxs("li", {
														className: "flex items-start gap-2 text-sm",
														children: [/* @__PURE__ */ jsx(FaCheckCircle, { className: "text-sky-500 mt-0.5 flex-shrink-0 text-xs" }), item]
													}, item))
												}),
												/* @__PURE__ */ jsx("p", {
													className: "leading-relaxed text-sm",
													children: "For organizations managing infrastructure at scale, modules can help standardize infrastructure patterns. HashiCorp's official preparation path specifically recommends studying module composition, Registry modules, local modules, and managing values within modules."
												})
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "p-6 rounded-lg bg-slate-50 border border-slate-200",
											children: [
												/* @__PURE__ */ jsx("h3", {
													className: "text-lg font-bold text-slate-900 mb-3",
													children: "6. Terraform State Management"
												}),
												/* @__PURE__ */ jsx("p", {
													className: "leading-relaxed text-sm mb-4",
													children: "Terraform state is one of the most important concepts for the certification exam. Terraform uses state to map resources in configuration to real-world infrastructure and to track relevant metadata. You should understand:"
												}),
												/* @__PURE__ */ jsx("ul", {
													className: "grid sm:grid-cols-2 gap-2 mb-4",
													children: [
														"Terraform state",
														"Local state",
														"Remote state",
														"Backends",
														"State locking",
														"Resource drift",
														"Refresh-only operations",
														"Moving resources",
														"Removing resources from state",
														"State refactoring"
													].map((item) => /* @__PURE__ */ jsxs("li", {
														className: "flex items-start gap-2 text-sm",
														children: [/* @__PURE__ */ jsx(FaCheckCircle, { className: "text-sky-500 mt-0.5 flex-shrink-0 text-xs" }), item]
													}, item))
												}),
												/* @__PURE__ */ jsx("p", {
													className: "leading-relaxed text-sm mb-4",
													children: "HashiCorp notes that Terraform state helps map real infrastructure to configuration and can be stored locally, remotely, or through HCP Terraform."
												}),
												/* @__PURE__ */ jsx("h4", {
													className: "text-sm font-bold text-slate-900 mb-2",
													children: "Why Is Terraform State Important?"
												}),
												/* @__PURE__ */ jsx("p", {
													className: "leading-relaxed text-sm mb-3",
													children: "Suppose Terraform manages a cloud resource. Terraform needs a way to understand the relationship between:"
												}),
												/* @__PURE__ */ jsx("p", {
													className: "text-sm font-semibold text-slate-900 mb-3",
													children: "Terraform configuration → Terraform state → Real infrastructure"
												}),
												/* @__PURE__ */ jsx("p", {
													className: "leading-relaxed text-sm",
													children: "State provides that relationship. Understanding this concept is essential for anyone working with Terraform professionally."
												})
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "p-6 rounded-lg bg-slate-50 border border-slate-200",
											children: [
												/* @__PURE__ */ jsx("h3", {
													className: "text-lg font-bold text-slate-900 mb-3",
													children: "7. Maintaining Infrastructure With Terraform"
												}),
												/* @__PURE__ */ jsx("p", {
													className: "leading-relaxed text-sm mb-4",
													children: "Terraform is not only used to create infrastructure. It is also used to maintain infrastructure over time. The Associate 004 exam includes topics such as:"
												}),
												/* @__PURE__ */ jsx("ul", {
													className: "grid sm:grid-cols-2 gap-2 mb-4",
													children: [
														"Importing existing infrastructure",
														"Inspecting Terraform state",
														"Terraform state commands",
														"Debugging",
														"Verbose logging",
														"Resource drift"
													].map((item) => /* @__PURE__ */ jsxs("li", {
														className: "flex items-start gap-2 text-sm",
														children: [/* @__PURE__ */ jsx(FaCheckCircle, { className: "text-sky-500 mt-0.5 flex-shrink-0 text-xs" }), item]
													}, item))
												}),
												/* @__PURE__ */ jsx("p", {
													className: "leading-relaxed text-sm mb-3",
													children: "For example:"
												}),
												/* @__PURE__ */ jsx("div", {
													className: "p-4 rounded-lg bg-slate-900 text-slate-100 text-sm font-mono overflow-x-auto mb-3",
													children: /* @__PURE__ */ jsx("p", { children: "terraform state list" })
												}),
												/* @__PURE__ */ jsx("p", {
													className: "leading-relaxed text-sm",
													children: "can be used to inspect resources tracked in Terraform state. Understanding these operational concepts helps you troubleshoot Terraform environments and maintain infrastructure after deployment."
												})
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "p-6 rounded-lg bg-sky-50 border border-sky-200",
											children: [
												/* @__PURE__ */ jsx("h3", {
													className: "text-lg font-bold text-slate-900 mb-3",
													children: "8. HCP Terraform"
												}),
												/* @__PURE__ */ jsx("p", {
													className: "leading-relaxed text-sm mb-4",
													children: "HCP Terraform is another important component of the current Terraform Associate 004 exam. HashiCorp describes HCP Terraform as its hosted service for Terraform. The Associate 004 objectives include:"
												}),
												/* @__PURE__ */ jsx("ul", {
													className: "grid sm:grid-cols-2 gap-2 mb-4",
													children: [
														"Creating infrastructure with HCP Terraform",
														"Collaboration",
														"Governance",
														"Workspaces",
														"Projects",
														"Integrations",
														"Remote operations",
														"Policy enforcement",
														"Variable sets"
													].map((item) => /* @__PURE__ */ jsxs("li", {
														className: "flex items-start gap-2 text-sm",
														children: [/* @__PURE__ */ jsx(FaCheckCircle, { className: "text-sky-500 mt-0.5 flex-shrink-0 text-xs" }), item]
													}, item))
												}),
												/* @__PURE__ */ jsx("p", {
													className: "leading-relaxed text-sm",
													children: "HCP Terraform can provide centralized capabilities for teams that need collaboration and governance around Terraform workflows."
												})
											]
										})
									]
								})
							]
						}),
						/* @__PURE__ */ jsxs("section", {
							id: "003-vs-004",
							className: "scroll-mt-24",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
								children: "Terraform Associate 003 vs 004"
							}), /* @__PURE__ */ jsxs("div", {
								className: "space-y-4 leading-relaxed",
								children: [
									/* @__PURE__ */ jsx("p", { children: "Candidates preparing with older study materials should pay attention to the transition from Terraform Associate 003 to 004." }),
									/* @__PURE__ */ jsxs("p", { children: [
										"The current 004 exam tests ",
										/* @__PURE__ */ jsx("strong", {
											className: "text-slate-900",
											children: "Terraform 1.12"
										}),
										" and includes updated content."
									] }),
									/* @__PURE__ */ jsx("p", {
										className: "text-slate-900 font-medium",
										children: "HashiCorp identifies several notable additions to the 004 exam, including:"
									}),
									/* @__PURE__ */ jsx("ul", {
										className: "space-y-2",
										children: [
											"depends_on and create_before_destroy lifecycle rules",
											"Custom conditions for configuration validation",
											"Ephemeral values and write-only arguments",
											"HCP Terraform workspaces and projects"
										].map((item) => /* @__PURE__ */ jsxs("li", {
											className: "flex items-start gap-2 text-sm",
											children: [/* @__PURE__ */ jsx(FaCheckCircle, { className: "text-sky-500 mt-0.5 flex-shrink-0" }), /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("code", {
												className: "px-1.5 py-0.5 rounded bg-slate-100 text-slate-800 text-xs font-mono",
												children: item
											}) })]
										}, item))
									}),
									/* @__PURE__ */ jsx("p", { children: "The current exam also includes HCP Terraform content." }),
									/* @__PURE__ */ jsx("p", { children: "Therefore, relying exclusively on older Terraform Associate 003 study materials is not an ideal preparation strategy." })
								]
							})]
						}),
						/* @__PURE__ */ jsxs("section", {
							id: "preparation-strategy",
							className: "scroll-mt-24",
							children: [
								/* @__PURE__ */ jsx("h2", {
									className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
									children: "Terraform Associate 004 Exam Preparation Strategy"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "leading-relaxed mb-6",
									children: "Passing the Terraform certification exam is easier when you combine theoretical study with hands-on practice. Here is a practical preparation strategy."
								}),
								/* @__PURE__ */ jsx("div", {
									className: "space-y-4",
									children: [
										{
											step: "Step 1",
											title: "Learn Infrastructure as Code",
											desc: "Start by understanding what IaC is, why organizations use IaC, Terraform's role in IaC, declarative infrastructure, and multi-cloud concepts. Do not begin by memorizing CLI commands. Understand the underlying concepts first."
										},
										{
											step: "Step 2",
											title: "Learn Terraform Fundamentals",
											desc: "Practice terraform init, terraform validate, terraform plan, terraform apply, terraform destroy, and terraform fmt. Understand what each command does and when it should be used."
										},
										{
											step: "Step 3",
											title: "Build a Small Terraform Project",
											desc: "Create a personal Terraform environment. For example, you could build a small cloud infrastructure project involving a network, a compute resource, security configuration, variables, outputs, and a reusable module. The goal is to gain practical experience rather than simply read documentation."
										},
										{
											step: "Step 4",
											title: "Understand Terraform State",
											desc: "Spend extra time learning state files, backends, state locking, remote state, drift, resource addressing, and state commands. State-related concepts are fundamental to understanding how Terraform works."
										},
										{
											step: "Step 5",
											title: "Practice Modules",
											desc: "Create a simple module and reuse it. Learn how variables enter modules, outputs leave modules, modules are sourced, module versions are managed, and registry modules work."
										},
										{
											step: "Step 6",
											title: "Study HCP Terraform",
											desc: "Do not ignore HCP Terraform if you are preparing for the current 004 exam. Review workspaces, projects, remote operations, collaboration, variable sets, governance, policies, and integrations. These are explicitly included in the current Associate 004 objectives."
										},
										{
											step: "Step 7",
											title: "Use Official Practice Questions",
											desc: "HashiCorp provides official sample questions for Terraform Associate 004. The current sample format includes true/false, multiple choice, and multiple-answer questions. Use practice questions to identify weak areas rather than simply memorizing answers."
										}
									].map((item, index) => /* @__PURE__ */ jsxs("div", {
										className: "flex gap-4 p-4 rounded-lg bg-slate-50 border border-slate-200",
										children: [/* @__PURE__ */ jsx("div", {
											className: "flex items-center justify-center w-8 h-8 rounded-full bg-sky-500 text-white text-sm font-bold flex-shrink-0",
											children: index + 1
										}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
											className: "text-slate-900 font-semibold mb-1",
											children: item.title
										}), /* @__PURE__ */ jsx("p", {
											className: "text-sm leading-relaxed",
											children: item.desc
										})] })]
									}, index))
								})
							]
						}),
						/* @__PURE__ */ jsxs("section", {
							id: "study-plan",
							className: "scroll-mt-24",
							children: [
								/* @__PURE__ */ jsx("h2", {
									className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
									children: "Terraform Certification Study Plan"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "leading-relaxed mb-6",
									children: "A structured study schedule can make preparation more manageable."
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "text-lg font-bold text-slate-900 mb-4",
									children: "4-Week Terraform Associate Study Plan"
								}),
								/* @__PURE__ */ jsx("div", {
									className: "space-y-4",
									children: [
										{
											week: "Week 1",
											title: "Terraform Fundamentals",
											topics: [
												"Infrastructure as Code",
												"Terraform architecture",
												"Providers",
												"Resources",
												"State",
												"Terraform CLI",
												"Core workflow"
											]
										},
										{
											week: "Week 2",
											title: "Configuration and Modules",
											topics: [
												"HCL",
												"Variables",
												"Outputs",
												"Data sources",
												"Expressions",
												"Functions",
												"Dependencies",
												"Modules",
												"Module versioning"
											]
										},
										{
											week: "Week 3",
											title: "State and HCP Terraform",
											topics: [
												"State management",
												"Backends",
												"State locking",
												"Drift",
												"Import",
												"Resource management",
												"HCP Terraform",
												"Workspaces",
												"Projects",
												"Governance"
											]
										},
										{
											week: "Week 4",
											title: "Revision and Practice",
											topics: [
												"Official exam objectives",
												"Practice questions",
												"Hands-on labs",
												"Weak-topic revision",
												"Full Terraform workflows",
												"Final review"
											]
										}
									].map((item) => /* @__PURE__ */ jsxs("div", {
										className: "p-5 rounded-lg bg-slate-50 border border-slate-200",
										children: [/* @__PURE__ */ jsxs("h4", {
											className: "text-base font-bold text-slate-900 mb-3",
											children: [
												/* @__PURE__ */ jsxs("span", {
													className: "text-sky-600",
													children: [item.week, ":"]
												}),
												" ",
												item.title
											]
										}), /* @__PURE__ */ jsx("ul", {
											className: "grid sm:grid-cols-2 gap-2",
											children: item.topics.map((topic) => /* @__PURE__ */ jsxs("li", {
												className: "flex items-start gap-2 text-sm",
												children: [/* @__PURE__ */ jsx(FaCheckCircle, { className: "text-sky-500 mt-0.5 flex-shrink-0 text-xs" }), topic]
											}, topic))
										})]
									}, item.week))
								}),
								/* @__PURE__ */ jsx("p", {
									className: "leading-relaxed mt-6",
									children: "HashiCorp provides an official learning path and exam content list that map study resources to the current Associate 004 objectives."
								})
							]
						}),
						/* @__PURE__ */ jsxs("section", {
							id: "is-it-difficult",
							className: "scroll-mt-24",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
								children: "Is Terraform Certification Difficult?"
							}), /* @__PURE__ */ jsxs("div", {
								className: "space-y-4 leading-relaxed",
								children: [
									/* @__PURE__ */ jsx("p", { children: "The difficulty of the Terraform Associate certification depends largely on your previous experience." }),
									/* @__PURE__ */ jsx("p", { children: "For someone who has never used Terraform, the concepts may initially seem challenging." }),
									/* @__PURE__ */ jsx("p", {
										className: "text-slate-900 font-medium",
										children: "For someone with practical experience in:"
									}),
									/* @__PURE__ */ jsx("ul", {
										className: "grid sm:grid-cols-2 gap-2",
										children: [
											"Cloud infrastructure",
											"DevOps",
											"Infrastructure as Code",
											"Linux",
											"Networking",
											"CI/CD"
										].map((item) => /* @__PURE__ */ jsxs("li", {
											className: "flex items-start gap-2 text-sm",
											children: [/* @__PURE__ */ jsx(FaCheckCircle, { className: "text-sky-500 mt-0.5 flex-shrink-0 text-xs" }), item]
										}, item))
									}),
									/* @__PURE__ */ jsx("p", { children: "the certification can be more approachable." }),
									/* @__PURE__ */ jsxs("p", { children: [
										"The most important factor is understanding ",
										/* @__PURE__ */ jsx("strong", {
											className: "text-slate-900",
											children: "why Terraform behaves the way it does"
										}),
										", rather than memorizing commands."
									] }),
									/* @__PURE__ */ jsx("p", { children: "Hands-on practice is especially useful for concepts such as state, providers, modules, dependencies, plans, and resource lifecycle." })
								]
							})]
						}),
						/* @__PURE__ */ jsxs("section", {
							id: "prerequisites",
							className: "scroll-mt-24",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
								children: "Terraform Certification Prerequisites"
							}), /* @__PURE__ */ jsxs("div", {
								className: "space-y-4 leading-relaxed",
								children: [
									/* @__PURE__ */ jsx("p", { children: "HashiCorp lists basic terminal skills and a basic understanding of on-premises and cloud architecture as prerequisites for the Terraform Associate exam." }),
									/* @__PURE__ */ jsx("p", { children: "You do not necessarily need to be an expert cloud engineer before starting." }),
									/* @__PURE__ */ jsx("p", { children: "However, having some familiarity with cloud infrastructure can make Terraform concepts easier to understand." })
								]
							})]
						}),
						/* @__PURE__ */ jsxs("section", {
							id: "who-should-take",
							className: "scroll-mt-24",
							children: [
								/* @__PURE__ */ jsx("h2", {
									className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
									children: "Who Should Take the Terraform Associate Certification?"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "leading-relaxed mb-6",
									children: "The certification can be useful for professionals and learners pursuing careers in:"
								}),
								/* @__PURE__ */ jsx("div", {
									className: "grid md:grid-cols-2 gap-4",
									children: [
										{
											title: "DevOps",
											desc: "Terraform is widely relevant to infrastructure automation and DevOps workflows."
										},
										{
											title: "Cloud Engineering",
											desc: "Cloud engineers can use Terraform to automate infrastructure provisioning and management."
										},
										{
											title: "Site Reliability Engineering",
											desc: "Terraform knowledge can complement SRE practices involving repeatability, automation, and infrastructure management."
										},
										{
											title: "Platform Engineering",
											desc: "Platform teams can use Infrastructure as Code to create standardized infrastructure patterns."
										},
										{
											title: "Infrastructure Engineering",
											desc: "Terraform is directly relevant to infrastructure provisioning and management."
										},
										{
											title: "Cloud Architecture",
											desc: "Terraform knowledge can help architects understand how infrastructure designs can be represented and automated through code."
										}
									].map((item) => /* @__PURE__ */ jsxs("div", {
										className: "p-5 rounded-lg bg-slate-50 border border-slate-200",
										children: [/* @__PURE__ */ jsx("h3", {
											className: "text-base font-bold text-slate-900 mb-2",
											children: item.title
										}), /* @__PURE__ */ jsx("p", {
											className: "text-sm leading-relaxed",
											children: item.desc
										})]
									}, item.title))
								})
							]
						}),
						/* @__PURE__ */ jsxs("section", {
							id: "cert-vs-course",
							className: "scroll-mt-24",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
								children: "Terraform Certification vs Terraform Course"
							}), /* @__PURE__ */ jsxs("div", {
								className: "space-y-4 leading-relaxed",
								children: [
									/* @__PURE__ */ jsxs("p", { children: [
										"A ",
										/* @__PURE__ */ jsx("strong", {
											className: "text-slate-900",
											children: "Terraform course"
										}),
										" and a ",
										/* @__PURE__ */ jsx("strong", {
											className: "text-slate-900",
											children: "Terraform certification"
										}),
										" are not the same thing."
									] }),
									/* @__PURE__ */ jsx("p", { children: "A course is primarily designed to teach you skills." }),
									/* @__PURE__ */ jsx("p", { children: "A certification validates knowledge against a defined assessment." }),
									/* @__PURE__ */ jsx("p", { children: "The ideal approach is often:" }),
									/* @__PURE__ */ jsx("p", {
										className: "text-slate-900 font-semibold",
										children: "Learn → Practice → Build Projects → Review Objectives → Take Practice Questions → Get Certified"
									}),
									/* @__PURE__ */ jsx("p", { children: "At Techcyfy, training and certification preparation can be approached as part of a broader cloud and DevOps learning strategy rather than as an isolated exam goal." })
								]
							})]
						}),
						/* @__PURE__ */ jsxs("section", {
							id: "career-benefits",
							className: "scroll-mt-24",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
								children: "Terraform Certification Career Benefits"
							}), /* @__PURE__ */ jsxs("div", {
								className: "space-y-4 leading-relaxed",
								children: [
									/* @__PURE__ */ jsx("p", { children: "A Terraform certification can complement skills in:" }),
									/* @__PURE__ */ jsx("ul", {
										className: "grid sm:grid-cols-2 gap-2",
										children: [
											"AWS",
											"Microsoft Azure",
											"Google Cloud",
											"Kubernetes",
											"Docker",
											"Git",
											"CI/CD",
											"Linux",
											"Python",
											"DevOps",
											"Cloud security"
										].map((item) => /* @__PURE__ */ jsxs("li", {
											className: "flex items-start gap-2 text-sm",
											children: [/* @__PURE__ */ jsx(FaCheckCircle, { className: "text-sky-500 mt-0.5 flex-shrink-0 text-xs" }), item]
										}, item))
									}),
									/* @__PURE__ */ jsx("p", { children: "Terraform is particularly valuable when combined with hands-on cloud experience." }),
									/* @__PURE__ */ jsx("p", { children: "For example:" }),
									/* @__PURE__ */ jsx("p", {
										className: "text-slate-900 font-semibold",
										children: "AWS + Terraform + Kubernetes + CI/CD"
									}),
									/* @__PURE__ */ jsx("p", { children: "can provide a strong technical foundation for many cloud and DevOps career paths." }),
									/* @__PURE__ */ jsx("p", { children: "The certification itself is not a substitute for real-world experience, but it can provide a recognized credential that supports your broader skill set." })
								]
							})]
						}),
						/* @__PURE__ */ jsxs("section", {
							id: "best-practices",
							className: "scroll-mt-24",
							children: [
								/* @__PURE__ */ jsx("h2", {
									className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
									children: "Terraform Associate Certification Best Practices"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "leading-relaxed mb-6",
									children: "If you are preparing for the exam, keep these recommendations in mind."
								}),
								/* @__PURE__ */ jsx("div", {
									className: "space-y-3",
									children: [
										{
											title: "Focus on Understanding",
											desc: "Do not rely entirely on memorization. Understand Terraform's workflow and architecture."
										},
										{
											title: "Practice in a Real Environment",
											desc: "Create and manage infrastructure instead of only watching tutorials."
										},
										{
											title: "Study the Official Objectives",
											desc: "Use HashiCorp's official exam content list as your preparation checklist."
										},
										{
											title: "Learn State Properly",
											desc: "Terraform state is too important to skip."
										},
										{
											title: "Do Not Ignore HCP Terraform",
											desc: "The current Associate 004 exam includes HCP Terraform topics."
										},
										{
											title: "Use Current Study Materials",
											desc: "Make sure your study resources correspond to Terraform Associate 004 and Terraform 1.12."
										}
									].map((item) => /* @__PURE__ */ jsxs("div", {
										className: "flex gap-3 p-4 rounded-lg bg-slate-50 border border-slate-200",
										children: [/* @__PURE__ */ jsx(FaCheckCircle, { className: "text-sky-500 mt-0.5 flex-shrink-0" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
											className: "text-slate-900 font-semibold text-sm mb-1",
											children: item.title
										}), /* @__PURE__ */ jsx("p", {
											className: "text-xs leading-relaxed",
											children: item.desc
										})] })]
									}, item.title))
								})
							]
						}),
						/* @__PURE__ */ jsxs("section", {
							id: "after-associate",
							className: "scroll-mt-24",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
								children: "What Comes After Terraform Associate?"
							}), /* @__PURE__ */ jsxs("div", {
								className: "space-y-4 leading-relaxed",
								children: [
									/* @__PURE__ */ jsx("p", { children: "Terraform Associate is a foundational certification." }),
									/* @__PURE__ */ jsxs("p", { children: [
										"For professionals who want to demonstrate more advanced Terraform skills, HashiCorp also offers the ",
										/* @__PURE__ */ jsx("strong", {
											className: "text-slate-900",
											children: "Terraform Authoring and Operations Advanced"
										}),
										" certification."
									] }),
									/* @__PURE__ */ jsx("p", { children: "The Advanced certification focuses on advanced configuration authoring, Terraform best practices, scalable workflows, modules, resource lifecycle management, and production-level Terraform operations." }),
									/* @__PURE__ */ jsx("p", { children: "HashiCorp recommends the Terraform Associate certification as a prerequisite, although the Advanced exam is designed for practitioners with substantial production experience." }),
									/* @__PURE__ */ jsx("p", { children: "A possible progression is:" }),
									/* @__PURE__ */ jsx("p", {
										className: "text-slate-900 font-semibold",
										children: "Terraform Fundamentals → Terraform Associate → Real-World Projects → Terraform Advanced"
									})
								]
							})]
						}),
						/* @__PURE__ */ jsxs("section", {
							id: "faq",
							className: "scroll-mt-24",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
								children: "Frequently Asked Questions About HashiCorp Terraform Certification"
							}), /* @__PURE__ */ jsx("div", {
								className: "space-y-3",
								children: [
									{
										q: "What is HashiCorp Terraform Certification?",
										a: "HashiCorp Terraform Certification is a professional credential designed to validate knowledge and skills related to Terraform and infrastructure automation."
									},
									{
										q: "What is Terraform Associate 004?",
										a: "Terraform Associate 004 is HashiCorp's current associate-level Terraform certification exam. It tests Terraform 1.12 and covers Terraform fundamentals, configuration, modules, state, infrastructure maintenance, and HCP Terraform."
									},
									{
										q: "Is Terraform Associate 004 worth it?",
										a: "It can be worthwhile for professionals building careers in cloud, DevOps, infrastructure automation, SRE, or platform engineering. Its value is strongest when combined with practical Terraform and cloud experience."
									},
									{
										q: "Is Terraform certification difficult?",
										a: "The difficulty depends on your Terraform and cloud experience. Hands-on practice can significantly improve your understanding of the exam objectives."
									},
									{
										q: "Do I need coding experience for Terraform?",
										a: "You do not need to be an advanced software developer. However, understanding configuration syntax, command-line tools, variables, expressions, and basic programming concepts can help."
									},
									{
										q: "Which Terraform version does Associate 004 test?",
										a: "The current Terraform Associate 004 exam tests Terraform 1.12."
									},
									{
										q: "What topics are covered in Terraform Associate 004?",
										a: "The exam covers Infrastructure as Code, Terraform fundamentals, the core Terraform workflow, configuration, modules, state management, infrastructure maintenance, and HCP Terraform."
									},
									{
										q: "Is HCP Terraform included in Terraform Associate 004?",
										a: "Yes. HCP Terraform is explicitly included in the current Associate 004 objectives."
									},
									{
										q: "What is the difference between Terraform Associate and Terraform Advanced?",
										a: "Terraform Associate validates foundational Terraform knowledge, while Terraform Authoring and Operations Advanced is designed for practitioners with advanced production experience and deeper expertise in Terraform authoring and operations."
									},
									{
										q: "Can beginners take the Terraform Associate exam?",
										a: "Yes. HashiCorp positions Associate 004 as a foundational certification. Basic terminal skills and an understanding of cloud and on-premises architecture are recommended prerequisites."
									},
									{
										q: "How should I prepare for Terraform Associate 004?",
										a: "Start with Infrastructure as Code and Terraform fundamentals, then practice the core CLI workflow, configuration, modules, state management, infrastructure maintenance, and HCP Terraform. Finally, review HashiCorp's official exam objectives and sample questions."
									}
								].map((faq, index) => /* @__PURE__ */ jsxs("details", {
									className: "group p-5 rounded-lg bg-slate-50 border border-slate-200 cursor-pointer",
									children: [/* @__PURE__ */ jsxs("summary", {
										className: "flex items-center justify-between text-slate-900 font-semibold list-none",
										children: [/* @__PURE__ */ jsxs("span", {
											className: "flex items-center gap-3 text-sm",
											children: [/* @__PURE__ */ jsx(FaQuestionCircle, { className: "text-sky-500 flex-shrink-0" }), faq.q]
										}), /* @__PURE__ */ jsx("span", {
											className: "text-sky-500 text-xl group-open:rotate-45 transition-transform duration-300 flex-shrink-0",
											children: "+"
										})]
									}), /* @__PURE__ */ jsx("p", {
										className: "mt-4 text-sm leading-relaxed pl-7 text-slate-600",
										children: faq.a
									})]
								}, index))
							})]
						}),
						/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
							className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
							children: "Final Thoughts"
						}), /* @__PURE__ */ jsxs("div", {
							className: "space-y-4 leading-relaxed",
							children: [
								/* @__PURE__ */ jsxs("p", { children: [
									"The ",
									/* @__PURE__ */ jsx("strong", {
										className: "text-slate-900",
										children: "HashiCorp Terraform Certification"
									}),
									" can be a valuable credential for professionals building careers in cloud computing, DevOps, infrastructure automation, SRE, and platform engineering."
								] }),
								/* @__PURE__ */ jsxs("p", { children: [
									"The current ",
									/* @__PURE__ */ jsx("strong", {
										className: "text-slate-900",
										children: "Terraform Associate 004"
									}),
									" certification provides a structured way to validate foundational knowledge of Terraform, including Infrastructure as Code, providers, configuration, modules, state, workflows, infrastructure maintenance, and HCP Terraform."
								] }),
								/* @__PURE__ */ jsx("p", { children: "However, certification should be treated as one part of your professional development." }),
								/* @__PURE__ */ jsx("p", { children: "The strongest Terraform professionals combine certification knowledge with hands-on experience building, deploying, troubleshooting, and maintaining real infrastructure." }),
								/* @__PURE__ */ jsxs("p", { children: [
									"If your goal is to build a career in ",
									/* @__PURE__ */ jsx("strong", {
										className: "text-slate-900",
										children: "DevOps or cloud engineering"
									}),
									", learning Terraform alongside AWS, Azure, Google Cloud, Kubernetes, CI/CD, Linux, and cloud security can create a much stronger technical foundation."
								] })
							]
						})] }),
						/* @__PURE__ */ jsxs("section", {
							className: "p-8 rounded-xl bg-slate-50 border border-slate-200",
							children: [
								/* @__PURE__ */ jsx("h2", {
									className: "text-xl md:text-2xl font-bold text-slate-900 mb-3",
									children: "Ready to build your Terraform and DevOps skills?"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mb-6",
									children: "Explore Techcyfy's technology learning resources and discover practical ways to develop the skills required for modern cloud and infrastructure automation careers."
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex flex-wrap gap-3",
									children: [/* @__PURE__ */ jsxs(Link, {
										to: "/contact",
										className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-sky-600 text-white font-semibold hover:bg-sky-700 transition-colors",
										children: ["Contact Techcyfy Today", /* @__PURE__ */ jsx(FaArrowRight, { className: "text-sm" })]
									}), /* @__PURE__ */ jsx(Link, {
										to: "/services",
										className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 transition-colors",
										children: "Explore Our Services"
									})]
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap items-center justify-center gap-6 pt-8 border-t border-slate-200",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2 text-slate-500 text-sm",
									children: [/* @__PURE__ */ jsx(FaShieldAlt, { className: "text-emerald-500" }), /* @__PURE__ */ jsx("span", { children: "Techcyfy Accredited" })]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2 text-slate-500 text-sm",
									children: [/* @__PURE__ */ jsx(FaClock, { className: "text-sky-500" }), /* @__PURE__ */ jsx("span", { children: "12 min read" })]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2 text-slate-500 text-sm",
									children: [/* @__PURE__ */ jsx(FaCheckCircle, { className: "text-emerald-500" }), /* @__PURE__ */ jsx("span", { children: "Expert Reviewed" })]
								})
							]
						})
					]
				})
			})
		]
	});
};
//#endregion
//#region src/Blog/ClaudeCetfification.jsx
var ClaudeCertification = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return /* @__PURE__ */ jsxs("article", {
		className: "min-h-screen bg-white text-slate-700",
		children: [
			/* @__PURE__ */ jsx("section", {
				className: "border-b border-slate-200",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "mb-6 flex items-center gap-2 text-sm text-slate-500",
							children: [
								/* @__PURE__ */ jsx(Link, {
									to: "/",
									className: "hover:text-sky-600 transition-colors",
									children: "Home"
								}),
								/* @__PURE__ */ jsx("span", { children: "/" }),
								/* @__PURE__ */ jsx(Link, {
									to: "/blog",
									className: "hover:text-sky-600 transition-colors",
									children: "Blog"
								}),
								/* @__PURE__ */ jsx("span", { children: "/" }),
								/* @__PURE__ */ jsx("span", {
									className: "text-sky-600",
									children: "Claude Certification"
								})
							]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mb-6",
							children: /* @__PURE__ */ jsx("span", {
								className: "inline-block px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-semibold uppercase tracking-wider",
								children: "Anthropic Claude Certification Guide"
							})
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6",
							children: "Claude Certification: Complete Guide to Anthropic Claude Certification, Training, Exam & Career Benefits"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-lg text-slate-600 leading-relaxed",
							children: "Learn everything about Claude Certification, Anthropic Claude certification, Partner Academy, exam preparation, Claude AI skills, training, career benefits, and certification pathways."
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10",
				children: /* @__PURE__ */ jsxs("div", {
					className: "p-6 rounded-xl bg-slate-50 border border-slate-200",
					children: [/* @__PURE__ */ jsxs("h2", {
						className: "text-base font-bold text-slate-900 mb-4 flex items-center gap-2",
						children: [/* @__PURE__ */ jsx(FaLightbulb, { className: "text-amber-500" }), "Table of Contents"]
					}), /* @__PURE__ */ jsx("nav", {
						className: "grid sm:grid-cols-2 gap-2 text-sm",
						children: [
							{
								id: "what-is-claude-certification",
								label: "What Is Claude Certification?"
							},
							{
								id: "what-is-claude",
								label: "What Is Anthropic Claude?"
							},
							{
								id: "why-important",
								label: "Why Is Claude Certification Important?"
							},
							{
								id: "who-should-get",
								label: "Who Should Get Claude Certification?"
							},
							{
								id: "skills",
								label: "Claude Certification Skills to Learn"
							},
							{
								id: "exam",
								label: "Claude Certification Exam"
							},
							{
								id: "preparation",
								label: "How to Prepare for Claude Certification"
							},
							{
								id: "study-plan",
								label: "Claude Certification Study Plan"
							},
							{
								id: "cert-vs-course",
								label: "Claude Certification vs Claude Course"
							},
							{
								id: "worth-it",
								label: "Is Claude Certification Worth It?"
							},
							{
								id: "career",
								label: "Claude Certification Career Opportunities"
							},
							{
								id: "portfolio",
								label: "Claude Certification Portfolio Projects"
							},
							{
								id: "mistakes",
								label: "Common Preparation Mistakes"
							},
							{
								id: "faq",
								label: "Claude Certification FAQs"
							}
						].map((item) => /* @__PURE__ */ jsxs("a", {
							href: `#${item.id}`,
							className: "flex items-center gap-2 text-slate-600 hover:text-sky-600 transition-colors py-1",
							children: [/* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-sky-500" }), item.label]
						}, item.id))
					})]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20",
				children: /* @__PURE__ */ jsxs("div", {
					className: "space-y-12",
					children: [
						/* @__PURE__ */ jsxs("section", {
							id: "what-is-claude-certification",
							className: "scroll-mt-24",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
								children: "What Is Claude Certification?"
							}), /* @__PURE__ */ jsxs("div", {
								className: "space-y-4 leading-relaxed",
								children: [
									/* @__PURE__ */ jsx("p", { children: "Artificial intelligence is rapidly becoming an essential part of modern business and technology. Companies are using generative AI to develop software, automate workflows, analyze information, improve customer experiences, and increase employee productivity." }),
									/* @__PURE__ */ jsx("p", { children: "As organizations move from experimenting with AI to deploying it in real business environments, professionals need practical skills to build, integrate, manage, and evaluate AI systems." }),
									/* @__PURE__ */ jsxs("p", { children: [
										"This is where ",
										/* @__PURE__ */ jsx("strong", {
											className: "text-slate-900",
											children: "Claude Certification"
										}),
										" can become valuable."
									] }),
									/* @__PURE__ */ jsxs("p", { children: [
										"Claude is Anthropic's family of AI models and products, and Anthropic has developed a professional certification ecosystem through its partner network and ",
										/* @__PURE__ */ jsx("strong", {
											className: "text-slate-900",
											children: "Anthropic Partner Academy"
										}),
										". Anthropic states that its partner organizations can access certification exams through Partner Academy and that certifications are earned by individual practitioners."
									] }),
									/* @__PURE__ */ jsxs("p", { children: [
										"In June 2026, Anthropic reported that more than ",
										/* @__PURE__ */ jsx("strong", {
											className: "text-slate-900",
											children: "10,000 consultants had earned a Claude certification"
										}),
										", demonstrating the growing demand for professionals who can help organizations deploy Claude in production environments."
									] }),
									/* @__PURE__ */ jsxs("p", { children: [
										"This complete guide explains ",
										/* @__PURE__ */ jsx("strong", {
											className: "text-slate-900",
											children: "Claude Certification"
										}),
										", who it is for, what skills you should develop, how to prepare, career opportunities, and how Claude expertise can support an AI career."
									] })
								]
							})]
						}),
						/* @__PURE__ */ jsxs("section", {
							id: "what-is-claude",
							className: "scroll-mt-24",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
								children: "What Is Anthropic Claude?"
							}), /* @__PURE__ */ jsxs("div", {
								className: "space-y-4 leading-relaxed",
								children: [
									/* @__PURE__ */ jsx("p", { children: "Claude is Anthropic's generative AI assistant and model family designed for tasks such as writing, analysis, coding, research, reasoning, and working with complex information." }),
									/* @__PURE__ */ jsx("p", { children: "Claude can be used through Anthropic's products and developer platforms, allowing individuals and organizations to incorporate AI into everyday workflows and software applications." }),
									/* @__PURE__ */ jsx("p", { children: "For technology professionals, Claude is particularly relevant because it can be used beyond basic conversational AI." }),
									/* @__PURE__ */ jsx("p", {
										className: "text-slate-900 font-medium",
										children: "Developers can use Claude for:"
									}),
									/* @__PURE__ */ jsx("ul", {
										className: "grid sm:grid-cols-2 gap-2",
										children: [
											"Software development",
											"Code analysis",
											"Debugging",
											"Documentation",
											"Research",
											"Data analysis",
											"Content generation",
											"Workflow automation",
											"AI application development",
											"Agentic workflows"
										].map((item) => /* @__PURE__ */ jsxs("li", {
											className: "flex items-start gap-2 text-sm",
											children: [/* @__PURE__ */ jsx(FaCheckCircle, { className: "text-sky-500 mt-0.5 flex-shrink-0 text-xs" }), item]
										}, item))
									}),
									/* @__PURE__ */ jsx("p", { children: "This makes Claude knowledge increasingly relevant to developers, AI engineers, consultants, cloud professionals, and technology teams." })
								]
							})]
						}),
						/* @__PURE__ */ jsxs("section", {
							id: "what-is-claude-certification-2",
							className: "scroll-mt-24",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
								children: "What Is Claude Certification?"
							}), /* @__PURE__ */ jsxs("div", {
								className: "space-y-4 leading-relaxed",
								children: [
									/* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("strong", {
										className: "text-slate-900",
										children: "Claude Certification"
									}), " refers to Anthropic's professional certification pathway for individuals who demonstrate relevant Claude knowledge and capabilities."] }),
									/* @__PURE__ */ jsxs("p", { children: [
										"Anthropic's current public information connects Claude certifications with its ",
										/* @__PURE__ */ jsx("strong", {
											className: "text-slate-900",
											children: "Partner Academy"
										}),
										" and partner ecosystem. Anthropic explains that certified practitioners are individuals who have earned certification through Partner Academy exams and have relevant experience using Claude."
									] }),
									/* @__PURE__ */ jsx("p", { children: "This is an important distinction." }),
									/* @__PURE__ */ jsx("p", { children: "Claude certification should not be confused with simply completing an online Claude course or receiving a certificate of course completion." }),
									/* @__PURE__ */ jsx("p", { children: "A professional certification is intended to demonstrate validated knowledge and skills." }),
									/* @__PURE__ */ jsxs("p", { children: [
										"For anyone researching ",
										/* @__PURE__ */ jsx("strong", {
											className: "text-slate-900",
											children: "Claude AI certification"
										}),
										", it is therefore important to check Anthropic's current eligibility and certification availability rather than relying on outdated third-party claims."
									] })
								]
							})]
						}),
						/* @__PURE__ */ jsxs("section", {
							id: "why-important",
							className: "scroll-mt-24",
							children: [
								/* @__PURE__ */ jsx("h2", {
									className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
									children: "Why Is Claude Certification Important?"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "leading-relaxed mb-6",
									children: "The demand for generative AI skills is increasing as organizations integrate AI into software, operations, customer service, research, and business processes. Claude certification can potentially help professionals demonstrate that they have invested in developing practical Claude expertise."
								}),
								/* @__PURE__ */ jsx("div", {
									className: "space-y-4",
									children: [
										{
											title: "1. Validate Your AI Skills",
											desc: "Certification can provide formal recognition of your knowledge and learning. Rather than simply listing 'Claude' as a skill on a resume, an applicable Anthropic certification can provide additional evidence of professional development."
										},
										{
											title: "2. Build a Generative AI Career",
											desc: "Claude skills can complement careers in artificial intelligence, machine learning, software engineering, cloud computing, DevOps, data engineering, solutions architecture, AI consulting, and product management. Generative AI is becoming a cross-functional technology rather than a skill limited to dedicated AI researchers."
										},
										{
											title: "3. Develop Enterprise AI Expertise",
											desc: "Enterprise AI requires more than prompting. Professionals need to understand AI application architecture, APIs, data, security, evaluation, automation, AI agents, governance, and business workflows. Developing these skills alongside Claude expertise can make professionals more valuable in enterprise AI projects."
										}
									].map((item) => /* @__PURE__ */ jsxs("div", {
										className: "p-5 rounded-lg bg-slate-50 border border-slate-200",
										children: [/* @__PURE__ */ jsx("h3", {
											className: "text-base font-bold text-slate-900 mb-2",
											children: item.title
										}), /* @__PURE__ */ jsx("p", {
											className: "text-sm leading-relaxed",
											children: item.desc
										})]
									}, item.title))
								})
							]
						}),
						/* @__PURE__ */ jsxs("section", {
							id: "who-should-get",
							className: "scroll-mt-24",
							children: [
								/* @__PURE__ */ jsx("h2", {
									className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
									children: "Who Should Get Claude Certification?"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "leading-relaxed mb-6",
									children: "Claude certification-related training can be useful for several types of technology professionals."
								}),
								/* @__PURE__ */ jsx("div", {
									className: "grid md:grid-cols-2 gap-4",
									children: [
										{
											title: "Software Developers",
											desc: "Developers can use Claude for coding, debugging, testing, documentation, and AI application development."
										},
										{
											title: "AI Engineers",
											desc: "AI engineers can build applications and workflows using Claude models and Anthropic's developer tools."
										},
										{
											title: "DevOps Engineers",
											desc: "DevOps professionals can explore AI-assisted automation, troubleshooting, documentation, and development workflows."
										},
										{
											title: "Cloud Engineers",
											desc: "Cloud professionals can integrate Claude-powered applications into cloud environments."
										},
										{
											title: "AI Consultants",
											desc: "Consultants can help organizations identify Claude use cases and implement AI solutions."
										},
										{
											title: "Solutions Architects",
											desc: "Architects can design secure and scalable systems that integrate Claude with enterprise applications."
										},
										{
											title: "Technical Product Managers",
											desc: "Product managers can use Claude expertise to identify AI-powered product opportunities."
										},
										{
											title: "Business Professionals",
											desc: "Non-technical professionals can also benefit from understanding how Claude can improve research, documentation, analysis, communication, and workflow automation."
										}
									].map((item) => /* @__PURE__ */ jsxs("div", {
										className: "p-5 rounded-lg bg-slate-50 border border-slate-200",
										children: [/* @__PURE__ */ jsx("h3", {
											className: "text-base font-bold text-slate-900 mb-2",
											children: item.title
										}), /* @__PURE__ */ jsx("p", {
											className: "text-sm leading-relaxed",
											children: item.desc
										})]
									}, item.title))
								})
							]
						}),
						/* @__PURE__ */ jsxs("section", {
							id: "skills",
							className: "scroll-mt-24",
							children: [
								/* @__PURE__ */ jsx("h2", {
									className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
									children: "Claude Certification Skills You Should Learn"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "leading-relaxed mb-8",
									children: "If you are preparing for a Claude certification pathway or simply want to become highly skilled with Claude, focus on more than basic prompting."
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "space-y-6",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "p-6 rounded-lg bg-slate-50 border border-slate-200",
											children: [
												/* @__PURE__ */ jsx("h3", {
													className: "text-lg font-bold text-slate-900 mb-3",
													children: "1. Claude Fundamentals"
												}),
												/* @__PURE__ */ jsx("p", {
													className: "leading-relaxed text-sm mb-4",
													children: "Start with the fundamentals of generative AI. Learn:"
												}),
												/* @__PURE__ */ jsx("ul", {
													className: "grid sm:grid-cols-2 gap-2 mb-4",
													children: [
														"Large language models",
														"Generative AI",
														"Context",
														"Tokens",
														"Prompting",
														"Model limitations",
														"Hallucinations",
														"AI safety",
														"AI evaluation"
													].map((item) => /* @__PURE__ */ jsxs("li", {
														className: "flex items-start gap-2 text-sm",
														children: [/* @__PURE__ */ jsx(FaCheckCircle, { className: "text-sky-500 mt-0.5 flex-shrink-0 text-xs" }), item]
													}, item))
												}),
												/* @__PURE__ */ jsx("p", {
													className: "leading-relaxed text-sm",
													children: "A strong foundation helps you understand why AI systems behave differently depending on the task, context, instructions, and available tools."
												})
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "p-6 rounded-lg bg-slate-50 border border-slate-200",
											children: [
												/* @__PURE__ */ jsx("h3", {
													className: "text-lg font-bold text-slate-900 mb-3",
													children: "2. Prompt Engineering"
												}),
												/* @__PURE__ */ jsx("p", {
													className: "leading-relaxed text-sm mb-4",
													children: "Prompt engineering is one of the most practical Claude skills. A good prompt should clearly communicate:"
												}),
												/* @__PURE__ */ jsx("ul", {
													className: "grid sm:grid-cols-2 gap-2 mb-4",
													children: [
														"The task",
														"Relevant context",
														"Constraints",
														"Expected output",
														"Desired format",
														"Evaluation criteria"
													].map((item) => /* @__PURE__ */ jsxs("li", {
														className: "flex items-start gap-2 text-sm",
														children: [/* @__PURE__ */ jsx(FaCheckCircle, { className: "text-sky-500 mt-0.5 flex-shrink-0 text-xs" }), item]
													}, item))
												}),
												/* @__PURE__ */ jsx("p", {
													className: "leading-relaxed text-sm mb-3",
													children: "For example, instead of asking:"
												}),
												/* @__PURE__ */ jsx("blockquote", {
													className: "border-l-4 border-sky-300 bg-sky-50 p-3 text-sm italic text-slate-600 mb-3",
													children: "\"Summarize this document.\""
												}),
												/* @__PURE__ */ jsx("p", {
													className: "leading-relaxed text-sm mb-3",
													children: "A more effective instruction might specify:"
												}),
												/* @__PURE__ */ jsx("blockquote", {
													className: "border-l-4 border-sky-300 bg-sky-50 p-3 text-sm italic text-slate-600 mb-3",
													children: "\"Summarize this document for a senior technology manager. Identify the three most important business risks, provide supporting evidence from the document, and present the result in a table.\""
												}),
												/* @__PURE__ */ jsx("p", {
													className: "leading-relaxed text-sm",
													children: "The second approach gives Claude clearer objectives and output requirements. However, professional Claude expertise goes beyond writing prompts. You should also understand how to evaluate whether the resulting output is actually correct and useful."
												})
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "p-6 rounded-lg bg-slate-50 border border-slate-200",
											children: [
												/* @__PURE__ */ jsx("h3", {
													className: "text-lg font-bold text-slate-900 mb-3",
													children: "3. Anthropic API"
												}),
												/* @__PURE__ */ jsxs("p", {
													className: "leading-relaxed text-sm mb-4",
													children: [
														"For developers, learning the ",
														/* @__PURE__ */ jsx("strong", {
															className: "text-slate-900",
															children: "Anthropic API"
														}),
														" is an important step toward professional Claude development. API knowledge can help developers build Claude into their own applications rather than using Claude only through a chat interface. Important concepts include:"
													]
												}),
												/* @__PURE__ */ jsx("ul", {
													className: "grid sm:grid-cols-2 gap-2 mb-4",
													children: [
														"API requests",
														"Authentication",
														"Messages",
														"System instructions",
														"Input and output",
														"Streaming",
														"Tool use",
														"Error handling",
														"Rate limits",
														"Application security"
													].map((item) => /* @__PURE__ */ jsxs("li", {
														className: "flex items-start gap-2 text-sm",
														children: [/* @__PURE__ */ jsx(FaCheckCircle, { className: "text-sky-500 mt-0.5 flex-shrink-0 text-xs" }), item]
													}, item))
												}),
												/* @__PURE__ */ jsx("p", {
													className: "leading-relaxed text-sm mb-3",
													children: "A typical architecture might look like:"
												}),
												/* @__PURE__ */ jsxs("div", {
													className: "p-4 rounded-lg bg-slate-900 text-slate-100 text-sm font-mono overflow-x-auto mb-3",
													children: [
														/* @__PURE__ */ jsx("p", { children: "User" }),
														/* @__PURE__ */ jsx("p", {
															className: "pl-2",
															children: "↓"
														}),
														/* @__PURE__ */ jsx("p", { children: "Your Application" }),
														/* @__PURE__ */ jsx("p", {
															className: "pl-2",
															children: "↓"
														}),
														/* @__PURE__ */ jsx("p", { children: "Anthropic API" }),
														/* @__PURE__ */ jsx("p", {
															className: "pl-2",
															children: "↓"
														}),
														/* @__PURE__ */ jsx("p", { children: "Claude" }),
														/* @__PURE__ */ jsx("p", {
															className: "pl-2",
															children: "↓"
														}),
														/* @__PURE__ */ jsx("p", { children: "Response / Tool Call" }),
														/* @__PURE__ */ jsx("p", {
															className: "pl-2",
															children: "↓"
														}),
														/* @__PURE__ */ jsx("p", { children: "Your Application" }),
														/* @__PURE__ */ jsx("p", {
															className: "pl-2",
															children: "↓"
														}),
														/* @__PURE__ */ jsx("p", { children: "User" })
													]
												}),
												/* @__PURE__ */ jsx("p", {
													className: "leading-relaxed text-sm",
													children: "Understanding this architecture is particularly useful for AI engineers and software developers."
												})
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "p-6 rounded-lg bg-slate-50 border border-slate-200",
											children: [
												/* @__PURE__ */ jsx("h3", {
													className: "text-lg font-bold text-slate-900 mb-3",
													children: "4. Claude Code"
												}),
												/* @__PURE__ */ jsxs("p", {
													className: "leading-relaxed text-sm mb-4",
													children: [
														"AI-assisted software development is another important part of the Claude ecosystem. ",
														/* @__PURE__ */ jsx("strong", {
															className: "text-slate-900",
															children: "Claude Code"
														}),
														" is designed to help developers work with software projects and codebases. Developers can use Claude Code for tasks such as:"
													]
												}),
												/* @__PURE__ */ jsx("ul", {
													className: "grid sm:grid-cols-2 gap-2 mb-4",
													children: [
														"Understanding existing code",
														"Writing code",
														"Refactoring",
														"Debugging",
														"Creating tests",
														"Reviewing code",
														"Working through development tasks"
													].map((item) => /* @__PURE__ */ jsxs("li", {
														className: "flex items-start gap-2 text-sm",
														children: [/* @__PURE__ */ jsx(FaCheckCircle, { className: "text-sky-500 mt-0.5 flex-shrink-0 text-xs" }), item]
													}, item))
												}),
												/* @__PURE__ */ jsxs("p", {
													className: "leading-relaxed text-sm",
													children: [
														"For developers pursuing an AI-focused career, combining ",
														/* @__PURE__ */ jsx("strong", {
															className: "text-slate-900",
															children: "Claude Code + software engineering + API development"
														}),
														" can create a valuable technical skill set."
													]
												})
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "p-6 rounded-lg bg-slate-50 border border-slate-200",
											children: [
												/* @__PURE__ */ jsx("h3", {
													className: "text-lg font-bold text-slate-900 mb-3",
													children: "5. AI Agents"
												}),
												/* @__PURE__ */ jsx("p", {
													className: "leading-relaxed text-sm mb-4",
													children: "Generative AI is moving beyond simple chat interfaces. Modern AI applications can use agents and tools to perform multi-step tasks. For example, an AI agent could:"
												}),
												/* @__PURE__ */ jsx("ol", {
													className: "space-y-2 mb-4",
													children: [
														"Receive a user request",
														"Understand the task",
														"Retrieve relevant information",
														"Select an appropriate tool",
														"Call an external system",
														"Analyze the result",
														"Perform another action",
														"Generate a final response"
													].map((item, index) => /* @__PURE__ */ jsxs("li", {
														className: "flex items-start gap-2 text-sm",
														children: [/* @__PURE__ */ jsx("span", {
															className: "flex items-center justify-center w-5 h-5 rounded-full bg-sky-500 text-white text-xs font-bold flex-shrink-0",
															children: index + 1
														}), item]
													}, item))
												}),
												/* @__PURE__ */ jsx("p", {
													className: "leading-relaxed text-sm mb-3",
													children: "This type of workflow requires more than prompt engineering. It requires understanding:"
												}),
												/* @__PURE__ */ jsx("ul", {
													className: "grid sm:grid-cols-2 gap-2",
													children: [
														"Tool use",
														"APIs",
														"Workflow design",
														"Permissions",
														"State",
														"Evaluation",
														"Security",
														"Error handling"
													].map((item) => /* @__PURE__ */ jsxs("li", {
														className: "flex items-start gap-2 text-sm",
														children: [/* @__PURE__ */ jsx(FaCheckCircle, { className: "text-sky-500 mt-0.5 flex-shrink-0 text-xs" }), item]
													}, item))
												}),
												/* @__PURE__ */ jsx("p", {
													className: "leading-relaxed text-sm mt-4",
													children: "AI agent knowledge is therefore an important skill for professionals working on advanced Claude applications."
												})
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "p-6 rounded-lg bg-slate-50 border border-slate-200",
											children: [
												/* @__PURE__ */ jsx("h3", {
													className: "text-lg font-bold text-slate-900 mb-3",
													children: "6. AI Evaluation"
												}),
												/* @__PURE__ */ jsx("p", {
													className: "leading-relaxed text-sm mb-4",
													children: "AI systems must be evaluated before they are trusted with important business tasks. Professionals should understand how to evaluate Claude applications for:"
												}),
												/* @__PURE__ */ jsx("ul", {
													className: "grid sm:grid-cols-2 gap-2 mb-4",
													children: [
														"Accuracy",
														"Relevance",
														"Consistency",
														"Safety",
														"Reliability",
														"Latency",
														"Cost",
														"Failure rates",
														"Tool selection",
														"User experience"
													].map((item) => /* @__PURE__ */ jsxs("li", {
														className: "flex items-start gap-2 text-sm",
														children: [/* @__PURE__ */ jsx(FaCheckCircle, { className: "text-sky-500 mt-0.5 flex-shrink-0 text-xs" }), item]
													}, item))
												}),
												/* @__PURE__ */ jsx("p", {
													className: "leading-relaxed text-sm",
													children: "For example, if an AI customer-support assistant answers 95% of questions correctly but gives dangerous answers to the remaining 5%, the system may require additional safeguards before production deployment. Evaluation should therefore be part of the AI development process."
												})
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "p-6 rounded-lg bg-sky-50 border border-sky-200",
											children: [
												/* @__PURE__ */ jsx("h3", {
													className: "text-lg font-bold text-slate-900 mb-3",
													children: "7. AI Security"
												}),
												/* @__PURE__ */ jsx("p", {
													className: "leading-relaxed text-sm mb-4",
													children: "Security is especially important when Claude is connected to company data or external tools. Professionals should understand risks such as:"
												}),
												/* @__PURE__ */ jsx("ul", {
													className: "grid sm:grid-cols-2 gap-2 mb-4",
													children: [
														"Prompt injection",
														"Sensitive information exposure",
														"Unauthorized tool access",
														"Data leakage",
														"Excessive permissions",
														"Insecure APIs",
														"Unsafe automation",
														"Unvalidated AI outputs"
													].map((item) => /* @__PURE__ */ jsxs("li", {
														className: "flex items-start gap-2 text-sm",
														children: [/* @__PURE__ */ jsx(FaCheckCircle, { className: "text-sky-500 mt-0.5 flex-shrink-0 text-xs" }), item]
													}, item))
												}),
												/* @__PURE__ */ jsx("p", {
													className: "leading-relaxed text-sm",
													children: "An AI assistant that can access business systems should never be given unrestricted permissions without appropriate controls."
												})
											]
										})
									]
								})
							]
						}),
						/* @__PURE__ */ jsxs("section", {
							id: "exam",
							className: "scroll-mt-24",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
								children: "Claude Certification Exam: What You Need to Know"
							}), /* @__PURE__ */ jsxs("div", {
								className: "space-y-4 leading-relaxed",
								children: [
									/* @__PURE__ */ jsxs("p", { children: ["One of the most common searches around this topic is ", /* @__PURE__ */ jsx("strong", {
										className: "text-slate-900",
										children: "\"Claude certification exam.\""
									})] }),
									/* @__PURE__ */ jsxs("p", { children: [
										"Anthropic confirms that its partner ecosystem includes certification exams through ",
										/* @__PURE__ */ jsx("strong", {
											className: "text-slate-900",
											children: "Anthropic Partner Academy"
										}),
										". The certification is earned by individual practitioners."
									] }),
									/* @__PURE__ */ jsx("p", { children: "However, candidates should be careful when reading third-party articles that publish specific claims about:" }),
									/* @__PURE__ */ jsx("ul", {
										className: "grid sm:grid-cols-2 gap-2",
										children: [
											"Exam question counts",
											"Exam duration",
											"Exam price",
											"Passing score",
											"Universal eligibility",
											"Public registration",
											"Certification expiration"
										].map((item) => /* @__PURE__ */ jsxs("li", {
											className: "flex items-start gap-2 text-sm",
											children: [/* @__PURE__ */ jsx(FaCheckCircle, { className: "text-sky-500 mt-0.5 flex-shrink-0 text-xs" }), item]
										}, item))
									}),
									/* @__PURE__ */ jsx("p", { children: "These details can change and may depend on the applicable Anthropic certification pathway." }),
									/* @__PURE__ */ jsx("p", { children: "Therefore, before registering, always verify the current information directly through Anthropic's official certification and partner resources." }),
									/* @__PURE__ */ jsx("p", { children: "This approach is safer than relying on outdated Claude certification blogs or unofficial practice-test websites." })
								]
							})]
						}),
						/* @__PURE__ */ jsxs("section", {
							id: "preparation",
							className: "scroll-mt-24",
							children: [
								/* @__PURE__ */ jsx("h2", {
									className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
									children: "How to Prepare for Claude Certification"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "leading-relaxed mb-6",
									children: "A strong preparation strategy should combine theoretical knowledge, hands-on practice, and real-world projects."
								}),
								/* @__PURE__ */ jsx("div", {
									className: "space-y-4",
									children: [
										{
											step: "Step 1",
											title: "Learn Generative AI Fundamentals",
											desc: "Understand LLMs, generative AI, prompting, context, tokens, AI limitations, hallucinations, and responsible AI."
										},
										{
											step: "Step 2",
											title: "Become an Advanced Claude User",
											desc: "Use Claude for different tasks. Practice summarization, research, classification, data extraction, content generation, code generation, code analysis, and document analysis. The objective is to understand when Claude performs well and where additional controls are necessary."
										},
										{
											step: "Step 3",
											title: "Learn Prompt Engineering",
											desc: "Create prompts with clear instructions, context, examples, constraints, output formats, and evaluation criteria. Compare different prompts and measure how output quality changes."
										},
										{
											step: "Step 4",
											title: "Learn the Anthropic API",
											desc: "If you are a developer, build small applications using the Anthropic API. Start with a simple project before moving toward complex AI agents."
										},
										{
											step: "Step 5",
											title: "Build a Claude Project",
											desc: "A portfolio project can help turn theoretical knowledge into practical expertise. For example, build a Claude AI Document Assistant that allows users to upload documents and ask questions about them."
										}
									].map((item, index) => /* @__PURE__ */ jsxs("div", {
										className: "flex gap-4 p-4 rounded-lg bg-slate-50 border border-slate-200",
										children: [/* @__PURE__ */ jsx("div", {
											className: "flex items-center justify-center w-8 h-8 rounded-full bg-sky-500 text-white text-sm font-bold flex-shrink-0",
											children: index + 1
										}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
											className: "text-slate-900 font-semibold mb-1",
											children: item.title
										}), /* @__PURE__ */ jsx("p", {
											className: "text-sm leading-relaxed",
											children: item.desc
										})] })]
									}, index))
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-6 p-5 rounded-lg bg-sky-50 border border-sky-200",
									children: [
										/* @__PURE__ */ jsx("h4", {
											className: "text-base font-bold text-slate-900 mb-3",
											children: "Claude AI Document Assistant — Possible Features"
										}),
										/* @__PURE__ */ jsx("ul", {
											className: "grid sm:grid-cols-2 gap-2",
											children: [
												"Document processing",
												"Claude analysis",
												"Question answering",
												"Summarization",
												"Structured extraction",
												"User authentication",
												"Access controls",
												"Evaluation"
											].map((item) => /* @__PURE__ */ jsxs("li", {
												className: "flex items-start gap-2 text-sm",
												children: [/* @__PURE__ */ jsx(FaCheckCircle, { className: "text-sky-500 mt-0.5 flex-shrink-0 text-xs" }), item]
											}, item))
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-sm leading-relaxed mt-3",
											children: "This single project can help you practice several important AI development concepts."
										})
									]
								})
							]
						}),
						/* @__PURE__ */ jsxs("section", {
							id: "study-plan",
							className: "scroll-mt-24",
							children: [
								/* @__PURE__ */ jsx("h2", {
									className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
									children: "Claude Certification Study Plan"
								}),
								/* @__PURE__ */ jsx("div", {
									className: "space-y-4",
									children: [
										{
											week: "Week 1",
											title: "Claude & Generative AI Fundamentals",
											topics: [
												"Generative AI",
												"LLMs",
												"Claude",
												"Prompt engineering",
												"Context",
												"AI limitations",
												"Responsible AI"
											]
										},
										{
											week: "Week 2",
											title: "Claude Development",
											topics: [
												"Anthropic API",
												"Application integration",
												"Prompt design",
												"Structured outputs",
												"Tool use",
												"Error handling"
											]
										},
										{
											week: "Week 3",
											title: "Agents, Evaluation & Security",
											topics: [
												"AI agents",
												"Tool calling",
												"Multi-step workflows",
												"AI evaluation",
												"Prompt injection",
												"Security",
												"Data protection"
											]
										},
										{
											week: "Week 4",
											title: "Hands-On Project & Revision",
											topics: [
												"Build a Claude-powered application",
												"Test it",
												"Evaluate outputs",
												"Identify failure cases",
												"Improve prompts",
												"Add safeguards",
												"Review Anthropic's current certification information"
											]
										}
									].map((item) => /* @__PURE__ */ jsxs("div", {
										className: "p-5 rounded-lg bg-slate-50 border border-slate-200",
										children: [/* @__PURE__ */ jsxs("h4", {
											className: "text-base font-bold text-slate-900 mb-3",
											children: [
												/* @__PURE__ */ jsxs("span", {
													className: "text-sky-600",
													children: [item.week, ":"]
												}),
												" ",
												item.title
											]
										}), /* @__PURE__ */ jsx("ul", {
											className: "grid sm:grid-cols-2 gap-2",
											children: item.topics.map((topic) => /* @__PURE__ */ jsxs("li", {
												className: "flex items-start gap-2 text-sm",
												children: [/* @__PURE__ */ jsx(FaCheckCircle, { className: "text-sky-500 mt-0.5 flex-shrink-0 text-xs" }), topic]
											}, topic))
										})]
									}, item.week))
								}),
								/* @__PURE__ */ jsx("p", {
									className: "leading-relaxed mt-6",
									children: "This approach is more useful than simply memorizing practice questions."
								})
							]
						}),
						/* @__PURE__ */ jsxs("section", {
							id: "cert-vs-course",
							className: "scroll-mt-24",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
								children: "Claude Certification vs Claude Course"
							}), /* @__PURE__ */ jsxs("div", {
								className: "space-y-4 leading-relaxed",
								children: [
									/* @__PURE__ */ jsxs("p", { children: [
										"A ",
										/* @__PURE__ */ jsx("strong", {
											className: "text-slate-900",
											children: "Claude course"
										}),
										" and ",
										/* @__PURE__ */ jsx("strong", {
											className: "text-slate-900",
											children: "Claude certification"
										}),
										" are not the same thing."
									] }),
									/* @__PURE__ */ jsx("p", { children: "A course is designed to teach you skills." }),
									/* @__PURE__ */ jsx("p", { children: "A certification is designed to validate knowledge or professional capability through an assessment." }),
									/* @__PURE__ */ jsx("p", { children: "A strong learning path is:" }),
									/* @__PURE__ */ jsx("p", {
										className: "text-slate-900 font-semibold",
										children: "Learn → Practice → Build → Evaluate → Certify"
									}),
									/* @__PURE__ */ jsx("p", { children: "For technology professionals, practical skills should remain the priority." })
								]
							})]
						}),
						/* @__PURE__ */ jsxs("section", {
							id: "worth-it",
							className: "scroll-mt-24",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
								children: "Is Claude Certification Worth It?"
							}), /* @__PURE__ */ jsxs("div", {
								className: "space-y-4 leading-relaxed",
								children: [
									/* @__PURE__ */ jsx("p", { children: "Claude certification can be valuable for professionals who want to demonstrate specialized knowledge of Anthropic's AI ecosystem." }),
									/* @__PURE__ */ jsx("p", { children: "Its value is particularly strong when combined with practical experience." }),
									/* @__PURE__ */ jsx("p", { children: "For example:" }),
									/* @__PURE__ */ jsx("p", {
										className: "text-slate-900 font-semibold",
										children: "Claude + Python + APIs + Cloud + AI Agents + Software Engineering"
									}),
									/* @__PURE__ */ jsx("p", { children: "is more valuable than simply having a certification without practical skills." }),
									/* @__PURE__ */ jsx("p", { children: "Anthropic's growing partner ecosystem also demonstrates increasing organizational investment in professionals who can help deploy Claude. Anthropic reported more than 10,000 certified consultants in June 2026." })
								]
							})]
						}),
						/* @__PURE__ */ jsxs("section", {
							id: "career",
							className: "scroll-mt-24",
							children: [
								/* @__PURE__ */ jsx("h2", {
									className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
									children: "Claude Certification Career Opportunities"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "leading-relaxed mb-6",
									children: "Claude expertise can support several career paths."
								}),
								/* @__PURE__ */ jsx("div", {
									className: "grid md:grid-cols-2 gap-4",
									children: [
										{
											title: "AI Engineer",
											desc: "Build and integrate AI-powered applications."
										},
										{
											title: "Generative AI Engineer",
											desc: "Develop applications using large language models and generative AI."
										},
										{
											title: "AI Consultant",
											desc: "Help organizations identify and implement AI use cases."
										},
										{
											title: "AI Solutions Architect",
											desc: "Design enterprise AI systems and integrations."
										},
										{
											title: "Software Engineer",
											desc: "Use Claude and AI development tools to improve software development."
										},
										{
											title: "Cloud Engineer",
											desc: "Deploy and operate AI-enabled cloud applications."
										},
										{
											title: "DevOps Engineer",
											desc: "Use AI to support development, automation, troubleshooting, and operations."
										},
										{
											title: "AI Product Manager",
											desc: "Identify AI opportunities and manage AI-powered products."
										}
									].map((item) => /* @__PURE__ */ jsxs("div", {
										className: "p-5 rounded-lg bg-slate-50 border border-slate-200",
										children: [/* @__PURE__ */ jsx("h3", {
											className: "text-base font-bold text-slate-900 mb-2",
											children: item.title
										}), /* @__PURE__ */ jsx("p", {
											className: "text-sm leading-relaxed",
											children: item.desc
										})]
									}, item.title))
								})
							]
						}),
						/* @__PURE__ */ jsxs("section", {
							id: "portfolio",
							className: "scroll-mt-24",
							children: [
								/* @__PURE__ */ jsx("h2", {
									className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
									children: "Claude Certification Portfolio Projects"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "leading-relaxed mb-6",
									children: "Certification is stronger when supported by practical work. Here are several Claude project ideas for your portfolio."
								}),
								/* @__PURE__ */ jsx("div", {
									className: "space-y-3",
									children: [
										{
											title: "1. AI Customer Support Assistant",
											desc: "Build a Claude-powered assistant that helps customer service teams answer questions."
										},
										{
											title: "2. AI Document Analyzer",
											desc: "Create a system that analyzes contracts, reports, or business documents."
										},
										{
											title: "3. Claude Coding Assistant",
											desc: "Build a developer workflow for code analysis, testing, and documentation."
										},
										{
											title: "4. AI Research Assistant",
											desc: "Create a tool that organizes research and generates structured summaries."
										},
										{
											title: "5. Enterprise Knowledge Assistant",
											desc: "Build a secure internal chatbot that helps employees find company information."
										},
										{
											title: "6. AI Business Analyst",
											desc: "Create a system that turns business questions into structured analysis and reports."
										}
									].map((item) => /* @__PURE__ */ jsxs("div", {
										className: "p-5 rounded-lg bg-slate-50 border border-slate-200",
										children: [/* @__PURE__ */ jsx("h3", {
											className: "text-base font-bold text-slate-900 mb-2",
											children: item.title
										}), /* @__PURE__ */ jsx("p", {
											className: "text-sm leading-relaxed",
											children: item.desc
										})]
									}, item.title))
								})
							]
						}),
						/* @__PURE__ */ jsxs("section", {
							id: "mistakes",
							className: "scroll-mt-24",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
								children: "Common Claude Certification Preparation Mistakes"
							}), /* @__PURE__ */ jsx("div", {
								className: "space-y-4",
								children: [
									{
										title: "Mistake 1: Learning Only Prompt Engineering",
										desc: "Prompting is important, but professional AI implementation requires much more. Learn APIs, evaluation, security, agents, architecture, and automation."
									},
									{
										title: "Mistake 2: Memorizing Answers",
										desc: "Memorization can help with terminology, but it does not replace practical understanding. Build projects instead."
									},
									{
										title: "Mistake 3: Ignoring Security",
										desc: "Connecting an AI system to business tools without proper access controls can create serious risks. Security should be considered from the beginning."
									},
									{
										title: "Mistake 4: Assuming Claude Is Always Correct",
										desc: "AI-generated information can be inaccurate. Production systems need evaluation, validation, monitoring, and appropriate human oversight."
									},
									{
										title: "Mistake 5: Using Outdated Claude Certification Information",
										desc: "The AI industry changes quickly. Anthropic's certification and partner ecosystem can evolve, so always verify current requirements and available certification pathways before registering."
									}
								].map((item) => /* @__PURE__ */ jsxs("div", {
									className: "p-5 rounded-lg bg-red-50 border border-red-200",
									children: [/* @__PURE__ */ jsx("h3", {
										className: "text-base font-bold text-slate-900 mb-2",
										children: item.title
									}), /* @__PURE__ */ jsx("p", {
										className: "text-sm leading-relaxed",
										children: item.desc
									})]
								}, item.title))
							})]
						}),
						/* @__PURE__ */ jsxs("section", {
							id: "faq",
							className: "scroll-mt-24",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
								children: "Claude Certification FAQs"
							}), /* @__PURE__ */ jsx("div", {
								className: "space-y-3",
								children: [
									{
										q: "What is Claude Certification?",
										a: "Claude Certification refers to Anthropic's professional certification pathway for individuals who demonstrate relevant Claude skills through the applicable certification program."
									},
									{
										q: "Is Claude Certification offered by Anthropic?",
										a: "Yes. Anthropic currently provides certification through its partner ecosystem and Partner Academy. Anthropic states that partners have access to certification exams and that certifications are earned by individual practitioners."
									},
									{
										q: "Is there a Claude certification exam?",
										a: "Anthropic confirms that certification exams are available through Anthropic Partner Academy within its partner ecosystem."
									},
									{
										q: "Who can get Claude certified?",
										a: "Eligibility depends on the applicable Anthropic certification pathway. Candidates should verify current requirements directly with Anthropic rather than relying on third-party certification websites."
									},
									{
										q: "Is Claude Certification worth it?",
										a: "It can be valuable for AI engineers, software developers, consultants, architects, cloud professionals, and other technology specialists who work with Claude."
									},
									{
										q: "Do I need programming experience?",
										a: "Programming experience is particularly useful for technical Claude development, API integration, AI agents, and application development. However, requirements can vary depending on the certification pathway."
									},
									{
										q: "What should I study for Claude Certification?",
										a: "Focus on Claude fundamentals, generative AI, prompt engineering, API development, tool use, AI agents, evaluation, security, and responsible AI."
									},
									{
										q: "Is Claude Certification the same as a Claude course?",
										a: "No. A course primarily teaches skills, while certification validates skills through an applicable assessment."
									},
									{
										q: "Can Claude Certification help my career?",
										a: "It can strengthen your professional profile, especially when combined with software engineering, cloud, AI engineering, API development, and practical Claude projects."
									},
									{
										q: "What is Anthropic Partner Academy?",
										a: "Anthropic Partner Academy is part of Anthropic's partner ecosystem and provides training and certification resources for partner professionals. Anthropic states that partners receive access to certification exams through the Academy."
									},
									{
										q: "Is Claude certification available to everyone?",
										a: "You should not assume that anyone can immediately register for a Claude certification exam. Anthropic's current public information connects its certification exams with Partner Academy and its partner ecosystem. Check the current Anthropic requirements before planning an exam."
									}
								].map((faq, index) => /* @__PURE__ */ jsxs("details", {
									className: "group p-5 rounded-lg bg-slate-50 border border-slate-200 cursor-pointer",
									children: [/* @__PURE__ */ jsxs("summary", {
										className: "flex items-center justify-between text-slate-900 font-semibold list-none",
										children: [/* @__PURE__ */ jsxs("span", {
											className: "flex items-center gap-3 text-sm",
											children: [/* @__PURE__ */ jsx(FaQuestionCircle, { className: "text-sky-500 flex-shrink-0" }), faq.q]
										}), /* @__PURE__ */ jsx("span", {
											className: "text-sky-500 text-xl group-open:rotate-45 transition-transform duration-300 flex-shrink-0",
											children: "+"
										})]
									}), /* @__PURE__ */ jsx("p", {
										className: "mt-4 text-sm leading-relaxed pl-7 text-slate-600",
										children: faq.a
									})]
								}, index))
							})]
						}),
						/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
							className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200",
							children: "Final Thoughts on Claude Certification"
						}), /* @__PURE__ */ jsxs("div", {
							className: "space-y-4 leading-relaxed",
							children: [
								/* @__PURE__ */ jsx("p", { children: "Generative AI is moving from experimentation to real-world deployment." }),
								/* @__PURE__ */ jsx("p", { children: "Businesses are no longer asking only whether they can use AI." }),
								/* @__PURE__ */ jsxs("p", { children: [
									"They are asking how they can use AI ",
									/* @__PURE__ */ jsx("strong", {
										className: "text-slate-900",
										children: "securely, reliably, efficiently, and at scale"
									}),
									"."
								] }),
								/* @__PURE__ */ jsx("p", { children: "That creates demand for professionals who understand more than basic AI prompting." }),
								/* @__PURE__ */ jsx("p", {
									className: "text-slate-900 font-medium",
									children: "Professionals increasingly need knowledge of:"
								}),
								/* @__PURE__ */ jsx("ul", {
									className: "grid sm:grid-cols-2 gap-2",
									children: [
										"Claude",
										"Generative AI",
										"APIs",
										"AI agents",
										"Automation",
										"Evaluation",
										"Security",
										"Software development",
										"Cloud infrastructure",
										"Enterprise AI architecture"
									].map((item) => /* @__PURE__ */ jsxs("li", {
										className: "flex items-start gap-2 text-sm",
										children: [/* @__PURE__ */ jsx(FaCheckCircle, { className: "text-sky-500 mt-0.5 flex-shrink-0 text-xs" }), item]
									}, item))
								}),
								/* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("strong", {
									className: "text-slate-900",
									children: "Claude Certification"
								}), " can be one part of that professional development journey."] }),
								/* @__PURE__ */ jsx("p", { children: "Anthropic's expanding partner ecosystem and growing number of certified practitioners demonstrate the increasing importance of Claude-related professional skills." }),
								/* @__PURE__ */ jsx("p", { children: "But certification should not be the final goal." }),
								/* @__PURE__ */ jsxs("p", { children: [
									"The strongest AI professionals combine certification with ",
									/* @__PURE__ */ jsx("strong", {
										className: "text-slate-900",
										children: "real projects, technical knowledge, business understanding, security awareness, and production experience"
									}),
									"."
								] }),
								/* @__PURE__ */ jsx("p", { children: "If you are building a career in AI, software development, cloud computing, DevOps, or technology consulting, learning Claude can be a valuable addition to your technical skill set." })
							]
						})] }),
						/* @__PURE__ */ jsxs("section", {
							className: "p-8 rounded-xl bg-slate-50 border border-slate-200",
							children: [
								/* @__PURE__ */ jsx("h2", {
									className: "text-xl md:text-2xl font-bold text-slate-900 mb-3",
									children: "Ready to Build Your Claude & AI Skills?"
								}),
								/* @__PURE__ */ jsxs("p", {
									className: "mb-6",
									children: [
										"Explore ",
										/* @__PURE__ */ jsx("strong", {
											className: "text-slate-900",
											children: "Techcyfy"
										}),
										" for practical AI, cloud, DevOps, certification, and technology learning resources designed to help you develop skills for the modern technology industry."
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex flex-wrap gap-3",
									children: [/* @__PURE__ */ jsxs(Link, {
										to: "/contact",
										className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-sky-600 text-white font-semibold hover:bg-sky-700 transition-colors",
										children: ["Contact Techcyfy Today", /* @__PURE__ */ jsx(FaArrowRight, { className: "text-sm" })]
									}), /* @__PURE__ */ jsx(Link, {
										to: "/services",
										className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 transition-colors",
										children: "Explore Our Services"
									})]
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap items-center justify-center gap-6 pt-8 border-t border-slate-200",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2 text-slate-500 text-sm",
									children: [/* @__PURE__ */ jsx(FaShieldAlt, { className: "text-emerald-500" }), /* @__PURE__ */ jsx("span", { children: "Techcyfy Accredited" })]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2 text-slate-500 text-sm",
									children: [/* @__PURE__ */ jsx(FaClock, { className: "text-sky-500" }), /* @__PURE__ */ jsx("span", { children: "14 min read" })]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2 text-slate-500 text-sm",
									children: [/* @__PURE__ */ jsx(FaCheckCircle, { className: "text-emerald-500" }), /* @__PURE__ */ jsx("span", { children: "Expert Reviewed" })]
								})
							]
						})
					]
				})
			})
		]
	});
};
//#endregion
//#region src/App.jsx
function App() {
	const location = useLocation();
	const [isRouteLoading, setIsRouteLoading] = useState(false);
	useEffect(() => {
		setIsRouteLoading(true);
		const timer = setTimeout(() => {
			setIsRouteLoading(false);
		}, 300);
		return () => clearTimeout(timer);
	}, [location.pathname]);
	return /* @__PURE__ */ jsxs(Fragment, { children: [isRouteLoading && /* @__PURE__ */ jsx(RouteLoading, {}), /* @__PURE__ */ jsx(Routes, { children: /* @__PURE__ */ jsxs(Route, {
		path: "/",
		element: /* @__PURE__ */ jsx(Layout, {}),
		children: [
			/* @__PURE__ */ jsx(Route, {
				index: true,
				element: /* @__PURE__ */ jsx(Home, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "about",
				element: /* @__PURE__ */ jsx(About, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "how-it-works",
				element: /* @__PURE__ */ jsx(HowItWorks, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "vouchers",
				element: /* @__PURE__ */ jsx(VoucherSection, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "reviews",
				element: /* @__PURE__ */ jsx(Reviews, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "services",
				element: /* @__PURE__ */ jsx(Services, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "contact",
				element: /* @__PURE__ */ jsx(Contact, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "vouchers/:id",
				element: /* @__PURE__ */ jsx(VoucherDetails, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "vouchers/:id/exams",
				element: /* @__PURE__ */ jsx(ExamList, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "blog",
				element: /* @__PURE__ */ jsx(Blog, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "blog/microsoft-azure-exam-vouchers",
				element: /* @__PURE__ */ jsx(AzureVouchers, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "blog/aws-exam-vouchers",
				element: /* @__PURE__ */ jsx(AwsVouchers, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "blog/databricks-exam-vouchers",
				element: /* @__PURE__ */ jsx(DatabricksVouchers, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "blog/salesforce-exam-vouchers",
				element: /* @__PURE__ */ jsx(SalesforceCRM, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "blog/comptia-exam-vouchers",
				element: /* @__PURE__ */ jsx(ComptiaVouchers, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "blog/fortinet-exam-vouchers",
				element: /* @__PURE__ */ jsx(FortinetVouchers, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "blog/google-cloud-exam-vouchers",
				element: /* @__PURE__ */ jsx(GoogleCloudVouchers, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "blog/hashicorp-exam-vouchers",
				element: /* @__PURE__ */ jsx(HashiCorpTerraformCertification, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "blog/ClaudeCertification-vouchers",
				element: /* @__PURE__ */ jsx(ClaudeCertification, {})
			})
		]
	}) })] });
}
//#endregion
//#region src/entry-server.jsx
function render(url) {
	const helmetContext = {};
	const appHtml = renderToString(/* @__PURE__ */ jsx(HelmetProvider, {
		context: helmetContext,
		children: /* @__PURE__ */ jsx(StaticRouter, {
			location: url,
			children: /* @__PURE__ */ jsx(App, {})
		})
	}));
	const { helmet } = helmetContext;
	return {
		html: appHtml,
		head: `
    ${helmet?.title?.toString() || ""}
    ${helmet?.meta?.toString() || ""}
    ${helmet?.link?.toString() || ""}
    ${helmet?.script?.toString() || ""}
  `
	};
}
//#endregion
export { render };
