import Button from 'react-toolbox/lib/button/Button';
import buttonTheme from './theme/button.scss';

const ThemedButton = (props) => (
  <Button theme={buttonTheme}  {...props} />
);

export default ThemedButton;