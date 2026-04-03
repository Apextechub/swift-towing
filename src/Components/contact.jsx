import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    name: z.string().min(2, "Please enter your full name"),
    phone: z
        .string()
        .min(7, "Enter a valid phone number")
        .regex(/^[0-9+()\- ]+$/, "Enter a valid phone number"),
    service: z.string().min(1, "Please select a service"),
    vehicleType: z.string().min(1, "Please select a vehicle type"),
    location: z.string().min(2, "Please enter your location"),
    details: z.string().optional(),
});

const services = [
    "Towing",
    "Jumpstart",
    "Tire Change",
    "Lockout Service",
    "Fuel & Gas Delivery",
    "Winch-Out Service",
];

const vehicleTypes = [
    "Sedan",
    "SUV / Crossover",
    "Truck",
    "Van / Minivan",
    "Motorcycle",
    "Heavy Duty / Commercial",
    "Other",
];

export default function GetQuote() {
    const [submitted, setSubmitted] = useState(false);
    const [serverError, setServerError] = useState("");

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors, isSubmitting },
    } = useForm({ resolver: zodResolver(schema) });

    const nameValue = watch("name", "");

    const onSubmit = async (data) => {
        setServerError("");
        try {
            const res = await fetch(
                "https://mail-server-towing-pages.vercel.app/api/send-quote",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                }
            );
            const result = await res.json();
            if (result.success) {
                setSubmitted(true);
            } else {
                setServerError("Something went wrong. Please try again.");
            }
        } catch {
            setServerError("Network error. Please try again.");
        }
    };

    return (
        <section id="contact" className="bg-black py-20 px-4">
            <div className="max-w-3xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <span className="bg-yellow-400 text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                        Free Quote
                    </span>
                    <h2 className="text-white text-3xl sm:text-4xl font-extrabold mt-4 tracking-tight">
                        Get a Quote
                    </h2>
                    <p className="text-gray-400 mt-3 text-base max-w-md mx-auto">
                        Fill out the form below and we'll get back to you fast with a quote. Need immediate help?{" "}
                        <a href="tel:+18634745318" className="text-yellow-400 font-semibold hover:underline">
                            Call +1 (863) 474 5318
                        </a>
                    </p>
                </div>

                {submitted ? (
                    /* Success State */
                    <div className="bg-zinc-900 border border-yellow-400/30 rounded-2xl p-12 text-center flex flex-col items-center gap-4">
                        <div className="bg-yellow-400 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                            <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                        </div>
                        <h3 className="text-white text-2xl font-bold">Quote Request Sent!</h3>
                        <p className="text-gray-400 text-sm max-w-sm">
                            Thanks, {nameValue}! We've received your request and will reach out to you shortly. For urgent needs, call us directly.
                        </p>
                        <a
                            href="tel:+18634745318"
                            className="mt-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 py-3 rounded-xl transition-all duration-200 flex items-center gap-2"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                            </svg>
                            Call +1 (863) 474-5318
                        </a>
                        <button
                            onClick={() => { setSubmitted(false); reset(); }}
                            className="text-gray-500 text-sm hover:text-gray-300 transition-colors"
                        >
                            Submit another request
                        </button>
                    </div>
                ) : (
                    /* Form */
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-10 flex flex-col gap-6"
                    >
                        {/* Row 1 - Name & Phone */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
                                    Full Name <span className="text-yellow-400">*</span>
                                </label>
                                <input
                                    {...register("name")}
                                    type="text"
                                    placeholder="John Smith"
                                    className={`bg-zinc-800 border focus:border-yellow-400 focus:outline-none text-white text-sm rounded-xl px-4 py-3 transition-colors duration-200 placeholder-gray-600 ${errors.name ? "border-red-500" : "border-zinc-700"
                                        }`}
                                />
                                {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
                                    Phone Number <span className="text-yellow-400">*</span>
                                </label>
                                <input
                                    {...register("phone")}
                                    type="tel"
                                    placeholder="+1 (863) 474-5318"
                                    className={`bg-zinc-800 border focus:border-yellow-400 focus:outline-none text-white text-sm rounded-xl px-4 py-3 transition-colors duration-200 placeholder-gray-600 ${errors.phone ? "border-red-500" : "border-zinc-700"
                                        }`}
                                />
                                {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
                            </div>
                        </div>

                        {/* Row 2 - Service & Vehicle Type */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
                                    Service Needed <span className="text-yellow-400">*</span>
                                </label>
                                <select
                                    {...register("service")}
                                    className={`bg-zinc-800 border focus:border-yellow-400 focus:outline-none text-white text-sm rounded-xl px-4 py-3 transition-colors duration-200 appearance-none cursor-pointer ${errors.service ? "border-red-500" : "border-zinc-700"
                                        }`}
                                >
                                    <option value="">Select a service</option>
                                    {services.map((s) => (
                                        <option key={s} value={s}>{s}</option>
                                    ))}
                                </select>
                                {errors.service && <p className="text-red-500 text-xs">{errors.service.message}</p>}
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
                                    Vehicle Type <span className="text-yellow-400">*</span>
                                </label>
                                <select
                                    {...register("vehicleType")}
                                    className={`bg-zinc-800 border focus:border-yellow-400 focus:outline-none text-white text-sm rounded-xl px-4 py-3 transition-colors duration-200 appearance-none cursor-pointer ${errors.vehicleType ? "border-red-500" : "border-zinc-700"
                                        }`}
                                >
                                    <option value="">Select vehicle type</option>
                                    {vehicleTypes.map((v) => (
                                        <option key={v} value={v}>{v}</option>
                                    ))}
                                </select>
                                {errors.vehicleType && <p className="text-red-500 text-xs">{errors.vehicleType.message}</p>}
                            </div>
                        </div>

                        {/* Row 3 - Location */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
                                Your Current Location <span className="text-yellow-400">*</span>
                            </label>
                            <input
                                {...register("location")}
                                type="text"
                                placeholder="e.g. 123 Main St, Tampa, FL"
                                className={`bg-zinc-800 border focus:border-yellow-400 focus:outline-none text-white text-sm rounded-xl px-4 py-3 transition-colors duration-200 placeholder-gray-600 ${errors.location ? "border-red-500" : "border-zinc-700"
                                    }`}
                            />
                            {errors.location && <p className="text-red-500 text-xs">{errors.location.message}</p>}
                        </div>

                        {/* Row 4 - Details */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
                                Additional Details
                            </label>
                            <textarea
                                {...register("details")}
                                rows={4}
                                placeholder="Describe your situation, vehicle condition, or any other details..."
                                className="bg-zinc-800 border border-zinc-700 focus:border-yellow-400 focus:outline-none text-white text-sm rounded-xl px-4 py-3 transition-colors duration-200 placeholder-gray-600 resize-none"
                            />
                        </div>

                        {serverError && (
                            <p className="text-red-500 text-sm font-bold text-center">{serverError}</p>
                        )}

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-yellow-400 hover:bg-yellow-300 disabled:opacity-60 disabled:cursor-not-allowed active:scale-95 text-black font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 mt-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v4m0 8v4M4 12h4m8 0h4" />
                                    </svg>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                    </svg>
                                    Submit Quote Request
                                </>
                            )}
                        </button>

                        <p className="text-gray-600 text-xs text-center">
                            For emergency towing, don't wait —{" "}
                            <a href="tel:+18634745318" className="text-yellow-400 hover:underline font-semibold">
                                call us directly at +1 (863) 474-5318
                            </a>
                        </p>
                    </form>
                )}
            </div>
        </section>
    );
}