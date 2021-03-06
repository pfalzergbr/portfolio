export interface highlightProps {
  children: React.ReactNode
}

const highlight:React.FC<highlightProps> = props => {
  return (
    <span>
      {props.children}
    </span>
  )
}

export default highlight;