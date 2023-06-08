import { map, startCase } from "lodash";
import Image from "next/image";

interface ListProps {
  list?: any;
  loading: boolean;
}

interface ListItemProps {
  img: string;
  name: string;
  amount: string;
}

export const ListSkeleton = () => {
  return (
    <div className="w-full flex items-center space-x-4">
      <div className="w-10 h-10 rounded-full bg-gray-200"></div>
      <div className="w-full py-6 flex items-end justify-between border-b border-gray-200">
        <div className="h-2 bg-gray-200 rounded-full w-16"></div>
        <div className="w-16 h-2 bg-gray-200 rounded-full"></div>
      </div>
    </div>
  );
};

export const List = (props: ListProps) => {
  const { list, loading } = props;
  return (
    <div className="w-full md:w-2/3 lg:w-1/3 ">
      {loading &&
        [1, 2, 3, 4].map(() => (
          <>
            <ListSkeleton />
          </>
        ))}
      {map(list, (transaction) => (
        <ListItem
          key={transaction?.id}
          img={transaction?.category?.icon}
          name={transaction?.category?.text}
          amount={transaction?.amount}
        />
      ))}
    </div>
  );
};

export const ListItem = (props: ListItemProps) => {
  const { img, name, amount } = props;
  return (
    <div className="w-full flex items-center space-x-4">
      <Image
        className="rounded-full"
        src={img}
        alt={img}
        width={40}
        height={40}
      />
      <div className="w-full py-4 flex items-end justify-between border-b border-gray-300">
        <p>{startCase(name)}</p>
        <p>{amount}₮</p>
      </div>
    </div>
  );
};
