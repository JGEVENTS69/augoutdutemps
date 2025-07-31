// import { Link } from "react-router-dom"; // Simulé pour la démo
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, ArrowRight, Star } from "lucide-react";
import { useState, useEffect } from "react";
import KiosqueImg from '@/assets/Kiosque.png';
import RestaurantImg from '@/assets/Restaurant.png';
import CamionImg from '@/assets/Camion.png';

import LogoGoogle from '@/assets/logo_google.png';

import Avis1Img from '@/assets/avis1.png';
import Avis2Img from '@/assets/avis2.png';
import Avis3Img from '@/assets/avis3.png';

import PizzaVideo from '@/assets/pizza_video.mp4';

const Accueil = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Mise à jour de l'heure toutes les minutes
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // 60000ms = 1 minute

    return () => clearInterval(timer);
  }, []);

  // Fonction pour déterminer si un point de vente est ouvert
  const isOpen = (horaires, nom) => {
    const now = currentTime;
    const currentDay = now.getDay(); // 0 = Dimanche, 1 = Lundi, ..., 6 = Samedi
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTimeMinutes = currentHour * 60 + currentMinute;

    switch (nom) {
      case "Au Kiosque":
        // Du Lundi au Vendredi : 11H00 – 13H30
        if (currentDay >= 1 && currentDay <= 5) { // Lundi à Vendredi
          const openTime = 11 * 60; // 11h00 en minutes
          const closeTime = 13 * 60 + 30; // 13h30 en minutes
          return currentTimeMinutes >= openTime && currentTimeMinutes <= closeTime;
        }
        return false;

      case "La Boutique":
        // Uniquement le Mercredi & Samedi : 18H00 – 21H00
        if (currentDay === 3 || currentDay === 6) { // Mercredi ou Samedi
          const openTime = 18 * 60; // 18h00 en minutes
          const closeTime = 21 * 60; // 21h00 en minutes
          return currentTimeMinutes >= openTime && currentTimeMinutes <= closeTime;
        }
        return false;

      case "Le Camion à Rontalon":
        // Uniquement le Jeudi : 18H00 – 21H00
        if (currentDay === 4) { // Jeudi
          const openTime = 18 * 60; // 18h00 en minutes
          const closeTime = 21 * 60; // 21h00 en minutes
          return currentTimeMinutes >= openTime && currentTimeMinutes <= closeTime;
        }
        return false;

      case "Le Camion à Pollionnay":
        // Uniquement le Vendredi : 18H00 – 21H00
        if (currentDay === 5) { // Vendredi
          const openTime = 18 * 60; // 18h00 en minutes
          const closeTime = 21 * 60; // 21h00 en minutes
          return currentTimeMinutes >= openTime && currentTimeMinutes <= closeTime;
        }
        return false;

      default:
        return false;
    }
  };

  const pointsDeVente = [
    {
      nom: "Au Kiosque",
      adresse: "1 rue des marronniers, 69280 Sainte Consorce",
      horaires: "Du Lundi au Vendredi : 11H00 – 13H30 (Tous les midis)",
      statut: "Nous sommes fermé le weekend",
      type: "Sur place ou à emporter",
      image: KiosqueImg,
      alt: "Kiosque pizzeria avec comptoir de service"
    },
    {
      nom: "La Boutique",
      adresse: "2 Rue des Monts, 69280 Sainte-Consorce",
      horaires: "Uniquement le Mercredi & Samedi : 18H00 – 21H00",
      type: "Sur place ou à emporter",
      image: RestaurantImg,
      alt: "Intérieur chaleureux de la boutique pizzeria"
    },
    {
      nom: "Le Camion à Rontalon",
      adresse: "Place de l'église, 69510 Rontalon",
      horaires: "Uniquement le Jeudi : 18H00 – 21H00",
      type: "À emporter uniquement",
      image: CamionImg,
      alt: "Food truck pizza sur la place de l'église"
    },
    {
      nom: "Le Camion à Pollionnay",
      adresse: "Place de l'église, 69290 Pollionnay",
      horaires: "Uniquement le Vendredi : 18H00 – 21H00",
      type: "À emporter uniquement",
      image: CamionImg,
      alt: "Camion pizza ambulant avec four à bois"
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9F8F6]">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={PizzaVideo} type="video/mp4" />
            Votre navigateur ne supporte pas la vidéo HTML5.
          </video>
          {/* Filtre flou + assombrissement */}
          <div className="absolute inset-0 bg-orange-800/70 mix-blend-overlay"></div>
        </div>

        <div className="relative z-10 text-center mx-auto px-4">
          <h1 className="font-serif md:text-7xl text-5xl">
            <span
              className="text-white mx-1 font-extrabold mb-6 relative inline-block stroke-current"
              style={{
                textShadow: '1px 2px 4px rgba(0, 0, 0, 0.8)', // ombre douce sombre
              }}
            >
              Au Goût du Temps
              <svg className="absolute -bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none">
                <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" stroke-width="2"></path>
              </svg>
            </span>
          </h1>
          <p
            className="text-l md:text-xl font-sans mb-8 text-balance text-white"
            style={{
              textShadow: '1px 2px 4px rgba(0, 0, 0, 0.8)', // orange doux
            }}
          >
            La pizza par excellence au rythme du temps !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#1a2c44] hover:bg-[#1a2c44]/80 transform hover:scale-105 transition-all duration-200">
              Découvrir notre carte
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-orange-600 transform hover:scale-105 transition-all duration-200">
              Commander maintenant
            </Button>
          </div>
        </div>
      </section>

      {/* Nos Adresses */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
              Nos Adresses
            </h2>
            <p className="text-lg font-sans text-muted-foreground max-w-2xl mx-auto">
              Retrouvez-nous dans nos 4 emplacements pour mieux vous servir !
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {pointsDeVente.map((point, index) => {
              const estOuvert = isOpen(point.horaires, point.nom);

              return (
                <Card key={index} className="transform hover:scale-105 transition-all duration-200 hover:shadow-lg relative overflow-hidden">
                  {/* Image du point de vente */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={point.image}
                      alt={point.alt}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    {/* Overlay avec statut */}
                    <div className="absolute top-3 right-3 flex items-center space-x-2">
                      <div
                        className={`w-3 h-3 rounded-full ${estOuvert ? 'bg-green-500' : 'bg-red-500'
                          } animate-pulse`}
                      ></div>
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded-full backdrop-blur-sm ${estOuvert
                          ? 'bg-green-500/80 text-white'
                          : 'bg-red-500/80 text-white'
                          }`}
                      >
                        {estOuvert ? 'Ouvert' : 'Fermé'}
                      </span>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif text-foreground mb-3">
                      {point.nom}
                    </h3>

                    <div className="space-y-2 text-sm font-sans text-muted-foreground">
                      <div className="flex items-start space-x-2">
                        <MapPin className="h-4 w-4 mt-0.5 text-orange-600" />
                        <span>{point.adresse}</span>
                      </div>
                      <div className="flex items-center font-sans space-x-2">
                        <Clock className="h-4 w-4 text-orange-600" />
                        <span>{point.horaires}</span>
                      </div>
                      {point.statut && (
                        <div className="text-xs text-red-600">
                          {point.statut}
                        </div>
                      )}
                      <div className="text-sm text-orange-600 font-serif font-semibold">
                        {point.type}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" className="transform hover:scale-105 transition-all duration-200">
              Voir tous les détails
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>


      {/* Nos Avis */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
              Ce que nos clients pensent de nous
            </h2>
            <p className="text-lg font-sans text-muted-foreground">
              Découvrez les témoignages de ceux qui ont déjà goûté à nos pizzas.
            </p>
          </div>

          <div className="flex items-center justify-center space-x-4 mb-8">
            <img src={LogoGoogle} alt="Google" className="h-6" />
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">4.8 / 5 - 120 avis</span>
          </div>

          {/* Carrousel d'avis */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Avis 1 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex items-center space-x-1 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">Visité en octobre 2024</span>
              </div>
              <h4 className="font-serif font-semibold mb-2">Les pizzas sont excellentes.</h4>
              <p className="text-sm text-muted-foreground mb-4">
                "Les pizzas sont excellentes de mon point de vue mais les goûts et les couleurs... Ouvert le mercredi soir et le samedi soir. On peut discuter avec le patron et c'est essentiel pour moi qu'il y ait cette relation chez un commerçant."
              </p>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-300 mr-3 overflow-hidden">
                  <img src={Avis1Img} alt="Client" className="w-full h-full object-cover" />
                </div>
                <span className="text-sm font-medium">Philippe Villain</span>
              </div>
            </Card>

            {/* Avis 2 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex items-center space-x-1 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">22/05/2024</span>
              </div>
              <h4 className="font-serif font-semibold mb-2">Propriétaire très gentil</h4>
              <p className="text-sm text-muted-foreground mb-4">
                "Propriétaire très gentil et sympathique. Il fait de délicieuses pizzas, il faut essayer de ne pas y manger tous les week-end 😅"
              </p>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-300 mr-3 overflow-hidden">
                  <img src={Avis2Img} alt="Client" className="w-full h-full object-cover" />
                </div>
                <span className="text-sm font-medium">Marco Agas</span>
              </div>
            </Card>

            {/* Avis 3 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex items-center space-x-1 mr-2">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <Star className="h-4 w-4 text-yellow-400" />
                </div>
                <span className="text-sm text-muted-foreground">10/05/2024</span>
              </div>
              <h4 className="font-serif font-semibold mb-2">Bon accueil, proprio très agréable !</h4>
              <p className="text-sm text-muted-foreground mb-4">
                "Bon accueil, proprio très agréable ! Super pizzas allez-y les yeux fermés !"
              </p>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-300 mr-3 overflow-hidden">
                  <img src={Avis3Img} alt="Client" className="w-full h-full object-cover" />
                </div>
                <span className="text-sm font-medium">
Benjamin FERRY</span>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <a
              href="https://www.google.com/search?sca_esv=7f320e2b1e22baf4&sxsrf=AE3TifOYVABK9MNH9J3ny0d7mjiG4zMGGw:1753897186194&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-EzXERxvXagfEnQ6BQ7lQzuxbXPghOaKzR3h5xHADmSE8Cr8x003JZZ61eq6cITIdoEDJ-aTGmZqE9n20sE_90qQ1dg_Y7SBjqKWlIbtPXkGUmnYdcMk6caCe7F2-PUJCPdUo-cU%3D&q=Au+go%C3%BBt+du+temps+%28Sainte-Consorce%29+Avis&sa=X&ved=2ahUKEwj2y4WWkOWOAxVEVKQEHX76AJwQ0bkNegQIORAE&biw=1440&bih=683&dpr=2@"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2 bg-yellow-400 text-black font-semibold rounded shadow hover:bg-yellow-300 transition"
            >
              Voir tous nos avis Google
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#1a2c44] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Des pizzas artisanales pour vos plus beaux événements.
          </h2>
          <p className="text-lg font-sans mb-8 opacity-90 max-w-2xl mx-auto">
            Baptême, mariage, soirée privée… faites le choix du goût et de la convivialité.
            Contactez-nous pour discuter de votre événement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-orange-600 transform hover:scale-100 transition-all duration-200"
            >
              <Phone className="mr-2 h-5 w-5" />
              Nous contacter
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accueil;