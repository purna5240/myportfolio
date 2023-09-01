import React from 'react'

export default function Footer() {
    const footerStyles = {
        backgroundColor: 'black',
        color: '#fff',
        padding: '20px 0',
        textAlign: 'center',
        
      };
    
      const emailStyles = {
        fontSize: '16px',
        textDecoration: 'none',
        color: '#fff',
      };
  return (
    <footer style={footerStyles}>
    <div >
    <p>Feel free to reach out to me:</p>
    <a href="mailto:your.email@example.com" style={emailStyles}>purnanandigana@gmail.com</a>
    <p>Follow me on social media:</p>
    <div style={{paddingLeft:'0rem'}}>
    
      @p_u_r_n_a__
    </div>
    </div>
  </footer>
  )
}
