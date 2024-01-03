import React from 'react'

interface ModalProps {
  /**
   * Basic style
   */
  primary?: boolean
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * Placeholder
   */
  placeholder: string
  /**
   * Label
   */
  label?: string
  /**
   * Size of text input box
   */
  size?: 'large' | 'medium' | 'small'
  /**
   * True if input is disabled
   */
  disabled?: boolean
  /**
   * Optional change handler
   */
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const DaisyTextInput = ({
  primary = false,
  backgroundColor = 'bg-primary',
  placeholder = 'Input here',
  label,
  size = 'medium',
  disabled = false,
  onClick,
  ...props
}: ModalProps) => {
  const mode = primary ? 'input-primary' : ''
  const sizing =
    size === 'large' ? 'input-lg' : size === 'medium' ? 'input-md' : 'input-sm'
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className={['input input-bordered w-full max-w-xs', mode, sizing].join(
          ' '
        )}
        disabled={disabled}
        {...props}
      />
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </label>
  )
}
