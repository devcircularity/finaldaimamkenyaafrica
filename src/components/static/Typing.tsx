import { TypeAnimation } from 'react-type-animation';

const Typing = () => {

  return (
    <TypeAnimation
  sequence={[
    'Daima',
    500, 
    'Mkenya',
    500,
    'Africa',
    500,
    'Daima Mkenya Africa',
    500
  ]}
  wrapper="span"
  speed={10}
  preRenderFirstString={true}
  style={{ 
    marginLeft: '5px', 
    fontSize: '1em', 
    textAlign: 'left', 
    color: "#84ffff", 
    fontWeight: 'bold', 
    display: 'inline-block', 
    width: '100%', 
    whiteSpace: 'nowrap' // Prevent breaking into new lines
  }}
  repeat={1}
/>

  );
};

export default Typing;