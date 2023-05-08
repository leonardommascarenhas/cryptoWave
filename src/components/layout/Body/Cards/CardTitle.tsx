interface Props {
  emoji: string;
  title: string;
}

const CardTitle = ({ emoji, title }: Props) => {
  return (
    <div className="-ml-2 flex items-center justify-between">
      <div className="flex gap-2">
        <span className="text-xl">{emoji}</span>
        <h3 className="text-xl">{title}</h3>
      </div>
      <a href="/" className="text-xs mt-1 text-blue-400">
        More &gt;
      </a>
    </div>
  );
};

export default CardTitle;
