// TitleSubtitle.js
export default function TitleSubtitle({ title, subtitle, align = "center" }) {
  return (
    <div className={`text-${align} font-popins`}>
      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h3>
      <p className="text-lg text-[#b7b9bc] max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
}
