import React, { useState } from 'react'
import { Modal } from '../../context/Modal';
import DemoLogin from './DemoLogin';


function DemoLoginModal() {
    const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button
        type='button'
        className='login-btn'
        onClick={() => setShowModal(true)}
      >
        Demo User
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DemoLogin setShowModal={setShowModal} />
        </Modal>
      )}
    </div>
  );
}

export default DemoLoginModal