"use client";

import CustomTextField from "@/components/form-fields/CustomTextField";
import Window from "@/components/window/Window";
import { useWindowStore } from "@/stores/useWindowStore";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "next/navigation";
import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { createSessionAction, updateSessionAction } from "../../actions/sessionActions";
import { ServerResponse } from "@/lib/serverResponse";

export type CreateSessionFormProps = {
  name: string;
  subject: string;
  description: string;
  date: Date;
  time: string;
  duration: number;
};

const SessionWindow = ({
  header,
  create,
  sessionId
}: {
  header: string;
  create: boolean;
  sessionId?: string;
}) => {
  const { toggleShow, current } = useWindowStore();
  const { classroomId } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<CreateSessionFormProps>({
    name: "",
    subject: "",
    description: "",
    date: new Date(),
    time: "",
    duration: 0,
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    let formattedValue: string | number | Date;
    switch (name) {
      case "duration":
        formattedValue = Number.parseInt(value);
        break;
      case "date":
        formattedValue = new Date(value);
        break;
      default:
        formattedValue = value;
        break;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: formattedValue,
    }));
  };

  const handleFormValidation = () => {
    const { name, subject, description, duration, time } = formData;
    if (
      name.length === 0 ||
      subject.length === 0 ||
      description.length === 0 ||
      duration === 0 ||
      time.length === 0
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

    let responseFromServerAction: ServerResponse;
    if (create) {
      responseFromServerAction = await createSessionAction({
      ...formData,
      classroomId: classroomId as string,
    });
    } else {
      responseFromServerAction = await updateSessionAction({
      ...formData,
      classroomId: classroomId as string,
    }, sessionId!);
    }

    if (!responseFromServerAction.success) {
      toast.error(
        `Error ${create ? "creating" : "updating"} the session: ${responseFromServerAction.message}`
      );
      setLoading(false);
      return;
    }
    toast.success(`Session ${formData.name} ${create ? "created" : "updated"} successfully!`);
    setLoading(false);
    toggleShow(create ? "create-session" : "update-session");
  };
  return (
    <Window index={current} header={header}>
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

        {/* Date */}

        <CustomTextField
          type="date"
          name="date"
          label="Session Date"
          onChanged={handleFormChange}
          value={formData.date}
          placeholder=""
        />

        {/* Time */}
        <CustomTextField
          type="time"
          name="time"
          label="Session Timing"
          onChanged={handleFormChange}
          value={formData.time}
          placeholder="e.g. 10"
        />
        <CustomTextField
          type="number"
          name="duration"
          label="Duration of this session (in minutes)"
          onChanged={handleFormChange}
          value={formData.duration.toString()}
          placeholder="e.g. 10"
        />

        <PrimaryButton
          text={`${create ? "Create" : "Update"} Session`}
          showLoading={loading}
          onPressed={handleFormSubmission}
          className="rounded-lg min-w-[400px] mt-5 self-center"
        />
      </div>
    </Window>
  );
};

export default SessionWindow;
