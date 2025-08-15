
import React, { useState, useMemo } from 'react';

const DonatePage: React.FC = () => {
    const [steamId, setSteamId] = useState('');
    const [amount, setAmount] = useState(100);
    const [agreed, setAgreed] = useState(false);

    const exchangeRate = 1; // 1 ruble per coin

    const rubAmount = useMemo(() => {
        return amount * exchangeRate;
    }, [amount]);

    return (
        <div 
            className="min-h-[calc(100vh-128px)] flex items-center justify-center p-4 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://picsum.photos/seed/gmod-donate/1920/1080)' }}
        >
            <div className="w-full max-w-md bg-slate-800/70 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-slate-700">
                <h1 className="text-3xl font-bold text-center text-white">Обмен на игровую валюту</h1>
                <p className="text-center text-slate-400 mt-2 mb-6">
                    Курс: <span className="font-bold text-amber-400">1 рубль</span> к <span className="font-bold text-amber-400">1</span> донатной монете
                </p>

                <form className="space-y-6">
                    <div>
                        <label htmlFor="steamid" className="block text-sm font-medium text-slate-300">SteamID64</label>
                        <input
                            type="text"
                            id="steamid"
                            value={steamId}
                            onChange={(e) => setSteamId(e.target.value)}
                            placeholder="76561198000000000"
                            className="mt-1 block w-full bg-slate-900/50 border border-slate-700 rounded-md shadow-sm py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition"
                        />
                    </div>

                    <div>
                        <label htmlFor="amount" className="block text-sm font-medium text-slate-300">Количество донатных монет</label>
                        <input
                            type="number"
                            id="amount"
                            value={amount}
                            onChange={(e) => setAmount(Math.max(0, parseInt(e.target.value) || 0))}
                            className="mt-1 block w-full bg-slate-900/50 border border-slate-700 rounded-md shadow-sm py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition"
                        />
                    </div>
                    
                    <div className="text-center bg-slate-900/50 p-3 rounded-md">
                        <p className="text-slate-400">Будет зачислено на счет:</p>
                        <p className="text-2xl font-bold text-amber-400">{rubAmount.toLocaleString('ru-RU')} ₽</p>
                    </div>
                    
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input
                                id="terms"
                                name="terms"
                                type="checkbox"
                                checked={agreed}
                                onChange={(e) => setAgreed(e.target.checked)}
                                className="focus:ring-amber-500 h-4 w-4 text-amber-600 bg-slate-700 border-slate-600 rounded"
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="terms" className="text-slate-400">
                                Я ознакомлен и согласен с <a href="#" className="font-medium text-amber-400 hover:text-amber-300">Условиями и Положениями</a>
                            </label>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={!agreed || !steamId || amount <= 0}
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-slate-900 bg-amber-400 hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-amber-500 disabled:bg-slate-600 disabled:text-slate-400 disabled:cursor-not-allowed transition-all duration-200"
                    >
                        Перейти к оплате
                    </button>
                </form>

                <p className="mt-6 text-xs text-center text-slate-500">
                    Возникли проблемы? <a href="#" className="text-amber-500 hover:underline">Свяжитесь с поддержкой</a>
                </p>
            </div>
        </div>
    );
};

export default DonatePage;
