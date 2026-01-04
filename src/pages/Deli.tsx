import { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

import { clsx } from 'clsx';
import { Utensils, Coffee, Soup, Flame, Pizza } from 'lucide-react';


const MENU_CATEGORIES = [
    { id: 'breakfast', label: 'Hot Breakfast', icon: Coffee },
    { id: 'cold_sandwiches', label: 'Cold Sandwiches', icon: Utensils },
    { id: 'hot_sandwiches', label: 'Hot Sandwiches', icon: Flame },
    { id: 'hot_sides', label: 'Pizza & Wings', icon: Pizza },
    { id: 'soups', label: 'Soups', icon: Soup },
];

const MENU_ITEMS: Record<string, Array<{ name: string; description: string; tag?: string; image?: string }>> = {
    breakfast: [
        { name: "Sausage Biscuit", description: "Freshly baked biscuit with savory sausage patty.", image: "/images/sausage-biscuit.png" },
        { name: "Sausage, Egg & Cheese", description: "Savory sausage, fluffy egg, and melted cheese on a biscuit.", image: "/images/sausage-egg-cheese.png" },
        { name: "Bacon Biscuit", description: "Crispy bacon on a warm buttermilk biscuit.", image: "/images/bacon-biscuit.png" },
        { name: "Bacon, Egg & Cheese", description: "Crispy bacon, egg, and melted cheese on a biscuit.", image: "/images/bacon-egg-cheese.png" },
        { name: "Chicken Biscuit", description: "Crimpy fried chicken breast on a buttered biscuit.", image: "/images/chicken-biscuit.png" },
        { name: "Chicken, Egg & Cheese", description: "Fried chicken, egg, and cheese on a biscuit.", tag: "Popular", image: "/images/chicken-egg-cheese.png" },
        { name: "Spicy Chicken Biscuit", description: "Spicy seasoned chicken breast on a biscuit.", tag: "Spicy", image: "/images/spicy-chicken.png" },
        { name: "Spicy Chicken, Egg & Cheese", description: "Spicy chicken with egg and cheese.", image: "/images/chicken-egg-cheese.png" },
        { name: "Fried Bologna Biscuit w/ Cheese", description: "Thick-cut fried bologna and cheese on a biscuit.", image: "/images/fried-bologna.png" },
        { name: "Steak Biscuit", description: "Country fried steak on a biscuit.", image: "/images/steak-biscuit.png" },
    ],
    cold_sandwiches: [
        { name: "Bologna Sandwich", description: "Classic sliced bologna with your choice of toppings.", image: "/images/bologna-sandwich.png" },
        { name: "Cajun Turkey", description: "Spicy Cajun turkey breast sliced thin.", image: "/images/turkey-sandwich.png" },
        { name: "Smoked Ham", description: "Hickory smoked ham piled high.", image: "/images/ham-sandwich.png" },
        { name: "Chicken Salad", description: "House-made creamy chicken salad.", tag: "Fresh", image: "/images/chicken-salad.jpg" },
        { name: "Tuna Salad", description: "Classic tuna salad with celery and mayo.", image: "/images/tuna-salad.png" },
        { name: "BBQ Sandwich", description: "Pulled pork BBQ with slaw.", image: "/images/bbq-sandwich.jpg" },
    ],
    hot_sandwiches: [
        { name: "Fried Bologna", description: "Thick slice of bologna, fried until crisp.", image: "/images/hot-sandwich.png" },
        { name: "Spicy Chicken", description: "Crispy chicken breast with spicy seasoning.", tag: "Spicy", image: "/images/hot-sandwich.png" },
        { name: "Regular Chicken", description: "Crispy fried chicken breast sandwich.", image: "/images/hot-sandwich.png" },
        { name: "Cheeseburger", description: "Juicy beef patty with melted cheese and fixings.", image: "/images/hot-sandwich.png" },
        { name: "Hamburger", description: "Classic beef patty on a bun.", image: "/images/hot-sandwich.png" },
        { name: "Steak Sandwich", description: "Tender steak served on a roll.", image: "/images/hot-sandwich.png" },
        { name: "BLT", description: "Bacon, lettuce, and tomato on toasted bread.", image: "/images/hot-sandwich.png" },
    ],
    hot_sides: [
        { name: "12 Inch Pizza", description: "Freshly baked whole pizza. Choose Regular or Thin Crust.", image: "/images/whole-pizza.png" },
        { name: "Chicken Wings", description: "Crispy wings, available in Buffalo or BBQ.", image: "/images/pizza-wings.png" },
        { name: "Chicken Bites", description: "Boneless breaded chicken pieces.", image: "/images/pizza-wings.png" },
    ],
    soups: [
        { name: "Chicken Dumplings", description: "Comforting creamy soup with tender dumplings.", image: "/images/soup.png" },
        { name: "Chili", description: "Hearty bean and beef chili.", tag: "Seasonal", image: "/images/chili.png" },
    ]
};

const TOPPINGS = [
    "Lettuce", "Tomato", "Onion", "Pickle", "Banana Pepper",
    "Real Mayonnaise", "Miracle Whip", "Mustard", "Salt", "Pepper"
];

export default function Deli() {
    const [activeTab, setActiveTab] = useState('breakfast');

    return (
        <div className="bg-cream min-h-screen">
            <Section className="pb-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-forest mb-6">Galbreath Deli</h1>
                    <p className="text-lg text-wood/80">
                        Freshly prepared meals using ingredients straight from our shelves. Order ahead or grab a seat in our cozy cafe area.
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {MENU_CATEGORIES.map((category) => {
                        const Icon = category.icon;
                        return (
                            <button
                                key={category.id}
                                onClick={() => setActiveTab(category.id)}
                                className={clsx(
                                    'flex items-center gap-2 px-6 py-3 rounded-full text-lg font-medium transition-all duration-300',
                                    activeTab === category.id
                                        ? 'bg-forest text-white shadow-lg scale-105'
                                        : 'bg-white text-wood hover:bg-forest/10'
                                )}
                            >
                                <Icon size={20} />
                                {category.label}
                            </button>
                        );
                    })}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 key={activeTab}">
                    {MENU_ITEMS[activeTab].map((item, index) => (
                        <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow border-stone-100 flex flex-col items-center p-0">
                            {item.image && (
                                <div className="w-full h-48 overflow-hidden">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                                </div>
                            )}
                            <div className="p-6 w-full flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-wood">{item.name}</h3>
                                    {item.tag && (
                                        <span className="bg-orange/10 text-orange text-xs font-semibold px-2 py-1 rounded-full shrink-0 ml-2">
                                            {item.tag}
                                        </span>
                                    )}
                                </div>
                                <p className="text-wood/70">{item.description}</p>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Toppings Section */}
                {(activeTab === 'cold_sandwiches' || activeTab === 'hot_sandwiches') && (
                    <div className="max-w-4xl mx-auto mt-16 text-center animate-in fade-in slide-in-from-bottom-6">
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100">
                            <h3 className="text-2xl font-bold text-forest mb-6">Available Toppings</h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {TOPPINGS.map((topping, i) => (
                                    <span key={i} className="px-4 py-2 bg-cream text-wood font-medium rounded-full border border-stone-200">
                                        {topping}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </Section>
        </div>
    );
}
