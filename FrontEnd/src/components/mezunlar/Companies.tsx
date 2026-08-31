import { COMPANIES } from "@/data/mezunlar";

export default function Companies() {
  return (
    <section className="companies">
      <h5 className="code-visby-h5-demibold text-center">
        Tərəfdaşlarımız və müştəri brendləri
      </h5>
      <p className="code-visby-body2-medium w-50 text-center m-auto mt-2 mb-4">
        #birlikdəquraq
      </p>
      <div className="companies-slider code-home-partners">
        <div className="companies-list text-cente partners-list d-grid">
          {COMPANIES.map((src) => (
            <a href="/mezunlarimiz" target="_blank" key={src} rel="noreferrer">
              <img src={src} style={{ width: 150 }} alt="" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
