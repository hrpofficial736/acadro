"use client";

import CustomTextField from "@/components/form-fields/CustomTextField";
import Window from "@/components/window/Window";
import { useWindowStore } from "@/stores/useWindowStore";
import React, { useState } from "react";
import toast from "react-hot-toast";
import createSessionAction from "../../actions/createSessionAction";
import { useParams } from "next/navigation";
import { PrimaryButton } from "@/components/buttons/PrimaryButton";

export type CreateSessionFormProps = {
  name: string;
  subject: string;
  description: string;
  duration: number;
};

const SessionWindow = () => {
  const { show, toggleShow, current } = useWindowStore();
  const { classroomId } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<CreateSessionFormProps>({
    name: "",
    subject: "",
    description: "",
    duration: 0,
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const newValue =
      name === "duration"
        ? Number.parseInt(value)
        : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleFormValidation = () => {
    const { name, subject, description, duration } = formData;
    if (
      name.length === 0 ||
      subject.length === 0 ||
      description.length === 0 ||
      duration === 0
    )
      return false;

    if (duration === 0) return false;

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

    const responseFromServerAction = await createSessionAction({
      ...formData,
      classroomId: classroomId as string,
    });

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
    <>
      {show && (
        <Window index={current} header={"Create a session"}>
          <div className="w-full flex flex-col gap-5 p-2">
            <CustomTextField
              type="text"
              name="name"
              label="Name of your session"
              onChanged={handleFormChange}
              value={formData.name}
              placeholder="Enter the session name"
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
              label="Session Description"
              onChanged={handleFormChange}
              value={formData.description}
              placeholder="Describe your classroom in one line..."
            />
            <CustomTextField
              type="number"
              name="duration"
              label="Duration of this classroom (in minutes)"
              onChanged={handleFormChange}
              value={formData.duration.toString()}
              placeholder="e.g. 10"
            />

            <PrimaryButton
              text="Create Session"
              showLoading={loading}
              onPressed={handleFormSubmission}
              className="rounded-lg min-w-[400px] mt-5 self-center"
            />
          </div>
        </Window>
      )}
    </>
  );
};

export default SessionWindow;
