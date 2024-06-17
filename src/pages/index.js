import AnimatedNumber from "@/compornents/AnimatedNumber";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Animation Number App</title>
        <meta name="description" content="Create Animation Number App" />
      </Head>
      <main className="text-center text-dark w-full h-[70vh] p-16 sm:p-8">
        <h1 className="text-6xl font-bold pb-24 sm:text-4xl sm:pb-8">
          Animated Number
        </h1>

        <div className="flex justify-between items-center mx-auto max-w-[639px]">
          <div className="flex flex-col justify-center">
            <AnimatedNumber value={40} />
            <h2 className="text-3xl font-medium capitalize sm:text-xl">
              clients
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <AnimatedNumber value={30} />
            <h2 className="text-3xl font-medium capitalize  sm:text-xl">
              Project
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <AnimatedNumber value={7} />
            <h2 className="text-3xl font-medium capitalize  sm:text-xl">
              years
            </h2>
          </div>
        </div>
      </main>
    </>
  );
}
