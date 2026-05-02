import { useEffect, useMemo, useState } from "react";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { motion } from "framer-motion";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";

const locations = [
  {
    name: "Nairobi",
    address: "Westlands Business District - Main showroom & corporate office",
    phone: "+254 795 704 273",
    email: "nairobi@rhinggo.co.ke",
    hours: "Mon-Sat: 8AM - 6PM",
    mapUrl: "https://maps.app.goo.gl/QwvnfaPojPnVBtv16",
    latLng: [-1.2921, 36.8219] as const,
    isHQ: true,
  },
  {
    name: "Kisumu",
    address: "Lake Basin Mall area - Serving Western Kenya region",
    phone: "+254 795 704 274",
    email: "kisumu@rhinggo.co.ke",
    hours: "Mon-Sat: 8AM - 6PM",
    mapUrl: "https://maps.app.goo.gl/QqJVqtBvPPKWpZDGA",
    latLng: [-0.0917, 34.768] as const,
    isHQ: false,
  },
  {
    name: "Mombasa",
    address: "Near Naivas Likoni - Flagship showroom & service center",
    phone: "+254 795 704 275",
    email: "mombasa@rhinggo.co.ke",
    hours: "Mon-Sat: 8AM - 6PM",
    mapUrl: "https://www.google.com/maps/place/RHINGGO+ELECTRIC+TUKTUK/@-4.0743892,39.6665507",
    latLng: [-4.0435, 39.6682] as const,
    isHQ: false,
  },
];

function FitToActive({ latLng }: { latLng: readonly [number, number] }) {
  const map = useMap();

  useEffect(() => {
    map.setView(latLng as [number, number], Math.max(map.getZoom(), 7), {
      animate: true,
    });
  }, [latLng, map]);

  return null;
}

export default function LocationsPage() {
  const [activeLocation, setActiveLocation] = useState<string | null>("Nairobi");
  const activeData = locations.find((l) => l.name === activeLocation);

  const MapContainerAny = MapContainer as unknown as any;
  const TileLayerAny = TileLayer as unknown as any;
  const MarkerAny = Marker as unknown as any;

  const getMarkerIcon = useMemo(() => {
    return (selected: boolean) =>
      L.divIcon({
        className: "",
        iconSize: [34, 34],
        iconAnchor: [17, 34],
        popupAnchor: [0, -34],
        html: `
          <div style="
            width:34px;height:34px;border-radius:9999px;
            background:${selected ? "var(--electric)" : "rgba(255,255,255,0.95)"};
            color:${selected ? "var(--electric-foreground)" : "#0b1220"};
            display:flex;align-items:center;justify-content:center;
            box-shadow:0 10px 25px rgba(0,0,0,0.25);
            border:${selected ? "3px solid rgba(255,255,255,0.35)" : "1px solid rgba(0,0,0,0.1)"};
            font-weight:900;font-size:14px;
          ">R</div>
          <div style="
            width:0;height:0;margin:0 auto;
            border-left:7px solid transparent;
            border-right:7px solid transparent;
            border-top:10px solid ${selected ? "var(--electric)" : "rgba(255,255,255,0.95)"};
            filter:drop-shadow(0 6px 10px rgba(0,0,0,0.15));
          "></div>
        `,
      });
  }, []);

  return (
    <>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionLabel icon="📍" text="Our Locations" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Find Us <span className="text-electric">Across Kenya</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mb-12">
              Visit any of our 3 locations for vehicle demonstrations, service support, or financing consultations.
            </p>
          </AnimatedSection>

          <AnimatedSection className="mb-12">
            <div className="relative rounded-3xl overflow-hidden border border-border/50 shadow-2xl">
              <div className="h-[420px] md:h-[460px]">
                <MapContainerAny
                  center={[-1.2, 37.2]}
                  zoom={6}
                  scrollWheelZoom
                  className="h-full w-full"
                >
                  <TileLayerAny
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />

                  {activeData?.latLng && <FitToActive latLng={activeData.latLng} />}

                  {locations.map((loc) => (
                    <MarkerAny
                      key={loc.name}
                      position={loc.latLng as [number, number]}
                      icon={getMarkerIcon(activeLocation === loc.name)}
                      eventHandlers={{
                        click: () => setActiveLocation(loc.name),
                      }}
                    >
                      <Popup>
                        <div style={{ minWidth: 180 }}>
                          <div style={{ fontWeight: 800 }}>{loc.name}</div>
                          <div style={{ fontSize: 12, opacity: 0.8 }}>{loc.address}</div>
                        </div>
                      </Popup>
                    </MarkerAny>
                  ))}
                </MapContainerAny>
              </div>
            </div>
          </AnimatedSection>

          {/* Location Tabs */}
          <AnimatedSection className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {locations.map((loc) => (
                <button
                  key={loc.name}
                  onClick={() => setActiveLocation(loc.name)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                    activeLocation === loc.name
                      ? "gradient-electric text-electric-foreground shadow-lg"
                      : "bg-surface border border-border/50 text-foreground hover:border-electric/30"
                  }`}
                >
                  <MapPin size={16} />
                  {loc.name}
                  {loc.isHQ && (
                    <span className="text-xs bg-electric-foreground/20 px-2 py-0.5 rounded-full">HQ</span>
                  )}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {activeData && (
            <div className="grid lg:grid-cols-2 gap-8">
              <AnimatedSection>
                <div className="bg-surface border border-border/50 rounded-3xl p-8 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                      activeData.isHQ ? "bg-electric text-electric-foreground" : "bg-emerald-500 text-white"
                    }`}>
                      <MapPin size={28} />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-foreground">{activeData.name}</h2>
                      {activeData.isHQ && (
                        <span className="text-electric font-semibold">Headquarters</span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-background">
                      <Navigation className="text-electric mt-1" size={18} />
                      <div>
                        <div className="font-semibold text-foreground text-sm">Address</div>
                        <p className="text-sm text-muted-foreground">{activeData.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-background">
                      <Phone className="text-electric mt-1" size={18} />
                      <div>
                        <div className="font-semibold text-foreground text-sm">Phone</div>
                        <a href={`tel:${activeData.phone}`} className="text-sm text-muted-foreground hover:text-electric">
                          {activeData.phone}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-background">
                      <Mail className="text-electric mt-1" size={18} />
                      <div>
                        <div className="font-semibold text-foreground text-sm">Email</div>
                        <a href={`mailto:${activeData.email}`} className="text-sm text-muted-foreground hover:text-electric">
                          {activeData.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-background">
                      <Clock className="text-electric mt-1" size={18} />
                      <div>
                        <div className="font-semibold text-foreground text-sm">Hours</div>
                        <p className="text-sm text-muted-foreground">{activeData.hours}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <a
                      href={activeData.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 gradient-electric text-electric-foreground py-4 rounded-xl text-sm font-semibold text-center flex items-center justify-center gap-2"
                    >
                      <Navigation size={16} />
                      Get Directions
                    </a>
                    <a
                      href={`https://wa.me/${activeData.phone.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-4 rounded-xl border border-border/50 text-foreground hover:bg-secondary transition-colors"
                    >
                      <Phone size={18} />
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div className="bg-surface border border-border/50 rounded-3xl p-8 h-full">
                  <div className="text-lg font-bold text-foreground mb-4">Quick Actions</div>
                  <div className="space-y-3">
                    {locations.map((loc) => (
                      <button
                        key={loc.name}
                        onClick={() => setActiveLocation(loc.name)}
                        className={`w-full text-left p-4 rounded-2xl border transition-all ${
                          activeLocation === loc.name
                            ? "bg-electric/5 border-electric/30"
                            : "bg-background border-border/50 hover:border-electric/30"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <div className="font-semibold text-foreground">{loc.name}</div>
                            <div className="text-xs text-muted-foreground">{loc.address}</div>
                          </div>
                          <div className="text-xs font-semibold text-electric">View</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
