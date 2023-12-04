"use client"
import React from 'react'

const OpenDialogButton = () => {
  return (
    <button className="btn btn-primary btn-block" onClick={()=>{
      if (document.getElementById('my_modal_5')){
        const modal = document.getElementById('my_modal_5') as HTMLDialogElement
        modal.showModal()
      }
    }}>
      Explore
    </button>
  )
}

export default OpenDialogButton
