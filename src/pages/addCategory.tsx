import { Button } from "@/components";
import { TextField } from "@/components/TextField";
import { useCreateCategoryMutation } from "@/generated";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

const AddCategory = () => {
  const router = useRouter();
  const [createCategory] = useCreateCategoryMutation();
  const [loading, setLoading] = useState(false);
  const textRef: any = useRef(null);
  const iconRef: any = useRef(null);

  console.log(textRef)
  const addItem = async () => {
    setLoading(true);
    const { value: text } = textRef?.current;
    const { value: icon } = iconRef?.current;
    const category = await createCategory({
      variables: {
        text,
        icon: icon ? icon : "https://img.icons8.com/pulsar-color/48/image.png",
      },
    });

    if (category?.data?.createCategory?.id) {
      router.push("/add");
    }
  };
  return (
    <form className="flex flex-col space-y-2">
      <TextField
        label="Category name"
        placeholder="Enter category name"
        ref={textRef}
      />
      <label>Icon</label>
      <input
        ref={iconRef}
        placeholder="Enter icon image url"
        className="px-4 py-2 border rounded-md"
      />
      <Button variant="primary" onClick={addItem} sx="w-full">
        {!loading ? "Add category" : "Loading..."}
      </Button>
    </form>
  );
};

export default AddCategory;
