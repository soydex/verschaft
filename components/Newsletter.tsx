import React, { useState } from "react";
import { motion } from "framer-motion";

const Newsletter: React.FC = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setStatus("loading");
            // Simulate API call
            setTimeout(() => {
                setStatus("success");
                setEmail("");
                setTimeout(() => setStatus("idle"), 3000);
            }, 1000);
        }
    };

    return (
        <section id="waitlist" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-8 relative z-10">
                <motion.div
                    className="max-w-4xl mx-auto glass-card p-8 md:p-12 rounded-3xl text-center relative overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Background Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#a16eff10] to-transparent pointer-events-none" />

                    <motion.h2
                        className="font-space-grotesk text-3xl md:text-5xl font-bold tracking-tighter mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className="text-white">Join the </span>
                        <span className="text-gradient">Waitlist</span>
                    </motion.h2>

                    <motion.p
                        className="font-manrope text-zinc-400 text-lg mb-8 max-w-xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Be the first to experience the future of digital spaces. Get early access and exclusive rewards.
                    </motion.p>

                    <motion.form
                        onSubmit={handleSubmit}
                        className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto relative z-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <input
                            type="email"
                            aria-label="Email address"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            disabled={status === "loading" || status === "success"}
                            className="flex-1 bg-zinc-900/50 border border-zinc-800 rounded-full px-6 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-[#A16EFF] transition-colors font-manrope disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                        <motion.button
                            type="submit"
                            disabled={status === "loading" || status === "success"}
                            className="font-urbanist font-bold text-zinc-900 bg-gradient-to-r from-[#A16EFF] via-[#60F9B8] to-[#00B8FF] px-8 py-4 rounded-full shadow-lg whitespace-nowrap transition-all duration-300 min-w-[140px] flex items-center justify-center disabled:opacity-80 disabled:cursor-not-allowed"
                            whileHover={status === "idle" ? { scale: 1.05 } : {}}
                            whileTap={status === "idle" ? { scale: 0.95 } : {}}
                        >
                            {status === "loading" ? (
                                <svg className="animate-spin h-5 w-5 text-zinc-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            ) : status === "success" ? (
                                "You're in!"
                            ) : (
                                "Join Now"
                            )}
                        </motion.button>
                    </motion.form>
                </motion.div>
            </div>
        </section>
    );
};

export default Newsletter;
