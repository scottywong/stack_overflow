import React from 'react'

function Bullies() {
  return (
    <div className='modal-container'>
      <h2 className='modal-form-title'>Boolean Bullies Team: </h2>
      <div className='modal-bully'>
        <p className='modal-bullies-name'>Ellie Billerbeck</p>
        <div>
          <a
            className='modal-bullies-github'
            href='https://github.com/elnorabills'
            target='_blank'
          >
            <i class='fa-brands fa-github' title="Ellie's github"></i>
          </a>
          <a
            className='modal-bullies-linked'
            href='https://www.linkedin.com/in/eleanor-billerbeck-9165021b0/'
            target='_blank'
          >
            <i class='fa-brands fa-linkedin' title="Ellie's LinkedIn"></i>
          </a>
        </div>
      </div>
      <div className='modal-bully'>
        <p className='modal-bullies-name'>Keith Glines</p>
        <div>
          <a
            className='modal-bullies-github'
            href='https://github.com/Kglines'
            target='_blank'
          >
            <i class='fa-brands fa-github' title="Keith's github"></i>
          </a>
          <a
            className='modal-bullies-linked'
            href='https://www.linkedin.com/in/keith-glines-70b28b30/'
            target='_blank'
          >
            <i class='fa-brands fa-linkedin' title="Keith's LinkedIn"></i>
          </a>
        </div>
      </div>
      <div className='modal-bully'>
        <p className='modal-bullies-name'>Isaac Darzi</p>
        <div>
          <a
            className='modal-bullies-github'
            href='https://github.com/gitCommitted'
            target='_blank'
          >
            <i class='fa-brands fa-github' title="Isaac's github"></i>
          </a>
          <a
            className='modal-bullies-linked'
            href='https://www.linkedin.com/in/isaacdarzi/'
            target='_blank'
          >
            <i class='fa-brands fa-linkedin' title="Isaac's LinkedIn"></i>
          </a>
        </div>
      </div>
      <div className='modal-bully'>
        <p className='modal-bullies-name'>Scotty Wong</p>
        <div>
          <a
            className='modal-bullies-github'
            href='https://github.com/scottywong'
            target='_blank'
          >
            <i class='fa-brands fa-github' title="Scotty's github"></i>
          </a>
          <a
            className='modal-bullies-linked'
            href='https://www.linkedin.com/in/wongscott/'
            target='_blank'
          >
            <i class='fa-brands fa-linkedin' title="Scotty's LinkedIn"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Bullies
