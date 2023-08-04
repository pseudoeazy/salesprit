import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useToast } from "@chakra-ui/react";
import Button from "components/button";

export default function PasswordChange() {
  const [isResend, setIsResend] = useState(false);
  const router = useRouter();
  const toast = useToast();

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
      toast({
        title: "Verification Link Sent Successfully",
        status: "success",
        duration: 4000,
        isClosable: true,
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
    </div>
  );
}
