'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Squircle } from 'corner-smoothing';
import { loginBg, logo, questionMarkIcon, aiStar } from "@/assets/images";
import { FloatingInput } from "@/components/form/FloatingInput";
import { Button } from "react-bootstrap";
import CreateAccountDrawer from "@/components/offcanvas/CreateAccountDrawer";
import { RequestSentModal } from "@/components/modal/RequestSentModal";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showRequestSentModal, setShowRequestSentModal] = useState(false);

  return (
    <div className="login-page">
      <div className="hero-img">
        <Image className="bg-img" src={loginBg} alt="" width={768} height={810} />
        <Link className="logo" href={'/'}>
          <Image src={logo} alt="" width={153} height={100} />
        </Link>
      </div>
      <div className="right-side">
        <div className="cards-container">
          <Squircle cornerRadius={150} as={'div'} className="signin-card">
            <div className="signin-card-header">
              <h6> Physician Sign In </h6>
              <Button variant="light" className="forget-password"> <Image src={questionMarkIcon} alt="" width={12} height={12} /> Forgot Password </Button>
            </div>
            <div className="signin-form">
              <FloatingInput
                label="Email Address"
                type="email"
                required
              />
              <FloatingInput
                label="Password"
                type="password"
                required
              />
              <Button type="submit" variant="primary"> Sign In </Button>
            </div>
          </Squircle>
          <Squircle cornerRadius={150} as={'div'} className="create-account-card">
            <h1> Create your Physician Account</h1>
            <p>Connect with your patients in one powerful, intuitive platform. Review bloodwork, create personalized health plans, and track each patient’s journey—all in one place.</p>
            <div className="info-box">
              <h6> Here’s what you can do  <Image src={aiStar} alt="" width={19} height={20} /></h6>
              <ul>
                <li>
                  <strong> Schedule live consultations </strong>
                  <p> Book time directly on your calendar and meet patients via secure video calls. </p>
                </li>
                <li>
                  <strong>Chat with patients effortlessly </strong>
                  <p>  Message patients one-on-one, or let AI respond on your behalf when you’re unavailable. </p>
                </li>
                <li>
                  <strong> AI-powered bloodwork insights </strong>
                  <p> When patients upload their lab results, receive an instant AI analysis of biomarkers along with evidence-based health plan suggestions—ready for your review, approval, and delivery. </p>
                </li>
                <li>
                  <strong> Track progress over time </strong>
                  <p> Monitor patient outcomes and engagement as they move through their health journey. </p>
                </li>
              </ul>
            </div>
            <Button variant="light" onClick={() => setShowModal(true)}> Sign up </Button>
          </Squircle>
        </div>
      </div>
      <CreateAccountDrawer show={showModal} onHide={() => setShowModal(false)} showRequestSentModal={() => setShowRequestSentModal(true)} />
      <RequestSentModal show={showRequestSentModal} onHide={() => setShowRequestSentModal(false)} />
    </div>
  );
}