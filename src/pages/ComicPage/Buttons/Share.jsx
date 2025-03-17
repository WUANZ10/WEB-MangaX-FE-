import React from 'react';
import { FaShare } from "react-icons/fa6";

function ShareButton({ url, title }) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title:title, text:"Hãy cùng xem truyện này với tôi!", url:url });
      } catch (error) {
        console.error('Error sharing content:', error);
      }
    } else {
      console.log('Web Share API is not supported in this browser.');
    }
  };

  return           <button onClick={handleShare} className="button">
              <div className="button-inner">
              <FaShare />
                <p className="p button-text unselectable">Share</p>
              </div>
            </button>
}

export default ShareButton;