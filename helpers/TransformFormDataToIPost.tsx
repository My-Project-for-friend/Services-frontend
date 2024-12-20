import { IPost } from "@/interfaces/post.interface";

interface FormData {
  description: string;
  images: File[];
  typeOfService: string[];
  breastType: string;
  hairType: string;
  bodyType: string;
  services: string[];
  attentionTo: string[];
  placeOfService: string[];
  phoneNo: string;
  paymentMethods: string[];
  perHourRate: string;
  city: string;
  state: string;
  ethnicity: string;
  nationality: string;
}

const transformFormDataToIPost = (data: FormData): IPost => {
  return {
    images: data.images.map((file) => file.name), // Assuming images are files
    description: data.description,
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
    nationality: data.nationality,
    breastType: data.breastType as "Busty" | "Natural Boobs",
    hairType: data.hairType as
      | "Blond Hair"
      | "Black Hair"
      | "Red Hair"
      | "Brown Hair",
    bodyType: data.bodyType as "Slim" | "Curvy",
    services: data.services as IPost["services"],
    attentionTo: data.attentionTo as IPost["attentionTo"],
    placeOfService: data.placeOfService as IPost["placeOfService"],
    paymentMethods: data.paymentMethods as IPost["paymentMethods"],
    perHourRate: String(data.perHourRate), // Convert to string if necessary
    phoneNo: data.phoneNo,
  };
};

export default transformFormDataToIPost;
