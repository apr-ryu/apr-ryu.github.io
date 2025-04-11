import Paragraph from "./components/paragraph";

//STYLE
import "./(routes)/(info)/info.scss";

export default function NotFoundPage() {
  return (
    <div className="info-page">
      <Paragraph title="ERROR" subtitle="404">
        <p className="article-contents-title">Oops, page not found.</p>
      </Paragraph>
    </div>
  );
}
