import { Card } from "@/components/ui/card";
import { AlertCircle, Heart, HandHeart } from "lucide-react";

const ProblemStatement = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <AlertCircle className="w-6 h-6 text-warmth" />
              <span className="text-warmth font-semibold uppercase tracking-wide text-sm">
                The Challenge We Face
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Problem Statement
            </h2>
          </div>

          <Card className="p-8 md:p-12 shadow-gentle border-0 bg-gradient-subtle">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-foreground">
                Many orphaned children and elderly individuals in care homes suffer not due to a lack of 
                goodwill, but due to the absence of a structured way to receive timely help. Often, their basic 
                needs like medicines, clothing, or companionship go unmet because society doesn't know how 
                or where to contribute.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground">
                Meanwhile, those willing to help lack clarity or trust in the process. Sahaaya aims to restore 
                that human connection by creating a transparent, compassionate platform where care is organized, 
                donations are meaningful, and dignity is restored to every life it touches.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-hope/10 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-hope" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Unmet Basic Needs</h3>
                    <p className="text-muted-foreground">
                      Essential requirements like medicines, clothing, and companionship often go unfulfilled.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-warmth/10 rounded-full flex items-center justify-center">
                    <HandHeart className="w-6 h-6 text-warmth" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Disconnected Goodwill</h3>
                    <p className="text-muted-foreground">
                      Willing helpers lack clarity, trust, and structured ways to make meaningful contributions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;