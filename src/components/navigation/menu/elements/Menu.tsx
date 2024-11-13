import MenuItem from './MenuItem';

const Menu = () => {
  return (
    <>
      <MenuItem title="Home" href="/" />
      <MenuItem title="About Us" href="/about" />
      <MenuItem title="Our Fabrics" href="/fabrics" />
      <MenuItem title="Contact" href="/contact" />
    </>
  );
};

export default Menu;
