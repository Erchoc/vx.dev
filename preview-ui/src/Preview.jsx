import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@/components/ui/navigation-menu';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Home, LogIn, FileText, Terminal } from 'lucide-react';
import React from 'react';

export default function WebsiteLandingPage() {
  return (
    <div className="flex flex-col h-screen">
      {/* Header with navigation menu */}
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 shadow-md">
        <div className="flex items-center justify-between">
          <h1 className="text-white text-3xl font-bold">TravelConnect</h1>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white">Industries</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink href="#hotels">Hotels</NavigationMenuLink>
                  <NavigationMenuLink href="#tickets">Tickets</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white">Documentation</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink href="#docs">Integration Docs</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white">Account</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink href="#login">Login</NavigationMenuLink>
                  <NavigationMenuLink href="#register">Register</NavigationMenuLink>
                  <NavigationMenuLink href="#dashboard">Dashboard</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>

      {/* Main content with tabs for industries */}
      <main className="flex-1 overflow-y-auto p-4 bg-gray-100">
        <Tabs defaultValue="hotels" className="w-full">
          <TabsList className="flex space-x-1 rounded-xl bg-white p-1">
            <TabsTrigger value="hotels" className="flex-1 text-center rounded-lg p-2 font-medium text-blue-600">Hotels</TabsTrigger>
            <TabsTrigger value="tickets" className="flex-1 text-center rounded-lg p-2 font-medium text-blue-600">Tickets</TabsTrigger>
          </TabsList>
          <TabsContent value="hotels" className="mt-4">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-700">Explore Our Hotel Partnerships</h2>
              <p className="mt-2 text-gray-600">Connect with the best in the industry and grow your business.</p>
              <div className="mt-4">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&dpr=2&q=80"
                    alt="Hotel"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="tickets" className="mt-4">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-700">Get Access to Ticket Sales</h2>
              <p className="mt-2 text-gray-600">Boost your sales with our seamless ticketing solutions.</p>
              <div className="mt-4">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src="https://images.unsplash.com/photo-1519337265831-281ec6cc8514?w=800&dpr=2&q=80"
                    alt="Tickets"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer with quick links */}
      <footer className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 shadow-inner">
        <div className="flex justify-between text-white">
          <div>
            <Home className="w-6 h-6" />
            <span className="ml-2">Home</span>
          </div>
          <div>
            <LogIn className="w-6 h-6" />
            <span className="ml-2">Login</span>
          </div>
          <div>
            <FileText className="w-6 h-6" />
            <span className="ml-2">Docs</span>
          </div>
          <div>
            <Terminal className="w-6 h-6" />
            <span className="ml-2">Dashboard</span>
          </div>
        </div>
      </footer>
    </div>
  );
}