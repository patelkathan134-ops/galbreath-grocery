import { Section } from '@/components/ui/Section';


export default function About() {
    return (
        <div className="bg-cream min-h-screen">
            {/* Hero */}
            <div className="relative h-[400px] bg-wood flex items-center justify-center">
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1572299839846-5c544c06f859?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-60" />
                <div className="relative z-10 text-center container px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Roots Run Deep</h1>
                    <p className="text-xl text-stone-200 max-w-2xl mx-auto">
                        Serving Goodlettsville and supporting Tennessee farmers since 1952.
                    </p>
                </div>
            </div>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-forest">The Galbreath Story</h2>
                        <p className="text-wood/80 leading-relaxed">
                            It started with a simple roadside stand. Grandpa Galbreath believed that everyone deserved access to fresh, wholesome food grown by their neighbors.
                            Today, three generations later, we still hold true to that mission. We aren't just a grocery store; we're a hub for the community.
                        </p>
                        <p className="text-wood/80 leading-relaxed">
                            We know our customers by name, and we know exactly where our produce comes from. When you shop with us, you aren't just buying groceries—you're supporting a local ecosystem of farmers, bakers, and makers.
                        </p>
                    </div>
                    <div className="aspect-square bg-stone-200 rounded-2xl overflow-hidden relative rotate-2 hover:rotate-0 transition-transform duration-500 shadow-xl">
                        <img
                            src="/images/store-interior.jpg"
                            alt="Inside Galbreath Grocery"
                            className="w-full h-full object-cover object-top"
                        />
                    </div>
                </div>


            </Section>
        </div>
    );
}
