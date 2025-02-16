import React, { useState } from "react";
import "./AttendeeDetails.css";
import { useSearchParams } from "react-router-dom";

const AttendeeDetails = () => {
  const [, setSearchParams] = useSearchParams();

  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    specialRequest: "",
    imageUrl: "", // Stores Cloudinary image URL
  });

  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Cloudinary Upload Widget
  const openCloudinaryWidget = () => {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dk8stcjfh", // Replace with your Cloudinary cloud name
        uploadPreset: "oljwrieo", // Replace with your Cloudinary upload preset
        cropping: false,
        multiple: false,
        folder: "attendee_images",
      },
      (error, result) => {
        if (!error && result.event === "success") {
          setFormData({ ...formData, imageUrl: result.info.secure_url });
        }
      }
    );
    widget.open();
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.imageUrl) {
      alert("Please upload an image first!");
      return;
    }

    setLoading(true);

    // Simulating form submission
    setTimeout(() => {
      console.log("Form Data Submitted:", formData);
      setLoading(false);
      alert("Form submitted successfully!");
    }, 2000);
  };

  return (
    <div className="attendee-details">
      <div className="attendee-step flex">
        <h2 className="text-info">Attendee Details</h2>

        {/* Step Progress Bar */}
          <div>Step 2/3</div>
      </div>
        <div className="progress-bar">
          <div className="progress"></div>
        </div>

      {/* Image Upload Section */}
      <div className="upload-section">
        <p className="upload-label">Upload Profile Photo</p>
        <div className="upload-box" onClick={openCloudinaryWidget}>
          {formData.imageUrl ? (
            <img
              src={formData.imageUrl}
              alt="Uploaded"
              className="preview-image"
            />
          ) : (
            <p className="upload-text">Drag & drop or click to upload</p>
          )}
        </div>
      </div>

      {/* Attendee Form */}
      <form onSubmit={handleSubmit} className="attendee-form">
        <label className="form-label">Enter your name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="form-input"
        />

        <label className="form-label">Enter your email *</label>
        <div className="email-container">
          <span className="email-icon">📧</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input email-input"
          />
        </div>

        <label className="form-label">Special request?</label>
        <textarea
          name="specialRequest"
          value={formData.specialRequest}
          onChange={handleChange}
          className="form-textarea"
        />

        {/* Button Group */}
        <div className="button-group">
          <button
            className="button-outline"
            onClick={() => setSearchParams({ step: "1" })}
            type="button"
          >
            Back
          </button>
          <button className="button-fill" type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Get My Free Ticket"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AttendeeDetails;
