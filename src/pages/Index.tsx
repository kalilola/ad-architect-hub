import { Navigation } from "@/components/layout/Navigation";
import { QuickStats } from "@/components/dashboard/QuickStats";
import { ContentPreview } from "@/components/dashboard/ContentPreview";
import { CalendarWidget } from "@/components/dashboard/CalendarWidget";
import { StrategyOverview } from "@/components/dashboard/StrategyOverview";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex">
      <Navigation />
      <main className="flex-1 p-6 space-y-8 animate-fade-in">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Dashboard Marketing</h1>
            <p className="text-muted-foreground">
              Gérez votre stratégie marketing social media en un seul endroit
            </p>
          </div>

          {/* Quick Stats */}
          <QuickStats />

          {/* Main Content Grid */}
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <ContentPreview />
              <CalendarWidget />
            </div>
            <div>
              <StrategyOverview />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
