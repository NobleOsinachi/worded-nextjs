import Link from "next/link";
import Navbar from "../components/navbar";
import Carousel from "@/components/carousel";


interface IcmProps {

    data: any;
}


export default function Icm(props: IcmProps) {
    return (
        <>
            <Navbar />
            <Carousel
                src="/banner.png"
                alt="banner for carousel"
                width={100}
                height={100}

            />
            {/* {props} */}


        </>
    );
}


