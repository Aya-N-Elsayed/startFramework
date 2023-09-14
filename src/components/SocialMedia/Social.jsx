import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import style from './Social.module.css';

export const Social = () => {
  return (
    <div>
     <ul className="d-flex mx-auto p-0">
    <li>
      <a className={style.icons} href="facebook">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
    </li>
    <li>
      <a className={style.icons} href="twitter">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </li>
    <li>
      <a className={style.icons} href="linkedin">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
    </li>
    <li>
      <a className={style.icons} href="instagram">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </li>

  </ul>
    </div>
  );
};
