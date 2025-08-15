
import React from 'react';

const FlagEU: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 24" className="rounded-sm">
        <rect width="36" height="24" fill="#003399"/>
        <g fill="#FFCC00">
            <circle cx="18" cy="12" r="8" fill="none" stroke="#FFCC00" strokeWidth="0"/>
            <g transform="translate(18,12)">
                {[...Array(12)].map((_, i) => (
                    <g key={i} transform={`rotate(${i * 30})`}>
                        <path d="M0,-7.5 L0.88, -2.5 L3,-4.5 z" transform="translate(0,0) scale(1)"/>
                    </g>
                ))}
            </g>
        </g>
    </svg>
);

export default FlagEU;
