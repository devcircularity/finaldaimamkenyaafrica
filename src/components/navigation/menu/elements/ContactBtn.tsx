import Link from 'next/link';

interface ContactBtnProps {
  title: string;
  href: string;
}

const ContactBtn = ({ title, href }: ContactBtnProps) => {
  return (
    <Link 
      href={href} 
      className="transition ease-in-out duration-300 text-center text-2xl border-2 border-white rounded-3xl px-3 pb-1 hover:bg-white hover:text-black"
    >
      {title}
    </Link>
  );
};

export default ContactBtn;
