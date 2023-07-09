import InputWithLabel from '@/components/common/molecules/inputWithLabel/inputWithLabel'
import DocumentDetailsTitle from '../../atoms/documentDetailsTitle/documentDetailsTitle'
import styles from './basicInfo.module.css'

export default function BasicInfo() {
  const InputWithLabels = [
    {
      title: '発行日',
      inputId: 'documentIssueDate',
      width: '50%',
      marginBottom: '8px',
    },
    {
      title: '請求日',
      inputId: 'documentNumber',
      width: '50%',
      marginBottom: '8px',
    },
  ]
  return (
    <div className={styles.container}>
      <DocumentDetailsTitle title="基本情報" />
      {InputWithLabels.map(({ title, inputId, width, marginBottom }) => (
        <InputWithLabel
          key={inputId}
          title={title}
          inputId={inputId}
          width={width || undefined}
          marginBottom={marginBottom || undefined}
        />
      ))}
      <div className={styles.wrapper}>
        <InputWithLabel
          title="取引先名"
          inputId="customerName"
          width="calc(100% - 84px)"
          marginRight="12px"
        />
        <InputWithLabel inputId="customerTitle" width="72px" />
      </div>
    </div>
  )
}