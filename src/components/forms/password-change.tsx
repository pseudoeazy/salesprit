import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Button from "components/button";
import { ToastContainer, toast } from "react-toastify";

export default function PasswordChange() {
  const [isResend, setIsResend] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const handleResendLink = async () => {
    setIsResend(true);
    setTimeout(() => {
      setIsResend(false);

      toast.success("Verification Link Sent Successfully", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }, 2000);
  };
  return (
    <div>
      <div className="my-10">
        We have sent a verification link to your email address{" "}
        <span className="text-success font-bold">admin22@gmail.com</span>
      </div>
      <div className="my-12">
        Just click on the link in your mail box & all done.
      </div>

      <div className="space-y-8">
        <Button
          type="submit"
          className="w-full hover:bg-secondary transition duration-500 linear"
          onClick={() => router.push("/login")}
        >
          Continue
        </Button>

        <Button
          type="submit"
          className="w-full hover:bg-primary bg-secondary transition duration-500 linear"
          disabled={isResend}
          loading={isResend}
          onClick={handleResendLink}
        >
          Resend Link
        </Button>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}
