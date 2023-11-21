import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
          <a href='https://www.instagram.com/mernstackdeveloperabi/' target="_blank">
                                <InstagramIcon />
                            </a>

                             <a href='https://twitter.com/home' target="_blank">
                                <TwitterIcon />
                            </a>
                            <a href='https://www.linkedin.com/feed/' target="_blank">
                               <LinkedInIcon />
                            </a>
                            <a href='https://github.com/' target="_blank">
                                <GitHubIcon />
                            </a> 
    </div>
  )
}

export default HeaderSocials