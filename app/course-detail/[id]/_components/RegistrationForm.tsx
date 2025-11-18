import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import TextField from "@mui/material/TextField";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod"; // Zod is used for validation schema, but we'll manually define rules for simplicity in this single file.

// Mock data for dropdowns
const courseDates = [
  { value: "", label: "-- Please Select --" },
  { value: "2025-01-15", label: "Jan 15, 2025 - Advanced React" },
  { value: "2025-02-20", label: "Feb 20, 2025 - Tailwind Fundamentals" },
  { value: "2025-03-10", label: "Mar 10, 2025 - Modern JS" },
];

const participantOptions = Array.from({ length: 10 }, (_, i) => ({
  value: String(i + 1),
  label: String(i + 1),
}));

// --- Custom Components for Reusability and Styling ---
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InputGroup = ({ label, children, isRequired, error }: any) => (
  <div className="flex flex-col space-y-2">
    <label className="text-sm font-semibold text-gray-700">
      {label}
      {isRequired && <span className="text-red-500 ml-1">*</span>}
    </label>
    {children}
    {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
  </div>
);

// --- Main Form Component ---

export const RegistrationForm = () => {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting },
    setValue,
    register,
  } = useForm({
    defaultValues: {
      modeOfTraining: "Physical Classroom Training",
      courseDate: "",
      courseTime: "9:30AM - 5:30PM",
      numParticipants: "1",
      sponsorship: "Self-Sponsored",
      nameOnCertificate: "",
      additionalMessage: "",
    },
  });

  const modeOfTraining = watch("modeOfTraining");
  const sponsorship = watch("sponsorship");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    // Simulate API call
    console.log("Form Submitted:", data);
    alert("Form submitted successfully! Check console for data.");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6 font-inter">
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-xl p-6 sm:p-10 border border-gray-100">
        {/* Header and Fee Section */}
        <header className="mb-8 border-b pb-4">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
            Course Registration
          </h1>
          <div className="text-lg font-semibold text-gray-600">Fee</div>
          <div className="text-4xl font-bold text-blue-600">MYR 2,000.00</div>
        </header>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* 1. Mode of Training (Radio Group) */}

          <FormControl component="fieldset">
            <FormLabel component="legend">Mode Of Training</FormLabel>
            <Controller
              name="modeOfTraining" // This matches the key in your defaultValues and submitted data
              control={control}
              render={({ field }) => (
                <RadioGroup {...field} row>
                  <FormControlLabel
                    value="Physical Classroom Training"
                    control={<Radio />}
                    label="Physical Classroom Training"
                  />
                  <FormControlLabel
                    value="Synchronised Teaching using ZOOM"
                    control={<Radio />}
                    label="Synchronised Teaching using ZOOM"
                  />
                  <FormControlLabel
                    value="Corporate Training at Company Premise"
                    control={<Radio />}
                    label="Corporate Training at Company Premise"
                  />
                </RadioGroup>
              )}
            />
          </FormControl>

          {/* 2. Course Date (Select) */}
          <InputGroup
            label="Course Date"
            isRequired={true}
            error={errors.courseDate?.message}
          >
            <Controller
              name="courseDate"
              control={control}
              rules={{ required: "Course Date is required." }}
              render={({ field }) => (
                <select
                  {...field}
                  className={`block w-full px-4 py-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ${
                    errors.courseDate ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  {courseDates.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              )}
            />
          </InputGroup>

          {/* 3. Course Time (Static value based on the image, controlled via a hidden field or initial state) */}

          {/* 4. No. of Participants (Select) */}
          <InputGroup
            label="No. of Participants"
            isRequired={false}
            error={errors.numParticipants?.message}
          >
            <Controller
              name="numParticipants"
              control={control}
              render={({ field }) => (
                <select
                  {...field}
                  className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                >
                  {participantOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              )}
            />
          </InputGroup>

          <FormControl component="fieldset">
            <FormLabel component="legend">Sponsorship</FormLabel>
            <Controller
              name="sponsorship" // This matches the key in your defaultValues and submitted data
              control={control}
              render={({ field }) => (
                <RadioGroup {...field} row>
                  <FormControlLabel
                    value="Self-Sponsored"
                    control={<Radio />}
                    label="Self-Sponsored"
                  />
                  <FormControlLabel
                    value="Employer-Sponsored"
                    control={<Radio />}
                    label="Employer-Sponsored"
                  />
                </RadioGroup>
              )}
            />
          </FormControl>

          {/* 6. Name(s) on Certificate (Textarea) */}
          <InputGroup
            label="Name(s) on Certificate"
            isRequired={true}
            error={errors.nameOnCertificate?.message}
          >
            <Controller
              name="nameOnCertificate"
              control={control}
              rules={{
                required: "Please enter the name(s) for the certificate.",
                minLength: {
                  value: 3,
                  message: "Must be at least 3 characters.",
                },
              }}
              render={({ field }) => (
                <textarea
                  {...field}
                  rows={3}
                  placeholder="Enter full name(s) as they should appear on the certificate, separated by commas if multiple."
                  className={`block w-full px-4 py-3 border rounded-lg resize-none focus:ring-blue-500 focus:border-blue-500 transition duration-150 ${
                    errors.nameOnCertificate
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
              )}
            />
          </InputGroup>

          {/* 7. Additional Message (Textarea) */}
          <InputGroup
            label="Additional Message or Emails for Course Notification"
            isRequired={false}
          >
            <Controller
              name="additionalMessage"
              control={control}
              render={({ field }) => (
                <textarea
                  {...field}
                  rows={3}
                  placeholder="e.g., specific dietary needs, questions, or alternative email addresses."
                  className="block w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                />
              )}
            />
          </InputGroup>

          {/* Footer and Submission */}
          <div className="pt-4 flex flex-col items-end">
            <p className="text-xs text-red-500 mb-4 font-medium">
              * Indicates Required Fields
            </p>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Register Now"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
