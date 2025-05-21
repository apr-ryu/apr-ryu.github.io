"use client";

import React, { Suspense, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

// COMPONENTS
import Paragraph from "@/app/components/paragraph";

// STATICS
import { Article } from "@/app/statics/interfaces";
import { articleList } from "@/app/statics/constants/articleList";
import { interceptFetchData } from "@/app/statics/utils";

//STYLE
import "../../(info)/info.scss";

export default function BlogPage() {
  const DetailsWrapper = () => {
    const [articleDetails, setArticleDetails] = useState<Article | null>(null);
    const searchParams = useSearchParams();
    const articleID = searchParams.get("id");

    const fetchArticleDetails = useCallback(async () => {
      const response = await interceptFetchData<Article[]>(articleList);
      if (articleID == null) return;
      setArticleDetails(response[parseInt(articleID) - 1]);
    }, []);

    useEffect(() => {
      if (articleID) {
        fetchArticleDetails();
      }
    }, [articleID]);

    return (
      <>
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
