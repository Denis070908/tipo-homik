
import { Server, StoreCategory, WikiNav } from './types';

export const SERVERS: Server[] = [
  {
    id: 'server1',
    location: 'RU',
    name: 'HOMIGRAD #1 | CLASSIC',
    map: 'rp_unioncity',
    players: 28,
    maxPlayers: 32,
    playerList: [
      { id: 1, name: 'ShadowHunter', fraction: 'Citizen', time: '2h 15m', ping: 25 },
      { id: 2, name: 'CyberNinja', fraction: 'Police', time: '1h 45m', ping: 40 },
      { id: 3, name: 'Vortex', fraction: 'Medic', time: '3h 05m', ping: 30 },
      { id: 4, name: 'Ghost', fraction: 'Gangster', time: '0h 55m', ping: 60 },
    ],
  },
  {
    id: 'server2',
    location: 'RU',
    name: 'HOMIGRAD #2 | STALKER RP',
    map: 'rp_stalker',
    players: 15,
    maxPlayers: 24,
    playerList: [
      { id: 5, name: 'Strelok', fraction: 'Loner', time: '5h 30m', ping: 28 },
      { id: 6, name: 'Burer', fraction: 'Monolith', time: '4h 10m', ping: 35 },
    ],
  },
  {
    id: 'server3',
    location: 'EU',
    name: 'HOMIGRAD #3 | DARK RP',
    map: 'rp_downtown_v2',
    players: 31,
    maxPlayers: 32,
    playerList: [
      { id: 7, name: 'Mr. White', fraction: 'Cook', time: '1h 0m', ping: 80 },
    ],
  },
  {
    id: 'server4',
    location: 'US',
    name: 'HOMIGRAD #4 | ZOMBIE SURVIVAL',
    map: 'zs_abandoned_mall',
    players: 19,
    maxPlayers: 20,
    playerList: [
        { id: 8, name: 'Survivor', fraction: 'Human', time: '0h 20m', ping: 120 },
    ]
  },
];

export const STORE_CATEGORIES: StoreCategory[] = [
    {
        id: 'iskliucheniia',
        name: 'ИСКЛЮЧЕНИЯ',
        color: 'orange-500',
        gradient: 'from-orange-500 to-amber-500',
        price: '99₽',
        description: 'У вас будет следующая роль или иначе говоря Призон!',
        perks: ['fast_craft.Custom_Craft', 'fast_craft.use_st', 'free_slot', 'safe_warn_count']
    },
    {
        id: 'igratskii',
        name: 'ИГРАЦКИЙ',
        color: 'orange-600',
        gradient: 'from-orange-600 to-amber-600',
        price: '199₽',
        description: 'Возможность доворить, и скованные кандалы.',
        perks: ['additional_slot', 'voice_chat_plus', 'custom_taunts', 'extra_inventory']
    },
    {
        id: 'admiral',
        name: 'АДМИРАЛ',
        color: 'blue-500',
        gradient: 'from-blue-500 to-cyan-500',
        price: '299₽',
        description: 'Станьте адмиралом флота и командуйте другими.',
        perks: ['command_access', 'ship_control', 'priority_queue', 'special_uniform']
    },
    {
        id: 'zashchitnik',
        name: 'ЗАЩИТНИК',
        color: 'green-500',
        gradient: 'from-green-500 to-emerald-500',
        price: '399₽',
        description: 'Защищайте город и его жителей от всех угроз.',
        perks: ['heavy_armor', 'advanced_weaponry', 'bodyguard_ai', 'fortification_kit']
    },
    {
        id: 'sozdatel',
        name: 'СОЗДАТЕЛЬ',
        color: 'green-600',
        gradient: 'from-green-600 to-emerald-600',
        price: '499₽',
        description: 'Творите и изменяйте мир вокруг себя.',
        perks: ['spawn_props', 'noclip_lite', 'toolgun_access', 'creative_mode']
    }
];

export const WIKI_NAV_DATA: WikiNav[] = [
    {
        category: 'Главная',
        articles: [
            { id: 'main', title: 'Главная страница' },
            { id: 'steamid', title: 'Как найти свой SteamID64?' }
        ]
    },
    {
        category: 'Основы',
        articles: [
            { id: 'gamemodes', title: 'Игровые режимы' },
            { id: 'interface', title: 'Интерфейс' },
            { id: 'mechanics', title: 'Механики' },
            { id: 'rules', title: 'Правила' }
        ]
    }
];
