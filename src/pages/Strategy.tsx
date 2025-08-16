import { Navigation } from "@/components/layout/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  Target, 
  Lightbulb, 
  Calendar,
  Plus,
  X,
  Edit
} from "lucide-react";
import { useState } from "react";

const Strategy = () => {
  const [targets, setTargets] = useState([
    "Entrepreneurs 25-45 ans",
    "PME Tech",
    "Freelances"
  ]);
  
  const [objectives, setObjectives] = useState([
    { name: "Notoriété", target: 100, current: 75, description: "Augmenter la visibilité de la marque" },
    { name: "Engagement", target: 80, current: 60, description: "Améliorer l'interaction avec l'audience" },
    { name: "Conversions", target: 50, current: 45, description: "Générer plus de leads qualifiés" }
  ]);

  const [usp, setUsp] = useState("Automatisation marketing simple et efficace pour PME");
  
  const [weeklyPlan] = useState([
    { day: "Lundi", content: "Contenu informatif", time: "09:00", type: "Éducatif" },
    { day: "Mardi", content: "Témoignage client", time: "14:00", type: "Preuve sociale" },
    { day: "Mercredi", content: "Behind the scenes", time: "18:00", type: "Coulisses" },
    { day: "Jeudi", content: "Conseil pratique", time: "12:00", type: "Informatif" },
    { day: "Vendredi", content: "Récap de la semaine", time: "16:00", type: "Récapitulatif" },
    { day: "Samedi", content: "Citation motivante", time: "10:00", type: "Inspiration" },
    { day: "Dimanche", content: "Contenu communautaire", time: "19:00", type: "Engagement" }
  ]);

  const [newTarget, setNewTarget] = useState("");

  const addTarget = () => {
    if (newTarget.trim()) {
      setTargets([...targets, newTarget.trim()]);
      setNewTarget("");
    }
  };

  const removeTarget = (index: number) => {
    setTargets(targets.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-background flex">
      <Navigation />
      <main className="flex-1 p-6 space-y-8 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Stratégie Marketing</h1>
            <p className="text-muted-foreground">
              Définissez et suivez votre stratégie marketing social media
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Cibles */}
            <Card className="bg-gradient-card border shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Cibles Marketing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {targets.map((target, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="flex items-center gap-2 pr-1"
                    >
                      {target}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-4 w-4 hover:bg-destructive hover:text-destructive-foreground"
                        onClick={() => removeTarget(index)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Nouvelle cible..."
                    value={newTarget}
                    onChange={(e) => setNewTarget(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addTarget()}
                  />
                  <Button onClick={addTarget} size="icon" variant="outline">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* USP/Mission */}
            <Card className="bg-gradient-card border shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  Proposition de Valeur
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={usp}
                  onChange={(e) => setUsp(e.target.value)}
                  placeholder="Décrivez votre proposition de valeur unique..."
                  className="min-h-[120px]"
                />
              </CardContent>
            </Card>

            {/* Objectifs */}
            <Card className="bg-gradient-card border shadow-md lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Objectifs des Publications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  {objectives.map((objective, index) => (
                    <div key={index} className="p-4 rounded-lg border bg-background/50">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{objective.name}</h4>
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                          <Edit className="h-3 w-3" />
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {objective.description}
                      </p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progression</span>
                          <span>{objective.current}/{objective.target}</span>
                        </div>
                        <Progress 
                          value={(objective.current / objective.target) * 100} 
                          className="h-2"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Planning hebdomadaire */}
            <Card className="bg-gradient-card border shadow-md lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Planning Hebdomadaire Type
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {weeklyPlan.map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-between p-3 rounded-lg border bg-background/50"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-20 text-sm font-medium">{item.day}</div>
                        <div className="text-sm text-muted-foreground">{item.time}</div>
                        <div className="text-sm">{item.content}</div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {item.type}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-end gap-4">
            <Button variant="outline">Annuler</Button>
            <Button className="bg-gradient-primary">
              Sauvegarder la Stratégie
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Strategy;