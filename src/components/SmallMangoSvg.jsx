const SmallMangoSvg = () => {
  return (
    <svg 
      width="50" 
      height="50" 
      viewBox="0 0 200 200" 
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-sm"
    >
      {/* Main mango body */}
      <ellipse 
        cx="100" 
        cy="110" 
        rx="70" 
        ry="80" 
        fill="#FFD700" 
        stroke="#E8A317" 
        strokeWidth="3" 
      />
      
      {/* Mango top */}
      <path 
        d="M100 30 Q120 50 130 70 Q100 60 70 70 Q80 50 100 30Z" 
        fill="#8B8000" 
        stroke="#5C4033" 
        strokeWidth="2" 
      />
      
      {/* Stem */}
      <path 
        d="M100 30 Q105 20 110 15" 
        fill="none" 
        stroke="#5C4033" 
        strokeWidth="3" 
      />
      
      {/* Mango highlight/shine */}
      <ellipse 
        cx="80" 
        cy="90" 
        rx="25" 
        ry="35" 
        fill="#FFEC8B" 
        opacity="0.7" 
      />
    </svg>
  );
};

export default SmallMangoSvg;