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
                        Serving Goodlettsville and supporting Tennessee farmers since 1941.
                    </p>
                </div>
            </div>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-forest">The Galbreath Story</h2>
                        <p className="text-wood/80 leading-relaxed">
                            Galbreath Grocery began in 1941 when Bob Galbreath opened a small roadside stand with little more than determination, hard work, and a belief that good, wholesome food should always feel like home. Neighbors would stop by not only for fresh produce, but to share stories, exchange smiles, and feel the comfort of a place where everyone belonged. Over the years, that simple stand grew into a gathering place filled with familiar faces, warm memories, and a deep sense of community pride.
                        </p>
                        <p className="text-wood/80 leading-relaxed">
                            For more than seven decades, the Galbreath name represented honesty, care, and the kind of personal connection that only comes from knowing your customers by heart. The store stood through changing times and growing families, always remaining a reminder of where the community started and what truly mattered.
                        </p>
                        <p className="text-wood/80 leading-relaxed">
                            In 2014, Galbreath Grocery began a new chapter when Mike Patel purchased the store with great respect for its history and the people who built it. Mike chose to honor the traditions that shaped the business while nurturing its future, carrying forward the same neighborly spirit that Bob Galbreath brought to life in 1941.
                        </p>
                        <p className="text-wood/80 leading-relaxed">
                            Today, Galbreath Grocery remains a place where stories linger in the aisles and roots run deep. We know the farmers who grow our food, we greet our customers by name, and we treasure the relationships that have grown here across generations. When you shop with us, you are not only bringing home groceries. You are helping keep a living piece of community history alive.
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
