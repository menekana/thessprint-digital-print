import { Button } from "@/components/ui/button";
import { Phone, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };
  return <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="https://drive.google.com/uc?export=view&id=1Ot-3fGyEPdZsas2Hqa6mQaxem3pE8YlA" alt="ThessPrint Logo" className="h-12 w-auto" />
          </div>
          
          {/* Desktop Navigation - Aligned Right */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors font-medium">
              Υπηρεσίες
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors font-medium">
              Γιατί ThessPrint
            </button>
            
            {/* Desktop Contact Info - Inline with Navigation */}
            <div className="hidden lg:flex items-center space-x-4 ml-8">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+30 23990 20 393</span>
              </div>
              <Button asChild variant="outline" size="sm">
                <a href="mailto:info@thessprint.gr">
                  <Mail className="h-4 w-4 mr-2" />
                  Επικοινωνία
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMobileMenu} className="p-2">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors font-medium py-2 text-left">
                Υπηρεσίες
              </button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors font-medium py-2 text-left">
                Γιατί ThessPrint
              </button>
              
              {/* Mobile Contact */}
              <div className="pt-4 border-t border-border">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                  <Phone className="h-4 w-4" />
                  <span>+30 23990 20 393</span>
                </div>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <a href="mailto:info@thessprint.gr">
                    <Mail className="h-4 w-4 mr-2" />
                    Επικοινωνία
                  </a>
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </header>;
};
export default Header;