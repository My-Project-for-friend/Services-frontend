import { FormPostData } from "@/interfaces/formData.interface";
type ValidationErrors = Partial<Record<keyof FormPostData, string>>;

const validateForm = (data: FormPostData): ValidationErrors => {
  const newErrors: ValidationErrors = {};

  if (!data.description) {
    newErrors.description = "Description is required.";
  }
  if (!data.title) {
    newErrors.title = "Title is required.";
  }

  if (!data.typeOfService) {
    newErrors.typeOfService = "Type of service is required.";
  }

  if (!data.phoneNo || !/^\d{10,15}$/.test(data.phoneNo)) {
    newErrors.phoneNo = "Phone number must be 10-15 digits.";
  }

  if (data.paymentMethods.length === 0) {
    newErrors.paymentMethods = "Select at least one payment method.";
  }

  if (!data.perHourRate || isNaN(Number(data.perHourRate))) {
    newErrors.perHourRate = "Per hour rate must be a valid number.";
  }

  if (!data.ethnicity) {
    newErrors.ethnicity = "Select Ethnicity.";
  }

  if (!data.city) {
    newErrors.city = "Select City.";
  }

  if (!data.state) {
    newErrors.state = "Select State.";
  }

  return newErrors;
};

export default validateForm;
