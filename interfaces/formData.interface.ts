export interface FormPostData {
  title: string;
  description: string;
  age:string;
  images: Array<{ originalname?: string; base64?: string; mimetype?: string }>;
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
}