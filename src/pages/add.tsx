import {
  useCategoriesQuery,
  useRegisterTransactionMutation,
} from "@/generated";
import { useRef } from "react";
import { Button } from "@/components";
import { useRouter } from "next/router";
import Link from "next/link";
import Cookies from "js-cookie";
import { TextField } from "@/components/TextField";
import { Select } from "@/components/Select";

const Add = () => {
  const { data, loading: categoryLoading } = useCategoriesQuery();
  const router = useRouter();

  const categoryRef = useRef<HTMLSelectElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);

  const [RegisterTransactionMutation, { loading, error }] =
    useRegisterTransactionMutation();

  const addItem = async () => {
    console.log(categoryRef?.current?.value);
    const { data } = await RegisterTransactionMutation({
      variables: {
        categoryId: categoryRef?.current?.value || "",
        amount: amountRef?.current?.value || "",
        userId: String(Cookies.get("uid")),
        isExpense: true,
      },
    });
    if (data?.registerTransaction?.id) {
      router.push("/");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }

  return (
    <form className="flex flex-col space-y-4">
      <div className="flex space-x-2 items-end">
        <Select
          label="Category"
          categories={data?.categories}
          loading={categoryLoading}
        />
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

      <TextField
        label="Amount"
        placeholder="Amount"
        ref={amountRef}
        type="number"
        pattern="[0-9]*"
        inputMode="numeric"
      />
      <Button variant="primary" onClick={addItem} sx="w-full">
        Add
      </Button>
    </form>
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
