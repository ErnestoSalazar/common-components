/// <reference types="react" />
interface IButtonProps {
    message: string;
    onClick: () => void;
}
declare function Button({ message, onClick }: IButtonProps): JSX.Element;
export default Button;
