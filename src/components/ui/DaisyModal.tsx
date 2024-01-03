import React from 'react'

interface ModalProps {
  /**
   * Button style
   */
  primary?: boolean
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * How large should the button be?
   */
  location?: 'top' | 'middle' | 'bottom'
  /**
   * Modal Title
   */
  title: string
  /**
   * Modal Text
   */
  content?: string
  /**
   * Modal Close Label
   */
  close?: string
  /**
   * Status to show modal
   */
  isShowModal?: boolean
  /**
   * Optional click handler
   */
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const DaisyModal = ({
  primary = false,
  location = 'middle',
  backgroundColor,
  title,
  content,
  close = 'close',
  ...props
}: ModalProps) => {
  const mode = primary ? 'btn-primary' : 'btn-secondary'
  const daisyLocation =
    location === 'top'
      ? 'modal-top'
      : location === 'middle'
      ? 'modal-middle'
      : location === 'bottom'
      ? 'modal-bottom'
      : 'modal-middle'
  return (
    <>
      <button
        className={['btn', mode].join(' ')}
        onClick={() =>
          (
            document.getElementById('my_modal_1') as HTMLDialogElement
          ).showModal()
        }
      >
        open modal
      </button>
      <dialog id="my_modal_1" className={['modal', daisyLocation].join(' ')}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{content ?? ''}</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">{close}</button>
            </form>
          </div>
          <style jsx>{`
            div {
              background-color: ${backgroundColor};
            }
          `}</style>
        </div>
      </dialog>
    </>
  )
}
