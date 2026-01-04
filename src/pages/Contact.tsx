import React, { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSent, setIsSent] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "81f82441-81d2-4ffd-ac36-2d3959bc8d96",
                    ...formState,
                    subject: "New Message from Galbreath Grocery Website",
                }),
            });

            const result = await response.json();
            if (result.success) {
                setIsSent(true);
                setFormState({ name: '', email: '', message: '' });
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-cream min-h-screen">
            <div className="bg-forest text-white py-20 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
                <p className="text-xl text-stone-200">We'd love to hear from our neighbors.</p>
            </div>

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <Card className="p-8 md:p-10 order-2 lg:order-1">
                        <h2 className="text-2xl font-bold text-forest mb-6">Send us a Message</h2>
                        {isSent ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Send size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-forest mb-2">Message Sent!</h3>
                                <p className="text-wood/70">Thank you for reaching out. We'll get back to you shortly.</p>
                                <Button variant="ghost" className="mt-4" onClick={() => setIsSent(false)}>Send Another</Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-wood mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full px-4 py-2 rounded-md border border-stone-200 focus:outline-none focus:ring-2 focus:ring-forest"
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-wood mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full px-4 py-2 rounded-md border border-stone-200 focus:outline-none focus:ring-2 focus:ring-forest"
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-wood mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={5}
                                        className="w-full px-4 py-2 rounded-md border border-stone-200 focus:outline-none focus:ring-2 focus:ring-forest resize-none"
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    />
                                </div>
                                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </Button>
                            </form>
                        )}
                    </Card>

                    {/* Contact Info */}
                    <div className="space-y-8 order-1 lg:order-2">
                        <div>
                            <h3 className="text-2xl font-bold text-forest mb-6">Store Information</h3>
                            <p className="text-wood/80 mb-8 leading-relaxed">
                                Have a question about a product? Want to place a special order? Give us a call or stop by the store.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-white p-3 rounded-full shadow-sm text-forest">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-wood">Address</h4>
                                    <p className="text-wood/70">5778 Lickton Pike<br />Goodlettsville, TN 37072</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-white p-3 rounded-full shadow-sm text-forest">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-wood">Phone</h4>
                                    <p className="text-wood/80 hover:text-forest transition-colors">
                                        <a href="tel:+16158592604">(615) 859-2604</a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-white p-3 rounded-full shadow-sm text-forest">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-wood">Email</h4>
                                    <p className="text-wood/70">galbreathgrocery@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-white p-3 rounded-full shadow-sm text-forest">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-wood">Hours</h4>
                                    <div className="text-wood/70 grid grid-cols-2 gap-x-8 gap-y-1">
                                        <span>Mon - Fri</span><span>5:30am - 8:30pm</span>
                                        <span>Saturday</span><span>8am - 8:30pm</span>
                                        <span>Sunday</span><span>9am - 8:30pm</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
