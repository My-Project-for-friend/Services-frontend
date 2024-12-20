import { Document, ObjectId } from "mongoose";

// Define an interface for the Post Document
export interface IPost extends Document {
  _id?: ObjectId;
  userId?: ObjectId; // Reference to the user
  images?: string[]; // Array of image URLs
  description?: string;
  typeOfService?: Array<
    "Call Girls" | "Transsexual" | "Massage" | "Adult Meetings" | "Male Escorts"
  >;
  state?: string;
  city?: string;
  ethnicity?: string;
  nationality?: string;
  breastType?: "Busty" | "Natural Boobs";
  hairType?: "Blond Hair" | "Black Hair" | "Red Hair" | "Brown Hair";
  bodyType?: "Slim" | "Curvy";
  services?: Array<
    | "Oral"
    | "Anal"
    | "BDSM"
    | "Girlfriend Experience"
    | "Porn actresses"
    | "Body ejaculation"
    | "Erotic Massage"
    | "Tantric Massage"
    | "Fetish"
    | "French Kiss"
    | "Role Play"
    | "Threesome"
    | "Sexting"
    | "Video call"
  >;
  attentionTo?: Array<"Men" | "Women" | "Couples" | "Disabled">;
  placeOfService?: Array<
    "At home" | "Events and Parties" | "Hotel/Motel" | "Clubs" | "OutCall"
  >;
  paymentMethods?: Array<"Cash" | "Credit Card" | "UPI">;
  perHourRate?: string;
  phoneNo?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
