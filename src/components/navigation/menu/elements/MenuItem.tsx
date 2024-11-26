import Link from 'next/link';

const MenuItem = ({ title, href }: { title: string; href: string }) => {
  return (
    <div className="flex items-center">
      <Link href={href} aria-label={title}>
        <span className="transition ease-in-out duration-300 text-center hover:text-violet-400 whitespace-nowrap">
          {title}
        </span>
      </Link>
    </div>
  );
};

export default MenuItem;
