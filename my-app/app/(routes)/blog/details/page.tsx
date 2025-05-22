"use client";

import React, { Suspense, useCallback, useEffect, useState } from "react";
import { notFound, useSearchParams } from "next/navigation";

// COMPONENTS
import Paragraph from "@/app/components/paragraph";

// STATICS
import { Article } from "@/app/statics/interfaces";
import { articleList } from "@/app/statics/constants/articleList";
import { interceptFetchData } from "@/app/statics/utils";

// STYLES
import "../../(info)/info.scss";

export default function BlogPage() {
  const DetailsWrapper = () => {
    const [articleDetails, setArticleDetails] = useState<
      Article | null | undefined
    >(null);
    const searchParams = useSearchParams();
    const articleID = searchParams.get("id");

    const fetchArticleDetails = useCallback(async () => {
      const response = await interceptFetchData<Article[]>(articleList);
      if (articleID == null) return;
      if (parseInt(articleID) > 0 && response.length >= parseInt(articleID)) {
        setArticleDetails(response[parseInt(articleID) - 1]);
      } else {
        setArticleDetails(undefined);
      }
    }, []);

    useEffect(() => {
      if (articleID) {
        fetchArticleDetails();
      }
    }, [articleID]);

    return (
      <>
        {articleDetails === undefined && notFound()}
        {articleDetails && (
          <Paragraph title="BLOG" subtitle={articleDetails!.title}>
            <p>{articleDetails.preview}</p>
          </Paragraph>
        )}
      </>
    );
  };

  return (
    <div className="info-page">
      <Suspense>
        <DetailsWrapper />
      </Suspense>
    </div>
  );
}
