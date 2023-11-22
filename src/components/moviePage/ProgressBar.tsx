import React from 'react';

interface CircularProgressBarProps {
  percentage?: number;
  color: string;
  trackColor?: string;
  centerOpacity?: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  percentage,
  color,
  trackColor = 'transparent',
  centerOpacity = 0.1,
}) => {
    const strokeWidth = 10;
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset =percentage &&  circumference - (percentage / 100) * circumference;

  return (
    <div className="relative inline-block">
      <svg height="100" width="100">
        <circle
          cx="50"
          cy="50"
          r={radius}
          strokeWidth={strokeWidth}
          stroke={trackColor}
          fill={`rgba(255, 255, 255, ${centerOpacity})`}
        />

        <circle
          className="transition-all duration-300 ease-in-out"
          cx="50"
          cy="50"
          r={radius}
          strokeWidth={strokeWidth}
          stroke={color}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
        />

        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="16"
          fill={color}
          className="font-bold"
        >
          {percentage}%
        </text>
      </svg>
    </div>
  );
};

export default CircularProgressBar;
