
import React, { useState, useMemo } from 'react';
import { SERVERS } from '../constants';
import type { Server, Player } from '../types';
import FlagRU from './icons/FlagRU';
import FlagUS from './icons/FlagUS';
import FlagGB from './icons/FlagGB';
import FlagEU from './icons/FlagEU';

const FlagIcon = ({ location }: { location: Server['location'] }) => {
    switch (location) {
        case 'RU': return <FlagRU />;
        case 'US': return <FlagUS />;
        case 'GB': return <FlagGB />;
        case 'EU': return <FlagEU />;
        default: return null;
    }
};

const PlayerList: React.FC<{ players: Player[] }> = ({ players }) => (
    <div className="mt-4 bg-slate-800/50 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
                <thead className="bg-slate-900/60 text-xs text-slate-400 uppercase tracking-wider">
                    <tr>
                        <th scope="col" className="px-6 py-3">Nickname</th>
                        <th scope="col" className="px-6 py-3">Fraction</th>
                        <th scope="col" className="px-6 py-3">Time</th>
                        <th scope="col" className="px-6 py-3 text-right">Ping</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                    {players.map((player) => (
                        <tr key={player.id} className="hover:bg-slate-800 transition-colors duration-150">
                            <td className="px-6 py-4 whitespace-nowrap font-medium text-white">{player.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-slate-300">{player.fraction}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-slate-300">{player.time}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-right font-mono"
                                style={{ color: player.ping < 50 ? '#4ade80' : player.ping < 100 ? '#facc15' : '#f87171' }}>
                                {player.ping}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

const HomePage: React.FC = () => {
  const [selectedServerId, setSelectedServerId] = useState<string | null>(SERVERS[0]?.id || null);

  const selectedServer = useMemo(
    () => SERVERS.find(s => s.id === selectedServerId),
    [selectedServerId]
  );
  
  return (
    <div>
      <section 
        className="relative flex items-center justify-center h-80 mb-12 bg-cover bg-center rounded-xl overflow-hidden" 
        style={{ backgroundImage: `url(https://picsum.photos/seed/gmod/1920/1080)` }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative text-center text-white p-4">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight">HOMIGRAD</h1>
          <p className="mt-4 text-xl md:text-2xl font-light text-slate-300">Это сеть серверов в Garry's mod. Множество игр на одном сервере!</p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Наши сервера</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {SERVERS.map((server) => {
            const isSelected = server.id === selectedServerId;
            return (
              <div
                key={server.id}
                onClick={() => setSelectedServerId(server.id)}
                className={`p-4 rounded-lg cursor-pointer transition-all duration-200 border-2 ${
                  isSelected
                    ? 'bg-slate-700 border-amber-400 shadow-lg shadow-amber-400/10'
                    : 'bg-slate-800 border-transparent hover:border-slate-600'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FlagIcon location={server.location} />
                    <div>
                      <h3 className="font-bold text-white">{server.name}</h3>
                      <p className="text-sm text-slate-400">{server.map}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg text-white">{server.players} / {server.maxPlayers}</p>
                    <div className="w-20 h-2 bg-slate-700 rounded-full mt-1 overflow-hidden">
                        <div className="bg-amber-400 h-full" style={{width: `${(server.players / server.maxPlayers) * 100}%`}}></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {selectedServer && (
            <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Игроки на {selectedServer.name}</h3>
                <PlayerList players={selectedServer.playerList} />
            </div>
        )}
      </section>
    </div>
  );
};

export default HomePage;
