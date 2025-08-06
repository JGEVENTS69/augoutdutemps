import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Leaf, Flame } from "lucide-react";
import margheritaImg from "@/assets/Pizza/Marguarita.png";
import reginaImg from "@/assets/Pizza/ Regina.png";
import sicillienneImg from "@/assets/Pizza/Sicilienne.png";
import bresaneImg from "@/assets/Pizza/Bresane.png";
import flammekuecheImg from "@/assets/Pizza/Flamekueche.png";
import tartifletteImg from "@/assets/Pizza/tartiflette.png";
import noapolitaineImg from "@/assets/Pizza/Napolitaine.png";
import andalouseImg from "@/assets/Pizza/Andalouse.png";
import thonImg from "@/assets/Pizza/Thon.png";
import reineImg from "@/assets/Pizza/Reine.png";
import orientaleImg from "@/assets/Pizza/Oriental.png";
import mozzaImg from "@/assets/Pizza/Mozzarella.png";
import bolognaiseImg from "@/assets/Pizza/Bolognaise.png";
import cyclopeImg from "@/assets/Pizza/Cyclope.png";
import chèvreImg from "@/assets/Pizza/Chevre.png";
import racletteImg from "@/assets/Pizza/Raclette.png";
import savoyardeImg from "@/assets/Pizza/Savoyarde.png";
import quatresaisonsImg from "@/assets/Pizza/QuatreSaison.png";
import fermièreImg from "@/assets/Pizza/Fermiere.png";
import océaneImg from "@/assets/Pizza/Oceane.png";
import calzoneImg from "@/assets/Pizza/Calzon.png";
import moitmoitImg from "@/assets/Pizza/MoitMoit.png";
import quatrefromagesImg from "@/assets/Pizza/QuatreFromage.png";
import cinqfromagesmg from "@/assets/Pizza/CinquFromage.png";
import { Link } from 'react-router-dom';



const Carte = () => {
  const categories = [
    {
      nom: "Base Tomate",
      description: "Nos pizzas traditionnelles sur base de sauce tomate.",
      pizzas: [
        {
          nom: "Margarita",
          ingredients: "Sauce tomate, fromage, olive",
          prix: "9€",
          image: margheritaImg,
        },
        {
          nom: "Sicilienne",
          ingredients: "Sauce tomate, fromage, olives, anchois",
          prix: "10€",
          image: sicillienneImg,
        },
        {
          nom: "Regina",
          ingredients: "Sauce tomate, olives, jambon",
          prix: "10€",
          image: reginaImg,
        },
        
        {
          nom: "Napolitaine",
          ingredients: "Sauce tomate, fromage, olives, anchois, câpres",
          prix: "10,50€",
          epicee: true,
          image: noapolitaineImg,
        },
        {
          nom: "Andalouse",
          ingredients: "Sauce tomate, fromage, olives, chorizo",
          prix: "10,50€",
          epicee: true,
          image: andalouseImg,
        },
        {
          nom: "Thon",
          ingredients: "Sauce tomate, fromage, olives, thon, persillade",
          prix: "10,50€",
          image: thonImg,
        },
        {
          nom: "Reine",
          ingredients: "Sauce tomate, fromage, olives, jambon, champignons",
          prix: "10,50€",
          image: reineImg,
        },
        {
          nom: "Orientale",
          ingredients: "Sauce tomate, fromage, olives, merguez, poivrons",
          prix: "10,50€",
          epicee: true,
          image: orientaleImg,
        },
        {
          nom: "Mozzarella",
          ingredients: "Sauce tomate, fromage, olives, mozzarella, crème",
          prix: "11€",
          image: mozzaImg,
        },
        
        {
          nom: "Bolognaise",
          ingredients: "Sauce tomate, fromage, olives, viande hachée, oignons",
          prix: "11€",
          image: bolognaiseImg,
        },
        {
          nom: "Cyclope",
          ingredients: "Sauce tomate, fromage, jambon, oeuf, champignons",
          prix: "11€",
          image: cyclopeImg,
        },
        {
          nom: "Chèvre Chaud",
          ingredients: "Sauce tomate, fromage de chèvre, emmental, olives, crème",
          prix: "11€",
          image: chèvreImg,
        },
        {
          nom: "Raclette",
          ingredients: "Sauce tomate, fromage à raclette, emmental, jambon",
          prix: "11€",
          image: racletteImg,
        },
        {
          nom: "Savoyarde",
          ingredients: "Sauce tomate, fromage, reblochon, lardons fumés, crème",
          prix: "11,50€",
          image: savoyardeImg,
        },
        {
          nom: "Quatre Saisons",
          ingredients: "Sauce tomate, fromage, olives, champignons, poivrons, oignons",
          prix: "11,50€",
          image: quatresaisonsImg,
        },
        {
          nom: "Fermière",
          ingredients: "Sauce tomate, fromage, lardons, champignons",
          prix: "11,50€",
          image: fermièreImg,
        },
        {
          nom: "Océane",
          ingredients: "Sauce tomate, fromage, olives, saumon fumé, crème",
          prix: "11,50€",
          image: océaneImg,
        },
        {
          nom: "4 Fromages",
          ingredients: "Sauce tomate, chèvre, reblochon, bleu d'Auvergne, mozzarella",
          prix: "11,50€",
          image: quatrefromagesImg,
        },
        {
          nom: "5 Fromages",
          ingredients: "Sauce tomate, chèvre, reblochon, bleu d'Auvergne, mozzarella, emmental, crème",
          prix: "12,50€",
          image: cinqfromagesmg,
        },

      ],
    },
    {
      nom: "Base Crème",
      description: "Nos pizzas traditionnelles sur base de crème fraîche.",
      pizzas: [
        {
          nom: "Bressane",
          ingredients: "Crème fraîche, fromage, poulet, champignons",
          prix: "11,50€",
          image: bresaneImg,
        },
        {
          nom: "Flamekushe",
          ingredients: "Crème fraîche, fromage, lardons, oignons",
          prix: "11,50€",
          image: flammekuecheImg,
        },
        {
          nom: "Tartiflette",
          ingredients: "Crème fraîche, fromage, pommes de terre, reblochon, lardons, oignons",
          prix: "12,50€",
          image: tartifletteImg,
        },
      ],
    },
    {
      nom: "Les Spéciales",
      description: "Nos pizzas traditionnelles spéciales, riches en saveurs.",
      pizzas: [
        {
          nom: "Calzone",
          ingredients: "Chausson : Sauce tomate, fromage, olives, viande hachée, mozzarella",
          prix: "11€",
          image: calzoneImg,
        },
        {
          nom: "Moit-Moit",
          ingredients: "(À votre choix) 2 moitiés de pizzas différentes parmi notre carte",
          prix: "12,50€",
          image: moitmoitImg,
        },
      ],
    },
  ];

  const getPizzaIcon = (pizza: any) => {
    if (pizza.vegetarienne) return <Leaf className="h-4 w-4 text-green-600" />;
    if (pizza.epicee) return <Flame className="h-8 w-8 text-red-500 fill-red-500" />;
    return null;
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 mt-20">
          <h1 className="text-5xl font-serif font-bold text-foreground mb-4">
            Notre Carte
          </h1>
          <p className="text-lg font-sans text-muted-foreground max-w-2xl mx-auto mb-8">
            Découvrez nos pizzas artisanales préparées avec des ingrédients
            frais et de saison.
          </p>
          <Button variant="outline" className="hover-lift">
            <Download className="mr-2 h-4 w-4" />
            Télécharger la carte PDF
          </Button>
        </div>

        {/* Légende */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 p-4 bg-muted/30 rounded-lg">
          <div className="flex items-center space-x-2">
            <Flame className="h-4 w-4 text-red-500 fill-red-500" />
            <span className="text-sm">Épicée</span>
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-12">
          {categories.map((categorie, categoryIndex) => (
            <div
              key={categoryIndex}
              className="animate-fade-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="text-center mb-8">
                <h2 className="text-4xl font-serif font-bold text-foreground mb-2">
                  {categorie.nom}
                </h2>
                <p className="text-muted-foreground font-sans">
                  {categorie.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categorie.pizzas.map((pizza, pizzaIndex) => (
                  <Card
                    key={pizzaIndex}
                    className="hover-lift animate-scale-in overflow-hidden"
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (pizzaIndex * 0.05)}s` }}
                  >
                    {/* Image de la pizza */}
                    {pizza.image && (
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={pizza.image}
                          alt={pizza.nom}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}

                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center justify-between">
                        <h1 className="font-serif md:text-2xl text-2xl">
                          <span
                            className="text-red-500 mx-1 font-extrabold mb-6 relative inline-block stroke-current"
                          >
                            {pizza.nom}
                            <svg className="absolute -bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                              preserveAspectRatio="none">
                              <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" stroke-width="2"></path>
                            </svg>
                          </span>
                        </h1>

                        <span className="text-xl font-bold text-primary">
                          {pizza.prix}
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                        {pizza.ingredients}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-[#1A2C44] rounded-lg">
          <h3 className="text-2xl font-serif font-bold text-white mb-4">
            Une envie ? Passez commande rapidement!
          </h3>
          <p className="text-muted-foreground font-sans text-white mb-6">
            Choisissez votre point de retrait (selon les horaires d'ouverture) et l'heure qui vous convient.
          </p>
          <Link to="/commander">
  <Button size="lg" className="hover-lift">
    Commander maintenant
  </Button>
</Link>
        </div>
      </div>
    </div>
  );
};

export default Carte;