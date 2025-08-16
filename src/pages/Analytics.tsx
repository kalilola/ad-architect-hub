import { Navigation } from "@/components/layout/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown,
  Users, 
  Heart,
  MessageCircle,
  Share,
  Eye,
  Settings,
  Facebook,
  Instagram,
  Linkedin
} from "lucide-react";

const analyticsData = {
  overview: [
    {
      title: "Portée Totale",
      value: "25.4K",
      change: "+12.5%",
      trend: "up",
      icon: Eye,
      description: "Personnes atteintes ce mois"
    },
    {
      title: "Engagement",
      value: "4.2%",
      change: "+0.8%",
      trend: "up",
      icon: Heart,
      description: "Taux d'engagement moyen"
    },
    {
      title: "Nouveaux Followers",
      value: "1.2K",
      change: "-5.2%",
      trend: "down",
      icon: Users,
      description: "Ce mois-ci"
    },
    {
      title: "Partages",
      value: "340",
      change: "+22.1%",
      trend: "up",
      icon: Share,
      description: "Total ce mois"
    }
  ],
  platforms: [
    {
      name: "Instagram",
      icon: Instagram,
      followers: "12.5K",
      engagement: "5.2%",
      posts: 18,
      reach: "15.2K",
      color: "text-pink-500"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      followers: "8.3K",
      engagement: "3.8%",
      posts: 12,
      reach: "8.1K",
      color: "text-blue-600"
    },
    {
      name: "Facebook",
      icon: Facebook,
      followers: "4.6K",
      engagement: "2.9%",
      posts: 10,
      reach: "2.1K",
      color: "text-blue-500"
    }
  ],
  objectives: [
    {
      name: "Notoriété",
      target: 100,
      current: 75,
      unit: "K vues",
      status: "En cours"
    },
    {
      name: "Engagement",
      target: 5,
      current: 4.2,
      unit: "%",
      status: "En cours"
    },
    {
      name: "Followers",
      target: 30,
      current: 25.4,
      unit: "K",
      status: "En retard"
    },
    {
      name: "Conversions",
      target: 50,
      current: 45,
      unit: "leads",
      status: "Objectif atteint"
    }
  ],
  topContent: [
    {
      title: "Témoignage client - Sarah M.",
      type: "Preuve sociale",
      platform: "Instagram",
      reach: "3.2K",
      engagement: "8.5%",
      likes: 156,
      comments: 23,
      shares: 12
    },
    {
      title: "5 conseils marketing digital",
      type: "Informatif",
      platform: "LinkedIn",
      reach: "2.8K",
      engagement: "6.2%",
      likes: 89,
      comments: 15,
      shares: 34
    },
    {
      title: "Behind the scenes équipe",
      type: "Coulisses",
      platform: "Instagram",
      reach: "2.1K",
      engagement: "7.8%",
      likes: 124,
      comments: 18,
      shares: 8
    }
  ]
};

const getObjectiveStatus = (status: string) => {
  switch (status) {
    case "Objectif atteint": return "text-success";
    case "En cours": return "text-warning";
    case "En retard": return "text-destructive";
    default: return "text-muted-foreground";
  }
};

const Analytics = () => {
  return (
    <div className="min-h-screen bg-background flex">
      <Navigation />
      <main className="flex-1 p-6 space-y-8 animate-fade-in">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Analytiques</h1>
              <p className="text-muted-foreground">
                Suivez les performances de vos publications et l'atteinte de vos objectifs
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="outline">
                <Facebook className="h-4 w-4 mr-2" />
                Connecter Facebook
              </Button>
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Connecter Google Analytics
              </Button>
            </div>
          </div>

          {/* Vue d'ensemble */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            {analyticsData.overview.map((metric, index) => (
              <Card key={index} className="bg-gradient-card border shadow-md">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {metric.title}
                  </CardTitle>
                  <metric.icon className="h-5 w-5 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <div className="flex items-center gap-2 mt-2">
                    {metric.trend === "up" ? (
                      <TrendingUp className="h-4 w-4 text-success" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-destructive" />
                    )}
                    <span className={`text-sm font-medium ${
                      metric.trend === "up" ? "text-success" : "text-destructive"
                    }`}>
                      {metric.change}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {metric.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Performance par plateforme */}
            <Card className="bg-gradient-card border shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Performance par Plateforme
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {analyticsData.platforms.map((platform, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <platform.icon className={`h-5 w-5 ${platform.color}`} />
                        <span className="font-medium">{platform.name}</span>
                      </div>
                      <Badge variant="secondary">{platform.posts} posts</Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="text-muted-foreground">Followers</div>
                        <div className="font-semibold">{platform.followers}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Engagement</div>
                        <div className="font-semibold">{platform.engagement}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Portée</div>
                        <div className="font-semibold">{platform.reach}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Objectifs vs Réalisé */}
            <Card className="bg-gradient-card border shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Objectifs vs Réalisé
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {analyticsData.objectives.map((objective, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{objective.name}</span>
                      <Badge variant="outline" className={getObjectiveStatus(objective.status)}>
                        {objective.status}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{objective.current}{objective.unit} / {objective.target}{objective.unit}</span>
                      <span>{Math.round((objective.current / objective.target) * 100)}%</span>
                    </div>
                    <Progress 
                      value={(objective.current / objective.target) * 100} 
                      className="h-2"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Top contenus */}
            <Card className="bg-gradient-card border shadow-md lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  Top Contenus du Mois
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {analyticsData.topContent.map((content, index) => (
                    <div key={index} className="p-4 rounded-lg border bg-background/50">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-medium">{content.title}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              {content.type}
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              {content.platform}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium">{content.reach} vues</div>
                          <div className="text-xs text-muted-foreground">
                            {content.engagement} engagement
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          {content.likes}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          {content.comments}
                        </div>
                        <div className="flex items-center gap-1">
                          <Share className="h-4 w-4" />
                          {content.shares}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Analytics;