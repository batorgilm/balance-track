import { Button } from "@/components";
import { useRef } from "react";

const SignUp = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const register = () => {};
  return (
    <div>
      <form className="flex flex-col space-y-2">
        <label>Username</label>
        <input
          ref={usernameRef}
          placeholder="Enter category name"
          className="px-4 py-2 border rounded-md"
        />
        <label>Password</label>
        <input
          ref={passwordRef}
          placeholder="Enter icon image url"
          className="px-4 py-2 border rounded-md"
        />
        <Button variant="disabled" onClick={register} sx="w-full">
          Register
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
