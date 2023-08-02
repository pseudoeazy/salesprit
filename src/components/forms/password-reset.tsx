import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "components/button";
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

export default function PasswordReset() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [hasError, setHasError] = useState(false);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const handlePasswordReset = async () => {};

  return (
    <form onSubmit={handleSubmit(handlePasswordReset)}>
      <input type="hidden" defaultValue={"123"} {...register("csrfToken")} />
      <div className="mb-4">
        <div className="flex items-center border-b border-gray-100">
          <label className="block text-sm font-medium mr-1" htmlFor="password">
            <PadLock /> <span className="sr-only">New Password</span>
          </label>
          <input
            placeholder="New Password"
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
      <div className="mb-4">
        <div className="flex items-center border-b border-gray-100">
          <label className="block text-sm font-medium mr-1" htmlFor="password">
            <PadLock /> <span className="sr-only"> Confirm Password</span>
          </label>
          <input
            placeholder="Password"
            className={style.input}
            autoComplete="off"
            id="confirmPassword"
            type="password"
            {...register("confirmPassword", {
              required: true,
            })}
          />
        </div>
        {errors.confirmPassword &&
          errors.confirmPassword?.type === "required" && (
            <span className="block w-full text-danger p-0.5 mt-0.5">
              password is required
            </span>
          )}
      </div>

      <Button
        type="submit"
        className="w-full hover:bg-secondary transition duration-500 linear"
        disabled={isSubmit}
        loading={isSubmit}
      >
        Continue
      </Button>
    </form>
  );
}
