import { Education } from "@/interfaces/education";
import { create } from "zustand";

type ProfileFormProps = {
  image: File | null;
  name?: string;
  username?: string;
  about?: string;
  location?: string;
  phone?: string;
  education?: Education[];
};

type ProfileFormActionsProps = {
    setProfileFormData: (info: ProfileFormProps) => void;
}


export const useProfileInfoStore = create<ProfileFormProps & ProfileFormActionsProps>((set) => ({
    image: null,
    name: "",
    username: "",
    about: "",
    location: "",
    phone: "",
    education: [],
    setProfileFormData: (info) => set(() => ({
        imageSrc: info.image,
        name: info.name,
        username: info.username,
        about: info.about,
        location: info.location,
        phone: info.phone,
        education: info.education
    }))
}))