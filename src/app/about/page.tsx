'use client';
import { useRouter } from "next/navigation";
import Image from "next/image";

// import { useRouter } from "next/router";


const About = () => {
    const images = [1, 2, 3];
    const router = useRouter();

    return (

        <div className="w-screen mt-12">

            <div className="flex flex-1 justify-start items-center flex-col  xs:gap-2 md:gap-6 " >
                <h5 className="font-bold md:text-4xl  xs:text-2xl">Activities</h5>


                <p className=" xs:1xl md:text-2xl uppercase font-light">
                    EduHub Institute of Technology
                </p>
                <p className="w-3/5 text-center text-2xl  xs:text-[15px] md:text-[22px]" >
                    At EDUHUB Institute of Technology, students can engage in a variety of activities that complement their academic journey and provide a well-rounded learning experience. The institute understands the importance of extracurricular activities in fostering personal growth, building teamwork skills, and promoting a healthy work-life balance. With this in mind, the website offers a range of activities for students to participate in.

                </p>



                {/* Ctrl f2 = senior brother of ctrl D */}

                <div className="flex  xs:flex-col md:flex-row justify-center items-center gap-10">


                    {images.map((image) => (
                        // <Image
                        //     key={image}
                        //     className=" xs:w-3/4 md:w-1/4 shadow-lg hover:shadow-2xl"
                        //     src={`/images/image-${image}.png`}
                        //     alt={`image ${image}`}
                        //     width={100}
                        //     height={100}
                        // />



                        <img
                            key={image}
                            className=" xs:w-3/4 md:w-1/4 shadow-lg hover:shadow-2xl"
                            src={`/images/image-${image}.png`}
                            alt={`image ${image}`}


                        />
                    ))}


                </div>


                <button className="border-red-500 border-2 p-2 rounded-md" onClick={() => {


                    router.push("/services");

                }}


                >
                    View more
                </button>

            </div>


        </div>
    );
};

export default About;
