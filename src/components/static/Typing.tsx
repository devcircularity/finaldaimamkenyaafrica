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
        margin: '0 auto', // Center horizontally
        fontSize: '1em', 
        textAlign: 'center', // Center text
        color: "#006600", // Kenyan flag green
        fontWeight: 'bold', 
        whiteSpace: 'nowrap', // Prevent breaking into new lines
        width: '100%', 
        height: '100%', 
        display: 'flex', // Flex container for vertical centering
        alignItems: 'center', // Center vertically
        justifyContent: 'center', // Center horizontally
      }}
      repeat={1}
    />
  );
};

export default Typing;
