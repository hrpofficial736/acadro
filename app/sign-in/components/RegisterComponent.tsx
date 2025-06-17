"use client";

import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import CustomTextField from "@/components/form-fields/CustomTextField";
import { useAuthComponentSelectionStore } from "@/stores/useAuthComponentSelectionStore";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import toast from "react-hot-toast";
import { getSession, signIn } from "next-auth/react";
import { registerAction } from "../actions/actions";
import { useRoleStore } from "@/stores/useRoleStore";
import { useRouter } from "next/navigation";

interface RegisterUser {
  name: string;
  email: string;
  password: string;
}

const RegisterComponent = () => {
  const role = useRoleStore((state) => state.role);
  const router = useRouter();
  const setComponent = useAuthComponentSelectionStore(
    (state) => state.setComponent
  );
  const [formData, setFormData] = useState<RegisterUser>({
    name: "",
    email: "",
    password: "",
  });
  const [showButtonLoader, setShowButtonLoader] = useState<boolean>(false);

  const [showRequiredWarning, setShowRequiredWarning] =
    useState<boolean>(false);

  useEffect(() => {
    if (
      formData.email.trim() === "" ||
      formData.password.trim() === "" ||
      formData.name.trim() === ""
    )
      setShowRequiredWarning(true);
    else {
      setShowRequiredWarning(false);
    }
  }, [formData]);

  const handleFormSubmit = async () => {
    if (
      formData.email.trim() === "" ||
      formData.password.trim() === "" ||
      formData.name.trim() === ""
    ) {
      toast.error("Please enter all the required fields!");
      return;
    }
    setShowButtonLoader(true);
    const response = await registerAction({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role,
    });

    if (typeof response === "boolean" && response) {
      const response = await signIn("credentials", {
        redirect: false,
        email: formData.email,
        password: formData.password,
        role,
      });

      if (response?.error) {
        toast.error(response.error);
        setShowButtonLoader(false);
        return;
      }
      if (response?.ok) {
        const session = await getSession();
        if (session?.user.username) {
          setShowButtonLoader(false);
          router.push(`/dashboard/user/${session.user.username}`);
          return;
        }
      }
    }

    toast.error(
      typeof response === "boolean" ? `Error registering the ${role}` : response
    );
    setShowButtonLoader(false);
    return;
  };
  return (
    <motion.div
      initial={{
        x: 30,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        type: "tween",
        duration: 0.3,
      }}
      className="rounded-2xl p-2 flex flex-col gap-5"
    >
      <h1 className="text-primaryText/80 font-semibold text-xl">Register</h1>
      <div className="flex flex-col gap-5 w-full">
        <CustomTextField
          value={formData.name}
          onChanged={(e) => {
            setFormData((prevData) => ({
              ...prevData,
              name: e.target.value,
            }));
          }}
          name="name"
          label="Full Name"
          placeholder="Enter your full name"
          type="text"
        />
        <CustomTextField
          value={formData.email}
          onChanged={(e) => {
            setFormData((prevData) => ({
              ...prevData,
              email: e.target.value,
            }));
          }}
          name="email"
          label="Email"
          placeholder="Enter your email"
          type="email"
        />
        <CustomTextField
          value={formData.password}
          onChanged={(e) => {
            setFormData((prevData) => ({
              ...prevData,
              password: e.target.value,
            }));
          }}
          name="password"
          label="Password"
          placeholder="Enter your password"
          type="password"
        />
      </div>
      {showRequiredWarning && (
        <p className="text-xs text-error">All the fields are required!</p>
      )}
      <PrimaryButton
        text="Register"
        showLoading={showButtonLoader}
        onPressed={handleFormSubmit}
        className="w-full mt-5"
      />
      <div className="text-secondaryText f-c-row gap-1 max-md:text-sm">
        Already have an account?{" "}
        <p
          onClick={() => {
            setComponent("login");
          }}
          className="text-primary cursor-pointer active:scale-95 transition-all duration-300"
        >
          Login{" "}
        </p>{" "}
        to continue
      </div>
    </motion.div>
  );
};

export default RegisterComponent;
