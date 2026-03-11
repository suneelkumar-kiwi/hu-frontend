'use client';

import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FloatingInput } from "@/components/form/FloatingInput";
import { Squircle } from "corner-smoothing";
import FloatingSelect from "../form/FloatingSelect";
import { Option } from "@/interfaces/form.interface";

interface CreateAccountModalProps {
    show: boolean;
    onHide: () => void;
}

// Static options for selects
const countryOptions: Option[] = [
    { id: "us", name: "United States" },
    { id: "uk", name: "United Kingdom" },
    { id: "ca", name: "Canada" },
    { id: "au", name: "Australia" },
    { id: "other", name: "Other" },
];

const stateOptions: Option[] = [
    { id: "al", name: "Alabama" },
    { id: "ak", name: "Alaska" },
    { id: "az", name: "Arizona" },
    { id: "ar", name: "Arkansas" },
    { id: "ca", name: "California" },
    { id: "co", name: "Colorado" },
    { id: "ct", name: "Connecticut" },
    { id: "de", name: "Delaware" },
    { id: "fl", name: "Florida" },
    { id: "ga", name: "Georgia" },
    { id: "hi", name: "Hawaii" },
    { id: "id", name: "Idaho" },
    { id: "il", name: "Illinois" },
    { id: "in", name: "Indiana" },
    { id: "ia", name: "Iowa" },
    { id: "ks", name: "Kansas" },
    { id: "ky", name: "Kentucky" },
    { id: "la", name: "Louisiana" },
    { id: "me", name: "Maine" },
    { id: "md", name: "Maryland" },
    { id: "ma", name: "Massachusetts" },
    { id: "mi", name: "Michigan" },
    { id: "mn", name: "Minnesota" },
    { id: "ms", name: "Mississippi" },
    { id: "mo", name: "Missouri" },
    { id: "mt", name: "Montana" },
    { id: "ne", name: "Nebraska" },
    { id: "nv", name: "Nevada" },
    { id: "nh", name: "New Hampshire" },
    { id: "nj", name: "New Jersey" },
    { id: "nm", name: "New Mexico" },
    { id: "ny", name: "New York" },
    { id: "nc", name: "North Carolina" },
    { id: "nd", name: "North Dakota" },
    { id: "oh", name: "Ohio" },
    { id: "ok", name: "Oklahoma" },
    { id: "or", name: "Oregon" },
    { id: "pa", name: "Pennsylvania" },
    { id: "ri", name: "Rhode Island" },
    { id: "sc", name: "South Carolina" },
    { id: "sd", name: "South Dakota" },
    { id: "tn", name: "Tennessee" },
    { id: "tx", name: "Texas" },
    { id: "ut", name: "Utah" },
    { id: "vt", name: "Vermont" },
    { id: "va", name: "Virginia" },
    { id: "wa", name: "Washington" },
    { id: "wv", name: "West Virginia" },
    { id: "wi", name: "Wisconsin" },
    { id: "wy", name: "Wyoming" },
];

const socialPlatformOptions: Option[] = [
    { id: "instagram", name: "Instagram" },
    { id: "facebook", name: "Facebook" },
    { id: "twitter", name: "Twitter / X" },
    { id: "linkedin", name: "LinkedIn" },
    { id: "tiktok", name: "TikTok" },
    { id: "other", name: "Other" },
];

// Pill option helper
function PillGroup({
    label,
    options,
    multi = true,
}: {
    label: string;
    options: string[];
    multi?: boolean;
}) {
    const [selected, setSelected] = useState<string[]>([]);

    const toggle = (opt: string) => {
        if (multi) {
            setSelected((prev) =>
                prev.includes(opt) ? prev.filter((o) => o !== opt) : [...prev, opt]
            );
        } else {
            setSelected((prev) => (prev.includes(opt) ? [] : [opt]));
        }
    };

    return (
        <div className="pill-group">
            <p className="pill-group__label">{label}</p>
            <div className="pill-group__options">
                {options.map((opt) => (
                    <button
                        key={opt}
                        type="button"
                        className={`pill-btn${selected.includes(opt) ? " active" : ""}`}
                        onClick={() => toggle(opt)}
                    >
                        {opt}
                    </button>
                ))}
            </div>
        </div>
    );
}

export function CreateAccountModal({ show, onHide }: CreateAccountModalProps) {
    const [selectedCountry, setSelectedCountry] = useState<Option | null>(null);
    const [selectedState, setSelectedState] = useState<Option | null>(null);
    const [selectedSocial, setSelectedSocial] = useState<Option | null>(null);
    const [errors, setErrors] = useState<{ [key: string]: { message: string } }>({});

    const handleCountryChange = (selected: Option | null) => {
        setSelectedCountry(selected);
        // Clear error if any
        if (errors.countryId) {
            setErrors((prev) => ({ ...prev, countryId: undefined }));
        }
    };

    const handleStateChange = (selected: Option | null) => {
        setSelectedState(selected);
        if (errors.stateId) {
            setErrors((prev) => ({ ...prev, stateId: undefined }));
        }
    };

    const handleSocialChange = (selected: Option | null) => {
        setSelectedSocial(selected);
        if (errors.socialId) {
            setErrors((prev) => ({ ...prev, socialId: undefined }));
        }
    };
    return (

        <Modal
            show={show}
            onHide={onHide}
            className="create-account-modal"
            dialogClassName="squircle-modal"
            size="sm"
            centered
        >
            <Squircle cornerRadius={80} as={'div'} className="modal-squircle-wrapper">
                <Modal.Header closeButton>
                    <Modal.Title>Create Account</Modal.Title>
                    <p className="modal-subtitle">
                        Sign up using your email address and tell us a bit about yourself.
                    </p>
                </Modal.Header>

                <Modal.Body>
                    {/* ── Personal Details ── */}
                    <Squircle cornerRadius={60} as={'div'} className="modal-section">
                        <h6 className="modal-section__title">Personal Details</h6>

                        <div className="row gx-2">
                            <div className="col-6">
                                <FloatingInput label="First Name" type="text" required />
                            </div>
                            <div className="col-6">
                                <FloatingInput label="Last Name" type="text" required />
                            </div>
                        </div>

                        <FloatingInput label="Email Address" type="email" required />
                        <FloatingInput label="Phone Number" type="tel" required />

                        {/* Country select */}
                        <FloatingSelect
                            options={countryOptions}
                            label="Country"
                            changeHandler={handleCountryChange}
                            placeholder="Select Country"
                            value={selectedCountry}
                            errorMsg={errors.countryId?.message}
                        />

                        <FloatingSelect
                            options={stateOptions}
                            label="Select State"
                            changeHandler={handleStateChange}
                            placeholder="Select State"
                            value={selectedState}
                            errorMsg={errors.stateId?.message}
                        />

                        {/* Social platform select */}
                        <FloatingSelect
                            options={socialPlatformOptions}
                            label="Main Social Platform"
                            changeHandler={handleSocialChange}
                            placeholder="Select Social Platform"
                            value={selectedSocial}
                            errorMsg={errors.socialId?.message}
                        />
                    </Squircle>

                    {/* ── Your Care Journey ── */}
                    <Squircle cornerRadius={60} as={'div'} className="modal-section">
                        <h6 className="modal-section__title">Your Care Journey</h6>

                        <PillGroup
                            label="How did you hear about us?"
                            options={["Social Media", "Blog / Article", "Webinar", "Other"]}
                        />

                        <PillGroup
                            label="Purpose of contacting us?"
                            options={[
                                "Product Demo",
                                "Pricing Inquiry",
                                "Partnership",
                                "General Question",
                                "Other",
                            ]}
                        />

                        <PillGroup
                            label="How many patients are you currently caring for?"
                            options={["1–5", "6–10", "11–25", "26–50", "50+"]}
                            multi={false}
                        />

                        <PillGroup
                            label="How much time do you spend on patient care?"
                            options={[
                                "Less than 5 hours/week",
                                "5–10 hours/week",
                                "11–20 hours/week",
                                "20+ hours/week",
                            ]}
                            multi={false}
                        />

                        <PillGroup
                            label="Do you hold any qualifications related to patient care?"
                            options={["Yes", "No"]}
                            multi={false}
                        />
                    </Squircle>

                    {/* ── Privacy notice ── */}
                    <Squircle cornerRadius={80} as={'div'} className="modal-privacy">
                        <span className="modal-privacy__check">✓</span>
                        <div>
                            <p className="modal-privacy__text">
                                You accept that when you submit the form, we process the personal
                                data you provide.
                            </p>
                            <p className="modal-privacy__sub">
                                You can read more about Lens processing of your personal data and
                                your rights in our{" "}
                                <a href="#">privacy policy</a>.
                            </p>
                        </div>
                    </Squircle>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" type="submit" className="signup-btn">
                        Sign Up
                    </Button>
                </Modal.Footer>
            </Squircle>
        </Modal>
    );
}
