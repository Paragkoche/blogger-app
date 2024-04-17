import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { BlogSchemaType } from "@/types/schema.types";
import Image from "next/image";

const HeroBlog = (prop: BlogSchemaType) => {
  return (
    <div className="flex  w-full gap-5">
      <div className="w-[50%]">
        <AspectRatio ratio={16 / 9}>
          <Image
            src={prop.image}
            alt={prop.title}
            fill
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </div>
      <div className="w-[50%] flex gap-4 flex-col">
        <h1 className="font-bold text-[2rem]">{prop.title}</h1>
        <p>{prop.description}</p>
        <Button>Read more</Button>
      </div>
    </div>
  );
};

export default HeroBlog;
