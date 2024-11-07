import { Metadata } from "next";
import CareerData from "./careerMapData"


export const metadata: Metadata = {
    title: "Sharpsys",
    description: "Sharpsys - Elevate your Business Productivity"
};

export default function CareersPage() {
    return (
        <>
            <section className="pb-10 pt-24 md:pb-20 md:pt-28 lg:pb-14 lg:pt-32">
                <div className="container mx-auto">
                    <h2 className="mx-auto mb-2 text-3xl text-center font-bold text-black dark:text-black md:w-4/5 xl:w-1/2 xl:text-sectiontitle3">
                        A proficient team with extensive knowledge
                    </h2>
                </div>
            </section>


            <section className="bg-white py-1 mb-8">
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                    <div className="flex flex-wrap justify-center gap-4 lg:gap-32.5">
                        <div className="animate_top text-center">
                            <h3 className="text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">50+</h3>
                            <p className="text-lg lg:text-para2">Employees</p></div>
                        <div className="animate_top text-center">
                            <h3 className="text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">10+</h3>
                            <p className="text-lg lg:text-para2">Locations</p></div>
                        <div className="animate_top text-center">
                            <h3 className="text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">15+</h3>
                            <p className="text-lg lg:text-para2">Finished Projects</p></div>
                        <div className="animate_top text-center">
                            <h3 className="text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">100+</h3>
                            <p className="text-lg lg:text-para2">Client across world</p>
                        </div>
                        <div className="animate_top text-center">
                            <h3 className="text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">11+</h3>
                            <p className="text-lg lg:text-para2">Domain Expert</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-16 pt-30 bg-[#0B0A0A] mb-4 md:pb-40 md:pt-28 lg:pb-30 lg:pt-32">
                <div className="container mx-auto">
                    <h1 className="mx-auto mb-2 text-4xl font-bold text-white text-center xl:text-sectiontitle3">
                        Perks & Benefits at Sharpsys
                    </h1>

                </div>
            </section>

            <section className="bg-white mt-4 mb-4">
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-3">
                    <h3 className="mb-1 text-3xl font-bold tracking-tight text-black dark:text-black">Explore your dream career opportunities</h3>
                </div>
            </section>
            {CareerData.map((c) => (
                <section className="bg-white mb-4">
                    <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-3">
                        <h5 className="mb-1 text-xl font-bold tracking-tight text-black dark:text-black">{c.title}</h5>
                        <div className="relative overflow-x-auto">
                            <table className="min-w-full table-fixed text-sm border text-left rtl:text-right">
                                <thead className="text-xs">
                                    <tr>
                                        <th scope="col" className="px-6 py-1 whitespace-nowrap">
                                            {c.heading.positiontitle}
                                        </th>
                                        <th scope="col" className="px-6 py-1 whitespace-nowrap">
                                            {c.heading.locationtitle}
                                        </th>
                                        <th scope="col" className="px-6 py-1">
                                            {c.heading.noofopeningstitle}
                                        </th>
                                        <th scope="col" className="px-6 py-1">
                                            {c.heading.jobtypetitle}
                                        </th>
                                        <th scope="col" className="px-6 py-1 w-9"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white text-black dark:text-black">
                                        <td className="px-6 py-1 font-medium whitespace-nowrap w-96">
                                            {c.job.position}
                                        </td>
                                        <td className="px-6 py-1">
                                            {c.job.location}
                                        </td>
                                        <td className="px-6 py-1">
                                            {c.job.noofopenings}
                                        </td>
                                        <td className="px-6 py-1">
                                            {c.job.jobtype}
                                        </td>
                                        <td className="px-6 py-1 w-9">
                                            <button type="button" className="focus:outline-none text-white buttoncolor-bg font-small rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                                                Apply
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </section>
            ))}
        </>
    );
}