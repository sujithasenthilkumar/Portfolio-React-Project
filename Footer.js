import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
function Footer() {
  return (
  <center>  <div>
          <footer style={{marginTop:"20%"}}>
<p>
  <a href="hhtps://www.instagram.com/" target="_blank" rel="nooper noreferrer">
    <InstagramIcon icon={InstagramIcon} style={{marginLeft:"10px",color:"black"}}/>
  </a>
  <a href="hhtps://www.twitter.com/" target="_blank" rel="nooper noreferrer">
    <TwitterIcon icon={TwitterIcon} style={{marginLeft:"10px",color:"black"}}/>
  </a>
</p>
          </footer>
    </div>
    </center>
  )
}

export default Footer