import Card from "@/components/Card";
import type { OnlineClass } from "@/data/classes";

export default function OnlineClassCard({
  classItem,
}: {
  classItem: OnlineClass;
}) {
  return (
    <Card
      image={classItem.coverSrc}
      imageAlt={classItem.coverAlt}
      imageRatio="4/3"
      imageFit="contain"
      title={classItem.title}
      description={classItem.description}
      badge={`For ${classItem.audience}`}
      price={classItem.price}
      cta={{ label: "Enroll on Stan", href: classItem.url }}
    />
  );
}
