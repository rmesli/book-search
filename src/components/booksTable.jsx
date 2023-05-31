import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";

const BooksTable = ({ books }) => {
  const columns = [
    {
      label: "Thumbnail",
      path: "volumeInfo.imageLinks.thumbnail",
      content: ({ volumeInfo }) => (
        <img
          src={volumeInfo.imageLinks?.thumbnail}
          className="img-thumbnail"
          alt=""
        />
      ),
    },
    { label: "Titre", path: "volumeInfo.title" },
    {
      label: "Auteur(s)",
      path: "volumeInfo.authors",
      content: ({ volumeInfo }) => volumeInfo.authors?.join(", "),
    },
    {
      label: "Prix",
      path: "saleInfo.listPrice.amount",
      content: ({ saleInfo }) => getPriceContent(saleInfo),
    },
    {
      label: "Lien",
      path: "saleInfo.buyLink",
      content: ({ saleInfo }) => getLinkContent(saleInfo),
    },
  ];
  const getPriceContent = (saleInfo) => {
    return saleInfo?.saleability === "FOR_SALE"
      ? `${saleInfo.listPrice.amount}$`
      : "";
  };
  const getLinkContent = (saleInfo) => {
    return saleInfo?.saleability === "FOR_SALE" ? (
      <p>
        <a
          className="link-opacity-100"
          href={saleInfo.buyLink}
          rel="noreferrer"
          target="_blank"
        >
          Acheter
        </a>
      </p>
    ) : (
      ""
    );
  };
  return (
    <table className="table">
      <TableHeader columns={columns} />
      <TableBody columns={columns} data={books} />
    </table>
  );
};
export default BooksTable;
