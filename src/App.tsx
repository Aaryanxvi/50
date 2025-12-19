import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowDown, Check, Send } from 'lucide-react';

// --- COMPONENTS ---

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full px-6 py-6 md:px-12 z-50 flex justify-between items-center transition-all duration-700 ${isScrolled ? 'bg-bg/95 border-b border-gold/20 py-4 backdrop-blur-md' : 'bg-transparent py-8'
            }`}>
            <div className="font-serif font-bold text-2xl text-gold tracking-tighter uppercase drop-shadow-sm">Yemee 50</div>
            <a href="#rsvp" className="text-text uppercase tracking-[#0.3em] text-[10px] md:text-xs font-semibold group relative hover:text-gold transition-colors duration-500">
                RSVP
                <span className="absolute bottom-[-4px] left-0 w-full h-[1px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right group-hover:origin-left"></span>
            </a>
        </nav>
    );
};

const Hero = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);

    return (
        <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-bg">
            <motion.div style={{ y }} className="absolute inset-0 z-0">
                <img
                    src="/assets/images/hero-bg-light.png"
                    alt="Goa Beach"
                    className="w-full h-full object-cover opacity-60 scale-105"
                    style={{ filter: 'grayscale(100%) brightness(0.7) contrast(1.5) sepia(0.05)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/40"></div>
            </motion.div>

            <motion.div
                style={{ opacity }}
                className="relative z-10 w-full px-6 md:px-12 flex flex-col justify-between h-full py-32 md:py-20"
            >
                <div></div> {/* Spacer */}

                <div className="max-w-[90vw] text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="relative"
                    >
                        <div className="relative mb-6">
                            <span className="block text-[14px] md:text-[18px] tracking-[0.6em] font-sans uppercase text-gold/80 mb-2">Est. 2026</span>
                            <div className="w-12 h-[1px] bg-gold/40 mx-auto md:mx-0"></div>
                        </div>
                        <h1 className="text-[9.5vw] leading-[1.0] font-serif text-text uppercase tracking-tighter pr-[15px]">
                            Yemee's <br />
                            <span className="italic font-light text-gold-gradient block mt-2 pb-4">50th</span>
                        </h1>
                    </motion.div>
                </div>

                <div className="flex justify-between items-end border-t border-gold/20 pt-12">
                    <p className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-text/50 max-w-xs leading-relaxed">
                        A Golden Jubilee Celebration<br />
                        <span className="text-gold">Oct 03 — 05 / Goa, India</span>
                    </p>
                    <Countdown />
                </div>
            </motion.div>

            <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] bg-grain mix-blend-overlay"></div>
        </section>
    );
};

const Countdown = () => {
    return (
        <div className="flex gap-6 md:gap-10 font-serif bg-gold/5 backdrop-blur-md px-8 py-4 rounded-none border border-gold/20 shadow-2xl">
            {['Days', 'Hours', 'Mins'].map((label, i) => (
                <div key={label} className="flex flex-col items-center">
                    <span className="text-2xl md:text-4xl font-light text-gold-gradient">00</span>
                    <span className="text-[7px] uppercase tracking-[0.3em] text-gold/40 mt-1">{label}</span>
                </div>
            ))}
        </div>
    );
};

const Intro = () => (
    <section className="py-40 bg-bg relative overflow-hidden border-b border-gold/10">
        {/* Artistic Background Element */}
        <div className="absolute top-0 right-0 w-[50vw] h-full bg-sand opacity-20 -skew-x-12 z-0 origin-top"></div>

        <div className="relative z-10 container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row gap-16 md:gap-32 items-start">
                <div className="md:w-1/3 pt-20">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="block text-gold font-sans text-xs tracking-[0.5em] uppercase mb-8 border-l border-gold pl-6"
                    >
                        The Destination
                    </motion.span>
                    <h2 className="text-5xl md:text-7xl font-serif text-text leading-[0.85] mb-8">
                        The <br /> <i className="text-gold italic font-light">Quiet</i> <br /> Life.
                    </h2>
                    <div className="w-24 h-[1px] bg-gold/30 mt-12"></div>
                </div>

                <div className="md:w-2/3">
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-4xl md:leading-[1.2] font-serif text-text/90 mb-24 indent-[10%] max-w-[95%]"
                    >
                        We gather on the <span className="text-gold italic">pristine</span> shores of Goa to celebrate a milestone.
                        A weekend of vintage glamour, where time slows down and every sunset is a ceremony.
                    </motion.p>

                    <div className="grid md:grid-cols-2 gap-20">
                        <div className="pt-8 border-t border-gold/10">
                            <p className="font-sans text-[9px] tracking-[0.5em] uppercase mb-8 text-gold/50">Volume I / The Vibe</p>
                            <p className="text-lg leading-[1.8] text-text/70 font-light pl-0">
                                A tiny emerald land on the west coast of India, Goa is a former Portuguese colony with a rich history.
                                It is not just a place, but a state of mind.
                            </p>
                        </div>
                        <div className="bg-gold/[0.03] p-12 border border-gold/10 backdrop-blur-sm self-start">
                            <p className="font-sans text-[9px] tracking-[0.5em] uppercase mb-8 text-gold/50">Volume II / Susegad</p>
                            <p className="text-lg leading-[1.8] text-text/70 font-light">
                                The concept of <span className="text-gold italic font-serif text-2xl">susegad</span> — quiet satisfaction — reflects the unique blend of culture here.
                                It is the art of living well, slowly, and with intention.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const Itinerary = () => {
    const [activeTab, setActiveTab] = useState('goa');

    const tabs = [
        { id: 'mumbai', label: 'Mumbai Leg' },
        { id: 'goa', label: 'Goa Celebration' },
        { id: 'departure', label: 'Departure' },
    ];

    const content: Record<string, any[]> = {
        mumbai: [
            { date: 'Sept 28/29, 2026', title: 'Arrival in Mumbai', desc: 'Land in Mumbai. Transfer to accommodation.' },
            { date: 'Sept 30, 2026', title: 'Guided Tour & Dinner', desc: <>Guided tour of Mumbai once numbers are confirmed. <br />Dinner at <a href="https://www.instagram.com/soulfrybandra?igsh=ZGJ0ODk3M3pjb2Vk" target="_blank" className="text-gold underline underline-offset-4">Soul Fry Bandra</a>.</> },
        ],
        goa: [
            { date: 'Oct 1, 2026', title: 'Fly to Goa', desc: 'Group flight to Goa. Check-in at accommodation.' },
            { date: 'Oct 2, 2026', title: 'Old Goa & City Tour', desc: <>Guided tour of Old Goa and town. <br />Group Dinner in Goa.</> },
            { date: 'Oct 3, 2026 • 6:00 PM', title: "Yemee's 50th Party", desc: <>The Main Event at <a href="https://bay15.in/thegallery/" target="_blank" className="text-gold underline underline-offset-4 font-bold">Bay 15 (The Gallery)</a>. <br />Dress Code: Extravagant Vintage.</> },
        ],
        departure: [
            { date: 'Oct 4, 2026', title: 'Recovery', desc: 'Relax, beach day, and recovery brunch.' },
            { date: 'Oct 5, 2026', title: 'Depart', desc: 'Fly back home or continue your journey.' },
        ]
    };

    return (
        <section id="itinerary" className="py-32 bg-[#050505] text-text relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent"></div>
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-gold text-xs tracking-[0.6em] uppercase block mb-4">The Schedule</span>
                    <h2 className="text-4xl md:text-6xl font-serif text-text/90 italic font-light">The Itinerary</h2>
                    <div className="w-16 h-[1px] bg-gold/40 mx-auto mt-8"></div>
                </div>

                <div className="flex flex-wrap justify-center gap-2 mb-20 border-b border-gold/10">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-8 py-6 uppercase tracking-[0.4em] text-[9px] md:text-[10px] transition-all duration-700 relative group ${activeTab === tab.id
                                ? 'text-gold'
                                : 'text-text/40 hover:text-text/70'
                                }`}
                        >
                            {tab.label}
                            {activeTab === tab.id && (
                                <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-[1px] bg-gold"></motion.div>
                            )}
                        </button>
                    ))}
                </div>

                <div className="min-h-[450px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="space-y-16 max-w-3xl mx-auto pl-12 border-l border-gold/10"
                        >
                            {content[activeTab].map((item, index) => (
                                <div key={index} className="relative group">
                                    <span className="absolute -left-[54px] top-1 w-2.5 h-2.5 bg-bg border border-gold rounded-full group-hover:bg-gold transition-colors duration-500 shadow-[0_0_10px_rgba(191,149,63,0.3)]"></span>
                                    <span className="block text-gold/60 font-sans text-[10px] md:text-xs mb-4 tracking-[0.3em] uppercase">{item.date}</span>
                                    <h3 className="text-2xl md:text-3xl font-serif mb-4 text-text/90 group-hover:text-gold transition-colors duration-500">{item.title}</h3>
                                    <p className="text-text/50 font-light leading-loose text-lg max-w-2xl">{item.desc}</p>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

const Details = () => (
    <section id="details" className="py-40 md:py-64 bg-bg px-6 relative border-t border-gold/10 overflow-hidden">
        {/* Artistic Background Elements */}
        <div className="absolute inset-0 bg-motif-organic pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-bloom opacity-20 -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

        {/* Large Decorative Vase Silhouette (SVG) */}
        <div className="absolute -left-20 top-40 w-[400px] h-auto opacity-[0.03] pointer-events-none text-gold rotate-12">
            <svg viewBox="0 0 200 400" className="w-full h-full fill-current">
                <path d="M100,0 C120,0 140,20 140,50 L140,80 C140,120 180,150 180,220 C180,320 140,380 100,380 C60,380 20,320 20,220 C20,150 60,120 60,80 L60,50 C60,20 80,0 100,0 Z" />
                <path d="M60,100 Q100,120 140,100" fill="none" stroke="currentColor" strokeWidth="1" />
                <path d="M65,150 Q100,180 135,150" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-0">

                {/* Visual Anchor (Large Image with Overlay) */}
                <div className="w-full lg:w-3/5 relative group">
                    <div className="absolute -inset-8 border border-gold/10 pointer-events-none z-0 scale-95 group-hover:scale-100 transition-transform duration-1000"></div>
                    <div className="aspect-[4/5] md:aspect-[16/10] lg:aspect-[4/3] overflow-hidden relative shadow-2xl">
                        <img
                            src="/assets/images/hero-bg-light.png"
                            className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-[3s] ease-out"
                            style={{ filter: 'grayscale(100%) brightness(0.7) contrast(1.2) sepia(0.1)' }}
                            alt="The Venue Vibe"
                        />
                        {/* Glassmorphism Badge */}
                        <div className="absolute bottom-12 left-12 p-8 bg-bg/40 backdrop-blur-xl border border-gold/20 max-w-xs shadow-2xl">
                            <span className="text-gold text-[10px] tracking-[0.6em] uppercase block mb-4">Location Highlight</span>
                            <h4 className="text-2xl font-serif text-text mb-4">The Gallery at Bay 15</h4>
                            <p className="text-text/50 text-xs font-light leading-relaxed">
                                A stunning waterfront venue where Portuguese architecture meets the Arabian Sea.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Content Overlay/Magazine Layout */}
                <div className="w-full lg:w-2/5 lg:-ml-20 relative z-20">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#0D0D0D] p-12 md:p-20 border border-gold/10 shadow-[50px_50px_100px_rgba(0,0,0,0.8)]"
                    >
                        <span className="text-gold-gradient text-xs tracking-[0.6em] uppercase block mb-8">The Experience</span>
                        <h2 className="text-6xl md:text-8xl font-serif text-text mb-12 leading-[0.8] tracking-tighter">
                            Arts of <br />
                            <span className="text-gold italic font-light ml-8 md:ml-12">Leisure</span>
                        </h2>

                        <div className="flex gap-8 mb-16">
                            <div className="w-[1px] h-24 bg-gradient-to-b from-gold/50 to-transparent"></div>
                            <p className="text-text/60 text-lg md:text-xl font-light leading-relaxed">
                                We've curated a stay that reflects the soulful <span className="text-gold/80 italic">susegad</span> spirit. Luxury, history, and the sea.
                            </p>
                        </div>

                        <div className="space-y-12">
                            <div className="group cursor-default">
                                <div className="flex justify-between items-end mb-4 border-b border-gold/10 pb-4 group-hover:border-gold/30 transition-colors">
                                    <div>
                                        <h5 className="font-serif text-2xl text-text/90 group-hover:text-gold transition-colors">Accommodation</h5>
                                        <p className="text-[10px] tracking-widest text-text/30 uppercase mt-1">Preferential Rates</p>
                                    </div>
                                    <span className="text-2xl font-serif text-gold">₹6,000</span>
                                </div>
                                <p className="text-text/40 text-xs font-light leading-relaxed">
                                    Per night inclusive of breakfast & taxes. Managed by YouV Tours.
                                </p>
                            </div>

                            <div className="pt-8">
                                <a
                                    href="mailto:youvtours@gmail.com"
                                    className="inline-flex items-center gap-6 group/link"
                                >
                                    <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center group-hover/link:bg-gold transition-all duration-500">
                                        <Send className="w-4 h-4 text-gold group-hover/link:text-bg transition-colors" />
                                    </div>
                                    <span className="text-text uppercase tracking-[0.4em] text-[10px] font-bold border-b border-gold/20 pb-1">Inquire via Email</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
);


const RSVPForm = () => {
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const InputField = ({ label, type = "text", placeholder = "", id }: any) => (
        <div className="relative mb-12 group">
            <label
                htmlFor={id}
                className={`absolute left-0 transition-all duration-500 pointer-events-none font-sans ${focusedField === id || (document.getElementById(id) as HTMLInputElement)?.value
                    ? '-top-8 text-[10px] text-gold tracking-[0.4em] uppercase'
                    : 'top-2 text-text/30 text-sm tracking-widest'
                    }`}
            >
                {label}
            </label>
            <input
                type={type}
                id={id}
                placeholder={focusedField === id ? placeholder : ''}
                className="w-full bg-transparent border-b border-gold/10 py-3 text-text/90 focus:outline-none focus:border-gold transition-colors duration-500 font-sans text-sm"
                onFocus={() => setFocusedField(id)}
                onBlur={(e) => !e.target.value && setFocusedField(null)}
            />
        </div>
    );

    return (
        <section id="rsvp" className="py-40 px-6 bg-[#030303] relative border-t border-gold/10">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-24">
                    <span className="text-gold text-xs tracking-[0.6em] uppercase block mb-4">Response</span>
                    <h2 className="text-4xl md:text-6xl font-serif text-text mb-6 italic font-light">RSVP</h2>
                    <p className="text-text/40 tracking-[0.5em] text-[10px] uppercase">Kindly confirm your presence by Aug 2026</p>
                    <div className="w-12 h-[1px] bg-gold/30 mx-auto mt-12"></div>
                </div>

                <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-x-12">
                        <InputField label="Full Name" id="name" placeholder="John Doe" />
                        <InputField label="Email Address" id="email" type="email" placeholder="john@example.com" />
                    </div>

                    <div className="mb-16">
                        <label className="block text-[10px] text-gold/50 tracking-[0.5em] uppercase mb-8">Will you be attending?</label>
                        <div className="flex gap-12">
                            <label className="flex items-center gap-4 cursor-pointer group">
                                <input type="radio" name="attendance" className="peer sr-only" />
                                <div className="w-6 h-6 border border-gold/20 rounded-none peer-checked:bg-gold transition-all relative flex items-center justify-center">
                                    <div className="w-2.5 h-2.5 bg-bg opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                                </div>
                                <span className="text-text/50 group-hover:text-text transition-colors text-xs tracking-widest uppercase">Honoured to attend</span>
                            </label>
                            <label className="flex items-center gap-4 cursor-pointer group">
                                <input type="radio" name="attendance" className="peer sr-only" />
                                <div className="w-6 h-6 border border-gold/20 rounded-none peer-checked:bg-text relative flex items-center justify-center">
                                    <div className="w-2.5 h-2.5 bg-bg opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                                </div>
                                <span className="text-text/50 group-hover:text-text transition-colors text-xs tracking-widest uppercase">Regretfully decline</span>
                            </label>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-12">
                        <InputField label="Number of Guests" id="guests" type="number" placeholder="1" />
                        <InputField label="Dietary Requirements" id="diet" placeholder="Vegetarian, allergies..." />
                    </div>

                    <div className="relative mb-20 group">
                        <label className="block text-[10px] text-gold/50 tracking-[0.5em] uppercase mb-4">A Note for the Hostess</label>
                        <textarea
                            className="w-full bg-gold/[0.02] border border-gold/10 p-6 text-text/80 focus:outline-none focus:border-gold transition-colors duration-500 font-sans min-h-[150px] resize-none text-sm placeholder:text-text/10"
                            placeholder="Share your wishes or questions..."
                        ></textarea>
                    </div>

                    <button className="w-full bg-gold hover:bg-gold-light text-bg uppercase tracking-[0.4em] py-6 text-xs font-bold transition-all duration-700 relative group overflow-hidden shadow-2xl">
                        <span className="relative z-10">Submit Response</span>
                        <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-[1.5s] ease-in-out"></div>
                    </button>
                </form>
            </div>
        </section>
    );
};

const Footer = () => (
    <footer className="py-20 bg-bg border-t border-gold/10 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-[0.02] pointer-events-none"></div>
        <div className="max-w-xs mx-auto mb-10">
            <div className="w-full h-[1px] bg-gold/20 mb-10"></div>
            <div className="font-serif text-3xl text-gold italic mb-2">YF</div>
            <div className="text-[10px] tracking-[1em] text-gold/40 uppercase mb-10 ml-[1em]">Golden Jubilee</div>
            <div className="w-full h-[1px] bg-gold/20"></div>
        </div>
        <p className="text-text/30 text-[9px] tracking-[0.6em] uppercase">&copy; 2026 / Yemee Fernandes 50th / Goa</p>
    </footer>
);

// --- MAIN APP ---

function App() {
    return (
        <main className="bg-bg text-text selection:bg-gold/20">
            <Navigation />
            <Hero />
            <Intro />
            <Itinerary />
            <Details />
            <RSVPForm />
            <Footer />
        </main>
    );
}

export default App;
