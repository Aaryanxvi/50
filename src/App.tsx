import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowDown, Check, send } from 'lucide-react';

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
        <nav className={`fixed top-0 w-full px-6 py-6 md:px-12 z-50 flex justify-between items-center transition-all duration-700 ${isScrolled ? 'bg-bg/90 shadow-sm py-4 backdrop-blur-md' : 'bg-transparent py-8'
            }`}>
            <div className="font-serif font-bold text-2xl text-text tracking-tighter uppercase">Yemee 50</div>
            <a href="#rsvp" className="text-text uppercase tracking-widest text-[10px] md:text-xs font-semibold group relative hover:opacity-70 transition-opacity">
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
        <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
            <motion.div style={{ y }} className="absolute inset-0 z-0">
                <img
                    src="/assets/images/hero-bg-light.png"
                    alt="Goa Beach"
                    className="w-full h-full object-cover opacity-90 brightness-110 saturate-[0.8] scale-105"
                />
            </motion.div>

            <motion.div
                style={{ opacity }}
                className="relative z-10 w-full px-6 md:px-12 flex flex-col justify-between h-full py-32 md:py-20"
            >
                <div></div> {/* Spacer */}

                <div className="max-w-[90vw]">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative"
                    >
                        <h1 className="text-[18vw] leading-[0.85] font-serif text-text uppercase tracking-tighter mix-blend-multiply opacity-90">
                            Goa
                            <span className="block text-[6vw] tracking-normal lowercase italic text-gold absolute top-[10%] right-[10%] opacity-80 font-serif">Est. 2026</span>
                        </h1>
                        <h1 className="text-[18vw] leading-[0.85] font-serif text-text/80 uppercase tracking-tighter ml-[10vw] mix-blend-multiply">
                            Jubilee
                        </h1>
                    </motion.div>
                </div>

                <div className="flex justify-between items-end border-t border-text/20 pt-8">
                    <p className="font-sans text-sm md:text-base tracking-[0.2em] uppercase text-text/60 max-w-xs">
                        Ref. Yemee's 50th<br />
                        Oct 03 — 05
                    </p>
                    <Countdown />
                </div>
            </motion.div>

            <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.04] bg-grain mix-blend-multiply"></div>
        </section>
    );
};

const Countdown = () => {
    return (
        <div className="flex gap-8 md:gap-12 font-serif bg-white/30 backdrop-blur-sm px-6 py-3 rounded-full border border-white/40">
            {['Days', 'Hours', 'Mins'].map((label, i) => (
                <div key={label} className="flex flex-col items-center">
                    <span className="text-2xl md:text-3xl font-normal text-text">00</span>
                    <span className="text-[8px] uppercase tracking-widest text-text/50">{label}</span>
                </div>
            ))}
        </div>
    );
};

const Intro = () => (
    <section className="py-40 bg-bg relative overflow-hidden">
        {/* Artistic Background Element */}
        <div className="absolute top-0 right-0 w-[50vw] h-full bg-[#E6E2D6] -skew-x-12 z-0 origin-top"></div>

        <div className="relative z-10 container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row gap-16 md:gap-32 items-start">
                <div className="md:w-1/3 pt-20">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="block text-gold font-sans text-xs tracking-[0.3em] uppercase mb-8 border-l-2 border-gold pl-4"
                    >
                        The Destination
                    </motion.span>
                    <h2 className="text-6xl md:text-8xl font-serif text-text leading-[0.9] mb-8">
                        The <br /> <i className="text-gold opacity-80">Quiet</i> <br /> Life.
                    </h2>
                </div>

                <div className="md:w-2/3">
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl md:text-4xl leading-tight font-serif text-text mb-16 indent-20"
                    >
                        We gather on the pristine shores of Goa to celebrate a milestone.
                        A weekend of vintage glamour, where time slows down and every sunset is a ceremony.
                    </motion.p>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <p className="font-sans text-sm tracking-widest uppercase mb-4 text-text/40">The Vibe</p>
                            <p className="text-lg leading-relaxed text-text/70 font-light border-l border-text/10 pl-6">
                                A tiny emerald land on the west coast of India, Goa is a former Portuguese colony with a rich history.
                                It is not just a place, but a state of mind.
                            </p>
                        </div>
                        <div>
                            <p className="font-sans text-sm tracking-widest uppercase mb-4 text-text/40">Susegad</p>
                            <p className="text-lg leading-relaxed text-text/70 font-light border-l border-text/10 pl-6">
                                The concept of <span className="text-gold italic font-serif text-xl">susegad</span> — quiet satisfaction — reflects the unique blend of culture here.
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
            { date: 'Oct 3, 2026 • 6:00 PM', title: "Yemee's 50th Party", desc: <>The Main Event at <a href="https://bay15.in/thegallery/" target="_blank" className="text-gold underline underline-offset-4">Bay 15 (The Gallery)</a>. <br />Dress Code: Extravagant Vintage.</> },
        ],
        departure: [
            { date: 'Oct 4, 2026', title: 'Recovery', desc: 'Relax, beach day, and recovery brunch.' },
            { date: 'Oct 5, 2026', title: 'Depart', desc: 'Fly back home or continue your journey.' },
        ]
    };

    return (
        <section id="itinerary" className="py-24 bg-text text-bg relative">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-center text-4xl md:text-5xl font-serif text-gold mb-16">The Itinerary</h2>

                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-8 py-3 uppercase tracking-widest text-xs md:text-sm transition-all duration-300 border border-gold ${activeTab === tab.id
                                ? 'bg-gold text-text font-bold'
                                : 'bg-transparent text-gold hover:bg-gold/10'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                            className="space-y-12 pl-8 border-l border-gold/30"
                        >
                            {content[activeTab].map((item, index) => (
                                <div key={index} className="relative group">
                                    <span className="absolute -left-[39px] top-2 w-5 h-5 bg-text border border-gold rounded-full group-hover:bg-gold transition-colors duration-300"></span>
                                    <span className="block text-gold font-bold mb-2 tracking-widest text-sm">{item.date}</span>
                                    <h3 className="text-2xl md:text-3xl font-serif mb-3">{item.title}</h3>
                                    <p className="text-bg/60 font-light leading-relaxed">{item.desc}</p>
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
    <section id="details" className="py-24 md:py-32 bg-bg px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-4xl md:text-6xl font-serif text-text mb-6">The Venue <br /><span className="text-gold italic">& Play</span></h2>
                <p className="text-text/70 mb-10 text-lg font-light leading-relaxed">
                    We have secured accommodation at a preferred rate. Please note that availability is on a first-come, first-serve basis.
                </p>

                <div className="p-8 border border-gold/30 bg-white/50 backdrop-blur-sm shadow-[0_20px_40px_rgba(0,0,0,0.03)]">
                    <h3 className="font-serif text-2xl mb-4 text-text">Accommodation Cost</h3>
                    <p className="text-4xl md:text-5xl text-gold font-serif mb-2">₹6,000 INR <span className="text-base text-text/40 font-sans tracking-widest">/ night</span></p>
                    <p className="text-text/60 mb-8">(Approx. $100 USD). Includes taxes & breakfast.</p>

                    <div className="border-t border-text/10 pt-6">
                        <p className="text-sm text-text/50 uppercase tracking-widest mb-4">For bookings & tours contact:</p>
                        <p className="font-bold text-lg mb-1">Vikas at YouV Tours</p>
                        <a href="mailto:youvtours@gmail.com" className="text-gold hover:text-gold-light transition-colors underline underline-offset-4">youvtours@gmail.com</a>
                        <p className="text-xs text-text/40 mt-2 italic">Ref: Yemee Fernandes</p>
                    </div>
                </div>
            </div>

            <div className="relative h-[600px] bg-[#E6DCC6] overflow-hidden group">
                <img
                    src="/assets/images/hero-bg-light.png"
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out grayscale"
                    alt="Venue Vibe"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-white/90 backdrop-blur px-6 py-3 uppercase tracking-widest text-xs font-bold border border-text/10">Venue details</span>
                </div>
            </div>
        </div>
    </section>
);

const RSVPForm = () => {
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const InputField = ({ label, type = "text", placeholder = "", id }: any) => (
        <div className="relative mb-8 group">
            <label
                htmlFor={id}
                className={`absolute left-0 transition-all duration-300 pointer-events-none font-sans ${focusedField === id || (document.getElementById(id) as HTMLInputElement)?.value
                    ? '-top-6 text-xs text-gold tracking-widest uppercase'
                    : 'top-2 text-text/40 text-sm'
                    }`}
            >
                {label}
            </label>
            <input
                type={type}
                id={id}
                placeholder={focusedField === id ? placeholder : ''}
                className="w-full bg-transparent border-b border-text/20 py-2 text-text focus:outline-none focus:border-gold transition-colors duration-300 font-sans"
                onFocus={() => setFocusedField(id)}
                onBlur={(e) => !e.target.value && setFocusedField(null)}
            />
        </div>
    );

    return (
        <section id="rsvp" className="py-32 px-6 bg-white">
            <div className="max-w-xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-text mb-4">RSVP</h2>
                    <p className="text-text/60 tracking-widest text-sm uppercase">Kindly confirm your presence</p>
                </div>

                <form className="space-y-2">
                    <InputField label="Full Name *" id="name" placeholder="Your full name" />
                    <InputField label="Email Address *" id="email" type="email" placeholder="your@email.com" />

                    <div className="mb-10">
                        <label className="block text-xs text-gold tracking-widest uppercase mb-4">Will you be attending? *</label>
                        <div className="flex gap-6">
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <input type="radio" name="attendance" className="peer sr-only" />
                                <div className="w-5 h-5 border border-text/30 rounded-full peer-checked:border-gold peer-checked:bg-gold transition-all relative flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                                </div>
                                <span className="text-text/60 group-hover:text-text transition-colors">Yes, I'll be there!</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <input type="radio" name="attendance" className="peer sr-only" />
                                <div className="w-5 h-5 border border-text/30 rounded-full peer-checked:text-text  relative flex items-center justify-center"></div>
                                <span className="text-text/60 group-hover:text-text transition-colors">Regretfully, no</span>
                            </label>
                        </div>
                    </div>

                    <InputField label="Number of Guests" id="guests" type="number" placeholder="1" />

                    <div className="relative mb-8 group">
                        <label className="block text-xs text-gold tracking-widest uppercase mb-2">Dietary Requirements</label>
                        <textarea
                            className="w-full bg-bg/50 border border-text/10 p-4 text-text focus:outline-none focus:border-gold transition-colors duration-300 font-sans min-h-[100px] resize-none rounded-sm"
                            placeholder="Vegetarian, allergies, etc."
                        ></textarea>
                    </div>

                    <div className="relative mb-12 group">
                        <label className="block text-xs text-gold tracking-widest uppercase mb-2">Message for Yemee</label>
                        <textarea
                            className="w-full bg-bg/50 border border-text/10 p-4 text-text focus:outline-none focus:border-gold transition-colors duration-300 font-sans min-h-[100px] resize-none rounded-sm"
                            placeholder="Share your birthday wishes or any questions..."
                        ></textarea>
                    </div>

                    <button className="w-full bg-gold hover:bg-gold-light text-white uppercase tracking-[0.2em] py-4 text-sm font-semibold transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
                        Send RSVP
                    </button>
                </form>
            </div>
        </section>
    );
};

const Footer = () => (
    <footer className="py-12 bg-bg border-t border-black/5 text-center">
        <p className="text-text/40 text-xs tracking-widest uppercase">&copy; 2025 Yemee's 50th Birthday Celebration</p>
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
