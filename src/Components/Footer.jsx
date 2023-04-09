import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='footer_div1'>
        <p>Powered by</p>
        <img src="/images/DH.png" alt='DH-logo' className='img_footer_logo'/>
      </div>
      <div className='footer_div2'>
        <img src="/images/ico-facebook.png"alt='facebook' className='img_footer'/>
        <img src="/images/ico-instagram.png" alt='Instagram' className='img_footer'/>
        <img src="/images/ico-tiktok.png" alt='Tiktok' className='img_footer'/>
        <img src="/images/ico-whatsapp.png" alt='Whatsapp' className='img_footer'/>
      </div>
    </footer>
  )
}

export default Footer
