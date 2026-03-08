import dashboardImage from "../../assets/dashboard-preview.png";

export function HeroImage() {
  return (
    <div className="relative">
      <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
        <img
          src={dashboardImage}
          alt="Github Insights Dashboard Preview"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}