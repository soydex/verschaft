import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "Is it free to join Verschaft?",
        answer:
            "Yes! Creating your account and your first basic room is completely free. We will offer premium features and exclusive items for purchase later.",
        keywords: ["Free to play", "Premium features", "Early access"],
    },
    {
        question: "Do I need a VR headset?",
        answer:
            "Not at all. Verschaft is built to be accessible directly from your web browser on desktop and mobile. VR support is on our roadmap for the future.",
        keywords: ["Browser based", "Mobile ready", "No headset needed"],
    },
    {
        question: "Can I invite friends to my room?",
        answer:
            "Absolutely. Every user gets a unique link to their space. You can share this link with anyone, and they can visit your room in real-time.",
        keywords: ["Multiplayer", "Real-time", "Social sharing"],
    },
    {
        question: "When is the official launch?",
        answer:
            "We are currently in the prototype phase. The public beta is scheduled for later this year. Join the waitlist to get early access!",
        keywords: ["Prototype", "Public Beta", "Roadmap"],
    },
];

const FAQ: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 relative">
            <div className="container mx-auto px-6 md:px-8 max-w-4xl">
                <motion.h2
                    className="font-space-grotesk text-4xl md:text-5xl font-bold tracking-tighter text-center mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-white">Got Questions?</span>
                </motion.h2>
                <motion.p
                    className="text-center text-zinc-400 text-lg mb-12 font-manrope"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    We have the <span className="text-gradient font-bold italic">answers</span>.
                </motion.p>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`glass-card rounded-2xl overflow-hidden border border-white/5 transition-all duration-300 ${activeIndex === index ? "border-[#A16EFF]/50 shadow-[0_0_30px_-10px_rgba(161,110,255,0.3)]" : "hover:border-white/10"
                                }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className={`w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none transition-colors ${activeIndex === index ? "bg-white/5" : "hover:bg-white/5"
                                    }`}
                            >
                                <span className="font-space-grotesk text-lg font-medium text-white pr-4">
                                    {faq.question}
                                </span>
                                <motion.span
                                    className="text-2xl text-cyan-400 flex-shrink-0"
                                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {activeIndex === index ? "−" : "+"}
                                </motion.span>
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 bg-white/5">
                                            <div className="flex flex-wrap items-center mb-4 gap-2">
                                                {/* Keywords */}
                                                {faq.keywords.map((keyword, idx) => (
                                                    <motion.span
                                                        key={idx}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ duration: 0.2, delay: idx * 0.05 }}
                                                        className="font-urbanist text-xs font-bold uppercase tracking-wider text-[#60F9B8] bg-[#60F9B8]/10 border border-[#60F9B8]/20 rounded-full px-3 py-1"
                                                    >
                                                        {keyword}
                                                    </motion.span>
                                                ))}
                                            </div>
                                            <motion.div
                                                className="text-zinc-300 font-manrope leading-relaxed"
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3, delay: 0.1 }}
                                            >
                                                {faq.answer}
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;