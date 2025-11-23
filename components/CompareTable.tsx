type Row = { aspect: string; digital: string; traditional: string };

export function CompareTable({ rows }: { rows: Row[] }) {
  return (
    <div id="comparison" className="card">
      <h2 className="section-title">
        <span className="dot" /> ???? ?????? ?????
      </h2>
      <table className="table">
        <thead>
          <tr>
            <th>?????</th>
            <th>??????? ??????</th>
            <th>??????? ????????</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx}>
              <td style={{ width: "18%", fontWeight: 600 }}>{row.aspect}</td>
              <td>{row.digital}</td>
              <td>{row.traditional}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
