import Image from "next/image";

interface CarouselProps {
    src: string;
    alt: string;
    width: number;
    height: number;
}

export default function Carousel(props: CarouselProps) {
    return (
        <div className="Carousel">
            <Image
                src={props.src}
                alt={props.alt}
                layout="responsive"
                width={props.width}
                height={props.height}
            />



        </div>
    );
}
