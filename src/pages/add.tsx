import {
  Categories,
  CategoriesDocument,
  useRegisterTransactionMutation,
} from "@/generated";
import { useState } from "react";
import { startCase } from "lodash";
import { Button } from "@/components";
import { apolloClient } from "@/apollo";
import { useRouter } from "next/router";

type AddProps = {
  categories: [Categories];
};
const Add = ({ categories }: AddProps) => {
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
        userId: "clictn2qx00000hbndyemqmkp",
        isExpense: item.isExpense === "income" ? false : true,
      },
    });
    if (data?.registerTransaction?.id) {
      router.replace("/");
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
        <label htmlFor="countries" className="block mb-2 text-sm font-medium">
          Төрөл
        </label>
        <select
          id="countries"
          className="px-4 py-2 border rounded-md"
          onChange={(e) => onChange(e, "categoryId")}
        >
          <option selected>Choose a category</option>
          {categories?.map((category: Categories) => (
            <option key={category?.id} value={category?.id}>
              {startCase(category?.text ?? "")}
            </option>
          ))}
        </select>
        <label htmlFor="countries" className="block mb-2 text-sm font-medium">
          Дүн
        </label>
        <input
          placeholder="Amount"
          className="px-4 py-2 border rounded-md"
          onChange={(e) => onChange(e, "amount")}
        />
        <select
          id="countries"
          className="px-4 py-2 border rounded-md"
          onChange={(e) => onChange(e, "isExpense")}
        >
          <option selected value={"expense"}>
            зарлага
          </option>
          <option value={"income"}>орлого</option>
        </select>

        <Button variant="primary" onClick={addItem}>
          Бүртгэх
        </Button>
      </form>
    </div>
  );
};

export default Add;

export const getServerSideProps = async () => {
  const { data } = await apolloClient.query({
    query: CategoriesDocument,
  });
  return {
    props: {
      categories: data?.categories,
    },
  };
};
