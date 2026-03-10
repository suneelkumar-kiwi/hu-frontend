'use client';

import { Modal, Button } from "react-bootstrap";
import { Squircle } from "corner-smoothing";
import { checkIcon } from "@/assets/images";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface RequestSentModalProps {
    show: boolean;
    onHide: () => void;
}

export function RequestSentModal({ show, onHide }: RequestSentModalProps) {
    const router = useRouter();
    const handleClose = () => {
        onHide();
        router.push('/dashboard');
    };
    return (
        <Modal
            show={show}
            onHide={onHide}
            className="request-sent-modal"
            dialogClassName="squircle-modal"
            size="sm"
            centered
        >
            <Squircle cornerRadius={80} as={'div'} className="modal-squircle-wrapper">
                <Modal.Header>
                    <Modal.Title> <Image src={checkIcon} alt="" width={6} height={6} /> Request Sent</Modal.Title>
                    <p className="modal-subtitle">
                        Your request has been sent to the HU admin for approval. Once your account is verified, you will be notified and can sign in to access your dashboard.
                    </p>
                </Modal.Header>

                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose} className="signup-btn">
                        Ok
                    </Button>
                </Modal.Footer>
            </Squircle>
        </Modal>
    );
}
