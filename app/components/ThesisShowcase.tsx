import { ExternalIcon } from "./Icons";

const PLACEHOLDER = "https://your-rt-deepnids-app-link";

export default function ThesisShowcase({
  url,
  badges,
}: {
  url: string;
  badges: string[];
}) {
  const isLive = url && url.trim() !== "" && url !== PLACEHOLDER;
  // Hugging Face Spaces embed cleanly with ?embed=true (hides the HF top bar)
  const embedUrl = isLive
    ? url + (url.includes("?") ? "&" : "?") + "embed=true"
    : url;
  const displayUrl = isLive
    ? url.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : "rt-deepnids.streamlit.app";

  return (
    <div className="thesis">
      <div className="thesis-banner">
        <span className="dots">
          <i /><i /><i />
        </span>
        <span className="url">{displayUrl}</span>
        {isLive && (
          <>
            <a className="open-btn" href={url} target="_blank" rel="noreferrer">
              Open fullscreen <ExternalIcon />
            </a>
            <span className="live">
              <i /> LIVE
            </span>
          </>
        )}
      </div>

      {isLive ? (
        <div className="thesis-frame-wrap">
          <div className="thesis-frame-scaler">
            <iframe
              className="thesis-frame"
              src={embedUrl}
              title="RT-DeepNIDS live dashboard"
              loading="lazy"
              allow="fullscreen"
            />
          </div>
        </div>
      ) : (
        <div className="thesis-placeholder">
          <span className="big">🛰️</span>
          <div>
            <b>RT-DeepNIDS live dashboard</b>
            <br />
            Add your deployed link in <code>data.ts → thesisDemoUrl</code> to embed it here.
          </div>
        </div>
      )}

      <div className="thesis-body">
        <div className="thesis-badges">
          {badges.map((b) => (
            <span className="badge" key={b}>{b}</span>
          ))}
        </div>
        <h4>RT-DeepNIDS: A Real-Time Hybrid Network Intrusion Detection System for IT and IoT Environments</h4>
        <p>
          My undergraduate thesis: a real-time NIDS for IT &amp; IoT environments, built
          with Streamlit and Scapy. It supports live packet capture and CSV-replay,
          per-prediction SHAP explainability and a 0.5-second dashboard refresh
          reaching 99.94% accuracy and 96.60% zero-day detection on unseen IoT traffic.
        </p>
        {isLive && (
          <div className="thesis-actions">
            <a href={url} className="btn btn-primary btn-sm" target="_blank" rel="noreferrer">
              Launch the full app <ExternalIcon />
            </a>
            <span className="thesis-tip">
              Tip: the panel below is fully interactive — scroll inside it, or open fullscreen for the complete experience.
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
