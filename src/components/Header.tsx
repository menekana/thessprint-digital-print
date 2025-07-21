import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/b030c290-50f0-43fc-af99-4cfd28efb882.png" 
              alt="ThessPrint Logo" 
              className="h-12 w-auto"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Αρχική
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Σχετικά με εμάς
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Υπηρεσίες
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Γιατί ThessPrint
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Επικοινωνία
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>+30 XXX XXX XXXX</span>
            </div>
            <Button variant="outline" size="sm">
              <Mail className="h-4 w-4 mr-2" />
              Επικοινωνία
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;