type ItemProps = {
  title: string;
  price: number;
};

const TotalItem = ({title, price}: ItemProps) => {
  return (
    <div className="flex items-center justify-between">
      <p className="text-grey-500 md:text-base">{title}</p>
      <p className="font-medium md:text-lg">+${price}/mo</p>
    </div>
  );
};

export default TotalItem;
