import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Home, LogIn, FileText, Terminal } from 'lucide-react';
import React from 'react';

export default function WebsiteLandingPage() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-3xl font-bold">TravelConnect</h1>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white">Industries</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white rounded-md shadow-lg">
                  <NavigationMenuLink href="#" className="hover:bg-gray-100 p-2">Hotels</NavigationMenuLink>
                  <NavigationMenuLink href="#" className="hover:bg-gray-100 p-2">Tickets</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">Login / Register</Button>
          </NavigationMenu>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto p-4 bg-gray-100">
        <div className="container mx-auto">
          <Tabs defaultValue="hotels" className="w-full">
            <TabsList className="flex space-x-4 mb-4">
              <TabsTrigger value="hotels" className="px-4 py-2 rounded-md text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-md">Hotels</TabsTrigger>
              <TabsTrigger value="tickets" className="px-4 py-2 rounded-md text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-md">Tickets</TabsTrigger>
            </TabsList>
            <TabsContent value="hotels" className="rounded-md shadow-lg p-4 bg-white">
              <h2 className="text-2xl font-bold mb-4">Hotel Industry Integration</h2>
              <AspectRatio ratio={16 / 9} className="mb-4">
                <div className="bg-blue-300 rounded-md transform hover:scale-105 transition-transform duration-500 ease-in-out">
                  {/* Placeholder for 3D effect */}
                </div>
              </AspectRatio>
              <Button variant="solid" className="bg-blue-600 text-white">View Documentation</Button>
            </TabsContent>
            <TabsContent value="tickets" className="rounded-md shadow-lg p-4 bg-white">
              <h2 className="text-2xl font-bold mb-4">Ticket Industry Integration</h2>
              <AspectRatio ratio={16 / 9} className="mb-4">
                <div className="bg-purple-300 rounded-md transform hover:scale-105 transition-transform duration-500 ease-in-out">
                  {/* Placeholder for 3D effect */}
                </div>
              </AspectRatio>
              <Button variant="solid" className="bg-purple-600 text-white">View Documentation</Button>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <footer className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center text-white">
          <div className="flex items-center space-x-4">
            <Home className="w-6 h-6" />
            <span>TravelConnect</span>
          </div>
          <div className="flex items-center space-x-4">
            <LogIn className="w-6 h-6" />
            <FileText className="w-6 h-6" />
            <Terminal className="w-6 h-6" />
          </div>
        </div>
      </footer>
    </div>
  );
}