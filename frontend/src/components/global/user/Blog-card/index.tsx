import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { BlogSchemaType } from "@/types/schema.types";
import Image from "next/image";

const BlogCard = (prop: BlogSchemaType) => {
  return (
    <Card className=" m-3">
      <CardHeader>
        <AspectRatio ratio={16 / 9}>
          <Image
            src={prop.image}
            alt={prop.slug}
            fill
            className="object-cover"
          />
        </AspectRatio>
      </CardHeader>
      <CardContent>
        <h2>{prop.title}</h2>
      </CardContent>
      <CardFooter>
        <Button>Read more</Button>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
