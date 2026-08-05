import {
  CalendarClock,
  Clock3,
  MessageCircleMore,
} from "lucide-react";

export default function OfficeHours() {
  return (
    <div
      className="
        mt-10
        rounded-3xl
        border
        border-yellow-500/10
        bg-[#0B1625]
        p-8
      "
    >
      <div className="flex items-center gap-3">

        <CalendarClock
          size={22}
          className="text-yellow-400"
        />

        <h3 className="font-heading text-2xl font-semibold text-white">
          Office Hours
        </h3>

      </div>

      <div className="mt-8 space-y-6">

        <div className="flex items-center justify-between">

          <span className="text-gray-300">
            Monday – Saturday
          </span>

          <span className="font-medium text-yellow-400">
            10:00 AM – 7:00 PM
          </span>

        </div>

        <div className="flex items-center justify-between">

          <span className="text-gray-300">
            Sunday
          </span>

          <span className="font-medium text-yellow-400">
            By Appointment
          </span>

        </div>

      </div>

      <div className="mt-8 rounded-2xl bg-[#07111d] p-5">

        <div className="flex items-start gap-3">

          <Clock3
            size={18}
            className="mt-1 text-yellow-400"
          />

          <p className="leading-7 text-gray-400">
            We usually respond to enquiries within one
            business day.
          </p>

        </div>

      </div>

      <div className="mt-5 rounded-2xl bg-yellow-500/10 p-5">

        <div className="flex items-start gap-3">

          <MessageCircleMore
            size={18}
            className="mt-1 text-yellow-400"
          />

          <p className="leading-7 text-gray-300">
            For urgent legal or taxation matters, please
            contact us through WhatsApp for a quicker
            response.
          </p>

        </div>

      </div>

    </div>
  );
}