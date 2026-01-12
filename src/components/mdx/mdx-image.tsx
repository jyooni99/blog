import Image from "next/image";

interface MdxImageProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  caption?: string;
  className?: string;
  priority?: boolean;
}

const MdxImage = ({
  src,
  alt = "",
  width = 0,
  height = 0,
  caption,
  className,
  priority = false,
  ...props
}: MdxImageProps) => {
  return (
    <figure className="my-2 relative">
      <div className="overflow-hidden">
        <Image
          src={src}
          alt={alt}
          width={width || 1200}
          height={height || 630}
          priority={priority}
          className={`w-full h-full object-cover mt-0 my-0 ${className}`}
          {...props}
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default MdxImage;
