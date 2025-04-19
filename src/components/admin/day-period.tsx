"use client";

export function DayPeriod({ name }: { name?: string }) {
  const now = new Date();
  const currentHour = now.getHours();

  let timeOfDay;

  if (currentHour >= 5 && currentHour < 12) {
    timeOfDay = "Morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    timeOfDay = "Afternoon";
  } else if (currentHour >= 18 && currentHour < 21) {
    timeOfDay = "Evening";
  } else {
    timeOfDay = "Night";
  }

  return (
    <div className="text-sm font-semibold text-slate-900">
      Good {timeOfDay}, {name}!
    </div>
  );
}
