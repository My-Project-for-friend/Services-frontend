"use client";
import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useCreatePostMutation } from "@/redux/api/postApi";
import { toast } from "react-toastify";
import cities from "@/dataset/cities.json";
import nationalities from "@/dataset/nationalities.json";
import { ApiResponse } from "@/interfaces/apiResponse.interface";
import { IPost } from "@/interfaces/post.interface";
import transformFormDataToIPost from "@/helpers/TransformFormDataToIPost";
import { FormData } from "@/interfaces/formData.interface";
import validateForm from "@/helpers/validateForm";
const SERVICES = [
  "Oral",
  "Anal",
  "BDSM",
  "Girlfriend Experience",
  "Porn actresses",
  "Body ejaculation",
  "Erotic Massage",
  "Tantric Massage",
  "Fetish",
  "French Kiss",
  "Role Play",
  "Threesome",
  "Sexting",
  "Video call",
];

const ATTENTION_TO = ["Men", "Women", "Couples", "Disabled"];
const PLACE_OF_SERVICE = [
  "At home",
  "Events and Parties",
  "Hotel/Motel",
  "Clubs",
  "OutCall",
];
const HAIR_TYPE = ["Blond Hair", "Black Hair", "Red Hair", "Brown Hair"];
const BODY_TYPE = ["Slim", "Curvy"];
const BREAST_TYPE = ["Busty", "Natural Boobs"];
const PAYMENT_METHODS = ["Cash", "Credit Card", "UPI"];
const TYPE_OF_SERVICE = [
  "Call Girls",
  "Transsexual",
  "Massage",
  "Adult Meetings",
  "Male Escorts",
];

type ValidationErrors = Partial<Record<keyof FormData, string>>;

type CreatePostDialogProps = {
  onClose: () => void; // Function with no parameters and no return value
};

const CreatePostDialog: React.FC<CreatePostDialogProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    description: "",
    title: "",
    images: [],
    typeOfService: [],
    breastType: "",
    hairType: "",
    bodyType: "",
    services: [],
    attentionTo: [],
    placeOfService: [],
    phoneNo: "",
    paymentMethods: [],
    perHourRate: "",
    city: "",
    state: "",
    ethnicity: "",
    nationality: "",
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const states = [...new Set(cities.map((city) => city.state))];

  const [createPost] = useCreatePostMutation();

  const filteredCities = cities
    .filter((city) => city.state === formData.state)
    .map((city) => city.name as string);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "state" ? { city: "" } : {}), // Reset city when state changes
    }));

    // console.log(filteredCities);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      console.log(e.target.files);
      const files = Array.from(e.target.files);
      setFormData({ ...formData, images: files });

      const previews = files.map((file) => URL.createObjectURL(file));
      setImagePreviews(previews);
    }
  };

  const handleCheckboxChange = (
    field: keyof FormData,
    value: string,
    checked: boolean
  ) => {
    setFormData({
      ...formData,
      [field]: checked
        ? [...(formData[field] as string[]), value]
        : (formData[field] as string[]).filter((item) => item !== value),
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate the form data
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    // Stop if there are validation errors
    if (Object.keys(validationErrors).length > 0) {
      toast.warning("Please fix the errors in the form.");
      return;
    }

    try {
      // Prepare the FormData object
      const formDataPayload = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        if (key === "images") {
          // Append each image file individually
          (value as File[]).forEach((file) => {
            formDataPayload.append("images", file);
          });
        } else if (Array.isArray(value)) {
          // For array fields, append each item separately
          value.forEach((item) => formDataPayload.append(key, item));
        } else {
          // Append simple string fields
          formDataPayload.append(key, value as string);
        }
      });

      // Debugging FormData (Iterate to inspect content)
      for (const pair of formDataPayload.entries()) {
        console.log(pair[0], pair[1]);
      }
      console.log(formDataPayload);

      // Make the API call
      const res = await createPost(formData).unwrap();
      console.log("Response:", res);

      // Success notification
      toast.success("Post created successfully!");
      onClose(); // Close dialog on success
    } catch (error) {
      console.error("Error creating post:", error);
      toast.error("Failed to create post. Please try again.");
    }
  };

  useEffect(() => {
    return () => {
      imagePreviews.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [imagePreviews]);

  return (
    <Dialog open={true} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="max-w-5xl p-8 rounded-lg shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center text-gray-800">
            Create a New Post
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit}
          className="space-y-8 overflow-auto max-h-[75vh]"
        >
          {/* Phone Number and Per Hour Rate */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Phone Number"
              name="phoneNo"
              placeholder="Enter Phone Number"
              value={formData.phoneNo}
              onChange={handleInputChange}
            />
            {errors.phoneNo && (
              <span style={{ color: "red" }}>{errors.phoneNo}</span>
            )}
            <InputField
              label="Per Hour Rate"
              name="perHourRate"
              placeholder="e.g., $100"
              value={formData.perHourRate}
              onChange={handleInputChange}
            />
            {errors.perHourRate && (
              <span style={{ color: "red" }}>{errors.perHourRate}</span>
            )}
          </div>

          {/* Description */}
          <TextareaField
            label="Title"
            name="title"
            placeholder="Write a detailed Title here..."
            value={formData.title}
            onChange={handleInputChange}
          />
          {errors.title && <p className="error-text">{errors.title}</p>}

          {/* Description */}
          <TextareaField
            label="Description"
            name="description"
            placeholder="Write a detailed description here..."
            value={formData.description}
            onChange={handleInputChange}
          />
          {errors.description && (
            <span style={{ color: "red" }}>{errors.description}</span>
          )}

          {/* Dropdowns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SelectField
              label="Ethnicity"
              options={nationalities}
              name="ethnicity"
              value={formData.ethnicity}
              onChange={handleInputChange}
            />
            {errors.ethnicity && (
              <span style={{ color: "red" }}>{errors.ethnicity}</span>
            )}
            <SelectField
              label="Nationality"
              options={nationalities}
              name="nationality"
              value={formData.nationality}
              onChange={handleInputChange}
            />
            {errors.nationality && (
              <span style={{ color: "red" }}>{errors.nationality}</span>
            )}
            <SelectField
              label="State"
              options={states}
              name="state"
              value={formData.state}
              onChange={handleInputChange}
            />
            {errors.state && (
              <span style={{ color: "red" }}>{errors.state}</span>
            )}
            <SelectField
              label="City"
              options={filteredCities}
              name="city"
              value={formData.city}
              onChange={handleInputChange}
            />
            {errors.city && <span style={{ color: "red" }}>{errors.city}</span>}
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-gray-700 mb-3 font-semibold">
              Upload Images
            </label>
            <Input type="file" multiple onChange={handleFileChange} />
            <div className="flex gap-4 mt-4 flex-wrap">
              {imagePreviews.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Preview ${index}`}
                  className="h-24 w-24 object-cover rounded-lg border shadow-md"
                />
              ))}
            </div>
          </div>

          {/* Dropdowns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SelectField
              label="Type of Service"
              options={TYPE_OF_SERVICE}
              name="typeOfService"
              value={formData.typeOfService}
              onChange={handleInputChange}
            />
            <SelectField
              label="Breast Type"
              options={BREAST_TYPE}
              name="breastType"
              value={formData.breastType}
              onChange={handleInputChange}
            />
            <SelectField
              label="Hair Type"
              options={HAIR_TYPE}
              name="hairType"
              value={formData.hairType}
              onChange={handleInputChange}
            />
            <SelectField
              label="Body Type"
              options={BODY_TYPE}
              name="bodyType"
              value={formData.bodyType}
              onChange={handleInputChange}
            />
          </div>

          {/* Checkbox Groups */}
          <CheckboxGroup
            label="Services"
            options={SERVICES}
            selected={formData.services}
            onChange={(value: string, checked: boolean) =>
              handleCheckboxChange("services", value, checked)
            }
          />
          <CheckboxGroup
            label="Place of Service"
            options={PLACE_OF_SERVICE}
            selected={formData.placeOfService}
            onChange={(value: string, checked: boolean) =>
              handleCheckboxChange("placeOfService", value, checked)
            }
          />
          <CheckboxGroup
            label="Attention To"
            options={ATTENTION_TO}
            selected={formData.attentionTo}
            onChange={(value: string, checked: boolean) =>
              handleCheckboxChange("attentionTo", value, checked)
            }
          />
          <CheckboxGroup
            label="Payment Methods"
            options={PAYMENT_METHODS}
            selected={formData.paymentMethods}
            onChange={(value: string, checked: boolean) =>
              handleCheckboxChange("paymentMethods", value, checked)
            }
          />
          {errors.paymentMethods && (
            <span style={{ color: "red" }}>{errors.paymentMethods}</span>
          )}

          {/* Submit Button */}
          <div className="text-center">
            <Button
              type="submit"
              className="w-full py-3 text-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
            >
              Submit Post
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

function InputField({
  label,
  ...props
}: {
  label: string;
  [key: string]: any;
}) {
  return (
    <div>
      <label className="block text-gray-700 mb-2 font-medium">{label}</label>
      <Input
        className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
        {...props}
      />
    </div>
  );
}

function TextareaField({
  label,
  ...props
}: {
  label: string;
  [key: string]: any;
}) {
  return (
    <div>
      <label className="block text-gray-700 mb-2 font-medium">{label}</label>
      <Textarea
        className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
        {...props}
      />
    </div>
  );
}

function CheckboxGroup({
  label,
  options,
  selected,
  onChange,
}: {
  label: string;
  options: string[];
  selected: string[];
  onChange: (value: string, checked: boolean) => void;
}) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2 text-gray-700">{label}</h3>
      <div className="flex flex-wrap gap-4">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-2">
            <Checkbox
              checked={selected.includes(option)}
              onCheckedChange={(checked) =>
                onChange(option, checked as boolean)
              }
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
}

function SelectField({
  label,
  options,
  ...props
}: {
  label: string;
  options: string[];
  [key: string]: any;
}) {
  return (
    <div>
      <label className="block text-gray-700 mb-2 font-medium">{label}</label>
      <select
        {...props}
        className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
      >
        <option value="">Select</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CreatePostDialog;
