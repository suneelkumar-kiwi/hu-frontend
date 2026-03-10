import { useState } from "react";

// Pill option helper
export default function PillGroup({
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