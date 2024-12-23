import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function InputField({
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

export function TextareaField({
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

export function CheckboxGroup({
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

export function SelectField({
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
