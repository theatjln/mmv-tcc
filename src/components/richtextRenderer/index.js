import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

export default function RichtextRenderer({ children }) {
  /* code - render contentful rich text  */
  const H4 = ({ children }) => (
    <>
      <h4 className="text-xl md:text-3xl text-indigo-700">{children}</h4>
      <br />
    </>
  );

  const P = ({ children }) => (
    <>
      <p className="text-sm md:text-base">{children}</p>
      <br />
    </>
  );

  const MYLINK = ({ children }) => (
    <a className="text-indigo-800 hover:cursor-pointer hover:text-indigo-500 font-extrabold">
      {children}
    </a>
  );

  const options = {
    renderNode: {
      [BLOCKS.HEADING_4]: (node, children) => <H4>{children}</H4>,
      [BLOCKS.PARAGRAPH]: (node, children) => <P>{children}</P>,
      [INLINES.HYPERLINK]: (node, children) => <MYLINK>{children}</MYLINK>,
    },
  };

  const text = documentToReactComponents(children, options);

  return <div>{text}</div>;
}
