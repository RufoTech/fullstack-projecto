import { STATS } from "@/data/mezunlar";

export default function Statistics() {
  return (
    <section className="code-home-statistics-main">
      <div className="left-part d-flex justify-content-md-start justify-content-center">
        <h4 className="code-visby-h4-bold w-65 w-md-75">
          Burada rəqəmlər danışır! #rəqəmlərləişimiz
        </h4>
      </div>
      <div className="d-grid right-part">
        {STATS.map((item) => (
          <div className="d-flex flex-column" key={item.value}>
            <h2 className="code-visby-h3-bold">{item.value}</h2>
            <p className="code-visby-body2-medium w-75 m-auto m-lg-0">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
