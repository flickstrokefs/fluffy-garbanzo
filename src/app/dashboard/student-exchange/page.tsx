import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { communityPosts, lostAndFoundItems, marketplaceItems, rideShares } from "@/lib/mock-data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function getPlaceholderImage(id: string) {
  return PlaceHolderImages.find(p => p.id === id);
}

export default function StudentExchangePage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">The Student Exchange</h1>
        <p className="text-muted-foreground">Connect with the campus community.</p>
      </div>

      <Tabs defaultValue="marketplace">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4">
          <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
          <TabsTrigger value="lost-found">Lost & Found</TabsTrigger>
          <TabsTrigger value="ride-share">Ride Share</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
        </TabsList>
        <TabsContent value="marketplace">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {marketplaceItems.map(item => {
              const image = getPlaceholderImage(item.imageId);
              return (
              <Card key={item.id}>
                {image && <Image src={image.imageUrl} alt={item.name} width={400} height={300} className="rounded-t-lg object-cover" data-ai-hint={image.imageHint} />}
                <CardHeader>
                  <CardTitle className="font-headline text-lg">{item.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{item.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span className="font-bold text-lg text-primary">₹{item.price}</span>
                  <Button>Contact Seller</Button>
                </CardFooter>
              </Card>
            )})}
          </div>
        </TabsContent>
        <TabsContent value="lost-found">
          <div className="grid gap-4 md:grid-cols-2">
            {lostAndFoundItems.map(item => (
              <Card key={item.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="font-headline text-lg">{item.name}</CardTitle>
                    <Badge variant={item.status === 'found' ? 'secondary' : 'destructive'}>{item.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="ride-share">
           <div className="space-y-4">
            {rideShares.map(ride => (
              <Card key={ride.id}>
                 <CardHeader>
                  <CardTitle className="text-base font-medium">
                    {ride.from} to {ride.to}
                  </CardTitle>
                  <CardDescription>{new Date(ride.date).toDateString()} at {ride.time}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Seats Available: {ride.seats}</p>
                </CardContent>
                <CardFooter>
                  <Button>Request to Join</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="community">
          <div className="space-y-4">
            {communityPosts.map(post => (
              <Card key={post.id}>
                <CardHeader>
                  <CardTitle className="text-base font-medium">Post by {post.author}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{post.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
