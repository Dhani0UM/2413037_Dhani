import Card from "./_components/card";

export default function HolidayPage() {
  return (
    <div className="h-screen text-gray-900 flex justify-center items-center gap-4">
      <Card imgSrc="/golden-gate.jpg" cityName="san francisco" type="Premium Economy"
      />
      <Card imgSrc="/ikn.jpg" cityName="kanker" type="lu ngepain ke IKN geng" />
    </div>
  );
}