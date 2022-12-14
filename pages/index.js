import React, { useState, useMemo, useEffect } from "react";
import Head from "next/head";
import MobileHeader from "../components/suggestions/MobileHeader";
import MobileMenu from "../components/suggestions/MobileMenu";
import SortBar from "../components/suggestions/SortBar";
import CardSuggestions from "../components/UI/CardSuggestions";
import NoFeedback from "../components/suggestions/NoFeedback";
import { sortRequests } from "../components/utils/sort";
import DesktopTabletHeader from "../components/suggestions/DesktopTabletHeader";

import { useQuery } from "@apollo/client";
import { GET_ALL_FEEDBACK } from "../graphql/queries";
import LoadingSpinner from "../components/UI/LoadingSpinner";

export default function Home() {
  const [mobMenuOpen, setMobMenuOpen] = useState(false);
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  const [filterSelect, setFilterSelect] = useState("Most Upvotes");
  const [categorySelect, setCategorySelect] = useState("all");
  const [roadmapCount, setRoadmapCount] = useState();

  const { data, error, loading } = useQuery(GET_ALL_FEEDBACK);
  var dataFeedback = data?.getFeedbackList;

  const sortedRequests = useMemo(() => {
    const input = dataFeedback;
    return sortRequests(input, filterSelect, categorySelect);
  }, [dataFeedback, filterSelect, categorySelect]);

  useEffect(() => {
    var countPlanned =
      dataFeedback?.filter((item) => item.status === "planned").length || "-";
    var countProgress =
      dataFeedback?.filter((item) => item.status === "in-progress").length ||
      "-";
    var countLive =
      dataFeedback?.filter((item) => item.status === "live").length || "-";

    setRoadmapCount({
      countPlanned,
      countProgress,
      countLive,
    });
  }, [setRoadmapCount, data]);

  return (
    <div className='flex flex-col lg:mx-auto lg:max-w-[1190px] lg:px-10'>
      <Head>
        <title>Product Feedback</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/assets/favicon-32x32.png' />
      </Head>

      <MobileMenu
        mobMenuOpen={mobMenuOpen}
        setMobMenuOpen={setMobMenuOpen}
        categorySelect={categorySelect}
        setCategorySelect={setCategorySelect}
        roadmapCount={roadmapCount}
      />

      <MobileHeader mobMenuOpen={mobMenuOpen} setMobMenuOpen={setMobMenuOpen} />

      <div className='lg:mt-[94px] lg:flex '>
        <DesktopTabletHeader
          mobMenuOpen={mobMenuOpen}
          setMobMenuOpen={setMobMenuOpen}
          categorySelect={categorySelect}
          setCategorySelect={setCategorySelect}
          roadmapCount={roadmapCount}
        />
        <div className='lg:inline-block lg:flex-1'>
          <SortBar
            filterMenuOpen={filterMenuOpen}
            setFilterMenuOpen={setFilterMenuOpen}
            filterSelect={filterSelect}
            setFilterSelect={setFilterSelect}
            sortedRequests={sortedRequests}
          />

          <main className='' onClick={() => setFilterMenuOpen(false)}>
            {loading ? (
              <div className='mt-[106px] flex justify-center md:mt-[84px] lg:mt-[84px]'>
                <LoadingSpinner />
              </div>
            ) : (
              <ul className='mx-6 mt-8 mb-14 space-y-4 md:mx-10 md:mt-6 md:mb-[120px] lg:mx-0 lg:mt-6 lg:max-w-[825px] lg:space-y-5'>
                {sortedRequests?.length === 0 ? (
                  <NoFeedback />
                ) : (
                  sortedRequests?.map((product) => (
                    <li key={product?.id}>
                      <CardSuggestions productData={product} />
                    </li>
                  ))
                )}
              </ul>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
