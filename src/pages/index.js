import Layout from "@/components/Layout";
import Webinar from "./webinar";
import { useEffect, useState } from "react";

export default function Home() {
  const [webinarCardData, setWebinarCardData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://trading.work.gd/webinars/Identifying%20Momentum%20Stocks%20Using%20Data%20&%20Multi-Time%20Frame%20Analysis/"
    )
      .then((res) => res.json())
      .then((json) => {
        setIsLoading(false);
        setWebinarCardData(json);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, []);

  return (
    <>
      {!isLoading && (
        <Layout>
          <Webinar webinarCardData={webinarCardData} />
        </Layout>
      )}
    </>
  );
}
