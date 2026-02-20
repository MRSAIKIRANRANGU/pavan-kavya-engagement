// D:\saikiran_personal\engagement-invitation\src\App.jsx
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  FaPhone, 
  FaWhatsapp, 
  FaMapMarkerAlt, 
  FaHeart, 
  FaRing,
  FaCalendarAlt,
  FaClock,
  FaQuoteLeft,
  FaQuoteRight,
  FaPrayingHands,
  FaLeaf,
  FaStar,
  FaGift,
  FaSun,
  FaMoon,
  FaPepperHot as FaFlower
} from "react-icons/fa";
import { 
  GiLotus, 
  GiIndianPalace, 
  GiFlowerTwirl,
  GiPrayerBeads,
  GiTempleGate,
  GiPalmTree
} from "react-icons/gi";
import { MdLocationOn, MdDateRange } from "react-icons/md";
import { BsFillClockFill } from "react-icons/bs";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    // Preload video
    const video = document.createElement('video');
    video.src = isMobile 
      ? "/videos/website-background-mobile.mp4"
      : "/videos/website-background-desktop.mp4";
    video.onloadeddata = () => setIsVideoLoaded(true);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, [isMobile]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const mapsUrl = "https://www.google.com/maps/place/RAMBABU'S+HOME+%F0%9F%8F%A1/@18.0157821,79.8325191,1072m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a336f006e9271eb:0x129e11348883dd7b!8m2!3d18.015777!4d79.835094!16s%2Fg%2F11zklttcdc?entry=ttu&g_ep=EgoyMDI2MDIxNy4wIKXMDSoASAFQAw%3D%3D";
  const phoneNumber = "918978553778";
  const whatsappMessage = "🙏 Namaste! Sai Pavan & Kavya, please share the engagement live location. Excited to be part of your special day! 🌸";

  const handleCall = () => {
    window.location.href = `tel:+${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
  };

  const handleDirections = () => {
    window.open(mapsUrl, "_blank");
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const floatAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const rotateAnimation = {
    animate: {
      rotate: [0, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const pulseAnimation = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-[#FFF9F0] via-[#FFF5E7] to-[#FFF0E0]">
      {/* Video Background with Overlay */}
      <div className="fixed inset-0 -z-20 overflow-hidden">
        <AnimatePresence>
          {isVideoLoaded && (
            <motion.video
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 2 }}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source
                src={isMobile 
                  ? "/videos/website-background-mobile.mp4"
                  : "/videos/website-background-desktop.mp4"
                }
                type="video/mp4"
              />
            </motion.video>
          )}
        </AnimatePresence>
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />
      </div>

      {/* Animated Traditional Patterns */}
      <div className="fixed inset-0 -z-15 overflow-hidden pointer-events-none">
        {/* Rangoli Pattern */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 40%, #D4AF37 2px, transparent 2px),
                              radial-gradient(circle at 70% 60%, #B76E79 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Floating Elements with Mouse Parallax */}
        <motion.div
          style={{
            x: mousePosition.x,
            y: mousePosition.y
          }}
          className="relative w-full h-full"
        >
          <motion.div 
            className="absolute top-20 left-[5%] text-6xl text-[#D4AF37]/20"
            {...rotateAnimation}
          >
            <GiLotus />
          </motion.div>
          <motion.div 
            className="absolute bottom-40 right-[5%] text-7xl text-[#B76E79]/20"
            {...rotateAnimation}
          >
            <GiIndianPalace />
          </motion.div>
          <motion.div 
            className="absolute top-1/3 right-[15%] text-5xl text-[#D4AF37]/15"
            {...floatAnimation}
          >
            <GiFlowerTwirl />
          </motion.div>
          <motion.div 
            className="absolute bottom-1/4 left-[10%] text-6xl text-[#B76E79]/15"
            {...floatAnimation}
          >
            <GiTempleGate />
          </motion.div>
        </motion.div>

        {/* Floating Petals */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#D4AF37]/20 text-2xl"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotate: 0
            }}
            animate={{
              y: [null, -1000],
              x: [null, Math.sin(i) * 200],
              rotate: [0, 360],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear"
            }}
          >
            <FaFlower />
          </motion.div>
        ))}
      </div>

      {/* Elegant Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="text-2xl text-[#D4AF37]"
              >
                <FaRing />
              </motion.div>
              <span className="font-heading text-xl text-[#3E2723] font-bold tracking-wide">
                SAI PAVAN <span className="text-[#D4AF37]">❤️</span> KAVYA
              </span>
            </motion.div>

            <div className="hidden md:flex items-center gap-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'details', label: 'Celebration' },
                { id: 'venue', label: 'Venue' },
                { id: 'contact', label: 'Connect' }
              ].map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative text-[#3E2723]/80 hover:text-[#D4AF37] transition-colors font-medium"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#D4AF37]"
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <motion.button 
              className="md:hidden text-2xl text-[#3E2723]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? '✕' : '☰'}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden bg-white/95 backdrop-blur-md border-t border-[#D4AF37]/20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="px-4 py-4 space-y-3">
                {['home', 'details', 'venue', 'contact'].map((item) => (
                  <motion.button
                    key={item}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left py-2 text-[#3E2723]/80 hover:text-[#D4AF37] text-lg capitalize border-b border-[#D4AF37]/10"
                    whileHover={{ x: 10 }}
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* HERO SECTION */}
      <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <motion.div 
          style={{ y, opacity }}
          className="relative w-full max-w-6xl mx-auto"
        >
          {/* Decorative Mandala */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            {...rotateAnimation}
          >
            <div className="w-[600px] h-[600px] border border-[#D4AF37]/20 rounded-full" />
            <div className="absolute w-[400px] h-[400px] border border-[#B76E79]/20 rounded-full" />
          </motion.div>

          <div className="text-center relative z-10">
            {/* Sacred Text with Animation */}
            <motion.div
              variants={floatAnimation}
              initial="initial"
              animate="animate"
              className="inline-block mb-8"
            >
              <motion.div 
                className="bg-gradient-to-r from-[#D4AF37] via-[#B76E79] to-[#D4AF37] text-white px-8 py-4 rounded-full shadow-xl"
                whileHover={{ scale: 1.05 }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ backgroundSize: '200% 200%' }}
              >
                <span className="flex items-center gap-3 text-sm md:text-base font-semibold tracking-wide">
                  <GiPrayerBeads className="text-xl" />
                  With Divine Blessings of Our Parents & Elders
                  <GiPrayerBeads className="text-xl" />
                </span>
              </motion.div>
            </motion.div>

            {/* Names with Staggered Animation */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={{
                animate: {
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
            >
              <motion.h1 
                variants={fadeInUp}
                className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold text-[#3E2723] mb-4"
              >
                Sai Pavan
                <motion.span 
                  className="block text-2xl md:text-3xl text-[#D4AF37] mt-4 font-light tracking-[0.3em]"
                  animate={{ 
                    letterSpacing: ['0.2em', '0.4em', '0.2em'],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  RANGU
                </motion.span>
              </motion.h1>

              <motion.div 
                variants={scaleIn}
                className="flex items-center justify-center gap-6 my-8"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="text-3xl text-[#D4AF37]"
                >
                  <FaRing />
                </motion.div>
                <span className="text-3xl text-[#B76E79] font-heading">✧</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaHeart className="text-3xl text-[#B76E79]" />
                </motion.div>
                <span className="text-3xl text-[#B76E79] font-heading">✧</span>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="text-3xl text-[#D4AF37]"
                >
                  <FaRing />
                </motion.div>
              </motion.div>

              <motion.h2 
                variants={fadeInUp}
                className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold text-[#3E2723] mt-4"
              >
                Kavya
              </motion.h2>
            </motion.div>

            {/* Traditional Quote */}
            <motion.div 
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 1 }}
              className="max-w-3xl mx-auto mt-12 relative"
            >
              <FaQuoteLeft className="absolute -left-4 -top-4 text-4xl text-[#D4AF37]/30" />
              <p className="text-xl md:text-2xl text-[#3E2723]/80 italic font-light px-12 leading-relaxed">
                "As the sacred fire witnesses our union, as the holy chants fill the air, 
                we seek your blessings to begin this beautiful journey of togetherness, 
                bound by love, tradition, and eternal devotion."
              </p>
              <FaQuoteRight className="absolute -right-4 -bottom-4 text-4xl text-[#D4AF37]/30" />
            </motion.div>

            {/* Date and Time */}
            <motion.div
              variants={pulseAnimation}
              animate="animate"
              className="mt-12 inline-block"
            >
              <motion.div 
                className="bg-white/90 backdrop-blur-md px-10 py-5 rounded-2xl shadow-xl border-2 border-[#D4AF37]/30"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.2)" }}
              >
                <div className="flex flex-wrap items-center justify-center gap-6 text-xl md:text-2xl">
                  <div className="flex items-center gap-2">
                    <MdDateRange className="text-[#D4AF37]" />
                    <span className="text-[#3E2723] font-semibold">25th February 2026</span>
                  </div>
                  <div className="w-px h-8 bg-[#D4AF37]/30 hidden md:block" />
                  <div className="flex items-center gap-2">
                    <BsFillClockFill className="text-[#B76E79]" />
                    <span className="text-[#3E2723] font-semibold">9:00 AM - 2:00 PM</span>
                  </div>
                </div>
                <p className="text-[#B76E79] text-sm mt-2">Lunch follows ceremony</p>
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            {/* <motion.div 
              className="flex flex-wrap gap-4 justify-center mt-12"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 1.5 }}
            >
              <motion.button
                onClick={() => scrollToSection('details')}
                className="bg-gradient-to-r from-[#D4AF37] to-[#B76E79] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg flex items-center gap-2 hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaCalendarAlt />
                Celebration Details
              </motion.button>
              
              <motion.button
                onClick={handleWhatsApp}
                className="bg-[#25D366] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg flex items-center gap-2 hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp />
                Send Blessings
              </motion.button>
            </motion.div> */}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        {/* <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection('details')}
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-8 h-14 border-2 border-[#D4AF37] rounded-full flex justify-center relative">
            <motion.div 
              className="w-1.5 h-3 bg-[#D4AF37] rounded-full absolute top-3"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <p className="text-[#3E2723]/60 text-sm mt-2 tracking-widest">DISCOVER MORE</p>
        </motion.div> */}
      </section>

      {/* DETAILS SECTION */}
      <section id="details" className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="font-heading text-5xl md:text-6xl lg:text-7xl text-[#3E2723] mb-4"
              animate={{ 
                textShadow: ['0 0 10px rgba(212,175,55,0.1)', '0 0 20px rgba(212,175,55,0.2)', '0 0 10px rgba(212,175,55,0.1)']
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              The Auspicious Celebration
            </motion.h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#D4AF37] via-[#B76E79] to-[#D4AF37] mx-auto" />
            <p className="text-[#3E2723]/70 text-lg mt-6 max-w-2xl mx-auto">
              Join us as we begin our sacred journey together, blessed by tradition and love
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <FaCalendarAlt />, 
                title: "Auspicious Date", 
                value: "25th February",
                sub: "Wednesday, 2026",
                gradient: "from-amber-400 to-orange-400"
              },
              { 
                icon: <FaClock />, 
                title: "Ceremony Time", 
                value: "9:00 AM - 2:00 PM",
                sub: "Muhurtham at 9:00 AM",
                gradient: "from-rose-400 to-pink-400"
              },
              { 
                icon: <GiLotus />, 
                title: "Sacred Rituals", 
                value: "South Indian",
                sub: "Traditional Vedic Ceremony",
                gradient: "from-purple-400 to-indigo-400"
              },
              { 
                icon: <FaGift />, 
                title: "Celebration", 
                value: "Grand Lunch",
                sub: "Authentic Feast",
                gradient: "from-green-400 to-emerald-400"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-3xl opacity-0 group-hover:opacity-10 transition-all duration-500`} />
                <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-[#D4AF37]/20">
                  <motion.div 
                    className="text-5xl text-[#D4AF37] mb-4"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-xl font-heading font-bold text-[#3E2723] mb-2">{item.title}</h3>
                  <p className="text-2xl font-bold text-[#D4AF37] mb-2">{item.value}</p>
                  <p className="text-[#3E2723]/60 text-sm">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Traditional Schedule */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-[#D4AF37]/20"
          >
            <h3 className="text-3xl font-heading text-[#3E2723] text-center mb-10">Sacred Ceremony Schedule</h3>
            <div className="space-y-6 max-w-2xl mx-auto">
              {[
                { time: "9:00 AM", event: "Muhurtham (Auspicious Beginning)", icon: <FaStar />, desc: "Sacred timing for the ceremony" },
                { time: "10:00 AM", event: "Engagement Ceremony", icon: <FaRing />, desc: "Exchange of rings and vows" },
                { time: "11:30 AM", event: "Blessings from Elders", icon: <FaPrayingHands />, desc: "Seeking blessings from family" },
                { time: "1:00 PM", event: "Grand Celebration Lunch", icon: <FaGift />, desc: "Traditional feast follows" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-6 p-4 bg-gradient-to-r from-[#D4AF37]/5 to-transparent rounded-xl hover:from-[#D4AF37]/10 transition-all"
                >
                  <div className="text-2xl text-[#D4AF37] mt-1">{item.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-1">
                      <p className="text-lg font-bold text-[#D4AF37]">{item.time}</p>
                      <div className="h-px flex-1 bg-gradient-to-r from-[#D4AF37]/30 to-transparent" />
                    </div>
                    <p className="text-[#3E2723] font-semibold text-lg">{item.event}</p>
                    <p className="text-[#3E2723]/60 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* VENUE SECTION */}
      <section id="venue" className="py-32 px-4 relative bg-gradient-to-b from-[#FFF5E7] to-[#FFF0E0]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-[#3E2723] mb-4">
              Venue
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#D4AF37] via-[#B76E79] to-[#D4AF37] mx-auto" />
            <p className="text-[#3E2723]/70 text-lg mt-6">Where love meets tradition</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-[#D4AF37]/30"
          >
            <div className="p-8 md:p-12">
              <div className="flex flex-col items-center mb-8">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="text-5xl text-[#D4AF37] mb-4"
                >
                  <GiIndianPalace />
                </motion.div>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-[#3E2723] text-center">
                  RAMBABU'S HOME
                </h3>
                <div className="flex items-center gap-2 mt-2 text-[#B76E79]">
                  <MdLocationOn />
                  <span>Hyderabad, Telangana</span>
                </div>
              </div>

              {/* Elegant Map Preview */}
              <div className="relative h-80 mb-8 rounded-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-[#B76E79]/20 flex items-center justify-center">
                  <div className="text-center">
                    <GiTempleGate className="text-6xl text-[#D4AF37] mx-auto mb-4 opacity-50" />
                    <p className="text-[#3E2723]/60 flex items-center gap-2">
                      <FaMapMarkerAlt className="text-[#D4AF37]" />
                      Click below for live directions
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={handleDirections}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#D4AF37] to-[#B76E79] text-white px-10 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transition-all"
                >
                  <FaMapMarkerAlt />
                  Get Live Directions
                </motion.button>
              </div>

              {/* Nearby Landmarks */}
              <div className="mt-8 pt-8 border-t border-[#D4AF37]/20">
                <p className="text-center text-[#3E2723]/60 text-sm">
                  🏨 Nearby Hotels Available • 🚗 Ample Parking • ♿ Wheelchair Accessible
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-32 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-[#3E2723] mb-4">
              Connect With Us
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#D4AF37] via-[#B76E79] to-[#D4AF37] mx-auto mb-6" />
            <p className="text-[#3E2723]/70 text-lg max-w-2xl mx-auto">
              Your presence is our greatest gift. Please reach out with any questions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-2xl border border-[#D4AF37]/30"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Call Card */}
              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-gradient-to-br from-[#D4AF37]/10 to-[#B76E79]/10 p-8 rounded-2xl cursor-pointer border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all"
                onClick={handleCall}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-r from-[#D4AF37] to-[#B76E79] rounded-full flex items-center justify-center text-white text-2xl mb-4 mx-auto shadow-lg"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaPhone />
                </motion.div>
                <h3 className="font-heading text-2xl font-bold text-[#3E2723] text-center mb-2">Call Us</h3>
                <p className="text-[#D4AF37] text-xl text-center font-semibold">+91 89785 53778</p>
                <p className="text-[#3E2723]/60 text-sm text-center mt-2">Click to connect directly</p>
              </motion.div>

              {/* WhatsApp Card */}
              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-gradient-to-br from-[#25D366]/10 to-[#128C7E]/10 p-8 rounded-2xl cursor-pointer border border-[#25D366]/20 hover:border-[#25D366]/50 transition-all"
                onClick={handleWhatsApp}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center text-white text-2xl mb-4 mx-auto shadow-lg"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <FaWhatsapp />
                </motion.div>
                <h3 className="font-heading text-2xl font-bold text-[#3E2723] text-center mb-2">WhatsApp</h3>
                <p className="text-[#25D366] text-xl text-center font-semibold">Send Message</p>
                <p className="text-[#3E2723]/60 text-sm text-center mt-2">Get live location & updates</p>
              </motion.div>
            </div>

            {/* Additional Contact Info */}
            <motion.div 
              className="mt-10 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center gap-3 text-2xl mb-4">
                <FaHeart className="text-[#B76E79] animate-pulse" />
                <FaHeart className="text-[#D4AF37] animate-pulse delay-100" />
                <FaHeart className="text-[#B76E79] animate-pulse delay-200" />
              </div>
              <p className="text-[#3E2723]/80 text-lg mb-2">
                We can't wait to celebrate with you!
              </p>
              <p className="text-[#D4AF37] text-sm">
                Kindly RSVP by 25th February 2026
              </p>
              <p className="text-[#3E2723]/60 text-xs mt-4">
                For any assistance, please don't hesitate to contact us
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* BLESSINGS SECTION */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#D4AF37]/10 to-[#B76E79]/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="font-heading text-3xl text-[#3E2723] mb-8">Seeking Your Blessings</h3>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {['🙏', '🌸', '🕉️', '✨', '🌺'].map((symbol, i) => (
                <motion.span
                  key={i}
                  className="text-3xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                >
                  {symbol}
                </motion.span>
              ))}
            </div>
            <p className="text-lg text-[#3E2723]/70 italic max-w-2xl mx-auto">
              "May your blessings shower upon us as we begin this sacred journey of love, 
              trust, and togetherness. Your presence will make our celebration complete."
            </p>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative bg-white/90 backdrop-blur-sm py-16 px-4 border-t border-[#D4AF37]/20">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-[#D4AF37]/20 rounded-tl-3xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-[#B76E79]/20 rounded-br-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Floral Decoration */}
            <div className="flex justify-center gap-3 mb-6">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                >
                  <FaLeaf className="text-[#D4AF37] text-2xl" />
                </motion.div>
              ))}
            </div>

            <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl text-[#3E2723] mb-4">
              Sai Pavan Rangu & Kavya
            </h3>
            
            <p className="text-xl text-[#B76E79] mb-6 font-light">
              25th February 2026 · 9:00 AM - 2:00 PM
            </p>

            <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#B76E79] mx-auto mb-8" />

            <p className="text-lg text-[#3E2723]/70 italic max-w-2xl mx-auto mb-8 leading-relaxed">
              "With hearts full of gratitude and souls filled with joy, we thank the Almighty 
              and our beloved families for blessing us with this sacred union. Your presence 
              and blessings will make our celebration truly complete."
            </p>

            <div className="flex justify-center gap-6 text-2xl mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="text-[#D4AF37]"
              >
                <GiPrayerBeads />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-[#B76E79]"
              >
                <FaHeart />
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="text-[#D4AF37]"
              >
                <GiPrayerBeads />
              </motion.div>
            </div>

            <p className="text-sm text-[#3E2723]/40">
              © 2026 · Crafted with eternal love for Sai Pavan & Kavya
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <motion.button
        onClick={() => scrollToSection('home')}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#D4AF37] to-[#B76E79] text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaStar className="text-xl" />
      </motion.button>
    </div>
  );
}

export default App;