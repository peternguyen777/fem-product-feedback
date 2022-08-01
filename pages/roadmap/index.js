import data from "../../public/data.json"; //import json data
import React, { useMemo, useState } from "react";
import Head from "next/head";
import Header from "../../components/roadmap/Header";
import ProgressBar from "../../components/roadmap/ProgressBar";
import { capitalizeFirstLetter } from "../../components/utils/capitalize";
import CardRoadmap from "../../components/UI/CardRoadmap";

function Roadmap() {
  const [filterRoadmap, setFilterRoadmap] = useState("In-Progress");
  const [reqPlanned, setReqPlanned] = useState([]);
  const [reqProgress, setReqProgress] = useState([]);
  const [reqLive, setReqLive] = useState([]);

  useMemo(() => {
    const requests = data.productRequests;
    const planned = requests.filter((item) => item.status === "planned");
    const progress = requests.filter((item) => item.status === "in-progress");
    const live = requests.filter((item) => item.status === "live");
    setReqPlanned(planned);
    setReqProgress(progress);
    setReqLive(live);
  }, [data]);

  console.log(data.productRequests);

  return (
    <div className='flex flex-col lg:mx-auto lg:max-w-[1180px]'>
      <Head>
        <title>Product Feedback - Roadmap</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/assets/favicon-32x32.png' />
      </Head>
      <Header />
      <ProgressBar
        filterRoadmap={filterRoadmap}
        setFilterRoadmap={setFilterRoadmap}
        reqPlanned={reqPlanned}
        reqProgress={reqProgress}
        reqLive={reqLive}
      />

      <section className='mx-6 md:hidden'>
        <div className='my-6'>
          <h3 className='mb-1 text-lightnavy'>
            {capitalizeFirstLetter(filterRoadmap)} (
            {filterRoadmap === "In-Progress" && reqProgress.length}
            {filterRoadmap === "Planned" && reqPlanned.length}
            {filterRoadmap === "Live" && reqLive.length})
          </h3>
          <p className='body3 font-normal text-gray'>
            {filterRoadmap === "In-Progress" && `Currently being developed`}
            {filterRoadmap === "Planned" && `Ideas prioritzed for research`}
            {filterRoadmap === "Live" && `Released features`}
          </p>
        </div>
        <ul className='mb-[98px] space-y-4'>
          {filterRoadmap === "Planned" &&
            reqPlanned.map((item, i) => (
              <CardRoadmap
                key={i}
                itemData={item}
                filterRoadmap={filterRoadmap}
              />
            ))}
          {filterRoadmap === "In-Progress" &&
            reqProgress.map((item, i) => (
              <CardRoadmap
                key={i}
                itemData={item}
                filterRoadmap={filterRoadmap}
              />
            ))}
          {filterRoadmap === "Live" &&
            reqLive.map((item, i) => (
              <CardRoadmap
                key={i}
                itemData={item}
                filterRoadmap={filterRoadmap}
              />
            ))}
        </ul>
      </section>

      <section className='mx-10 mt-8 mb-[95px] hidden grid-cols-3 gap-x-[10px] md:grid lg:mt-12 lg:mb-[180px] lg:gap-x-[30px]'>
        <div>
          <h4 className='mb-1 text-lightnavy lg:hidden'>
            Planned ({reqPlanned.length})
          </h4>
          <h3 className='mb-1 hidden text-lightnavy lg:block'>
            Planned ({reqPlanned.length})
          </h3>
          <h4 className='font-normal text-gray lg:hidden'>
            Ideas prioritized for research
          </h4>
          <p className='body1 hidden text-gray lg:block'>
            Ideas prioritized for research
          </p>
          <ul className='mt-6 space-y-4 lg:mt-8 lg:space-y-6'>
            {reqPlanned.map((item, i) => (
              <CardRoadmap key={i} itemData={item} filterRoadmap='Planned' />
            ))}
          </ul>
        </div>
        <div>
          <h4 className='mb-1 text-lightnavy lg:hidden'>
            In-Progress ({reqProgress.length})
          </h4>
          <h3 className='mb-1 hidden text-lightnavy lg:block'>
            In-Progress ({reqProgress.length})
          </h3>
          <h4 className='font-normal text-gray lg:hidden'>
            Currently being developed
          </h4>
          <p className='body1 hidden text-gray lg:block'>
            Currently being developed
          </p>
          <ul className='mt-6 space-y-4 lg:mt-8 lg:space-y-6'>
            {reqProgress.map((item, i) => (
              <CardRoadmap
                key={i}
                itemData={item}
                filterRoadmap='In-Progress'
              />
            ))}
          </ul>
        </div>
        <div>
          <h4 className='mb-1 text-lightnavy lg:hidden'>
            Live ({reqLive.length})
          </h4>
          <h3 className='mb-1 hidden text-lightnavy lg:block'>
            Live ({reqLive.length})
          </h3>
          <h4 className='font-normal text-gray lg:hidden'>Released features</h4>
          <p className='body1 hidden text-gray lg:block'>Released features</p>
          <ul className='mt-6 space-y-4 lg:mt-8 lg:space-y-6'>
            {reqLive.map((item, i) => (
              <CardRoadmap key={i} itemData={item} filterRoadmap='Live' />
            ))}
          </ul>
        </div>
      </section>

      {/* <section className='mx-10 mt-8  hidden grid-cols-3 gap-x-[10px] md:grid lg:mt-12  lg:gap-x-[30px]'>
        <div>
          <h4 className='mb-1 text-lightnavy lg:hidden'>
            Planned ({reqPlanned.length})
          </h4>
          <h3 className='mb-1 hidden text-lightnavy lg:block'>
            Planned ({reqPlanned.length})
          </h3>
          <h4 className='font-normal text-gray lg:hidden'>
            Ideas prioritized for research
          </h4>
          <p className='body1 hidden text-gray lg:block'>
            Ideas prioritized for research
          </p>
        </div>
        <div>
          <h4 className='mb-1 text-lightnavy lg:hidden'>
            In-Progress ({reqProgress.length})
          </h4>
          <h3 className='mb-1 hidden text-lightnavy lg:block'>
            In-Progress ({reqProgress.length})
          </h3>
          <h4 className='font-normal text-gray lg:hidden'>
            Currently being developed
          </h4>
          <p className='body1 hidden text-gray lg:block'>
            Currently being developed
          </p>
        </div>
        <div>
          <h4 className='mb-1 text-lightnavy lg:hidden'>
            Live ({reqLive.length})
          </h4>
          <h3 className='mb-1 hidden text-lightnavy lg:block'>
            Live ({reqLive.length})
          </h3>
          <h4 className='font-normal text-gray lg:hidden'>Released features</h4>
          <p className='body1 hidden text-gray lg:block'>Released features</p>
        </div>
      </section> */}

      {/* <ul className='md:grid-auto-rows mx-10 mt-6 mb-[95px] hidden md:grid md:grid-cols-3 md:gap-x-[10px] md:gap-y-4 lg:mt-8 lg:mb-[180px] lg:gap-x-[30px] lg:gap-y-6'>
        {reqPlanned.map((item, i) => (
          <CardRoadmap key={i} itemData={item} filterRoadmap='Planned' />
        ))}

        {reqProgress.map((item, i) => (
          <CardRoadmap key={i} itemData={item} filterRoadmap='In-Progress' />
        ))}

        {reqLive.map((item, i) => (
          <CardRoadmap key={i} itemData={item} filterRoadmap='Live' />
        ))}
      </ul> */}

      {/* <section className='mx-10 mt-6 mb-[95px] hidden md:grid md:grid-cols-3 md:space-x-[10px] lg:mt-8 lg:mb-[180px]  lg:space-x-[30px]'>
        <ul className='md:space-y-4 lg:space-y-6'>
          {reqPlanned.map((item, i) => (
            <CardRoadmap key={i} itemData={item} filterRoadmap='Planned' />
          ))}
        </ul>
        <ul className='md:space-y-4 lg:space-y-6'>
          {reqProgress.map((item, i) => (
            <CardRoadmap key={i} itemData={item} filterRoadmap='In-Progress' />
          ))}
        </ul>
        <ul className='md:space-y-4 lg:space-y-6'>
          {reqLive.map((item, i) => (
            <CardRoadmap key={i} itemData={item} filterRoadmap='Live' />
          ))}
        </ul>
      </section> */}
    </div>
  );
}

export default Roadmap;
