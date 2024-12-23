"use client";
import { useEffect, useState, ChangeEvent, FormEvent, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
import validateForm from "@/helpers/validateForm";
import SERVICES from "@/dataset/services.json";
import ATTENTION_TO from "@/dataset/attention.json";
import PLACE_OF_SERVICE from "@/dataset/place-of-service.json";
import HAIR_TYPE from "@/dataset/hair-type.json";
import BODY_TYPE from "@/dataset/body-type.json";
import BREAST_TYPE from "@/dataset/breast-type.json";
import PAYMENT_METHODS from "@/dataset/payment-methods.json";
import TYPE_OF_SERVICE from "@/dataset/type-of-service.json";
import {
  CheckboxGroup,
  InputField,
  SelectField,
  TextareaField,
} from "@/helpers/InputDatas";
import axios from "axios";
import { FormPostData } from "@/interfaces/formData.interface";

type ValidationErrors = Partial<Record<keyof FormPostData, string>>;

type CreatePostDialogProps = {
  onClose: () => void; // Function with no parameters and no return value
};

const CreatePostDialog: React.FC<CreatePostDialogProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<FormPostData>({
    description: "",
    title: "",
    age: "",
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
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission status

  const filteredCities = useMemo(() => {
    return cities
      .filter((city) => city.state === formData.state)
      .map((city) => city.name);
  }, [formData.state]);

  const states = useMemo(() => {
    return [...new Set(cities.map((city) => city.state))];
  }, []);

  const [createPost] = useCreatePostMutation();

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "state" ? { city: "" } : {}), // Reset city when state changes
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);

      const validFiles = files.filter((file) => {
        const isValidImage = file.type.startsWith("image/"); // Check if file is an image
        const isValidSize = file.size <= 5 * 1024 * 1024; // 5MB
        return isValidImage && isValidSize;
      });

      if (validFiles.length < files.length) {
        toast.warning(
          "Some files were not uploaded due to invalid format or size."
        );
      }

      setFormData({ ...formData, images: validFiles });

      const previews = validFiles.map((file) => URL.createObjectURL(file));
      setImagePreviews(previews);
    }
  };

  const handleCheckboxChange = (
    field: keyof FormPostData,
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
    console.log("submitting");

    setIsSubmitting(true); // Set submitting state to true
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      toast.warning("Please fix the errors in the form.");
      setIsSubmitting(false); // Reset submitting state
      return;
    }

    try {
      let uploadedFiles = []; // Default to empty array if no images are uploaded

      // Check if there are images to upload
      if (formData.images && formData.images.length > 0) {
        console.log("Uploading images...", formData.images);

        // Create a FormData object and append all images
        const imageFormData = new FormData();
        formData.images.forEach((file) => {
          imageFormData.append("images", file); // Append each image
        });

        // Upload all images in one request
        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/file/uploads`,
          imageFormData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        // Ensure uploaded files exist in the response
        if (!data || !data.files) {
          throw new Error("No files returned from server.");
        }

        console.log("Uploaded image data:", data.files);
        uploadedFiles = data.files; // Assign uploaded files
      }

      // Prepare the post data
      const postData: IPost = transformFormDataToIPost({
        ...formData,
        images: uploadedFiles, // Use server-returned file data or an empty array
      });

      console.log("Post data:", postData);

      // Submit the post data
      await createPost(postData).unwrap();

      toast.success("Post created successfully!");
      onClose();
    } catch (error: any) {
      console.error("Error creating post: ", error);

      // Display server error messages if available
      if (error.response?.data?.message) {
        toast.error(`Error: ${error.response.data.message}`);
      } else {
        toast.error("Failed to create post. Please try again.");
      }
    } finally {
      setIsSubmitting(false); // Reset submitting state
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
              placeholder="e.g., Rs.1000"
              value={formData.perHourRate}
              onChange={handleInputChange}
            />
            {errors.perHourRate && (
              <span style={{ color: "red" }}>{errors.perHourRate}</span>
            )}
            <InputField
              label="Age"
              name="age"
              placeholder="e.g., 21"
              value={formData.age}
              onChange={handleInputChange}
            />
            {errors.age && <span style={{ color: "red" }}>{errors.age}</span>}
          </div>

          <TextareaField
            label="Title"
            name="title"
            placeholder="Write a detailed Title here..."
            value={formData.title}
            onChange={handleInputChange}
          />
          {errors.title && <p className="error-text">{errors.title}</p>}

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

          <CheckboxGroup
            label="Type of Service"
            options={TYPE_OF_SERVICE}
            selected={formData.typeOfService}
            onChange={(value: string, checked: boolean) =>
              handleCheckboxChange("typeOfService", value, checked)
            }
          />
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

          <div className="text-center">
            <Button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 text-lg ${
                isSubmitting ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Create Post"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePostDialog;
