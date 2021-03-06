export interface HighlightProps {
  children: React.ReactNode
  highlightClassName: string
}

const Highlight:React.FC<HighlightProps> = props => {
  return (
    <span className={props.highlightClassName}>
      {props.children}
    </span>
  )
}

export default Highlight;