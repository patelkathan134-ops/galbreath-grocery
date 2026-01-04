import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBasket, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { clsx } from 'clsx';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Deli Menu', path: '/deli' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={clsx(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                {
                    'bg-white/95 backdrop-blur-md shadow-sm py-2': isScrolled,
                    'bg-white/50 backdrop-blur-sm py-4': !isScrolled,
                }
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="bg-forest text-white p-2 rounded-lg group-hover:bg-forest-light transition-colors">
                            <ShoppingBasket size={24} />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-forest leading-none">Galbreath</h1>
                            <span className="text-xs text-wood font-medium tracking-wider uppercase">Grocery</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={clsx(
                                    'text-sm font-medium transition-colors hover:text-orange',
                                    location.pathname === link.path ? 'text-forest font-bold' : 'text-wood'
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button size="sm" variant="primary" className="gap-2">
                            <MapPin size={16} />
                            Find Us
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-forest p-2"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-stone-100 shadow-xl animate-in slide-in-from-top-2">
                    <div className="flex flex-col p-4 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={clsx(
                                    'text-lg font-medium py-2 border-b border-stone-50 last:border-0',
                                    location.pathname === link.path ? 'text-forest' : 'text-wood'
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button className="w-full gap-2 mt-4">
                            <MapPin size={16} />
                            Find Us
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
};
