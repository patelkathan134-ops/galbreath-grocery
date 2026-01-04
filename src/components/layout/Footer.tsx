import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-wood text-cream pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-white mb-4">Visit Us</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <MapPin className="text-orange mt-1 shrink-0" />
                                <div>
                                    <p className="font-medium text-white">Galbreath Grocery</p>
                                    <p className="text-stone-300">5778 Lickton Pike</p>
                                    <p className="text-stone-300">Goodlettsville, TN 37072</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className="text-orange shrink-0" />
                                <a href="tel:+16158592604" className="text-stone-300 hover:text-white transition-colors">
                                    (615) 859-2604
                                </a>
                            </div>
                            <div className="flex items-center gap-4">
                                <Mail className="text-orange shrink-0" />
                                <a href="mailto:galbreathgrocery@gmail.com" className="text-stone-300 hover:text-white transition-colors">
                                    galbreathgrocery@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Hours */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-white mb-4">Store Hours</h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-4">
                                <Clock className="text-orange mt-1 shrink-0" />
                                <div className="w-full space-y-2">
                                    <div className="flex justify-between text-stone-300 border-b border-white/10 pb-2">
                                        <span>Mon - Fri</span>
                                        <span>5:30 AM - 8:30 PM</span>
                                    </div>
                                    <div className="flex justify-between text-stone-300 border-b border-white/10 pb-2">
                                        <span>Saturday</span>
                                        <span>8:00 AM - 8:30 PM</span>
                                    </div>
                                    <div className="flex justify-between text-stone-300">
                                        <span>Sunday</span>
                                        <span>9:00 AM - 8:30 PM</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-white mb-4">Find Us</h3>
                        <div className="h-48 w-full rounded-lg overflow-hidden border-2 border-white/20">
                            <iframe
                                title="Galbreath Grocery Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102917.48512389144!2d-86.8155554366479!3d36.319777088914616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886443c57700af0b%3A0x1d58d9282305888d!2sGoodlettsville%2C%20TN!5e0!3m2!1sen!2sus!4v1715428381329!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-stone-400 text-sm">
                        © {new Date().getFullYear()} Galbreath Grocery. Family Owned Since 1941.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-orange transition-colors text-white">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-orange transition-colors text-white">
                            <Instagram size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

