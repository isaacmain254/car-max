import Image from "next/image";
import Link from "next/link";

import { CarModelCard } from "@/components/carModelCard";
import { carBrands } from "@/utils/carBrand";
import Volvo from "@/images/Volvo.jpeg";

export default function Home() {
  return (
    <main className="container mx-auto ">
      {/* herosection */}
      <div className="lg:w-10/12 lg:h-[75vh] mx-auto flex">
        <div className="lg:w-1/2  h-full flex flex-col justify-center px-3">
          <h1 className="py-4">Find your next awesome vehicle</h1>
          <p className="text-xl ">
            Explore the trending and best cars in the market. We help buyers &
            sellers connect and do business. We are a perfect solution for car
            dealers and auctions Get your dream car hassle free.
          </p>
          {/* call to action */}
          <div className="flex gap-5 py-6">
            <Link
              href="#"
              className="bg-blue-600 py-2 px-4 font-semibold text-white rounded-md"
            >
              Buy car
            </Link>
            <Link
              href="#"
              className="border border-blue-600 p-2 font-semibold rounded-md"
            >
              Explore more
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <Image
            src="/images/mercedes.png"
            fill={true}
            alt="Mercedes benz"
            className="object-cover"
          />
        </div>
      </div>
      {/* car brands */}
      <div className="lg:w-3/4 flex justify-between mx-auto flex-wrap gap-y-4 px-3">
        {carBrands.map((brand) => (
          <Image
            src={brand.src}
            key={brand.id}
            width={65}
            height={65}
            alt={brand.brand}
          />
        ))}
      </div>

      {/* trending cars  */}
      <div className="lg:w-10/12 mx-auto my-5">
        <h2 className="py-7">Trending cars near you</h2>
        <div className="lg:flex justify-between items-center pb-5">
          <div className="lg:w-64 mx-3  border border-slate-300 rounded-md">
            <div className="w-64 h-56 relative rounded-md overflow-hidden">
              <Image
                src="/images/mercedes.png"
                fill={true}
                sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                // width={150}
                // height={100}
                alt="mercedes"
                className="object-cover"
              />
            </div>
            <p className="font-bold text-lg pb-2 pt-4  px-1">
              Used cars below $5,000
            </p>
            <p className="font-light text-sm px-1">56809 cars</p>
          </div>
          <div className="lg:w-64 mx-3 border border-slate-300 rounded-md">
            <div className="w-64 h-52 relative overflow-hidden rounded-md">
              <Image
                src="/images/mercedes.png"
                fill={true}
                // width={150}
                // height={100}
                alt="mercedes"
                className="object-cover"
              />
            </div>
            <p className="font-bold text-lg pb-2 pt-4 px-1">
              Used cars below $20,000
            </p>
            <p className="font-light text-sm px-1">56809 cars</p>
          </div>
          <div className="lg:w-64 mx-3 border border-slate-300 rounded-md">
            <div className="w-64 h-52 relative overflow-hidden rounded-md">
              <Image
                src="/images/mercedes.png"
                fill={true}
                // width={150}
                // height={100}
                alt="mercedes"
                className="object-cover"
              />
            </div>
            <p className="font-bold text-lg pb-2 pt-4  px-1">Toyota models</p>
            <p className="font-light text-sm px-1">56809 cars</p>
          </div>
          <div className="lg:w-64 mx-3 border border-slate-300 rounded-md">
            <div className="w-64 h-52 relative overflow-hidden">
              <Image
                src="/images/mercedes.png"
                fill={true}
                // width={150}
                // height={100}
                alt="mercedes"
                className="object-cover"
              />
            </div>
            <p className="font-bold text-lg pb-2 pt-4 px-1">Landcruisers</p>
            <p className="font-light text-sm px-1">56809 cars</p>
          </div>
        </div>
      </div>

      {/* find  car by model  */}
      <div className="lg:w-10/12 mx-auto">
        <h2 className="py-5">Find car by model</h2>
        <div className="lg:flex justify-between">
          <CarModelCard
            src="/images/Volvo.jpeg"
            alt="Volvo"
            model="Volvo"
            total="5,000"
          />
          <CarModelCard
            src="/images/Lexus .png"
            alt="Lexus"
            model="Lexus"
            total="7,500"
          />
          <CarModelCard
            src="/images/Hyundai-Tucson .png"
            alt="Hyundai Tucson"
            model="Hyundai Tucson"
            total="10,500"
          />
          <CarModelCard
            src="/images/land-rover.jpeg"
            alt="Land Rover"
            model="Land Rover"
            total="22,375"
          />
        </div>
      </div>

      {/* best selling models */}
      <div className="lg:w-10/12 mx-auto mt-5">
        <h2 className="py-5">Explore the best selling car makes</h2>
        <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2 mx-3 ">
          <div className="flex gap-5 border border-slate-300 rounded-md p-3 ">
            <Image
              src="/images/benz-logo.png"
              width={60}
              height={60}
              alt="Mercedes benz"
            />
            <div>
              <p>Mercedes Benz</p>
              <p>3000 available</p>
            </div>
          </div>
          <div className="flex gap-4 border border-slate-300 rounded-md p-3 ">
            <Image
              src="/images/volkswagen-logo.jpeg"
              width={60}
              height={60}
              alt="volkswagen"
            />
            <div>
              <p>Volkswagen</p>
              <p>7500 available</p>
            </div>
          </div>
          <div className="flex gap-4 border border-slate-300 rounded-md p-3 ">
            <Image
              src="/images/honda-logo.png"
              width={60}
              height={60}
              alt="Land Rover"
            />
            <div>
              <p>Honda</p>
              <p>11500 available</p>
            </div>
          </div>
          <div className="flex gap-4 border border-slate-300 rounded-md p-3 ">
            <Image
              src="/images/subaru-logo.png"
              width={60}
              height={60}
              alt="Subaru"
            />
            <div>
              <p>Subaru</p>
              <p>10500 available</p>
            </div>
          </div>
          <div className="flex gap-4 border border-slate-300 rounded-md p-3 ">
            <Image
              src="/images/toyota-logo.png"
              width={60}
              height={60}
              alt="Toyota"
            />
            <div>
              <p>Toyota</p>
              <p>10500 available</p>
            </div>
          </div>
          <div className="flex gap-4 border border-slate-300 rounded-md p-3 ">
            <Image
              src="/images/toyota-logo.png"
              width={60}
              height={60}
              alt="Toyota"
            />
            <div>
              <p>Lexus</p>
              <p>10500 available</p>
            </div>
          </div>
        </div>
      </div>

      {/* reviews */}
      <div className="lg:w-10/12 mx-auto my-5">
        <h2 className="py-7">Reviews</h2>
        <div className="grid lg:grid-cols-3 gap-5">
          <div className="flex border border-slate-300">
            <Image src={Volvo} alt="Volvo" />
          </div>
          <div className="flex border border-slate-300">2</div>
          <div className="flex border border-slate-300">3</div>
        </div>
      </div>
    </main>
  );
}
