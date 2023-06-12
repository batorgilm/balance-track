import {
  Categories,
  useCategoriesQuery,
  useRegisterTransactionMutation,
} from "@/generated";
import { useState } from "react";
import { startCase } from "lodash";
import { Button } from "@/components";
import { apolloClient } from "@/apollo";
import { useRouter } from "next/router";
import Link from "next/link";
import Cookies from "js-cookie";

type AddProps = {
  categories: [Categories];
};
const Add = () => {
  const { data } = useCategoriesQuery();

  const [RegisterTransactionMutation, { loading, error }] =
    useRegisterTransactionMutation();

  const [item, setItem] = useState({
    categoryId: "",
    amount: "",
    isExpense: "",
  });

  const router = useRouter();
  const addItem = async () => {
    const { data } = await RegisterTransactionMutation({
      variables: {
        categoryId: item.categoryId,
        amount: item.amount,
        userId: String(Cookies.get("uid")),
        isExpense: item.isExpense === "income" ? false : true,
      },
    });
    if (data?.registerTransaction?.id) {
      router.push("/");
    }
  };

  const onChange: (e: any, key: string) => void = (e, key) => {
    const { value } = e.target;
    setItem((prev) => ({ ...prev, [key]: value }));
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }

  return (
    <div className="">
      <form className="flex flex-col space-y-4">
        <label className="block mb-2 text-sm font-medium">Category</label>
        <div className="flex space-x-2">
          <select
            className="px-4 py-2 border rounded-md w-full"
            onChange={(e) => onChange(e, "categoryId")}
          >
            <option selected>Choose a category</option>
            {data?.categories?.map((category: any) => (
              <option key={category?.id} value={category?.id}>
                {startCase(category?.text ?? "")}
              </option>
            ))}
          </select>
          <Link href="/addCategory">
            <Button variant="outlined">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </Button>
          </Link>
        </div>
        <label className="block mb-2 text-sm font-medium">Amount</label>
        <input
          placeholder="Amount"
          type="number"
          pattern="[0-9]*"
          inputMode="numeric"
          className="px-4 py-2 border rounded-md"
          onChange={(e) => onChange(e, "amount")}
        />
        {/* <select
          className="px-4 py-2 border rounded-md"
          onChange={(e) => onChange(e, "isExpense")}
        >
          <option selected value={"expense"}>
            зарлага
          </option>
          <option value={"income"}>орлого</option>
        </select> */}
        <Button variant="primary" onClick={addItem} sx="w-full">
          Add
        </Button>
      </form>
    </div>
  );
};

export default Add;

// export const getServerSideProps = async () => {
//   const { data } = await apolloClient.query({
//     query: CategoriesDocument,
//   });
//   return {
//     props: {
//       categories: data?.categories,
//     },
//   };
// };
