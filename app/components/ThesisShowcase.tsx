"use client";

import { useState } from "react";
import { ExternalIcon } from "./Icons";

const PLACEHOLDER = "https://your-rt-deepnids-app-link";

export default function ThesisShowcase({ url, badges }: { url: string; badges: string[] }) {
  const isLive = url && url.trim() !== "" && url !== PLACEHOLDER;
  const embedUrl = isLive ? url + (url.includes("?") ? "&" : "?") + "embed=true" : url;
  const displayUrl = isLive ? url.replace(/^https?:\/\//, "").replace(/\/$/, "") : "rt-deepnids.streamlit.app";
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="specimen">
      <div className="specimen-bar">
        <span className="u">{displayUrl}</span>
        {isLive && (
          <>
            <a className="open" href={url} target="_blank" rel="noreferrer">Open fullscreen <ExternalIcon /></a>
            <span className="flag"><i /> live</span>
          </>
        )}
      </div>

      <div className="specimen-split">
        {isLive ? (
          <div className="specimen-frame-wrap">
            {!loaded && (
              <div className="specimen-loading">
                <span className="spinner" />
                <span>Waking up the live app…</span>
              </div>
            )}
            <div className="specimen-frame-scaler">
              <iframe
                className="specimen-frame"
                src={embedUrl}
                title="RT-DeepNIDS live dashboard"
                loading="lazy"
                allow="fullscreen"
                onLoad={() => setLoaded(true)}
              />
            </div>
          </div>
        ) : (
          <div className="specimen-placeholder">
            Add your deployed link in <code>data.ts &rarr; thesisDemoUrl</code> to embed the live app here.
          </div>
        )}
        <div className="specimen-body">
          <div className="specimen-marks">
            {badges.map((b) => {
              const [num, ...rest] = b.split(" ");
              return (
                <div className="specimen-mark" key={b}>
                  <b>{num}</b><span>{rest.join(" ")}</span>
                </div>
              );
            })}
          </div>
          <h3>RT-DeepNIDS: A real-time hybrid network intrusion detection system</h3>
          <p>
            My undergraduate thesis: A real-time NIDS for IT and IoT environments, built with
            Streamlit and Scapy. Live packet capture and CSV-replay, per-prediction SHAP
            explainability, and a half-second dashboard refresh.
          </p>
          {isLive && (
            <a href={url} className="btn btn-solid" target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, alignSelf: "flex-start" }}>
              Launch the full app <ExternalIcon />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}