import Image from "next/image"

interface ProductDetailPictureProps {
  imageUrl: string
  pictureURL: string
  name: string
}

export function ProductDetailPicture({ pictureURL, name }: ProductDetailPictureProps) {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-lg">
      <Image
        src={pictureURL}
        alt={name}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />
    </div>
  )
} 