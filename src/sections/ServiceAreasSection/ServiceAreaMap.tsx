import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { business } from "@/data/business";

export function ServiceAreaMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<import("leaflet").Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || typeof window === "undefined") return;

    let cancelled = false;

    void import("leaflet").then((L) => {
      if (cancelled || !containerRef.current) return;

      const map = L.default.map(containerRef.current, {
        center: business.mapCenter,
        zoom: 8,
        scrollWheelZoom: true,
      });

      L.default
        .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        })
        .addTo(map);

      const polygon = L.default.polygon(business.serviceAreaPolygon, {
        color: "#ea580c",
        weight: 2,
        fillColor: "#ea580c",
        fillOpacity: 0.2,
      }).addTo(map);

      map.fitBounds(polygon.getBounds(), { padding: [24, 24] });
      mapRef.current = map;
    });

    return () => {
      cancelled = true;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="box-border caret-transparent w-full h-[280px] md:h-[360px] rounded-[20px] overflow-hidden z-0"
      aria-label={`Service area map for ${business.alternateName}`}
    />
  );
}
