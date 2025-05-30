type ItemProps = {
  title: string;
  price: number;
};

const TotalItem = ({title, price}: ItemProps) => {
  return (
    <div className="flex items-center justify-between">
      <p className="text-grey-500">{title}</p>
      <p className="font-medium">+${price}/mo</p>
    </div>
  );
};

export default TotalItem;
