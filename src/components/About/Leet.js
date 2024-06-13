import React, { useState, useEffect } from 'react';

const SvgImage = () => {
  const [svgContent, setSvgContent] = useState('');

  useEffect(() => {
    const fetchSvg = async () => {
      try {
        // const response = await fetch('https://leetcode.card.workers.dev/Hiren_Rupchandani?theme=auto&font=source_code_pro&extension=activity');
        const response = await fetch('https://leetcard.jacoblin.cool/Hiren_Rupchandani?theme=dark&font=Voces&ext=heatmap&width=1000&height=400')
        const svgText = await response.text();
        setSvgContent(svgText);
      } catch (error) {
        console.error('Error fetching SVG:', error);
      }
    };

    fetchSvg();
  }, []);

  return (
    
    <div
      dangerouslySetInnerHTML={{ __html: svgContent }}
      style={{ width: '100%', height: 'auto' }}
    />
    
  );
};

export default SvgImage;
