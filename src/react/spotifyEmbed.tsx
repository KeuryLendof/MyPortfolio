import React, { useState, useEffect } from "react";

const SpotifyEmbed = () => {
    const [isDark, setIsDark] = useState(true);
  
    useEffect(() => {
      const observer = new MutationObserver(() => {
        setIsDark(document.documentElement.classList.contains("dark"));
      });
  
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });
  
      return () => observer.disconnect();
    }, []);
  
    const src = isDark
      ? "https://open.spotify.com/embed/playlist/37i9dQZF1EpjlQnco6BmgR?theme=0"
      : "https://open.spotify.com/embed/playlist/37i9dQZF1EpjlQnco6BmgR?theme=1";
  
    return (
      <div className="w-full max-w-xs transition-all">
        <iframe
          key={src} // fuerza actualización al cambiar tema
          src={src}
          className="w-full h-40"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          style={{ border: 0, borderRadius: "12px" }}
        />
      </div>
    );
  };
  
  export default SpotifyEmbed;
  