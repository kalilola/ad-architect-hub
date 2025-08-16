import { Navigation } from "@/components/layout/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar as CalendarIcon, 
  ChevronLeft, 
  ChevronRight,
  Clock,
  Plus
} from "lucide-react";
import { useState } from "react";

const weekDays = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
const currentWeek = ["15 Jan", "16 Jan", "17 Jan", "18 Jan", "19 Jan", "20 Jan", "21 Jan"];

const weekContent = {
  "16 Jan": [
    { 
      id: 1,
      time: "14:00", 
      title: "Témoignage client - Marie D.", 
      type: "Preuve sociale", 
      format: "Carrousel",
      platform: "Instagram",
      status: "Programmé"
    }
  ],
  "17 Jan": [
    { 
      id: 2,
      time: "09:30", 
      title: "5 conseils marketing", 
      type: "Informatif", 
      format: "Image",
      platform: "LinkedIn",
      status: "Brouillon"
    },
    { 
      id: 3,
      time: "18:00", 
      title: "Behind the scenes", 
      type: "Coulisses", 
      format: "Story",
      platform: "Instagram",
      status: "Programmé"
    }
  ],
  "18 Jan": [
    { 
      id: 4,
      time: "12:00", 
      title: "Promotion service", 
      type: "Promotion", 
      format: "Image",
      platform: "Facebook",
      status: "Programmé"
    }
  ],
  "20 Jan": [
    { 
      id: 5,
      time: "16:00", 
      title: "Citation motivante", 
      type: "Inspiration", 
      format: "Story",
      platform: "Instagram",
      status: "Programmé"
    }
  ]
};

const getTypeColor = (type: string) => {
  switch (type) {
    case "Preuve sociale": return "bg-success/10 text-success border-success/20";
    case "Informatif": return "bg-primary/10 text-primary border-primary/20";
    case "Coulisses": return "bg-warning/10 text-warning border-warning/20";
    case "Promotion": return "bg-destructive/10 text-destructive border-destructive/20";
    case "Inspiration": return "bg-accent/60 text-accent-foreground border-accent/30";
    default: return "bg-muted text-muted-foreground";
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "Programmé": return "bg-success/10 text-success";
    case "Brouillon": return "bg-warning/10 text-warning";
    case "Publié": return "bg-primary/10 text-primary";
    default: return "bg-muted text-muted-foreground";
  }
};

const Calendar = () => {
  const [selectedWeek, setSelectedWeek] = useState(0);

  const handlePrevWeek = () => {
    setSelectedWeek(prev => Math.max(0, prev - 1));
  };

  const handleNextWeek = () => {
    setSelectedWeek(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-background flex">
      <Navigation />
      <main className="flex-1 p-6 space-y-8 animate-fade-in">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Calendrier Editorial</h1>
              <p className="text-muted-foreground">
                Planifiez et organisez vos publications sur la semaine
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" onClick={handlePrevWeek}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <span className="text-sm font-medium min-w-[120px] text-center">
                  15 - 21 Janvier 2024
                </span>
                <Button variant="outline" size="icon" onClick={handleNextWeek}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <Button className="bg-gradient-primary">
                <Plus className="h-4 w-4 mr-2" />
                Nouveau Contenu
              </Button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-4">
            {weekDays.map((day, index) => (
              <Card key={day} className="bg-gradient-card border shadow-md min-h-[400px]">
                <CardHeader className="pb-3">
                  <CardTitle className="text-center">
                    <div className="text-sm font-medium text-muted-foreground">{day}</div>
                    <div className="text-lg font-bold mt-1">{currentWeek[index]}</div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {weekContent[currentWeek[index]]?.map((content) => (
                    <div
                      key={content.id}
                      className="p-3 rounded-lg border bg-background/50 hover:bg-background/80 transition-all duration-200 cursor-pointer"
                      style={{
                        borderLeftWidth: '3px',
                        borderLeftColor: 'hsl(var(--primary))'
                      }}
                    >
                      <div className="flex items-center gap-1 mb-2">
                        <Clock className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs font-medium">{content.time}</span>
                        <Badge variant="outline" className={getStatusColor(content.status)}>
                          {content.status}
                        </Badge>
                      </div>
                      
                      <h4 className="text-sm font-medium mb-2 line-clamp-2">
                        {content.title}
                      </h4>
                      
                      <div className="space-y-1">
                        <Badge variant="outline" className={getTypeColor(content.type)}>
                          {content.type}
                        </Badge>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{content.format}</span>
                          <Badge variant="secondary" className="text-xs">
                            {content.platform}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Add Content Button */}
                  <Button
                    variant="ghost"
                    className="w-full h-12 border-2 border-dashed border-muted-foreground/20 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Ajouter un contenu
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Legend */}
          <Card className="bg-gradient-card border shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Légende</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-medium mb-2">Types de contenu</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                      Preuve sociale
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      Informatif
                    </Badge>
                    <Badge variant="outline" className="bg-warning/10 text-warning border-warning/20">
                      Coulisses
                    </Badge>
                    <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive/20">
                      Promotion
                    </Badge>
                    <Badge variant="outline" className="bg-accent/60 text-accent-foreground border-accent/30">
                      Inspiration
                    </Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Statuts</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-success/10 text-success">
                      Programmé
                    </Badge>
                    <Badge variant="outline" className="bg-warning/10 text-warning">
                      Brouillon
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10 text-primary">
                      Publié
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Calendar;