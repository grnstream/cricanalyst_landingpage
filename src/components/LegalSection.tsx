type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
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
            <p
              key={i}
              className="text-gray-600 text-base md:text-lg leading-relaxed"
            >
              {block.text}
            </p>
          );
        }
        if (block.type === "ul") {
          return (
            <ul
              key={i}
              className="list-disc pl-6 flex flex-col gap-2 text-gray-600 text-base md:text-lg leading-relaxed"
            >
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          );
        }
        return (
          <div
            key={i}
            className="flex flex-col gap-1 text-gray-600 text-base md:text-lg leading-relaxed"
          >
            {block.lines.map((line, j) => {
              if (line.startsWith("Email:")) {
                const email = line.replace("Email:", "").trim();
                return (
                  <span key={j}>
                    Email:{" "}
                    <a
                      href={`mailto:${email}`}
                      className="text-[#00B786] hover:underline"
                    >
                      {email}
                    </a>
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
