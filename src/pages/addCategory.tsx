import { Button } from "@/components";
import { useCreateCategoryMutation } from "@/generated";
import { useRouter } from "next/router";
import { useRef } from "react";

const AddCategory = () => {
  const router = useRouter();
  const [createCategory] = useCreateCategoryMutation();
  const textRef: any = useRef(null);
  const iconRef: any = useRef(null);
  const addItem = async () => {
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
      <label>Category name</label>
      <input
        ref={textRef}
        placeholder="Enter category name"
        className="px-4 py-2 border rounded-md"
      />
      <label>Icon</label>
      <input
        ref={iconRef}
        placeholder="Enter icon image url"
        className="px-4 py-2 border rounded-md"
      />
      <Button variant="primary" onClick={addItem} sx="w-full">
        Бүртгэх
      </Button>
    </form>
  );
};

export default AddCategory;
