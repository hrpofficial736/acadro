"use client";

import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import CustomDropDown from "@/components/dropdowns/CustomDropDown";
import CustomTextField from "@/components/form-fields/CustomTextField";
import React, { useState } from "react";
import toast from "react-hot-toast";
import createClassroomAction from "../actions/createClassroomAction";
import { useWindowStore } from "@/stores/useWindowStore";
import { useSession } from "next-auth/react";

export type CreateClassroomFormProps = {
  name: string;
  subject: string;
  description: string;
  maxStudents: number;
  isPaid: boolean;
  price?: number | null;
};

const CreateClassroomForm = () => {
  const { toggleShow } = useWindowStore();
  const { data: session } = useSession();
  const [formData, setFormData] = useState<CreateClassroomFormProps>({
    name: "",
    subject: "",
    description: "",
    maxStudents: 0,
    isPaid: true,
    price: 0,
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const newValue = name === "maxStudents" || name === "price" ? Number.parseInt(value) : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleFormValidation = () => {
    const { name, subject, description, maxStudents, isPaid, price } = formData;
    if (
      name.length === 0 ||
      subject.length === 0 ||
      description.length === 0 ||
      maxStudents === 0
    )
      return false;

    if (isPaid && price === 0) return false;

    return true;
  };

  const handleFormSubmission = async () => {
    setLoading(true);
    const isFormValid = handleFormValidation();

    if (!isFormValid) {
      toast.error("Please enter valid values in the form!");
      setLoading(false);
      return;
    }

    const responseFromServerAction = await createClassroomAction(formData, session?.user.username!);

    if (!responseFromServerAction.success) {
      toast.error(
        `Error creating the classroom: ${responseFromServerAction.message}`
      );
      setLoading(false);
      return;
    }
    toast.success(`Classroom ${formData.name} created successfully!`);
    setLoading(false);
    toggleShow("create-classroom");
  };
  return (
    <div className="w-full flex flex-col gap-5 p-2">
      <CustomTextField
        type="text"
        name="name"
        label="Name of your classroom"
        onChanged={handleFormChange}
        value={formData.name}
        placeholder="Enter the classroom name"
      />
      <CustomTextField
        type="text"
        name="subject"
        label="Subject Name"
        onChanged={handleFormChange}
        value={formData.subject}
        placeholder="Enter the subject name"
      />
      <CustomTextField
        type="text"
        name="description"
        label="Classroom Description"
        onChanged={handleFormChange}
        value={formData.description}
        placeholder="Describe your classroom in one line..."
      />
      <CustomTextField
        type="number"
        name="maxStudents"
        label="Maximum students allowed in this classroom"
        onChanged={handleFormChange}
        value={formData.maxStudents.toString()}
        placeholder="e.g. 10"
      />

      <div className="flex flex-col gap-1">
        <label htmlFor="isPaid">Is this a paid classroom?</label>
        <CustomDropDown
          placeholder="Yes"
          listOfOptions={["Yes", "No"]}
          className="max-w-[80px]"
          callback={(value: string) => {
            setFormData((prevData) => ({
              ...prevData,
              isPaid: value === "Yes",
            }));
          }}
        />
      </div>

      {formData.isPaid && (
        <CustomTextField
          type="number"
          name="price"
          label="Price of this classroom"
          onChanged={handleFormChange}
          value={formData.price?.toString()!}
          placeholder="e.g. 250"
        />
      )}

      <PrimaryButton
        text="Create Classroom"
        showLoading={loading}
        onPressed={handleFormSubmission}
        className="rounded-lg min-w-[400px] mt-5 self-center"
      />
    </div>
  );
};

export default CreateClassroomForm;
