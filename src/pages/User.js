import React, { useState } from 'react'

import PageTitle from '../components/Typography/PageTitle'
import CTA from '../components/CTA'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from '@windmill/react-ui'

function User() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function openModal() {
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
  }

  return (
    <>
      <PageTitle>Users</PageTitle>
      {/* <CTA /> */}

      <h2>this is User</h2>
       
    </>
  )
}

export default User
