import Card from "./components/card";

export default function HolidayPage() {
  return (
    <div className="h-screen text-gray-900 flex justify-center items-center gap-4">
      <Card imgSrc="/golden-gate.jpg" cityName="san francisco" type="Premium Economy"
      />

    </div>
  );
}