import HeroImage from "@/public/hero_test.png"
import Image from "next/image";

export default function Hero() {
    return (
        <section id="home" className={`flex md:flex-row flex-col sm:py-16 py-6`}>
            <div className={`flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6`}>
                <div className={`flex flex-row items-center py-[6px] px-4 bg-gradient-to-tr from-[--bg-primary] to-[--bg-secondary] rounded-[10px] mb-2`}>
                    <Image src={ HeroImage } alt="discount" className="w-[32px] h-[32px]" />
                    <p className={`font-poppins font-normal text-[--text-primary] text-[18px] leading-[30.8px] ml-2`}>
                        <span className="text-[--text-secondary]">20%</span> Discount For{" "}
                        <span className="text-[--text-secondary]">1 Month</span> Account
                    </p>
                </div>

                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-[--text-primary] ss:leading-[100.8px] leading-[75px]">
                        The Next <br className="sm:block hidden" />{" "}
                        <span className={`bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-800 text-transparent bg-clip-text drop-shadow-md`}>Generation</span>{" "}
                    </h1>
                </div>

                <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-[--text-primary] ss:leading-[100.8px] leading-[75px] w-full">
                    Payment Method.
                </h1>
                <p className={`font-poppins font-normal text-[--text-secondary] text-[18px] leading-[30.8px] max-w-[470px] mt-5`}>
                    Our team of experts uses a methodology to identify the credit cards
                    most likely to fit your needs. We examine annual percentage rates,
                    annual fees.
                </p>
            </div>

            <div className={`flex-1 flex flex justify-center items-center md:my-0 my-10 relative`}>
                <Image src={ HeroImage } alt="billing" className="w-[100%] h-[100%] relative z-10]" />

                {/* gradient start */}
                <div className={"absolute z-[0] w-[40%] h-[35%] top-0 bg-gradient-to-r from-pink-300 to-pink-600 filter blur-[900px]"} />
                <div className={`absolute z-[1] w-[80%] h-[80%] rounded-full bg-white bg-opacity-60 filter blur-[750px] bottom-40`} />
                <div className={"absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 bg-gradient-to-t from-transparent via-blue-800 to-transparent filter blur-[123px]"} />
                {/* gradient end */}
            </div>
        </section>
    );
};