type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ul-rich"; items: Array<{ label: string; text: string }> }
  | { type: "ul-links"; items: Array<{ label: string; href: string }> }
  | { type: "subheading"; text: string }
  | { type: "contact"; lines: string[] };

interface LegalSectionProps {
  heading: string;
  blocks: Block[];
}

function LegalSection({ heading, blocks }: LegalSectionProps) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl md:text-2xl font-bold text-black tracking-tight">
        {heading}
      </h2>
      {blocks.map((block, i) => {
        if (block.type === "p") {
          return (
            <p key={i} className="text-gray-600 text-base md:text-lg leading-relaxed">
              {block.text}
            </p>
          );
        }
        if (block.type === "subheading") {
          return (
            <h3 key={i} className="text-base md:text-lg font-semibold text-gray-800 mt-2">
              {block.text}
            </h3>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={i} className="list-disc pl-6 flex flex-col gap-2 text-gray-600 text-base md:text-lg leading-relaxed">
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          );
        }
        if (block.type === "ul-rich") {
          return (
            <ul key={i} className="list-disc pl-6 flex flex-col gap-2 text-gray-600 text-base md:text-lg leading-relaxed">
              {block.items.map((item, j) => (
                <li key={j}>
                  <span className="font-semibold text-gray-800">{item.label}</span>{" "}
                  {item.text}
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === "ul-links") {
          return (
            <ul key={i} className="list-disc pl-6 flex flex-col gap-2 text-gray-600 text-base md:text-lg leading-relaxed">
              {block.items.map((item, j) => (
                <li key={j}>
                  <a href={item.href} className="text-[#00B786] hover:underline">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          );
        }
        return (
          <div key={i} className="flex flex-col gap-1 text-gray-600 text-base md:text-lg leading-relaxed">
            {block.lines.map((line, j) => {
              if (line.startsWith("Email:")) {
                const val = line.replace("Email:", "").trim();
                return (
                  <span key={j}>
                    Email:{" "}
                    <a href={`mailto:${val}`} className="text-[#00B786] hover:underline">{val}</a>
                  </span>
                );
              }
              if (line.startsWith("CC:")) {
                const val = line.replace("CC:", "").trim();
                return (
                  <span key={j}>
                    CC:{" "}
                    <a href={`mailto:${val}`} className="text-[#00B786] hover:underline">{val}</a>
                  </span>
                );
              }
              if (line.startsWith("Mobile:")) {
                const val = line.replace("Mobile:", "").trim();
                return (
                  <span key={j}>
                    Mobile:{" "}
                    <a href={`tel:${val.replace(/\s/g, "")}`} className="text-[#00B786] hover:underline">{val}</a>
                  </span>
                );
              }
              if (line.startsWith("Phone:")) {
                const val = line.replace("Phone:", "").trim();
                return (
                  <span key={j}>
                    Phone:{" "}
                    <a href={`tel:${val.replace(/\s/g, "")}`} className="text-[#00B786] hover:underline">{val}</a>
                  </span>
                );
              }
              if (line.startsWith("Website:")) {
                const val = line.replace("Website:", "").trim();
                return (
                  <span key={j}>
                    Website:{" "}
                    <a href={val} target="_blank" rel="noopener noreferrer" className="text-[#00B786] hover:underline">{val}</a>
                  </span>
                );
              }
              return <span key={j}>{line}</span>;
            })}
          </div>
        );
      })}
    </div>
  );
}

export type { Block };
export default LegalSection;
