import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Lightbulb, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const strategyData = {
  targets: ["Entrepreneurs 25-45 ans", "PME Tech", "Freelances"],
  objectives: [
    { name: "Notoriété", progress: 75, status: "En cours" },
    { name: "Engagement", progress: 60, status: "En retard" },
    { name: "Conversions", progress: 90, status: "Objectif atteint" }
  ],
  usp: "Automatisation marketing simple et efficace pour PME",
  nextActions: [
    "Réviser stratégie contenu informatif",
    "Augmenter fréquence témoignages clients",
    "Optimiser horaires de publication"
  ]
};

const getObjectiveColor = (status: string) => {
  switch (status) {
    case "Objectif atteint": return "text-success";
    case "En cours": return "text-warning";
    case "En retard": return "text-destructive";
    default: return "text-muted-foreground";
  }
};

export function StrategyOverview() {
  const navigate = useNavigate();

  return (
    <Card className="bg-gradient-card border shadow-md">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Aperçu Stratégie</CardTitle>
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => navigate("/strategy")}
          className="text-primary hover:text-primary"
        >
          Modifier
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Cibles */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Users className="h-4 w-4 text-primary" />
            <h4 className="font-medium text-sm">Cibles Principales</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {strategyData.targets.map((target, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {target}
              </Badge>
            ))}
          </div>
        </div>

        {/* Objectifs */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Target className="h-4 w-4 text-primary" />
            <h4 className="font-medium text-sm">Objectifs du Mois</h4>
          </div>
          <div className="space-y-2">
            {strategyData.objectives.map((objective, index) => (
              <div key={index} className="flex items-center justify-between p-2 rounded bg-background/50 border">
                <span className="text-sm">{objective.name}</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 bg-muted rounded-full h-2">
                    <div 
                      className="h-2 rounded-full bg-primary transition-all duration-300"
                      style={{ width: `${objective.progress}%` }}
                    />
                  </div>
                  <span className={`text-xs font-medium ${getObjectiveColor(objective.status)}`}>
                    {objective.progress}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* USP */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb className="h-4 w-4 text-primary" />
            <h4 className="font-medium text-sm">Proposition de Valeur</h4>
          </div>
          <p className="text-sm text-muted-foreground bg-background/50 p-3 rounded border">
            {strategyData.usp}
          </p>
        </div>

        <Button 
          variant="ghost" 
          className="w-full text-primary hover:text-primary"
          onClick={() => navigate("/strategy")}
        >
          <TrendingUp className="h-4 w-4 mr-2" />
          Voir la stratégie complète
        </Button>
      </CardContent>
    </Card>
  );
}