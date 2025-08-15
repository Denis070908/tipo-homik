
import React, { useState, useMemo } from 'react';
import { WIKI_NAV_DATA } from '../constants';
import type { WikiArticle, WikiContent } from '../types';

// Mock fetching full article data based on ID
const fetchArticle = (id: string): WikiArticle | null => {
    // In a real app, this would be an API call.
    // For this example, we'll generate some content.
    const articleInfo = WIKI_NAV_DATA.flatMap(cat => cat.articles).find(a => a.id === id);
    if (!articleInfo) return null;

    const MOCK_CONTENT: {[key: string]: WikiContent[]} = {
        main: [
            { type: 'h1', text: 'Добро пожаловать на Homigrad Wiki' },
            { type: 'p', text: 'Homigrad – это сеть серверов в игре Garry\'s Mod, множество игр на одном сервере! Мы приветствуем любые ваши предложения, надеемся вам понравится на принципах. (Почти...)' },
            { type: 'p', text: 'Это наш проект, на разработку и руководство вложен не один год.' },
            { type: 'h2', text: 'Я новичок, что мне стоит знать?' },
            { type: 'p', text: 'Вы должны быть на нашем дискорд сервере. При бане вашего аккаунта, игры, вы можете подать предложение на разбан. Или если вы видите нарушение, вы можете подать на него жалобу.' },
        ],
        steamid: [
            { type: 'h1', text: 'Как найти свой SteamID64?' },
            { type: 'p', text: 'Ваш SteamID64 - это уникальный идентификатор вашего аккаунта Steam. Он необходим для многих действий на сервере, включая донат и подачу жалоб.' },
            { type: 'list', text: ['Зайдите на сайт steamid.io', 'Вставьте ссылку на ваш Steam профиль в поле ввода.', 'Нажмите "lookup".', 'Ваш SteamID64 будет показан в результатах.'] },
        ],
        rules: [
            { type: 'h1', text: 'Правила сервера' },
            { type: 'h2', text: '1. Общие правила' },
            { type: 'p', text: '1.1. Запрещено использование читов, эксплойтов и багов игры. 1.2. Запрещены оскорбления игроков и администрации. 1.3. Запрещен спам и флуд в чате и голосовом чате.' },
            { type: 'h2', text: '2. Правила RolePlay (RP)' },
            { type: 'p', text: '2.1. NonRP (Non RolePlay) - поведение, не соответствующее роли персонажа. Наказание: предупреждение, кик, бан.' },
            { type: 'code', text: 'bind alt +walk\n// Позволяет медленно ходить, нужно для отыгрывания роли' },

        ]
    };
    
    return {
        id: articleInfo.id,
        title: articleInfo.title,
        content: MOCK_CONTENT[id] || [{type: 'p', text: 'Содержимое не найдено.'}]
    };
};


const WikiPage: React.FC = () => {
    const [selectedArticleId, setSelectedArticleId] = useState('main');
    
    const article = useMemo(() => fetchArticle(selectedArticleId), [selectedArticleId]);

    const renderContent = (content: WikiContent) => {
        switch(content.type) {
            case 'h1': return <h1 className="text-4xl font-bold text-white mb-6 pb-2 border-b-2 border-slate-700">{content.text}</h1>;
            case 'h2': return <h2 className="text-2xl font-semibold text-white mt-8 mb-4">{content.text}</h2>;
            case 'p': return <p className="text-slate-300 leading-relaxed mb-4">{content.text}</p>;
            case 'code': return <pre className="bg-slate-900 p-4 rounded-md text-sm text-cyan-300 font-mono whitespace-pre-wrap my-4">{Array.isArray(content.text) ? content.text.join('\n') : content.text}</pre>;
            case 'list': return (
                <ul className="list-disc list-inside space-y-2 mb-4 text-slate-300">
                    {(content.text as string[]).map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            );
            default: return null;
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <aside className="md:col-span-3 lg:col-span-2">
                <div className="sticky top-24">
                    {WIKI_NAV_DATA.map(category => (
                        <div key={category.category} className="mb-6">
                            <h3 className="text-xs font-bold uppercase text-slate-500 mb-2">{category.category}</h3>
                            <ul className="space-y-1">
                                {category.articles.map(art => (
                                    <li key={art.id}>
                                        <button
                                            onClick={() => setSelectedArticleId(art.id)}
                                            className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors duration-150 ${
                                                selectedArticleId === art.id
                                                    ? 'bg-slate-700 text-amber-400 font-semibold'
                                                    : 'text-slate-300 hover:bg-slate-800'
                                            }`}
                                        >
                                            {art.title}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </aside>

            <main className="md:col-span-9 lg:col-span-10 bg-slate-800/50 p-8 rounded-xl">
                {article ? (
                    <article>
                        {article.content.map((block, index) => (
                            <div key={index}>{renderContent(block)}</div>
                        ))}
                    </article>
                ) : (
                    <p>Выберите статью для просмотра.</p>
                )}
            </main>
        </div>
    );
};

export default WikiPage;
