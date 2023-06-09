import { Button, Typography } from "@/components";
import { List } from "@/components/ListItem";
import { useTransactionsLazyQuery } from "@/generated";
import Head from "next/head";
import { useEffect, useMemo, useState } from "react";
import { dateHandler } from "@/utils";
import { map, reduce, startCase } from "lodash";
import { DATE_RANGE, userId } from "@/constants";

export default function Home() {
  const [filterByDate, setFilterByDate] = useState(DATE_RANGE.week);
  const [transaction, { data, loading }] = useTransactionsLazyQuery();

  useEffect(() => {
    transaction({
      variables: {
        userId,
        date: dateHandler(filterByDate),
      },
    });
  }, [data?.transactions, filterByDate, transaction]);

  const total = useMemo(
    () =>
      reduce(
        data?.transactions,
        (sum, transaction) =>
          sum +
          (transaction?.isExpense
            ? Number(transaction?.amount) * -1
            : Number(transaction?.amount)),
        0
      ),
    [data?.transactions]
  );

  const filterHandler = async (param: string) => {
    setFilterByDate(param);
  };

  return (
    <>
      <Head>
        <title>Balance registration</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <section className="my-2">
          {loading ? (
            <div className="h-2.5 w-32 my-[26px] animate-pulse rounded-full bg-gray-200"></div>
          ) : (
            <Typography variant="heading">{total}₮</Typography>
          )}
          <Typography variant="caption">Энэ долоо хоногийн зарлага</Typography>
        </section>
        <section className="flex space-x-2 my-4">
          {map(Object.values(DATE_RANGE), (date, idx) => (
            <Button
              key={date + idx}
              onClick={() => {
                filterHandler(date);
              }}
              variant={filterByDate === date ? "outlined" : "text"}
            >
              {startCase(date)}
            </Button>
          ))}
        </section>
        <List list={data?.transactions} loading={loading} />
      </main>
    </>
  );
}

// export const getServerSideProps = async () => {
//   const { data }: any = await apolloClient.query({
//     query: TransactionsDocument,
//     variables: {
//       userId,
//       date: dateHandler("month"),
//     },
//   });
//   return {
//     props: {
//       transactions: data?.transactions,
//     },
//   };
// };
