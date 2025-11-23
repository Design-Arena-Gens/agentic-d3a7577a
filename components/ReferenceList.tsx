export type Reference = {
  id: string;
  authors: string;
  year: string;
  title: string;
  source: string;
  doi?: string;
  url?: string;
  language?: "ar" | "en";
};

export function ReferenceList({ references }: { references: Reference[] }) {
  return (
    <ol id="references" className="card" style={{ counterReset: "ref" }}>
      <h2 className="section-title">
        <span className="dot" /> ???????
      </h2>
      {references.map((ref) => (
        <li key={ref.id} style={{ marginBottom: "0.9rem" }}>
          <span style={{ fontWeight: 600 }}>{ref.authors}</span> ({ref.year}). {ref.title}. {ref.source}
          {ref.doi ? (
            <>
              {" "}
              DOI: <a href={`https://doi.org/${ref.doi}`} target="_blank" rel="noreferrer">{ref.doi}</a>
            </>
          ) : null}
          {ref.url ? (
            <>
              {" "}
              ????: <a href={ref.url} target="_blank" rel="noreferrer">{ref.url}</a>
            </>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
