import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Image, FileText, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const upcomingContent = [
  {
    id: 1,
    title: "Témoignage client - Marie D.",
    type: "Preuve sociale",
    format: "Carrousel",
    date: "2024-01-16",
    time: "14:00",
    platform: "Instagram",
    description: "Témoignage client avec before/after"
  },
  {
    id: 2,
    title: "5 conseils marketing digital",
    type: "Informatif",
    format: "Image",
    date: "2024-01-17",
    time: "09:30",
    platform: "LinkedIn",
    description: "Conseils pratiques pour entrepreneurs"
  },
  {
    id: 3,
    title: "Behind the scenes équipe",
    type: "Coulisses",
    format: "Story",
    date: "2024-01-17",
    time: "18:00",
    platform: "Instagram",
    description: "Présentation de l'équipe en mode décontracté"
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "Preuve sociale": return "bg-success/10 text-success border-success/20";
    case "Informatif": return "bg-primary/10 text-primary border-primary/20";
    case "Coulisses": return "bg-warning/10 text-warning border-warning/20";
    default: return "bg-muted text-muted-foreground";
  }
};

const getFormatIcon = (format: string) => {
  switch (format) {
    case "Carrousel": return FileText;
    case "Image": return Image;
    case "Story": return Calendar;
    default: return FileText;
  }
};

export function ContentPreview() {
  const navigate = useNavigate();

  return (
    <Card className="bg-gradient-card border shadow-md">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Prochains Contenus</CardTitle>
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => navigate("/content")}
          className="text-primary hover:text-primary"
        >
          <Plus className="h-4 w-4 mr-2" />
          Ajouter
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {upcomingContent.map((content) => {
          const FormatIcon = getFormatIcon(content.format);
          return (
            <div
              key={content.id}
              className="p-4 rounded-lg border bg-background/50 hover:bg-background/80 transition-all duration-200 cursor-pointer"
              onClick={() => navigate("/content")}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <FormatIcon className="h-4 w-4 text-muted-foreground" />
                  <h4 className="font-medium text-sm">{content.title}</h4>
                </div>
                <Badge variant="outline" className={getTypeColor(content.type)}>
                  {content.type}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mb-3">{content.description}</p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {content.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {content.time}
                  </div>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {content.platform}
                </Badge>
              </div>
            </div>
          );
        })}
        <Button 
          variant="ghost" 
          className="w-full text-primary hover:text-primary"
          onClick={() => navigate("/content")}
        >
          Voir tous les contenus →
        </Button>
      </CardContent>
    </Card>
  );
}