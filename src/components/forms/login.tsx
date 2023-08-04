import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Button from "components/button";
import { emailPattern } from "components/utils/validators";
import At from "assets/icons/at";
import PadLock from "assets/icons/padlock";

const style = {
  input: `
    block
    w-full
    px-5
    py-3
    text-base text-neutral-600
    placeholder-gray-300
    transition
    duration-500
    ease-in-out
    transform
    border border-transparent
    focus:outline-none
    focus:border-b-2
    focus:border-b-gray-300
   `,
};

export default function Login() {
  const [isSubmit, setIsSubmit] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const handleLogin = async () => {};
  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <input type="hidden" defaultValue={""} {...register("csrfToken")} />
      <div className="my-4">
        <div className="flex items-center border-b border-gray-100">
          <label className="flex text-sm font-medium mr-1" htmlFor="email">
            <At /> <span className="sr-only"> Email Address</span>
          </label>
          <input
            className={style.input}
            placeholder="Email Address"
            id="email"
            type="text"
            {...register("email", {
              required: true,
              pattern: emailPattern,
            })}
          />
        </div>
        {errors.email && errors.email?.type === "required" && (
          <span className="block w-full text-danger p-0.5 mt-0.5">
            email is required
          </span>
        )}
        {errors.email && errors.email?.type === "pattern" && (
          <span className="block w-full text-danger p-0.5 mt-0.5">
            Invalid email address
          </span>
        )}
      </div>
      <div className="mb-4">
        <div className="flex items-center border-b border-gray-100">
          <label className="block text-sm font-medium mr-1" htmlFor="password">
            <PadLock /> <span className="sr-only"> Password</span>
          </label>
          <input
            placeholder="Password"
            className={style.input}
            autoComplete="off"
            id="password"
            type="password"
            {...register("password", { required: true })}
          />
        </div>
        {errors.password && errors.password?.type === "required" && (
          <span className="block w-full text-danger p-0.5 mt-0.5">
            password is required
          </span>
        )}
      </div>
      <div className="flex justify-end">
        <Link
          href="/account/forget-password"
          className="text-secondary block text-sm my-4 font-semibold"
        >
          Forgot Password?
        </Link>
      </div>

      <Button
        type="submit"
        className="w-full hover:bg-secondary transition duration-500 linear"
        disabled={isSubmit}
        loading={isSubmit}
      >
        Login
      </Button>
    </form>
  );
}
