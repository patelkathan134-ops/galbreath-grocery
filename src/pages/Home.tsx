import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ShoppingBag, UtensilsCrossed, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 bg-groceries bg-cover bg-center"
                    aria-hidden="true"
                >
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[3px]" />
                </div>

                {/* Hero Content */}
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <Card className="max-w-2xl mx-auto text-center p-8 md:p-12 border-white/10 bg-black/40 backdrop-blur-md shadow-2xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-xl">
                            Freshness From Our Family to Yours
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg mx-auto leading-relaxed font-medium drop-shadow-md">
                            Serving the Goodlettsville community with premium local produce, quality meats, and everyday essentials since 1952.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">

                            <Link to="/deli">
                                <Button size="lg" variant="primary" className="w-full sm:w-auto shadow-lg hover:shadow-xl hover:scale-105 transition-all text-lg px-8 py-6 bg-orange hover:bg-orange/90 text-white border-none">
                                    Order from Deli
                                </Button>
                            </Link>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Core Services Grid */}
            <Section className="bg-cream">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">Your Neighborhood Market</h2>
                    <p className="text-wood/80 max-w-2xl mx-auto">
                        We take pride in offering the best local products and personalized service you can't find at big box stores.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: ShoppingBag,
                            title: "Fresh Produce",
                            description: "Hand-picked fruits and vegetables, delivered fresh daily to our store.",
                            link: "/deli"
                        },
                        {
                            icon: UtensilsCrossed,
                            title: "Full-Service Deli",
                            description: "Signature sandwiches, hot meals, and custom sliced meats and cheeses prepared right in front of you.",
                            link: "/deli"
                        },
                        {
                            icon: Sparkles,
                            title: "Custom Butcher Cuts",
                            description: "Premium quality meats cut to your exact specifications by our experienced in-house butchers.",
                            link: "/deli"
                        }
                    ].map((service, index) => (
                        <Link key={index} to={service.link} className="block group h-full">
                            <Card className="h-full p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-stone-100">
                                <div className="mb-6 p-4 bg-forest/5 rounded-full w-fit group-hover:bg-forest/10 transition-colors">
                                    <service.icon className="h-8 w-8 text-forest" />
                                </div>
                                <h3 className="text-xl font-bold text-wood mb-3 group-hover:text-forest transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-wood/70 leading-relaxed">
                                    {service.description}
                                </p>
                            </Card>
                        </Link>
                    ))}
                </div>
            </Section>

            {/* USP / History Section */}
            <Section className="bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                        {/* Placeholder for local image */}
                        <div className="absolute inset-0 bg-stone-200 flex items-center justify-center text-stone-400">
                            <img src="/images/store-interior.jpg"
                                alt="Galbreath Grocery Store Interior"
                                className="object-cover object-top w-full h-full hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 space-y-6">
                        <div className="inline-block px-4 py-1.5 bg-orange/10 text-orange font-semibold rounded-full text-sm tracking-wide">
                            LOCALLY OWNED SINCE 1952
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-forest">
                            A Goodlettsville Tradition
                        </h2>
                        <p className="text-lg text-wood/80 leading-relaxed">
                            For over 70 years, Galbreath Grocery has been more than just a place to shop. We're a gathering place for neighbors, a supporter of local schools, and a champion of Tennessee agriculture.
                        </p>
                        <ul className="space-y-3">
                            {[
                                "Community-First Service",
                                "Daily Fresh Deliveries",
                                "Competitive Local Pricing",
                                "Curbside Pickup Available"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-wood">
                                    <div className="h-2 w-2 rounded-full bg-forest" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Link to="/about">
                            <Button variant="outline" className="mt-4">
                                Learn More About Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </Section>
        </div>
    );
}
