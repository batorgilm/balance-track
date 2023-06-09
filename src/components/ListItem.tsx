import { map, startCase } from "lodash";
import Image from "next/image";
import { ListSkeleton } from "./ListSkeleton";

interface ListProps {
  list?: any;
  loading: boolean;
}

interface ListItemProps {
  transaction: {
    category: {
      icon: string;
      text: string;
    };
    amount: string;
    isExpense: boolean;
  };
}

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
        <ListItem key={transaction?.id} transaction={transaction} />
      ))}
    </div>
  );
};

export const ListItem = (props: ListItemProps) => {
  const { category, amount, isExpense } = props?.transaction;
  return (
    <div className="w-full flex items-center space-x-4">
      <Image
        className="rounded-full"
        src={category?.icon}
        alt={category?.icon}
        width={40}
        height={40}
      />
      <div className="w-full py-4 flex items-end justify-between border-b border-gray-300">
        <p>{startCase(category?.text)}</p>
        <p className={isExpense ? "text-red-600" : "text-green-600"}>
          {amount}₮
        </p>
      </div>
    </div>
  );
};
