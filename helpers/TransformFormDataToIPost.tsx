import { FormPostData } from "@/interfaces/formData.interface";
import { IPost } from "@/interfaces/post.interface";

const transformFormDataToIPost = (data: FormPostData): IPost => {
  return {
    images: data.images, // Ensure this matches the IPost format
    description: data.description,
    age: data.age,
    title: data.title,
    typeOfService: data.typeOfService as (
      | "Call Girls"
      | "Transsexual"
      | "Massage"
      | "Adult Meetings"
      | "Male Escorts"
    )[],
    state: data.state,
    city: data.city,
    ethnicity: data.ethnicity,
    breastType: data.breastType as "Busty" | "Natural Boobs",
    hairType: data.hairType as
      | "Blond Hair"
      | "Black Hair"
      | "Red Hair"
      | "Brown Hair",
    bodyType: data.bodyType as "Slim" | "Curvy",
    services: data.services as IPost["services"], // Matches the interface structure
    attentionTo: data.attentionTo as IPost["attentionTo"],
    placeOfService: data.placeOfService as IPost["placeOfService"],
    paymentMethods: data.paymentMethods as IPost["paymentMethods"],
    perHourRate: String(data.perHourRate), // Converts to string
    phoneNo: data.phoneNo,
  };
};

export default transformFormDataToIPost;
