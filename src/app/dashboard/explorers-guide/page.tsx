import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { nearbyPlaces } from "@/lib/mock-data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { SmartNavigationAction } from "@/components/ai/smart-navigation-action";

function getPlaceholderImage(id: string) {
  return PlaceHolderImages.find(p => p.id === id);
}

export default function ExplorersGuidePage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">The Explorer's Guide</h1>
        <p className="text-muted-foreground">Discover what's around you.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold font-headline">Nearby Places</h2>
          {nearbyPlaces.map(place => {
            const image = getPlaceholderImage(place.imageId);
            return (
              <Card key={place.id}>
                 <div className="flex items-center p-4">
                  {image && <Image src={image.imageUrl} alt={place.name} width={128} height={128} className="rounded-lg object-cover mr-4" data-ai-hint={image.imageHint} />}
                  <div className="flex-grow">
                    <CardHeader className="p-0">
                      <CardTitle className="font-headline text-lg">{place.name}</CardTitle>
                      <CardDescription>{place.category}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 mt-2">
                      <p className="text-sm text-muted-foreground">{place.distance} away</p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
        
        <div>
           <SmartNavigationAction />
        </div>
      </div>
    </div>
  );
}
