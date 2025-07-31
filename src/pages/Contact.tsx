import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    setFormData({
      nom: "",
      email: "",
      telephone: "",
      sujet: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const faq = [
    {
      question: "Livrez-vous à domicile ?",
      reponse: "Actuellement, nous proposons uniquement le retrait sur nos points de vente. Nous étudions la possibilité de livraison pour l'avenir.",
    },
    {
      question: "Peut-on commander à l'avance ?",
      reponse: "Oui ! Vous pouvez passer commande par téléphone ou via notre formulaire en ligne en précisant l'heure de retrait souhaitée.",
    },
    {
      question: "Avez-vous des pizzas sans gluten ?",
      reponse: "Nous travaillons sur l'élaboration d'une pâte sans gluten. Contactez-nous pour connaître les disponibilités actuelles.",
    },
    {
      question: "Quels sont les moyens de paiement acceptés ?",
      reponse: "Nous acceptons les espèces, cartes bancaires, paiements sans contact et tickets restaurant.",
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif font-bold text-foreground mb-4">
            Contactez-nous
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une question, une suggestion ou envie de passer commande ? 
            N'hésitez pas à nous contacter, nous serons ravis de vous répondre.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulaire de contact */}
          <Card className="animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Send className="h-5 w-5 text-primary" />
                <span>Envoyez-nous un message</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nom">Nom complet *</Label>
                    <Input
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      placeholder="Votre nom"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telephone">Téléphone</Label>
                    <Input
                      id="telephone"
                      name="telephone"
                      type="tel"
                      value={formData.telephone}
                      onChange={handleChange}
                      placeholder="Votre numéro"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="votre.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sujet">Sujet</Label>
                  <Input
                    id="sujet"
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleChange}
                    placeholder="Objet de votre message"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Votre message..."
                    rows={5}
                  />
                </div>

                <Button type="submit" className="w-full hover-lift">
                  <Send className="mr-2 h-4 w-4" />
                  Envoyer le message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Informations de contact */}
          <div className="space-y-8">
            {/* Coordonnées */}
            <Card className="animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle>Nos coordonnées</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Téléphone</div>
                    <div className="text-sm text-muted-foreground">04 XX XX XX XX</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-muted-foreground">contact@augoutdutemps.fr</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">Adresse principale</div>
                    <div className="text-sm text-muted-foreground">
                      1 rue des marronniers<br />
                      69280 Sainte Consorce
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">Horaires kiosque principal</div>
                    <div className="text-sm text-muted-foreground">
                      Lundi à vendredi : 11h00 - 13h30<br />
                      Weekend : Fermé
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Localisation */}
            <Card className="animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle>Nous trouver</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <MapPin className="h-8 w-8 text-primary mx-auto" />
                    <p className="text-sm text-muted-foreground">
                      Carte Google Maps
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Kiosque principal - Sainte Consorce
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-3xl font-serif font-bold text-center mb-8">
            Questions Fréquentes
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faq.map((item, index) => (
              <Card 
                key={index} 
                className="hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg">{item.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.reponse}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-primary/5 rounded-lg">
          <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
            Prêt à commander ?
          </h3>
          <p className="text-muted-foreground mb-6">
            Découvrez notre carte et passez commande pour un retrait dans l'un de nos points de vente
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="hover-lift">
              Voir la carte
            </Button>
            <Button size="lg" variant="outline" className="hover-lift">
              Commander maintenant
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;