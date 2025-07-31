import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import kiosquePrincipalImg from "@/assets/kiosque-principal.jpg";
import sainteConsorceImg from "@/assets/sainte-consorce.jpg";
import rontalonImg from "@/assets/rontalon.jpg";
import pollionnayImg from "@/assets/pollionnay.jpg";

const Adresses = () => {
  const pointsDeVente = [
    {
      nom: "Kiosque Principal",
      adresse: "1 rue des marronniers",
      ville: "69280 Sainte Consorce",
      horaires: [
        { jour: "Lundi à Vendredi", heures: "11:00 – 13:30" },
        { jour: "Samedi & Dimanche", heures: "Fermé", ferme: true },
      ],
      services: ["Sur place", "À emporter"],
      description: "Notre point de vente principal avec terrasse couverte",
      principal: true,
      image: "src/assets/Kiosque.png",
    },
    {
      nom: "Point de Vente Sainte-Consorce",
      adresse: "2 Rue des Monts",
      ville: "69280 Sainte-Consorce",
      horaires: [
        { jour: "Mercredi", heures: "18:00 – 21:00" },
        { jour: "Samedi", heures: "18:00 – 21:00" },
        { jour: "Autres jours", heures: "Fermé", ferme: true },
      ],
      services: ["Sur place", "À emporter"],
      description: "Ambiance conviviale en centre-bourg",
      image: "src/assets/Restaurant.png",
    },
    {
      nom: "Point de Vente Rontalon",
      adresse: "Place de l'église",
      ville: "69510 Rontalon",
      horaires: [
        { jour: "Jeudi", heures: "18:00 – 21:00" },
        { jour: "Autres jours", heures: "Fermé", ferme: true },
      ],
      services: ["À emporter uniquement"],
      description: "Service de pizzas fraîches à emporter",
      image: "src/assets/Camion.png",
    },
    {
      nom: "Point de Vente Pollionnay",
      adresse: "Place de l'église",
      ville: "69290 Pollionnay",
      horaires: [
        { jour: "Vendredi", heures: "18:00 – 21:00" },
        { jour: "Autres jours", heures: "Fermé", ferme: true },
      ],
      services: ["À emporter uniquement"],
      description: "Pizza fraîche disponible chaque vendredi soir",
      image: "src/assets/Camion.png",
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif font-bold text-foreground mb-4">
            Nos Adresses
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez tous nos points de vente en région lyonnaise. 
            Chaque lieu a été choisi pour vous apporter le meilleur de nos pizzas artisanales.
          </p>
        </div>

        {/* Points de vente */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {pointsDeVente.map((point, index) => (
            <Card 
              key={index} 
              className={`hover-lift animate-scale-in ${point.principal ? 'ring-2 ring-primary/20' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image du lieu */}
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img 
                  src={point.image} 
                  alt={point.nom}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                {point.principal && (
                  <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                    Principal
                  </Badge>
                )}
              </div>
              
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-xl">{point.nom}</span>
                  <Navigation className="h-5 w-5 text-primary" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Adresse */}
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">{point.adresse}</div>
                    <div className="text-sm text-muted-foreground">{point.ville}</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground">
                  {point.description}
                </p>

                {/* Horaires */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="font-medium">Horaires</span>
                  </div>
                  <div className="pl-6 space-y-1">
                    {point.horaires.map((horaire, idx) => (
                      <div 
                        key={idx} 
                        className={`text-sm flex justify-between ${
                          horaire.ferme ? 'text-muted-foreground' : ''
                        }`}
                      >
                        <span>{horaire.jour}</span>
                        <span className={horaire.ferme ? 'text-destructive' : 'text-foreground'}>
                          {horaire.heures}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Services */}
                <div className="space-y-2">
                  <span className="text-sm font-medium">Services disponibles</span>
                  <div className="flex flex-wrap gap-2">
                    {point.services.map((service, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="pt-2 border-t border-border">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>04 XX XX XX XX</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Carte Google Maps */}
        <div className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-center mb-8">
            Nous trouver
          </h2>
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="h-96 bg-muted/30 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <MapPin className="h-12 w-12 text-primary mx-auto" />
                  <p className="text-muted-foreground">
                    Carte Google Maps intégrée
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Visualisez tous nos points de vente
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Informations pratiques */}
        <div className="bg-muted/30 rounded-lg p-8">
          <h3 className="text-2xl font-serif font-bold text-center mb-6">
            Informations Pratiques
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Réservation</h4>
              <p className="text-sm text-muted-foreground">
                Aucune réservation nécessaire pour les commandes à emporter. 
                Pour les consommations sur place au kiosque principal, 
                nous vous recommandons d'appeler aux heures d'affluence.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Stationnement</h4>
              <p className="text-sm text-muted-foreground">
                Parking gratuit disponible à proximité de tous nos points de vente. 
                Places limitées au kiosque principal en période de forte affluence.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Paiement</h4>
              <p className="text-sm text-muted-foreground">
                Nous acceptons les espèces, cartes bancaires et paiements sans contact. 
                Tickets restaurant acceptés sur tous nos points de vente.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Accessibilité</h4>
              <p className="text-sm text-muted-foreground">
                Tous nos points de vente sont accessibles aux personnes à mobilité réduite. 
                Le kiosque principal dispose d'une terrasse couverte.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adresses;