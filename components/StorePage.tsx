
import React, { useState } from 'react';
import { STORE_CATEGORIES } from '../constants';

const StorePage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState(STORE_CATEGORIES[0]);

    const CheckIcon: React.FC<{className?: string}> = ({className}) => (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
    );

    return (
        <div className="bg-slate-800/50 p-6 rounded-xl shadow-lg">
             <h1 className="text-4xl font-black text-center mb-8 text-white">Привилегии</h1>
            <div className="flex flex-col md:flex-row gap-8">
                <aside className="md:w-1/4">
                    <ul className="space-y-2">
                        {STORE_CATEGORIES.map(category => (
                            <li key={category.id}>
                                <button
                                    onClick={() => setSelectedCategory(category)}
                                    className={`w-full text-left p-4 rounded-lg transition-all duration-200 font-bold ${
                                        selectedCategory.id === category.id
                                            ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg`
                                            : 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white'
                                    }`}
                                >
                                    {category.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </aside>
                <main className="flex-1 bg-slate-900 p-6 rounded-lg">
                    <div className="flex justify-between items-start">
                        <div>
                            <h2 className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${selectedCategory.gradient}`}>
                                {selectedCategory.name}
                            </h2>
                            <p className="mt-2 text-slate-400">{selectedCategory.description}</p>
                        </div>
                        <div className="text-3xl font-black text-white bg-slate-800 px-4 py-2 rounded-lg">
                            {selectedCategory.price}
                        </div>
                    </div>
                    <hr className="my-6 border-slate-700" />
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-white">Права привилегии:</h3>
                        <ul className="space-y-3">
                            {selectedCategory.perks.map(perk => (
                                <li key={perk} className="flex items-center gap-3">
                                    <CheckIcon className={`w-6 h-6 text-${selectedCategory.color}`} />
                                    <span className="text-slate-300 font-mono">{perk}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default StorePage;
