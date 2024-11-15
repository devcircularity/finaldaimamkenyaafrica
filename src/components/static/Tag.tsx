function Tag({ title }: { title: string }) {
  return (
    <div className="flex items-center rounded-full bg-green-700/10 px-3 py-1 text-xs font-medium leading-5 text-black">
      {title}
    </div>
  );
}

export default Tag;
