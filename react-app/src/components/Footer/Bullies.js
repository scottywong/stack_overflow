import React from 'react'

function Bullies({ setShowModal }) {
  return (
    <div className='modal-container bullies-container'>
      <h2>The Boolean Bullies: </h2>
      <div className='bully'>
        <div>
          <p>Ellie Billerbeck</p>
        </div>
        <div>
          <a href='https://github.com/elnorabills' target='_blank'>
            <i className='fa-brands fa-github'></i>
          </a>
          <a
            href='https://www.linkedin.com/in/eleanor-billerbeck-9165021b0/'
            target='_blank'
          >
            <i className='fa-brands fa-linkedin'></i>
          </a>
        </div>
      </div>
      <div className='bully'>
        <div>
            <p>Keith Glines</p>
        </div>
        <div>
            <a href='https://github.com/Kglines' target='_blank'>
            <i className='fa-brands fa-github'></i>
            </a>
            <a
            href='https://www.linkedin.com/in/keith-glines-70b28b30/'
            target='_blank'
            >
            <i className='fa-brands fa-linkedin'></i>
            </a>
        </div>
      </div>
      <div className='bully'>
        <div>
            <p>Isaac Darzi</p>
        </div>
        <div>
            <a href='https://github.com/gitCommitted' target='_blank'>
            <i className='fa-brands fa-github'></i>
            </a>
            <a href='https://www.linkedin.com/in/isaacdarzi/' target='_blank'>
            <i className='fa-brands fa-linkedin'></i>
            </a>
        </div>
      </div>
      <div className='bully'>
        <div>
            <p>Scotty Wong</p>
        </div>
        <div>
            <a href='https://github.com/scottywong' target='_blank'>
            <i className='fa-brands fa-github'></i>
            </a>
            <a href='https://www.linkedin.com/in/wongscott/' target='_blank'>
            <i className='fa-brands fa-linkedin'></i>
            </a>
        </div>
      </div>
    </div>
  );
}

export default Bullies
