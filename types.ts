
export type Page = 'home' | 'store' | 'donate' | 'wiki';

export type Location = 'RU' | 'US' | 'GB' | 'EU';

export interface Player {
  id: number;
  name: string;
  fraction: string;
  time: string;
  ping: number;
}

export interface Server {
  id: string;
  location: Location;
  name: string;
  map: string;
  players: number;
  maxPlayers: number;
  playerList: Player[];
}

export interface StoreCategory {
  id: string;
  name: string;
  color: string;
  gradient: string;
  price: string;
  description: string;
  perks: string[];
}

export type WikiContentType = 'h1' | 'h2' | 'p' | 'code' | 'list';

export interface WikiContent {
    type: WikiContentType;
    text: string | string[];
}

export interface WikiArticle {
    id: string;
    title: string;
    content: WikiContent[];
}

export interface WikiNav {
    category: string;
    articles: { id: string, title: string }[];
}
