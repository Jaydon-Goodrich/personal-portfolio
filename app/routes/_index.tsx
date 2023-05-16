import type { V2_MetaFunction } from "@remix-run/cloudflare";
import constructionImage from '../../public/construction.jpeg'
export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <div>
      <img src={constructionImage} width="100%" style={{maxHeight: '97vh'}}></img>
    </div>
  );
}
