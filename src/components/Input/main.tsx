import { useState, useMemo, useCallback } from 'react'
import { InputAttrs } from '@/types'
import { errorMessage } from './utils'
import cls from 'classnames'

export interface InputProps extends InputAttrs {
  type?: 'text' | 'number' | 'search' | 'email' | 'password' | 'date'
  value?: string | number
  autofocus?: boolean
  autoComplete?: string
  placeholder?: string
  maxLength?: number
}

export function InputProvider({ name, value, register, rules, errors, ...props }: InputProps) {
  // __STATE <React.Hooks>
  const vid = useMemo(() => `ui--form-model-${name}`, [name])
  const defaultValue = useMemo(() => value, [value])

  const [required, isPassword] = useMemo(() => [rules?.required, props.type === 'password'], [])
  const [type, setType] = useState(props.type || 'text')

  // __FUNCTION's
  const handleSwitchType = useCallback(() => {
    if (isPassword) setType((prev) => (prev === 'text' ? 'password' : 'text'))
  }, [])

  // __RENDER
  return (
    <div className="ui--input-provider">
      <label className={cls('ui--input-label', { required })} htmlFor={vid}>
        {props?.icon && <span className={`icon bi bi-${props.icon}`}></span>}
        <span className="text">{props.label}</span>
      </label>

      {props?.children && <div className="ui--input-desc">{props.children}</div>}

      <div className="ui--input-field">
        <input
          type={type}
          id={vid}
          defaultValue={defaultValue}
          autoComplete={props.autoComplete}
          placeholder={props.placeholder}
          maxLength={props.maxLength}
          disabled={props.disabled}
          {...register(name, rules)}
        />

        {isPassword && (
          <a
            className={cls('icon', 'bi', {
              'bi-eye': type === 'password',
              'bi-eye-slash': type === 'text'
            })}
            onClick={handleSwitchType}
          ></a>
        )}
      </div>

      <span className="ui--input-errors">{errorMessage(errors)}</span>
    </div>
  )
}
