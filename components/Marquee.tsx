export default function Marquee() {
  const schools =
    "HARVARD · YALE · MIT · STANFORD · PRINCETON · COLUMBIA · UPENN · BROWN · DARTMOUTH · CORNELL · DUKE · NORTHWESTERN · JOHNS HOPKINS · ";

  return (
    <div className="bg-cream border-y border-border h-[60px] flex items-center overflow-hidden">
      <div className="marquee-track">
        <span
          className="text-navy font-sans whitespace-nowrap"
          style={{
            fontSize: "14px",
            fontWeight: 700,
            letterSpacing: "0.15em",
          }}
        >
          {schools}
        </span>
        <span
          className="text-navy font-sans whitespace-nowrap"
          style={{
            fontSize: "14px",
            fontWeight: 700,
            letterSpacing: "0.15em",
          }}
        >
          {schools}
        </span>
      </div>
    </div>
  );
}
