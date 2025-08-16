import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const weekDays = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
const currentWeek = [15, 16, 17, 18, 19, 20, 21];

const weekContent = {
  16: [
    { time: "14:00", title: "Témoignage client", type: "Carrousel", platform: "IG" }
  ],
  17: [
    { time: "09:30", title: "5 conseils marketing", type: "Image", platform: "LI" },
    { time: "18:00", title: "Behind the scenes", type: "Story", platform: "IG" }
  ],
  18: [
    { time: "12:00", title: "Promotion service", type: "Image", platform: "FB" }
  ],
  20: [
    { time: "16:00", title: "Citation motivante", type: "Story", platform: "IG" }
  ]
};

export function CalendarWidget() {
  const navigate = useNavigate();

  return (
    <Card className="bg-gradient-card border shadow-md">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Calendrier de la Semaine</CardTitle>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" className="h-8 w-8">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="h-8 w-8">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-2 mb-4">
          {weekDays.map((day, index) => (
            <div key={day} className="text-center">
              <div className="text-xs font-medium text-muted-foreground mb-2">{day}</div>
              <div 
                className={`h-8 w-8 mx-auto rounded-full flex items-center justify-center text-sm font-medium ${
                  currentWeek[index] === 17 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-background border"
                }`}
              >
                {currentWeek[index]}
              </div>
            </div>
          ))}
        </div>
        
        <div className="space-y-3">
          {Object.entries(weekContent).map(([date, contents]) => (
            <div key={date} className="border-l-2 border-primary/20 pl-3">
              <div className="text-sm font-medium mb-2">
                {weekDays[currentWeek.indexOf(parseInt(date))]} {date}
              </div>
              <div className="space-y-2">
                {contents.map((content, index) => (
                  <div 
                    key={index} 
                    className="p-2 rounded-md bg-background/50 border hover:bg-background/80 transition-colors cursor-pointer"
                    onClick={() => navigate("/calendar")}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs font-medium">{content.time}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {content.platform}
                      </Badge>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {content.title} - {content.type}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <Button 
          variant="ghost" 
          className="w-full mt-4 text-primary hover:text-primary"
          onClick={() => navigate("/calendar")}
        >
          <Calendar className="h-4 w-4 mr-2" />
          Voir le calendrier complet
        </Button>
      </CardContent>
    </Card>
  );
}