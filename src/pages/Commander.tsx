import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, ShoppingCart, Plus, Minus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import margheritaImg from "@/assets/pizza-margherita.jpg";
import reginaImg from "@/assets/pizza-regina.jpg";
import quattroStagioniImg from "@/assets/pizza-quattro-stagioni.jpg";
import diavolaImg from "@/assets/pizza-diavola.jpg";
import reineBlancheImg from "@/assets/pizza-reine-blanche.jpg";
import chevreMielImg from "@/assets/pizza-chevre-miel.jpg";

const Commander = () => {
  const { toast } = useToast();
  const [etapeActuelle, setEtapeActuelle] = useState(1);
  const [commande, setCommande] = useState({
    pointVente: "",
    heureRetrait: "",
    pizzas: [] as any[],
    client: {
      nom: "",
      email: "",
      telephone: "",
    },
    commentaires: "",
  });

  const pointsDeVente = [
    {
      id: "kiosque",
      nom: "Kiosque Principal",
      adresse: "1 rue des marronniers, 69280 Sainte Consorce",
      horaires: "Lun-Ven : 11:00 – 13:30",
      creneaux: ["11:15", "11:30", "11:45", "12:00", "12:15", "12:30", "13:00", "13:15"],
    },
    {
      id: "monts",
      nom: "2 Rue des Monts",
      adresse: "2 Rue des Monts, 69280 Sainte-Consorce",
      horaires: "Mer & Sam : 18:00 – 21:00",
      creneaux: ["18:15", "18:30", "18:45", "19:00", "19:15", "19:30", "20:00", "20:15", "20:30"],
    },
    {
      id: "rontalon",
      nom: "Rontalon",
      adresse: "Place de l'église, 69510 Rontalon",
      horaires: "Jeudi : 18:00 – 21:00",
      creneaux: ["18:15", "18:30", "18:45", "19:00", "19:15", "19:30", "20:00", "20:15", "20:30"],
    },
    {
      id: "pollionnay",
      nom: "Pollionnay",
      adresse: "Place de l'église, 69290 Pollionnay",
      horaires: "Vendredi : 18:00 – 21:00",
      creneaux: ["18:15", "18:30", "18:45", "19:00", "19:15", "19:30", "20:00", "20:15", "20:30"],
    },
  ];

  const pizzasDisponibles = [
    { nom: "Margherita", prix: 12, ingredients: "Sauce tomate, mozzarella, basilic", image: margheritaImg },
    { nom: "Regina", prix: 14, ingredients: "Sauce tomate, mozzarella, jambon, champignons", image: margheritaImg },
    { nom: "Quattro Stagioni", prix: 16, ingredients: "Sauce tomate, mozzarella, jambon, champignons, artichauts, olives", image: margheritaImg },
    { nom: "Diavola", prix: 15, ingredients: "Sauce tomate, mozzarella, chorizo, poivrons", image: margheritaImg },
    { nom: "Reine Blanche", prix: 15, ingredients: "Crème fraîche, mozzarella, jambon, champignons", image: margheritaImg },
    { nom: "Chèvre Miel", prix: 16, ingredients: "Crème fraîche, mozzarella, chèvre, miel, noix", image: margheritaImg },
  ];

  const ajouterPizza = (pizza: any) => {
    const pizzaExistante = commande.pizzas.find(p => p.nom === pizza.nom);
    if (pizzaExistante) {
      setCommande({
        ...commande,
        pizzas: commande.pizzas.map(p =>
          p.nom === pizza.nom ? { ...p, quantite: p.quantite + 1 } : p
        ),
      });
    } else {
      setCommande({
        ...commande,
        pizzas: [...commande.pizzas, { ...pizza, quantite: 1 }],
      });
    }
  };

  const modifierQuantite = (nomPizza: string, nouvelleQuantite: number) => {
    if (nouvelleQuantite === 0) {
      setCommande({
        ...commande,
        pizzas: commande.pizzas.filter(p => p.nom !== nomPizza),
      });
    } else {
      setCommande({
        ...commande,
        pizzas: commande.pizzas.map(p =>
          p.nom === nomPizza ? { ...p, quantite: nouvelleQuantite } : p
        ),
      });
    }
  };

  const calculerTotal = () => {
    return commande.pizzas.reduce((total, pizza) => total + (pizza.prix * pizza.quantite), 0);
  };

  const validerCommande = () => {
    toast({
      title: "Commande confirmée !",
      description: `Votre commande sera prête à ${commande.heureRetrait}. Vous recevrez un SMS de confirmation.`,
    });
    // Ici on enverrait la commande à un backend
  };

  const pointVenteSelectionne = pointsDeVente.find(p => p.id === commande.pointVente);

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif font-bold text-foreground mb-4">
            Commander
          </h1>
          <p className="text-lg text-muted-foreground">
            Commandez vos pizzas artisanales et récupérez-les à l'heure qui vous convient
          </p>
        </div>

        {/* Étapes */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            {[1, 2, 3, 4].map((etape) => (
              <div key={etape} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    etape <= etapeActuelle
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {etape}
                </div>
                {etape < 4 && (
                  <div
                    className={`w-12 h-0.5 ${
                      etape < etapeActuelle ? "bg-primary" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Étape 1: Choix du point de vente */}
        {etapeActuelle === 1 && (
          <Card className="animate-scale-in">
            <CardHeader>
              <CardTitle>1. Choisissez votre point de retrait</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {pointsDeVente.map((point) => (
                <Card
                  key={point.id}
                  className={`cursor-pointer hover-lift transition-all ${
                    commande.pointVente === point.id
                      ? "ring-2 ring-primary bg-primary/5"
                      : ""
                  }`}
                  onClick={() => setCommande({ ...commande, pointVente: point.id })}
                >
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <h3 className="font-semibold">{point.nom}</h3>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{point.adresse}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{point.horaires}</span>
                        </div>
                      </div>
                      {commande.pointVente === point.id && (
                        <Badge>Sélectionné</Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <div className="pt-4">
                <Button
                  className="w-full hover-lift"
                  disabled={!commande.pointVente}
                  onClick={() => setEtapeActuelle(2)}
                >
                  Continuer
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Étape 2: Choix de l'heure */}
        {etapeActuelle === 2 && pointVenteSelectionne && (
          <Card className="animate-scale-in">
            <CardHeader>
              <CardTitle>2. Choisissez l'heure de retrait</CardTitle>
              <p className="text-sm text-muted-foreground">
                {pointVenteSelectionne.nom} - {pointVenteSelectionne.horaires}
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                {pointVenteSelectionne.creneaux.map((creneau) => (
                  <Button
                    key={creneau}
                    variant={commande.heureRetrait === creneau ? "default" : "outline"}
                    className="hover-lift"
                    onClick={() => setCommande({ ...commande, heureRetrait: creneau })}
                  >
                    {creneau}
                  </Button>
                ))}
              </div>
              
              <div className="flex space-x-3 pt-4">
                <Button
                  variant="outline"
                  onClick={() => setEtapeActuelle(1)}
                  className="flex-1"
                >
                  Retour
                </Button>
                <Button
                  className="flex-1 hover-lift"
                  disabled={!commande.heureRetrait}
                  onClick={() => setEtapeActuelle(3)}
                >
                  Continuer
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Étape 3: Choix des pizzas */}
        {etapeActuelle === 3 && (
          <div className="space-y-6">
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle>3. Choisissez vos pizzas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {pizzasDisponibles.map((pizza, index) => (
                    <Card key={index} className="hover-lift overflow-hidden">
                      {/* Image de la pizza */}
                      <div className="relative h-32 overflow-hidden">
                        <img 
                          src={pizza.image} 
                          alt={pizza.nom}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-2 right-2">
                          <span className="bg-background/90 text-primary font-bold text-sm px-2 py-1 rounded">
                            {pizza.prix}€
                          </span>
                        </div>
                      </div>
                      
                      <CardContent className="p-4">
                        <div className="mb-2">
                          <h3 className="font-semibold text-lg">{pizza.nom}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {pizza.ingredients}
                        </p>
                        <Button
                          size="sm"
                          className="w-full hover-lift"
                          onClick={() => ajouterPizza(pizza)}
                        >
                          <Plus className="h-4 w-4 mr-1" />
                          Ajouter
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Panier */}
            {commande.pizzas.length > 0 && (
              <Card className="animate-fade-up">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <ShoppingCart className="h-5 w-5" />
                    <span>Votre commande</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {commande.pizzas.map((pizza, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                      <div>
                        <h4 className="font-medium">{pizza.nom}</h4>
                        <p className="text-sm text-muted-foreground">{pizza.prix}€ x {pizza.quantite}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => modifierQuantite(pizza.nom, pizza.quantite - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center">{pizza.quantite}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => modifierQuantite(pizza.nom, pizza.quantite + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total</span>
                      <span>{calculerTotal()}€</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      onClick={() => setEtapeActuelle(2)}
                      className="flex-1"
                    >
                      Retour
                    </Button>
                    <Button
                      className="flex-1 hover-lift"
                      onClick={() => setEtapeActuelle(4)}
                    >
                      Continuer
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* Étape 4: Informations client */}
        {etapeActuelle === 4 && (
          <Card className="animate-scale-in">
            <CardHeader>
              <CardTitle>4. Vos informations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nom">Nom complet *</Label>
                  <Input
                    id="nom"
                    value={commande.client.nom}
                    onChange={(e) => setCommande({
                      ...commande,
                      client: { ...commande.client, nom: e.target.value }
                    })}
                    placeholder="Votre nom"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telephone">Téléphone *</Label>
                  <Input
                    id="telephone"
                    value={commande.client.telephone}
                    onChange={(e) => setCommande({
                      ...commande,
                      client: { ...commande.client, telephone: e.target.value }
                    })}
                    placeholder="Votre numéro"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={commande.client.email}
                  onChange={(e) => setCommande({
                    ...commande,
                    client: { ...commande.client, email: e.target.value }
                  })}
                  placeholder="votre.email@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="commentaires">Commentaires (optionnel)</Label>
                <Textarea
                  id="commentaires"
                  value={commande.commentaires}
                  onChange={(e) => setCommande({ ...commande, commentaires: e.target.value })}
                  placeholder="Précisions pour votre commande..."
                  rows={3}
                />
              </div>

              {/* Récapitulatif */}
              <div className="bg-muted/30 p-4 rounded-lg space-y-2">
                <h4 className="font-semibold">Récapitulatif de votre commande</h4>
                <p className="text-sm"><strong>Point de retrait :</strong> {pointVenteSelectionne?.nom}</p>
                <p className="text-sm"><strong>Heure de retrait :</strong> {commande.heureRetrait}</p>
                <p className="text-sm"><strong>Total :</strong> {calculerTotal()}€</p>
              </div>

              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  onClick={() => setEtapeActuelle(3)}
                  className="flex-1"
                >
                  Retour
                </Button>
                <Button
                  className="flex-1 hover-lift"
                  disabled={!commande.client.nom || !commande.client.email || !commande.client.telephone}
                  onClick={validerCommande}
                >
                  Confirmer la commande
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Commander;