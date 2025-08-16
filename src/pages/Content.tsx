import { Navigation } from "@/components/layout/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  FileText, 
  Plus, 
  Calendar,
  Clock,
  Image,
  Wand2,
  Target,
  Users,
  AlertCircle
} from "lucide-react";
import { useState } from "react";

const contentTypes = [
  { value: "informatif", label: "Informatif", color: "bg-primary/10 text-primary" },
  { value: "preuve-sociale", label: "Preuve sociale", color: "bg-success/10 text-success" },
  { value: "coulisses", label: "Coulisses", color: "bg-warning/10 text-warning" },
  { value: "promotion", label: "Promotion", color: "bg-destructive/10 text-destructive" },
  { value: "engagement", label: "Engagement", color: "bg-accent/60 text-accent-foreground" }
];

const formats = [
  "Image",
  "Carrousel", 
  "Story",
  "Vidéo",
  "Réels",
  "Post texte"
];

const platforms = [
  "Instagram",
  "Facebook", 
  "LinkedIn",
  "TikTok",
  "Twitter"
];

const existingContent = [
  {
    id: 1,
    title: "Témoignage client - Marie D.",
    type: "preuve-sociale",
    format: "Carrousel",
    date: "2024-01-16",
    time: "14:00",
    platform: "Instagram",
    description: "Témoignage client avec before/after",
    status: "Programmé"
  },
  {
    id: 2,
    title: "5 conseils marketing digital",
    type: "informatif",
    format: "Image",
    date: "2024-01-17",
    time: "09:30",
    platform: "LinkedIn",
    description: "Conseils pratiques pour entrepreneurs",
    status: "Brouillon"
  }
];

const Content = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newContent, setNewContent] = useState({
    title: "",
    type: "",
    format: "",
    date: "",
    time: "",
    platform: "",
    description: "",
    subjects: "",
    targets: "",
    painPoints: "",
    imageStyle: "",
    instructions: ""
  });

  const getTypeData = (type: string) => {
    return contentTypes.find(t => t.value === type) || contentTypes[0];
  };

  const resetForm = () => {
    setNewContent({
      title: "",
      type: "",
      format: "",
      date: "",
      time: "",
      platform: "",
      description: "",
      subjects: "",
      targets: "",
      painPoints: "",
      imageStyle: "",
      instructions: ""
    });
  };

  const handleSubmit = () => {
    // Logique de sauvegarde
    console.log("Nouveau contenu:", newContent);
    setIsDialogOpen(false);
    resetForm();
  };

  return (
    <div className="min-h-screen bg-background flex">
      <Navigation />
      <main className="flex-1 p-6 space-y-8 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Gestion des Contenus</h1>
              <p className="text-muted-foreground">
                Créez et planifiez vos contenus pour les réseaux sociaux
              </p>
            </div>
            
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-primary">
                  <Plus className="h-4 w-4 mr-2" />
                  Nouveau Contenu
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Créer un Nouveau Contenu</DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  {/* Informations de base */}
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Titre du contenu</label>
                      <Input
                        value={newContent.title}
                        onChange={(e) => setNewContent({...newContent, title: e.target.value})}
                        placeholder="Ex: Témoignage client..."
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Type de contenu</label>
                      <Select value={newContent.type} onValueChange={(value) => setNewContent({...newContent, type: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionner un type" />
                        </SelectTrigger>
                        <SelectContent>
                          {contentTypes.map(type => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Format</label>
                      <Select value={newContent.format} onValueChange={(value) => setNewContent({...newContent, format: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionner un format" />
                        </SelectTrigger>
                        <SelectContent>
                          {formats.map(format => (
                            <SelectItem key={format} value={format}>
                              {format}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Plateforme</label>
                      <Select value={newContent.platform} onValueChange={(value) => setNewContent({...newContent, platform: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionner une plateforme" />
                        </SelectTrigger>
                        <SelectContent>
                          {platforms.map(platform => (
                            <SelectItem key={platform} value={platform}>
                              {platform}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Date de publication</label>
                      <Input
                        type="date"
                        value={newContent.date}
                        onChange={(e) => setNewContent({...newContent, date: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Heure de publication</label>
                      <Input
                        type="time"
                        value={newContent.time}
                        onChange={(e) => setNewContent({...newContent, time: e.target.value})}
                      />
                    </div>
                  </div>

                  {/* Sections optionnelles */}
                  <div className="grid gap-4 md:grid-cols-3">
                    <div>
                      <label className="text-sm font-medium mb-2 block flex items-center gap-2">
                        <Target className="h-4 w-4" />
                        Sujets
                      </label>
                      <Textarea
                        value={newContent.subjects}
                        onChange={(e) => setNewContent({...newContent, subjects: e.target.value})}
                        placeholder="Sujets abordés..."
                        className="h-20"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        Cibles
                      </label>
                      <Textarea
                        value={newContent.targets}
                        onChange={(e) => setNewContent({...newContent, targets: e.target.value})}
                        placeholder="Audience ciblée..."
                        className="h-20"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" />
                        Pain Points
                      </label>
                      <Textarea
                        value={newContent.painPoints}
                        onChange={(e) => setNewContent({...newContent, painPoints: e.target.value})}
                        placeholder="Problèmes adressés..."
                        className="h-20"
                      />
                    </div>
                  </div>

                  {/* Style d'images */}
                  <div>
                    <label className="text-sm font-medium mb-2 block flex items-center gap-2">
                      <Image className="h-4 w-4" />
                      Style d'images pour l'IA
                    </label>
                    <Textarea
                      value={newContent.imageStyle}
                      onChange={(e) => setNewContent({...newContent, imageStyle: e.target.value})}
                      placeholder="Ex: Style moderne, couleurs vives, minimaliste..."
                      className="h-20"
                    />
                  </div>

                  {/* Instructions spécifiques */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Instructions spécifiques</label>
                    <Textarea
                      value={newContent.instructions}
                      onChange={(e) => setNewContent({...newContent, instructions: e.target.value})}
                      placeholder="Instructions particulières pour ce contenu..."
                      className="h-24"
                    />
                  </div>

                  <div className="flex justify-end gap-3">
                    <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                      Annuler
                    </Button>
                    <Button onClick={handleSubmit} className="bg-gradient-primary">
                      Créer le Contenu
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Liste des contenus existants */}
          <div className="grid gap-6">
            {existingContent.map((content) => {
              const typeData = getTypeData(content.type);
              return (
                <Card key={content.id} className="bg-gradient-card border shadow-md hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-primary" />
                        <div>
                          <CardTitle className="text-lg">{content.title}</CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">
                            {content.description}
                          </p>
                        </div>
                      </div>
                      <Badge variant="secondary" className={typeData.color}>
                        {typeData.label}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {content.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {content.time}
                        </div>
                        <Badge variant="outline">
                          {content.format}
                        </Badge>
                        <Badge variant="outline">
                          {content.platform}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Wand2 className="h-4 w-4 mr-2" />
                          Générer
                        </Button>
                        <Button variant="outline" size="sm">
                          Modifier
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Content;