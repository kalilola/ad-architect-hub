import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Calendar, Target } from "lucide-react";

const stats = [
  {
    title: "Publications Prévues",
    value: "12",
    subtitle: "Cette semaine",
    icon: Calendar,
    trend: "+2 vs semaine dernière",
    color: "text-primary"
  },
  {
    title: "Taux d'Engagement",
    value: "4.2%",
    subtitle: "Moyenne mensuelle",
    icon: TrendingUp,
    trend: "+0.8% ce mois",
    color: "text-success"
  },
  {
    title: "Audience Totale",
    value: "25.4K",
    subtitle: "Tous réseaux",
    icon: Users,
    trend: "+1.2K ce mois",
    color: "text-warning"
  },
  {
    title: "Objectifs Atteints",
    value: "8/10",
    subtitle: "Ce mois",
    icon: Target,
    trend: "En cours",
    color: "text-primary"
  }
];

export function QuickStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="bg-gradient-card border shadow-md hover:shadow-lg transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <stat.icon className={`h-5 w-5 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {stat.subtitle}
            </p>
            <p className="text-xs text-success mt-2">
              {stat.trend}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}