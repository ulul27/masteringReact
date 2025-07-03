import React from 'react';
import './FacebookLogin.css';

export default function FacebookLogin() {
  return (
    <div className="fb-container">
      <div className="fb-left">
        <h1 className="fb-logo">facebook</h1>
        <p className="fb-desc">Facebook membantu Anda terhubung dan berbagi dengan orang-orang dalam kehidupan Anda.</p>
      </div>
      <div className="fb-right">
        <div className="fb-card">
          <input className="fb-input" type="text" placeholder="Email atau Nomor Telepon" />
          <input className="fb-input" type="password" placeholder="Kata Sandi" />
          <button className="fb-login-btn">Masuk</button>
          <a href="#" className="fb-forgot">Lupa kata sandi?</a>
          <hr className="fb-divider" />
          <button className="fb-create-btn">Buat akun baru</button>
        </div>
        <div className="fb-bottom-link">
          <b>Buat Halaman</b> untuk selebriti, merek, atau bisnis.
        </div>
      </div>
    </div>
  );
} 