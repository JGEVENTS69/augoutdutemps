import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Leaf, Flame } from "lucide-react";
import margheritaImg from "@/assets/pizza-margherita.jpg";
import reginaImg from "@/assets/pizza-regina.jpg";
import quattroStagioniImg from "@/assets/pizza-quattro-stagioni.jpg";
import diavolaImg from "@/assets/pizza-diavola.jpg";
import reineBlancheImg from "@/assets/pizza-reine-blanche.jpg";
import chevreMielImg from "@/assets/pizza-chevre-miel.jpg";

const Carte = () => {
  const categories = [
    {
      nom: "Base Tomate",
      description: "Nos pizzas traditionnelles sur base de sauce tomate maison",
      pizzas: [
        {
          nom: "Margherita",
          ingredients: "Sauce tomate, mozzarella, basilic frais, huile d'olive",
          prix: "12€",
          vegetarienne: true,
          image: margheritaImg,
        },
        {
          nom: "Regina",
          ingredients: "Sauce tomate, mozzarella, jambon, champignons",
          prix: "14€",
          image: margheritaImg,
        },
        {
          nom: "Quattro Stagioni",
          ingredients: "Sauce tomate, mozzarella, jambon, champignons, artichauts, olives",
          prix: "16€",
          image: margheritaImg,
        },
        {
          nom: "Diavola",
          ingredients: "Sauce tomate, mozzarella, chorizo piquant, poivrons",
          prix: "15€",
          epicee: true,
          image: margheritaImg,
        },
        {
          nom: "Napoli",
          ingredients: "Sauce tomate, mozzarella, anchois, câpres, olives noires",
          prix: "14€",
        },
      ],
    },
    {
      nom: "Base Crème",
      description: "Nos créations gourmandes sur base de crème fraîche",
      pizzas: [
        {
          nom: "Reine Blanche",
          ingredients: "Crème fraîche, mozzarella, jambon, champignons",
          prix: "15€",
          image: margheritaImg,
        },
        {
          nom: "Saumon Fumé",
          ingredients: "Crème fraîche, mozzarella, saumon fumé, aneth, citron",
          prix: "18€",
        },
        {
          nom: "Chèvre Miel",
          ingredients: "Crème fraîche, mozzarella, chèvre, miel, noix",
          prix: "16€",
          vegetarienne: true,
          image: margheritaImg,
        },
        {
          nom: "Tartiflette",
          ingredients: "Crème fraîche, reblochon, pommes de terre, lardons, oignons",
          prix: "17€",
        },
      ],
    },
    {
      nom: "Végétariennes",
      description: "Nos créations sans viande, riches en saveurs",
      pizzas: [
        {
          nom: "Primavera",
          ingredients: "Sauce tomate, mozzarella, courgettes, aubergines, poivrons, herbes de Provence",
          prix: "15€",
          vegetarienne: true,
        },
        {
          nom: "Caprese",
          ingredients: "Sauce tomate, mozzarella, tomates cerises, basilic, roquette",
          prix: "14€",
          vegetarienne: true,
        },
        {
          nom: "Méditerranéenne",
          ingredients: "Sauce tomate, mozzarella, légumes grillés, olives, feta",
          prix: "16€",
          vegetarienne: true,
        },
      ],
    },
    {
      nom: "Spécialités Saison",
      description: "Nos créations qui évoluent au rythme des saisons",
      pizzas: [
        {
          nom: "Truffe d'Hiver",
          ingredients: "Crème truffée, mozzarella, champignons, jambon de Parme",
          prix: "22€",
          saison: "Hiver",
        },
        {
          nom: "Printanière",
          ingredients: "Sauce tomate, mozzarella, asperges, petits pois, menthe",
          prix: "17€",
          vegetarienne: true,
          saison: "Printemps",
        },
        {
          nom: "Estivale",
          ingredients: "Sauce tomate, mozzarella, tomates confites, basilic, roquette",
          prix: "16€",
          vegetarienne: true,
          saison: "Été",
        },
      ],
    },
  ];

  const getPizzaIcon = (pizza: any) => {
    if (pizza.vegetarienne) return <Leaf className="h-4 w-4 text-green-600" />;
    if (pizza.epicee) return <Flame className="h-4 w-4 text-red-500" />;
    return null;
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif font-bold text-foreground mb-4">
            Notre Carte
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Découvrez nos pizzas artisanales préparées avec des ingrédients 
            sélectionnés et un savoir-faire authentiquement italien.
          </p>
          <Button variant="outline" className="hover-lift">
            <Download className="mr-2 h-4 w-4" />
            Télécharger la carte PDF
          </Button>
        </div>

        {/* Légende */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 p-4 bg-muted/30 rounded-lg">
          <div className="flex items-center space-x-2">
            <Leaf className="h-4 w-4 text-green-600" />
            <span className="text-sm">Végétarienne</span>
          </div>
          <div className="flex items-center space-x-2">
            <Flame className="h-4 w-4 text-red-500" />
            <span className="text-sm">Épicée</span>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="text-xs">Saison</Badge>
            <span className="text-sm">Spécialité saisonnière</span>
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
                <h2 className="text-3xl font-serif font-bold text-foreground mb-2">
                  {categorie.nom}
                </h2>
                <p className="text-muted-foreground">
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
                        <div className="absolute top-3 right-3 flex space-x-2">
                          {getPizzaIcon(pizza)}
                          {pizza.saison && (
                            <Badge variant="secondary" className="text-xs bg-background/90">
                              {pizza.saison}
                            </Badge>
                          )}
                        </div>
                      </div>
                    )}
                    
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center justify-between">
                        <span className="text-lg">{pizza.nom}</span>
                        <span className="text-xl font-bold text-primary">
                          {pizza.prix}
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground leading-relaxed">
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
        <div className="text-center mt-16 p-8 bg-primary/5 rounded-lg">
          <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
            Une envie ? Passez commande !
          </h3>
          <p className="text-muted-foreground mb-6">
            Choisissez votre point de retrait et l'heure qui vous convient
          </p>
          <Button size="lg" className="hover-lift">
            Commander maintenant
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Carte;