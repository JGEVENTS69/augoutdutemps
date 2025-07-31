import { Link } from "react-router-dom";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold text-primary">
              Au Goût du Temps
            </h3>
            <p className="text-sm text-muted-foreground">
              Des pizzas artisanales au rythme du temps et des saisons !
              Découvrez notre authentique savoir-faire italien.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Navigation</h4>
            <div className="space-y-2">
              <Link
                to="/carte"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Notre Carte
              </Link>
              <Link
                to="/adresses"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Nos Adresses
              </Link>
              <Link
                to="/commander"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Commander
              </Link>
              <Link
                to="/contact"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>04 XX XX XX XX</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contact@augoutdutemps.fr</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Région Lyonnaise</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Horaires Kiosque</h4>
            <div className="space-y-1 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Lun-Ven: 11h-13h30</span>
              </div>
              <div className="pl-6">
                <span>Weekend: Fermé</span>
              </div>
              <div className="pt-2">
                <Link
                  to="/adresses"
                  className="text-primary hover:underline text-xs"
                >
                  Voir tous les horaires →
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Au Goût du Temps. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;