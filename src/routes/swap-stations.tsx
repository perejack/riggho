import { useMemo } from "react";
import { MapPin, Battery, Zap, Clock, ArrowRight, Navigation } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import mapIcon from "@/assets/MAPICON.png";

export default function SwapStationsPage() {
  const MapContainerAny = MapContainer as unknown as any;
  const TileLayerAny = TileLayer as unknown as any;
  const MarkerAny = Marker as unknown as any;

  const swapStations = [
    {
      name: "Nairobi",
      address: "Mombasa rd, Mavoko Business Park, opp. Signature Mall",
      hours: "Mon-Sat: 8:30 AM - 5:30 PM",
      latLng: [-1.2921, 36.8219] as const,
      href: "https://maps.google.com/?q=Mavoko+Business+Park+Signature+Mall",
    },
    {
      name: "Kisumu",
      address: "Obote Road, Next To KCB Kisumu West, Opposite CMC Motors Kisumu",
      hours: "Mon-Sat: 8:30 AM - 5:30 PM",
      latLng: [-0.0917, 34.768] as const,
      href: "https://maps.google.com/?q=Obote+Road+Kisumu+KCB",
    },
    {
      name: "Mombasa",
      address: "Ferry Opposite Likoni Towers",
      hours: "Mon-Sat: 8:30 AM - 5:30 PM",
      latLng: [-4.0435, 39.6682] as const,
      href: "https://maps.google.com/?q=Ferry+Likoni+Towers+Mombasa",
    },
    {
      name: "Malindi",
      address: "Near Mass Petrol Station, opp. Mogo Office",
      hours: "Mon-Sat: 8:30 AM - 5:30 PM",
      latLng: [-3.2175, 40.1169] as const,
      href: "https://maps.google.com/?q=Malindi+Mass+Petrol+Station+Mogo",
    },
  ];

  const markerIcon = useMemo(
    () =>
      L.icon({
        iconUrl: mapIcon,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40],
      }),
    []
  );

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <SectionLabel icon="🔋" text="Charging Network" />
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Swap & Go <span className="text-electric">Stations</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Never wait for a charge. Pull up, swap your battery, and get back on the road in minutes. 
                Our network of swap stations is expanding across Kenya.
              </p>
            </div>
          </AnimatedSection>

          {/* Stations List */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {swapStations.map((station, index) => (
              <AnimatedSection key={station.name} delay={index * 0.1}>
                <a
                  href={station.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 rounded-2xl bg-surface-elevated border border-border/50 hover:border-electric/30 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-electric/10 flex items-center justify-center shrink-0">
                      <img src={mapIcon} alt="Location" className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-electric transition-colors">
                        {station.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">{station.address}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1 text-electric">
                          <Clock size={14} /> {station.hours}
                        </span>
                        <span className="flex items-center gap-1 text-muted-foreground group-hover:text-electric transition-colors">
                          View on Maps <ArrowRight size={12} />
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>

          {/* How It Works */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            <AnimatedSection delay={0.1}>
              <div className="p-6 rounded-2xl bg-surface-elevated border border-border/50 text-center">
                <div className="w-16 h-16 rounded-full bg-electric/10 flex items-center justify-center mx-auto mb-4">
                  <Navigation className="text-electric" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">1. Navigate</h3>
                <p className="text-muted-foreground text-sm">
                  Find your nearest swap station using our map or mobile app
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="p-6 rounded-2xl bg-surface-elevated border border-border/50 text-center">
                <div className="w-16 h-16 rounded-full bg-electric/10 flex items-center justify-center mx-auto mb-4">
                  <Battery className="text-electric" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">2. Swap</h3>
                <p className="text-muted-foreground text-sm">
                  Pull up to the station and our team swaps your battery in under 2 minutes
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="p-6 rounded-2xl bg-surface-elevated border border-border/50 text-center">
                <div className="w-16 h-16 rounded-full bg-electric/10 flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-electric" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">3. Go</h3>
                <p className="text-muted-foreground text-sm">
                  Pay for the swap and continue your journey with a full battery
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Map Section */}
          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden border border-border/50 mb-16" style={{ height: 500 }}>
              <MapContainerAny
                center={[-1.2921, 36.8219]}
                zoom={6}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayerAny
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {swapStations.map((station) => (
                  <MarkerAny
                    key={station.name}
                    position={station.latLng as [number, number]}
                    icon={markerIcon}
                  >
                    <Popup>
                      <div style={{ minWidth: 200 }}>
                        <h3 className="font-bold text-foreground mb-1">{station.name} Swap Station</h3>
                        <p className="text-sm text-muted-foreground mb-2">{station.address}</p>
                        <p className="text-sm text-electric font-medium flex items-center gap-1">
                          <Clock size={12} /> {station.hours}
                        </p>
                      </div>
                    </Popup>
                  </MarkerAny>
                ))}
              </MapContainerAny>
            </div>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection>
            <div className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-r from-electric/20 to-transparent border border-electric/20">
              <h3 className="text-2xl font-bold mb-4">More Stations Coming Soon</h3>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                We are expanding our swap station network across Kenya. Stay tuned for new locations in Nakuru, Eldoret, and more cities.
              </p>
              <a
                href="https://www.google.com/maps/d/edit?mid=188MGrfugSGCgALnMVH45RM79iTtyPKY&usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-electric text-electric-foreground px-8 py-3.5 rounded-xl text-sm font-semibold inline-flex items-center gap-2 glow-electric hover:opacity-90 transition-all"
              >
                <MapPin size={16} /> Find Swap Station
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
