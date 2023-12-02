import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DonationForm from "@/components/user/DonationForm";
import PetCarousel from "@/components/user/PetCarousel";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black">
      <div className="relative">
        <Image src={"/images/dog.jpg"} width={1899} height={975} alt="dog" />
      </div>
      <div className="hidden lg:flex h-[48.7rem] absolute top-[8.5rem] w-[700px] right-0 bg-black/40">
        <div className="text-white mt-[18rem] ml-[13rem] text-[5rem] font-semibold">
          <h2>Pet</h2>
          <h2 className="-mt-7">Adoptation</h2>
          <h2 className="-mt-5">Website</h2>
        </div>
      </div>
      <div className="text-white mt-10  p-3 lg:p-0">
        <h2 className="text-3xl font-medium text-center">Subscribe Form</h2>
        <div className="lg:mx-[30rem] mt-5 lg:flex ">
          <Input type="text" className="bg-black border-white rounded-none" />
          <Button className="bg-white text-black rounded-none -ml-3 w-36 text-xl h-[3rem] mt-2 lg:-mt-1 mx-20 lg:mx-0">
            Join
          </Button>
        </div>
      </div>
      <div className="mt-[10rem] text-white ">
        <h2 className="text-center text-4xl font-bold ">About Us</h2>
        <p className="lg:text-center lg:w-[55rem] lg:ml-[25%] mt-5 text-base p-3 lg:p-0">
          Here at Pet Adoption Website, we are driven to do our part in making
          the world a better place. Since 2000, we have taken part in a wide
          range of activities that empower individuals and communities. We
          strive to build productive relationships and make a positive impact
          with all of our pursuits. Are you ready to join us and create real
          transformation in the lives of so many?
        </p>
      </div>
      <div className="mt-10 bg-black">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          doloremque illo at ea aspernatur, necessitatibus rerum amet debitis ex
          asperiores laudantium! Consequuntur odio perspiciatis nisi saepe
        </p>
      </div>
      <div>
        <PetCarousel />
      </div>
      <div className="mt-[10rem] text-white ">
        <h2 className="text-center text-4xl font-bold ">What we do</h2>
        <p className="text-center  text-base -ml-[20px] mt-3">
          Meaningful work
        </p>
      </div>
      <div className="mt-[10rem] text-white ">
        <h2 className="text-center text-4xl font-bold ">Donate</h2>
        <p className="lg:text-center lg:w-[55rem] lg:ml-[25%] mt-5 text-base p-3 lg:p-0">
          This is your donation form. Encourage your site visitors to make a
          donation today by providing additional information about your
          organization, or how their contribution can best help achieve your
          goals.
        </p>
      </div>
      <div>
        <DonationForm />
      </div>
    </main>
  );
}
