export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  buttonStyle: string;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ buttonStyle, text, onClick }) => {
  return <button onClick={onClick} className={`btn ${buttonStyle}`}>{text}</button>;
};

export default Button;
