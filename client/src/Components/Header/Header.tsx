import React from 'react';
import styles from './header.module.css';
import insta from '../../styles/img/instagram.png';
import disc from '../../styles/img/discord.png';
import www from '../../styles/img/www.png';
import twitter from '../../styles/img/twitter.png';

function Header() {
  return (
    <div className={styles.head}>
      <div className={styles.home}>B.T.V</div>
      <div className={styles.social}>
        <a href="https://www.instagram.com/rafael.belos/" target="_blank" rel="noreferrer"><img src={insta} alt="instagram logo" /></a>
        <a href="https://discordapp.com/users/Space Mankey#7778" target="_blank" rel="noreferrer"><img src={disc} alt="discord logo" /></a>
        <a href="https://wa.me/5537991730440" target="_blank" rel="noreferrer"><img src={www} alt="www logo" /></a>
        <a href="https://twitter.com/Rafael_pa5" target="_blank" rel="noreferrer"><img src={twitter} alt="twitter logo" /></a>

      </div>
    </div>
  );
}

export default Header;
