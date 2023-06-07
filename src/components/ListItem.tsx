import Image from "next/image";

interface ListProps {
  list?: any;
}

interface ListItemProps {
  img: string;
  name: string;
  count: string;
  amount: string;
}
export const List = (props: ListProps) => {
  const { list } = props;
  return (
    <div className="w-full md:w-2/3 lg:w-1/3 ">
      {list?.map((item: any) => (
        <ListItem
          key={item?.id}
          img={item?.icon}
          name={item?.text}
          count={item?.transaction?.length}
          amount={item.transaction.reduce(
            (acc: number, transaction: any) =>
              acc + parseInt(transaction.amount),
            0
          )}
        />
      ))}
    </div>
  );
};

export const ListItem = (props: ListItemProps) => {
  const { img, name, count, amount } = props;
  return (
    <div className="w-full flex items-center space-x-4">
      <div>
        <Image
          className="rounded-full"
          src={img}
          alt={img}
          width={40}
          height={40}
        />
      </div>
      <div className="w-full py-2 flex items-end justify-between border-b border-gray-300">
        <div>
          <p>{name?.charAt(0).toUpperCase() + name?.slice(1)}</p>
          <p>{count} удаа</p>
        </div>
        <div>
          <p>{amount}₮</p>
        </div>
      </div>
    </div>
  );
};
