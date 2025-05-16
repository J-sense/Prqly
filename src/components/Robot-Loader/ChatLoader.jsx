import React from "react";

const Chatloader = () => (
  <div className="max-w-sm mx-auto">
    <svg viewBox="0 0 120 120">
      <circle cx="60" cy="60" r="50" fill="#f0f8ff" />
      <g id="document">
        <rect
          x="40"
          y="45"
          width="30"
          height="40"
          rx="2"
          fill="white"
          stroke="#D1D5DB"
          strokeWidth="1"
        />
        <rect x="42" y="50" width="26" height="3" rx="1" fill="#E5E7EB" />
        <rect x="42" y="55" width="20" height="3" rx="1" fill="#E5E7EB" />
        <rect x="42" y="60" width="24" height="3" rx="1" fill="#E5E7EB" />
        <rect x="42" y="65" width="18" height="3" rx="1" fill="#E5E7EB" />
        <rect x="42" y="70" width="22" height="3" rx="1" fill="#E5E7EB" />
        <rect x="42" y="75" width="26" height="3" rx="1" fill="#E5E7EB" />
        <rect x="42" y="42" width="16" height="5" rx="1" fill="#818CF8" />
        <circle cx="65" cy="45" r="1.5" fill="#818CF8" />
        <rect x="40" y="48" width="30" height="2" fill="#60A5FA" opacity="0.5">
          <animate
            attributeName="y"
            values="48;80;48"
            dur="3s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g id="robot">
        <rect
          x="65"
          y="35"
          width="25"
          height="25"
          rx="7"
          fill="#A5B4FC"
          stroke="#818CF8"
          strokeWidth="1.5"
        />
        <circle
          cx="73"
          cy="45"
          r="3.5"
          fill="#FFFFFF"
          stroke="#6366F1"
          strokeWidth="1"
        />
        <circle
          cx="82"
          cy="45"
          r="3.5"
          fill="#FFFFFF"
          stroke="#6366F1"
          strokeWidth="1"
        />
        <circle cx="73" cy="45" r="1.8" fill="#6366F1">
          <animate
            attributeName="cx"
            values="73;71;73"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="82" cy="45" r="1.8" fill="#6366F1">
          <animate
            attributeName="cx"
            values="82;80;82"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </circle>
        <path
          d="M75,52 Q77.5,53 80,52"
          fill="none"
          stroke="#6366F1"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="70"
          y1="35"
          x2="68"
          y2="28"
          stroke="#818CF8"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="68" cy="28" r="2" fill="#FB7185">
          <animate
            attributeName="fill"
            values="#FB7185;#F472B6;#FB7185"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
        <line
          x1="85"
          y1="35"
          x2="87"
          y2="28"
          stroke="#818CF8"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="87" cy="28" r="2" fill="#FB7185">
          <animate
            attributeName="fill"
            values="#FB7185;#F472B6;#FB7185"
            dur="1.3s"
            repeatCount="indefinite"
          />
        </circle>
        <rect
          x="68"
          y="60"
          width="20"
          height="12"
          rx="4"
          fill="#A5B4FC"
          stroke="#818CF8"
          strokeWidth="1.5"
        />
        <rect
          x="74"
          y="56"
          width="8"
          height="6"
          rx="2"
          fill="#A5B4FC"
          stroke="#818CF8"
          strokeWidth="1.5"
        />
        <line
          x1="68"
          y1="65"
          x2="55"
          y2="60"
          stroke="#818CF8"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <animate
            attributeName="y2"
            values="60;63;60"
            dur="3s"
            repeatCount="indefinite"
          />
        </line>
        <line
          x1="88"
          y1="65"
          x2="95"
          y2="65"
          stroke="#818CF8"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="72"
          y1="72"
          x2="70"
          y2="80"
          stroke="#818CF8"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="84"
          y1="72"
          x2="86"
          y2="80"
          stroke="#818CF8"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="70" cy="80" r="2" fill="#A5B4FC" />
        <circle cx="86" cy="80" r="2" fill="#A5B4FC" />
      </g>
      <g id="thinkingBubbles">
        <circle cx="95" cy="40" r="2" fill="#A5B4FC" opacity="0.7">
          <animate
            attributeName="r"
            values="2;3;2"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.7;0.9;0.7"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="100" cy="35" r="3" fill="#A5B4FC" opacity="0.7">
          <animate
            attributeName="r"
            values="3;4;3"
            dur="2.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.7;0.9;0.7"
            dur="2.5s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="106" cy="28" r="4" fill="#A5B4FC" opacity="0.7">
          <animate
            attributeName="r"
            values="4;5;4"
            dur="3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.7;0.9;0.7"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
      <g id="dataParticles">
        <circle cx="50" cy="55" r="1" fill="#60A5FA">
          <animate
            attributeName="cx"
            values="50;65;80"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="55;50;45"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="1;0"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="50" cy="65" r="1" fill="#34D399">
          <animate
            attributeName="cx"
            values="50;65;80"
            dur="2s"
            repeatCount="indefinite"
            begin="0.5s"
          />
          <animate
            attributeName="cy"
            values="65;55;50"
            dur="2s"
            repeatCount="indefinite"
            begin="0.5s"
          />
          <animate
            attributeName="opacity"
            values="1;0"
            dur="2s"
            repeatCount="indefinite"
            begin="0.5s"
          />
        </circle>
        <circle cx="50" cy="60" r="1" fill="#F472B6">
          <animate
            attributeName="cx"
            values="50;65;80"
            dur="2s"
            repeatCount="indefinite"
            begin="1s"
          />
          <animate
            attributeName="cy"
            values="60;53;48"
            dur="2s"
            repeatCount="indefinite"
            begin="1s"
          />
          <animate
            attributeName="opacity"
            values="1;0"
            dur="2s"
            repeatCount="indefinite"
            begin="1s"
          />
        </circle>
        <circle cx="50" cy="70" r="1" fill="#FBBF24">
          <animate
            attributeName="cx"
            values="50;65;80"
            dur="2s"
            repeatCount="indefinite"
            begin="1.5s"
          />
          <animate
            attributeName="cy"
            values="70;58;53"
            dur="2s"
            repeatCount="indefinite"
            begin="1.5s"
          />
          <animate
            attributeName="opacity"
            values="1;0"
            dur="2s"
            repeatCount="indefinite"
            begin="1.5s"
          />
        </circle>
      </g>
      <g id="loadingText">
        <text
          x="60"
          y="108"
          fontFamily="Comic Sans MS, Arial, sans-serif"
          fontSize="7"
          fill="#6366F1"
          textAnchor="middle"
          fontWeight="bold"
        >
          Analysis Report
        </text>
        <g id="progressDots">
          <circle cx="35" cy="108" r="1.5" fill="#6366F1">
            <animate
              attributeName="opacity"
              values="0.3;1;0.3"
              dur="1.5s"
              repeatCount="indefinite"
              begin="0s"
            />
          </circle>
          <circle cx="85" cy="108" r="1.5" fill="#6366F1">
            <animate
              attributeName="opacity"
              values="0.3;1;0.3"
              dur="1.5s"
              repeatCount="indefinite"
              begin="0.5s"
            />
          </circle>
        </g>
      </g>
      <animate
        attributeName="opacity"
        values="0.95;1;0.95"
        dur="1.5s"
        repeatCount="indefinite"
      />
    </svg>
  </div>
);

export default Chatloader;
