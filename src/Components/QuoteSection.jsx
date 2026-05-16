import QuoteForm from "./QuoteForm";
import { PHONE, TEL_HREF, reportCallConversion } from "../config";

/**
 * Standalone "Get a Free Quote" section on a plain background.
 *
 * The form is never placed over an image — the background is a subtle
 * solid gradient pulled from the existing palette (black → zinc-900).
 * Shared by the homepage and every /services/<slug> page.
 *
 * @param {string} [defaultService] - preselects the form's service option.
 */
export default function QuoteSection({ defaultService = "" }) {
    return (
        <section
            id="contact"
            className="bg-gradient-to-b from-black to-zinc-900 py-20 px-4"
        >
            <div className="max-w-3xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <span className="bg-yellow-400 text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                        Free Quote
                    </span>
                    <h2 className="text-white text-3xl sm:text-4xl font-extrabold mt-4 tracking-tight">
                        Get a Free Quote
                    </h2>
                    <p className="text-gray-400 mt-3 text-base max-w-md mx-auto">
                        Fill out the form below and we'll get back to you fast with a quote. Need immediate help?{" "}
                        <a
                            href={TEL_HREF}
                            onClick={reportCallConversion}
                            className="text-yellow-400 font-semibold hover:underline"
                        >
                            Call {PHONE.display}
                        </a>
                    </p>
                </div>

                <QuoteForm defaultService={defaultService} />
            </div>
        </section>
    );
}
