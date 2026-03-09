'use client';

import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FloatingInput } from "@/components/Form/FloatingInput";
import { Squircle } from "corner-smoothing";

interface CreateAccountModalProps {
    show: boolean;
    onHide: () => void;
}

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
                        <div className="form-floating">
                            <select id="country" className="form-control form-select" defaultValue="">
                                <option value="" disabled hidden></option>
                                <option value="us">United States</option>
                                <option value="uk">United Kingdom</option>
                                <option value="ca">Canada</option>
                                <option value="au">Australia</option>
                                <option value="other">Other</option>
                            </select>
                            <label htmlFor="country" className="form-label">Country</label>
                        </div>

                        {/* Social platform select */}
                        <div className="form-floating">
                            <select id="social-platform" className="form-control form-select" defaultValue="">
                                <option value="" disabled hidden></option>
                                <option value="instagram">Instagram</option>
                                <option value="facebook">Facebook</option>
                                <option value="twitter">Twitter / X</option>
                                <option value="linkedin">LinkedIn</option>
                                <option value="tiktok">TikTok</option>
                                <option value="other">Other</option>
                            </select>
                            <label htmlFor="social-platform" className="form-label">Main Social Platform</label>
                        </div>
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
