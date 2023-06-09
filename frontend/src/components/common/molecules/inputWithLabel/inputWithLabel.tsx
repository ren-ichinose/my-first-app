import Input from '../../atoms/input/input'
import styles from './inputWithLabel.module.css'

export default function InputWithLabel({
  title,
  inputId,
  placeholder,
  width,
  height,
  marginRight,
  marginBottom,
  register,
  type,
}: InputWithLabelProps) {
  const labelStyles = {
    width,
    marginRight,
    marginBottom,
  }

  return (
    <div style={labelStyles}>
      <label className={styles.label} htmlFor={inputId}>
        {title}
      </label>
      <Input
        placeholder={placeholder}
        inputId={inputId}
        height={height}
        register={register}
        type={type}
      />
    </div>
  )
}

InputWithLabel.defaultProps = {
  title: '',
  placeholder: '',
  type: 'text',
  width: '100%',
  height: '36px',
  marginRight: '0',
  marginBottom: '0',
  register: '',
}

interface InputWithLabelProps {
  title?: string
  inputId: string
  placeholder?: string
  type?: string
  width?: string
  height?: string
  marginRight?: string
  marginBottom?: string
  register?: any
}
