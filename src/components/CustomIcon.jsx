import React from 'react';

const CustomIcon = ({ src, alt, className = "", fallbackIcon }) => {
    const handleImageError = (e) => {
        // If image fails to load, show fallback
        if (fallbackIcon) {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
        }
    };

    return (
        <div className="flex items-center justify-center">
            <img 
                src={src} 
                alt={alt}
                className={`w-5 h-5 object-contain transition-all duration-300 hover:scale-110 ${className}`}
                onError={handleImageError}
            />
            {fallbackIcon && (
                <div style={{ display: 'none' }} className="text-accent">
                    {fallbackIcon}
                </div>
            )}
        </div>
    );
};

export default CustomIcon;
