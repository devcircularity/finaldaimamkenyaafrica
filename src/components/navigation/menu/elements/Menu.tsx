import MenuItem from './MenuItem';

const Menu = () => {
  return (
    <div className="flex items-center space-x-6 relative">
      <MenuItem title="Home" href="/" />
      <MenuItem title="About Us" href="/about" />
      <MenuItem title="Shop" href="/fabrics" />
      <MenuItem title="Team" href="/the-team" />
      <MenuItem title="Contact" href="/contact" />
    </div>
  );
};

export default Menu;
