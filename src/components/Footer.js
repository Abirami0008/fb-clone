import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="language-row">
        English (UK) தமிழ் తెలుగు ಕನ್ನಡ اردو हिन्दी മലയാളം සිංහල ਪੰਜਾਬੀ বাংলা ગુજરાતી
        <button className="plus-button">+</button>
      </div>

      <div className="link-row">
        Sign Up · Log in · Messenger · Facebook Lite · Video · Meta Pay · Meta Store · Meta Quest ·
        Ray-Ban Meta · Meta AI · Instagram · Threads · Voting Information Centre · Privacy Policy ·
        Privacy Centre · About · Create ad · Create Page · Developers · Careers · Cookies · AdChoices ·
        Terms · Help
      </div>

      <div className="meta-note">Meta © 2025</div>
    </div>
  );
}
