import React from 'react';
import Emoji from './Emoji'


function Footer() {
  return ([
    <div className="inner-footer">
      <p className='d-flex'><Emoji emoji="🛠" desc="tools"/>&nbsp;made from scratch with&nbsp;<Emoji emoji="💖" desc="heart"/>&nbsp;in berlin&nbsp;<Emoji emoji="🇩🇪" desc="german-flag"/></p>
    </div>
  ])
}

export default Footer
