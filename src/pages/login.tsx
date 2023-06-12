import { Button, Typography } from "@/components";
import { useLoginMutation, useSignupMutation } from "@/generated";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import cookies from "js-cookie";
import Link from "next/link";
const SignUp = () => {
  const router = useRouter();
  const usernameRef: any = useRef();
  const passwordRef: any = useRef();
  const [login] = useLoginMutation();
  const [error, setError]: any = useState("");
  const [loading, setLoading]: any = useState(false);
  const signin = async () => {
    setLoading(true);
    const { value: username } = usernameRef.current;
    const { value: password } = passwordRef.current;
    if (!username || !password) {
      setLoading(false);
      setError("Fields must be filled out");
      return;
    }
    try {
      const { data } = await login({
        variables: {
          username,
          password,
        },
      });
      cookies.set("uid", String(data?.login?.id));
      router.push("/");
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  return (
    <div>
      <form className="flex flex-col space-y-2">
        <div className="my-4">
          <Typography variant="heading">Log in</Typography>
        </div>
        <label>Username</label>
        <input
          ref={usernameRef}
          placeholder="Username"
          className="px-4 py-2 border rounded-md"
        />
        <label>Password</label>
        <input
          type="password"
          ref={passwordRef}
          placeholder="Password"
          className="px-4 py-2 border rounded-md"
        />

        {error && <p className="text-red-600">Error</p>}

        <Button variant="primary" onClick={signin} sx="w-full">
          {!loading ? "Log in" : "Loading..."}
        </Button>


        <Link href="/signup" className="mt-6">
          Create account?{" "}
          <span className="font-semibold text-blue-600">Sign up</span>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
