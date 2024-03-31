
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default async function Home(){
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Create, Join & Explore Events....
            </h1>
            <p className="p-regular-20 md:p-regular-24">
             One stop solution to create and join different events..
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="/explore">Explore Events</Link>
            </Button>
          </div>

          <Image
            src="/assets/images/Ev.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center  rounded-lg"
          />
        </div>
      </section>
    </>
  );
}
